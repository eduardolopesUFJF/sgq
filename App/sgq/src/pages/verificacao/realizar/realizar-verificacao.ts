import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Inspecao } from '../../../models/inspecao';

@IonicPage()
@Component({
    selector: 'page-realizar-verificacao',
    templateUrl: 'realizar-verificacao.html'
})

export class RealizarVerificacaoPage {

    inspecao: Inspecao = new Inspecao();
    
    constructor() { }

}
