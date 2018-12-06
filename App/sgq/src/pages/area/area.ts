import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { Area } from '../../models/area';
import { Storage } from '@ionic/storage';
import { Alteracao } from '../../models/alteracao';
import { MessageService } from '../../utils/message-service';
import { LoadingService } from '../../utils/loading-service';
import { UUID } from 'angular2-uuid';

@IonicPage()
@Component({
    selector: 'page-area',
    templateUrl: 'area.html'
})

export class AreaPage {

    areas: Area[] = [];
    obraId: number;
    reload = true;

    events = {
        onItemClick: (data) => {
            this.abrirServicos(data.areas);
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
        "exibirDatas": true,
        "btnNovoLabel": "Adicionar área",
        "subTitulo": "Situação"
    }

    constructor(
        public navCtrl: NavController,
        public storage: Storage,
        public alertCtrl: AlertController,
        public messageService: MessageService,
        public navParams: NavParams,
        public modalCtrl: ModalController,
        public loadingService: LoadingService
    ) {
        this.areas = this.navParams.data.areas;
        this.obraId = this.navParams.data.obraId;
    }

    abrirServicos(areas: Area[]) {
        this.messageService.exibirMensagem("Sendo implementado, aguarde.");
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
                    let alteracao = new Alteracao({ id: UUID.UUID(), tipo: "Update", entidade: "Area", valor: JSON.stringify(area), data: new Date(), descricao: (area.delete ? "Inativação" : "Ativação") + " da área: " + area.descricao, idObra: this.obraId });
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

    atualizarObra(area: Area) {
        this.storage.ready().then(() => {
            this.storage.get('obras').then(
                obras => {
                    obras.find(x => x.id == this.obraId).areas.find(x => x.id == area.id).delete = area.delete;
                    this.storage.set('obras', obras);
                }
            );
        });
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

}