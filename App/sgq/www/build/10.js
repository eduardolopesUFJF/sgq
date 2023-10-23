webpackJsonp([10,28],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearanceAnimationLayout5Module", function() { return AppearanceAnimationLayout5Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_5__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppearanceAnimationLayout5Module = /** @class */ (function () {
    function AppearanceAnimationLayout5Module() {
    }
    AppearanceAnimationLayout5Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_5__["a" /* AppearanceAnimationLayout5 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_5__["a" /* AppearanceAnimationLayout5 */]),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_5__["a" /* AppearanceAnimationLayout5 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppearanceAnimationLayout5Module);
    return AppearanceAnimationLayout5Module;
}());

//# sourceMappingURL=appearance-animation-layout-5.module.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
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

/***/ 784:
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

/***/ 798:
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

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealizarVerificacaoPage; });
=======
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistPageModule", function() { return ChecklistPageModule; });
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_list_view_appearance_animation_layout_5_appearance_animation_layout_5_module__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checklist__ = __webpack_require__(902);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChecklistPageModule = /** @class */ (function () {
    function ChecklistPageModule() {
    }
    ChecklistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__checklist__["a" /* ChecklistPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__checklist__["a" /* ChecklistPage */]),
                __WEBPACK_IMPORTED_MODULE_2__core_list_view_appearance_animation_layout_5_appearance_animation_layout_5_module__["AppearanceAnimationLayout5Module"]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ChecklistPageModule);
    return ChecklistPageModule;
}());

