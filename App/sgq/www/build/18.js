webpackJsonp([18],{

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistCadastroPageModule", function() { return ChecklistCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checklist_cadastro__ = __webpack_require__(904);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChecklistCadastroPageModule = /** @class */ (function () {
    function ChecklistCadastroPageModule() {
    }
    ChecklistCadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checklist_cadastro__["a" /* ChecklistCadastroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checklist_cadastro__["a" /* ChecklistCadastroPage */])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ChecklistCadastroPageModule);
    return ChecklistCadastroPageModule;
}());

//# sourceMappingURL=checklist-cadastro.module.js.map

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

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObraPageModule", function() { return ObraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obra__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_list_view_appearance_animation_layout_5_appearance_animation_layout_5_module__ = __webpack_require__(691);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ObraPageModule = /** @class */ (function () {
    function ObraPageModule() {
=======
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
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
    }
    return ItemChecklist;
}());

//# sourceMappingURL=item-checklist.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_uuid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChecklistCadastroPage = /** @class */ (function () {
    function ChecklistCadastroPage(storage, navParams, modalCtrl, toastService, viewCtrl) {
        this.storage = storage;
<<<<<<< HEAD
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
            selector: 'appearance-animation-layout-5',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/appearance-animation/layout-5/appearance-animation.html"*/'<!--Theme Appearance animation (Zoom In)-->\n<ion-content>\n    <h2 text-center text-wrap class="broadcomb" *ngIf="config.broadcomb">{{config.broadcomb.toUpperCase()}}</h2>\n    <h2 padding text-center class="aviso" *ngIf="!config.naoExibirMensagemListaVazia && (animateItems.length < 1 || data.length < 1)">Nenhum\n        registro encontrado.</h2>\n    <ion-grid no-padding *ngIf="data != null">\n        <ion-row *ngIf="config.exibirDatas && animateItems.length > 0">\n            <ion-col col-12>\n                <h3 item-data text-wrap text-center *ngIf="ultimoDownload != \'Nunca\'">Último download: {{ultimoDownload\n                    | date: \'dd/MM/yyyy HH:mm\'}}</h3>\n                <h3 item-data text-wrap text-center *ngIf="ultimoUpload != \'Nunca\'">Última publicação: {{ultimoUpload |\n                    date: \'dd/MM/yyyy HH:mm\'}}</h3>\n                <h3 item-data text-wrap text-center *ngIf="ultimoDownload == \'Nunca\'">Último download:\n                    {{ultimoDownload}}</h3>\n                <h3 item-data text-wrap text-center *ngIf="ultimoUpload == \'Nunca\'">Última publicação: {{ultimoUpload}}</h3>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="config.btnNovoLabel">\n            <button ion-button default-button block text-capitalize box-shadow margin-bottom class="button-novo"\n                (click)="onEvent(\'onAddClick\')">{{config.btnNovoLabel}}</button>\n        </ion-row>\n        <ion-grid [ngClass]="{\'filtros\': config.filtrarSituacao}">\n            <ion-list radio-group no-margin [(ngModel)]="situacao" name="situacao" id="situacao" (ngModelChange)="filtrarSituacao($event)">\n                <ion-row *ngIf="config.filtrarSituacao">\n                    <h3 item-data text-wrap text-center>Filtros:</h3>\n                </ion-row>\n                <ion-row *ngIf="config.filtrarSituacao">\n                    <ion-col col-6>\n                        <ion-item radio>\n                            <ion-label>Em aberto</ion-label>\n                            <ion-radio [value]="0" checked></ion-radio>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item radio>\n                            <ion-label>Finalizado</ion-label>\n                            <ion-radio [value]="1"></ion-radio>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class="col-search" col-12 *ngIf="data.length > 0 || !animacaoAtiva" [ngClass]="{\'margin-top-10\': !config.exibirDatas}">\n                        <ion-searchbar [(ngModel)]="searchbarDefault" [placeholder]="\'Filtrar pela descrição\'"\n                            (ionInput)="filtrar($event.target.value)"></ion-searchbar>\n                    </ion-col>\n                </ion-row>\n            </ion-list>\n        </ion-grid>\n        <ion-grid style="padding-top: 0;">\n            <ion-row>\n                <ion-col col-12>\n                    <ion-list no-margin *ngIf="animacaoAtiva">\n                        <ion-item default-item no-lines [ngClass]="{\'novo-item\': verificaNovoItem(item) && !config.alteracoes, \'zoom-in\': true}"\n                            *ngFor="let item of animateItems; let i = index;" (click)="onEvent(\'onItemClick\', item, $event)">\n                            <ion-row class="espacamento">\n                                <ion-col col-10>\n                                    <h2 *ngIf="!config.concatena" item-title text-wrap>{{item.descricao}}</h2>\n                                    <h2 *ngIf="config.concatena" item-title text-wrap>{{item.codigo}} -\n                                        {{item.descricao}}</h2>\n                                    <h3 item-situacao text-wrap *ngIf="config.subTitulo">{{config.subTitulo}}:\n                                        {{config.alteracoes ? (item.data | date: \'dd/MM/yyyy hh:mm\') :\n                                        item.situacao }}</h3>\n                                </ion-col>\n                                <ion-col col-2 *ngIf="config.exclusaoPossivel" (click)="onEvent(\'onIconClick\', item, $event)">\n                                    <ion-icon icon-small name="{{config.icon}}" item-right style="font-size: 25px !important; margin: 0px"\n                                        [ngClass]="{\'color-black\': !item.delete , \'color-red\' : item.delete}"></ion-icon>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row class="espacamento" *ngIf="config.tipo">\n                                <ion-col col-12 class="tipo">\n                                    <h3 no-margin item-tipo text-wrap>{{item.tipo.length > 1 ?\n                                        item.tipo.toUpperCase() :\n                                        (item.tipo == \'C\' ? \'CONTROLADO\' : \'ESPECIALIZADO\') }}</h3>\n                                </ion-col>\n                            </ion-row>\n                        </ion-item>\n                    </ion-list>\n\n                    <ion-list no-margin *ngIf="!animacaoAtiva">\n                        <ion-item default-item no-lines [ngClass]="{\'novo-item\': verificaNovoItem(item) && !config.alteracoes}"\n                            *ngFor="let item of data; let i = index;" (click)="onEvent(\'onItemClick\', item, $event)">\n                            <ion-row class="espacamento">\n                                <ion-col col-10>\n                                    <h2 *ngIf="!config.concatena" item-title text-wrap>{{item.descricao}}</h2>\n                                    <h2 *ngIf="config.concatena" item-title text-wrap>{{item.codigo}} -\n                                        {{item.descricao}}</h2>\n                                    <h3 item-situacao text-wrap *ngIf="config.subTitulo">{{config.subTitulo}}:\n                                        {{config.alteracoes ? (item.data | date: \'dd/MM/yyyy hh:mm\') :\n                                        item.situacao}}</h3>\n                                </ion-col>\n                                <ion-col col-2 *ngIf="config.exclusaoPossivel">\n                                    <ion-icon icon-small name="{{config.icon}}" item-right (click)="onEvent(\'onIconClick\', item, $event)"\n                                        style="font-size: 25px !important; margin: 0px" [ngClass]="{\'color-black\': !item.delete , \'color-red\' : item.delete}"></ion-icon>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row class="espacamento" *ngIf="config.tipo">\n                                <ion-col col-12 class="tipo">\n                                    <h3 no-margin item-tipo text-wrap>{{item.tipo.length > 1 ?\n                                        item.tipo.toUpperCase() :\n                                        (item.tipo == \'C\' ? \'CONTROLADO\' : \'ESPECIALIZADO\') }}</h3>\n                                </ion-col>\n                            </ion-row>\n                        </ion-item>\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/appearance-animation/layout-5/appearance-animation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AppearanceAnimationLayout5);
    return AppearanceAnimationLayout5;
}());

