import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, AlertController } from 'ionic-angular';
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

@Component({
  templateUrl: 'app.html',
  providers: [ObraService, ChecklistService, AlteracaoService]
})

export class MyApp {
  rootPage: string = "LoginPage";
  @ViewChild(Nav) nav: Nav;
  pages: any;
  params: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    public menu: MenuController,
    public loadingService: LoadingService,
    public messageService: MessageService,
    public storage: Storage,
    public obraService: ObraService,
    public alteracaoService: AlteracaoService,
    public alertCtrl: AlertController,
    public checklistService: ChecklistService,
    public network: Network,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      statusBar.backgroundColorByHexString('rgb(33,177,75)');
      this.definirRoot();
    });

    this.pages = [
      { "title": "Home", "icon": "home", "component": "HomePage" },
      { "title": "Baixar dados", "icon": "cloud-download", "component": "Baixar" },
      { "title": "Listar alterações", "icon": "list", "component": "AlteracoesPage" },
      { "title": "Publicar alterações", "icon": "cloud-upload", "component": "Subir" },
      { "title": "Descartar alterações", "icon": "trash", "component": "Descartar" },
      { "title": "Checklist de área", "icon": "checkmark-circle-outline", "component": "ObraPage" },
      { "title": "Sair", "icon": "exit", "component": "LoginPage" },
    ];

    this.params = {
      "background": "assets/images/background/5.jpg",
      "image": "assets/images/logo/logo.png"
    };
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

  openPage(page) {
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
                this.deslogar();
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
            this.obterChecklistServico();
            this.obterObras();
          }
        }
      );
    });
  }

  subirDados() {
    this.storage.ready().then(() => {
      this.storage.get('atualizacoes').then(
        atualizacoes => {
          if (atualizacoes) {
            this.atualizarRepositorio(atualizacoes);
          } else {
            this.messageService.exibirMensagem("Não há nada para publicar.");
          }
        }
      );
    });
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
    this.storage.ready().then(() => {
      this.storage.get('obrasBackup').then(
        obrasBackup => {
          this.storage.set('obras', obrasBackup);
          this.nav.setRoot("HomePage");
        }
      );
    });
  }

  obterObras() {
    this.loadingService.show();
    this.obraService.obterTodas().subscribe(
      data => {
        this.storage.set('obras', data);
        this.storage.set('obrasBackup', data);
        this.storage.set('ultimoDownload', new Date());
        this.loadingService.hide();
        this.nav.setRoot("HomePage");
      },
      error => {
        this.loadingService.hide();
        this.messageService.exibirMensagem("Falha na comunicação com o servidor, contate o suporte.");
      }
    );
  }

  obterChecklistServico() {
    this.checklistService.obterTodas().subscribe(
      data => {
        this.storage.set('itensChecklist', data);
      },
      error => {
        this.messageService.exibirMensagem("Falha na comunicação com o servidor, contate o suporte.");
      }
    );
  }

  atualizarRepositorio(atualizacoes: Alteracao[]) {
    this.loadingService.show();
    this.alteracaoService.publicar(atualizacoes).subscribe(
      data => {
        this.storage.set('ultimoUpload', new Date());
        this.storage.remove('atualizacoes');
        this.nav.setRoot("HomePage");
        this.loadingService.hide();
        this.obterObras();
        this.messageService.exibirMensagem("Atualizações publicadas com sucesso.");
      },
      error => {
        this.loadingService.hide();
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

