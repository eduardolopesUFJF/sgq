<<<<<<< HEAD
webpackJsonp([9,74],{

/***/ 691:
=======
webpackJsonp([9],{

/***/ 776:
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearanceAnimationLayout5Module", function() { return AppearanceAnimationLayout5Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_5__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(89);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealizarVerificacaoPageModule", function() { return RealizarVerificacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__realizar_verificacao__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_selectable__ = __webpack_require__(353);
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




<<<<<<< HEAD
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

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaPageModule", function() { return AreaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_list_view_appearance_animation_layout_5_appearance_animation_layout_5_module__ = __webpack_require__(691);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AreaPageModule = /** @class */ (function () {
    function AreaPageModule() {
    }
    AreaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__area__["a" /* AreaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__area__["a" /* AreaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__core_list_view_appearance_animation_layout_5_appearance_animation_layout_5_module__["AppearanceAnimationLayout5Module"]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AreaPageModule);
    return AreaPageModule;
}());

//# sourceMappingURL=area.module.js.map

/***/ }),

/***/ 779:
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

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppearanceAnimationLayout5; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(89);
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
            selector: 'appearance-animation-layout-5',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\appearance-animation\layout-5\appearance-animation.html"*/'<!--Theme Appearance animation (Zoom In)-->\n\n<ion-content>\n\n    <h2 text-center text-wrap class="broadcomb" *ngIf="config.broadcomb">{{config.broadcomb.toUpperCase()}}</h2>\n\n    <h2 padding text-center class="aviso" *ngIf="!config.naoExibirMensagemListaVazia && (animateItems.length < 1 || data.length < 1)">Nenhum\n\n        registro encontrado.</h2>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <ion-row *ngIf="config.exibirDatas && animateItems.length > 0">\n\n            <ion-col col-12>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoDownload != \'Nunca\'">Último download: {{ultimoDownload\n\n                    | date: \'dd/MM/yyyy HH:mm\'}}</h3>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoUpload != \'Nunca\'">Última publicação: {{ultimoUpload |\n\n                    date: \'dd/MM/yyyy HH:mm\'}}</h3>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoDownload == \'Nunca\'">Último download:\n\n                    {{ultimoDownload}}</h3>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoUpload == \'Nunca\'">Última publicação: {{ultimoUpload}}</h3>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="config.btnNovoLabel">\n\n            <button ion-button default-button block text-capitalize box-shadow margin-bottom class="button-novo"\n\n                (click)="onEvent(\'onAddClick\')">{{config.btnNovoLabel}}</button>\n\n        </ion-row>\n\n        <ion-grid [ngClass]="{\'filtros\': config.filtrarSituacao}">\n\n            <ion-list radio-group no-margin [(ngModel)]="situacao" name="situacao" id="situacao" (ngModelChange)="filtrarSituacao($event)">\n\n                <ion-row *ngIf="config.filtrarSituacao">\n\n                    <h3 item-data text-wrap text-center>Filtros:</h3>\n\n                </ion-row>\n\n                <ion-row *ngIf="config.filtrarSituacao">\n\n                    <ion-col col-6>\n\n                        <ion-item radio>\n\n                            <ion-label>Em aberto</ion-label>\n\n                            <ion-radio [value]="0" checked></ion-radio>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <ion-item radio>\n\n                            <ion-label>Finalizado</ion-label>\n\n                            <ion-radio [value]="1"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col class="col-search" col-12 *ngIf="data.length > 0 || !animacaoAtiva" [ngClass]="{\'margin-top-10\': !config.exibirDatas}">\n\n                        <ion-searchbar [(ngModel)]="searchbarDefault" [placeholder]="\'Filtrar pela descrição\'"\n\n                            (ionInput)="filtrar($event.target.value)"></ion-searchbar>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-list>\n\n        </ion-grid>\n\n        <ion-grid style="padding-top: 0;">\n\n            <ion-row>\n\n                <ion-col col-12>\n\n                    <ion-list no-margin *ngIf="animacaoAtiva">\n\n                        <ion-item default-item no-lines [ngClass]="{\'novo-item\': verificaNovoItem(item) && !config.alteracoes, \'zoom-in\': true}"\n\n                            *ngFor="let item of animateItems; let i = index;" (click)="onEvent(\'onItemClick\', item, $event)">\n\n                            <ion-row class="espacamento">\n\n                                <ion-col col-10>\n\n                                    <h2 *ngIf="!config.concatena" item-title text-wrap>{{item.descricao}}</h2>\n\n                                    <h2 *ngIf="config.concatena" item-title text-wrap>{{item.codigo}} -\n\n                                        {{item.descricao}}</h2>\n\n                                    <h3 item-situacao text-wrap *ngIf="config.subTitulo">{{config.subTitulo}}:\n\n                                        {{config.alteracoes ? (item.data | date: \'dd/MM/yyyy hh:mm\') :\n\n                                        item.situacao }}</h3>\n\n                                </ion-col>\n\n                                <ion-col col-2 *ngIf="config.exclusaoPossivel" (click)="onEvent(\'onIconClick\', item, $event)">\n\n                                    <ion-icon icon-small name="{{config.icon}}" item-right style="font-size: 25px !important; margin: 0px"\n\n                                        [ngClass]="{\'color-black\': !item.delete , \'color-red\' : item.delete}"></ion-icon>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                            <ion-row class="espacamento" *ngIf="config.tipo">\n\n                                <ion-col col-12 class="tipo">\n\n                                    <h3 no-margin item-tipo text-wrap>{{item.tipo.length > 1 ?\n\n                                        item.tipo.toUpperCase() :\n\n                                        (item.tipo == \'C\' ? \'CONTROLADO\' : \'ESPECIALIZADO\') }}</h3>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-item>\n\n                    </ion-list>\n\n\n\n                    <ion-list no-margin *ngIf="!animacaoAtiva">\n\n                        <ion-item default-item no-lines [ngClass]="{\'novo-item\': verificaNovoItem(item) && !config.alteracoes}"\n\n                            *ngFor="let item of data; let i = index;" (click)="onEvent(\'onItemClick\', item, $event)">\n\n                            <ion-row class="espacamento">\n\n                                <ion-col col-10>\n\n                                    <h2 *ngIf="!config.concatena" item-title text-wrap>{{item.descricao}}</h2>\n\n                                    <h2 *ngIf="config.concatena" item-title text-wrap>{{item.codigo}} -\n\n                                        {{item.descricao}}</h2>\n\n                                    <h3 item-situacao text-wrap *ngIf="config.subTitulo">{{config.subTitulo}}:\n\n                                        {{config.alteracoes ? (item.data | date: \'dd/MM/yyyy hh:mm\') :\n\n                                        item.situacao}}</h3>\n\n                                </ion-col>\n\n                                <ion-col col-2 *ngIf="config.exclusaoPossivel">\n\n                                    <ion-icon icon-small name="{{config.icon}}" item-right (click)="onEvent(\'onIconClick\', item, $event)"\n\n                                        style="font-size: 25px !important; margin: 0px" [ngClass]="{\'color-black\': !item.delete , \'color-red\' : item.delete}"></ion-icon>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                            <ion-row class="espacamento" *ngIf="config.tipo">\n\n                                <ion-col col-12 class="tipo">\n\n                                    <h3 no-margin item-tipo text-wrap>{{item.tipo.length > 1 ?\n\n                                        item.tipo.toUpperCase() :\n\n                                        (item.tipo == \'C\' ? \'CONTROLADO\' : \'ESPECIALIZADO\') }}</h3>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\appearance-animation\layout-5\appearance-animation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AppearanceAnimationLayout5);
    return AppearanceAnimationLayout5;
}());

//# sourceMappingURL=appearance-animation-layout-5.js.map

/***/ }),

/***/ 795:
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

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_alteracao__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_message_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_loading_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_obra__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_storage_service_utils__ = __webpack_require__(156);
=======
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
        Object.assign(this, values);
    }
    return Inspecao;
}());

