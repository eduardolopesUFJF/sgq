webpackJsonp([11,28],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearanceAnimationLayout5Module", function() { return AppearanceAnimationLayout5Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_5__ = __webpack_require__(791);
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

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemAreaPageModule", function() { return ItemAreaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_area__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_list_view_appearance_animation_layout_5_appearance_animation_layout_5_module__ = __webpack_require__(695);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemAreaPageModule = /** @class */ (function () {
    function ItemAreaPageModule() {
    }
    ItemAreaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_area__["a" /* ItemAreaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__item_area__["a" /* ItemAreaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__core_list_view_appearance_animation_layout_5_appearance_animation_layout_5_module__["AppearanceAnimationLayout5Module"]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemAreaPageModule);
    return ItemAreaPageModule;
}());

//# sourceMappingURL=item-area.module.js.map

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

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppearanceAnimationLayout5; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_permissao_exclusao__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
    AppearanceAnimationLayout5.prototype.ngOnInit = function () {
        var _this = this;
        if (this.config.exclusaoPossivel) {
            this.storage.get('permissoesExclusao').then(function (data) {
                _this.permissoesExclusao = data;
                if (_this.config.btnNovoLabel == 'Adicionar área') {
                    _this.permitirExclusao = !_this.permissoesExclusao.possuiBloqueioExclusaoArea;
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
            this.dataBackup = __spreadArrays(this.data);
        }
    };
    AppearanceAnimationLayout5.prototype.filtrar = function (valor) {
        var _this = this;
        this.animacaoAtiva = false;
        if (valor.length == 0) {
            this.data = __spreadArrays(this.dataBackup);
        }
        else {
            this.data = this.dataBackup.filter(function (item) {
                return item.descricao.toLowerCase().indexOf(valor.toLowerCase()) > -1;
            });
        }
        if (this.config.filtrarSituacao) {
            this.data = __spreadArrays(this.data.filter(function (x) { return x.situacao == (_this.situacao == 0 ? "Em aberto" : "Finalizado"); }));
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
            selector: 'appearance-animation-layout-5',template:/*ion-inline-start:"C:\Users\jluca\OneDrive\Documents\GitHub\sgq\App\sgq\src\core\list-view\appearance-animation\layout-5\appearance-animation.html"*/'<!--Theme Appearance animation (Zoom In)-->\n\n<ion-content>\n\n    <h2 text-center text-wrap class="broadcomb" *ngIf="config.broadcomb">{{config.broadcomb.toUpperCase()}}</h2>\n\n    <h2 padding text-center class="aviso" *ngIf="!config.naoExibirMensagemListaVazia && (animateItems.length < 1 || data.length < 1)">Nenhum\n\n        registro encontrado.</h2>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <ion-row *ngIf="config.exibirDatas && animateItems.length > 0">\n\n            <ion-col col-12>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoDownload != \'Nunca\'">Último download: {{ultimoDownload\n\n                    | date: \'dd/MM/yyyy HH:mm\'}}</h3>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoUpload != \'Nunca\'">Última publicação: {{ultimoUpload |\n\n                    date: \'dd/MM/yyyy HH:mm\'}}</h3>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoDownload == \'Nunca\'">Último download:\n\n                    {{ultimoDownload}}</h3>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoUpload == \'Nunca\'">Última publicação: {{ultimoUpload}}</h3>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="config.btnNovoLabel">\n\n            <button ion-button default-button block text-capitalize box-shadow margin-bottom class="button-novo"\n\n                (click)="onEvent(\'onAddClick\')">{{config.btnNovoLabel}}</button>\n\n        </ion-row>\n\n        <ion-grid [ngClass]="{\'filtros\': config.filtrarSituacao}">\n\n            <ion-list radio-group no-margin [(ngModel)]="situacao" name="situacao" id="situacao" (ngModelChange)="filtrarSituacao($event)">\n\n                <ion-row *ngIf="config.filtrarSituacao">\n\n                    <h3 item-data text-wrap text-center>Filtros:</h3>\n\n                </ion-row>\n\n                <ion-row *ngIf="config.filtrarSituacao">\n\n                    <ion-col col-6>\n\n                        <ion-item radio>\n\n                            <ion-label>Em aberto</ion-label>\n\n                            <ion-radio [value]="0" checked></ion-radio>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <ion-item radio>\n\n                            <ion-label>Finalizado</ion-label>\n\n                            <ion-radio [value]="1"></ion-radio>\n\n                        </ion-item>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col class="col-search" col-12 *ngIf="data.length > 0 || !animacaoAtiva" [ngClass]="{\'margin-top-10\': !config.exibirDatas}">\n\n                        <ion-searchbar [(ngModel)]="searchbarDefault" [placeholder]="\'Filtrar pela descrição\'"\n\n                            (ionInput)="filtrar($event.target.value)"></ion-searchbar>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-list>\n\n        </ion-grid>\n\n        <ion-grid style="padding-top: 0;">\n\n            <ion-row>\n\n                <ion-col col-12>\n\n                    <ion-list no-margin *ngIf="animacaoAtiva">\n\n                        <ion-item default-item no-lines [ngClass]="{\'novo-item\': verificaNovoItem(item) && !config.alteracoes, \'zoom-in\': true, \'laranja\': impar(i)}"\n\n                            *ngFor="let item of animateItems; let i = index;" (click)="onEvent(\'onItemClick\', item, $event)">\n\n                            <ion-row class="espacamento">\n\n                                <ion-col col-10>\n\n                                    <h2 *ngIf="!config.concatena" item-title text-wrap>{{item.descricao}}</h2>\n\n                                    <h2 *ngIf="config.concatena" item-title text-wrap>{{item.codigo}} -\n\n                                        {{item.descricao}}</h2>\n\n                                    <h3 item-situacao text-wrap *ngIf="config.subTitulo">{{config.subTitulo}}:\n\n                                        {{config.alteracoes ? (item.data | date: \'dd/MM/yyyy hh:mm\') :\n\n                                        item.situacao }}</h3>\n\n                                </ion-col>\n\n                                <ion-col col-2 *ngIf="config.exclusaoPossivel && permitirExclusao" (click)="onEvent(\'onIconClick\', item, $event)">\n\n                                    <ion-icon icon-small name="{{config.icon}}" item-right style="font-size: 25px !important; margin: 0px"\n\n                                        [ngClass]="{\'color-black\': !item.delete , \'color-red\' : item.delete}"></ion-icon>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                            <ion-row class="espacamento" *ngIf="config.tipo">\n\n                                <ion-col col-12 class="tipo">\n\n                                    <h3 no-margin item-tipo text-wrap>{{item.tipo.length > 1 ?\n\n                                        item.tipo.toUpperCase() :\n\n                                        (item.tipo == \'C\' ? \'CONTROLADO\' : \'ESPECIALIZADO\') }}</h3>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-item>\n\n                    </ion-list>\n\n\n\n                    <ion-list no-margin *ngIf="!animacaoAtiva">\n\n                        <ion-item default-item no-lines [ngClass]="{\'novo-item\': verificaNovoItem(item) && !config.alteracoes, \'laranja\': impar(i)}"\n\n                            *ngFor="let item of data; let i = index;" (click)="onEvent(\'onItemClick\', item, $event)">\n\n                            <ion-row class="espacamento">\n\n                                <ion-col col-10>\n\n                                    <h2 *ngIf="!config.concatena" item-title text-wrap>{{item.descricao}}</h2>\n\n                                    <h2 *ngIf="config.concatena" item-title text-wrap>{{item.codigo}} -\n\n                                        {{item.descricao}}</h2>\n\n                                    <h3 item-situacao text-wrap *ngIf="config.subTitulo">{{config.subTitulo}}:\n\n                                        {{config.alteracoes ? (item.data | date: \'dd/MM/yyyy hh:mm\') :\n\n                                        item.situacao}}</h3>\n\n                                </ion-col>\n\n                                <ion-col col-2 *ngIf="config.exclusaoPossivel && permitirExclusao">\n\n                                    <ion-icon icon-small name="{{config.icon}}" item-right (click)="onEvent(\'onIconClick\', item, $event)"\n\n                                        style="font-size: 25px !important; margin: 0px" [ngClass]="{\'color-black\': !item.delete , \'color-red\' : item.delete}"></ion-icon>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                            <ion-row class="espacamento" *ngIf="config.tipo">\n\n                                <ion-col col-12 class="tipo">\n\n                                    <h3 no-margin item-tipo text-wrap>{{item.tipo.length > 1 ?\n\n                                        item.tipo.toUpperCase() :\n\n                                        (item.tipo == \'C\' ? \'CONTROLADO\' : \'ESPECIALIZADO\') }}</h3>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-item>\n\n                    </ion-list>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jluca\OneDrive\Documents\GitHub\sgq\App\sgq\src\core\list-view\appearance-animation\layout-5\appearance-animation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AppearanceAnimationLayout5);
    return AppearanceAnimationLayout5;
}());

