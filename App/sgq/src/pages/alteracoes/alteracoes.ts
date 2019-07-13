import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Alteracao } from '../../models/alteracao';
import { MessageService } from '../../utils/message-service';
import { LoadingService } from '../../utils/loading-service';
import { StorageServiceUtils } from '../../utils/storage-service-utils';

@IonicPage()
@Component({
    selector: 'page-alteracoes',
    templateUrl: 'alteracoes.html'
})

export class AlteracoesPage {

    reload = true;

    alteracoes: Alteracao[] = [];
    events = {
        onIconClick: (data) => {
            this.confirmarExclusao(data);
        }
    };

    config = {
        "exclusaoPossivel": false,
        "icon": "trash",
        "exibirDatas": false,
        "subTitulo": "Data",
        "tipo": false,
        "alteracoes": true
    }

    constructor(
        public storage: Storage,
        public messageService: MessageService,
        public loadingService: LoadingService,
        public storageServiceUtils: StorageServiceUtils,
        public navCtrl: NavController) {
        this.obterAlteracoes();
    }

    async obterAlteracoes() {
        await this.storage.ready();
        let atualizacoes = await this.storage.get('atualizacoes');
        if (atualizacoes && atualizacoes.length > 0) {
            this.alteracoes = atualizacoes;
        }
        else {
            this.alteracoes = [];
            this.messageService.exibirMensagem("Não há nenhuma alteração pendente.");
            this.navCtrl.setRoot("HomePage");
        }
    }

    confirmarExclusao(alteracao: Alteracao) {
        let mensagem: string = "Deseja realmente desfazer a alteração '" + alteracao.descricao + "'?";;
        this.messageService.exibirMensagemConfirmacao(mensagem, () => { this.excluirAlteracao(alteracao) });
    }

    excluirAlteracao(alteracao: Alteracao): any {
        this.storage.ready().then(() => {
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    let indexArea = atualizacoes.findIndex(x => x.id == alteracao.id);
                    atualizacoes.splice(indexArea, 1);
                    this.storage.set('atualizacoes', atualizacoes);
                    this.alteracoes = atualizacoes;
                    this.atualizarLista();
                    this.atualizarObra(alteracao);
                }
            );
        });
    }

    atualizarLista() {
        this.reload = false;
        this.loadingService.show();
        setTimeout(() => {
            this.reload = true;
            this.loadingService.hide();
        }, 700);
    }

    async atualizarObra(alteracao: Alteracao) {
        let obras = await this.storageServiceUtils.montarObra();
        switch (alteracao.entidade.toLowerCase()) {
            case "area":
            if(alteracao.tipo.toLowerCase() == "insert") {
                let index = obras.find(x => x.id == alteracao.obraId).areas.findIndex(x => x.id == JSON.parse(alteracao.valor).id);
                obras.find(x => x.id == alteracao.obraId).areas.splice(index,1);
                break;
            } else {
                obras.find(x => x.id == alteracao.obraId).areas.find(x => x.id == JSON.parse(alteracao.valor).id).delete = !JSON.parse(alteracao.valor).delete;
                break;
            }
        }
        this.storageServiceUtils.armazenarObraNoStorage(obras);
    }

}
