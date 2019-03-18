import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastService } from '../../../utils/toast-service';
import { ItemChecklist } from '../../../models/item-checklist';
import { UUID } from 'angular2-uuid';

@IonicPage()
@Component({
    selector: 'page-checklist-cadastro',
    templateUrl: 'checklist-cadastro.html'
})

export class ChecklistCadastroPage {

    checklist: ItemChecklist = new ItemChecklist();

    constructor(
        public storage: Storage,
        public navParams: NavParams,
        public modalCtrl: ModalController,
        public toastService: ToastService,
        public viewCtrl: ViewController
    ) { 
        this.checklist = this.navParams.data.checklist ? new ItemChecklist(this.navParams.data.checklist) : new ItemChecklist();
        this.checklist.tipo = this.checklist.tipo ? this.checklist.tipo.slice(0,1) : null;
    }

    voltar() {
        this.viewCtrl.dismiss(null);
    }

    salvar(formValido) {
        if (formValido && this.checklist.tipo) {
            this.checklist.idGuid = UUID.UUID();
            this.adicionarItens();
        } else {
            this.toastService.presentToastWarning("Preencha todos os campos.");
        }
    }

    adicionarItens() {
        let modal = this.modalCtrl.create("CadastroItemPage", { checklist: this.checklist });
        modal.present();

        modal.onWillDismiss((checklist: ItemChecklist) => {
            if (checklist) {
                this.viewCtrl.dismiss(checklist);
            }
        });
    }

}
