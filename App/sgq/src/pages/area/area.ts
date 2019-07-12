import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { Area } from '../../models/area';
import { Storage } from '@ionic/storage';
import { Alteracao } from '../../models/alteracao';
import { MessageService } from '../../utils/message-service';
import { LoadingService } from '../../utils/loading-service';
import { UUID } from 'angular2-uuid';
import { Obra } from '../../models/obra';
import { StorageServiceUtils } from '../../utils/storage-service-utils';

@IonicPage()
@Component({
    selector: 'page-area',
    templateUrl: 'area.html'
})

export class AreaPage {

    areas: Area[] = [];
    obra: Obra = new Obra();
    obraId: number;
    reload = true;

    events = {
        onItemClick: (data) => {
            this.abrirServicos(data);
        },
        onIconClick: (data) => {
            this.confirmarExclusao(data);
        },
        onAddClick: () => {
            this.addArea();
        }
    };

    config = {
        "exclusaoPossivel": true,
        "icon": "trash",
        "tipo": false,
        "exibirDatas": true,
        "btnNovoLabel": "Adicionar área",
        "subTitulo": "Situação",
        "broadcomb": ""
    }

    constructor(
        public navCtrl: NavController,
        public storage: Storage,
        public alertCtrl: AlertController,
        public messageService: MessageService,
        public storageServiceUtils: StorageServiceUtils,
        public navParams: NavParams,
        public modalCtrl: ModalController,
        public loadingService: LoadingService
    ) {
        this.obra = this.navParams.data.obra;
        this.areas = this.navParams.data.obra.areas;
        this.obraId = this.obra.id;
        this.config.broadcomb = this.obra.descricao;
    }

    abrirServicos(area: Area) {
        this.navCtrl.push("ItemAreaPage", {area: area, obra: this.obra.descricao});
    }

    confirmarExclusao(area: Area) {
        let mensagem: string;
        if (!area.delete) {
            mensagem = "Deseja realmente excluir a área '" + area.descricao + "'?";
        } else {
            mensagem = "Deseja realmente reativar a área '" + area.descricao + "'?";
        }
        this.messageService.exibirMensagemConfirmacao(mensagem, () => { this.alterarSituacaoArea(area) });
    }

    alterarSituacaoArea(area: Area): any {
        this.storage.ready().then(() => {
            let atualizacoesArray: Alteracao[] = [];
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    area.delete = !area.delete;
                    area.idObra = this.obraId;
                    let alteracao = new Alteracao({ id: UUID.UUID(), idArea: area.id, idGuidArea: area.idGuid, tipo: "Update", entidade: "Area", valor: JSON.stringify(area), data: new Date(), descricao: (area.delete ? "Inativação" : "Ativação") + " da área '" + area.descricao + "'.", obraId: this.obraId });
                    if (atualizacoes) {
                        atualizacoesArray = atualizacoes;
                        atualizacoesArray.push(alteracao);
                    } else {
                        atualizacoesArray.push(alteracao);
                    }
                    this.storage.set('atualizacoes', atualizacoesArray);
                    this.atualizarObra(area);
                }
            );
        });
    }

    async atualizarObra(area: Area) {
        let obras = await this.storageServiceUtils.montarObra();
        obras.find(x => x.id == this.obraId).areas.find(x => area.idGuid ? (x.idGuid == area.idGuid) : (x.id == area.id)).delete = area.delete;
        this.storageServiceUtils.armazenarObraNoStorage(obras);
    }

    addArea() {
        let modal = this.modalCtrl.create("AreaCadastroPage", {obraId: this.obraId});
        modal.present();

        modal.onWillDismiss((area: Area) => {
            if(area) {
                this.areas.unshift(area);
                this.reload = false;
                this.loadingService.show();
                setTimeout(() => {
                    this.reload = true;
                    this.loadingService.hide();
                }, 700);
            }
        });
    }

    voltarHome() {
        this.navCtrl.setRoot("HomePage");
    }

}