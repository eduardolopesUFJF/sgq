import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, ModalController, NavController } from 'ionic-angular';
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
    }

    tratarDatas() {
        if (this.inspecao.dataInspecao) {
            if (this.inspecao.dataInspecao.toString().indexOf("GMT") == -1) {
                this.dataAbertura = this.inspecao.dataInspecao.toString().split("T")[0];
            } else {
                this.dataAbertura = this.inspecao.dataInspecao.toISOString().split("T")[0];
            }
        }
        if (this.inspecao.dataEncerramento) {
            if (this.inspecao.dataEncerramento.toString().indexOf("GMT") == -1) {
                this.dataEncerramento = this.inspecao.dataEncerramento.toString().split("T")[0];
            } else {
                this.dataEncerramento = this.inspecao.dataEncerramento.toISOString().split("T")[0];
            }
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

    atualizarSituacao() {
        this.inspecao.situacao = this.inspecao.status == 0 ? 'Em aberto' : 'Finalizado';
    }

    salvar(valido: boolean) {
        if (valido) {
            this.inspecao.dataInspecao = new Date(this.dataAbertura + "T12:00:00");
            this.inspecao.dataEncerramento = new Date(this.dataEncerramento + "T12:00:00");
            if (this.inspecao.status == 0) {
                this.viewCtrl.dismiss({ inspecao: this.inspecao, concluido: true });
            } else {
                const naoFinalizado = this.inspecao.inspecaoObraItens.some(x => x.inspecao1 == "" || (x.inspecao1 == "R" && x.inspecao2 == ""));
                if (naoFinalizado) {
                    this.toastService.presentToastWarning("Não é possível salvar com status de finalizado pois existem inspeções pendentes.");
                } else {
                    this.inspecao.dataEncerramento = new Date();
                    this.viewCtrl.dismiss({ inspecao: this.inspecao, concluido: true });
                }
            }
        } else {
            this.toastService.presentToastWarning("É obrigatório informar o funcionário da inspeção.");
        }
    }

    voltar() {
        this.viewCtrl.dismiss({ inspecao: this.inspecao, concluido: false });
    }

    abrirOcorrencias() {
        this.navCtrl.push("OcorrenciaPage", { inspecao: this.inspecao, broadcomb: this.descServico, servico: this.servico });
    }

}
