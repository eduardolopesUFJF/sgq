webpackJsonp([19],{

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterOcorrenciaPageModule", function() { return ManterOcorrenciaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manter_ocorrencia__ = __webpack_require__(911);
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

/***/ 827:
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

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManterOcorrenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ocorrencia__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_inspecao__ = __webpack_require__(799);
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
<<<<<<< HEAD
            selector: 'appearance-animation-layout-5',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/appearance-animation/layout-5/appearance-animation.html"*/'<!--Theme Appearance animation (Zoom In)-->\n<ion-content>\n    <h2 text-center text-wrap class="broadcomb" *ngIf="config.broadcomb">{{config.broadcomb.toUpperCase()}}</h2>\n    <h2 padding text-center class="aviso" *ngIf="!config.naoExibirMensagemListaVazia && (animateItems.length < 1 || data.length < 1)">Nenhum\n        registro encontrado.</h2>\n    <ion-grid no-padding *ngIf="data != null">\n        <ion-row *ngIf="config.exibirDatas && animateItems.length > 0">\n            <ion-col col-12>\n                <h3 item-data text-wrap text-center *ngIf="ultimoDownload != \'Nunca\'">Último download: {{ultimoDownload\n                    | date: \'dd/MM/yyyy HH:mm\'}}</h3>\n                <h3 item-data text-wrap text-center *ngIf="ultimoUpload != \'Nunca\'">Última publicação: {{ultimoUpload |\n                    date: \'dd/MM/yyyy HH:mm\'}}</h3>\n                <h3 item-data text-wrap text-center *ngIf="ultimoDownload == \'Nunca\'">Último download:\n                    {{ultimoDownload}}</h3>\n                <h3 item-data text-wrap text-center *ngIf="ultimoUpload == \'Nunca\'">Última publicação: {{ultimoUpload}}</h3>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="config.btnNovoLabel">\n            <button ion-button default-button block text-capitalize box-shadow margin-bottom class="button-novo"\n                (click)="onEvent(\'onAddClick\')">{{config.btnNovoLabel}}</button>\n        </ion-row>\n        <ion-grid [ngClass]="{\'filtros\': config.filtrarSituacao}">\n            <ion-list radio-group no-margin [(ngModel)]="situacao" name="situacao" id="situacao" (ngModelChange)="filtrarSituacao($event)">\n                <ion-row *ngIf="config.filtrarSituacao">\n                    <h3 item-data text-wrap text-center>Filtros:</h3>\n                </ion-row>\n                <ion-row *ngIf="config.filtrarSituacao">\n                    <ion-col col-6>\n                        <ion-item radio>\n                            <ion-label>Em aberto</ion-label>\n                            <ion-radio [value]="0" checked></ion-radio>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item radio>\n                            <ion-label>Finalizado</ion-label>\n                            <ion-radio [value]="1"></ion-radio>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class="col-search" col-12 *ngIf="data.length > 0 || !animacaoAtiva" [ngClass]="{\'margin-top-10\': !config.exibirDatas}">\n                        <ion-searchbar [(ngModel)]="searchbarDefault" [placeholder]="\'Filtrar pela descrição\'"\n                            (ionInput)="filtrar($event.target.value)"></ion-searchbar>\n                    </ion-col>\n                </ion-row>\n            </ion-list>\n        </ion-grid>\n        <ion-grid style="padding-top: 0;">\n            <ion-row>\n                <ion-col col-12>\n                    <ion-list no-margin *ngIf="animacaoAtiva">\n                        <ion-item default-item no-lines [ngClass]="{\'novo-item\': verificaNovoItem(item) && !config.alteracoes, \'zoom-in\': true}"\n                            *ngFor="let item of animateItems; let i = index;" (click)="onEvent(\'onItemClick\', item, $event)">\n                            <ion-row class="espacamento">\n                                <ion-col col-10>\n                                    <h2 *ngIf="!config.concatena" item-title text-wrap>{{item.descricao}}</h2>\n                                    <h2 *ngIf="config.concatena" item-title text-wrap>{{item.codigo}} -\n                                        {{item.descricao}}</h2>\n                                    <h3 item-situacao text-wrap *ngIf="config.subTitulo">{{config.subTitulo}}:\n                                        {{config.alteracoes ? (item.data | date: \'dd/MM/yyyy hh:mm\') :\n                                        item.situacao }}</h3>\n                                </ion-col>\n                                <ion-col col-2 *ngIf="config.exclusaoPossivel" (click)="onEvent(\'onIconClick\', item, $event)">\n                                    <ion-icon icon-small name="{{config.icon}}" item-right style="font-size: 25px !important; margin: 0px"\n                                        [ngClass]="{\'color-black\': !item.delete , \'color-red\' : item.delete}"></ion-icon>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row class="espacamento" *ngIf="config.tipo">\n                                <ion-col col-12 class="tipo">\n                                    <h3 no-margin item-tipo text-wrap>{{item.tipo.length > 1 ?\n                                        item.tipo.toUpperCase() :\n                                        (item.tipo == \'C\' ? \'CONTROLADO\' : \'ESPECIALIZADO\') }}</h3>\n                                </ion-col>\n                            </ion-row>\n                        </ion-item>\n                    </ion-list>\n\n                    <ion-list no-margin *ngIf="!animacaoAtiva">\n                        <ion-item default-item no-lines [ngClass]="{\'novo-item\': verificaNovoItem(item) && !config.alteracoes}"\n                            *ngFor="let item of data; let i = index;" (click)="onEvent(\'onItemClick\', item, $event)">\n                            <ion-row class="espacamento">\n                                <ion-col col-10>\n                                    <h2 *ngIf="!config.concatena" item-title text-wrap>{{item.descricao}}</h2>\n                                    <h2 *ngIf="config.concatena" item-title text-wrap>{{item.codigo}} -\n                                        {{item.descricao}}</h2>\n                                    <h3 item-situacao text-wrap *ngIf="config.subTitulo">{{config.subTitulo}}:\n                                        {{config.alteracoes ? (item.data | date: \'dd/MM/yyyy hh:mm\') :\n                                        item.situacao}}</h3>\n                                </ion-col>\n                                <ion-col col-2 *ngIf="config.exclusaoPossivel">\n                                    <ion-icon icon-small name="{{config.icon}}" item-right (click)="onEvent(\'onIconClick\', item, $event)"\n                                        style="font-size: 25px !important; margin: 0px" [ngClass]="{\'color-black\': !item.delete , \'color-red\' : item.delete}"></ion-icon>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row class="espacamento" *ngIf="config.tipo">\n                                <ion-col col-12 class="tipo">\n                                    <h3 no-margin item-tipo text-wrap>{{item.tipo.length > 1 ?\n                                        item.tipo.toUpperCase() :\n                                        (item.tipo == \'C\' ? \'CONTROLADO\' : \'ESPECIALIZADO\') }}</h3>\n                                </ion-col>\n                            </ion-row>\n                        </ion-item>\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/appearance-animation/layout-5/appearance-animation.html"*/
=======
            selector: 'page-manter-ocorrencia',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\ocorrencia\manter\manter-ocorrencia.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-row class="pad-nav-page" (click)="voltar()">\n\n            <button class="button-nav">\n\n                <span ion-text>Voltar</span>\n\n            </button>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-grid no-padding>\n\n        <ion-row padding-left padding-right>\n\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <form #cadastroForm="ngForm" padding-top>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>DATA DA DESCRIÇÃO</ion-label>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY" name="dataDescricao" [(ngModel)]="ocorrencia.dataDescricao"\n\n                            cancelText="Cancelar" doneText="Ok" required></ion-datetime>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>DESCRIÇÃO</ion-label>\n\n                        <ion-textarea text-center type="text" rows="4" [(ngModel)]="ocorrencia.descricao" name="descricao"\n\n                            required></ion-textarea>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>ITEM DE INSPEÇÃO</ion-label>\n\n                        <ion-select name="itemInspecao" [(ngModel)]="itemInspecao" placeholder="SELECIONE" (ngModelChange)="popularDescricaoItem()" required>\n\n                            <ion-option *ngFor="let item of inspecao.inspecaoObraItens" [value]="item" class="fullHeight">{{item.descricao}}</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>INSPEÇÃO</ion-label>\n\n                        <ion-select name="inspecao" [(ngModel)]="ocorrencia.numeroInspecao" placeholder="SELECIONE" required>\n\n                            <ion-option value="1">1ª Inspeção</ion-option>\n\n                            <ion-option value="2">2ª Inspeção</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>DATA DA TRATATIVA</ion-label>\n\n                        <ion-datetime displayFormat="DD/MM/YYYY" name="dataTratativa" [(ngModel)]="ocorrencia.dataTratativa"\n\n                            cancelText="Cancelar" doneText="Ok"></ion-datetime>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>TRATATIVA</ion-label>\n\n                        <ion-textarea text-center type="text" rows="4" [(ngModel)]="ocorrencia.tratativa" name="tratativa"></ion-textarea>\n\n                    </ion-item>\n\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n\n                        (click)="salvar(cadastroForm.valid)">Salvar</button>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\ocorrencia\manter\manter-ocorrencia.html"*/
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], ManterOcorrenciaPage);
    return ManterOcorrenciaPage;
}());

