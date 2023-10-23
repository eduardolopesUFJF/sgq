webpackJsonp([50],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarLayout3Module", function() { return SearchBarLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_3__ = __webpack_require__(846);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchBarLayout3Module = /** @class */ (function () {
    function SearchBarLayout3Module() {
    }
    SearchBarLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_3__["a" /* SearchBarLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_bar_layout_3__["a" /* SearchBarLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_3__["a" /* SearchBarLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SearchBarLayout3Module);
    return SearchBarLayout3Module;
}());

//# sourceMappingURL=search-bar-layout-3.module.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarLayout3; });
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

var SearchBarLayout3 = /** @class */ (function () {
    function SearchBarLayout3() {
        this.searchTerm = "";
    }
    SearchBarLayout3.prototype.getItems = function (event) {
        var _this = this;
        if (!this.allItems) {
            this.allItems = this.data.items;
        }
        this.data.items = this.allItems.filter(function (item) {
            return item.title.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    SearchBarLayout3.prototype.onEvent = function (event, item) {
        if (this.events[event]) {
            if ('onTextChange' === event) {
                this.getItems(item);
                this.events[event](this.searchTerm);
            }
            else {
                this.events[event](item);
            }
        }
        console.log(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SearchBarLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SearchBarLayout3.prototype, "events", void 0);
    SearchBarLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'search-bar-layout-3',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/search-bar/layout-3/search-bar.html"*/'<!-- Theme Search Field + Header 2 -->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title *ngIf="data != null">{{data.headerTitle}}</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-padding transparent>\n    <div background-size *ngIf="data != null" [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}">\n      <div search-bar-bcg>\n        <!-- Header Title -->\n        <h1 ion-text no-margin search-bar-title>{{data.title}}</h1>\n        <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="onEvent(\'onTextChange\', $event)"></ion-searchbar>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<!--Content -->\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row>\n      <!-- List Search-->\n      <ion-col col-12 *ngIf="data != null">\n        <!-- Content List -->\n        <ion-list no-margin>\n          <ion-item default-item no-lines *ngFor="let item of data.items;" (click)="onEvent(\'onItemClick\', item)">\n            <ion-thumbnail item-start>\n              <img [src]="item.avatar">\n            </ion-thumbnail>\n            <!--Title -->\n            <h2 ion-text item-title>{{item.title}}</h2>\n            <!--Subtitle -->\n            <p ion-text item-subtitle>{{item.subtitle}}</p>\n            <span span-medium>\n              {{item.detail}}\n            </span>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/search-bar/layout-3/search-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarLayout3);
    return SearchBarLayout3;
}());

//# sourceMappingURL=search-bar-layout-3.js.map

/***/ })

});
//# sourceMappingURL=50.js.map