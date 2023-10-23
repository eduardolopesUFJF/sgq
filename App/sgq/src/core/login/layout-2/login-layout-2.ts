import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ToastService } from '../../../utils/toast-service';
import { Storage } from '@ionic/storage';

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
    public empresa;

    passwordType: string = 'password';
    salvarSenha: boolean = true;

    constructor(private toastService: ToastService, public storage: Storage) {
        this.popularSenhaSalva();
     }

    hideShowPassword() {
        this.passwordType = this.passwordType == 'text' ? 'password' : 'text';
    }

    async popularSenhaSalva() {
        await this.storage.ready();
        this.usuario = await this.storage.get('UsuarioSalvo');
        if (this.usuario) {
            let senhaArmazenada = await this.storage.get('Senha:' + this.usuario.toUpperCase());
            if (senhaArmazenada) {
                this.senha = senhaArmazenada;
            } else {
                this.senha = "";
            }
            let empresaArmazenada = await this.storage.get('EmpresaSalva');
            if (empresaArmazenada) {
                this.empresa = { id: 1, title: empresaArmazenada };
            } else {
                this.empresa = null;
            }
        } else {
            this.usuario = "";
            this.senha = "";
            this.empresa = null;
        }
    }

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
                    'empresa': this.empresa.title
                });
            }
        } else {
            if (this.events[event]) {
                this.events[event]();
            }
        }
    }
}
