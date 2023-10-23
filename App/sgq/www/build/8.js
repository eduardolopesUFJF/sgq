webpackJsonp([8],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyListHeaderLayout1Module", function() { return StickyListHeaderLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sticky_list_header_layout_1__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion_affix__ = __webpack_require__(813);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StickyListHeaderLayout1Module = /** @class */ (function () {
    function StickyListHeaderLayout1Module() {
    }
    StickyListHeaderLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sticky_list_header_layout_1__["a" /* StickyListHeaderLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sticky_list_header_layout_1__["a" /* StickyListHeaderLayout1 */]),
                __WEBPACK_IMPORTED_MODULE_3_ion_affix__["a" /* IonAffixModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sticky_list_header_layout_1__["a" /* StickyListHeaderLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], StickyListHeaderLayout1Module);
    return StickyListHeaderLayout1Module;
}());

//# sourceMappingURL=sticky-list-header-layout-1.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 767:
=======
/***/ 802:
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonAffix; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_list_view_appearance_animation_layout_5_appearance_animation_layout_5_module__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checklist__ = __webpack_require__(873);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapters_adapter_factory__ = __webpack_require__(815);
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51


/**
 * Directive for creating affixed list headers. Apply it to ion-list-header and pass a reference to ion-content to it.
 *
 * @example
 * <ion-content #content>
 *     <ion-list>
 *         <ion-list-header ion-affix [content]="content">Group 1</ion-list-header>
 *         <ion-item *ngFor="let item of items">{{item}}</ion-item>
 *     </ion-list>
 * </ion-content>
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 *
 */
var IonAffix = (function () {
    function IonAffix(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onSticky = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    IonAffix.prototype.ngAfterViewInit = function () {
        var _this = this;
        // getting container
        this.scrollContainer = Object(__WEBPACK_IMPORTED_MODULE_1__adapters_adapter_factory__["a" /* adapterFactory */])(this.content);
        this.headerElement = this.element.nativeElement;
        this.containerElement = this.headerElement.parentElement;
        var headerHeight = this.headerElement.getBoundingClientRect().height;
        var right = window.innerWidth - this.headerElement.getBoundingClientRect().width - this.headerElement.getBoundingClientRect().left;
        var left = this.headerElement.getBoundingClientRect().left;
        var scrollClientTop = this.scrollContainer.getClientTop();
        var containerTop = this.containerElement.offsetTop;
        var containerBottom = containerTop + this.containerElement.getBoundingClientRect().height;
        // initially checking if affix needs to be shown
        this.updateSticky(this.scrollContainer.getScrollTop(), containerTop, containerBottom, scrollClientTop, headerHeight, left, right, true);
        var onScroll = function () {
            var scrollTop = _this.scrollContainer.getScrollTop();
            scrollClientTop = _this.scrollContainer.getClientTop();
            containerTop = _this.containerElement.offsetTop;
            containerBottom = containerTop + _this.containerElement.getBoundingClientRect().height;
            _this.updateSticky(scrollTop, containerTop, containerBottom, scrollClientTop, headerHeight, left, right, _this.scrollContainer.isScrollingDown());
        };
        // subscribing to scroll events
        this.scrollSubscription = this.scrollContainer.onScroll().subscribe(onScroll);
    };
    IonAffix.prototype.updateSticky = function (scrollTop, containerTop, containerBottom, scrollClientTop, headerHeight, left, right, downwards) {
        var _this = this;
        // check if scrollTop is within list boundaries
        if (scrollTop > 0 && scrollTop >= containerTop && scrollTop <= containerBottom) {
            if (!this.clone) {
                this.clone = this.headerElement.cloneNode(true);
                this.containerElement.insertBefore(this.clone, this.headerElement);
                this.scrollContainer.appendFixedHeader(this.headerElement);
                this.onSticky.emit({ sticky: true, affix: this });
                // for fancy transition efx if scrolling down
                if (downwards) {
                    this.applyStyles(left, right);
                }
                else {
                    this.applyStyles(0, 0);
                }
                setTimeout(function () {
                    _this.renderer.setStyle(_this.headerElement, 'right', '0px');
                    _this.renderer.setStyle(_this.headerElement, 'left', '0px');
                }, 0);
            }
            // transform vertical position to push fixed header up/down
            if (scrollTop <= containerBottom && scrollTop >= (containerBottom - headerHeight)) {
                var delta = scrollClientTop - (scrollTop - (containerBottom - headerHeight));
                this.renderer.setStyle(this.headerElement, 'transform', "translate3d(0px, " + delta + "px, 0px)");
                this.renderer.setStyle(this.headerElement, '-webkit-transform', "translate3d(0px, " + delta + "px, 0px)");
            }
            else {
                this.renderer.setStyle(this.headerElement, 'transform', "translate3d(0px, " + scrollClientTop + "px, 0px)");
                this.renderer.setStyle(this.headerElement, '-webkit-transform', "translate3d(0px, " + scrollClientTop + "px, 0px)");
            }
        }
        else {
            this.reset();
        }
    };
    IonAffix.prototype.reset = function () {
        if (this.clone) {
            this.containerElement.insertBefore(this.headerElement, this.clone);
            this.clearStyles();
            this.clone.remove();
            this.clone = null;
            this.onSticky.emit({ sticky: false, affix: this });
        }
    };
    IonAffix.prototype.applyStyles = function (left, right) {
        this.renderer.setStyle(this.headerElement, 'right', right + "px");
        this.renderer.setStyle(this.headerElement, 'left', left + "px");
        this.renderer.setStyle(this.headerElement, 'transition', 'left 0.1s ease-out, right 0.1s ease-out');
        this.renderer.setStyle(this.headerElement, 'z-index', '2');
        this.renderer.setStyle(this.headerElement, 'position', 'absolute');
        this.renderer.setStyle(this.headerElement, 'width', 'auto');
        this.renderer.setStyle(this.headerElement, 'top', '0px');
    };
    IonAffix.prototype.clearStyles = function () {
        this.renderer.removeStyle(this.headerElement, 'position');
        this.renderer.removeStyle(this.headerElement, 'z-index');
        this.renderer.removeStyle(this.headerElement, 'transition');
        this.renderer.removeStyle(this.headerElement, 'top');
        this.renderer.removeStyle(this.headerElement, 'transform');
        this.renderer.removeStyle(this.headerElement, '-webkit-transform');
        this.renderer.removeStyle(this.headerElement, 'left');
        this.renderer.removeStyle(this.headerElement, 'right');
        this.renderer.removeStyle(this.headerElement, 'width');
    };
    IonAffix.prototype.ngOnDestroy = function () {
        this.reset();
        this.scrollSubscription.unsubscribe();
    };
    IonAffix.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[ion-affix]'
                },] },
    ];
    /** @nocollapse */
    IonAffix.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], },
    ]; };
    IonAffix.propDecorators = {
        "content": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['content',] },],
        "onSticky": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return IonAffix;
}());

