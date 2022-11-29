import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingService } from '../../utils/loading-service';
import { UsuarioLogin } from '../../models/usuarioLogin';
import { UsuarioService } from '../../services/usuario.service';
import { ToastService } from '../../utils/toast-service';
import { Storage } from '@ionic/storage';
import { ClienteService } from '../../services/cliente.service';

@IonicPage()
@Component({
    templateUrl: 'login.component.html',
    providers: [UsuarioService, ClienteService]
})

export class LoginPage {

    usuarioLogin: UsuarioLogin = new UsuarioLogin();
    salvarSenha: boolean = true;

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
            "items": []
        }
    };

    events = {
        onLogin: (data) => {
            this.logar(data.usuario, data.senha, data.empresa);
        },
        onCheckSavePassword: (data) => {
            this.salvarSenha = data.salvarSenha;
        }
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public storage: Storage,
        public loading: LoadingService,
        public usuarioService: UsuarioService,
        public clienteService: ClienteService,
        public toastService: ToastService) {
    }

    ionViewDidLoad() {
        this.loading.show();
        this.clienteService.obterTodas().subscribe(
            result => {
                this.data = {
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
                        "items": result
                    }
                };
                this.loading.hide();
            },
            error => {
                this.loading.hide();
                this.toastService.presentToastError("Não foi possível obter os clientes.");
            }
        );
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
        this.obterFuncionarioVinculado();
        localStorage.setItem('isLogged','true');
        this.navCtrl.setRoot("HomePage");
        this.storage.ready().then(() => {
            this.storage.set('BancoSchema', this.usuarioLogin.empresa.toUpperCase());
            this.storage.set('Usuario', this.usuarioLogin.usuario.toUpperCase());
            if (this.salvarSenha) {
                this.storage.set('Senha:' + this.usuarioLogin.usuario.toUpperCase(), this.usuarioLogin.senha);
                this.storage.set('UsuarioSalvo', this.usuarioLogin.usuario.toUpperCase());
                this.storage.set('EmpresaSalva', this.usuarioLogin.empresa.toUpperCase());
            } else {
                this.storage.remove('Senha:' + this.usuarioLogin.usuario.toUpperCase());
                this.storage.remove('UsuarioSalvo');
                this.storage.remove('EmpresaSalva');
            }
        });
    }

    obterFuncionarioVinculado() {
        this.usuarioService.funcionarioVinculado(this.usuarioLogin.usuario.toLowerCase()).subscribe(
            data => {
                this.storage.set('usuarioVinculado', data);
            }
        );
    }

}
