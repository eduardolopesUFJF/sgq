webpackJsonp([4],{

<<<<<<< HEAD
/***/ 775:
=======
/***/ 716:
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacaoPageModule", function() { return VerificacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verificacao__ = __webpack_require__(911);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyListHeaderLayout1Module", function() { return StickyListHeaderLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sticky_list_header_layout_1__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion_affix__ = __webpack_require__(786);
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



<<<<<<< HEAD
var VerificacaoPageModule = /** @class */ (function () {
    function VerificacaoPageModule() {
    }
    VerificacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verificacao__["a" /* VerificacaoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verificacao__["a" /* VerificacaoPage */])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], VerificacaoPageModule);
    return VerificacaoPageModule;
}());

//# sourceMappingURL=verificacao.module.js.map

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

/***/ 796:
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

/***/ 808:
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

/***/ 809:
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

/***/ 825:
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

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_servico__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_inspecao__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_alteracao__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_message_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_item_inspecao__ = __webpack_require__(825);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_item_checklist__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_storage_service_utils__ = __webpack_require__(156);
=======

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

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonAffix; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapters_adapter_factory__ = __webpack_require__(788);


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

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ion_affix_module__ = __webpack_require__(787);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ion_affix_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ion_affix__ = __webpack_require__(783);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonAffixModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ion_affix__ = __webpack_require__(783);


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

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = adapterFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_adapter__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scroll_adapter__ = __webpack_require__(790);



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

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(47);
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

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(47);
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

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickyListHeaderLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
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