//# sourceMappingURL=ion-affix.js.map

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ion_affix_module__ = __webpack_require__(814);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ion_affix_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ion_affix__ = __webpack_require__(802);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonAffixModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ion_affix__ = __webpack_require__(802);


var IonAffixModule = (function () {
    function IonAffixModule() {
    }
    IonAffixModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_1__directives_ion_affix__["a" /* IonAffix */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_1__directives_ion_affix__["a" /* IonAffix */]
                    ]
                },] },
    ];
    /** @nocollapse */
    IonAffixModule.ctorParameters = function () { return []; };
    return IonAffixModule;
}());

//# sourceMappingURL=ion-affix.module.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = adapterFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_adapter__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scroll_adapter__ = __webpack_require__(817);



function adapterFactory(container) {
    if (container instanceof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* Content */]) {
        return new __WEBPACK_IMPORTED_MODULE_1__content_adapter__["a" /* ContentAdapter */](container);
    }
    else if (container instanceof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* Scroll */]) {
        return new __WEBPACK_IMPORTED_MODULE_2__scroll_adapter__["a" /* ScrollAdapter */](container);
    }
    throw 'Invalid container element (only ion-content and ion-scroll currently supported)';
}
//# sourceMappingURL=adapter-factory.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);

/**
 * Adapter for ion-content.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
var /**
 * Adapter for ion-content.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
ContentAdapter = (function () {
    function ContentAdapter(content) {
        this.content = content;
    }
    ContentAdapter.prototype.onScroll = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["merge"])(this.content.ionScrollStart, this.content.ionScroll, this.content.ionScrollEnd);
    };
    ContentAdapter.prototype.getClientTop = function () {
        return this.content.getScrollElement().getBoundingClientRect().top;
    };
    ContentAdapter.prototype.getScrollTop = function () {
        return this.content.getScrollElement().scrollTop;
    };
    ContentAdapter.prototype.appendFixedHeader = function (headerElement) {
        this.content.getNativeElement().appendChild(headerElement);
    };
    ContentAdapter.prototype.isScrollingDown = function () {
        return this.content.directionY === 'down';
    };
    return ContentAdapter;
}());
/**
 * Adapter for ion-content.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */

//# sourceMappingURL=content-adapter.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__);


/**
 * Adapter for ion-scroll.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
var /**
 * Adapter for ion-scroll.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
ScrollAdapter = (function () {
    function ScrollAdapter(scroll) {
        this.scroll = scroll;
        this.scrollingDown = false;
    }
    ScrollAdapter.prototype.onScroll = function () {
        var _this = this;
        return Object(__WEBPACK_IMPORTED_MODULE_0_rxjs__["fromEvent"])(this.scroll._scrollContent.nativeElement, 'scroll')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["map"])(function () { return _this.getScrollTop(); }), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["pairwise"])(), Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["tap"])(function (scrollTops) { return _this.scrollingDown = scrollTops[0] - scrollTops[1] < 0; }));
    };
    ScrollAdapter.prototype.getClientTop = function () {
        return 0;
    };
    ScrollAdapter.prototype.getScrollTop = function () {
        return this.scroll._scrollContent.nativeElement.scrollTop;
    };
    ScrollAdapter.prototype.appendFixedHeader = function (headerElement) {
        this.scroll._scrollContent.nativeElement.parentElement.appendChild(headerElement);
    };
    ScrollAdapter.prototype.isScrollingDown = function () {
        return this.scrollingDown;
    };
    return ScrollAdapter;
}());
/**
 * Adapter for ion-scroll.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */

