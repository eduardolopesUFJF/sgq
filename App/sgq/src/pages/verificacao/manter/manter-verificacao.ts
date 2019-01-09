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
