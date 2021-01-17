import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, AlertController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { MessageService } from '../utils/message-service';
import { LoadingService } from '../utils/loading-service';
import { ObraService } from '../services/obra.service';
import { Storage } from '@ionic/storage';
import { ChecklistService } from '../services/checklist.service';
import { AlteracaoService } from '../services/alteracao.service';
import { Alteracao } from '../models/alteracao';
import { Obra } from '../models/obra';
import { FuncionarioService } from '../services/funcionario.service';
import { StorageServiceUtils } from '../utils/storage-service-utils';
import { FornecedorService } from '../services/fornecedor.service';

@Component({
  templateUrl: 'app.html',
  providers: [ObraService, ChecklistService, AlteracaoService, FuncionarioService, FornecedorService]
})

export class MyApp {
  rootPage: string = "LoginPage";
  @ViewChild(Nav) nav: Nav;
  pages: any;
  params: any;
  atualizacao: boolean = false;
  statusAtualizacao: string = "";
  idsObraComProblea: number[] = [];

  static progress: number = 0;
  static progressbarAtivo: boolean = false;
  static segundos: number = 0;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    public menu: MenuController,
    public loadingService: LoadingService,
    public storageServiceUtils: StorageServiceUtils,
    public messageService: MessageService,
    public storage: Storage,
    public obraService: ObraService,
    public alteracaoService: AlteracaoService,
    public funcionarioService: FuncionarioService,
    public fornecedorService: FornecedorService,
    public alertCtrl: AlertController,
    public checklistService: ChecklistService,
    public network: Network,
    public events: Events,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      statusBar.backgroundColorByHexString('rgb(33,177,75)');
      this.definirRoot();
      this.definirEventoMenu();
    });

    this.pages = [
      { "title": "Home", "icon": "home", "component": "HomePage" },
      { "title": "Baixar dados", "icon": "cloud-download", "component": "Baixar" },
      { "title": "Listar alterações", "icon": "list", "component": "AlteracoesPage" },
      { "title": "Publicar alterações", "icon": "cloud-upload", "component": "Subir" },
      { "title": "Descartar alterações", "icon": "trash", "component": "Descartar" },
      { "title": "Cadastrar Checklist", "icon": "checkmark-circle-outline", "component": "ChecklistPage" },
      { "title": "Acesso às obras", "icon": "build", "component": "ObraPage" },
      { "title": "Sair", "icon": "exit", "component": "LoginPage" },
    ];

    this.params = {
      "background": "assets/images/background/5.jpg",
      "image": "assets/images/logo/logo.png"
    };
  }

  definirEventoMenu() {
    this.events.subscribe('openPage', (page) => {
      this.openPage(page);
    });
  }

  definirRoot() {
    this.storage.ready().then(() => {
      this.storage.get('Usuario').then(
        usuario => {
          if (usuario) {
            localStorage.setItem('isLogged', 'true');
            localStorage.setItem("Usuario", usuario);
            this.storage.get('BancoSchema').then(
              empresa => {
                localStorage.setItem("BanchoSchema", empresa);
              }
            );
            this.rootPage = "HomePage";
          } else {
            this.rootPage = "LoginPage";
          }
        }
      );
    });
  }

  public openPage(page) {
    if (page.component != "") {

      if (page.component == 'Baixar') {
        if (this.network.type === 'none') {
          this.messageService.exibirMensagem("Você precisa de uma conexão com internet para obter os dados e poder então trabalhar offline.");
        } else {
          this.baixarDados();
        }
      } else if (page.component == 'Subir') {
        if (this.network.type === 'none') {
          this.messageService.exibirMensagem("Você precisa de uma conexão com internet para subir os dados trabalhados offline.");
        } else {
          this.subirDados();
        }
      } else if (page.component == 'Descartar') {
        this.descartarDados();
      } else if (page.component == 'LoginPage') {
        this.storage.ready().then(() => {
          this.storage.get('atualizacoes').then(
            atualizacoes => {
              if (atualizacoes) {
                this.messageService.exibirMensagemConfirmacao("Existem atualizações que não foram publicadas, ao sair da sua conta elas serão perdidas. Deseja sair mesmo assim?", () => { this.deslogar() });
              } else {
                this.messageService.exibirMensagemConfirmacao("Deseja realmente se deslogar?", () => { this.deslogar() });
              }
            }
          );
        });
      } else {
        this.nav.setRoot(page.component);
      }
    }
  }

  deslogar() {
    localStorage.clear();
    this.storage.clear();
    this.nav.setRoot("LoginPage");
  }

  baixarDados() {
    this.storage.ready().then(() => {
      this.storage.get('atualizacoes').then(
        atualizacoes => {
          if (atualizacoes) {
            this.messageService.exibirMensagem("Existem atualizações que não foram publicadas, publique-as ou descarte-as antes de baixar novos dados.");
          } else {
            this.nav.setRoot("HomePage");
            this.obterChecklistServico();
            this.obterFuncionarios();
            this.obterFornecedores();
            this.atualizacao = false;
            this.obterObras();
          }
        }
      );
    });
  }

  async subirDados() {
    await this.storage.ready();
    let atualizacoes = await this.storage.get('atualizacoes');
    if (atualizacoes) {
      this.confirmarAtualizarRepositorio(atualizacoes);
    } else {
      this.messageService.exibirMensagem("Não há nada para publicar.");
    }
  }

  descartarDados() {
    this.storage.ready().then(() => {
      this.storage.get('atualizacoes').then(
        atualizacoes => {
          if (atualizacoes) {
            this.confirmarDescartarDados();
          } else {
            this.messageService.exibirMensagem("Não há nada para descartar.");
          }
        }
      );
    });
  }

  confirmarDescartarDados() {
    let mensagem = "Todas as alterações feitas desde a última publicação serão perdidas. Deseja realmente descartá-las?";
    this.messageService.exibirMensagemConfirmacao(mensagem, () => { this.executarDescartarDados() });
  }

  executarDescartarDados() {
    this.storage.remove('atualizacoes');
    this.loadingService.show();
    this.storageServiceUtils.montarObraBackup();
    this.nav.setRoot("HomePage");
    this.loadingService.hide();
  }

  obterObras() {
    this.loadingService.show();
    this.idsObraComProblea = [];
    MyApp.progressbarAtivo = true;
    MyApp.progress = 0;
    MyApp.segundos = 0;
    this.controlarSegundos();
    this.subirProgressAutomatico();
    this.subirProgressObterIds();
    this.obraService.obterIdsTodasAtivas().subscribe(
      idsObra => {
        if (idsObra.length > 0) {
          this.obterObraCompleta(idsObra);
        } else {
          MyApp.progressbarAtivo = false;
          MyApp.progress = 0;
          this.loadingService.hide();
        }
      },
      error => {
        MyApp.progressbarAtivo = false;
        MyApp.progress = 0;
        this.loadingService.hide();
        this.messageService.exibirMensagem("Falha na comunicação com o servidor, contate o suporte.");
      }
    );
  }

  controlarSegundos() {
    let segundos = setInterval(() => {
      if (MyApp.progressbarAtivo) {
        MyApp.segundos += 1;
      } else {
        clearInterval(segundos);
      }
    }, 1100);
  }

  subirProgressAutomatico() {
    let obterIds = setInterval(() => {
      if (MyApp.progress < 50) {
        MyApp.progress += 0.2;
      } else if (MyApp.progress < 70) {
        MyApp.progress += 0.1;
      } else if (MyApp.progress < 99) {
        MyApp.progress += 0.05;
      } else {
        clearInterval(obterIds);
      }
    }, 500);
  }

  subirProgressObterIds() {
    let obterIds = setInterval(() => {
      if (MyApp.progress < 15) {
        MyApp.progress += 1;
      } else {
        clearInterval(obterIds);
      }
    }, 300);
  }

  obterObraCompleta(idsObra: number[]) {
    let obras: Obra[] = [];
    let qtdErros: number = 0;
    this.subirProgressObraCompleta();
    idsObra.forEach(idObra => {
      this.obraService.obterObraCompleta(idObra).subscribe(
        obra => {
          obras.push(obra);
          this.setarValoresObras(obras, idsObra, qtdErros);
        },
        error => {
          qtdErros++;
          this.idsObraComProblea.push(idObra);
          this.setarValoresObras(obras, idsObra, qtdErros);
        }
      );
    });
  }

  subirProgressObraCompleta() {
    if (MyApp.progress == 15) {
      let obterIds = setInterval(() => {
        if (MyApp.progress < 40) {
          MyApp.progress += 1;
        } else {
          clearInterval(obterIds);
        }
      }, 300);
    }
  }

  setarValoresObras(obras: Obra[], idsObra: number[], qtdErros: number) {
    if ((obras.length + qtdErros) >= idsObra.length) {
      this.loadingService.hide();
      this.storageServiceUtils.armazenarObraNoStorage(obras, true);
      this.storage.set('ultimoDownload', new Date());
      this.nav.setRoot("HomePage");
      MyApp.progressbarAtivo = false;
      MyApp.progress = 0;
      if (this.statusAtualizacao == "") {
        if (qtdErros > 0) {
          if (this.atualizacao) {
            this.messageService.exibirMensagem("Atualizações publicadas com sucesso, porém houve um erro ao buscar as obras, tente novamente com uma internet melhor.");
          } else {
            this.messageService.exibirMensagem("Ocorreu erro durante a busca de algumas obras, tente novamente com usando uma internet melhor. Id das obras: "+this.idsObraComProblea.join(", "));
          }
        } else {
          if (this.atualizacao) {
            this.messageService.exibirMensagem("Atualizações publicadas com sucesso.");
          } else {
            this.messageService.exibirMensagem("Dados recuperados do servidor com sucesso.");
          }
        }
      } else {
        this.messageService.exibirMensagem("Algumas atualizações não foram realizadas: " + this.statusAtualizacao);
      }
      this.statusAtualizacao = "";
    } else {
      if (MyApp.progress + (60 / idsObra.length) < 75) {
        MyApp.progress += (60 / idsObra.length);
      }
    }
  }

  obterChecklistServico() {
    this.checklistService.obterTodas().subscribe(
      data => {
        this.storage.set('itensChecklist', data);
        this.storage.set('itensChecklistBackup', data);
      },
      error => {
        this.messageService.exibirMensagem("Falha na comunicação com o servidor ao buscar serviços, contate o suporte.");
      }
    );
  }

  obterFuncionarios() {
    this.funcionarioService.obterTodos().subscribe(
      data => {
        this.storage.set('funcionarios', data);
      },
      error => {
        this.messageService.exibirMensagem("Falha na comunicação com o servidor ao buscar funcionários, contate o suporte.");
      }
    );
  }

  obterFornecedores() {
    this.fornecedorService.obterTodos().subscribe(
      data => {
        this.storage.set('fornecedores', data);
      },
      error => {
        this.messageService.exibirMensagem("Falha na comunicação com o servidor ao buscar fornecedores, contate o suporte.");
      }
    );
  }

  confirmarAtualizarRepositorio(atualizacoes: Alteracao[]) {
    let mensagem = "Deseja atualizar o banco com as alterações realizadas?";
    this.messageService.exibirMensagemConfirmacao(mensagem, () => { this.atualizarRepositorio(atualizacoes) });
  }

  async atualizarRepositorio(atualizacoes: Alteracao[]) {
    this.loadingService.showSubida();
    this.alteracaoService.publicar(atualizacoes).subscribe(
      data => {
        this.storage.set('ultimoUpload', new Date());
        this.storage.remove('atualizacoes');
        this.nav.setRoot("HomePage");
        this.loadingService.hideSubida();
        this.atualizacao = true;
        this.statusAtualizacao = data;
        this.messageService.exibirMensagem("Atualizações realizadas com sucesso. Realize um novo download dos dados para atualizar o banco de dados do aparelho.");
        this.storageServiceUtils.montarObraBackup();
      },
      error => {
        this.loadingService.hideSubida();
        this.messageService.exibirMensagem("Falha na comunicação com o servidor, contate o suporte.");
      }
    );
  }

  get isLogged() {
    return localStorage.getItem('isLogged');
  }

  get empresa() {
    return localStorage.getItem('BancoSchema');
  }

  get usuario() {
    return localStorage.getItem('Usuario');
  }

}