//# sourceMappingURL=inspecao.js.map

/***/ }),

/***/ 797:
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

/***/ 883:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealizarVerificacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_inspecao__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_funcionario__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_toast_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_item_inspecao__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_servico__ = __webpack_require__(784);
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
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








<<<<<<< HEAD

var AreaPage = /** @class */ (function () {
    function AreaPage(navCtrl, storage, alertCtrl, messageService, storageServiceUtils, navParams, modalCtrl, loadingService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.messageService = messageService;
        this.storageServiceUtils = storageServiceUtils;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.loadingService = loadingService;
        this.areas = [];
        this.obra = new __WEBPACK_IMPORTED_MODULE_7__models_obra__["a" /* Obra */]();
        this.reload = true;
        this.events = {
            onItemClick: function (data) {
                _this.abrirServicos(data);
            },
            onIconClick: function (data) {
                _this.confirmarExclusao(data);
            },
            onAddClick: function () {
                _this.addArea();
            }
        };
        this.config = {
            "exclusaoPossivel": true,
            "icon": "trash",
            "tipo": false,
            "exibirDatas": true,
            "btnNovoLabel": "Adicionar área",
            "subTitulo": "Situação",
            "broadcomb": "",
            "filtrarSituacao": true
        };
        this.obra = this.navParams.data.obra;
        this.areas = this.navParams.data.obra.areas;
        this.obraId = this.obra.id;
        this.config.broadcomb = this.obra.descricao;
    }
    AreaPage.prototype.abrirServicos = function (area) {
        this.navCtrl.push("ItemAreaPage", { area: area, obra: this.obra.descricao });
    };
    AreaPage.prototype.confirmarExclusao = function (area) {
        var _this = this;
        var mensagem;
        if (!area.delete) {
            mensagem = "Deseja realmente excluir a área '" + area.descricao + "'?";
        }
        else {
            mensagem = "Deseja realmente reativar a área '" + area.descricao + "'?";
        }
        this.messageService.exibirMensagemConfirmacao(mensagem, function () { _this.alterarSituacaoArea(area); });
    };
    AreaPage.prototype.alterarSituacaoArea = function (area) {
        var _this = this;
        this.storage.ready().then(function () {
            var atualizacoesArray = [];
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                area.delete = !area.delete;
                area.idObra = _this.obraId;
                var alteracao = new __WEBPACK_IMPORTED_MODULE_3__models_alteracao__["a" /* Alteracao */]({ id: __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__["UUID"].UUID(), idArea: area.id, idGuidArea: area.idGuid, tipo: "Update", entidade: "Area", valor: JSON.stringify(area), data: new Date(), descricao: (area.delete ? "Inativação" : "Ativação") + " da área '" + area.descricao + "'.", obraId: _this.obraId });
                if (atualizacoes) {
                    atualizacoesArray = atualizacoes;
                    atualizacoesArray.push(alteracao);
                }
                else {
                    atualizacoesArray.push(alteracao);
                }
                _this.storage.set('atualizacoes', atualizacoesArray);
                _this.atualizarObra(area);
            });
        });
    };
    AreaPage.prototype.atualizarObra = function (area) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var obras;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageServiceUtils.montarObra()];
                    case 1:
                        obras = _a.sent();
                        obras.find(function (x) { return x.id == _this.obraId; }).areas.find(function (x) { return area.idGuid ? (x.idGuid == area.idGuid) : (x.id == area.id); }).delete = area.delete;
                        return [4 /*yield*/, this.storageServiceUtils.armazenarObraNoStorage(obras)];
                    case 2:
                        _a.sent();
