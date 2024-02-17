webpackJsonp([4],{

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealizadoPorPageModule", function() { return RealizadoPorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__realizado_por__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RealizadoPorPageModule = /** @class */ (function () {
    function RealizadoPorPageModule() {
    }
    RealizadoPorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__realizado_por__["a" /* RealizadoPorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__realizado_por__["a" /* RealizadoPorPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], RealizadoPorPageModule);
    return RealizadoPorPageModule;
}());

//# sourceMappingURL=realizado-por.module.js.map

/***/ }),

/***/ 785:
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

/***/ 790:
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

/***/ 803:
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

/***/ 804:
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

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealizadoPorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_inspecao__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_realizado_por__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_storage_service_utils__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_servico__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_fornecedor__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_toast_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_realizado_por_funcionario__ = __webpack_require__(921);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_uuid__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_alteracao__ = __webpack_require__(790);
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};












var RealizadoPorPage = /** @class */ (function () {
    function RealizadoPorPage(viewCtrl, storage, storageServiceUtils, toastService, navParams) {
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.storageServiceUtils = storageServiceUtils;
        this.toastService = toastService;
        this.navParams = navParams;
        this.inspecao = new __WEBPACK_IMPORTED_MODULE_2__models_inspecao__["a" /* Inspecao */]();
        this.servico = new __WEBPACK_IMPORTED_MODULE_6__models_servico__["a" /* Servico */]();
        this.realizadoPor = new __WEBPACK_IMPORTED_MODULE_4__models_realizado_por__["a" /* RealizadoPor */]();
        this.cadastrando = false;
        this.funcionarios = [];
        this.funcionariosSelecionados = [];
        this.fornecedores = [];
        this.fornecedorSelecionado = new __WEBPACK_IMPORTED_MODULE_7__models_fornecedor__["a" /* Fornecedor */]();
        this.funcionariosTerceirizadosSelecionados = [];
        this.inspecao = this.navParams.data.inspecao;
        if (!this.inspecao.realizadosPor) {
            this.inspecao.realizadosPor = [];
        }
        this.servico = this.navParams.data.servico;
        this.obterFuncionarios();
        this.obterFornecedores();
    }
    RealizadoPorPage.prototype.obterFuncionarios = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, obras, obra;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.storage.ready()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.storage.get('funcionarios')];
                    case 2:
                        _a.funcionarios = _b.sent();
                        return [4 /*yield*/, this.storageServiceUtils.montarObra()];
                    case 3:
                        obras = _b.sent();
                        obra = obras.find(function (x) { return x.id == _this.servico.idObra; });
                        this.idCentroCusto = obra.idCentroCusto;
                        this.descricaoCentroCusto = obra.descricao;
                        this.funcionarios = __spreadArrays(this.funcionarios);
                        return [2 /*return*/];
                }
            });
        });
    };
    RealizadoPorPage.prototype.obterFornecedores = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.storage.ready()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.storage.get('fornecedores')];
                    case 2:
                        _a.fornecedores = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RealizadoPorPage.prototype.limparSelecoes = function () {
        this.funcionariosSelecionados = [];
        this.fornecedorSelecionado = new __WEBPACK_IMPORTED_MODULE_7__models_fornecedor__["a" /* Fornecedor */]();
        this.funcionariosTerceirizadosSelecionados = [];
    };
    RealizadoPorPage.prototype.salvar = function (valid) {
        if (valid) {
            var realizadoPor_1 = new __WEBPACK_IMPORTED_MODULE_4__models_realizado_por__["a" /* RealizadoPor */]({
                idGuid: __WEBPACK_IMPORTED_MODULE_10_angular2_uuid__["UUID"].UUID(),
                idInspecao: this.inspecao.id,
                idGuidInspecao: this.inspecao.idGuidInspecao,
                tipoFuncionario: this.realizadoPor.tipoFuncionario,
                idCentroCusto: this.realizadoPor.tipoFuncionario == 1 ? this.idCentroCusto : null,
                nomeCentroCusto: this.realizadoPor.tipoFuncionario == 1 ? this.descricaoCentroCusto : null,
                idFornecedor: this.realizadoPor.tipoFuncionario == 0 ? this.fornecedorSelecionado.id : null,
                nomeFornecedor: this.realizadoPor.tipoFuncionario == 0 ? this.fornecedorSelecionado.nome : null,
                delete: false,
                nomesFuncionarios: this.realizadoPor.tipoFuncionario == 0 ?
                    this.funcionariosTerceirizadosSelecionados.map(function (x) { return x.nome; }) : this.funcionariosSelecionados.map(function (x) { return x.nome; })
            });
            if (this.realizadoPor.tipoFuncionario == 0) {
                this.funcionariosTerceirizadosSelecionados.forEach(function (item) {
                    realizadoPor_1.funcionarios.push(new __WEBPACK_IMPORTED_MODULE_9__models_realizado_por_funcionario__["a" /* RealizadoPorFuncionario */]({
                        idFuncionarioTerceirizado: item.id
                    }));
                });
            }
            else {
                this.funcionariosSelecionados.forEach(function (item) {
                    realizadoPor_1.funcionarios.push(new __WEBPACK_IMPORTED_MODULE_9__models_realizado_por_funcionario__["a" /* RealizadoPorFuncionario */]({
                        idFuncionario: item.id
                    }));
                });
            }
            this.inspecao.realizadosPor.push(realizadoPor_1);
            this.gerarAtualizacaoDeCriacao(realizadoPor_1);
            this.realizadoPor = new __WEBPACK_IMPORTED_MODULE_4__models_realizado_por__["a" /* RealizadoPor */]();
            this.cadastrando = false;
        }
        else {
            this.toastService.presentToastWarning("Você precisa preencher todos os campos.");
        }
    };
    RealizadoPorPage.prototype.gerarAtualizacaoDeCriacao = function (realizadoPor) {
        var _this = this;
        this.storage.ready().then(function () {
            var atualizacoesArray = [];
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                var alteracao = new __WEBPACK_IMPORTED_MODULE_11__models_alteracao__["a" /* Alteracao */]({ id: __WEBPACK_IMPORTED_MODULE_10_angular2_uuid__["UUID"].UUID(), idRealizadoPor: realizadoPor.id, idGuidRealizadoPor: realizadoPor.idGuid, idInspecao: _this.inspecao.id, idGuidInspecao: _this.inspecao.idGuidInspecao, tipo: "Insert", entidade: "RealizadoPor", valor: JSON.stringify(realizadoPor), data: new Date(), descricao: "Definição de 'Realizado Por' no serviço '" + _this.servico.descricao + "." });
                if (atualizacoes) {
                    atualizacoesArray = atualizacoes;
                    atualizacoesArray.push(alteracao);
                }
                else {
                    atualizacoesArray.push(alteracao);
                }
                _this.storage.set('atualizacoes', atualizacoesArray);
                _this.atualizarObraEdicao(_this.inspecao);
            });
        });
    };
    RealizadoPorPage.prototype.gerarAtualizacaoDeStatus = function (realizadoPor) {
        var _this = this;
        this.storage.ready().then(function () {
            var atualizacoesArray = [];
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                var alteracao = new __WEBPACK_IMPORTED_MODULE_11__models_alteracao__["a" /* Alteracao */]({ id: __WEBPACK_IMPORTED_MODULE_10_angular2_uuid__["UUID"].UUID(), idRealizadoPor: realizadoPor.id, idGuidRealizadoPor: realizadoPor.idGuid, tipo: "Update", entidade: "RealizadoPor", valor: JSON.stringify(realizadoPor), data: new Date(), descricao: "Remoção de 'Realizado Por' no serviço '" + _this.servico.descricao + "." });
                if (atualizacoes) {
                    atualizacoesArray = atualizacoes;
                    atualizacoesArray.push(alteracao);
                }
                else {
                    atualizacoesArray.push(alteracao);
                }
                _this.storage.set('atualizacoes', atualizacoesArray);
                _this.atualizarObraEdicao(_this.inspecao);
            });
        });
    };
    RealizadoPorPage.prototype.remover = function (item) {
        var realizadoPor = this.inspecao.realizadosPor.find(function (x) { return item.id ? x.id == item.id : x.idGuid == item.idGuid; });
        if (item.id) {
            realizadoPor.delete = !realizadoPor.delete;
        }
        else {
            var indice = this.inspecao.realizadosPor.findIndex(function (x) { return x.idGuid == item.idGuid; });
            this.inspecao.realizadosPor.splice(indice, 1);
        }
        this.gerarAtualizacaoDeStatus(realizadoPor);
    };
    RealizadoPorPage.prototype.atualizarObraEdicao = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var obras, inspecao;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageServiceUtils.montarObra()];
                    case 1:
                        obras = _a.sent();
                        inspecao = obras.find(function (x) { return x.id == _this.servico.idObra; }).areas.find(function (x) { return _this.servico.idAreaGuid ? (x.idGuid == _this.servico.idAreaGuid) : (x.id == _this.servico.idArea); }).servicos.find(function (x) { return _this.servico.idGuidServico ? (x.idGuidServico == _this.servico.idGuidServico) : (x.id == _this.servico.id); }).inspecoesObra.find(function (x) { return item.idGuidInspecao ? (x.idGuidInspecao == item.idGuidInspecao) : (x.id == item.id); });
                        inspecao.realizadosPor = item.realizadosPor;
                        this.storageServiceUtils.armazenarObraNoStorage(obras);
                        return [2 /*return*/];
                }
            });
        });
    };
    RealizadoPorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-realizado-por',template:/*ion-inline-start:"C:\Users\jluca\OneDrive\Documents\GitHub\sgq\App\sgq\src\pages\verificacao\realizado-por\realizado-por.html"*/'<ion-header>\n\n    <ion-navbar class="pad-nav-page-nt2">\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-grid no-padding>\n\n        <ion-row *ngIf="!cadastrando">\n\n            <ion-col col-12>\n\n                <button ion-button default-button block text-capitalize box-shadow margin-bottom class="button-novo"\n\n                (click)="cadastrando = true">Adicionar</button>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="!cadastrando">\n\n            <ion-list no-margin>\n\n                <ion-item default-item no-lines [ngClass]="{\'novo-item\': !item.id, \'item-removido\': item.delete}"\n\n                    *ngFor="let item of inspecao.realizadosPor; let i = index;">\n\n                    <ion-row class="espacamento">\n\n                        <ion-col col-10>\n\n                            <h2 item-title text-wrap>Empresa: {{ item.tipoFuncionario == 0 ? item.nomeFornecedor :\n\n                                item.nomeCentroCusto }}</h2>\n\n                            <h2 item-title text-wrap>Funcionários: {{ item.nomesFuncionarios }}</h2>\n\n                        </ion-col>\n\n                        <ion-col col-2>\n\n                            <ion-icon name="trash" icon-small item-right style="font-size: 32px !important; margin: 0px"\n\n                                (click)="remover(item)"></ion-icon>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-item>\n\n            </ion-list>\n\n        </ion-row>\n\n        <ion-row padding-left padding-right *ngIf="cadastrando">\n\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <form #cadastroForm="ngForm" padding-top>\n\n                    <ion-list radio-group no-margin [(ngModel)]="realizadoPor.tipoFuncionario" name="tipoFuncionario"\n\n                        (ngModelChange)="limparSelecoes()">\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Terceirizado</ion-label>\n\n                                        <ion-radio [value]="0" checked></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Próprio</ion-label>\n\n                                        <ion-radio [value]="1"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </ion-list>\n\n                    <ion-item text-center transparent *ngIf="realizadoPor.tipoFuncionario == 0">\n\n                        <ion-label stacked>EMPRESA</ion-label>\n\n                        <ionic-selectable item-content [(ngModel)]="fornecedorSelecionado" [items]="fornecedores"\n\n                            itemValueField="id" itemTextField="nome" [canSearch]="true" name="fornecedorSelecionado"\n\n                            required>\n\n                        </ionic-selectable>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent *ngIf="realizadoPor.tipoFuncionario == 1 || (realizadoPor.tipoFuncionario == 0 && fornecedorSelecionado.id)">\n\n                        <ion-label stacked>FUNCIONÁRIOS</ion-label>\n\n                        <ionic-selectable *ngIf="realizadoPor.tipoFuncionario == 1" item-content [(ngModel)]="funcionariosSelecionados"\n\n                            [items]="funcionarios" itemValueField="id" itemTextField="nome" [canSearch]="true"\n\n                            [isMultiple]="true" name="funcionariosSelecionados" required>\n\n                        </ionic-selectable>\n\n                        <ionic-selectable *ngIf="realizadoPor.tipoFuncionario == 0" item-content [(ngModel)]="funcionariosTerceirizadosSelecionados"\n\n                            [items]="fornecedorSelecionado.funcionariosTerceirizados" itemValueField="id" itemTextField="nome"\n\n                            [canSearch]="true" [isMultiple]="true" name="funcionariosTerceirizadosSelecionados">\n\n                        </ionic-selectable>\n\n                    </ion-item>\n\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n\n                        (click)="salvar(cadastroForm.valid)">Salvar</button>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jluca\OneDrive\Documents\GitHub\sgq\App\sgq\src\pages\verificacao\realizado-por\realizado-por.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__utils_storage_service_utils__["a" /* StorageServiceUtils */],
            __WEBPACK_IMPORTED_MODULE_8__utils_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], RealizadoPorPage);
    return RealizadoPorPage;
}());

//# sourceMappingURL=realizado-por.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealizadoPor; });
var RealizadoPor = /** @class */ (function () {
    function RealizadoPor(values) {
        if (values === void 0) { values = {}; }
        this.tipoFuncionario = 0;
        this.nomeCentroCusto = "";
        this.nomeFornecedor = "";
        this.funcionarios = [];
        this.nomesFuncionarios = [];
        Object.assign(this, values);
    }
    return RealizadoPor;
}());

//# sourceMappingURL=realizado-por.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fornecedor; });
var Fornecedor = /** @class */ (function () {
    function Fornecedor(values) {
        if (values === void 0) { values = {}; }
        this.funcionariosTerceirizados = [];
        Object.assign(this, values);
    }
    return Fornecedor;
}());

//# sourceMappingURL=fornecedor.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealizadoPorFuncionario; });
var RealizadoPorFuncionario = /** @class */ (function () {
    function RealizadoPorFuncionario(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return RealizadoPorFuncionario;
}());

//# sourceMappingURL=realizado-por-funcionario.js.map

/***/ })

});
//# sourceMappingURL=4.js.map