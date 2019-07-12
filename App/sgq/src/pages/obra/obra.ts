import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ObraService } from '../../services/obra.service';
import { LoadingService } from '../../utils/loading-service';
import { ToastService } from '../../utils/toast-service';
import { Obra } from '../../models/obra';
import { Storage } from '@ionic/storage';
import { MessageService } from '../../utils/message-service';
import { StorageServiceUtils } from '../../utils/storage-service-utils';

@IonicPage()
@Component({
    selector: 'page-obra',
    templateUrl: 'obra.html',
    providers: [ObraService]
})

export class ObraPage {

    obras: Obra[] = [];

    events = {
        onItemClick: (data) => {
            this.abrirAreas(data);
        }
    };

    config = {
        "exclusaoPossivel": false,
        "icon": "na",
        "tipo": false,
        "exibirDatas": true,
        "subTitulo": "Situação"
    }

    constructor(
        public obraService: ObraService,
        public loadingService: LoadingService,
        public storageServiceUtils: StorageServiceUtils,
        public toastService: ToastService,
        public messageService: MessageService,
        public storage: Storage,
        public navCtrl: NavController
    ) { }

    abrirAreas(obra: Obra) {
        this.navCtrl.push("AreaPage", { obra: obra });
    }

    async ionViewDidLoad() {
        this.obras = await this.storageServiceUtils.montarObra();
        if (!this.obras) {
            this.messageService.exibirMensagem("Nenhuma obra encontrada. Acesse a funcionalidade 'Baixar dados' para trazer as informações do servidor.");
            this.navCtrl.setRoot("HomePage");
        }
    }

}