//# sourceMappingURL=appearance-animation-layout-5.js.map

/***/ }),

/***/ 792:
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

/***/ 830:
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

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemAreaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_message_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_alteracao__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_area__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_storage_service_utils__ = __webpack_require__(156);
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








var ItemAreaPage = /** @class */ (function () {
    function ItemAreaPage(navParams, messageService, storageServiceUtils, navCtrl, storage) {
        var _this = this;
        this.navParams = navParams;
        this.messageService = messageService;
        this.storageServiceUtils = storageServiceUtils;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.area = new __WEBPACK_IMPORTED_MODULE_6__models_area__["a" /* Area */]();
        this.events = {
            onItemClick: function (data) {
                _this.abrirVerificacoes(data);
            },
            onIconClick: function (data) {
                _this.confirmarExclusao(data);
            }
        };
        this.config = {
            "exclusaoPossivel": true,
            "icon": "trash",
            "exibirDatas": false,
            "tipo": true,
            "subTitulo": "Situação",
            "alteracoes": false,
            "broadcomb": "",
            "filtrarSituacao": true
        };
        this.area = this.navParams.data.area;
        this.config.broadcomb = this.navParams.data.obra + " >> " + this.area.descricao;
    }
    ItemAreaPage.prototype.abrirVerificacoes = function (servico) {
        this.navCtrl.push("VerificacaoPage", { servico: servico, broadcomb: this.config.broadcomb });
    };
    ItemAreaPage.prototype.confirmarExclusao = function (item) {
        var _this = this;
        var mensagem;
        if (!item.delete) {
            mensagem = "Deseja realmente excluir o item '" + item.descricao + "'?";
        }
        else {
            mensagem = "Deseja realmente reativar o item '" + item.descricao + "'?";
        }
        this.messageService.exibirMensagemConfirmacao(mensagem, function () { _this.alterarSituacaoArea(item); });
    };
    ItemAreaPage.prototype.alterarSituacaoArea = function (item) {
        var _this = this;
        this.storage.ready().then(function () {
            var atualizacoesArray = [];
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                item.delete = !item.delete;
                var alteracao = new __WEBPACK_IMPORTED_MODULE_4__models_alteracao__["a" /* Alteracao */]({ id: __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__["UUID"].UUID(), idServico: item.id, idGuidServico: item.idGuidServico, idArea: _this.area.id, idGuidArea: _this.area.idGuid, tipo: "Update", entidade: "Servico", valor: JSON.stringify(item), data: new Date(), descricao: (item.delete ? "Inativação" : "Ativação") + " do serviço '" + item.descricao + "' na área '" + _this.area.descricao + "'.", obraId: _this.area.idObra });
                if (atualizacoes) {
                    atualizacoesArray = atualizacoes;
                    atualizacoesArray.push(alteracao);
                }
                else {
                    atualizacoesArray.push(alteracao);
                }
                _this.storage.set('atualizacoes', atualizacoesArray);
                _this.atualizarObra(item);
            });
        });
    };
    ItemAreaPage.prototype.atualizarObra = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var obras;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageServiceUtils.montarObra()];
                    case 1:
                        obras = _a.sent();
                        obras.find(function (x) { return x.id == _this.area.idObra; }).areas.find(function (x) { return _this.area.idGuid ? (x.idGuid == _this.area.idGuid) : (x.id == _this.area.id); }).servicos.find(function (x) { return item.idGuidServico ? (x.idGuid == item.idGuidServico) : (x.id == item.id); }).delete = item.delete;
                        this.storageServiceUtils.armazenarObraNoStorage(obras);
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemAreaPage.prototype.voltarHome = function () {
        this.navCtrl.setRoot("HomePage");
    };
    ItemAreaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-item-area',template:/*ion-inline-start:"C:\Users\jluca\OneDrive\Documents\GitHub\sgq\App\sgq\src\pages\item-area\item-area.html"*/'<ion-header>\n\n    <ion-navbar class="pad-nav-page-nt">\n\n        <ion-row>\n\n            <ion-col col-10 class="ptb-0">\n\n            </ion-col>\n\n            <ion-col col-2 class="ptb-0" (click)="voltarHome()">\n\n                <div buy>\n\n                    <ion-icon class="icon-menu home-icon" name="home"></ion-icon>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<appearance-animation-layout-5 class="margem-modal-ios" has-header [data]="area.servicos" [events]="events" [config]="config"></appearance-animation-layout-5>'/*ion-inline-end:"C:\Users\jluca\OneDrive\Documents\GitHub\sgq\App\sgq\src\pages\item-area\item-area.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__utils_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_7__utils_storage_service_utils__["a" /* StorageServiceUtils */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ItemAreaPage);
    return ItemAreaPage;
}());

//# sourceMappingURL=item-area.js.map

/***/ })

});
//# sourceMappingURL=11.js.map