webpackJsonp([17],{

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterOcorrenciaPageModule", function() { return ManterOcorrenciaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manter_ocorrencia__ = __webpack_require__(883);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ManterOcorrenciaPageModule = /** @class */ (function () {
    function ManterOcorrenciaPageModule() {
    }
    ManterOcorrenciaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__manter_ocorrencia__["a" /* ManterOcorrenciaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__manter_ocorrencia__["a" /* ManterOcorrenciaPage */])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ManterOcorrenciaPageModule);
    return ManterOcorrenciaPageModule;
}());

//# sourceMappingURL=manter-ocorrencia.module.js.map

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
        this.campo1 = "";
        this.campo2 = "";
        this.campo3 = "";
        this.campo4 = "";
        this.status = 0;
        this.situacao = 'Verificação não iniciada';
        this.delete = false;
        this.dataHoraAlteracao = new Date();
        this.usuarioInclusao = "";
        this.usuarioEdicao = "";
        this.qtdNA = 0;
        this.qtdA = 0;
        this.qtdR = 0;
        this.qtdRA = 0;
        this.qtdX = 0;
        this.inspecaoObraItens = [];
        this.ocorrencias = [];
        this.realizadosPor = [];
        Object.assign(this, values);
    }
    return Inspecao;
}());

//# sourceMappingURL=inspecao.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ocorrencia; });
var Ocorrencia = /** @class */ (function () {
    function Ocorrencia(values) {
        if (values === void 0) { values = {}; }
        this.id = 0;
        this.idGuidOcorrencia = '';
        this.idInspecaoObra = 0;
        this.idGuidInspecao = '';
        this.descricaoInspecaoObraItem = '';
        this.descricao = '';
        this.tratativa = '';
        this.delete = false;
        this.dataHoraAlteracao = new Date();
        Object.assign(this, values);
    }
    return Ocorrencia;
}());

//# sourceMappingURL=ocorrencia.js.map

/***/ }),

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManterOcorrenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ocorrencia__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_inspecao__ = __webpack_require__(785);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManterOcorrenciaPage = /** @class */ (function () {
    function ManterOcorrenciaPage(viewCtrl, toastService, navParams) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.toastService = toastService;
        this.navParams = navParams;
        this.inspecao = new __WEBPACK_IMPORTED_MODULE_4__models_inspecao__["a" /* Inspecao */]();
        this.ocorrencia = new __WEBPACK_IMPORTED_MODULE_2__models_ocorrencia__["a" /* Ocorrencia */]();
        if (this.navParams.data.ocorrencia.id || this.navParams.data.ocorrencia.idGuidOcorrencia) {
            this.ocorrencia = this.navParams.data.ocorrencia;
        }
        this.inspecao = this.navParams.data.inspecao;
        if (!this.ocorrencia.dataDescricao) {
            var hoje = new Date();
            this.ocorrencia.dataDescricao = this.converterData(hoje);
        }
        if (this.ocorrencia.idInspecaoObraItem) {
            this.itemInspecao = this.inspecao.inspecaoObraItens.find(function (x) { return x.ordem + ' - ' + x.descricao == _this.ocorrencia.descricaoInspecaoObraItem; });
        }
        if (this.navParams.data.itemInspecao) {
            this.itemInspecao = this.navParams.data.itemInspecao;
            this.ocorrencia.numeroInspecao = 1;
            this.popularDescricaoItem();
        }
    }
    ManterOcorrenciaPage.prototype.converterData = function (data) {
        var year = data.getFullYear();
        var month = data.getMonth() + 1;
        var day = data.getDate();
        var dataFormatada = year + '-' + (month.toString().length < 2 ? '0' + month : '' + month) + '-' + (day.toString().length < 2 ? '0' + day : '' + day);
        return dataFormatada;
    };
    ManterOcorrenciaPage.prototype.salvar = function (valido) {
        if (valido) {
            this.viewCtrl.dismiss(this.ocorrencia);
        }
        else {
            this.toastService.presentToastWarning("É obrigatório informar a descrição e sua data.");
        }
    };
    ManterOcorrenciaPage.prototype.voltar = function () {
        this.viewCtrl.dismiss(null);
    };
    ManterOcorrenciaPage.prototype.popularDescricaoItem = function () {
        this.ocorrencia.descricaoInspecaoObraItem = this.itemInspecao.descricao;
        if (this.itemInspecao.id) {
            this.ocorrencia.idInspecaoObraItem = this.itemInspecao.id;
        }
        else {
            this.ocorrencia.idInspecaoObraItem = 0;
        }
    };
    ManterOcorrenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-manter-ocorrencia',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/pages/ocorrencia/manter/manter-ocorrencia.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row class="pad-nav-page" (click)="voltar()">\n            <button class="button-nav">\n                <span ion-text>Voltar</span>\n            </button>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid no-padding>\n        <ion-row padding-left padding-right>\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n                <form #cadastroForm="ngForm" padding-top>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>DATA DA DESCRIÇÃO</ion-label>\n                        <ion-datetime displayFormat="DD/MM/YYYY" name="dataDescricao" [(ngModel)]="ocorrencia.dataDescricao"\n                            cancelText="Cancelar" doneText="Ok" required></ion-datetime>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>DESCRIÇÃO</ion-label>\n                        <ion-textarea text-center type="text" rows="4" [(ngModel)]="ocorrencia.descricao" name="descricao"\n                            required></ion-textarea>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>ITEM DE INSPEÇÃO</ion-label>\n                        <ion-select name="itemInspecao" [(ngModel)]="itemInspecao" placeholder="SELECIONE" (ngModelChange)="popularDescricaoItem()" required>\n                            <ion-option *ngFor="let item of inspecao.inspecaoObraItens" [value]="item" class="fullHeight">{{item.descricao}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>INSPEÇÃO</ion-label>\n                        <ion-select name="inspecao" [(ngModel)]="ocorrencia.numeroInspecao" placeholder="SELECIONE" required>\n                            <ion-option value="1">1ª Inspeção</ion-option>\n                            <ion-option value="2">2ª Inspeção</ion-option>\n                        </ion-select>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>DATA DA TRATATIVA</ion-label>\n                        <ion-datetime displayFormat="DD/MM/YYYY" name="dataTratativa" [(ngModel)]="ocorrencia.dataTratativa"\n                            cancelText="Cancelar" doneText="Ok"></ion-datetime>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>TRATATIVA</ion-label>\n                        <ion-textarea text-center type="text" rows="4" [(ngModel)]="ocorrencia.tratativa" name="tratativa"></ion-textarea>\n                    </ion-item>\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n                        (click)="salvar(cadastroForm.valid)">Salvar</button>\n                </form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/pages/ocorrencia/manter/manter-ocorrencia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], ManterOcorrenciaPage);
    return ManterOcorrenciaPage;
}());

//# sourceMappingURL=manter-ocorrencia.js.map

/***/ })

});
//# sourceMappingURL=17.js.map