webpackJsonp([16,71],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearanceAnimationLayout5Module", function() { return AppearanceAnimationLayout5Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_5__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(153);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__appearance_animation_layout_5__["a" /* AppearanceAnimationLayout5 */]),
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

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlteracoesPageModule", function() { return AlteracoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alteracoes__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_list_view_appearance_animation_layout_5_appearance_animation_layout_5_module__ = __webpack_require__(688);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AlteracoesPageModule = /** @class */ (function () {
    function AlteracoesPageModule() {
    }
    AlteracoesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alteracoes__["a" /* AlteracoesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alteracoes__["a" /* AlteracoesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__core_list_view_appearance_animation_layout_5_appearance_animation_layout_5_module__["AppearanceAnimationLayout5Module"]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AlteracoesPageModule);
    return AlteracoesPageModule;
}());

//# sourceMappingURL=alteracoes.module.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppearanceAnimationLayout5; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(153);
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

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlteracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_message_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_loading_service__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlteracoesPage = /** @class */ (function () {
    function AlteracoesPage(storage, messageService, loadingService, navCtrl) {
        var _this = this;
        this.storage = storage;
        this.messageService = messageService;
        this.loadingService = loadingService;
        this.navCtrl = navCtrl;
        this.reload = true;
        this.alteracoes = [];
        this.events = {
            onIconClick: function (data) {
                _this.confirmarExclusao(data);
            }
        };
        this.config = {
            "exclusaoPossivel": true,
            "icon": "trash",
            "exibirDatas": false,
            "subTitulo": "Data",
            "tipo": false,
            "alteracoes": true
        };
        this.obterAlteracoes();
    }
    AlteracoesPage.prototype.obterAlteracoes = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                if (atualizacoes && atualizacoes.length > 0) {
                    _this.alteracoes = atualizacoes;
                }
                else {
                    _this.alteracoes = [];
                    _this.messageService.exibirMensagem("Não há nenhuma alteração pendente.");
                    _this.navCtrl.setRoot("HomePage");
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
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('obras').then(function (obras) {
                switch (alteracao.entidade.toLowerCase()) {
                    case "area":
                        if (alteracao.tipo.toLowerCase() == "insert") {
                            var index = obras.find(function (x) { return x.id == alteracao.obraId; }).areas.findIndex(function (x) { return x.id == JSON.parse(alteracao.valor).id; });
                            obras.find(function (x) { return x.id == alteracao.obraId; }).areas.splice(index, 1);
                            break;
                        }
                        else {
                            obras.find(function (x) { return x.id == alteracao.obraId; }).areas.find(function (x) { return x.id == JSON.parse(alteracao.valor).id; }).delete = !JSON.parse(alteracao.valor).delete;
                            break;
                        }
                }
                _this.storage.set('obras', obras);
            });
        });
    };
    AlteracoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-alteracoes',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\alteracoes\alteracoes.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon class="icon-menu" name="menu"></ion-icon>\n\n        </button>\n\n        <div buy>\n\n            <ion-title>\n\n                Alterações\n\n            </ion-title>\n\n        </div>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<appearance-animation-layout-5 *ngIf="reload" has-header [data]="alteracoes" [events]="events" [config]="config"></appearance-animation-layout-5>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\alteracoes\alteracoes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__utils_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__utils_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]])
    ], AlteracoesPage);
    return AlteracoesPage;
}());

//# sourceMappingURL=alteracoes.js.map

/***/ })

});
//# sourceMappingURL=16.js.map