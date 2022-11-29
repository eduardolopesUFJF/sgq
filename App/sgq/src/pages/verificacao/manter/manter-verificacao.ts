import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Inspecao } from '../../../models/inspecao';
import { ItemChecklist } from '../../../models/item-checklist';

@IonicPage()
@Component({
    selector: 'page-manter-verificacao',
    templateUrl: 'manter-verificacao.html'
})

export class ManterVerificacaoPage {

    inspecao: Inspecao = new Inspecao();
    itemChecklist: ItemChecklist = new ItemChecklist();

    constructor(
        public viewCtrl: ViewController,
        public navParams: NavParams
    ) {
        this.inspecao = this.navParams.data.inspecao;
        this.itemChecklist = this.navParams.data.itemChecklist;
        let hoje = new Date();
        this.inspecao.dataInspecao = this.converterData(hoje);
    }

    converterData(data: Date) {
        let year = data.getFullYear();
        let month = data.getMonth() + 1;
        let day = data.getDate();

        let dataFormatada = year + '-' + (month.toString().length < 2 ? '0'+month : ''+month) + '-' + (day.toString().length < 2 ? '0'+day : ''+day);
        return dataFormatada;
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
