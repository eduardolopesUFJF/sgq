import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, ModalController, NavController, ActionSheetController } from 'ionic-angular';
import { Inspecao } from '../../../models/inspecao';
import { Funcionario } from '../../../models/funcionario';
import { Storage } from '@ionic/storage';
import { ToastService } from '../../../utils/toast-service';
import { ItemInspecao } from '../../../models/item-inspecao';
import { Servico } from '../../../models/servico';
import { IonicSelectableComponent } from 'ionic-selectable';

@IonicPage()
@Component({
    selector: 'page-realizar-verificacao',
    templateUrl: 'realizar-verificacao.html'
})

export class RealizarVerificacaoPage {

    inspecao: Inspecao = new Inspecao();
    exibirPorCentroCusto: boolean = true;
    servico: Servico = new Servico();
    descServico: string = '';
    funcionarios: Funcionario[] = [];
    funcionarioInspecionado: Funcionario = new Funcionario();
    funcionarioAprovado: Funcionario = new Funcionario();
    limpaNA1: boolean = false;
    limpaA1: boolean = false;
    limpaR1: boolean = false;
    limpaX1: boolean = false;
    limpaRA2: boolean = false;
    limpaX2: boolean = false;
    ultimoItem: ItemInspecao = new ItemInspecao();
    dataDescricao: Date;
    dataTratativa: Date;
    dataAbertura: string;
    dataEncerramento: string;

    constructor(
        public viewCtrl: ViewController,
        public storage: Storage,
        public actionSheetCtrl: ActionSheetController,
        public toastService: ToastService,
        public modalCtrl: ModalController,
        public navParams: NavParams,
        public navCtrl: NavController
    ) {
        this.descServico = this.navParams.data.descServico;
        this.servico = this.navParams.data.servico;
        this.inspecao = this.navParams.data.inspecao;
        this.tratarDatas();
        this.obterFuncionarios();
        this.popularFuncionarioVinculado();
    }

    tratarDatas() {
        if (this.inspecao.dataInspecao) {
            this.dataAbertura = this.inspecao.dataInspecao.toString().split("T")[0];
        }
        if (this.inspecao.dataEncerramento) {
            if (this.inspecao.dataEncerramento.toString().indexOf("GMT") == -1) {
                this.dataEncerramento = this.inspecao.dataEncerramento.toString().split("T")[0];
            } else {
                this.dataEncerramento = this.inspecao.dataEncerramento.toISOString().split("T")[0];
            }
        }
    }
    
    limparFuncionario(tipo: string) {
        if (tipo == 'inspecionado') {
            this.inspecao.idFuncionarioInspecionado = null;
            this.funcionarioInspecionado = null;
        } else if (tipo == 'aprovado') {
            this.inspecao.idFuncionarioAprovado = null;
            this.funcionarioAprovado = null;
        }
    }

    setaFuncionarioInspecionado(event: { component: IonicSelectableComponent, value: any }) {
        this.inspecao.idFuncionarioInspecionado = event.value.id;
    }

    setaFuncionarioAprovado(event: { component: IonicSelectableComponent, value: any }) {
        this.inspecao.idFuncionarioAprovado = event.value.id;
    }

    async obterFuncionarios() {
        await this.storage.ready();
        this.funcionarios = await this.storage.get('funcionarios');

        const obras = await this.storage.get('obras');
        const obra = obras.find(x => x.id == this.servico.idObra);

        if (this.exibirPorCentroCusto) {
            this.funcionarios = [...this.funcionarios.filter(x => x.idCentroCusto == null || x.idCentroCusto == obra.idCentroCusto)];
        }
        this.funcionarioAprovado = this.funcionarios.find(x => x.id == this.inspecao.idFuncionarioAprovado);
        this.funcionarioInspecionado = this.funcionarios.find(x => x.id == this.inspecao.idFuncionarioInspecionado);
    }

