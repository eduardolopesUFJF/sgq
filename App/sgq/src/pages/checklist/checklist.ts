import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController, AlertController, ModalController } from 'ionic-angular';
import { MessageService } from '../../utils/message-service';
import { LoadingService } from '../../utils/loading-service';
import { ItemChecklist } from '../../models/item-checklist';
import { Storage } from '@ionic/storage';
import { Alteracao } from '../../models/alteracao';
import { UUID } from 'angular2-uuid';

@IonicPage()
@Component({
    selector: 'page-checklist',
    templateUrl: 'checklist.html'
})

export class ChecklistPage {

    events = {
        onItemClick: (data) => {
            this.editarChecklist(data);
        },
        onAddClick: () => {
            this.addChecklist();
        }
    };

    config = {
        "exclusaoPossivel": false,
        "tipo": false,
        "exibirDatas": false,
        "concatena": true,
        "btnNovoLabel": "Novo"
    }

    checklists: ItemChecklist[] = [];
    reload = true;

    constructor(
        public navCtrl: NavController,
        public storage: Storage,
        public alertCtrl: AlertController,
        public messageService: MessageService,
        public navParams: NavParams,
        public modalCtrl: ModalController,
        public loadingService: LoadingService
    ) {

    }

    ionViewDidLoad() {
        this.storage.ready().then(() => {
            this.storage.get('itensChecklist').then((checklists) => {
                if (!checklists) {
                    this.checklists = [];
                    this.messageService.exibirMensagem("Nenhum checklist encontrado. Acesse a funcionalidade 'Baixar dados' para trazer as informações do servidor.");
                    this.navCtrl.setRoot("HomePage");
                } else {
                    this.checklists = [...checklists];
                    this.addChecklist();
                }
            });
        });
    }

    addChecklist() {
        let modal = this.modalCtrl.create("ChecklistCadastroPage");
        modal.present();

        modal.onWillDismiss((checklist: ItemChecklist) => {
            if (checklist) {
                this.checklists.unshift(new ItemChecklist(checklist));
                this.reload = false;
                this.loadingService.show();
                this.atualizarChecklists();
                this.gerarAtualizacao(checklist, "Insert");
                setTimeout(() => {
                    this.reload = true;
                    this.loadingService.hide();
                    this.navCtrl.setRoot("HomePage");
                }, 700);
            } else {
                this.voltarHome();
            }
        });
    }

    editarChecklist(checklist) {
        let modal = this.modalCtrl.create("ChecklistCadastroPage", { checklist: checklist });
        modal.present();

        modal.onWillDismiss((checklist: ItemChecklist) => {
            if (checklist) {
                const indice = this.checklists.findIndex(x => x.id == checklist.id);
                this.checklists[indice] = new ItemChecklist(checklist);
                this.reload = false;
                this.loadingService.show();
                this.atualizarChecklists();
                this.gerarAtualizacao(checklist, "Update");
                setTimeout(() => {
                    this.reload = true;
                    this.loadingService.hide();
                }, 700);
            } else {
                this.voltarHome();
            }
        });
    }

    gerarAtualizacao(checklist: ItemChecklist, acao: string) {
        this.storage.ready().then(() => {
            let atualizacoesArray: Alteracao[] = [];
            this.storage.get('atualizacoes').then(
                atualizacoes => {
                    let alteracao = new Alteracao({ id: UUID.UUID(), tipo: acao, entidade: "Checklist", valor: JSON.stringify(checklist), data: new Date(), descricao: (acao == "Update" ? "Alteração" : "Criação") + " do checklist '" + checklist.descricao + "'." });
                    if (atualizacoes) {
                        atualizacoesArray = atualizacoes;
                        atualizacoesArray.push(alteracao);
                    } else {
                        atualizacoesArray.push(alteracao);
                    }
                    this.storage.set('atualizacoes', atualizacoesArray);
                }
            );
        });
    }

    atualizarChecklists() {
        this.storage.ready().then(() => {
            this.checklists.sort((a,b) => {
                if(a.codigo > b.codigo) return 1;
                else return -1;
            });
            this.storage.set('itensChecklist', this.checklists);
        });
    }

    voltarHome() {
        this.navCtrl.setRoot("HomePage");
    }
}
