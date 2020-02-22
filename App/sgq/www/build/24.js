webpackJsonp([24],{

<<<<<<< HEAD
/***/ 696:
=======
/***/ 773:
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetLayout2Module", function() { return ActionSheetLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__action_sheet_layout_2__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elastic_header_elastic_header_module__ = __webpack_require__(782);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterOcorrenciaPageModule", function() { return ManterOcorrenciaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manter_ocorrencia__ = __webpack_require__(880);
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



<<<<<<< HEAD

var ActionSheetLayout2Module = /** @class */ (function () {
    function ActionSheetLayout2Module() {
    }
    ActionSheetLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__action_sheet_layout_2__["a" /* ActionSheetLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__action_sheet_layout_2__["a" /* ActionSheetLayout2 */]),
                __WEBPACK_IMPORTED_MODULE_3__elastic_header_elastic_header_module__["a" /* ElasticHeaderModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__action_sheet_layout_2__["a" /* ActionSheetLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ActionSheetLayout2Module);
    return ActionSheetLayout2Module;
}());

//# sourceMappingURL=action-sheet-layout-2.module.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elastic_header__ = __webpack_require__(783);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ElasticHeaderModule = /** @class */ (function () {
    function ElasticHeaderModule() {
    }
    ElasticHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__elastic_header__["a" /* ElasticHeader */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__elastic_header__["a" /* ElasticHeader */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ElasticHeaderModule);
    return ElasticHeaderModule;
}());

//# sourceMappingURL=elastic-header.module.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
=======
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

/***/ 796:
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
        this.descricao = '';
        this.tratativa = '';
        this.dataHoraAlteracao = new Date();
        Object.assign(this, values);
    }
    return Ocorrencia;
}());

//# sourceMappingURL=ocorrencia.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManterOcorrenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ocorrencia__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__ = __webpack_require__(350);
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

<<<<<<< HEAD
var ElasticHeader = /** @class */ (function () {
    function ElasticHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ElasticHeader.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollerHandle = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = this.scrollerHandle.firstElementChild;
        this.headerHeight = this.scrollerHandle.clientHeight;
        this.ticking = false;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        window.addEventListener('resize', function () {
            _this.headerHeight = _this.scrollerHandle.clientHeight;
        }, false);
        this.scrollerHandle.addEventListener('scroll', function () {
            if (!_this.ticking) {
                window.requestAnimationFrame(function () {
                    _this.updateElasticHeader();
                });
            }
            _this.ticking = true;
        });
    };
    ElasticHeader.prototype.updateElasticHeader = function () {
        this.scrollTop = this.scrollerHandle.scrollTop;
        if (this.scrollTop >= 0) {
            this.translateAmt = this.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -this.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
        this.ticking = false;
    };
    ElasticHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[elastic-header]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ElasticHeader);
    return ElasticHeader;
}());

//# sourceMappingURL=elastic-header.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionSheetLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionSheetLayout2 = /** @class */ (function () {
    function ActionSheetLayout2(actionSheetCtrl) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.headerImage = "";
    }
    ActionSheetLayout2.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ActionSheetLayout2.prototype.onStarClass = function (items, index, e) {
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates", index, e);
    };
    ActionSheetLayout2.prototype.ngAfterViewInit = function () {
        this.subscribeToIonScroll();
    };
    ActionSheetLayout2.prototype.isClassActive = function () {
        return this.active;
    };
    ActionSheetLayout2.prototype.ngOnChanges = function (changes) {
        if (changes.data && changes.data.currentValue) {
            this.headerImage = changes.data.currentValue.headerImage;
        }
        this.subscribeToIonScroll();
    };
    ActionSheetLayout2.prototype.subscribeToIonScroll = function () {
        var _this = this;
        if (this.content != null && this.content.ionScroll != null) {
            this.content.ionScroll.subscribe(function (d) {
                if (d.scrollTop < 200) {
                    _this.active = false;
                    return;
                }
                _this.active = true;
            });
        }
    };
    ActionSheetLayout2.prototype.presentActionSheet = function (item, index) {
        var that = this;
        this.data.actionSheet.buttons.forEach(function (element) {
            element["handler"] = function () {
                that.onEvent("onItemClickActionSheet", { "button": element, "item": item }, null);
            };
        });
        var actionSheet = this.actionSheetCtrl.create(this.data.actionSheet);
        actionSheet.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ActionSheetLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ActionSheetLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ActionSheetLayout2.prototype, "content", void 0);
    ActionSheetLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'action-sheet-layout-2',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\action-sheet\layout-2\action-sheet.html"*/'<ion-header>\n\n  <ion-navbar transparent [ngClass]="{\'active\':isClassActive()}">\n\n    <button ion-button menuToggle *ngIf="data.showMenu">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title *ngIf="data != null">{{data.headerTitle}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content elastic-header>\n\n  <ion-item no-lines background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + headerImage + \')\'}">\n\n    <div title-block *ngIf="data != null">\n\n      <h1 padding-left parallax-title text-wrap>{{data.title}}</h1>\n\n      <span new-category transparent padding-left padding-bottom text-uppercase>{{data.category}}</span>\n\n    </div>\n\n  </ion-item>\n\n  <ion-item-group *ngIf="data != null">\n\n    <ion-item-divider no-lines>\n\n      <ion-thumbnail item-start>\n\n        <img [src]="data.avatar" />\n\n      </ion-thumbnail>\n\n      <h2 item-title>{{data.subtitle}}</h2>\n\n      <button *ngIf="data.actionSheet.buttons.length > 0" item-end ion-button ion-text button-action-shit (click)="presentActionSheet(data)">\n\n        <ion-icon [name]="data.shareIcon"></ion-icon>\n\n      </button>\n\n    </ion-item-divider>\n\n    <ion-item no-margin no-lines>\n\n      <p parallax-description text-wrap>{{data.description}}</p>\n\n    </ion-item>\n\n    <button *ngIf="data.realizarOrcamento" ion-button default-button block text-capitalize box-shadow margin-bottom (click)="onEvent(\'onRegister\')">Ver preços</button>\n\n    <ion-item no-margin no-lines *ngFor="let item of data.items;let i = index">\n\n      <h2 parallax-subtitle margin-bottom text-wrap>{{item.title}}</h2>\n\n      <p parallax-description text-wrap>{{item.subtitle}}</p>\n\n    </ion-item>\n\n    <button *ngIf="data.realizarOrcamento" ion-button default-button block text-capitalize box-shadow margin-bottom (click)="onEvent(\'onRegister\')">Ver preços</button>\n\n  </ion-item-group>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\action-sheet\layout-2\action-sheet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ActionSheetLayout2);
    return ActionSheetLayout2;
}());