    popularFuncionarioVinculado() {
        this.storage.ready().then(() => {
            this.storage.get('usuarioVinculado').then(idFuncionario => {
                if (!this.inspecao.idFuncionarioInspecionado && idFuncionario) {
                    this.inspecao.idFuncionarioInspecionado = idFuncionario;
                    this.funcionarioInspecionado = this.funcionarios.find(x => x.id == idFuncionario);
                }
            });
        });
    }

    exibirOcorrenciasAtalho(item: ItemInspecao) {
        this.navCtrl.push("OcorrenciaPage", { inspecao: this.inspecao, broadcomb: this.descServico, servico: this.servico, itemInspecao: item });
    }

    atualizarSituacao() {
        this.inspecao.situacao = this.inspecao.status == 0 ? 'Em aberto' : 'Finalizado';
    }

    salvar(valido: boolean) {
        if (valido) {
            this.inspecao.dataInspecao = this.dataAbertura ? this.dataAbertura : null;
            this.inspecao.dataEncerramento = this.dataEncerramento ? new Date(this.dataEncerramento + "T12:00:00") : null;
            if (this.inspecao.status == 0) {
                this.viewCtrl.dismiss({ inspecao: this.inspecao, concluido: true });
            } else {
                const naoFinalizado = this.inspecao.inspecaoObraItens.some(x => x.inspecao1 == "" || (x.inspecao1 == "R" && x.inspecao2 == ""));
                if (naoFinalizado) {
                    this.toastService.presentToastWarning("Não é possível salvar com status de finalizado pois existem inspeções pendentes.");
                } else {
                    if (!this.inspecao.dataEncerramento) {
                        this.toastService.presentToastWarning("Não é possível salvar com status de finalizado sem informar a data de encerramento.");
                    } else {
                        const itens1Recusado = this.inspecao.inspecaoObraItens.filter(x => x.inspecao1 == "R").length;
                        const itens2Recusado = this.inspecao.inspecaoObraItens.filter(x => x.inspecao2 == "X").length;
                        const totalRecusa = itens1Recusado + itens2Recusado;
                        const totalOcorrenciaVinculada = this.inspecao.ocorrencias.length;
                        if (totalOcorrenciaVinculada < totalRecusa) {
                            this.toastService.presentToastWarning("Existem inspeções retrabalhadas e reprovadas sem registro de ocorrência.");
                        } else {
                            const ocorrenciasPreenchidas = this.inspecao.ocorrencias
                                .filter(x => x.dataDescricao && x.dataTratativa && x.descricao && x.tratativa && !x.delete).length;
                            const ocorrenciasAtivas = this.inspecao.ocorrencias.filter(x => !x.delete).length;                            
                            if (ocorrenciasPreenchidas < ocorrenciasAtivas) {
                                this.toastService.presentToastWarning("Existem ocorrências registradas com preenchimento incompleto.");
                            } else {
                                this.viewCtrl.dismiss({ inspecao: this.inspecao, concluido: true });
                            }
                        }
                    }
                }
            }
        } else {
            this.toastService.presentToastWarning("É obrigatório informar o funcionário da inspeção.");
        }
    }

    voltar() {
        this.viewCtrl.dismiss({ inspecao: this.inspecao, concluido: false });
    }

    exibirOpcoes() {
        const actionSheet = this.actionSheetCtrl.create(
            {
                "buttons": [
                    {
                        "text": "Ocorrências",
                        handler: () => {
                            this.navCtrl.push("OcorrenciaPage", { inspecao: this.inspecao, broadcomb: this.descServico, servico: this.servico });
                        }
                    },
                    {
                        "text": "Realizado Por",
                        handler: () => {
                            this.navCtrl.push("RealizadoPorPage", { inspecao: this.inspecao, servico: this.servico });
                        }
                    },
                    {
                        "text": "Cancelar",
                        "role": "cancel"
                    }
                ]
            }
        );
        actionSheet.present();
    }
}
