webpackJsonp([14],{

<<<<<<< HEAD
/***/ 764:
=======
/***/ 774:
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistCadastroPageModule", function() { return ChecklistCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_item__ = __webpack_require__(896);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterVerificacaoPageModule", function() { return ManterVerificacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manter_verificacao__ = __webpack_require__(881);
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
                __WEBPACK_IMPORTED_MODULE_2__cadastro_item__["a" /* CadastroItemPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_item__["a" /* CadastroItemPage */])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ChecklistCadastroPageModule);
    return ChecklistCadastroPageModule;
}());

//# sourceMappingURL=cadastro-item.module.js.map

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
=======
var ManterVerificacaoPageModule = /** @class */ (function () {
    function ManterVerificacaoPageModule() {
    }
    ManterVerificacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__manter_verificacao__["a" /* ManterVerificacaoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__manter_verificacao__["a" /* ManterVerificacaoPage */])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ManterVerificacaoPageModule);
    return ManterVerificacaoPageModule;
}());

//# sourceMappingURL=manter-verificacao.module.js.map

/***/ }),

/***/ 782:
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

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inspecao; });
var Inspecao = /** @class */ (function () {
    function Inspecao(values) {
        if (values === void 0) { values = {}; }
        this.id = 0;
        this.idGuidInspecao = '';
        this.idGuidServico = '';
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
        this.campo1 = "";
        this.campo2 = "";
        this.campo3 = "";
        this.campo4 = "";
<<<<<<< HEAD
        this.itensChecklistServico = [];
        Object.assign(this, values);
    }
    return ItemChecklist;
}());

//# sourceMappingURL=item-checklist.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_item_checklist_servico__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_loading_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_message_service__ = __webpack_require__(155);
=======
        this.status = 0;
        this.situacao = 'Em aberto';
        this.delete = false;
        this.dataHoraAlteracao = new Date();
        this.qtdNA = 0;
        this.qtdA = 0;
        this.qtdR = 0;
        this.qtdRA = 0;
        this.qtdX = 0;
        this.inspecaoObraItens = [];
        this.ocorrencias = [];
        Object.assign(this, values);
    }
    return Inspecao;
}());

//# sourceMappingURL=inspecao.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManterVerificacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_inspecao__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_item_checklist__ = __webpack_require__(782);
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





var CadastroItemPage = /** @class */ (function () {
    function CadastroItemPage(storage, navCtrl, navParams, toastService, viewCtrl, loadingService, messageService) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastService = toastService;
        this.viewCtrl = viewCtrl;
        this.loadingService = loadingService;
        this.messageService = messageService;
        this.checklist = new __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__["a" /* ItemChecklist */]();
        this.itemChecklist = new __WEBPACK_IMPORTED_MODULE_6__models_item_checklist_servico__["a" /* ItemChecklistServico */]();
        this.itens = [];
        this.isEdicao = false;
        this.checklist = this.navParams.data.checklist;
        this.itens = this.checklist.itensChecklistServico.slice();
    }
    CadastroItemPage.prototype.voltar = function () {
        this.navCtrl.setRoot("HomePage");
    };
    CadastroItemPage.prototype.limpar = function () {
        this.itemChecklist = new __WEBPACK_IMPORTED_MODULE_6__models_item_checklist_servico__["a" /* ItemChecklistServico */]();
    };
    CadastroItemPage.prototype.editarItem = function (item) {
        this.isEdicao = true;
        this.itemChecklist = new __WEBPACK_IMPORTED_MODULE_6__models_item_checklist_servico__["a" /* ItemChecklistServico */](item);
    };
    CadastroItemPage.prototype.adicionar = function (formValido) {
        var _this = this;
        if (formValido) {
            if (this.isEdicao) {
                var indice = this.itens.findIndex(function (x) { return x.idGuid == _this.itemChecklist.idGuid; });
                if (indice == -1) {
                    indice = this.itens.findIndex(function (x) { return x.id == _this.itemChecklist.id; });
                }
                this.itens[indice] = this.itemChecklist;
            }
            else {
                this.itemChecklist.idGuid = __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__["UUID"].UUID();
                this.itens.unshift(this.itemChecklist);
            }
            this.itemChecklist = new __WEBPACK_IMPORTED_MODULE_6__models_item_checklist_servico__["a" /* ItemChecklistServico */]();
            this.isEdicao = false;
        }
        else {
            this.toastService.presentToastWarning("Preencha todos os campos.");
        }
    };
    CadastroItemPage.prototype.concluir = function () {
        var _this = this;
        if (this.itens.length == 0) {
            this.messageService.exibirMensagemConfirmacao("Nenhum item foi adicionado a esse checklist e não é possível adicionar via aplicativo posteriormente. Deseja salvar mesmo assim?", function () { _this.realizarConclusao(); });
        }
        else {
            this.realizarConclusao();
        }
    };
    CadastroItemPage.prototype.realizarConclusao = function () {
        this.checklist.itensChecklistServico = this.itens.slice();
        this.viewCtrl.dismiss(this.checklist);
    };
    CadastroItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cadastro-item',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\checklist\cadastro-item\cadastro-item.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-row>\n\n            <ion-col col-2>\n\n                <button class="button-nav" (click)="voltar()">\n\n                    <span ion-text style="font-size: 0.7em;">Voltar</span>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col col-10 m-auto>\n\n                <ion-title>Itens do Checklist</ion-title>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content has-header>\n\n    <ion-grid no-padding>\n\n        <ion-row padding-left padding-right>\n\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <form #cadastroForm="ngForm" padding-top>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>ORDEM</ion-label>\n\n                        <ion-input text-center required type="number" [(ngModel)]="itemChecklist.ordem" name="ordem"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>DESCRIÇÃO</ion-label>\n\n                        <ion-textarea rows="3" text-center required type="text" [(ngModel)]="itemChecklist.descricao"\n\n                            name="descricao"></ion-textarea>\n\n                    </ion-item>\n\n\n\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n\n                        (click)="adicionar(cadastroForm.valid)">{{isEdicao ? \'Atualizar\' : \'Adicionar\'}}</button>\n\n                    <button *ngIf="isEdicao" ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n\n                        (click)="limpar()">Limpar</button>\n\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n\n                        (click)="concluir()">Concluir</button>\n\n                    \n\n                    <h3 text-center *ngIf="itens.length > 0" class="locais" style="margin-bottom: 0px;">Itens de checklist adicionados</h3>\n\n                    \n\n                    <h3 text-center *ngIf="itens.length == 0" class="locais">Nenhum item de checklist adicionado</h3>\n\n                    <ion-list *ngIf="itens.length > 0">\n\n                        <ion-item text-wrap class="list-item" *ngFor="let item of itens" (click)="editarItem(item)">\n\n                            {{item.ordem}} - {{item.descricao.toUpperCase()}}\n\n                        </ion-item>\n\n                    </ion-list>\n\n                    \n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\checklist\cadastro-item\cadastro-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_7__utils_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_8__utils_message_service__["a" /* MessageService */]])
    ], CadastroItemPage);
    return CadastroItemPage;
}());

