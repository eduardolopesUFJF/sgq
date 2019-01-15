import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Ocorrencia } from '../../../models/ocorrencia';

@IonicPage()
@Component({
    selector: 'page-manter-ocorrencia',
    templateUrl: 'manter-ocorrencia.html'
})

export class ManterOcorrenciaPage {

    ocorrencia: Ocorrencia = new Ocorrencia();

    constructor(
        public viewCtrl: ViewController,
        public navParams: NavParams
    ) {
        this.ocorrencia = this.navParams.data.ocorrencia;
    }

    salvar(valido: boolean) {
        if (valido) {
            this.viewCtrl.dismiss(this.ocorrencia);
        }
    }

    voltar() {
        this.viewCtrl.dismiss(null);
    }

}
