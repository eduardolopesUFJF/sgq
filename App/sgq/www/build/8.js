webpackJsonp([8],{

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaCadastroPageModule", function() { return AreaCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_cadastro__ = __webpack_require__(907);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AreaCadastroPageModule = /** @class */ (function () {
    function AreaCadastroPageModule() {
    }
    AreaCadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__area_cadastro__["a" /* AreaCadastroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__area_cadastro__["a" /* AreaCadastroPage */])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AreaCadastroPageModule);
    return AreaCadastroPageModule;
}());

//# sourceMappingURL=area-cadastro.module.js.map

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alteracao; });
var Alteracao = /** @class */ (function () {
    function Alteracao(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Alteracao;
}());

//# sourceMappingURL=alteracao.js.map

/***/ }),

/***/ 834:
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

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Area; });
var Area = /** @class */ (function () {
    function Area(values) {
        if (values === void 0) { values = {}; }
        this.id = 0;
        this.idObra = 0;
        this.status = 0;
        this.situacao = 'Em aberto';
        this.delete = false;
        this.servicos = [];
        Object.assign(this, values);
    }
    return Area;
}());

//# sourceMappingURL=area.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_area__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_alteracao__ = __webpack_require__(833);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_toast_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_servico__ = __webpack_require__(908);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AreaCadastroPage = /** @class */ (function () {
    function AreaCadastroPage(storage, navParams, toastService, viewCtrl) {
        this.storage = storage;
        this.navParams = navParams;
        this.toastService = toastService;
        this.viewCtrl = viewCtrl;
        this.itens = [];
        this.area = new __WEBPACK_IMPORTED_MODULE_2__models_area__["a" /* Area */]();
        this.opcoesItens = [];
        this.servicosEscolhidos = [];
        this.obraId = this.navParams.data.obraId;
        this.obterItensChecklist();
    }
    AreaCadastroPage.prototype.obterItensChecklist = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('itensChecklist').then(function (itens) {
                _this.opcoesItens = itens;
            });
        });
    };
    AreaCadastroPage.prototype.salvar = function (formValido) {
        var _this = this;
        if (formValido) {
            this.servicosEscolhidos.forEach(function (item) {
                var servico = new __WEBPACK_IMPORTED_MODULE_7__models_servico__["a" /* Servico */]();
                servico.idChecklist = item;
                servico.idObra = _this.obraId;
                _this.area.servicos.push(servico);
            });
            this.storage.ready().then(function () {
                var atualizacoesArray = [];
                _this.storage.get('atualizacoes').then(function (atualizacoes) {
                    _this.area.idObra = _this.obraId;
                    var alteracao = new __WEBPACK_IMPORTED_MODULE_4__models_alteracao__["a" /* Alteracao */]({ id: __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__["UUID"].UUID(), tipo: "Insert", entidade: "Area", valor: JSON.stringify(_this.area), data: new Date(), descricao: "Inserção da área: " + _this.area.descricao, idObra: _this.obraId });
                    if (atualizacoes) {
                        atualizacoesArray = atualizacoes;
                        atualizacoesArray.push(alteracao);
                    }
                    else {
                        atualizacoesArray.push(alteracao);
                    }
                    _this.storage.set('atualizacoes', atualizacoesArray);
                    _this.atualizarObra();
                });
            });
        }
        else {
            this.toastService.presentToastWarning("Preencha todos os campos.");
        }
    };
    AreaCadastroPage.prototype.atualizarObra = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('obras').then(function (obras) {
                _this.area.situacao = _this.area.status == 0 ? 'Em aberto' : 'Finalizado';
                obras.find(function (x) { return x.id == _this.obraId; }).areas.unshift(_this.area);
                _this.storage.set('obras', obras);
                _this.viewCtrl.dismiss(_this.area);
            });
        });
    };
    AreaCadastroPage.prototype.voltar = function () {
        this.viewCtrl.dismiss(null);
    };
    AreaCadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-area-cadastro',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\area\cadastro\area-cadastro.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-row>\n\n            <ion-col col-2>\n\n                <button class="button-nav" (click)="voltar()">\n\n                    <span ion-text style="font-size: 0.7em;">Voltar</span>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                <ion-title>Cadastro de Área</ion-title>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content has-header>\n\n    <ion-grid no-padding>\n\n        <ion-row padding-left padding-right>\n\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <form #cadastroForm="ngForm" padding-top>\n\n                    <ion-list radio-group no-margin [(ngModel)]="area.status" name="status">\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Em aberto</ion-label>\n\n                                        <ion-radio [value]="0" checked></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Finalizado</ion-label>\n\n                                        <ion-radio [value]="1"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </ion-list>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>ÁREA</ion-label>\n\n                        <ion-input text-center required type="text" [(ngModel)]="area.descricao" name="area"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>CHECKLIST</ion-label>\n\n                        <ion-select required [(ngModel)]="servicosEscolhidos" multiple="true" name="checklist" okText="Ok"\n\n                            cancelText="Cancelar">\n\n                            <ion-option *ngFor="let item of opcoesItens; let i= index" [value]="item.id">{{item.descricao}}</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: black !important;"\n\n                        (click)="salvar(cadastroForm.valid)">Salvar</button>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\area\cadastro\area-cadastro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__utils_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], AreaCadastroPage);
    return AreaCadastroPage;
}());

//# sourceMappingURL=area-cadastro.js.map

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Servico; });
var Servico = /** @class */ (function () {
    function Servico(values) {
        if (values === void 0) { values = {}; }
        this.id = 0;
        this.descricao = '';
        this.idObra = 0;
        this.idChecklist = 0;
        this.idArea = 0;
        this.metaAprovacao = 90;
        this.status = 0;
        this.delete = false;
        this.dataHoraInclusao = new Date();
        this.dataHoraAlteracao = new Date();
        Object.assign(this, values);
    }
    return Servico;
}());

//# sourceMappingURL=servico.js.map

/***/ })

});
//# sourceMappingURL=8.js.map