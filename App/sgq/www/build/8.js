webpackJsonp([8,69],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearanceAnimationLayout5Module", function() { return AppearanceAnimationLayout5Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_5__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(158);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_5__["a" /* AppearanceAnimationLayout5 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_5__["a" /* AppearanceAnimationLayout5 */]),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_5__["a" /* AppearanceAnimationLayout5 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppearanceAnimationLayout5Module);
    return AppearanceAnimationLayout5Module;
}());

//# sourceMappingURL=appearance-animation-layout-5.module.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaPageModule", function() { return AreaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_list_view_appearance_animation_layout_5_appearance_animation_layout_5_module__ = __webpack_require__(717);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__area__["a" /* AreaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__area__["a" /* AreaPage */]),
                __WEBPACK_IMPORTED_MODULE_3__core_list_view_appearance_animation_layout_5_appearance_animation_layout_5_module__["AppearanceAnimationLayout5Module"]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AreaPageModule);
    return AreaPageModule;
}());

//# sourceMappingURL=area.module.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppearanceAnimationLayout5; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(158);
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
        this.animateItems = [];
        this.animacaoAtiva = true;
        this.descricao = "";
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
        this.animacaoAtiva = false;
        if (valor.length == 0) {
            this.data = this.dataBackup.slice();
        }
        else {
            this.data = this.dataBackup.filter(function (item) {
                return item.descricao.toLowerCase().indexOf(valor.toLowerCase()) > -1;
            });
        }
    };
    AppearanceAnimationLayout5.prototype.verificaNovoItem = function (item) {
        return item.id == 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout5.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout5.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], AppearanceAnimationLayout5.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], AppearanceAnimationLayout5.prototype, "content", void 0);
    AppearanceAnimationLayout5 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'appearance-animation-layout-5',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\appearance-animation\layout-5\appearance-animation.html"*/'<!--Theme Appearance animation (Zoom In)-->\n\n<ion-content>\n\n    <h2 text-center text-wrap class="broadcomb" *ngIf="config.broadcomb">{{config.broadcomb.toUpperCase()}}</h2>\n\n    <h2 padding text-center class="aviso" *ngIf="animateItems.length < 1 || data.length < 1">Nenhum registro encontrado.</h2>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <ion-row *ngIf="config.exibirDatas && animateItems.length > 0">\n\n            <ion-col col-12>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoDownload != \'Nunca\'">Último download: {{ultimoDownload | date: \'dd/MM/yyyy  HH:mm\'}}</h3>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoUpload != \'Nunca\'">Última publicação: {{ultimoUpload | date: \'dd/MM/yyyy  HH:mm\'}}</h3>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoDownload == \'Nunca\'">Último download: {{ultimoDownload}}</h3>\n\n                <h3 item-data text-wrap text-center *ngIf="ultimoUpload == \'Nunca\'">Última publicação: {{ultimoUpload}}</h3>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngIf="config.btnNovoLabel">\n\n                <button ion-button default-button block text-capitalize box-shadow margin-bottom class="button-novo" (click)="onEvent(\'onAddClick\')">{{config.btnNovoLabel}}</button>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col class="col-search" col-12 *ngIf="data.length > 0 || !animacaoAtiva" [ngClass]="{\'margin-top-10\': !config.exibirDatas}">\n\n                <ion-searchbar [placeholder]="\'Filtrar pela descrição\'" (ionInput)="filtrar($event.target.value)"></ion-searchbar>\n\n            </ion-col>\n\n            <ion-col col-12>\n\n                <ion-list no-margin *ngIf="animacaoAtiva">\n\n                    <ion-item default-item no-lines [ngClass]="{\'novo-item\': verificaNovoItem(item) && !config.alteracoes, \'zoom-in\': true}" *ngFor="let item of animateItems; let i = index;"\n\n                        (click)="onEvent(\'onItemClick\', item, $event)">\n\n                        <ion-row class="espacamento">\n\n                            <ion-col col-10>\n\n                                <h2 item-title text-wrap>{{item.descricao}}</h2>\n\n                                <h3 item-situacao text-wrap *ngIf="config.subTitulo">{{config.subTitulo}}: {{config.alteracoes ? (item.data | date: \'dd/MM/yyyy hh:mm\') : item.situacao}}</h3>\n\n                            </ion-col>\n\n                            <ion-col col-2 *ngIf="config.exclusaoPossivel" (click)="onEvent(\'onIconClick\', item, $event)">\n\n                                <ion-icon icon-small name="{{config.icon}}" item-right\n\n                                    style="font-size: 25px !important; margin: 0px" [ngClass]="{\'color-black\': !item.delete , \'color-red\' : item.delete}"></ion-icon>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                        <ion-row class="espacamento" *ngIf="config.tipo">\n\n                            <ion-col col-12 class="tipo">\n\n                                <h3 no-margin item-tipo text-wrap>{{item.tipo.toUpperCase()}}</h3>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-item>\n\n                </ion-list>\n\n\n\n                <ion-list no-margin *ngIf="!animacaoAtiva">\n\n                    <ion-item default-item no-lines [ngClass]="{\'novo-item\': verificaNovoItem(item) && !config.alteracoes}" *ngFor="let item of data; let i = index;" (click)="onEvent(\'onItemClick\', item, $event)">\n\n                        <ion-row class="espacamento">\n\n                            <ion-col col-10>\n\n                                <h2 item-title text-wrap>{{item.descricao}}</h2>\n\n                                <h3 item-situacao text-wrap *ngIf="config.subTitulo">{{config.subTitulo}}: {{config.alteracoes ? (item.data | date: \'dd/MM/yyyy hh:mm\') : item.situacao}}</h3>\n\n                            </ion-col>\n\n                            <ion-col col-2 *ngIf="config.exclusaoPossivel">\n\n                                <ion-icon icon-small name="{{config.icon}}" item-right (click)="onEvent(\'onIconClick\', item, $event)"\n\n                                    style="font-size: 25px !important; margin: 0px" [ngClass]="{\'color-black\': !item.delete , \'color-red\' : item.delete}"></ion-icon>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                        <ion-row class="espacamento" *ngIf="config.tipo">\n\n                            <ion-col col-12 class="tipo">\n\n                                <h3 no-margin item-tipo text-wrap>{{item.tipo.toUpperCase()}}</h3>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\appearance-animation\layout-5\appearance-animation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AppearanceAnimationLayout5);
    return AppearanceAnimationLayout5;
}());