<<<<<<< HEAD
//# sourceMappingURL=appearance-animation-layout-5.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlteracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_message_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_loading_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_storage_service_utils__ = __webpack_require__(156);
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






var AlteracoesPage = /** @class */ (function () {
    function AlteracoesPage(storage, messageService, loadingService, storageServiceUtils, navCtrl) {
        var _this = this;
        this.storage = storage;
        this.messageService = messageService;
        this.loadingService = loadingService;
        this.storageServiceUtils = storageServiceUtils;
        this.navCtrl = navCtrl;
        this.reload = true;
        this.alteracoes = [];
        this.events = {
            onIconClick: function (data) {
                _this.confirmarExclusao(data);
            }
        };
        this.config = {
            "exclusaoPossivel": false,
            "icon": "trash",
            "exibirDatas": false,
            "subTitulo": "Data",
            "tipo": false,
            "alteracoes": true
        };
        this.obterAlteracoes();
    }
    AlteracoesPage.prototype.obterAlteracoes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var atualizacoes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get('atualizacoes')];
                    case 2:
                        atualizacoes = _a.sent();
                        if (atualizacoes && atualizacoes.length > 0) {
                            this.alteracoes = atualizacoes;
                        }
                        else {
                            this.alteracoes = [];
                            this.messageService.exibirMensagem("Não há nenhuma alteração pendente.");
                            this.navCtrl.setRoot("HomePage");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AlteracoesPage.prototype.confirmarExclusao = function (alteracao) {
        var _this = this;
        var mensagem = "Deseja realmente desfazer a alteração '" + alteracao.descricao + "'?";
        ;
        this.messageService.exibirMensagemConfirmacao(mensagem, function () { _this.excluirAlteracao(alteracao); });
    };
    AlteracoesPage.prototype.excluirAlteracao = function (alteracao) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                var indexArea = atualizacoes.findIndex(function (x) { return x.id == alteracao.id; });
                atualizacoes.splice(indexArea, 1);
                _this.storage.set('atualizacoes', atualizacoes);
                _this.alteracoes = atualizacoes;
                _this.atualizarLista();
                _this.atualizarObra(alteracao);
            });
        });
    };
    AlteracoesPage.prototype.atualizarLista = function () {
        var _this = this;
        this.reload = false;
        this.loadingService.show();
        setTimeout(function () {
            _this.reload = true;
            _this.loadingService.hide();
        }, 700);
    };
    AlteracoesPage.prototype.atualizarObra = function (alteracao) {
        return __awaiter(this, void 0, void 0, function () {
            var obras, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageServiceUtils.montarObra()];
                    case 1:
                        obras = _a.sent();
                        switch (alteracao.entidade.toLowerCase()) {
                            case "area":
                                if (alteracao.tipo.toLowerCase() == "insert") {
                                    index = obras.find(function (x) { return x.id == alteracao.obraId; }).areas.findIndex(function (x) { return x.id == JSON.parse(alteracao.valor).id; });
                                    obras.find(function (x) { return x.id == alteracao.obraId; }).areas.splice(index, 1);
                                    break;
                                }
                                else {
                                    obras.find(function (x) { return x.id == alteracao.obraId; }).areas.find(function (x) { return x.id == JSON.parse(alteracao.valor).id; }).delete = !JSON.parse(alteracao.valor).delete;
                                    break;
                                }
                        }
                        this.storageServiceUtils.armazenarObraNoStorage(obras);
                        return [2 /*return*/];
                }
            });
        });
    };
    AlteracoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alteracoes',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/pages/alteracoes/alteracoes.html"*/'<ion-header>\n    <ion-navbar class="pad-nav-page">\n        <button ion-button menuToggle>\n            <ion-icon class="icon-menu" name="menu"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>\n\n<appearance-animation-layout-5 has-header *ngIf="reload" [data]="alteracoes" [events]="events" [config]="config"></appearance-animation-layout-5>'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/pages/alteracoes/alteracoes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__utils_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__utils_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_5__utils_storage_service_utils__["a" /* StorageServiceUtils */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]])
    ], AlteracoesPage);
    return AlteracoesPage;
}());

//# sourceMappingURL=alteracoes.js.map
=======
//# sourceMappingURL=manter-ocorrencia.js.map
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51

/***/ })

});
//# sourceMappingURL=19.js.map