//# sourceMappingURL=scroll-adapter.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickyListHeaderLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StickyListHeaderLayout1 = /** @class */ (function () {
    function StickyListHeaderLayout1() {
        this.slider = {};
    }
    StickyListHeaderLayout1.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    StickyListHeaderLayout1.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StickyListHeaderLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StickyListHeaderLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], StickyListHeaderLayout1.prototype, "content", void 0);
    StickyListHeaderLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'appearance-animation-layout-5',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/appearance-animation/layout-5/appearance-animation.html"*/'<!--Theme Appearance animation (Zoom In)-->\n<ion-content>\n    <h2 text-center text-wrap class="broadcomb" *ngIf="config.broadcomb">{{config.broadcomb.toUpperCase()}}</h2>\n    <h2 padding text-center class="aviso" *ngIf="!config.naoExibirMensagemListaVazia && (animateItems.length < 1 || data.length < 1)">Nenhum\n        registro encontrado.</h2>\n    <ion-grid no-padding *ngIf="data != null">\n        <ion-row *ngIf="config.exibirDatas && animateItems.length > 0">\n            <ion-col col-12>\n                <h3 item-data text-wrap text-center *ngIf="ultimoDownload != \'Nunca\'">Último download: {{ultimoDownload\n                    | date: \'dd/MM/yyyy HH:mm\'}}</h3>\n                <h3 item-data text-wrap text-center *ngIf="ultimoUpload != \'Nunca\'">Última publicação: {{ultimoUpload |\n                    date: \'dd/MM/yyyy HH:mm\'}}</h3>\n                <h3 item-data text-wrap text-center *ngIf="ultimoDownload == \'Nunca\'">Último download:\n                    {{ultimoDownload}}</h3>\n                <h3 item-data text-wrap text-center *ngIf="ultimoUpload == \'Nunca\'">Última publicação: {{ultimoUpload}}</h3>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="config.btnNovoLabel">\n            <button ion-button default-button block text-capitalize box-shadow margin-bottom class="button-novo"\n                (click)="onEvent(\'onAddClick\')">{{config.btnNovoLabel}}</button>\n        </ion-row>\n        <ion-grid [ngClass]="{\'filtros\': config.filtrarSituacao}">\n            <ion-list radio-group no-margin [(ngModel)]="situacao" name="situacao" id="situacao" (ngModelChange)="filtrarSituacao($event)">\n                <ion-row *ngIf="config.filtrarSituacao">\n                    <h3 item-data text-wrap text-center>Filtros:</h3>\n                </ion-row>\n                <ion-row *ngIf="config.filtrarSituacao">\n                    <ion-col col-6>\n                        <ion-item radio>\n                            <ion-label>Em aberto</ion-label>\n                            <ion-radio [value]="0" checked></ion-radio>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item radio>\n                            <ion-label>Finalizado</ion-label>\n                            <ion-radio [value]="1"></ion-radio>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col class="col-search" col-12 *ngIf="data.length > 0 || !animacaoAtiva" [ngClass]="{\'margin-top-10\': !config.exibirDatas}">\n                        <ion-searchbar [(ngModel)]="searchbarDefault" [placeholder]="\'Filtrar pela descrição\'"\n                            (ionInput)="filtrar($event.target.value)"></ion-searchbar>\n                    </ion-col>\n                </ion-row>\n            </ion-list>\n        </ion-grid>\n        <ion-grid style="padding-top: 0;">\n            <ion-row>\n                <ion-col col-12>\n                    <ion-list no-margin *ngIf="animacaoAtiva">\n                        <ion-item default-item no-lines [ngClass]="{\'novo-item\': verificaNovoItem(item) && !config.alteracoes, \'zoom-in\': true}"\n                            *ngFor="let item of animateItems; let i = index;" (click)="onEvent(\'onItemClick\', item, $event)">\n                            <ion-row class="espacamento">\n                                <ion-col col-10>\n                                    <h2 *ngIf="!config.concatena" item-title text-wrap>{{item.descricao}}</h2>\n                                    <h2 *ngIf="config.concatena" item-title text-wrap>{{item.codigo}} -\n                                        {{item.descricao}}</h2>\n                                    <h3 item-situacao text-wrap *ngIf="config.subTitulo">{{config.subTitulo}}:\n                                        {{config.alteracoes ? (item.data | date: \'dd/MM/yyyy hh:mm\') :\n                                        item.situacao }}</h3>\n                                </ion-col>\n                                <ion-col col-2 *ngIf="config.exclusaoPossivel" (click)="onEvent(\'onIconClick\', item, $event)">\n                                    <ion-icon icon-small name="{{config.icon}}" item-right style="font-size: 25px !important; margin: 0px"\n                                        [ngClass]="{\'color-black\': !item.delete , \'color-red\' : item.delete}"></ion-icon>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row class="espacamento" *ngIf="config.tipo">\n                                <ion-col col-12 class="tipo">\n                                    <h3 no-margin item-tipo text-wrap>{{item.tipo.length > 1 ?\n                                        item.tipo.toUpperCase() :\n                                        (item.tipo == \'C\' ? \'CONTROLADO\' : \'ESPECIALIZADO\') }}</h3>\n                                </ion-col>\n                            </ion-row>\n                        </ion-item>\n                    </ion-list>\n\n                    <ion-list no-margin *ngIf="!animacaoAtiva">\n                        <ion-item default-item no-lines [ngClass]="{\'novo-item\': verificaNovoItem(item) && !config.alteracoes}"\n                            *ngFor="let item of data; let i = index;" (click)="onEvent(\'onItemClick\', item, $event)">\n                            <ion-row class="espacamento">\n                                <ion-col col-10>\n                                    <h2 *ngIf="!config.concatena" item-title text-wrap>{{item.descricao}}</h2>\n                                    <h2 *ngIf="config.concatena" item-title text-wrap>{{item.codigo}} -\n                                        {{item.descricao}}</h2>\n                                    <h3 item-situacao text-wrap *ngIf="config.subTitulo">{{config.subTitulo}}:\n                                        {{config.alteracoes ? (item.data | date: \'dd/MM/yyyy hh:mm\') :\n                                        item.situacao}}</h3>\n                                </ion-col>\n                                <ion-col col-2 *ngIf="config.exclusaoPossivel">\n                                    <ion-icon icon-small name="{{config.icon}}" item-right (click)="onEvent(\'onIconClick\', item, $event)"\n                                        style="font-size: 25px !important; margin: 0px" [ngClass]="{\'color-black\': !item.delete , \'color-red\' : item.delete}"></ion-icon>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row class="espacamento" *ngIf="config.tipo">\n                                <ion-col col-12 class="tipo">\n                                    <h3 no-margin item-tipo text-wrap>{{item.tipo.length > 1 ?\n                                        item.tipo.toUpperCase() :\n                                        (item.tipo == \'C\' ? \'CONTROLADO\' : \'ESPECIALIZADO\') }}</h3>\n                                </ion-col>\n                            </ion-row>\n                        </ion-item>\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/appearance-animation/layout-5/appearance-animation.html"*/
