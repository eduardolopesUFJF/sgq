webpackJsonp([42],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarLayout1Module", function() { return SearchBarLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_1__ = __webpack_require__(881);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchBarLayout1Module = /** @class */ (function () {
    function SearchBarLayout1Module() {
    }
    SearchBarLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_1__["a" /* SearchBarLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_bar_layout_1__["a" /* SearchBarLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_1__["a" /* SearchBarLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SearchBarLayout1Module);
    return SearchBarLayout1Module;
}());

//# sourceMappingURL=search-bar-layout-1.module.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarLayout1; });
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

var SearchBarLayout1 = /** @class */ (function () {
    function SearchBarLayout1() {
        this.searchTerm = "";
    }
    SearchBarLayout1.prototype.getItems = function (event) {
        var _this = this;
        if (!this.allItems) {
            this.allItems = this.data.items;
        }
        this.data.items = this.allItems.filter(function (item) {
            return item.title.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    SearchBarLayout1.prototype.onEvent = function (event, item) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchBarLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchBarLayout1.prototype, "events", void 0);
    SearchBarLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search-bar-layout-1',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\search-bar\layout-1\search-bar.html"*/'<!-- Theme Search - Simple -->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon [name]="menu"></ion-icon>\n\n      </button>\n\n    <ion-title *ngIf="data != null">{{data.headerTitle}}</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar padding-horizontal padding-bottom>\n\n    <h1 search-bar-title *ngIf="data != null">{{data.titleSearch}}</h1>\n\n    <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="onEvent(\'onTextChange\', $event)"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<!-- Content -->\n\n<ion-content *ngIf="data != null">\n\n  <ion-grid no-padding>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6 col-lg-6 col-xl-4 *ngFor="let item of data.items;let i = index">\n\n        <!--Header Styled cards-->\n\n        <ion-item padding-top no-lines transparent>\n\n          <!-- Card Title -->\n\n          <h2 card-title>{{item.title}}</h2>\n\n          <!-- Card Badge -->\n\n          <ion-badge box-shadow item-end badge-light>{{item.button}}</ion-badge>\n\n        </ion-item>\n\n        <!-- End Header Styled Cards-->\n\n        <!-- Card Background -->\n\n        <ion-card box-shadow (click)="onEvent(\'onItemClick\', item.subtitle, $event)">\n\n          <img [src]="item.image" />\n\n          <div text-center title-block>\n\n            <!-- Card Subtitle -->\n\n            <h3 card-subtitle>{{item.subtitle}}</h3>\n\n          </div>\n\n          <span new-category padding-bottom text-uppercase>{{item.category}}</span>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\search-bar\layout-1\search-bar.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarLayout1);
    return SearchBarLayout1;
}());

//# sourceMappingURL=search-bar-layout-1.js.map

/***/ })

});
//# sourceMappingURL=42.js.map