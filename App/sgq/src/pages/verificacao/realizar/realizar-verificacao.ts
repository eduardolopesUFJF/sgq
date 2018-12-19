import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Inspecao } from '../../../models/inspecao';
import { Funcionario } from '../../../models/funcionario';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
    selector: 'page-realizar-verificacao',
    templateUrl: 'realizar-verificacao.html'
})

export class RealizarVerificacaoPage {

    inspecao: Inspecao = new Inspecao();
    descServico: string = '';
    funcionarios: Funcionario[] = [];

    constructor(
        public viewCtrl: ViewController,
        public storage: Storage,
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
            this.viewCtrl.dismiss(this.inspecao);
        }
    }

    voltar() {
        this.viewCtrl.dismiss(null);
    }

}
