import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Servico } from '../../models/servico';
import { MessageService } from '../../utils/message-service';
import { Storage } from '@ionic/storage';
import { Alteracao } from '../../models/alteracao';
import { UUID } from 'angular2-uuid';
import { Area } from '../../models/area';

@IonicPage()
@Component({
    selector: 'page-item-area',
    templateUrl: 'item-area.html'
})

export class ItemAreaPage {

    area: Area = new Area();

    events = {
        onItemClick: (data) => {
            this.abrirInspecao(data);
        },
        onIconClick: (data) => {
            this.confirmarExclusao(data);
        }
    };

    config = {
        "exclusaoPossivel": true,
        "icon": "trash",
        "exibirDatas": false,
        "subTitulo": "Situação",
        "alteracoes": false
    }

    constructor(
        public navParams: NavParams,
        public messageService: MessageService,
        public storage: Storage
    ) { 
        this.area = this.navParams.data.area;
    }

    abrirInspecao(inspecao: any) {
        this.messageService.exibirMensagem("Sendo implementado.");
    }

    confirmarExclusao(item: Servico) {
        let mensagem: string;
        if (!item.delete) {
            mensagem = "Deseja realmente excluir o item '" + item.descricao + "'?";
        } else {
            mensagem = "Deseja realmente reativar a área '" + item.descricao + "'?";
        }
        this.messageService.exibirMensagemConfirmacao(mensagem, () => { this.alterarSituacaoArea(item) });
    }

    alterarSituacaoArea(item: Servico): any {
        this.storage.ready().then(() => {
            let atualizacoesArray: Alteracao[] = [];
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    item.delete = !item.delete;
                    let alteracao = new Alteracao({ id: UUID.UUID(), tipo: "Update", entidade: "Servico", valor: JSON.stringify(item), data: new Date(), descricao: (item.delete ? "Inativação" : "Ativação") + " do serviço '" + item.descricao + "' na área '" + this.area.descricao + "'." });
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

    atualizarObra(item: Servico) {
        this.storage.ready().then(() => {
            this.storage.get('obras').then(
                obras => {
                    obras.find(x => x.id == this.area.idObra).areas.find(x => x.id == this.area.id).servicos.find(x => x.id == item.id).delete = item.delete;
                    this.storage.set('obras', obras);
                }
            );
        });
    }

}