=======
            selector: 'sticky-list-header-layout-1',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\sticky-list-header\layout-1\sticky-list-header.html"*/'<!-- Theme Sticky List Header - Basic -->\n\n<ion-content>\n\n  <div *ngIf="data != null">\n\n    <ion-list no-margin *ngFor="let item of data.items">\n\n      <!-- Header Top -->\n\n      <ion-item-divider text-capitalize no-margin no-lines header-title ion-affix [content]="content">{{item.groupName}}\n\n      </ion-item-divider>\n\n      <ion-item default-item *ngFor="let element of item.items" no-lines (click)="onEvent(\'onItemClick\', element.title, $event)">\n\n        <!-- Avatar -->\n\n        <ion-thumbnail item-start>\n\n          <img [src]="element.image" [alt]="element.title" />\n\n        </ion-thumbnail>\n\n        <!-- Title -->\n\n        <h2 item-title text-capitalize>{{element.title}}</h2>\n\n        <!-- Subtitle -->\n\n        <p item-subtitle>{{element.subtitle}}</p>\n\n        <!-- Badge -->\n\n        <ion-badge item-end box-shadow (click)="onEvent(\'onProceed\', element.price, $event)" badge-light>{{element.price}}</ion-badge>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\sticky-list-header\layout-1\sticky-list-header.html"*/
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
        }),
        __metadata("design:paramtypes", [])
    ], StickyListHeaderLayout1);
    return StickyListHeaderLayout1;
}());

<<<<<<< HEAD
//# sourceMappingURL=appearance-animation-layout-5.js.map

/***/ }),

/***/ 785:
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

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_message_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_loading_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_alteracao__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_uuid__ = __webpack_require__(778);
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
            selector: 'page-checklist',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/pages/checklist/checklist.html"*/'<ion-header>\n    <ion-navbar class="pad-nav-page-nt">\n        <ion-row>\n            <ion-col col-10 class="ptb-0">\n            </ion-col>\n            <ion-col col-2 class="ptb-0" (click)="voltarHome()">\n                <div buy>\n                    <ion-icon class="icon-menu home-icon" name="home"></ion-icon>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<appearance-animation-layout-5 class="margem-modal-ios" *ngIf="reload && false" has-header [data]="checklists" [events]="events"\n    [config]="config"></appearance-animation-layout-5>'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/pages/checklist/checklist.html"*/
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
=======
//# sourceMappingURL=sticky-list-header-layout-1.js.map
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51

/***/ })

});
//# sourceMappingURL=8.js.map