//# sourceMappingURL=appearance-animation-layout-5.js.map

/***/ }),

/***/ 826:
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

/***/ 827:
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

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_alteracao__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_message_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_loading_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_obra__ = __webpack_require__(913);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AreaPage = /** @class */ (function () {
    function AreaPage(navCtrl, storage, alertCtrl, messageService, navParams, modalCtrl, loadingService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.messageService = messageService;
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
            "broadcomb": ""
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
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('obras').then(function (obras) {
                obras.find(function (x) { return x.id == _this.obraId; }).areas.find(function (x) { return area.idGuid ? (x.idGuid == area.idGuid) : (x.id == area.id); }).delete = area.delete;
                _this.storage.set('obras', obras);
            });
        });
    };
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
    AreaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-area',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\area\area.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon class="icon-menu" name="menu"></ion-icon>\n\n        </button>\n\n        <div buy>\n\n            <ion-title>\n\n                Áreas\n\n            </ion-title>\n\n        </div>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<appearance-animation-layout-5 *ngIf="reload" has-header [data]="areas" [events]="events" [config]="config"></appearance-animation-layout-5>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\area\area.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__utils_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__utils_loading_service__["a" /* LoadingService */]])
    ], AreaPage);
    return AreaPage;
}());

//# sourceMappingURL=area.js.map

/***/ }),

/***/ 913:
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

/***/ })

});
//# sourceMappingURL=8.js.map