=======
var RealizarVerificacaoPage = /** @class */ (function () {
    function RealizarVerificacaoPage(viewCtrl, storage, toastService, modalCtrl, navParams, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.toastService = toastService;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.inspecao = new __WEBPACK_IMPORTED_MODULE_2__models_inspecao__["a" /* Inspecao */]();
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
        this.obterFuncionarios();
    }
    RealizarVerificacaoPage.prototype.setaFuncionarioInspecionado = function (event) {
        this.inspecao.idFuncionarioInspecionado = event.value.id;
    };
    RealizarVerificacaoPage.prototype.setaFuncionarioAprovado = function (event) {
        this.inspecao.idFuncionarioAprovado = event.value.id;
    };
    RealizarVerificacaoPage.prototype.obterFuncionarios = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, obras, obra;
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
                        this.funcionarios = this.funcionarios.filter(function (x) { return x.idCentroCusto == null || x.idCentroCusto == obra.idCentroCusto; }).slice();
                        this.funcionarioAprovado = this.funcionarios.find(function (x) { return x.id == _this.inspecao.idFuncionarioAprovado; });
                        this.funcionarioInspecionado = this.funcionarios.find(function (x) { return x.id == _this.inspecao.idFuncionarioInspecionado; });
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
                        return [2 /*return*/];
                }
            });
        });
    };
