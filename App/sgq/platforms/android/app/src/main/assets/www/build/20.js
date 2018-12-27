webpackJsonp([20],{

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealizarVerificacaoPageModule", function() { return RealizarVerificacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__realizar_verificacao__ = __webpack_require__(922);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RealizarVerificacaoPageModule = /** @class */ (function () {
    function RealizarVerificacaoPageModule() {
    }
    RealizarVerificacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__realizar_verificacao__["a" /* RealizarVerificacaoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__realizar_verificacao__["a" /* RealizarVerificacaoPage */])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], RealizarVerificacaoPageModule);
    return RealizarVerificacaoPageModule;
}());

//# sourceMappingURL=realizar-verificacao.module.js.map

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inspecao; });
var Inspecao = /** @class */ (function () {
    function Inspecao(values) {
        if (values === void 0) { values = {}; }
        this.id = 0;
        this.idGuidInspecao = '';
        this.local = "";
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
        Object.assign(this, values);
    }
    return Inspecao;
}());

//# sourceMappingURL=inspecao.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealizarVerificacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_inspecao__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_toast_service__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RealizarVerificacaoPage = /** @class */ (function () {
    function RealizarVerificacaoPage(viewCtrl, storage, toastService, navParams) {
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.toastService = toastService;
        this.navParams = navParams;
        this.inspecao = new __WEBPACK_IMPORTED_MODULE_2__models_inspecao__["a" /* Inspecao */]();
        this.descServico = '';
        this.funcionarios = [];
        this.inspecao = this.navParams.data.inspecao;
        this.descServico = this.navParams.data.descServico;
        this.obterFuncionarios();
    }
    RealizarVerificacaoPage.prototype.obterFuncionarios = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('funcionarios').then(function (funcionarios) {
                _this.funcionarios = funcionarios;
            });
        });
    };
    RealizarVerificacaoPage.prototype.atualizarSituacao = function () {
        this.inspecao.situacao = this.inspecao.status == 0 ? 'Em aberto' : 'Finalizado';
    };
    RealizarVerificacaoPage.prototype.salvar = function (valido) {
        if (valido) {
            this.viewCtrl.dismiss(this.inspecao);
        }
        else {
            this.toastService.presentToastWarning("É obrigatório informar o funcionário da inspeção.");
        }
    };
    RealizarVerificacaoPage.prototype.voltar = function () {
        this.viewCtrl.dismiss(null);
    };
    RealizarVerificacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-realizar-verificacao',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\verificacao\realizar\realizar-verificacao.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-row>\n\n            <ion-col col-2>\n\n                <button class="button-nav" (click)="voltar()">\n\n                    <span ion-text style="font-size: 0.7em;">Voltar</span>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <ion-title>Verificação</ion-title>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content has-header>\n\n    <ion-grid no-padding>\n\n        <ion-row padding-left padding-right>\n\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <form #cadastroForm="ngForm" padding-top>\n\n                    <ion-item text-center transparent style="padding-bottom: 0 !important;">\n\n                        <ion-label style="font-size: 22px !important; font-weight: bold;" stacked>{{descServico}}</ion-label>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>INSPECIONADO POR</ion-label>\n\n                        <ion-select required [(ngModel)]="inspecao.idFuncionarioInspecionado" multiple="false" name="idFuncionarioInspecionado"\n\n                            okText="Ok" cancelText="Cancelar">\n\n                            <ion-option *ngFor="let item of funcionarios; let i= index" [value]="item.id">{{item.nome}}</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>APROVADOR POR</ion-label>\n\n                        <ion-select [(ngModel)]="inspecao.idFuncionarioAprovado" multiple="false" name="idFuncionarioAprovado"\n\n                            okText="Ok" cancelText="Cancelar">\n\n                            <ion-option *ngFor="let item of funcionarios; let i= index" [value]="item.id">{{item.nome}}</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                    <ion-list radio-group no-margin [(ngModel)]="inspecao.status" name="status" (ngModelChange)="atualizarSituacao()">\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Em aberto</ion-label>\n\n                                        <ion-radio [value]="0" checked></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Finalizado</ion-label>\n\n                                        <ion-radio [value]="1"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </ion-list>\n\n                    <ion-list radio-group no-margin [(ngModel)]="item.inspecao1" name="itemInspecao1+{{i}}" *ngFor="let item of inspecao.inspecaoObraItens; let i=index;">\n\n                        <h2 text-wrap style="font-weight: bold;">{{item.descricao}}</h2>\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col col-3>\n\n                                    <ion-item radio style="background-color: blue;">\n\n                                        <ion-label>NA</ion-label>\n\n                                        <ion-radio [value]="\'NA\'" checked></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col col-3>\n\n                                    <ion-item radio style="background-color: darkgreen;">\n\n                                        <ion-label>A</ion-label>\n\n                                        <ion-radio [value]="\'A\'"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col col-3>\n\n                                    <ion-item radio style="background-color: yellow;">\n\n                                        <ion-label>R</ion-label>\n\n                                        <ion-radio [value]="\'R\'"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col col-3>\n\n                                    <ion-item radio style="background-color: red;">\n\n                                        <ion-label>X</ion-label>\n\n                                        <ion-radio [value]="\'X\'"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                            <ion-row *ngIf="item.inspecao1 == \'R\'">\n\n                                <ion-list radio-group no-margin [(ngModel)]="item.inspecao2" name="itemInspecao2+{{i}}" style="width: 100%">\n\n                                    <ion-grid>\n\n                                        <ion-row>\n\n                                            <ion-col col-3></ion-col>\n\n                                            <ion-col col-3>\n\n                                                <ion-item radio style="background-color: orange;">\n\n                                                    <ion-label>RA</ion-label>\n\n                                                    <ion-radio [value]="\'RA\'" checked></ion-radio>\n\n                                                </ion-item>\n\n                                            </ion-col>\n\n                                            <ion-col col-3>\n\n                                                <ion-item radio style="background-color: red;">\n\n                                                    <ion-label>X</ion-label>\n\n                                                    <ion-radio [value]="\'X\'"></ion-radio>\n\n                                                </ion-item>\n\n                                            </ion-col>\n\n                                            <ion-col col-3></ion-col>\n\n                                        </ion-row>\n\n                                    </ion-grid>\n\n                                </ion-list>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </ion-list>\n\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: black !important;"\n\n                        (click)="salvar(cadastroForm.valid)">Salvar</button>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\verificacao\realizar\realizar-verificacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__utils_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], RealizarVerificacaoPage);
    return RealizarVerificacaoPage;
}());

//# sourceMappingURL=realizar-verificacao.js.map

/***/ })

});
//# sourceMappingURL=20.js.map