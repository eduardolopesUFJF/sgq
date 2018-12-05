import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ObraService } from '../../services/obra.service';
import { LoadingService } from '../../utils/loading-service';
import { ToastService } from '../../utils/toast-service';
import { Obra } from '../../models/obra';
import { Area } from '../../models/area';
import { Storage } from '@ionic/storage';
import { MessageService } from '../../utils/message-service';

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
            this.abrirAreas(data.id, data.areas);
        }
    };

    config = {
        "exclusaoPossivel": false,
        "icon": "na",
        "exibirDatas": true,
        "subTitulo": "Situação"
    }

    constructor(
        public obraService: ObraService,
        public loadingService: LoadingService,
        public toastService: ToastService,
        public messageService: MessageService,
        public storage: Storage,
        public navCtrl: NavController
    ) { }

    abrirAreas(obraId: number, areas: Area[]) {
        this.navCtrl.push("AreaPage", { areas: areas, obraId: obraId });
    }

    ionViewDidLoad() {
        this.loadingService.show();
        this.storage.ready().then(() => {
            this.storage.get('obras').then((obras) => {
                this.loadingService.hide();
                if (!obras) {
                    this.obras = [];
                    this.messageService.exibirMensagem("Nenhuma obra encontrada. Acesse a funcionalidade 'Baixar dados' para trazer as informações do servidor.");
                    this.navCtrl.setRoot("HomePage");
                } else {
                    this.obras = obras;
                }
            });
        });
    }

}