<<<<<<< HEAD
    AreaPage.prototype.addArea = function () {
        var _this = this;
        var modal = this.modalCtrl.create("AreaCadastroPage", { obraId: this.obraId });
        modal.present();
        modal.onWillDismiss(function (area) {
            if (area) {
                _this.areas.unshift(area);
                _this.reload = false;
                _this.loadingService.show();
                setTimeout(function () {
                    _this.reload = true;
                    _this.loadingService.hide();
                }, 700);
            }
        });
    };
    AreaPage.prototype.voltarHome = function () {
        this.navCtrl.setRoot("HomePage");
    };
    AreaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-area',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\area\area.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-row>\n\n            <ion-col col-2>\n\n                <button ion-button menuToggle>\n\n                    <ion-icon class="icon-menu" name="menu"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col col-8 m-auto>\n\n                <div buy>\n\n                    <ion-title>\n\n                        Áreas\n\n                    </ion-title>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col col-2>\n\n                <div buy (click)="voltarHome()">\n\n                    <ion-icon class="icon-menu home-icon" name="home"></ion-icon>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<appearance-animation-layout-5 class="margem-modal-ios" *ngIf="reload" has-header [data]="areas" [events]="events" [config]="config"></appearance-animation-layout-5>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\area\area.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__utils_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_8__utils_storage_service_utils__["a" /* StorageServiceUtils */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__utils_loading_service__["a" /* LoadingService */]])
    ], AreaPage);
    return AreaPage;
}());

//# sourceMappingURL=area.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Obra; });
var Obra = /** @class */ (function () {
    function Obra(values) {
        if (values === void 0) { values = {}; }
        this.areas = [];
        Object.assign(this, values);
    }
    return Obra;
}());

