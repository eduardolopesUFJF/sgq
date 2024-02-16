webpackJsonp([13],{

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealizarVerificacaoPageModule", function() { return RealizarVerificacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__realizar_verificacao__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__ = __webpack_require__(352);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__realizar_verificacao__["a" /* RealizarVerificacaoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__realizar_verificacao__["a" /* RealizarVerificacaoPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], RealizarVerificacaoPageModule);
    return RealizarVerificacaoPageModule;
}());

//# sourceMappingURL=realizar-verificacao.module.js.map

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

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemInspecao; });
var ItemInspecao = /** @class */ (function () {
    function ItemInspecao(values) {
        if (values === void 0) { values = {}; }
        this.id = 0;
        this.idInspecaoObra = 0;
        this.idGuidInspecao = '';
        this.idGuidItemServico = '';
        this.inspecao1 = '';
        this.inspecao2 = '';
        this.delete = false;
        this.dataHoraAlteracao = new Date();
        Object.assign(this, values);
    }
    return ItemInspecao;
}());

//# sourceMappingURL=item-inspecao.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealizarVerificacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_inspecao__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_funcionario__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_toast_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_item_inspecao__ = __webpack_require__(828);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_servico__ = __webpack_require__(800);
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








var RealizarVerificacaoPage = /** @class */ (function () {
    function RealizarVerificacaoPage(viewCtrl, storage, actionSheetCtrl, toastService, modalCtrl, navParams, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastService = toastService;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.inspecao = new __WEBPACK_IMPORTED_MODULE_2__models_inspecao__["a" /* Inspecao */]();
        this.exibirPorCentroCusto = true;
        this.servico = new __WEBPACK_IMPORTED_MODULE_7__models_servico__["a" /* Servico */]();
        this.descServico = '';
        this.funcionarios = [];
        this.funcionarioInspecionado = new __WEBPACK_IMPORTED_MODULE_3__models_funcionario__["a" /* Funcionario */]();
        this.funcionarioAprovado = new __WEBPACK_IMPORTED_MODULE_3__models_funcionario__["a" /* Funcionario */]();
        this.limpaNA1 = false;
        this.limpaA1 = false;
        this.limpaR1 = false;
        this.limpaX1 = false;
        this.limpaRA2 = false;
        this.limpaX2 = false;
        this.ultimoItem = new __WEBPACK_IMPORTED_MODULE_6__models_item_inspecao__["a" /* ItemInspecao */]();
        this.descServico = this.navParams.data.descServico;
        this.servico = this.navParams.data.servico;
        this.inspecao = this.navParams.data.inspecao;
        this.tratarDatas();
        this.obterFuncionarios();
        this.popularFuncionarioVinculado();
    }
    RealizarVerificacaoPage.prototype.tratarDatas = function () {
        if (this.inspecao.dataInspecao) {
            this.dataAbertura = this.inspecao.dataInspecao.toString().split("T")[0];
        }
        if (this.inspecao.dataEncerramento) {
            if (this.inspecao.dataEncerramento.toString().indexOf("GMT") == -1) {
                this.dataEncerramento = this.inspecao.dataEncerramento.toString().split("T")[0];
            }
            else {
                this.dataEncerramento = this.inspecao.dataEncerramento.toISOString().split("T")[0];
            }
        }
    };
    RealizarVerificacaoPage.prototype.limparFuncionario = function (tipo) {
        if (tipo == 'inspecionado') {
            this.inspecao.idFuncionarioInspecionado = null;
            this.funcionarioInspecionado = null;
        }
        else if (tipo == 'aprovado') {
            this.inspecao.idFuncionarioAprovado = null;
            this.funcionarioAprovado = null;
        }
    };
    RealizarVerificacaoPage.prototype.setaFuncionarioInspecionado = function (event) {
        this.inspecao.idFuncionarioInspecionado = event.value.id;
    };
    RealizarVerificacaoPage.prototype.setaFuncionarioAprovado = function (event) {
        this.inspecao.idFuncionarioAprovado = event.value.id;
    };
    RealizarVerificacaoPage.prototype.obterFuncionarios = function () {
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
                        return [4 /*yield*/, this.storage.get('obras')];
                    case 3:
                        obras = _b.sent();
                        obra = obras.find(function (x) { return x.id == _this.servico.idObra; });
                        if (this.exibirPorCentroCusto) {
                            this.funcionarios = this.funcionarios.filter(function (x) { return x.idCentroCusto == null || x.idCentroCusto == obra.idCentroCusto; }).slice();
                        }
                        this.funcionarioAprovado = this.funcionarios.find(function (x) { return x.id == _this.inspecao.idFuncionarioAprovado; });
                        this.funcionarioInspecionado = this.funcionarios.find(function (x) { return x.id == _this.inspecao.idFuncionarioInspecionado; });
                        return [2 /*return*/];
                }
            });
        });
    };
    RealizarVerificacaoPage.prototype.popularFuncionarioVinculado = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('usuarioVinculado').then(function (idFuncionario) {
                if (!_this.inspecao.idFuncionarioInspecionado && idFuncionario) {
                    _this.inspecao.idFuncionarioInspecionado = idFuncionario;
                    _this.funcionarioInspecionado = _this.funcionarios.find(function (x) { return x.id == idFuncionario; });
                }
            });
        });
    };
    RealizarVerificacaoPage.prototype.exibirOcorrenciasAtalho = function (item) {
        this.navCtrl.push("OcorrenciaPage", { inspecao: this.inspecao, broadcomb: this.descServico, servico: this.servico, itemInspecao: item });
    };
    RealizarVerificacaoPage.prototype.atualizarSituacao = function () {
        this.inspecao.situacao = this.inspecao.status == 0 ? 'Verificação não iniciada' :
            (this.inspecao.status == 1 ? 'Encerrada' : (this.inspecao.status == 2 ? 'Aprovada' : 'Verificação iniciada'));
    };
    RealizarVerificacaoPage.prototype.salvar = function (valido) {
        if (valido) {
            this.inspecao.dataInspecao = this.dataAbertura ? this.dataAbertura : null;
            this.inspecao.dataEncerramento = this.dataEncerramento ? new Date(this.dataEncerramento + "T12:00:00") : null;
            this.inspecao.usuarioEdicao = localStorage.getItem('Usuario');
            if (this.inspecao.status != 1) {
                if (this.inspecao.status == 0 && this.inspecao.inspecaoObraItens.some(function (x) { return x.inspecao1 != ""; })) {
                    this.inspecao.status = 3;
                    this.inspecao.situacao = 'Verificação iniciada';
                }
                this.viewCtrl.dismiss({ inspecao: this.inspecao, concluido: true });
            }
            else {
                var naoFinalizado = this.inspecao.inspecaoObraItens.some(function (x) { return x.inspecao1 == "" || (x.inspecao1 == "R" && x.inspecao2 == ""); });
                if (naoFinalizado) {
                    this.toastService.presentToastWarning("Não é possível salvar com status de finalizado pois existem inspeções pendentes.");
                }
                else {
                    if (!this.inspecao.dataEncerramento) {
                        this.toastService.presentToastWarning("Não é possível salvar com status de finalizado sem informar a data de encerramento.");
                    }
                    else {
                        var itens1Recusado = this.inspecao.inspecaoObraItens.filter(function (x) { return x.inspecao1 == "R"; }).length;
                        var itens2Recusado = this.inspecao.inspecaoObraItens.filter(function (x) { return x.inspecao2 == "X"; }).length;
                        var totalRecusa = itens1Recusado + itens2Recusado;
                        var totalOcorrenciaVinculada = this.inspecao.ocorrencias.length;
                        if (totalOcorrenciaVinculada < totalRecusa) {
                            this.toastService.presentToastWarning("Existem inspeções retrabalhadas e reprovadas sem registro de ocorrência.");
                        }
                        else {
                            var ocorrenciasPreenchidas = this.inspecao.ocorrencias
                                .filter(function (x) { return x.dataDescricao && x.dataTratativa && x.descricao && x.tratativa && !x.delete; }).length;
                            var ocorrenciasAtivas = this.inspecao.ocorrencias.filter(function (x) { return !x.delete; }).length;
                            if (ocorrenciasPreenchidas < ocorrenciasAtivas) {
                                this.toastService.presentToastWarning("Existem ocorrências registradas com preenchimento incompleto.");
                            }
                            else {
                                this.viewCtrl.dismiss({ inspecao: this.inspecao, concluido: true });
                            }
                        }
                    }
                }
            }
        }
        else {
            this.toastService.presentToastWarning("É obrigatório informar o funcionário da inspeção.");
        }
    };
    RealizarVerificacaoPage.prototype.voltar = function () {
        this.viewCtrl.dismiss({ inspecao: this.inspecao, concluido: false });
    };
    RealizarVerificacaoPage.prototype.exibirOpcoes = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            "buttons": [
                {
                    "text": "Ocorrências",
                    handler: function () {
                        _this.navCtrl.push("OcorrenciaPage", { inspecao: _this.inspecao, broadcomb: _this.descServico, servico: _this.servico });
                    }
                },
                {
                    "text": "Realizado Por",
                    handler: function () {
                        _this.navCtrl.push("RealizadoPorPage", { inspecao: _this.inspecao, servico: _this.servico });
                    }
                },
                {
                    "text": "Cancelar",
                    "role": "cancel"
                }
            ]
        });
        actionSheet.present();
    };
    RealizarVerificacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-realizar-verificacao',template:/*ion-inline-start:"C:\Users\jluca\OneDrive\Documents\GitHub\sgq\App\sgq\src\pages\verificacao\realizar\realizar-verificacao.html"*/'<ion-header>\n\n    <ion-navbar class="pad-nav-page-nt2">\n\n        <ion-row>\n\n            <ion-col col-5 class="ptb-0" (click)="voltar()" style="padding-left: 15px !important;">\n\n                <button class="button-nav">\n\n                    <span ion-text>Voltar</span>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col col-7 class="ptb-0 registros-align" style="padding-right: 20px !important;">\n\n                <button class="button-nav" (click)="exibirOpcoes()">\n\n                    <span ion-text>Registros</span>\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-grid no-padding>\n\n        <ion-row padding-left padding-right>\n\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <form #cadastroForm="ngForm" padding-top>\n\n                    <ion-item text-center text-wrap transparent style="padding-bottom: 0 !important;">\n\n                        <ion-label style="font-size: 18px !important; font-weight: bold;" stacked>{{descServico.toUpperCase()}}</ion-label>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent style="text-align: left !important; padding-bottom: 0px !important;">\n\n                        <ion-label>EXIBIR POR CENTRO DE CUSTO</ion-label>\n\n                        <ion-checkbox name="exibirPorCentroCusto" [(ngModel)]="exibirPorCentroCusto" (ngModelChange)="obterFuncionarios()"></ion-checkbox>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent style="padding-bottom: 3px !important;">\n\n                        <ion-label stacked>INSPECIONADO POR</ion-label>\n\n                        <ionic-selectable item-content [(ngModel)]="funcionarioInspecionado" [items]="funcionarios"\n\n                            itemValueField="id" itemTextField="nome" [canSearch]="true" [disabled]="servico.status == 1"\n\n                            name="idFuncionarioInspecionado" (onChange)="setaFuncionarioInspecionado($event)" required>\n\n                        </ionic-selectable>\n\n                    </ion-item>\n\n                    <ion-row *ngIf="funcionarioInspecionado">\n\n                        <ion-col col-8></ion-col>\n\n                        <ion-col col-4>\n\n                            <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: black !important; margin: 0 0 8px 0; height: 10px;"\n\n                                (click)="limparFuncionario(\'inspecionado\')" [disabled]="servico.status == 1">Limpar</button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-item text-center transparent style="padding-bottom: 3px !important;">\n\n                        <ion-label stacked>APROVADOR POR</ion-label>\n\n                        <ionic-selectable item-content [(ngModel)]="funcionarioAprovado" [items]="funcionarios"\n\n                            itemValueField="id" itemTextField="nome" [canSearch]="true" [disabled]="servico.status == 1"\n\n                            name="idFuncionarioAprovado" (onChange)="setaFuncionarioAprovado($event)">\n\n                        </ionic-selectable>\n\n                    </ion-item>\n\n                    <ion-row *ngIf="funcionarioAprovado">\n\n                        <ion-col col-8></ion-col>\n\n                        <ion-col col-4>\n\n                            <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: black !important; margin: 0 0 8px 0; height: 10px;"\n\n                                (click)="limparFuncionario(\'aprovado\')" [disabled]="servico.status == 1">Limpar</button>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-list radio-group no-margin [(ngModel)]="inspecao.status" name="status" (ngModelChange)="atualizarSituacao()"\n\n                        [disabled]="servico.status == 1">\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Não iniciada</ion-label>\n\n                                        <ion-radio [value]="0"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Iniciada</ion-label>\n\n                                        <ion-radio [value]="3"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Aprovada</ion-label>\n\n                                        <ion-radio [value]="2"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Encerrada</ion-label>\n\n                                        <ion-radio [value]="1"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </ion-list>\n\n                    <ion-row>\n\n                        <ion-col col-6>\n\n                            <ion-item text-center transparent>\n\n                                <ion-label stacked>DATA ABERTURA</ion-label>\n\n                                <ion-datetime displayFormat="DD/MM/YYYY" name="dataAbertura" [(ngModel)]="dataAbertura"\n\n                                    [disabled]="servico.status == 1" cancelText="Cancelar" doneText="Ok"></ion-datetime>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                        <ion-col col-6>\n\n                            <ion-item text-center transparent>\n\n                                <ion-label stacked>DATA ENCERRAMENTO</ion-label>\n\n                                <ion-datetime displayFormat="DD/MM/YYYY" name="dataEncerramento" [(ngModel)]="dataEncerramento"\n\n                                    [disabled]="servico.status == 1" cancelText="Cancelar" doneText="Ok"></ion-datetime>\n\n                            </ion-item>\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <hr style="margin: 2px 0 0 0;">\n\n                    <ion-list radio-group no-margin [(ngModel)]="item.inspecao1" name="itemInspecao1+{{i}}" *ngFor="let item of inspecao.inspecaoObraItens; let i=index;"\n\n                        [disabled]="servico.status == 1">\n\n                        <h2 text-wrap style="font-weight: bold;margin-top: 10px;">{{item.descricao}}</h2>\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col col-3>\n\n                                    <ion-item radio style="background-color: blue;">\n\n                                        <ion-label>NA</ion-label>\n\n                                        <ion-radio [value]="\'N\'"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col col-3>\n\n                                    <ion-item radio style="background-color: darkgreen;">\n\n                                        <ion-label>A</ion-label>\n\n                                        <ion-radio [value]="\'A\'"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col col-3>\n\n                                    <ion-item radio style="background-color: yellow;">\n\n                                        <ion-label>R</ion-label>\n\n                                        <ion-radio [value]="\'R\'"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col col-3>\n\n                                    <ion-item radio style="background-color: red;">\n\n                                        <ion-label>X</ion-label>\n\n                                        <ion-radio [value]="\'X\'"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                            <ion-row *ngIf="item.inspecao1 == \'R\'">\n\n                                <ion-list radio-group no-margin [(ngModel)]="item.inspecao2" name="itemInspecao2+{{i}}"\n\n                                    style="width: 100%" [disabled]="servico.status == 1">\n\n                                    <ion-grid>\n\n                                        <ion-row>\n\n                                            <ion-col col-3></ion-col>\n\n                                            <ion-col col-3>\n\n                                                <ion-item radio style="background-color: orange;">\n\n                                                    <ion-label>RA</ion-label>\n\n                                                    <ion-radio [value]="\'A\'"></ion-radio>\n\n                                                </ion-item>\n\n                                            </ion-col>\n\n                                            <ion-col col-3>\n\n                                                <ion-item radio style="background-color: red;">\n\n                                                    <ion-label>X</ion-label>\n\n                                                    <ion-radio [value]="\'X\'"></ion-radio>\n\n                                                </ion-item>\n\n                                            </ion-col>\n\n                                            <ion-col col-3></ion-col>\n\n                                        </ion-row>\n\n                                    </ion-grid>\n\n                                </ion-list>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <ion-col col-6>\n\n                                    <button ion-button default-button block text-capitalize box-shadow margin-bottom\n\n                                        style="background-color: black !important;" (click)="item.inspecao1=\'\';item.inspecao2=\'\'"\n\n                                        [disabled]="servico.status == 1">Limpar</button>\n\n                                </ion-col>\n\n                                <ion-col col-6>\n\n                                    <button ion-button default-button block text-capitalize box-shadow margin-bottom\n\n                                        style="background-color: black !important;" (click)="exibirOcorrenciasAtalho(item)"\n\n                                        [disabled]="servico.status == 1">Ocorrência</button>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                        <hr style="margin: 2px 0 0 0;">\n\n                    </ion-list>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <button ion-button default-button block text-capitalize box-shadow margin-bottom no-margin style="background-color: rgb(33,177,75) !important;"\n\n        (click)="salvar(cadastroForm.valid)" [disabled]="servico.status == 1">Salvar</button>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\jluca\OneDrive\Documents\GitHub\sgq\App\sgq\src\pages\verificacao\realizar\realizar-verificacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_5__utils_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]])
    ], RealizarVerificacaoPage);
    return RealizarVerificacaoPage;
}());

//# sourceMappingURL=realizar-verificacao.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Funcionario; });
var Funcionario = /** @class */ (function () {
    function Funcionario(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Funcionario;
}());

//# sourceMappingURL=funcionario.js.map

/***/ })

});
//# sourceMappingURL=13.js.map