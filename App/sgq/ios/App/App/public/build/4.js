webpackJsonp([4],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyListHeaderLayout2Module", function() { return StickyListHeaderLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sticky_list_header_layout_2__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ion_affix__ = __webpack_require__(787);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StickyListHeaderLayout2Module = /** @class */ (function () {
    function StickyListHeaderLayout2Module() {
    }
    StickyListHeaderLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sticky_list_header_layout_2__["a" /* StickyListHeaderLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sticky_list_header_layout_2__["a" /* StickyListHeaderLayout2 */]),
                __WEBPACK_IMPORTED_MODULE_3_ion_affix__["a" /* IonAffixModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sticky_list_header_layout_2__["a" /* StickyListHeaderLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], StickyListHeaderLayout2Module);
    return StickyListHeaderLayout2Module;
}());

//# sourceMappingURL=sticky-list-header-layout-2.module.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonAffix; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adapters_adapter_factory__ = __webpack_require__(789);


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

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ion_affix_module__ = __webpack_require__(788);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ion_affix_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ion_affix__ = __webpack_require__(786);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonAffixModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_ion_affix__ = __webpack_require__(786);


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

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = adapterFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_adapter__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scroll_adapter__ = __webpack_require__(791);



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

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(44);
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

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollAdapter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(44);
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

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickyListHeaderLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StickyListHeaderLayout2 = /** @class */ (function () {
    function StickyListHeaderLayout2() {
        this.slider = {};
    }
    StickyListHeaderLayout2.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    StickyListHeaderLayout2.prototype.onEvent = function (event, item, e) {
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
    ], StickyListHeaderLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StickyListHeaderLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], StickyListHeaderLayout2.prototype, "content", void 0);
    StickyListHeaderLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sticky-list-header-layout-2',template:/*ion-inline-start:"/Users/user227439/Desktop/sgq/App/sgq/src/core/list-view/sticky-list-header/layout-2/sticky-list-header.html"*/'<!-- Theme Sticky List Header - Product -->\n<ion-content no-padding>\n  <div *ngIf="data != null">\n    <ion-list *ngFor="let item of data.items">\n      <!--Text Header Top-->\n      <ion-list-header no-lines header-title text-capitalize ion-affix [content]="content">\n        {{item.groupName}}\n      </ion-list-header>\n      <ion-card *ngFor="let element of item.items">\n        <h2 card-title item-start text-wrap>{{element.title}}</h2>\n        <!--Big Card -->\n        <div images-gallery>\n          <div big-image>\n            <img [src]="element.image1" [alt]="element.title" />\n          </div>\n          <!--Gallery Card -->\n          <div list-images (click)="onEvent(\'onItemClick\', element.title, $event)">\n            <div images background-size [ngStyle]="{\'background-image\': \'url(\' + element.image2 + \')\'}" [title]="element.title"></div>\n            <div images background-size [ngStyle]="{\'background-image\': \'url(\' + element.image3 + \')\'}" [title]="element.title"></div>\n            <div images background-size [ngStyle]="{\'background-image\': \'url(\' + element.image4 + \')\'}" [title]="element.title"></div>\n          </div>\n        </div>\n\n        <!-- Card Content -->\n        <ion-card-content>\n          <ion-item no-padding no-lines transparent>\n            <span padding-left span-large>{{element.price}}</span>\n            <span new-category no-padding transparent text-uppercase text-wrap>{{element.subtitle}}</span>\n            <div margin-right button-block item-content>\n              <button box-shadow full ion-button default-button (click)="onEvent(\'onBuy\', \'Buy\', $event)">{{element.buy}}</button>\n            </div>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/user227439/Desktop/sgq/App/sgq/src/core/list-view/sticky-list-header/layout-2/sticky-list-header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StickyListHeaderLayout2);
    return StickyListHeaderLayout2;
}());

//# sourceMappingURL=sticky-list-header-layout-2.js.map

/***/ })

});
//# sourceMappingURL=4.js.map