var VerificacaoPage = /** @class */ (function () {
    function VerificacaoPage(navParams, storage, storageServiceUtils, actionSheetCtrl, modalCtrl, messageService, navCtrl) {
        this.navParams = navParams;
        this.storage = storage;
        this.storageServiceUtils = storageServiceUtils;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.messageService = messageService;
        this.navCtrl = navCtrl;
        this.servico = new __WEBPACK_IMPORTED_MODULE_2__models_servico__["a" /* Servico */]();
        this.itemChecklist = new __WEBPACK_IMPORTED_MODULE_9__models_item_checklist__["a" /* ItemChecklist */]();
        this.inspecoes = [];
        this.inspecoesBackup = [];
        this.itensBackup = [];
        this.inspecaoBackup = new __WEBPACK_IMPORTED_MODULE_3__models_inspecao__["a" /* Inspecao */]();
        this.servico = navParams.data.servico;
        this.inspecoes = this.ordenar(this.servico.inspecoesObra).slice();
        this.inspecoesBackup = this.servico.inspecoesObra.slice();
        this.obterItemChecklist();
        this.broadcomb = navParams.data.broadcomb + " >> " + this.servico.descricao;
    }
    VerificacaoPage.prototype.ordenar = function (inspecoes) {
        return inspecoes.sort(function (a, b) {
            if (a.dataInspecao > b.dataInspecao)
                return -1;
            else
                return 1;
        });
    };
    VerificacaoPage.prototype.atualizarStatus = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.servico.status == 0) {
                _this.servico.situacao = 'Em aberto';
                _this.criarAtualizacaoStatus();
            }
            else {
                if (_this.servico.inspecoesObra.some(function (x) { return x.status == 0; })) {
                    _this.servico.status = 0;
                    _this.messageService.exibirMensagem("Não foi possível finalizar o Serviço, existem inspeções em aberto.");
                }
                else {
                    _this.servico.situacao = 'Finalizado';
                    _this.criarAtualizacaoStatus();
                }
            }
        }, 100);
    };
    VerificacaoPage.prototype.criarAtualizacaoStatus = function () {
        var _this = this;
        this.storage.ready().then(function () {
            var atualizacoesArray = [];
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                var alteracao = new __WEBPACK_IMPORTED_MODULE_5__models_alteracao__["a" /* Alteracao */]({ id: __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__["UUID"].UUID(), idServico: _this.servico.id, idGuidServico: _this.servico.idGuidServico, idArea: _this.servico.idArea, idGuidArea: _this.servico.idAreaGuid, tipo: "Update", entidade: "Servico", valor: JSON.stringify(_this.servico), data: new Date(), descricao: (_this.servico.status == 0 ? "Reabertura" : "Finalização") + " do serviço '" + _this.servico.descricao + "' em '" + _this.broadcomb.toUpperCase() + "'.", obraId: _this.servico.idObra });
                if (atualizacoes) {
                    atualizacoesArray = atualizacoes;
                    atualizacoesArray.push(alteracao);
                }
                else {
                    atualizacoesArray.push(alteracao);
                }
                _this.storage.set('atualizacoes', atualizacoesArray);
                _this.atualizarObra(_this.servico);
            });
        });
    };
    VerificacaoPage.prototype.atualizarObra = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var obras;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageServiceUtils.montarObra()];
                    case 1:
                        obras = _a.sent();
                        obras.find(function (x) { return x.id == _this.servico.idObra; }).areas.find(function (x) { return _this.servico.idAreaGuid ? (x.idGuid == _this.servico.idAreaGuid) : (x.id == _this.servico.idArea); }).servicos.find(function (x) { return item.idGuidServico ? (x.idGuidServico == item.idGuidServico) : (x.id == item.id); }).status = item.status;
                        this.storageServiceUtils.armazenarObraNoStorage(obras);
                        return [2 /*return*/];
                }
            });
        });
    };
    VerificacaoPage.prototype.obterItemChecklist = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('itensChecklist').then(function (itens) {
                _this.itemChecklist = itens.find(function (x) { return x.id == _this.servico.idChecklist; });
                if (!_this.itemChecklist) {
                    _this.itemChecklist = itens.find(function (x) { return x.idGuid == _this.servico.idChecklistGuid; });
                }
            });
        });
    };
    VerificacaoPage.prototype.novaInspecao = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ManterVerificacaoPage", { inspecao: new __WEBPACK_IMPORTED_MODULE_3__models_inspecao__["a" /* Inspecao */](), itemChecklist: this.itemChecklist });
        modal.present();
        modal.onWillDismiss(function (inspecao) {
            if (inspecao) {
                inspecao.idGuidInspecao = __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__["UUID"].UUID();
                inspecao.idGuidServico = _this.servico.idGuidServico;
                inspecao.idServico = _this.servico.id;
                _this.itemChecklist.itensChecklistServico.forEach(function (item) {
                    var novoItem = new __WEBPACK_IMPORTED_MODULE_8__models_item_inspecao__["a" /* ItemInspecao */]();
                    novoItem.dataHoraInclusao = new Date();
                    novoItem.descricao = item.descricao;
                    novoItem.idGuidInspecao = inspecao.idGuidInspecao;
                    novoItem.ordem = item.ordem.toString();
                    novoItem.idGuidItemServico = item.idGuid;
                    novoItem.idItemServico = item.id;
                    inspecao.inspecaoObraItens.push(novoItem);
                });
                _this.inspecoes.unshift(inspecao);
                _this.inspecoesBackup.unshift(inspecao);
                _this.criarInspecao(inspecao);
            }
        });
    };
    VerificacaoPage.prototype.abrirItensInspecao = function (inspecao) {
        var _this = this;
        var modal = this.modalCtrl.create("RealizarVerificacaoPage", { inspecao: inspecao, descServico: this.broadcomb, servico: this.servico });
        this.itensBackup = [];
        this.statusBackup = inspecao.status;
        this.idFuncionarioAprovadoBackup = inspecao.idFuncionarioAprovado;
        this.idFuncionarioInspecionadoBackup = inspecao.idFuncionarioInspecionado;
        inspecao.inspecaoObraItens.forEach(function (element) {
            _this.itensBackup.push(new __WEBPACK_IMPORTED_MODULE_8__models_item_inspecao__["a" /* ItemInspecao */](element));
        });
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data.concluido) {
                data.inspecao.qtdA = data.inspecao.inspecaoObraItens.filter(function (x) { return x.inspecao1 == 'A'; }).length;
                data.inspecao.qtdNA = data.inspecao.inspecaoObraItens.filter(function (x) { return x.inspecao1 == 'N'; }).length;
                data.inspecao.qtdR = data.inspecao.inspecaoObraItens.filter(function (x) { return x.inspecao1 == 'R'; }).length;
                data.inspecao.qtdX = data.inspecao.inspecaoObraItens.filter(function (x) { return x.inspecao1 == 'X'; }).length;
                data.inspecao.qtdRA = data.inspecao.inspecaoObraItens.filter(function (x) { return x.inspecao2 == 'A'; }).length;
                var index = _this.inspecoesBackup.findIndex(function (x) { return data.inspecao.id != 0 ? (x.id == data.inspecao.id) : (x.idGuidInspecao == data.inspecao.idGuidInspecao); });
                _this.inspecoesBackup[index] = data.inspecao;
                _this.inspecoes = _this.inspecoesBackup.slice();
                _this.editarInspecao(data.inspecao, "Realização da verificação");
            }
            else {
                data.inspecao.inspecaoObraItens = _this.itensBackup.slice();
                data.inspecao.status = _this.statusBackup;
                data.inspecao.idFuncionarioAprovado = _this.idFuncionarioAprovadoBackup;
                data.inspecao.idFuncionarioInspecionado = _this.idFuncionarioInspecionadoBackup;
                var index = _this.inspecoesBackup.findIndex(function (x) { return data.inspecao.id != 0 ? (x.id == data.inspecao.id) : (x.idGuidInspecao == data.inspecao.idGuidInspecao); });
                _this.inspecoesBackup[index] = data.inspecao;
                _this.inspecoes = _this.inspecoesBackup.slice();
            }
        });
    };
    VerificacaoPage.prototype.editar = function (inspecao) {
        var _this = this;
        var modal = this.modalCtrl.create("ManterVerificacaoPage", { inspecao: inspecao, itemChecklist: this.itemChecklist });
        this.inspecaoBackup = new __WEBPACK_IMPORTED_MODULE_3__models_inspecao__["a" /* Inspecao */](inspecao);
        modal.present();
        modal.onWillDismiss(function (inspecao) {
            if (inspecao) {
                var index = _this.inspecoesBackup.findIndex(function (x) { return inspecao.id != 0 ? (x.id == inspecao.id) : (x.idGuidInspecao == inspecao.idGuidInspecao); });
                _this.inspecoesBackup[index] = inspecao;
                _this.inspecoes = _this.inspecoesBackup.slice();
                _this.editarInspecao(inspecao, "Edição da verificação");
            }
            else {
                var inspecaoArray = _this.inspecoes.find(function (x) { return x.idGuidInspecao ? (x.idGuidInspecao == _this.inspecaoBackup.idGuidInspecao) : (x.id == _this.inspecaoBackup.id); });
                inspecaoArray.dataInspecao = _this.inspecaoBackup.dataInspecao;
                inspecaoArray.dataEncerramento = _this.inspecaoBackup.dataEncerramento;
                inspecaoArray.campo1 = _this.inspecaoBackup.campo1;
                inspecaoArray.campo2 = _this.inspecaoBackup.campo2;
                inspecaoArray.campo3 = _this.inspecaoBackup.campo3;
                inspecaoArray.campo4 = _this.inspecaoBackup.campo4;
            }
        });
    };
    VerificacaoPage.prototype.editarInspecao = function (inspecao, acao) {
        var _this = this;
        this.storage.ready().then(function () {
            var atualizacoesArray = [];
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                var alteracao = new __WEBPACK_IMPORTED_MODULE_5__models_alteracao__["a" /* Alteracao */]({ id: __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__["UUID"].UUID(), idInspecao: inspecao.id, idGuidInspecao: inspecao.idGuidInspecao, idArea: _this.servico.idArea, idGuidArea: _this.servico.idAreaGuid, idServico: _this.servico.id, idGuidServico: _this.servico.idGuidServico, tipo: "Update", entidade: "Inspecao", valor: JSON.stringify(inspecao), data: new Date(), descricao: acao + " '" + inspecao.campo1 + "' no serviço '" + _this.servico.descricao + "'.", obraId: _this.servico.idObra });
                if (atualizacoes) {
                    atualizacoesArray = atualizacoes;
                    atualizacoesArray.push(alteracao);
                }
                else {
                    atualizacoesArray.push(alteracao);
                }
                _this.storage.set('atualizacoes', atualizacoesArray);
                _this.atualizarObraEdicao(inspecao);
            });
        });
    };
    VerificacaoPage.prototype.criarInspecao = function (inspecao) {
        var _this = this;
        this.storage.ready().then(function () {
            var atualizacoesArray = [];
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                var alteracao = new __WEBPACK_IMPORTED_MODULE_5__models_alteracao__["a" /* Alteracao */]({ id: __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__["UUID"].UUID(), idInspecao: inspecao.id, idGuidInspecao: inspecao.idGuidInspecao, idArea: _this.servico.idArea, idGuidArea: _this.servico.idAreaGuid, idServico: _this.servico.id, idGuidServico: _this.servico.idGuidServico, tipo: "Insert", entidade: "Inspecao", valor: JSON.stringify(inspecao), data: new Date(), descricao: "Criação da verificação '" + inspecao.campo1 + "' no serviço '" + _this.servico.descricao + "'.", obraId: _this.servico.idObra });
                if (atualizacoes) {
                    atualizacoesArray = atualizacoes;
                    atualizacoesArray.push(alteracao);
                }
                else {
                    atualizacoesArray.push(alteracao);
                }
                _this.storage.set('atualizacoes', atualizacoesArray);
                _this.atualizarObraCriacao(inspecao);
            });
        });
    };
    VerificacaoPage.prototype.filtrar = function (valor) {
        if (valor.length == 0) {
            this.inspecoes = this.inspecoesBackup.slice();
        }
        else {
            this.inspecoes = this.inspecoesBackup.filter(function (item) {
                return item.campo1.toLowerCase().indexOf(valor.toLowerCase()) > -1;
            });
        }
    };
    VerificacaoPage.prototype.confirmarExclusao = function (item) {
        var _this = this;
        var mensagem;
        if (!item.delete) {
            mensagem = "Deseja realmente excluir a verificação '" + item.campo1 + "'?";
        }
        else {
            mensagem = "Deseja realmente reativar a verificação '" + item.campo1 + "'?";
        }
        this.messageService.exibirMensagemConfirmacao(mensagem, function () { _this.alterarSituacaoVerificacao(item); });
    };
    VerificacaoPage.prototype.alterarSituacaoVerificacao = function (item) {
        var _this = this;
        this.storage.ready().then(function () {
            var atualizacoesArray = [];
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                item.delete = !item.delete;
                var alteracao = new __WEBPACK_IMPORTED_MODULE_5__models_alteracao__["a" /* Alteracao */]({ id: __WEBPACK_IMPORTED_MODULE_6_angular2_uuid__["UUID"].UUID(), idInspecao: item.id, idGuidInspecao: item.idGuidInspecao, idArea: _this.servico.idArea, idGuidArea: _this.servico.idAreaGuid, idServico: _this.servico.id, idGuidServico: _this.servico.idGuidServico, tipo: "Update", entidade: "Inspecao", valor: JSON.stringify(item), data: new Date(), descricao: (item.delete ? "Inativação" : "Ativação") + " da verificação '" + item.campo1 + "' no serviço '" + _this.servico.descricao + "'.", obraId: _this.servico.idObra });
                if (atualizacoes) {
                    atualizacoesArray = atualizacoes;
                    atualizacoesArray.push(alteracao);
                }
                else {
                    atualizacoesArray.push(alteracao);
                }
                _this.storage.set('atualizacoes', atualizacoesArray);
                _this.atualizarObraSituacao(item);
            });
        });
    };
    VerificacaoPage.prototype.atualizarObraSituacao = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var obras;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageServiceUtils.montarObra()];
                    case 1:
                        obras = _a.sent();
                        obras.find(function (x) { return x.id == _this.servico.idObra; }).areas.find(function (x) { return _this.servico.idAreaGuid ? (x.idGuid == _this.servico.idAreaGuid) : (x.id == _this.servico.idArea); }).servicos.find(function (x) { return _this.servico.idGuidServico ? (x.idGuidServico == _this.servico.idGuidServico) : (x.id == _this.servico.id); }).inspecoesObra.find(function (x) { return item.idGuidInspecao ? (x.idGuidInspecao == item.idGuidInspecao) : (x.id == item.id); }).delete = item.delete;
                        this.storageServiceUtils.armazenarObraNoStorage(obras);
                        return [2 /*return*/];
                }
            });
        });
    };
    VerificacaoPage.prototype.atualizarObraEdicao = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var obras, inspecao;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageServiceUtils.montarObra()];
                    case 1:
                        obras = _a.sent();
                        inspecao = obras.find(function (x) { return x.id == _this.servico.idObra; }).areas.find(function (x) { return _this.servico.idAreaGuid ? (x.idGuid == _this.servico.idAreaGuid) : (x.id == _this.servico.idArea); }).servicos.find(function (x) { return _this.servico.idGuidServico ? (x.idGuidServico == _this.servico.idGuidServico) : (x.id == _this.servico.id); }).inspecoesObra.find(function (x) { return item.idGuidInspecao ? (x.idGuidInspecao == item.idGuidInspecao) : (x.id == item.id); });
                        inspecao.campo1 = item.campo1;
                        inspecao.campo2 = item.campo2;
                        inspecao.campo3 = item.campo3;
                        inspecao.campo4 = item.campo4;
                        inspecao.dataInspecao = item.dataInspecao;
                        inspecao.dataEncerramento = item.dataEncerramento;
                        inspecao.idFuncionarioAprovado = item.idFuncionarioAprovado;
                        inspecao.idFuncionarioInspecionado = item.idFuncionarioInspecionado;
                        inspecao.status = item.status;
                        inspecao.situacao = item.situacao;
                        inspecao.inspecaoObraItens = item.inspecaoObraItens;
                        this.storageServiceUtils.armazenarObraNoStorage(obras);
                        return [2 /*return*/];
                }
            });
        });
    };
    VerificacaoPage.prototype.atualizarObraCriacao = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var obras;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageServiceUtils.montarObra()];
                    case 1:
                        obras = _a.sent();
                        obras.find(function (x) { return x.id == _this.servico.idObra; }).areas.find(function (x) { return _this.servico.idAreaGuid ? (x.idGuid == _this.servico.idAreaGuid) : (x.id == _this.servico.idArea); }).servicos.find(function (x) { return _this.servico.idGuidServico ? (x.idGuidServico == _this.servico.idGuidServico) : (x.id == _this.servico.id); }).inspecoesObra.unshift(item);
                        this.storageServiceUtils.armazenarObraNoStorage(obras);
                        return [2 /*return*/];
                }
            });
        });
    };
    VerificacaoPage.prototype.exibirOpcoes = function (inspecao) {
        if (inspecao.status == 0) {
            this.exibirTodasOpcoes(inspecao);
        }
        else {
            this.exibirOpcoesRestritas(inspecao);
        }
    };
    VerificacaoPage.prototype.exibirTodasOpcoes = function (inspecao) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            "buttons": [
                {
                    "text": "Realizar inspeção",
                    handler: function () {
                        _this.abrirItensInspecao(inspecao);
                    }
                },
                {
                    "text": "Editar",
                    handler: function () {
                        _this.editar(inspecao);
                    }
                },
                {
                    "text": !inspecao.delete ? "Excluir" : "Reativar",
                    handler: function () {
                        _this.confirmarExclusao(inspecao);
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
    VerificacaoPage.prototype.exibirOpcoesRestritas = function (inspecao) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            "buttons": [
                {
                    "text": "Realizar inspeção",
                    handler: function () {
                        _this.abrirItensInspecao(inspecao);
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
    VerificacaoPage.prototype.voltarHome = function () {
        this.navCtrl.setRoot("HomePage");
    };
    VerificacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-verificacao',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\verificacao\verificacao.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-row>\n\n            <ion-col col-1>\n\n                <button ion-button menuToggle>\n\n                    <ion-icon class="icon-menu" name="menu"></ion-icon>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col col-8 m-auto>\n\n                <div buy no-padding>\n\n                    <ion-title>\n\n                        Localização do Serviço\n\n                    </ion-title>\n\n                </div>\n\n            </ion-col>\n\n            <ion-col col-2 m-auto>\n\n                <div buy (click)="voltarHome()">\n\n                    <ion-icon class="icon-menu home-icon" name="home"></ion-icon>\n\n                </div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <h2 text-center text-wrap class="broadcomb">{{broadcomb.toUpperCase()}}</h2>\n\n    <h2 padding text-center class="aviso" *ngIf="inspecoes.length < 1">Nenhum registro encontrado.</h2>\n\n    <ion-grid no-padding>\n\n        <ion-row *ngIf="servico.status == 0">\n\n            <button ion-button default-button block text-capitalize box-shadow margin-bottom class="button-novo"\n\n                (click)="novaInspecao()">Nova inspeção</button>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col class="col-search" col-12 *ngIf="inspecoesBackup.length > 0">\n\n                <ion-searchbar [placeholder]="\'Filtrar pelo local\'" (ionInput)="filtrar($event.target.value)"></ion-searchbar>\n\n            </ion-col>\n\n            <ion-col col-12>\n\n                <ion-list radio-group no-margin [(ngModel)]="servico.status" name="status" (ngModelChange)="atualizarStatus()">\n\n                    <ion-grid>\n\n                        <ion-row>\n\n                            <ion-col col-6>\n\n                                <ion-item radio>\n\n                                    <ion-label text-center>Em aberto</ion-label>\n\n                                    <ion-radio [value]="0"></ion-radio>\n\n                                </ion-item>\n\n                            </ion-col>\n\n                            <ion-col col-6>\n\n                                <ion-item radio>\n\n                                    <ion-label text-center>Finalizado</ion-label>\n\n                                    <ion-radio [value]="1"></ion-radio>\n\n                                </ion-item>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-grid>\n\n                </ion-list>\n\n            </ion-col>\n\n            <ion-col col-12>\n\n                <ion-list no-margin>\n\n                    <ion-item default-item no-lines [ngClass]="{\'novo-item\': !item.id, \'item-removido\': item.delete}"\n\n                        *ngFor="let item of inspecoes; let i = index;">\n\n                        <ion-row class="espacamento">\n\n                            <ion-col col-10 (click)="abrirItensInspecao(item)">\n\n                                <h2 item-title text-wrap *ngIf="itemChecklist.campo1">{{itemChecklist.campo1}}:\n\n                                    {{item.campo1}}</h2>\n\n                                <h2 item-title text-wrap *ngIf="itemChecklist.campo2">{{itemChecklist.campo2}}:\n\n                                    {{item.campo2}}</h2>\n\n                                <h2 item-title text-wrap *ngIf="itemChecklist.campo3">{{itemChecklist.campo3}}:\n\n                                    {{item.campo3}}</h2>\n\n                                <h2 item-title text-wrap *ngIf="itemChecklist.campo4">{{itemChecklist.campo4}}:\n\n                                    {{item.campo4}}</h2>\n\n                                <h3 item-situacao text-wrap>Situação: {{item.situacao}}</h3>\n\n                                <h3 item-situacao text-wrap>Abertura: {{item.dataInspecao ? (item.dataInspecao | date:\n\n                                    \'dd/MM/yyyy\') : \'Não informada\'}}</h3>\n\n                                <h3 item-situacao text-wrap>Encerramento: {{item.dataEncerramento ?\n\n                                    (item.dataEncerramento | date: \'dd/MM/yyyy\') : \'Não informada\'}}</h3>\n\n                            </ion-col>\n\n                            <ion-col col-2>\n\n                                <ion-icon name="more" icon-small item-right style="font-size: 32px !important; margin: 0px"\n\n                                    (click)="exibirOpcoes(item)"></ion-icon>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                        <ion-row class="espacamento" style="padding: 0 0 10px 0 !important;">\n\n                            <ion-col col-1></ion-col>\n\n                            <ion-col col-2 style="background-color: blue;">\n\n                                <h2 item-title text-wrap no-margin text-center>NA</h2>\n\n                                <h3 item-situacao text-wrap no-margin text-center>{{item.qtdNA}}</h3>\n\n                            </ion-col>\n\n                            <ion-col col-2 style="background-color: darkgreen;">\n\n                                <h2 item-title text-wrap no-margin text-center>A</h2>\n\n                                <h3 item-situacao text-wrap no-margin text-center>{{item.qtdA}}</h3>\n\n                            </ion-col>\n\n                            <ion-col col-2 style="background-color: yellow;">\n\n                                <h2 text-wrap negrito no-margin text-center>R</h2>\n\n                                <h3 text-wrap negrito no-margin text-center>{{item.qtdR}}</h3>\n\n                            </ion-col>\n\n                            <ion-col col-2 style="background-color: red;">\n\n                                <h2 item-title text-wrap no-margin text-center>X</h2>\n\n                                <h3 item-situacao text-wrap no-margin text-center>{{item.qtdX}}</h3>\n\n                            </ion-col>\n\n                            <ion-col col-2 style="background-color: orange;">\n\n                                <h2 item-title text-wrap no-margin text-center>RA</h2>\n\n                                <h3 item-situacao text-wrap no-margin text-center>{{item.qtdRA}}</h3>\n\n                            </ion-col>\n\n                            <ion-col col-1></ion-col>\n\n                        </ion-row>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\verificacao\verificacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_10__utils_storage_service_utils__["a" /* StorageServiceUtils */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__utils_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]])
    ], VerificacaoPage);
    return VerificacaoPage;
}());

//# sourceMappingURL=verificacao.js.map
=======


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
            selector: 'sticky-list-header-layout-1',template:/*ion-inline-start:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/list-view/sticky-list-header/layout-1/sticky-list-header.html"*/'<!-- Theme Sticky List Header - Basic -->\n<ion-content>\n  <div *ngIf="data != null">\n    <ion-list no-margin *ngFor="let item of data.items">\n      <!-- Header Top -->\n      <ion-item-divider text-capitalize no-margin no-lines header-title ion-affix [content]="content">{{item.groupName}}\n      </ion-item-divider>\n      <ion-item default-item *ngFor="let element of item.items" no-lines (click)="onEvent(\'onItemClick\', element.title, $event)">\n        <!-- Avatar -->\n        <ion-thumbnail item-start>\n          <img [src]="element.image" [alt]="element.title" />\n        </ion-thumbnail>\n        <!-- Title -->\n        <h2 item-title text-capitalize>{{element.title}}</h2>\n        <!-- Subtitle -->\n        <p item-subtitle>{{element.subtitle}}</p>\n        <!-- Badge -->\n        <ion-badge item-end box-shadow (click)="onEvent(\'onProceed\', element.price, $event)" badge-light>{{element.price}}</ion-badge>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/list-view/sticky-list-header/layout-1/sticky-list-header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StickyListHeaderLayout1);
    return StickyListHeaderLayout1;
}());

//# sourceMappingURL=sticky-list-header-layout-1.js.map
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99

/***/ })

});
//# sourceMappingURL=4.js.map