//# sourceMappingURL=obra.js.map
=======
    RealizarVerificacaoPage.prototype.atualizarSituacao = function () {
        this.inspecao.situacao = this.inspecao.status == 0 ? 'Em aberto' : 'Finalizado';
    };
    RealizarVerificacaoPage.prototype.salvar = function (valido) {
        if (valido) {
            if (this.inspecao.status == 0) {
                this.viewCtrl.dismiss({ inspecao: this.inspecao, concluido: true });
            }
            else {
                var naoFinalizado = this.inspecao.inspecaoObraItens.some(function (x) { return x.inspecao1 == "" || (x.inspecao1 == "R" && x.inspecao2 == ""); });
                if (naoFinalizado) {
                    this.toastService.presentToastWarning("Não é possível salvar com status de finalizado pois existem inspeções pendentes.");
                }
                else {
                    this.inspecao.dataEncerramento = new Date();
                    this.viewCtrl.dismiss({ inspecao: this.inspecao, concluido: true });
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
    RealizarVerificacaoPage.prototype.abrirOcorrencias = function () {
        this.navCtrl.push("OcorrenciaPage", { inspecao: this.inspecao, broadcomb: this.descServico, servico: this.servico });
    };
    RealizarVerificacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-realizar-verificacao',template:/*ion-inline-start:"/Users/duduulopes/Desktop/sgq/App/sgq/src/pages/verificacao/realizar/realizar-verificacao.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row>\n            <ion-col col-2>\n                <button class="button-nav" (click)="voltar()">\n                    <span ion-text style="font-size: 0.7em;">Voltar</span>\n                </button>\n            </ion-col>\n            <ion-col col-7 m-auto>\n                <ion-title>Inspeção do Serviço</ion-title>\n            </ion-col>\n            <ion-col col-3 (click)="abrirOcorrencias()">\n                    <button class="button-nav">\n                        <span ion-text style="font-size: 0.7em;">Ocorrências</span>\n                    </button>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content has-header>\n    <ion-grid no-padding>\n        <ion-row padding-left padding-right>\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n                <form #cadastroForm="ngForm" padding-top>\n                    <ion-item text-center text-wrap transparent style="padding-bottom: 0 !important;">\n                        <ion-label style="font-size: 18px !important; font-weight: bold;" stacked>{{descServico.toUpperCase()}}</ion-label>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>INSPECIONADO POR</ion-label>\n                        <ionic-selectable \n                            item-content\n                            [(ngModel)]="funcionarioInspecionado"\n                            [items]="funcionarios"\n                            itemValueField="id"\n                            itemTextField="nome"\n                            [canSearch]="true"\n                            [disabled]="servico.status == 1"\n                            name="idFuncionarioInspecionado"\n                            (onChange)="setaFuncionarioInspecionado($event)"\n                            required>\n                        </ionic-selectable>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>APROVADOR POR</ion-label>\n                        <ionic-selectable \n                            item-content\n                            [(ngModel)]="funcionarioAprovado"\n                            [items]="funcionarios"\n                            itemValueField="id"\n                            itemTextField="nome"\n                            [canSearch]="true"\n                            [disabled]="servico.status == 1"\n                            name="idFuncionarioAprovado"\n                            (onChange)="setaFuncionarioAprovado($event)">\n                        </ionic-selectable>\n                    </ion-item>\n                    <ion-list radio-group no-margin [(ngModel)]="inspecao.status" name="status" (ngModelChange)="atualizarSituacao()"\n                        [disabled]="servico.status == 1">\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col col-6>\n                                    <ion-item radio>\n                                        <ion-label>Em aberto</ion-label>\n                                        <ion-radio [value]="0"></ion-radio>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-6>\n                                    <ion-item radio>\n                                        <ion-label>Finalizado</ion-label>\n                                        <ion-radio [value]="1"></ion-radio>\n                                    </ion-item>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-list>\n                    <hr style="margin: 2px 0 0 0;">\n                    <ion-list radio-group no-margin [(ngModel)]="item.inspecao1" name="itemInspecao1+{{i}}" *ngFor="let item of inspecao.inspecaoObraItens; let i=index;" [disabled]="servico.status == 1">\n                        <h2 text-wrap style="font-weight: bold;margin-top: 10px;">{{item.descricao}}</h2>\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col col-3>\n                                    <ion-item radio style="background-color: blue;">\n                                        <ion-label>NA</ion-label>\n                                        <ion-radio [value]="\'N\'"></ion-radio>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-3>\n                                    <ion-item radio style="background-color: darkgreen;">\n                                        <ion-label>A</ion-label>\n                                        <ion-radio [value]="\'A\'"></ion-radio>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-3>\n                                    <ion-item radio style="background-color: yellow;">\n                                        <ion-label>R</ion-label>\n                                        <ion-radio [value]="\'R\'"></ion-radio>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-3>\n                                    <ion-item radio style="background-color: red;">\n                                        <ion-label>X</ion-label>\n                                        <ion-radio [value]="\'X\'"></ion-radio>\n                                    </ion-item>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row *ngIf="item.inspecao1 == \'R\'">\n                                <ion-list radio-group no-margin [(ngModel)]="item.inspecao2" name="itemInspecao2+{{i}}"\n                                    style="width: 100%" [disabled]="servico.status == 1">\n                                    <ion-grid>\n                                        <ion-row>\n                                            <ion-col col-3></ion-col>\n                                            <ion-col col-3>\n                                                <ion-item radio style="background-color: orange;">\n                                                    <ion-label>RA</ion-label>\n                                                    <ion-radio [value]="\'A\'"></ion-radio>\n                                                </ion-item>\n                                            </ion-col>\n                                            <ion-col col-3>\n                                                <ion-item radio style="background-color: red;">\n                                                    <ion-label>X</ion-label>\n                                                    <ion-radio [value]="\'X\'"></ion-radio>\n                                                </ion-item>\n                                            </ion-col>\n                                            <ion-col col-3></ion-col>\n                                        </ion-row>\n                                    </ion-grid>\n                                </ion-list>\n                            </ion-row>\n                            <ion-row>\n                                <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: black !important;"\n                                    (click)="item.inspecao1=\'\';item.inspecao2=\'\'" [disabled]="servico.status == 1">Limpar</button>\n                            </ion-row>\n                        </ion-grid>\n                        <hr style="margin: 2px 0 0 0;">\n                    </ion-list>\n                </form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <button ion-button default-button block text-capitalize box-shadow margin-bottom no-margin style="background-color: rgb(33,177,75) !important;"\n        (click)="salvar(cadastroForm.valid)" [disabled]="servico.status == 1">Salvar</button>\n</ion-footer>'/*ion-inline-end:"/Users/duduulopes/Desktop/sgq/App/sgq/src/pages/verificacao/realizar/realizar-verificacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__utils_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]])
    ], RealizarVerificacaoPage);
    return RealizarVerificacaoPage;
}());

//# sourceMappingURL=realizar-verificacao.js.map

/***/ }),

/***/ 884:
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
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99

/***/ })

});
//# sourceMappingURL=9.js.map