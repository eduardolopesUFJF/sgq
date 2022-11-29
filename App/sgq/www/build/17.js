webpackJsonp([17],{

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterOcorrenciaPageModule", function() { return ManterOcorrenciaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manter_ocorrencia__ = __webpack_require__(910);
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

/***/ 798:
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
        this.realizadosPor = [];
        Object.assign(this, values);
    }
    return Inspecao;
}());

//# sourceMappingURL=inspecao.js.map

/***/ }),

/***/ 826:
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

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManterOcorrenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ocorrencia__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_inspecao__ = __webpack_require__(798);
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
            selector: 'page-manter-ocorrencia',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\ocorrencia\manter\manter-ocorrencia.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-row class="pad-nav-page" (click)="voltar()">\n\n            <button class="button-nav">\n\n                <span ion-text>Voltar</span>\n\n            </button>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-grid no-padding>\n\n        <ion-row padding-left padding-right>\n\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <form #cadastroForm="ngForm" padding-top>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>DATA DA DESCRIÇÃO</ion-label>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY" name="dataDescricao" [(ngModel)]="ocorrencia.dataDescricao"\n\n                            cancelText="Cancelar" doneText="Ok" required></ion-datetime>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>DESCRIÇÃO</ion-label>\n\n                        <ion-textarea text-center type="text" rows="4" [(ngModel)]="ocorrencia.descricao" name="descricao"\n\n                            required></ion-textarea>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>ITEM DE INSPEÇÃO</ion-label>\n\n                        <ion-select name="itemInspecao" [(ngModel)]="itemInspecao" placeholder="SELECIONE" (ngModelChange)="popularDescricaoItem()" required>\n\n                            <ion-option *ngFor="let item of inspecao.inspecaoObraItens" [value]="item">{{item.descricao}}</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>INSPEÇÃO</ion-label>\n\n                        <ion-select name="inspecao" [(ngModel)]="ocorrencia.numeroInspecao" placeholder="SELECIONE" required>\n\n                            <ion-option value="1">1ª Inspeção</ion-option>\n\n                            <ion-option value="2">2ª Inspeção</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>DATA DA TRATATIVA</ion-label>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY" name="dataTratativa" [(ngModel)]="ocorrencia.dataTratativa"\n\n                            cancelText="Cancelar" doneText="Ok"></ion-datetime>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>TRATATIVA</ion-label>\n\n                        <ion-textarea text-center type="text" rows="4" [(ngModel)]="ocorrencia.tratativa" name="tratativa"></ion-textarea>\n\n                    </ion-item>\n\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n\n                        (click)="salvar(cadastroForm.valid)">Salvar</button>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\ocorrencia\manter\manter-ocorrencia.html"*/
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