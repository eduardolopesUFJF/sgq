import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Inspecao } from '../../../models/inspecao';
import { Funcionario } from '../../../models/funcionario';
import { Storage } from '@ionic/storage';
import { ToastService } from '../../../utils/toast-service';
import { ItemInspecao } from '../../../models/item-inspecao';

@IonicPage()
@Component({
    selector: 'page-realizar-verificacao',
    templateUrl: 'realizar-verificacao.html'
})

export class RealizarVerificacaoPage {

    inspecao: Inspecao = new Inspecao();
    descServico: string = '';
    funcionarios: Funcionario[] = [];
    limpaNA1: boolean = false;
    limpaA1: boolean = false;
    limpaR1: boolean = false;
    limpaX1: boolean = false;
    limpaRA2: boolean = false;
    limpaX2: boolean = false;

    constructor(
        public viewCtrl: ViewController,
        public storage: Storage,
        public toastService: ToastService,
        public navParams: NavParams
    ) {
        this.inspecao = this.navParams.data.inspecao;
        this.descServico = this.navParams.data.descServico;
        this.obterFuncionarios();
    }

    obterFuncionarios() {
        this.storage.ready().then(() => {
            this.storage.get('funcionarios').then(
                funcionarios => {
                    this.funcionarios = funcionarios;
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
                this.viewCtrl.dismiss(this.inspecao);
            } else {
                const naoFinalizado = this.inspecao.inspecaoObraItens.some(x =>
                    x.inspecao1 == "" || (x.inspecao1 == "R" && x.inspecao2 == ""));
                if (naoFinalizado) {
                    this.toastService.presentToastWarning("Não é possível salvar com status de finalizado pois existem inspeções pendentes.");
                } else {
                    this.viewCtrl.dismiss(this.inspecao);
                }
            }
        } else {
            this.toastService.presentToastWarning("É obrigatório informar o funcionário da inspeção.");
        }
    }

    voltar() {
        this.viewCtrl.dismiss({ inspecao: this.inspecao, concluido: false });
    }

    verificaLimparNA1(item: ItemInspecao) {
        this.limpaA1 = false;
        this.limpaR1 = false;
        this.limpaX1 = false;
        if (this.limpaNA1) {
            item.inspecao1 = '';
            this.limpaNA1 = false;
        } else {
            this.limpaNA1 = true;
        }
        item.inspecao2 = "";
    }

    verificaLimparA1(item: ItemInspecao) {
        this.limpaNA1 = false;
        this.limpaR1 = false;
        this.limpaX1 = false;
        if (this.limpaA1) {
            item.inspecao1 = '';
            this.limpaA1 = false;
        } else {
            this.limpaA1 = true;
        }
        item.inspecao2 = "";
    }

    verificaLimparR1(item: ItemInspecao) {
        this.limpaA1 = false;
        this.limpaNA1 = false;
        this.limpaX1 = false;
        if (this.limpaR1) {
            item.inspecao1 = '';
            this.limpaR1 = false;
        } else {
            this.limpaR1 = true;
        }
        item.inspecao2 = "";
    }

    verificaLimparX1(item: ItemInspecao) {
        this.limpaA1 = false;
        this.limpaR1 = false;
        this.limpaNA1 = false;
        if (this.limpaX1) {
            item.inspecao1 = '';
            this.limpaX1 = false;
        } else {
            this.limpaX1 = true;
        }
        item.inspecao2 = "";
    }

    verificaLimparRA2(item: ItemInspecao) {
        this.limpaX2 = false;
        if (this.limpaRA2) {
            item.inspecao2 = '';
            this.limpaRA2 = false;
        } else {
            this.limpaRA2 = true;
        }
    }

    verificaLimparX2(item: ItemInspecao) {
        this.limpaRA2 = false;
        if (this.limpaX2) {
            item.inspecao2 = '';
            this.limpaX2 = false;
        } else {
            this.limpaX2 = true;
        }
    }

}
