webpackJsonp([14],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaCadastroPageModule", function() { return AreaCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_cadastro__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__ = __webpack_require__(352);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__area_cadastro__["a" /* AreaCadastroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__area_cadastro__["a" /* AreaCadastroPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AreaCadastroPageModule);
    return AreaCadastroPageModule;
}());

//# sourceMappingURL=area-cadastro.module.js.map

/***/ }),

/***/ 781:
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

/***/ 786:
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

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Servico; });
var Servico = /** @class */ (function () {
    function Servico(values) {
        if (values === void 0) { values = {}; }
        this.id = 0;
        this.idGuidServico = '';
        this.descricao = '';
        this.tipo = '';
        this.idObra = 0;
        this.idChecklist = 0;
        this.idChecklistGuid = '';
        this.idArea = 0;
        this.idAreaGuid = "";
        this.metaAprovacao = 90;
        this.status = 0;
        this.situacao = 'Em aberto';
        this.delete = false;
        this.dataHoraInclusao = new Date();
        this.dataHoraAlteracao = new Date();
        this.inspecoesObra = [];
        this.itensChecklistServico = [];
        Object.assign(this, values);
    }
    return Servico;
}());

//# sourceMappingURL=servico.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Area; });
var Area = /** @class */ (function () {
    function Area(values) {
        if (values === void 0) { values = {}; }
        this.id = 0;
        this.idGuid = '';
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

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_area__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_alteracao__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_toast_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_servico__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_storage_service_utils__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var AreaCadastroPage = /** @class */ (function () {
    function AreaCadastroPage(storage, navParams, storageServiceUtils, toastService, viewCtrl) {
        this.storage = storage;
        this.navParams = navParams;
        this.storageServiceUtils = storageServiceUtils;
        this.toastService = toastService;
        this.viewCtrl = viewCtrl;
        this.itens = [];
        this.area = new __WEBPACK_IMPORTED_MODULE_2__models_area__["a" /* Area */]();
        this.opcoesItens = [];
        this.opcoesEscolhidas = [];
        this.servicosEscolhidos = [];
        this.servicosEscolhidosNovos = [];
        this.obraId = this.navParams.data.obraId;
        this.obterItensChecklist();
    }
    AreaCadastroPage.prototype.obterItensChecklist = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('itensChecklist').then(function (itens) {
                _this.opcoesItens = itens;
                _this.opcoesItens.forEach(function (item) {
                    item.descricao = item.codigo + " - " + item.descricao;
                    item.idGuid = item.idGuid ? item.idGuid : (item.id + "");
                });
            });
        });
    };
    AreaCadastroPage.prototype.setaServicoEscolhido = function (event) {
        this.servicosEscolhidos = event.value.map(function (x) { return x.id; });
        this.servicosEscolhidosNovos = event.value.map(function (x) { return x.idGuid; });
        this.servicosEscolhidos = this.servicosEscolhidos.filter(function (x) { return x != 0; });
        this.servicosEscolhidosNovos = this.servicosEscolhidosNovos.filter(function (x) { return x.length > 10; });
    };
    AreaCadastroPage.prototype.salvar = function (formValido) {
        var _this = this;
        if (formValido) {
            this.area.idGuid = __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__["UUID"].UUID();
            this.servicosEscolhidos.forEach(function (item) {
                var servico = new __WEBPACK_IMPORTED_MODULE_7__models_servico__["a" /* Servico */]();
                servico.idGuidServico = __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__["UUID"].UUID();
                servico.idChecklist = item;
                servico.idObra = _this.obraId;
                servico.idAreaGuid = _this.area.idGuid;
                var servicoEscolhido = _this.opcoesItens.find(function (x) { return x.id == item; });
                servico.itensChecklistServico = servicoEscolhido.itensChecklistServico;
                servico.descricao = servicoEscolhido.descricao;
                servico.tipo = servicoEscolhido.tipo;
                _this.area.servicos.push(servico);
            });
            this.servicosEscolhidosNovos.forEach(function (item) {
                var servico = new __WEBPACK_IMPORTED_MODULE_7__models_servico__["a" /* Servico */]();
                servico.idGuidServico = __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__["UUID"].UUID();
                servico.idChecklistGuid = item;
                servico.idObra = _this.obraId;
                servico.idAreaGuid = _this.area.idGuid;
                var servicoEscolhido = _this.opcoesItens.find(function (x) { return x.idGuid == item; });
                servico.itensChecklistServico = servicoEscolhido.itensChecklistServico;
                servico.descricao = servicoEscolhido.descricao;
                servico.tipo = servicoEscolhido.tipo;
                _this.area.servicos.push(servico);
            });
            this.storage.ready().then(function () {
                var atualizacoesArray = [];
                _this.storage.get('atualizacoes').then(function (atualizacoes) {
                    _this.area.idObra = _this.obraId;
                    var alteracao = new __WEBPACK_IMPORTED_MODULE_4__models_alteracao__["a" /* Alteracao */]({ id: __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__["UUID"].UUID(), idArea: _this.area.id, idGuidArea: _this.area.idGuid, tipo: "Insert", entidade: "Area", valor: JSON.stringify(_this.area), data: new Date(), descricao: "Inserção da área: " + _this.area.descricao, obraId: _this.obraId });
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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var obras;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageServiceUtils.montarObra()];
                    case 1:
                        obras = _a.sent();
                        this.area.situacao = this.area.status == 0 ? 'Em aberto' : 'Finalizado';
                        obras.find(function (x) { return x.id == _this.obraId; }).areas.unshift(this.area);
                        this.storageServiceUtils.armazenarObraNoStorage(obras);
                        this.viewCtrl.dismiss(this.area);
                        return [2 /*return*/];
                }
            });
        });
    };
    AreaCadastroPage.prototype.voltar = function () {
        this.viewCtrl.dismiss(null);
    };
    AreaCadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-area-cadastro',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\area\cadastro\area-cadastro.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-row class="pad-nav-page" (click)="voltar()">\n\n            <button class="button-nav">\n\n                <span ion-text>Voltar</span>\n\n            </button>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-grid no-padding>\n\n        <ion-row padding-left padding-right>\n\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <form #cadastroForm="ngForm" padding-top>\n\n                    <ion-list radio-group no-margin [(ngModel)]="area.status" name="status">\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Em aberto</ion-label>\n\n                                        <ion-radio [value]="0" checked></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Finalizado</ion-label>\n\n                                        <ion-radio [value]="1"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </ion-list>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>ÁREA</ion-label>\n\n                        <ion-input text-center required type="text" [(ngModel)]="area.descricao" name="area"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>CHECKLIST</ion-label>\n\n                        <ionic-selectable \n\n                            item-content\n\n                            [(ngModel)]="servicoEscolhido"\n\n                            [items]="opcoesItens"\n\n                            itemValueField="idGuid"\n\n                            itemTextField="descricao"\n\n                            [canSearch]="true"\n\n                            [isMultiple]="true"\n\n                            name="servicosEscolhidos"\n\n                            (onChange)="setaServicoEscolhido($event)"\n\n                            required>\n\n                        </ionic-selectable>\n\n                    </ion-item>\n\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n\n                        (click)="salvar(cadastroForm.valid)">Salvar</button>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\area\cadastro\area-cadastro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__utils_storage_service_utils__["a" /* StorageServiceUtils */],
            __WEBPACK_IMPORTED_MODULE_5__utils_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], AreaCadastroPage);
    return AreaCadastroPage;
}());

//# sourceMappingURL=area-cadastro.js.map

/***/ })

});
//# sourceMappingURL=14.js.map