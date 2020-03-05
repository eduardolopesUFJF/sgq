webpackJsonp([22],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxLayout2Module", function() { return ParallaxLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parallax_layout_2__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elastic_header_elastic_header_module__ = __webpack_require__(782);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ParallaxLayout2Module = /** @class */ (function () {
    function ParallaxLayout2Module() {
    }
    ParallaxLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__parallax_layout_2__["a" /* ParallaxLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__parallax_layout_2__["a" /* ParallaxLayout2 */]),
                __WEBPACK_IMPORTED_MODULE_3__elastic_header_elastic_header_module__["a" /* ElasticHeaderModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__parallax_layout_2__["a" /* ParallaxLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ParallaxLayout2Module);
    return ParallaxLayout2Module;
}());

//# sourceMappingURL=parallax-layout-2.module.js.map

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxLayout2; });
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


var ParallaxLayout2 = /** @class */ (function () {
    function ParallaxLayout2() {
        this.headerImage = "";
    }
    ParallaxLayout2.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ParallaxLayout2.prototype.ngOnChanges = function (changes) {
        if (changes.data && changes.data.currentValue) {
            this.headerImage = changes.data.currentValue.headerImage;
        }
        this.subscribeToIonScroll();
    };
    ParallaxLayout2.prototype.ngAfterViewInit = function () {
        this.subscribeToIonScroll();
    };
    ParallaxLayout2.prototype.ngAfterViewChecked = function () {
        this.subscribeToIonScroll();
    };
    ParallaxLayout2.prototype.isClassActive = function () {
        return this.active;
    };
    ParallaxLayout2.prototype.subscribeToIonScroll = function () {
        var _this = this;
        if (this.content != null && this.content.ionScroll != null) {
            this.content.ionScroll.subscribe(function (d) {
                if (d.scrollTop < 240) {
                    _this.active = false;
                    return;
                }
                _this.active = true;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParallaxLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParallaxLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ParallaxLayout2.prototype, "content", void 0);
    ParallaxLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'parallax-layout-2',template:/*ion-inline-start:"/Users/user916661/Desktop/sgq/App/sgq/src/core/parallax/layout-2/parallax.html"*/'<!--- Theme Parallax - Profile -->\n<ion-header header-ios>\n  <ion-navbar transparent [ngClass]="{\'active\':isClassActive()}">\n    <button ion-button menuToggle>\n            <ion-icon [name]="menu"></ion-icon>\n        </button>\n    <ion-title *ngIf="data != null">{{data.headerTitle}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<!-- Content -->\n<ion-content elastic-header>\n  <div padding background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + headerImage + \')\'}">\n    <!--- Info Block -->\n    <ion-item info-block transparent no-lines text-center>\n      <!-- Avatar -->\n      <ion-thumbnail *ngIf="data != null">\n        <img [src]="data.avatar" />\n      </ion-thumbnail>\n      <!-- Parallx Title -->\n      <h2 parallax-title no-margin *ngIf="data != null">{{data.title}}</h2>\n      <!-- Parallx Subtitle -->\n      <h3 parallax-subtitle *ngIf="data != null">{{data.subtitle}}</h3>\n    </ion-item>\n  </div>\n  <ion-list *ngIf="data != null">\n    <ion-item default-item no-lines *ngFor="let item of data.items;let i = index" (click)="onEvent(\'onItemClick\', item)">\n      <ion-thumbnail item-start>\n        <img [src]="item.avatar" />\n      </ion-thumbnail>\n      <h2 item-title>{{item.title}}</h2>\n      <h3 item-subtitle text-wrap>{{item.subtitle}}</h3>\n      <button box-shadow text-capitalize button-follow ion-button item-end>{{item.button}}</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/user916661/Desktop/sgq/App/sgq/src/core/parallax/layout-2/parallax.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ParallaxLayout2);
    return ParallaxLayout2;
}());

//# sourceMappingURL=parallax-layout-2.js.map

/***/ })

});
//# sourceMappingURL=22.js.map