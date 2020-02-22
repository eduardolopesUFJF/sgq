<<<<<<< HEAD
webpackJsonp([15],{

/***/ 767:
=======
webpackJsonp([15,48],{

/***/ 692:
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistCadastroPageModule", function() { return ChecklistCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checklist_cadastro__ = __webpack_require__(900);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLayout1Module", function() { return SelectLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_layout_1__ = __webpack_require__(791);
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



<<<<<<< HEAD
var ChecklistCadastroPageModule = /** @class */ (function () {
    function ChecklistCadastroPageModule() {
    }
    ChecklistCadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checklist_cadastro__["a" /* ChecklistCadastroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checklist_cadastro__["a" /* ChecklistCadastroPage */])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ChecklistCadastroPageModule);
    return ChecklistCadastroPageModule;
}());

//# sourceMappingURL=checklist-cadastro.module.js.map

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UUID = (function () {
    function UUID() {
        // no-op
    }
    UUID.UUID = function () {
        if (typeof (window) !== "undefined" && typeof (window.crypto) !== "undefined" && typeof (window.crypto.getRandomValues) !== "undefined") {
            // If we have a cryptographically secure PRNG, use that
            // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
            var buf = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            return (this.pad4(buf[0]) + this.pad4(buf[1]) + "-" + this.pad4(buf[2]) + "-" + this.pad4(buf[3]) + "-" + this.pad4(buf[4]) + "-" + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
        }
        else {
            // Otherwise, just use Math.random
            // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
            return this.random4() + this.random4() + "-" + this.random4() + "-" + this.random4() + "-" +
                this.random4() + "-" + this.random4() + this.random4() + this.random4();
        }
    };
    UUID.pad4 = function (num) {
        var ret = num.toString(16);
        while (ret.length < 4) {
            ret = "0" + ret;
        }
        return ret;
    };
    UUID.random4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return UUID;
}());
exports.UUID = UUID;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemChecklist; });
var ItemChecklist = /** @class */ (function () {
    function ItemChecklist(values) {
        if (values === void 0) { values = {}; }
        this.id = 0;
        this.campo1 = "";
        this.campo2 = "";
        this.campo3 = "";
        this.campo4 = "";
        this.itensChecklistServico = [];
        Object.assign(this, values);
    }
    return ItemChecklist;
}());

//# sourceMappingURL=item-checklist.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_uuid__);
=======
var SelectLayout1Module = /** @class */ (function () {
    function SelectLayout1Module() {
    }
    SelectLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_layout_1__["a" /* SelectLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_layout_1__["a" /* SelectLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__select_layout_1__["a" /* SelectLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SelectLayout1Module);
    return SelectLayout1Module;
}());

//# sourceMappingURL=select-layout-1.module.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayout2Module", function() { return LoginLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_layout_2__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_layout_1_select_layout_1_module__ = __webpack_require__(692);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginLayout2Module = /** @class */ (function () {
    function LoginLayout2Module() {
    }
    LoginLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */]),
                __WEBPACK_IMPORTED_MODULE_3__select_layout_1_select_layout_1_module__["SelectLayout1Module"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginLayout2Module);
    return LoginLayout2Module;
}());

//# sourceMappingURL=login-layout-2.module.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectLayout1 = /** @class */ (function () {
    function SelectLayout1() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], SelectLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('events'),
        __metadata("design:type", Object)
    ], SelectLayout1.prototype, "events", void 0);
    SelectLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'select-layout-1',template:/*ion-inline-start:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/select/layout-1/select.html"*/'<ion-item color="secondary" no-lines *ngIf="data != null">\n    <ion-label>{{data.title}}</ion-label>\n    <ion-select [(ngModel)]="data.selectedItem" multiple="false">\n        <ion-option value="0">Selecione</ion-option>\n        <ion-option *ngFor="let item of data.items; let i= index" [value]="item.id">{{item.title}}</ion-option>\n    </ion-select>\n</ion-item>'/*ion-inline-end:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/select/layout-1/select.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SelectLayout1);
    return SelectLayout1;
}());

//# sourceMappingURL=select-layout-1.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_toast_service__ = __webpack_require__(350);
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


<<<<<<< HEAD




var ChecklistCadastroPage = /** @class */ (function () {
    function ChecklistCadastroPage(storage, navParams, modalCtrl, toastService, viewCtrl) {
        this.storage = storage;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastService = toastService;
        this.viewCtrl = viewCtrl;
        this.checklist = new __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__["a" /* ItemChecklist */]();
        this.checklist = this.navParams.data.checklist ? new __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__["a" /* ItemChecklist */](this.navParams.data.checklist) : new __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__["a" /* ItemChecklist */]();
        this.checklist.tipo = this.checklist.tipo ? this.checklist.tipo.slice(0, 1) : null;
    }
    ChecklistCadastroPage.prototype.voltar = function () {
        this.viewCtrl.dismiss(null);
    };
    ChecklistCadastroPage.prototype.salvar = function (formValido) {
        if (formValido && this.checklist.tipo) {
            this.checklist.idGuid = __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__["UUID"].UUID();
            this.adicionarItens();
        }
        else {
            this.toastService.presentToastWarning("Preencha todos os campos.");
        }
    };
    ChecklistCadastroPage.prototype.adicionarItens = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CadastroItemPage", { checklist: this.checklist });
        modal.present();
        modal.onWillDismiss(function (checklist) {
            if (checklist) {
                _this.viewCtrl.dismiss(checklist);
            }
        });
    };
    ChecklistCadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-checklist-cadastro',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\checklist\cadastro\checklist-cadastro.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-row>\n\n            <ion-col col-2>\n\n                <button class="button-nav" (click)="voltar()">\n\n                    <span ion-text style="font-size: 0.7em;">Voltar</span>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col col-10 m-auto>\n\n                <ion-title>Cadastro de Checklist</ion-title>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content has-header>\n\n    <ion-grid no-padding>\n\n        <ion-row padding-left padding-right>\n\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <form #cadastroForm="ngForm" padding-top>\n\n                    <ion-list radio-group no-margin [(ngModel)]="checklist.tipo" name="tipo">\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Controlado</ion-label>\n\n                                        <ion-radio value="C"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Especializado</ion-label>\n\n                                        <ion-radio value="E"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </ion-list>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>CÓDIGO</ion-label>\n\n                        <ion-input text-center required type="text" [(ngModel)]="checklist.codigo" name="codigo"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>DESCRIÇÃO</ion-label>\n\n                        <ion-textarea rows="3" text-center required type="text" [(ngModel)]="checklist.descricao" name="descricao"></ion-textarea>\n\n                    </ion-item>\n\n\n\n                    <h3 text-center class="locais">Critérios de localização do serviço</h3>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>CAMPO 1</ion-label>\n\n                        <ion-input text-center type="text" [(ngModel)]="checklist.campo1" name="campo1"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>CAMPO 2</ion-label>\n\n                        <ion-input text-center type="text" [(ngModel)]="checklist.campo2" name="campo2"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>CAMPO 3</ion-label>\n\n                        <ion-input text-center type="text" [(ngModel)]="checklist.campo3" name="campo3"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>CAMPO 4</ion-label>\n\n                        <ion-input text-center type="text" [(ngModel)]="checklist.campo4" name="campo4"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n\n                        (click)="salvar(cadastroForm.valid)">Definir Itens</button>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\checklist\cadastro\checklist-cadastro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], ChecklistCadastroPage);
    return ChecklistCadastroPage;
}());

