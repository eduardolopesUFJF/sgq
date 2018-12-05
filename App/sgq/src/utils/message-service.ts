import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class MessageService {

    constructor(private alertCtrl: AlertController) { }

    exibirMensagem(mensagem: string) {
        let alert = this.alertCtrl.create({
            subTitle: mensagem,
            buttons: ['Ok']
        });
        alert.present();
    }

    exibirMensagemConfirmacao(mensagem: string, acaoConfirmar: (value: any) => void) {
        let confirm = this.alertCtrl.create({
            message: mensagem,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Confirmar',
                    handler: acaoConfirmar
                }
            ]
        });
        confirm.present();
    }
}
