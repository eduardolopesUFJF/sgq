webpackJsonp([20],{

<<<<<<< HEAD
/***/ 730:
=======
/***/ 776:
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterVerificacaoPageModule", function() { return ManterVerificacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parallax_layout_4__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elastic_header_elastic_header_module__ = __webpack_require__(779);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manter_verificacao__ = __webpack_require__(917);
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
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

/***/ 799:
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

/***/ 801:
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

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManterVerificacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_inspecao__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_item_checklist__ = __webpack_require__(801);
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
        this.itemChecklist = new __WEBPACK_IMPORTED_MODULE_3__models_item_checklist__["a" /* ItemChecklist */]();
        this.inspecao = this.navParams.data.inspecao;
        if (this.inspecao.id) {
            this.inspecao.usuarioEdicao = localStorage.getItem('Usuario');
        }
        else {
            this.inspecao.usuarioInclusao = localStorage.getItem('Usuario');
        }
<<<<<<< HEAD
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
        this.ticking = false;
    };
    ElasticHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[elastic-header]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ElasticHeader);
    return ElasticHeader;
}());

//# sourceMappingURL=elastic-header.js.map

/***/ }),

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxLayout4; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParallaxLayout4 = /** @class */ (function () {
    function ParallaxLayout4() {
        this.headerImage = "";
=======
        this.itemChecklist = this.navParams.data.itemChecklist;
        var hoje = new Date();
        this.inspecao.dataInspecao = this.converterData(hoje);
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
    }
    ManterVerificacaoPage.prototype.converterData = function (data) {
        var year = data.getFullYear();
        var month = data.getMonth() + 1;
        var day = data.getDate();
        var dataFormatada = year + '-' + (month.toString().length < 2 ? '0' + month : '' + month) + '-' + (day.toString().length < 2 ? '0' + day : '' + day);
        return dataFormatada;
    };
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
<<<<<<< HEAD
            selector: 'parallax-layout-4',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/parallax/layout-4/parallax.html"*/'<!--- Theme Parallax - News -->\n<ion-header header-ios>\n  <ion-navbar transparent [ngClass]="{\'active\':isClassActive()}">\n    <button ion-button menuToggle>\n      <ion-icon [name]="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="data != null">{{data.headerTitle}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<!--- Header Big Image-->\n<ion-content elastic-header>\n  <ion-item no-lines background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + headerImage + \')\'}">\n    <div title-block *ngIf="data != null">\n      <!--- Parallax Title -->\n      <h1 padding-left parallax-title text-wrap>{{data.title}}</h1>\n      <!--- Category -->\n      <span new-category transparent no-margin padding-bottom padding-left text-uppercase>{{data.category}}</span>\n    </div>\n  </ion-item>\n  <ion-item-group *ngIf="data != null">\n    <ion-item-divider no-lines>\n      <!--- Avatar -->\n      <ion-thumbnail item-start>\n        <img [src]="data.avatar" />\n      </ion-thumbnail>\n      <!-- Avatar Title -->\n      <h2 item-title>{{data.subtitle}}</h2>\n      <!--- Button Share-->\n      <button item-end ion-button ion-text button-action-shit (click)="onEvent(\'onShare\', data)">\n        <ion-icon [name]="data.shareIcon"></ion-icon>\n      </button>\n    </ion-item-divider>\n    <ion-item no-margin no-lines>\n      <p parallax-description text-wrap>{{data.description}}</p>\n    </ion-item>\n    <!-- Content -->\n    <ion-item no-margin no-lines *ngFor="let item of data.items;let i = index">\n      <!-- Content Title-->\n      <h2 parallax-subtitle margin-bottom text-wrap>{{item.title}}</h2>\n      <!-- Content Description-->\n      <p parallax-description text-wrap>{{item.subtitle}}</p>\n    </ion-item>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/parallax/layout-4/parallax.html"*/
=======
            selector: 'page-manter-verificacao',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\verificacao\manter\manter-verificacao.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-row class="pad-nav-page" (click)="voltar()">\n\n            <button class="button-nav">\n\n                <span ion-text>Voltar</span>\n\n            </button>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-grid no-padding>\n\n        <ion-row padding-left padding-right>\n\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <form #cadastroForm="ngForm" padding-top>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>DATA DE ABERTURA</ion-label>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY" name="inspecao.dataInspecao" [(ngModel)]="inspecao.dataInspecao"\n\n                            cancelText="Cancelar" doneText="Ok"></ion-datetime>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>{{itemChecklist.campo1}}</ion-label>\n\n                        <ion-input text-center type="text" [(ngModel)]="inspecao.campo1" name="local1"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent *ngIf="itemChecklist.campo2">\n\n                        <ion-label stacked>{{itemChecklist.campo2}}</ion-label>\n\n                        <ion-input text-center type="text" [(ngModel)]="inspecao.campo2" name="local2"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent *ngIf="itemChecklist.campo3">\n\n                        <ion-label stacked>{{itemChecklist.campo3}}</ion-label>\n\n                        <ion-input text-center type="text" [(ngModel)]="inspecao.campo3" name="local3"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent *ngIf="itemChecklist.campo4">\n\n                        <ion-label stacked>{{itemChecklist.campo4}}</ion-label>\n\n                        <ion-input text-center type="text" [(ngModel)]="inspecao.campo4" name="local4"></ion-input>\n\n                    </ion-item>\n\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n\n                        (click)="salvar(cadastroForm.valid)">Salvar</button>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\verificacao\manter\manter-verificacao.html"*/
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], ManterVerificacaoPage);
    return ManterVerificacaoPage;
}());

//# sourceMappingURL=manter-verificacao.js.map

/***/ })

});
//# sourceMappingURL=20.js.map