//# sourceMappingURL=checklist.module.js.map

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

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppearanceAnimationLayout5; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_permissao_exclusao__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppearanceAnimationLayout5 = /** @class */ (function () {
    function AppearanceAnimationLayout5(storage) {
        var _this = this;
        this.storage = storage;
        this.dataBackup = [];
        this.searchbarDefault = "";
        this.animateItems = [];
        this.animacaoAtiva = false;
        this.descricao = "";
        this.situacao = 0;
        this.permissoesExclusao = new __WEBPACK_IMPORTED_MODULE_3__models_permissao_exclusao__["a" /* PermissaoExclusao */]();
        this.animateClass = { 'zoom-in': true };
        this.storage.ready().then(function () {
            _this.storage.get('ultimoDownload').then(function (data) {
                _this.ultimoDownload = data ? data : "Nunca";
            });
            _this.storage.get('ultimoUpload').then(function (data) {
                _this.ultimoUpload = data ? data : "Nunca";
            });
        });
    }
    AppearanceAnimationLayout5.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
<<<<<<< HEAD
    RealizarVerificacaoPage.prototype.exibirOcorrenciasAtalho = function (item) {
        this.navCtrl.push("OcorrenciaPage", { inspecao: this.inspecao, broadcomb: this.descServico, servico: this.servico, itemInspecao: item });
    };
    RealizarVerificacaoPage.prototype.atualizarSituacao = function () {
        this.inspecao.situacao = this.inspecao.status == 0 ? 'Em aberto' : 'Finalizado';
    };
    RealizarVerificacaoPage.prototype.salvar = function (valido) {
        if (valido) {
            this.inspecao.dataInspecao = this.dataAbertura ? this.dataAbertura : null;
            this.inspecao.dataEncerramento = this.dataEncerramento ? new Date(this.dataEncerramento + "T12:00:00") : null;
            this.inspecao.usuarioEdicao = localStorage.getItem('Usuario');
            if (this.inspecao.status == 0) {
                this.viewCtrl.dismiss({ inspecao: this.inspecao, concluido: true });
            }
            else {
                var naoFinalizado = this.inspecao.inspecaoObraItens.some(function (x) { return x.inspecao1 == "" || (x.inspecao1 == "R" && x.inspecao2 == ""); });
                if (naoFinalizado) {
                    this.toastService.presentToastWarning("Não é possível salvar com status de finalizado pois existem inspeções pendentes.");
=======
    AppearanceAnimationLayout5.prototype.ngOnInit = function () {
        var _this = this;
        if (this.config.exclusaoPossivel) {
            this.storage.get('permissoesExclusao').then(function (data) {
                _this.permissoesExclusao = data;
                if (_this.config.btnNovoLabel == 'Adicionar área') {
                    _this.permitirExclusao = !_this.permissoesExclusao.possuiBloqueioExclusaoArea;
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
                }
                else {
                    _this.permitirExclusao = !_this.permissoesExclusao.possuiBloqueioExclusaoChecklist;
                }
            });
        }
    };
    AppearanceAnimationLayout5.prototype.ngOnChanges = function (changes) {
        var that = this;
        that.data = changes['data'].currentValue;
        if (that.data && that.data) {
            that.animateItems = [];
            var _loop_1 = function (i) {
                setTimeout(function () {
                    that.animateItems.push(that.data[i]);
                }, 200 * i);
            };
            for (var i = 0; i < that.data.length; i++) {
                _loop_1(i);
            }
        }
        if (this.dataBackup.length == 0) {
            this.dataBackup = this.data.slice();
        }
    };
    AppearanceAnimationLayout5.prototype.filtrar = function (valor) {
        var _this = this;
        this.animacaoAtiva = false;
        if (valor.length == 0) {
            this.data = this.dataBackup.slice();
        }
        else {
            this.data = this.dataBackup.filter(function (item) {
                return item.descricao.toLowerCase().indexOf(valor.toLowerCase()) > -1;
            });
        }
        if (this.config.filtrarSituacao) {
            this.data = this.data.filter(function (x) { return x.situacao == (_this.situacao == 0 ? "Em aberto" : "Finalizado"); }).slice();
        }
    };
    AppearanceAnimationLayout5.prototype.verificaNovoItem = function (item) {
        return item.id == 0;
    };
    AppearanceAnimationLayout5.prototype.filtrarSituacao = function (valor) {
        var _this = this;
        this.animacaoAtiva = false;
        this.data = this.dataBackup.filter(function (item) { return item.situacao == (valor == 0 ? "Em aberto" : "Finalizado"); });
        if (this.searchbarDefault) {
            this.data = this.data.filter(function (item) {
                return item.descricao.toLowerCase().indexOf(_this.searchbarDefault.toLowerCase()) > -1;
            });
        }
    };
    AppearanceAnimationLayout5.prototype.impar = function (indice) {
        return indice % 2 != 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout5.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout5.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout5.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], AppearanceAnimationLayout5.prototype, "content", void 0);
    AppearanceAnimationLayout5 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'page-realizar-verificacao',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/pages/verificacao/realizar/realizar-verificacao.html"*/'<ion-header>\n    <ion-navbar class="pad-nav-page-nt2">\n        <ion-row>\n            <ion-col col-5 class="ptb-0" (click)="voltar()" style="padding-left: 15px !important;">\n                <button class="button-nav">\n                    <span ion-text>Voltar</span>\n                </button>\n            </ion-col>\n            <ion-col col-7 class="ptb-0 registros-align" style="padding-right: 20px !important;">\n                <button class="button-nav" (click)="exibirOpcoes()">\n                    <span ion-text>Registros</span>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid no-padding>\n        <ion-row padding-left padding-right>\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n                <form #cadastroForm="ngForm" padding-top>\n                    <ion-item text-center text-wrap transparent style="padding-bottom: 0 !important;">\n                        <ion-label style="font-size: 18px !important; font-weight: bold;" stacked>{{descServico.toUpperCase()}}</ion-label>\n                    </ion-item>\n                    <ion-item text-center transparent style="text-align: left !important; padding-bottom: 0px !important;">\n                        <ion-label>EXIBIR POR CENTRO DE CUSTO</ion-label>\n                        <ion-checkbox name="exibirPorCentroCusto" [(ngModel)]="exibirPorCentroCusto" (ngModelChange)="obterFuncionarios()"></ion-checkbox>\n                    </ion-item>\n                    <ion-item text-center transparent style="padding-bottom: 3px !important;">\n                        <ion-label stacked>INSPECIONADO POR</ion-label>\n                        <ionic-selectable item-content [(ngModel)]="funcionarioInspecionado" [items]="funcionarios"\n                            itemValueField="id" itemTextField="nome" [canSearch]="true" [disabled]="servico.status == 1"\n                            name="idFuncionarioInspecionado" (onChange)="setaFuncionarioInspecionado($event)" required>\n                        </ionic-selectable>\n                    </ion-item>\n                    <ion-row *ngIf="funcionarioInspecionado">\n                        <ion-col col-8></ion-col>\n                        <ion-col col-4>\n                            <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: black !important; margin: 0 0 8px 0; height: 10px;"\n                                (click)="limparFuncionario(\'inspecionado\')" [disabled]="servico.status == 1">Limpar</button>\n                        </ion-col>\n                    </ion-row>\n                    <ion-item text-center transparent style="padding-bottom: 3px !important;">\n                        <ion-label stacked>APROVADOR POR</ion-label>\n                        <ionic-selectable item-content [(ngModel)]="funcionarioAprovado" [items]="funcionarios"\n                            itemValueField="id" itemTextField="nome" [canSearch]="true" [disabled]="servico.status == 1"\n                            name="idFuncionarioAprovado" (onChange)="setaFuncionarioAprovado($event)">\n                        </ionic-selectable>\n                    </ion-item>\n                    <ion-row *ngIf="funcionarioAprovado">\n                        <ion-col col-8></ion-col>\n                        <ion-col col-4>\n                            <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: black !important; margin: 0 0 8px 0; height: 10px;"\n                                (click)="limparFuncionario(\'aprovado\')" [disabled]="servico.status == 1">Limpar</button>\n                        </ion-col>\n                    </ion-row>\n                    <ion-list radio-group no-margin [(ngModel)]="inspecao.status" name="status" (ngModelChange)="atualizarSituacao()"\n                        [disabled]="servico.status == 1">\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col col-6>\n                                    <ion-item radio>\n                                        <ion-label>Em aberto</ion-label>\n                                        <ion-radio [value]="0"></ion-radio>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-6>\n                                    <ion-item radio>\n                                        <ion-label>Finalizado</ion-label>\n                                        <ion-radio [value]="1"></ion-radio>\n                                    </ion-item>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-list>\n                    <ion-row>\n                        <ion-col col-6>\n                            <ion-item text-center transparent>\n                                <ion-label stacked>DATA ABERTURA</ion-label>\n                                <ion-datetime displayFormat="DD/MM/YYYY" name="dataAbertura" [(ngModel)]="dataAbertura"\n                                    [disabled]="servico.status == 1" cancelText="Cancelar" doneText="Ok"></ion-datetime>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-6>\n                            <ion-item text-center transparent>\n                                <ion-label stacked>DATA ENCERRAMENTO</ion-label>\n                                <ion-datetime displayFormat="DD/MM/YYYY" name="dataEncerramento" [(ngModel)]="dataEncerramento"\n                                    [disabled]="servico.status == 1" cancelText="Cancelar" doneText="Ok"></ion-datetime>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                    <hr style="margin: 2px 0 0 0;">\n                    <ion-list radio-group no-margin [(ngModel)]="item.inspecao1" name="itemInspecao1+{{i}}" *ngFor="let item of inspecao.inspecaoObraItens; let i=index;"\n                        [disabled]="servico.status == 1">\n                        <h2 text-wrap style="font-weight: bold;margin-top: 10px;">{{item.descricao}}</h2>\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col col-3>\n                                    <ion-item radio style="background-color: blue;">\n                                        <ion-label>NA</ion-label>\n                                        <ion-radio [value]="\'N\'"></ion-radio>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-3>\n                                    <ion-item radio style="background-color: darkgreen;">\n                                        <ion-label>A</ion-label>\n                                        <ion-radio [value]="\'A\'"></ion-radio>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-3>\n                                    <ion-item radio style="background-color: yellow;">\n                                        <ion-label>R</ion-label>\n                                        <ion-radio [value]="\'R\'"></ion-radio>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-3>\n                                    <ion-item radio style="background-color: red;">\n                                        <ion-label>X</ion-label>\n                                        <ion-radio [value]="\'X\'"></ion-radio>\n                                    </ion-item>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row *ngIf="item.inspecao1 == \'R\'">\n                                <ion-list radio-group no-margin [(ngModel)]="item.inspecao2" name="itemInspecao2+{{i}}"\n                                    style="width: 100%" [disabled]="servico.status == 1">\n                                    <ion-grid>\n                                        <ion-row>\n                                            <ion-col col-3></ion-col>\n                                            <ion-col col-3>\n                                                <ion-item radio style="background-color: orange;">\n                                                    <ion-label>RA</ion-label>\n                                                    <ion-radio [value]="\'A\'"></ion-radio>\n                                                </ion-item>\n                                            </ion-col>\n                                            <ion-col col-3>\n                                                <ion-item radio style="background-color: red;">\n                                                    <ion-label>X</ion-label>\n                                                    <ion-radio [value]="\'X\'"></ion-radio>\n                                                </ion-item>\n                                            </ion-col>\n                                            <ion-col col-3></ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </ion-list>\n                            </ion-row>\n                            <ion-row>\n                                <ion-col col-6>\n                                    <button ion-button default-button block text-capitalize box-shadow margin-bottom\n                                        style="background-color: black !important;" (click)="item.inspecao1=\'\';item.inspecao2=\'\'"\n                                        [disabled]="servico.status == 1">Limpar</button>\n                                </ion-col>\n                                <ion-col col-6>\n                                    <button ion-button default-button block text-capitalize box-shadow margin-bottom\n                                        style="background-color: black !important;" (click)="exibirOcorrenciasAtalho(item)"\n                                        [disabled]="servico.status == 1">Ocorrência</button>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                        <hr style="margin: 2px 0 0 0;">\n                    </ion-list>\n                </form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <button ion-button default-button block text-capitalize box-shadow margin-bottom no-margin style="background-color: rgb(33,177,75) !important;"\n        (click)="salvar(cadastroForm.valid)" [disabled]="servico.status == 1">Salvar</button>\n</ion-footer>'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/pages/verificacao/realizar/realizar-verificacao.html"*/
=======
            selector: 'appearance-animation-layout-5',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\appearance-animation\layout-5\appearance-animation.html"*/'<!--Theme Appearance animation (Zoom In)-->\n\n<ion-content>\n\n    <h2 text-center text-wrap class="broadcomb" *ngIf="config.broadcomb">{{config.broadcomb.toUpperCase()}}</h2>\n\n    <h2 padding text-center class="aviso" *ngIf="!config.naoExibirMensagemListaVazia && (animateItems.length < 1 || data.length < 1)">Nenhum\n\n        registro encontrado.</h2>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <ion-row *ngIf="config.exibirDatas && animateItems.length > 0">\n\n            <ion-col col-12>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoDownload != \'Nunca\'">Último download: {{ultimoDownload\n\n                    | date: \'dd/MM/yyyy HH:mm\'}}</h3>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoUpload != \'Nunca\'">Última publicação: {{ultimoUpload |\n\n                    date: \'dd/MM/yyyy HH:mm\'}}</h3>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoDownload == \'Nunca\'">Último download:\n\n                    {{ultimoDownload}}</h3>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoUpload == \'Nunca\'">Última publicação: {{ultimoUpload}}</h3>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="config.btnNovoLabel">\n\n            <button ion-button default-button block text-capitalize box-shadow margin-bottom class="button-novo"\n\n                (click)="onEvent(\'onAddClick\')">{{config.btnNovoLabel}}</button>\n\n        </ion-row>\n\n        <ion-grid [ngClass]="{\'filtros\': config.filtrarSituacao}">\n\n            <ion-list radio-group no-margin [(ngModel)]="situacao" name="situacao" id="situacao" (ngModelChange)="filtrarSituacao($event)">\n\n                <ion-row *ngIf="config.filtrarSituacao">\n\n                    <h3 item-data text-wrap text-center>Filtros:</h3>\n\n                </ion-row>\n\n                <ion-row *ngIf="config.filtrarSituacao">\n\n                    <ion-col col-6>\n\n                        <ion-item radio>\n\n                            <ion-label>Em aberto</ion-label>\n\n                            <ion-radio [value]="0" checked></ion-radio>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <ion-item radio>\n\n                            <ion-label>Finalizado</ion-label>\n\n                            <ion-radio [value]="1"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col class="col-search" col-12 *ngIf="data.length > 0 || !animacaoAtiva" [ngClass]="{\'margin-top-10\': !config.exibirDatas}">\n\n                        <ion-searchbar [(ngModel)]="searchbarDefault" [placeholder]="\'Filtrar pela descrição\'"\n\n                            (ionInput)="filtrar($event.target.value)"></ion-searchbar>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-list>\n\n        </ion-grid>\n\n        <ion-grid style="padding-top: 0;">\n\n            <ion-row>\n\n                <ion-col col-12>\n\n                    <ion-list no-margin *ngIf="animacaoAtiva">\n\n                        <ion-item default-item no-lines [ngClass]="{\'novo-item\': verificaNovoItem(item) && !config.alteracoes, \'zoom-in\': true, \'laranja\': impar(i)}"\n\n                            *ngFor="let item of animateItems; let i = index;" (click)="onEvent(\'onItemClick\', item, $event)">\n\n                            <ion-row class="espacamento">\n\n                                <ion-col col-10>\n\n                                    <h2 *ngIf="!config.concatena" item-title text-wrap>{{item.descricao}}</h2>\n\n                                    <h2 *ngIf="config.concatena" item-title text-wrap>{{item.codigo}} -\n\n                                        {{item.descricao}}</h2>\n\n                                    <h3 item-situacao text-wrap *ngIf="config.subTitulo">{{config.subTitulo}}:\n\n                                        {{config.alteracoes ? (item.data | date: \'dd/MM/yyyy hh:mm\') :\n\n                                        item.situacao }}</h3>\n\n                                </ion-col>\n\n                                <ion-col col-2 *ngIf="config.exclusaoPossivel && permitirExclusao" (click)="onEvent(\'onIconClick\', item, $event)">\n\n                                    <ion-icon icon-small name="{{config.icon}}" item-right style="font-size: 25px !important; margin: 0px"\n\n                                        [ngClass]="{\'color-black\': !item.delete , \'color-red\' : item.delete}"></ion-icon>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                            <ion-row class="espacamento" *ngIf="config.tipo">\n\n                                <ion-col col-12 class="tipo">\n\n                                    <h3 no-margin item-tipo text-wrap>{{item.tipo.length > 1 ?\n\n                                        item.tipo.toUpperCase() :\n\n                                        (item.tipo == \'C\' ? \'CONTROLADO\' : \'ESPECIALIZADO\') }}</h3>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-item>\n\n                    </ion-list>\n\n\n\n                    <ion-list no-margin *ngIf="!animacaoAtiva">\n\n                        <ion-item default-item no-lines [ngClass]="{\'novo-item\': verificaNovoItem(item) && !config.alteracoes, \'laranja\': impar(i)}"\n\n                            *ngFor="let item of data; let i = index;" (click)="onEvent(\'onItemClick\', item, $event)">\n\n                            <ion-row class="espacamento">\n\n                                <ion-col col-10>\n\n                                    <h2 *ngIf="!config.concatena" item-title text-wrap>{{item.descricao}}</h2>\n\n                                    <h2 *ngIf="config.concatena" item-title text-wrap>{{item.codigo}} -\n\n                                        {{item.descricao}}</h2>\n\n                                    <h3 item-situacao text-wrap *ngIf="config.subTitulo">{{config.subTitulo}}:\n\n                                        {{config.alteracoes ? (item.data | date: \'dd/MM/yyyy hh:mm\') :\n\n                                        item.situacao}}</h3>\n\n                                </ion-col>\n\n                                <ion-col col-2 *ngIf="config.exclusaoPossivel && permitirExclusao">\n\n                                    <ion-icon icon-small name="{{config.icon}}" item-right (click)="onEvent(\'onIconClick\', item, $event)"\n\n                                        style="font-size: 25px !important; margin: 0px" [ngClass]="{\'color-black\': !item.delete , \'color-red\' : item.delete}"></ion-icon>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                            <ion-row class="espacamento" *ngIf="config.tipo">\n\n                                <ion-col col-12 class="tipo">\n\n                                    <h3 no-margin item-tipo text-wrap>{{item.tipo.length > 1 ?\n\n                                        item.tipo.toUpperCase() :\n\n                                        (item.tipo == \'C\' ? \'CONTROLADO\' : \'ESPECIALIZADO\') }}</h3>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\appearance-animation\layout-5\appearance-animation.html"*/
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AppearanceAnimationLayout5);
    return AppearanceAnimationLayout5;
}());

//# sourceMappingURL=appearance-animation-layout-5.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissaoExclusao; });
var PermissaoExclusao = /** @class */ (function () {
    function PermissaoExclusao(values) {
        if (values === void 0) { values = {}; }
        this.possuiBloqueioExclusaoArea = false;
        this.possuiBloqueioExclusaoChecklist = false;
        Object.assign(this, values);
    }
    return PermissaoExclusao;
}());

//# sourceMappingURL=permissao-exclusao.js.map

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

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_message_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_loading_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_alteracao__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_uuid__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_uuid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChecklistPage = /** @class */ (function () {
    function ChecklistPage(navCtrl, storage, alertCtrl, messageService, navParams, modalCtrl, loadingService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.messageService = messageService;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingService = loadingService;
        this.events = {
            onItemClick: function (data) {
                _this.editarChecklist(data);
            },
            onAddClick: function () {
                _this.addChecklist();
            }
        };
        this.config = {
            "exclusaoPossivel": false,
            "tipo": false,
            "exibirDatas": false,
            "concatena": true,
            "btnNovoLabel": "Novo"
        };
        this.checklists = [];
        this.reload = true;
    }
    ChecklistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('itensChecklist').then(function (checklists) {
                if (!checklists) {
                    _this.checklists = [];
                    _this.messageService.exibirMensagem("Nenhum checklist encontrado. Acesse a funcionalidade 'Baixar dados' para trazer as informações do servidor.");
                    _this.navCtrl.setRoot("HomePage");
                }
                else {
                    _this.checklists = checklists.slice();
                    _this.addChecklist();
                }
            });
        });
    };
    ChecklistPage.prototype.addChecklist = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ChecklistCadastroPage");
        modal.present();
        modal.onWillDismiss(function (checklist) {
            if (checklist) {
                _this.checklists.unshift(new __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__["a" /* ItemChecklist */](checklist));
                _this.reload = false;
                _this.loadingService.show();
                _this.atualizarChecklists();
                _this.gerarAtualizacao(checklist, "Insert");
                setTimeout(function () {
                    _this.reload = true;
                    _this.loadingService.hide();
                    _this.navCtrl.setRoot("HomePage");
                }, 700);
            }
            else {
                _this.voltarHome();
            }
        });
    };
    ChecklistPage.prototype.editarChecklist = function (checklist) {
        var _this = this;
        var modal = this.modalCtrl.create("ChecklistCadastroPage", { checklist: checklist });
        modal.present();
        modal.onWillDismiss(function (checklist) {
            if (checklist) {
                var indice = _this.checklists.findIndex(function (x) { return x.id == checklist.id; });
                _this.checklists[indice] = new __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__["a" /* ItemChecklist */](checklist);
                _this.reload = false;
                _this.loadingService.show();
                _this.atualizarChecklists();
                _this.gerarAtualizacao(checklist, "Update");
                setTimeout(function () {
                    _this.reload = true;
                    _this.loadingService.hide();
                }, 700);
            }
            else {
                _this.voltarHome();
            }
        });
    };
    ChecklistPage.prototype.gerarAtualizacao = function (checklist, acao) {
        var _this = this;
        this.storage.ready().then(function () {
            var atualizacoesArray = [];
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                var alteracao = new __WEBPACK_IMPORTED_MODULE_6__models_alteracao__["a" /* Alteracao */]({ id: __WEBPACK_IMPORTED_MODULE_7_angular2_uuid__["UUID"].UUID(), tipo: acao, entidade: "Checklist", valor: JSON.stringify(checklist), data: new Date(), descricao: (acao == "Update" ? "Alteração" : "Criação") + " do checklist '" + checklist.descricao + "'." });
                if (atualizacoes) {
                    atualizacoesArray = atualizacoes;
                    atualizacoesArray.push(alteracao);
                }
                else {
                    atualizacoesArray.push(alteracao);
                }
                _this.storage.set('atualizacoes', atualizacoesArray);
            });
        });
    };
    ChecklistPage.prototype.atualizarChecklists = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.checklists.sort(function (a, b) {
                if (a.codigo > b.codigo)
                    return 1;
                else
                    return -1;
            });
            _this.storage.set('itensChecklist', _this.checklists);
        });
    };
    ChecklistPage.prototype.voltarHome = function () {
        this.navCtrl.setRoot("HomePage");
    };
    ChecklistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-checklist',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\checklist\checklist.html"*/'<ion-header>\n\n    <ion-navbar class="pad-nav-page-nt">\n\n        <ion-row>\n\n            <ion-col col-10 class="ptb-0">\n\n            </ion-col>\n\n            <ion-col col-2 class="ptb-0" (click)="voltarHome()">\n\n                <div buy>\n\n                    <ion-icon class="icon-menu home-icon" name="home"></ion-icon>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<appearance-animation-layout-5 class="margem-modal-ios" *ngIf="reload && false" has-header [data]="checklists" [events]="events"\n\n    [config]="config"></appearance-animation-layout-5>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\checklist\checklist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__utils_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__utils_loading_service__["a" /* LoadingService */]])
    ], ChecklistPage);
    return ChecklistPage;
}());

//# sourceMappingURL=checklist.js.map

/***/ })

});
//# sourceMappingURL=10.js.map