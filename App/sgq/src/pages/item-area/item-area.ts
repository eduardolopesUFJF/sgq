import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { Servico } from '../../models/servico';
import { MessageService } from '../../utils/message-service';
import { Storage } from '@ionic/storage';
import { Alteracao } from '../../models/alteracao';
import { UUID } from 'angular2-uuid';
import { Area } from '../../models/area';
import { StorageServiceUtils } from '../../utils/storage-service-utils';

@IonicPage()
@Component({
    selector: 'page-item-area',
    templateUrl: 'item-area.html'
})

export class ItemAreaPage {

    area: Area = new Area();

    events = {
        onItemClick: (data) => {
            this.abrirVerificacoes(data);
        },
        onIconClick: (data) => {
            this.confirmarExclusao(data);
        }
    };

    config = {
        "exclusaoPossivel": true,
        "icon": "trash",
        "exibirDatas": false,
        "tipo": true,
        "subTitulo": "Situação",
        "alteracoes": false,
        "broadcomb": "",
        "filtrarSituacao": true
    }

    constructor(
        public navParams: NavParams,
        public messageService: MessageService,
        public storageServiceUtils: StorageServiceUtils,
        public navCtrl: NavController,
        public storage: Storage
    ) { 
        this.area = this.navParams.data.area;
        this.config.broadcomb = this.navParams.data.obra + " >> " + this.area.descricao;
    }

    abrirVerificacoes(servico: Servico) {
        this.navCtrl.push("VerificacaoPage", {servico: servico, broadcomb: this.config.broadcomb});
    }

    confirmarExclusao(item: Servico) {
        let mensagem: string;
        if (!item.delete) {
            mensagem = "Deseja realmente excluir o item '" + item.descricao + "'?";
        } else {
            mensagem = "Deseja realmente reativar o item '" + item.descricao + "'?";
        }
        this.messageService.exibirMensagemConfirmacao(mensagem, () => { this.alterarSituacaoArea(item) });
    }

    alterarSituacaoArea(item: Servico): any {
        this.storage.ready().then(() => {
            let atualizacoesArray: Alteracao[] = [];
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    item.delete = !item.delete;
                    let alteracao = new Alteracao({ id: UUID.UUID(), idServico: item.id, idGuidServico: item.idGuidServico, idArea: this.area.id, idGuidArea: this.area.idGuid, tipo: "Update", entidade: "Servico", valor: JSON.stringify(item), data: new Date(), descricao: (item.delete ? "Inativação" : "Ativação") + " do serviço '" + item.descricao + "' na área '" + this.area.descricao + "'.", obraId: this.area.idObra });
                    if (atualizacoes) {
                        atualizacoesArray = atualizacoes;
                        atualizacoesArray.push(alteracao);
                    } else {
                        atualizacoesArray.push(alteracao);
                    }
                    this.storage.set('atualizacoes', atualizacoesArray);
                    this.atualizarObra(item);
                }
            );
        });
    }

    async atualizarObra(item: Servico) {
        let obras = await this.storageServiceUtils.montarObra();
        obras.find(x => x.id == this.area.idObra).areas.find(x => this.area.idGuid ? (x.idGuid == this.area.idGuid) : (x.id == this.area.id)).servicos.find(x => item.idGuidServico ? (x.idGuid == item.idGuidServico) : (x.id == item.id)).delete = item.delete;
        this.storageServiceUtils.armazenarObraNoStorage(obras);
    }

    voltarHome() {
        this.navCtrl.setRoot("HomePage");
    }

}