//# sourceMappingURL=checklist-cadastro.js.map
=======
var LoginLayout2 = /** @class */ (function () {
    function LoginLayout2(toastService) {
        var _this = this;
        this.toastService = toastService;
        this.background = '';
        this.passwordType = 'password';
        this.onEvent = function (event, formValido) {
            if (event == 'onLogin') {
                if (!formValido) {
                    _this.toastService.presentToastError("Preencha todos os campos para logar");
                    return;
                }
                if (_this.events[event]) {
                    _this.events[event]({
                        'usuario': _this.usuario,
                        'senha': _this.senha,
                        'empresa': _this.empresa
                    });
                }
            }
            else {
                if (_this.events[event]) {
                    _this.events[event]();
                }
            }
        };
    }
    LoginLayout2.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType == 'text' ? 'password' : 'text';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginLayout2.prototype, "events", void 0);
    LoginLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-layout-2',template:/*ion-inline-start:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/login/layout-2/login.html"*/'<ion-content has-header *ngIf="data != null" background-size style="background-color: white;">\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-row padding-left padding-right align-items-center>\n      <ion-col *ngIf="data.possuiLogo" text-center col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <img [src]="data.logo">\n      </ion-col>\n      <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <ion-item transparent text-center no-lines>\n          <h1 ion-text login-title no-margin text-wrap text-capitalize>{{data.title}}</h1>\n        </ion-item>\n        <form #loginForm="ngForm">\n          <!-- <ion-item text-center margin-top transparent>\n            <select-layout-3 [data]="data.selectData" [events]="data.selectEvents"></select-layout-3>\n          </ion-item> -->\n          <ion-item text-center transparent>\n            <ion-label stacked>EMPRESA</ion-label>\n            <ion-select required [(ngModel)]="empresa" multiple="false" name="empresa" okText="Ok" cancelText="Cancelar">\n              <ion-option *ngFor="let item of data.selectData.items; let i= index" [value]="item.title">{{item.title}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <!---Input field username-->\n          <ion-item text-center transparent>\n            <ion-label stacked>{{data.labelUsername}}</ion-label>\n            <ion-input text-center required type="text" [placeholder]="data.username" [(ngModel)]="usuario" name="usuario"></ion-input>\n          </ion-item>\n          <!---Input field password-->\n          <ion-item text-center transparent>\n            <ion-label stacked>{{data.labelPassword}}</ion-label>\n            <ion-input required text-center [type]="passwordType" clearOnEdit="false" [placeholder]="data.password"\n              [(ngModel)]="senha" name="senha" style="margin: 0 !important;"></ion-input>\n            <ion-icon item-end name="eye" class="passwordIcon" (click)="hideShowPassword()"></ion-icon>\n          </ion-item>\n          <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: black !important;"\n            (click)="onEvent(\'onLogin\', loginForm.valid)">{{data.login}}</button>\n          <button *ngIf="data.possuiRegistrar" ion-button default-button block text-capitalize margin-bottom (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n          <button *ngIf="data.possuiEsqueciSenha" ion-button button-clear text-capitalize clear float-right no-padding\n            no-margin>{{data.forgotPassword}}</button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/login/layout-2/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_toast_service__["a" /* ToastService */]])
    ], LoginLayout2);
    return LoginLayout2;
}());

//# sourceMappingURL=login-layout-2.js.map
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99

/***/ })

});
//# sourceMappingURL=15.js.map