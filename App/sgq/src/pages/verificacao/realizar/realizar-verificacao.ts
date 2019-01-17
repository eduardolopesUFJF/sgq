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
        this.obterFuncionarios();
    }

    setaFuncionarioInspecionado(event: {component: IonicSelectableComponent, value: any}) {
        this.inspecao.idFuncionarioInspecionado = event.value.id;
    }

    setaFuncionarioAprovado(event: {component: IonicSelectableComponent, value: any}) {
        this.inspecao.idFuncionarioAprovado = event.value.id;
    }

    obterFuncionarios() {
        this.storage.ready().then(() => {
            this.storage.get('funcionarios').then(
                funcionarios => {
                    this.funcionarios = funcionarios;
                    this.funcionarioAprovado = this.funcionarios.find(x => x.id == this.inspecao.idFuncionarioAprovado);
                    this.funcionarioInspecionado = this.funcionarios.find(x => x.id == this.inspecao.idFuncionarioInspecionado);
                }
            );
        });
    }

    atualizarSituacao() {
        this.inspecao.situacao = this.inspecao.status == 0 ? 'Em aberto' : 'Finalizado';
    }

    salvar(valido: boolean) {
        if (valido) {
            if (this.inspecao.status == 0) {
                this.viewCtrl.dismiss({ inspecao: this.inspecao, concluido: true });
            } else {
                const naoFinalizado = this.inspecao.inspecaoObraItens.some(x => x.inspecao1 == "" || (x.inspecao1 == "R" && x.inspecao2 == ""));
                if (naoFinalizado) {
                    this.toastService.presentToastWarning("Não é possível salvar com status de finalizado pois existem inspeções pendentes.");
                } else {
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
