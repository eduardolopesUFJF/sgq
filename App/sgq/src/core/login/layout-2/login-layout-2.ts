import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ToastService } from '../../../utils/toast-service';

@IonicPage()
@Component({
    selector: 'login-layout-2',
    templateUrl: 'login.html'
})
export class LoginLayout2 {
    
    @Input() data: any;
    @Input() events: any;

    public background: string = '';
    public usuario: string;
    public senha: string;
    public empresa: string;

    constructor(private toastService: ToastService) { }

    onEvent = (event: string, formValido): void => {
        if(event == 'onLogin'){
            if (!formValido) {
                this.toastService.presentToastError("Preencha todos os campos para logar");
                return;
            }
            if (this.events[event]) {
                this.events[event]({
                    'usuario': this.usuario,
                    'senha': this.senha,
                    'empresa': this.empresa
                });
            }
        } else {
            if (this.events[event]) {
                this.events[event]();
            }
        }
    }
}
