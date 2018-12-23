webpackJsonp([61],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleCardLayout2Module", function() { return GoogleCardLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_card_layout_2__ = __webpack_require__(864);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GoogleCardLayout2Module = /** @class */ (function () {
    function GoogleCardLayout2Module() {
    }
    GoogleCardLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__google_card_layout_2__["a" /* GoogleCardLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__google_card_layout_2__["a" /* GoogleCardLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__google_card_layout_2__["a" /* GoogleCardLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], GoogleCardLayout2Module);
    return GoogleCardLayout2Module;
}());

//# sourceMappingURL=google-card-layout-2.module.js.map

/***/ }),

/***/ 864:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCardLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleCardLayout2 = /** @class */ (function () {
    function GoogleCardLayout2() {
        this.slider = {};
    }
    GoogleCardLayout2.prototype.slideHasChanged = function (slider, index) {
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
    GoogleCardLayout2.prototype.onStarClass = function (items, index, e) {
        if (e) {
            e.stopPropagation();
        }
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates", index, e);
    };
    GoogleCardLayout2.prototype.onClickEvent = function (index) {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    };
    GoogleCardLayout2.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], GoogleCardLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], GoogleCardLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], GoogleCardLayout2.prototype, "content", void 0);
    GoogleCardLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'google-card-layout-2',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\google-card\layout-2\google-card.html"*/'<!--Theme Google Card - Styled cards 2-->\n\n<ion-content padding-top>\n\n  <ion-grid no-padding>\n\n    <ion-row *ngIf="data != null">\n\n      <ion-col col-12 col-md-6 col-lg-4 *ngFor="let item of data.items;let i = index">\n\n        <ion-card box-shadow text-left box-shadow margin-bottom>\n\n          <!--Card Image-->\n\n          <div card-image>\n\n            <img [src]="item.image" />\n\n            <div title-block>\n\n              <!--Card Title-->\n\n              <h2 card-title text-capitalize>{{item.title}}</h2>\n\n            </div>\n\n          </div>\n\n          <!--Card descriptiom-->\n\n          <ion-card-content (click)="onEvent(\'onItemClick\', item, $event)">\n\n            <ion-card-title margin-bottom no-padding>\n\n              <ion-item transparent no-padding>\n\n                <h1 card-subtitle item-start>{{item.subtitle}}</h1>\n\n                <button no-margin item-end ion-button button-action-shit (click)="onEvent(\'onShare\', item, $event)">\n\n                  <ion-icon [name]="item.shareIcon"></ion-icon>\n\n                </button>\n\n              </ion-item>\n\n              <!--Card Body Text-->\n\n              <p card-body-text>{{item.description}}</p>\n\n              <span span-medium>{{item.priceText}}</span>\n\n              <ion-badge badge-clear float-left no-padding>{{item.price}}</ion-badge>\n\n            </ion-card-title>\n\n            <button box-shadow block default-button ion-button (click)="onEvent(\'onItemClick\', item, $event)">{{item.button}}</button>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\google-card\layout-2\google-card.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GoogleCardLayout2);
    return GoogleCardLayout2;
}());

//# sourceMappingURL=google-card-layout-2.js.map

/***/ })

});
//# sourceMappingURL=61.js.map