webpackJsonp([21],{

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterVerificacaoPageModule", function() { return ManterVerificacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manter_verificacao__ = __webpack_require__(920);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ManterVerificacaoPageModule = /** @class */ (function () {
    function ManterVerificacaoPageModule() {
    }
    ManterVerificacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__manter_verificacao__["a" /* ManterVerificacaoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__manter_verificacao__["a" /* ManterVerificacaoPage */])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], ManterVerificacaoPageModule);
    return ManterVerificacaoPageModule;
}());

//# sourceMappingURL=manter-verificacao.module.js.map

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

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManterVerificacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_inspecao__ = __webpack_require__(839);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManterVerificacaoPage = /** @class */ (function () {
    function ManterVerificacaoPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.inspecao = new __WEBPACK_IMPORTED_MODULE_2__models_inspecao__["a" /* Inspecao */]();
        this.inspecao = this.navParams.data.inspecao;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-manter-verificacao',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\verificacao\manter\manter-verificacao.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-row>\n\n            <ion-col col-2>\n\n                <button class="button-nav" (click)="voltar()">\n\n                    <span ion-text style="font-size: 0.7em;">Voltar</span>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <ion-title>Verificação</ion-title>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content has-header>\n\n    <ion-grid no-padding>\n\n        <ion-row padding-left padding-right>\n\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <form #cadastroForm="ngForm" padding-top>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>DATA DE ABERTURA</ion-label>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY" name="inspecao.dataInspecao" [(ngModel)]="inspecao.dataInspecao" cancelText="Cancelar" doneText="Ok"></ion-datetime>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>DATA DE ENCERRAMENTO</ion-label>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY" name="inspecao.dataEncerramento" [(ngModel)]="inspecao.dataEncerramento" cancelText="Cancelar" doneText="Ok"></ion-datetime>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>LOCAL</ion-label>\n\n                        <ion-input text-center type="text" [(ngModel)]="inspecao.local" name="local"></ion-input>\n\n                    </ion-item>\n\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: black !important;"\n\n                        (click)="salvar(cadastroForm.valid)">Salvar</button>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\verificacao\manter\manter-verificacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ManterVerificacaoPage);
    return ManterVerificacaoPage;
}());

//# sourceMappingURL=manter-verificacao.js.map

/***/ })

});
//# sourceMappingURL=21.js.map