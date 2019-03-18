import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastService } from '../../../utils/toast-service';
import { ItemChecklist } from '../../../models/item-checklist';
import { UUID } from 'angular2-uuid';
import { ItemChecklistServico } from '../../../models/item-checklist-servico';
import { LoadingService } from '../../../utils/loading-service';
import { MessageService } from '../../../utils/message-service';

@IonicPage()
@Component({
    selector: 'page-cadastro-item',
    templateUrl: 'cadastro-item.html'
})

export class CadastroItemPage {

    checklist: ItemChecklist = new ItemChecklist();
    itemChecklist: ItemChecklistServico = new ItemChecklistServico();
    itens: ItemChecklistServico[] = [];
    isEdicao: boolean = false;

    constructor(
        public storage: Storage,
        public navCtrl: NavController,
        public navParams: NavParams,
        public toastService: ToastService,
        public viewCtrl: ViewController,
        public loadingService: LoadingService,
        public messageService: MessageService
    ) {
        this.checklist = this.navParams.data.checklist;
        this.itens = [...this.checklist.itensChecklistServico];
    }

    voltar() {
        this.navCtrl.setRoot("HomePage");
    }

    limpar() {
        this.itemChecklist = new ItemChecklistServico();
    }

    editarItem(item: ItemChecklistServico) {
        this.isEdicao = true;
        this.itemChecklist = new ItemChecklistServico(item);
    }

    adicionar(formValido) {
        if (formValido) {
            if (this.isEdicao) {
                let indice = this.itens.findIndex(x => x.idGuid == this.itemChecklist.idGuid);
                if (indice == -1) {
                    indice = this.itens.findIndex(x => x.id == this.itemChecklist.id);
                }
                this.itens[indice] = this.itemChecklist;
            } else {
                this.itemChecklist.idGuid = UUID.UUID();
                this.itens.unshift(this.itemChecklist);
            }
            this.itemChecklist = new ItemChecklistServico();
            this.isEdicao = false;
        } else {
            this.toastService.presentToastWarning("Preencha todos os campos.");
        }
    }

    concluir() {
        if(this.itens.length == 0) {
            this.messageService.exibirMensagemConfirmacao("Nenhum item foi adicionado a esse checklist e não é possível adicionar via aplicativo posteriormente. Deseja salvar mesmo assim?", () => { this.realizarConclusao() } )
        } else {
            this.realizarConclusao();
        }
    }

    realizarConclusao() {
        this.checklist.itensChecklistServico = [...this.itens];
        this.viewCtrl.dismiss(this.checklist);
    }

}