//# sourceMappingURL=action-sheet-layout-2.js.map
=======



var ManterOcorrenciaPage = /** @class */ (function () {
    function ManterOcorrenciaPage(viewCtrl, toastService, navParams) {
        this.viewCtrl = viewCtrl;
        this.toastService = toastService;
        this.navParams = navParams;
        this.ocorrencia = new __WEBPACK_IMPORTED_MODULE_2__models_ocorrencia__["a" /* Ocorrencia */]();
        this.ocorrencia = this.navParams.data.ocorrencia;
    }
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
    ManterOcorrenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-manter-ocorrencia',template:/*ion-inline-start:"/Users/duduulopes/Desktop/sgq/App/sgq/src/pages/ocorrencia/manter/manter-ocorrencia.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row>\n            <ion-col col-2>\n                <button class="button-nav" (click)="voltar()">\n                    <span ion-text style="font-size: 0.7em;">Voltar</span>\n                </button>\n            </ion-col>\n            <ion-col col-10 m-auto>\n                <ion-title>Ocorrência</ion-title>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content has-header>\n    <ion-grid no-padding>\n        <ion-row padding-left padding-right>\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n                <form #cadastroForm="ngForm" padding-top>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>DATA DA DESCRIÇÃO</ion-label>\n                        <ion-datetime displayFormat="DD/MM/YYYY" name="dataDescricao" [(ngModel)]="ocorrencia.dataDescricao"\n                            cancelText="Cancelar" doneText="Ok" required></ion-datetime>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>DESCRIÇÃO</ion-label>\n                        <ion-textarea text-center type="text" rows="4" [(ngModel)]="ocorrencia.descricao" name="descricao" required></ion-textarea>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>DATA DA TRATATIVA</ion-label>\n                        <ion-datetime displayFormat="DD/MM/YYYY" name="dataTratativa" [(ngModel)]="ocorrencia.dataTratativa"\n                            cancelText="Cancelar" doneText="Ok"></ion-datetime>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>TRATATIVA</ion-label>\n                        <ion-textarea text-center type="text" rows="4" [(ngModel)]="ocorrencia.tratativa" name="tratativa"></ion-textarea>\n                    </ion-item>\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n                        (click)="salvar(cadastroForm.valid)">Salvar</button>\n                </form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/duduulopes/Desktop/sgq/App/sgq/src/pages/ocorrencia/manter/manter-ocorrencia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], ManterOcorrenciaPage);
    return ManterOcorrenciaPage;
}());

//# sourceMappingURL=manter-ocorrencia.js.map
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99

/***/ })

});
//# sourceMappingURL=24.js.map