//# sourceMappingURL=appearance-animation-layout-5.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_obra_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_loading_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_toast_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_message_service__ = __webpack_require__(155);
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








var ObraPage = /** @class */ (function () {
    function ObraPage(obraService, loadingService, storageServiceUtils, toastService, messageService, storage, navCtrl) {
        var _this = this;
        this.obraService = obraService;
        this.loadingService = loadingService;
        this.storageServiceUtils = storageServiceUtils;
        this.toastService = toastService;
        this.messageService = messageService;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.obras = [];
        this.events = {
            onItemClick: function (data) {
                _this.abrirAreas(data);
            }
        };
        this.config = {
            "exclusaoPossivel": false,
            "icon": "na",
            "tipo": false,
            "exibirDatas": true,
            "subTitulo": "Situação"
        };
    }
    ObraPage.prototype.abrirAreas = function (obra) {
        this.navCtrl.push("AreaPage", { obra: obra });
=======
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastService = toastService;
        this.viewCtrl = viewCtrl;
        this.checklist = new __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__["a" /* ItemChecklist */]();
        this.checklist = this.navParams.data.checklist ? new __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__["a" /* ItemChecklist */](this.navParams.data.checklist) : new __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__["a" /* ItemChecklist */]();
        this.checklist.tipo = this.checklist.tipo ? this.checklist.tipo.slice(0, 1) : null;
    }
    ChecklistCadastroPage.prototype.voltar = function () {
        this.viewCtrl.dismiss(null);
    };
    ChecklistCadastroPage.prototype.salvar = function (formValido) {
        if (formValido && this.checklist.tipo) {
            this.checklist.idGuid = __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__["UUID"].UUID();
            this.adicionarItens();
        }
        else {
            this.toastService.presentToastWarning("Preencha todos os campos.");
        }
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
    };
    ChecklistCadastroPage.prototype.adicionarItens = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CadastroItemPage", { checklist: this.checklist });
        modal.present();
        modal.onWillDismiss(function (checklist) {
            if (checklist) {
                _this.viewCtrl.dismiss(checklist);
            }
        });
    };
    ChecklistCadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'page-obra',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/pages/obra/obra.html"*/'<ion-header>\n    <ion-navbar class="pad-nav-page">\n        <button ion-button menuToggle>\n            <ion-icon class="icon-menu" name="menu"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>\n\n<appearance-animation-layout-5 has-header *ngIf="obras" [data]="obras" [events]="events" [config]="config"></appearance-animation-layout-5>'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/pages/obra/obra.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_obra_service__["a" /* ObraService */]]
=======
            selector: 'page-checklist-cadastro',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\checklist\cadastro\checklist-cadastro.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-row class="pad-nav-page" (click)="voltar()">\n\n            <button class="button-nav">\n\n                <span ion-text>Voltar</span>\n\n            </button>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-grid no-padding>\n\n        <ion-row padding-left padding-right>\n\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n                <form #cadastroForm="ngForm" padding-top>\n\n                    <ion-list radio-group no-margin [(ngModel)]="checklist.tipo" name="tipo">\n\n                        <ion-grid>\n\n                            <ion-row>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Controlado</ion-label>\n\n                                        <ion-radio value="C"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                                <ion-col col-6>\n\n                                    <ion-item radio>\n\n                                        <ion-label>Especializado</ion-label>\n\n                                        <ion-radio value="E"></ion-radio>\n\n                                    </ion-item>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n                    </ion-list>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>CÓDIGO</ion-label>\n\n                        <ion-input text-center required type="text" [(ngModel)]="checklist.codigo" name="codigo"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>DESCRIÇÃO</ion-label>\n\n                        <ion-textarea rows="3" text-center required type="text" [(ngModel)]="checklist.descricao" name="descricao"></ion-textarea>\n\n                    </ion-item>\n\n\n\n                    <h3 text-center class="locais">Critérios de localização do serviço</h3>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>CAMPO 1</ion-label>\n\n                        <ion-input text-center type="text" [(ngModel)]="checklist.campo1" name="campo1"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>CAMPO 2</ion-label>\n\n                        <ion-input text-center type="text" [(ngModel)]="checklist.campo2" name="campo2"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>CAMPO 3</ion-label>\n\n                        <ion-input text-center type="text" [(ngModel)]="checklist.campo3" name="campo3"></ion-input>\n\n                    </ion-item>\n\n                    <ion-item text-center transparent>\n\n                        <ion-label stacked>CAMPO 4</ion-label>\n\n                        <ion-input text-center type="text" [(ngModel)]="checklist.campo4" name="campo4"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n\n                        (click)="salvar(cadastroForm.valid)">Definir Itens</button>\n\n                </form>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\checklist\cadastro\checklist-cadastro.html"*/
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], ChecklistCadastroPage);
    return ChecklistCadastroPage;
}());

//# sourceMappingURL=checklist-cadastro.js.map

/***/ })

});
//# sourceMappingURL=18.js.map