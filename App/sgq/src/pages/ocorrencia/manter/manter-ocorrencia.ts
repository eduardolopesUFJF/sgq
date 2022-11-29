import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Ocorrencia } from '../../../models/ocorrencia';
import { ToastService } from '../../../utils/toast-service';
import { ItemInspecao } from '../../../models/item-inspecao';
import { Inspecao } from '../../../models/inspecao';

@IonicPage()
@Component({
    selector: 'page-manter-ocorrencia',
    templateUrl: 'manter-ocorrencia.html'
})

export class ManterOcorrenciaPage {

    inspecao: Inspecao = new Inspecao();
    ocorrencia: Ocorrencia = new Ocorrencia();
    itemInspecao: ItemInspecao;

    constructor(
        public viewCtrl: ViewController,
        public toastService: ToastService,
        public navParams: NavParams
    ) {
        if (this.navParams.data.ocorrencia.id || this.navParams.data.ocorrencia.idGuidOcorrencia) {
            this.ocorrencia = this.navParams.data.ocorrencia;
        }
        this.inspecao = this.navParams.data.inspecao;
        if (!this.ocorrencia.dataDescricao) {
            let hoje = new Date();
            this.ocorrencia.dataDescricao = this.converterData(hoje);
        }
        if (this.ocorrencia.idInspecaoObraItem) {
            this.itemInspecao = this.inspecao.inspecaoObraItens.find(x => x.ordem + ' - ' + x.descricao == this.ocorrencia.descricaoInspecaoObraItem);
        }
        if (this.navParams.data.itemInspecao) {
            this.itemInspecao = this.navParams.data.itemInspecao;
            this.ocorrencia.numeroInspecao = 1;
            this.popularDescricaoItem();
        }
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
            this.viewCtrl.dismiss(this.ocorrencia);
        } else {
            this.toastService.presentToastWarning("É obrigatório informar a descrição e sua data.");
        }
    }

    voltar() {
        this.viewCtrl.dismiss(null);
    }

    popularDescricaoItem() {
        this.ocorrencia.descricaoInspecaoObraItem = this.itemInspecao.descricao;
        if (this.itemInspecao.id) {
            this.ocorrencia.idInspecaoObraItem = this.itemInspecao.id;
        } else {
            this.ocorrencia.idInspecaoObraItem = 0;
        }
    }
}
