import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingService } from '../../utils/loading-service';
import { UsuarioLogin } from '../../models/usuarioLogin';
import { UsuarioService } from '../../services/usuario.service';
import { ToastService } from '../../utils/toast-service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
    templateUrl: 'login.component.html',
    providers: [UsuarioService]
})

export class LoginPage {

    usuarioLogin: UsuarioLogin = new UsuarioLogin();

    data = {
        "background": "assets/images/background/login.png",
        "forgotPassword": "Esqueceu sua senha?",
        "labelUsername": "USUÁRIO",
        "labelPassword": "SENHA",
        "title": "Acessar área restrita",
        "username": "",
        "password": "",
        "register": "Registrar",
        "possuiRegistrar": false,
        "possuiEsqueciSenha": false,
        "possuiLogo": true,
        "login": "Logar",
        "logo": "assets/images/logo/logo.png",
        "errorUser": "O campo usuário deve ser preenchido",
        "errorPassword": "O campo senha deve ser preenchido",
        "selectData": {
            "title": "CONDOMÍNIO",
            "selectedItem": 0,
            "header": "Basic dialog",
            "items": [
                {
                    "id": 1,
                    "title": "GDOL"
                },
                {
                    "id": 2,
                    "title": "ADDY"
                },
                {
                    "id": 3,
                    "title": "ARCO"
                },
                {
                    "id": 4,
                    "title": "ARRUELAS"
                },
                {
                    "id": 5,
                    "title": "ATRIUM"
                },
                {
                    "id": 6,
                    "title": "BAUEN"
                },
                {
                    "id": 7,
                    "title": "CGD"
                },
                {
                    "id": 8,
                    "title": "FAZ"
                },
                {
                    "id": 9,
                    "title": "FORUM"
                },
                {
                    "id": 10,
                    "title": "GESTAO"
                },
                {
                    "id": 11,
                    "title": "GS"
                },
                {
                    "id": 12,
                    "title": "MELHORLAR"
                },
                {
                    "id": 13,
                    "title": "PAINEIRA"
                },
                {
                    "id": 14,
                    "title": "REALIZA"
                },
                {
                    "id": 15,
                    "title": "RMG"
                },
                {
                    "id": 17,
                    "title": "SOLTRON"
                },
                {
                    "id": 18,
                    "title": "TALENT"
                },
                {
                    "id": 19,
                    "title": "UPTEC"
                },
                {
                    "id": 20,
                    "title": "VERNAC"
                },
                {
                    "id": 21,
                    "title": "VILLARD"
                }
            ]
        }
    };

    events = {
        onLogin: (data) => {
            this.logar(data.usuario, data.senha, data.empresa);
        }
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public storage: Storage,
        public loading: LoadingService,
        public usuarioService: UsuarioService,
        public toastService: ToastService) {
    }

    logar(usuario, senha, empresa) {
        this.loading.show();
        this.usuarioLogin.empresa = empresa;
        this.usuarioLogin.usuario = usuario;
        this.usuarioLogin.senha = senha;
        localStorage.setItem("BancoSchema", empresa.toUpperCase());
        localStorage.setItem("Usuario", usuario.toUpperCase());
        this.usuarioService.logar(this.usuarioLogin).subscribe(
            result => {
                this.loading.hide();
                switch (result) {
                    case 0:
                        this.toastService.presentToastError("Usuário inexistente.");
                        break;
                    case 1:
                        this.toastService.presentToastError("Senha inválida.");
                        break;
                    case 2:
                        this.toastService.presentToastError("Usuário removido.");
                        break;
                    case 3:
                        this.toastService.presentToastError("Usuário bloqueado.");
                        break;
                    case 4:
                        this.gravarDadosLogin();
                        break;
                }
            },
            error => {
                this.loading.hide();
                this.toastService.presentToastError("Falha na comunicação com o servidor.");
            }
        );
    }

    gravarDadosLogin() {
        localStorage.setItem('isLogged','true');
        this.navCtrl.setRoot("HomePage");
        this.storage.ready().then(() => {
            this.storage.set('BancoSchema', this.usuarioLogin.empresa.toUpperCase());
            this.storage.set('Usuario', this.usuarioLogin.usuario.toUpperCase());
        });
    }

}
