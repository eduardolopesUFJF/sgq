webpackJsonp([50],{

<<<<<<< HEAD
/***/ 741:
=======
/***/ 740:
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarLayout2Module", function() { return SearchBarLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_2__ = __webpack_require__(872);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_2__ = __webpack_require__(843);
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchBarLayout2Module = /** @class */ (function () {
    function SearchBarLayout2Module() {
    }
    SearchBarLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_2__["a" /* SearchBarLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_bar_layout_2__["a" /* SearchBarLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_2__["a" /* SearchBarLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SearchBarLayout2Module);
    return SearchBarLayout2Module;
}());

//# sourceMappingURL=search-bar-layout-2.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 872:
=======
/***/ 843:
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarLayout2; });
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

var SearchBarLayout2 = /** @class */ (function () {
    function SearchBarLayout2() {
        this.searchTerm = "";
    }
    SearchBarLayout2.prototype.getItems = function (event) {
        var _this = this;
        if (!this.allItems) {
            this.allItems = this.data.items;
        }
        this.data.items = this.allItems.filter(function (item) {
            return item.title.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    SearchBarLayout2.prototype.onEvent = function (event, item) {
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
    ], SearchBarLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SearchBarLayout2.prototype, "events", void 0);
    SearchBarLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'search-bar-layout-2',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\search-bar\layout-2\search-bar.html"*/'<!-- Theme Search - Field + Header -->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon [name]="menu"></ion-icon>\n\n      </button>\n\n    <ion-title *ngIf="data != null">{{data.headerTitle}}</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar no-padding>\n\n    <div background-size *ngIf="data != null" [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}">\n\n      <div search-bar-bcg>\n\n        <!-- Header Title -->\n\n        <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="onEvent(\'onTextChange\', $event)"></ion-searchbar>\n\n      </div>\n\n    </div>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<!-- Content -->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row>\n\n      <!-- List Search-->\n\n      <ion-col col-12>\n\n        <ion-list no-margin>\n\n          <ion-item default-item no-lines *ngFor="let item of data.items;" (click)="onEvent(\'onItemClick\', item)">\n\n            <ion-thumbnail item-start>\n\n              <img [src]="item.avatar">\n\n            </ion-thumbnail>\n\n            <!-- Big Title -->\n\n            <h2 item-title text-capitalize>{{item.title}}</h2>\n\n            <!-- Description -->\n\n            <h2 item-subtitle text-wrap>{{item.subtitle}}</h2>\n\n            <!-- Button get -->\n\n            <button box-shadow text-capitalize button-follow ion-button item-end>{{item.button}}</button>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\search-bar\layout-2\search-bar.html"*/
=======
            selector: 'search-bar-layout-2',template:/*ion-inline-start:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/search-bar/layout-2/search-bar.html"*/'<!-- Theme Search - Field + Header -->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon [name]="menu"></ion-icon>\n      </button>\n    <ion-title *ngIf="data != null">{{data.headerTitle}}</ion-title>\n  </ion-navbar>\n  <ion-toolbar no-padding>\n    <div background-size *ngIf="data != null" [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}">\n      <div search-bar-bcg>\n        <!-- Header Title -->\n        <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="onEvent(\'onTextChange\', $event)"></ion-searchbar>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<!-- Content -->\n<ion-content>\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-row>\n      <!-- List Search-->\n      <ion-col col-12>\n        <ion-list no-margin>\n          <ion-item default-item no-lines *ngFor="let item of data.items;" (click)="onEvent(\'onItemClick\', item)">\n            <ion-thumbnail item-start>\n              <img [src]="item.avatar">\n            </ion-thumbnail>\n            <!-- Big Title -->\n            <h2 item-title text-capitalize>{{item.title}}</h2>\n            <!-- Description -->\n            <h2 item-subtitle text-wrap>{{item.subtitle}}</h2>\n            <!-- Button get -->\n            <button box-shadow text-capitalize button-follow ion-button item-end>{{item.button}}</button>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/search-bar/layout-2/search-bar.html"*/
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarLayout2);
    return SearchBarLayout2;
}());

//# sourceMappingURL=search-bar-layout-2.js.map

/***/ })

});
//# sourceMappingURL=50.js.map