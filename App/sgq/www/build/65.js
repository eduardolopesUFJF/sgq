webpackJsonp([65],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleCardLayout3Module", function() { return GoogleCardLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_card_layout_3__ = __webpack_require__(848);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GoogleCardLayout3Module = /** @class */ (function () {
    function GoogleCardLayout3Module() {
    }
    GoogleCardLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__google_card_layout_3__["a" /* GoogleCardLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__google_card_layout_3__["a" /* GoogleCardLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__google_card_layout_3__["a" /* GoogleCardLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], GoogleCardLayout3Module);
    return GoogleCardLayout3Module;
}());

//# sourceMappingURL=google-card-layout-3.module.js.map

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCardLayout3; });
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


var GoogleCardLayout3 = /** @class */ (function () {
    function GoogleCardLayout3() {
        this.slider = {};
    }
    GoogleCardLayout3.prototype.slideHasChanged = function (slider, index) {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            }
            else {
                this.data.splice(index, 1);
            }
        }
    };
    GoogleCardLayout3.prototype.onStarClass = function (items, index, e) {
        if (e) {
            e.stopPropagation();
        }
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates", index, e);
    };
    ;
    GoogleCardLayout3.prototype.onClickEvent = function (index) {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    };
    GoogleCardLayout3.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GoogleCardLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GoogleCardLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], GoogleCardLayout3.prototype, "content", void 0);
    GoogleCardLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'google-card-layout-3',template:/*ion-inline-start:"/Users/user916661/Desktop/sgq/App/sgq/src/core/list-view/google-card/layout-3/google-card.html"*/'<!--Theme Google Card - Styled cards-->\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row *ngIf="data != null">\n      <ion-col col-12 col-md-6 col-lg-6 col-xl-4 *ngFor="let item of data.items;let i = index">\n        <!--Header Styled cards-->\n        <ion-item padding-top no-lines transparent>\n          <!-- Card Title -->\n          <h2 card-title>{{item.title}}</h2>\n          <!-- Card Subtitle -->\n          <h3 card-subtitle>{{item.subtitle}}</h3>\n          <!-- Card Badge -->\n          <ion-badge box-shadow item-end badge-light>{{item.button}}</ion-badge>\n        </ion-item>\n        <!-- End Header Styled Cards-->\n        <!-- Card Background -->\n        <ion-card box-shadow (click)="onEvent(\'onItemClick\', item.subtitle, $event)">\n          <img [src]="item.image" />\n          <span new-category transparent no-padding text-uppercase>{{item.category}}</span>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/user916661/Desktop/sgq/App/sgq/src/core/list-view/google-card/layout-3/google-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GoogleCardLayout3);
    return GoogleCardLayout3;
}());

//# sourceMappingURL=google-card-layout-3.js.map

/***/ })

});
//# sourceMappingURL=65.js.map