//# sourceMappingURL=cadastro-item.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemChecklistServico; });
var ItemChecklistServico = /** @class */ (function () {
    function ItemChecklistServico(values) {
        if (values === void 0) { values = {}; }
        this.descricao = "";
        this.ordem = null;
        Object.assign(this, values);
    }
    return ItemChecklistServico;
}());

//# sourceMappingURL=item-checklist-servico.js.map
=======
var ManterVerificacaoPage = /** @class */ (function () {
    function ManterVerificacaoPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.inspecao = new __WEBPACK_IMPORTED_MODULE_2__models_inspecao__["a" /* Inspecao */]();
        this.itemChecklist = new __WEBPACK_IMPORTED_MODULE_3__models_item_checklist__["a" /* ItemChecklist */]();
        this.inspecao = this.navParams.data.inspecao;
        this.itemChecklist = this.navParams.data.itemChecklist;
    }
    ManterVerificacaoPage.prototype.salvar = function (valido) {
        if (valido) {
            this.viewCtrl.dismiss(this.inspecao);
        }
    };
    ManterVerificacaoPage.prototype.voltar = function () {
        this.viewCtrl.dismiss(null);
    };
    ManterVerificacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-manter-verificacao',template:/*ion-inline-start:"/Users/duduulopes/Desktop/sgq/App/sgq/src/pages/verificacao/manter/manter-verificacao.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row>\n            <ion-col col-2>\n                <button class="button-nav" (click)="voltar()">\n                    <span ion-text style="font-size: 0.7em;">Voltar</span>\n                </button>\n            </ion-col>\n            <ion-col col-10 m-auto>\n                <ion-title>Localização do Serviço</ion-title>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content has-header>\n    <ion-grid no-padding>\n        <ion-row padding-left padding-right>\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n                <form #cadastroForm="ngForm" padding-top>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>DATA DE ABERTURA</ion-label>\n                        <ion-datetime displayFormat="DD/MM/YYYY" name="inspecao.dataInspecao" [(ngModel)]="inspecao.dataInspecao" cancelText="Cancelar" doneText="Ok"></ion-datetime>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>DATA DE ENCERRAMENTO</ion-label>\n                        <ion-datetime displayFormat="DD/MM/YYYY" name="inspecao.dataEncerramento" [(ngModel)]="inspecao.dataEncerramento" cancelText="Cancelar" doneText="Ok"></ion-datetime>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>{{itemChecklist.campo1}}</ion-label>\n                        <ion-input text-center type="text" [(ngModel)]="inspecao.campo1" name="local1"></ion-input>\n                    </ion-item>\n                    <ion-item text-center transparent *ngIf="itemChecklist.campo2">\n                        <ion-label stacked>{{itemChecklist.campo2}}</ion-label>\n                        <ion-input text-center type="text" [(ngModel)]="inspecao.campo2" name="local2"></ion-input>\n                    </ion-item>\n                    <ion-item text-center transparent *ngIf="itemChecklist.campo3">\n                        <ion-label stacked>{{itemChecklist.campo3}}</ion-label>\n                        <ion-input text-center type="text" [(ngModel)]="inspecao.campo3" name="local3"></ion-input>\n                    </ion-item>\n                    <ion-item text-center transparent *ngIf="itemChecklist.campo4">\n                        <ion-label stacked>{{itemChecklist.campo4}}</ion-label>\n                        <ion-input text-center type="text" [(ngModel)]="inspecao.campo4" name="local4"></ion-input>\n                    </ion-item>\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n                        (click)="salvar(cadastroForm.valid)">Salvar</button>\n                </form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/duduulopes/Desktop/sgq/App/sgq/src/pages/verificacao/manter/manter-verificacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], ManterVerificacaoPage);
    return ManterVerificacaoPage;
}());

//# sourceMappingURL=manter-verificacao.js.map
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99

/***/ })

});
//# sourceMappingURL=14.js.map