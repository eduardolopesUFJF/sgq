webpackJsonp([53],{

<<<<<<< HEAD
/***/ 739:
=======
/***/ 742:
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarLayout1Module", function() { return SearchBarLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_layout_2__ = __webpack_require__(843);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_1__ = __webpack_require__(875);
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_1__["a" /* SearchBarLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_bar_layout_1__["a" /* SearchBarLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search_bar_layout_1__["a" /* SearchBarLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SearchBarLayout1Module);
    return SearchBarLayout1Module;
}());

//# sourceMappingURL=search-bar-layout-1.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 843:
=======
/***/ 875:
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SearchBarLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SearchBarLayout1.prototype, "events", void 0);
    SearchBarLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'register-layout-2',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/register/layout-2/register.html"*/'<!-- Themes Register + Image -->\n\n<!--Content -->\n<ion-content has-header no-padding background-size *ngIf="data != null" [ngStyle]="{\'background-image\': \'url(\' + data.background + \')\'}">\n  <ion-grid no-padding>\n    <ion-row padding-horizontal align-items-center>\n      <ion-col text-center col-12 margin-bottom>\n        <!-- Header Title -->\n        <h1 register-title no-margin text-wrap>{{data.title}}</h1>\n      </ion-col>\n      <ion-col text-center col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <!--Form-->\n        <form>\n          <ion-item transparent text-center>\n            <!---Input field username-->\n            <ion-label stacked>{{data.lableUsername}}</ion-label>\n            <ion-input text-center required [placeholder]="data.username" type="text" [(ngModel)]="username" [ngModelOptions]="{standalone: true}"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isUsernameValid">{{data.errorUser}}</ion-label>\n          </ion-item>\n          <ion-item transparent text-center>\n            <!---Input field password-->\n            <ion-label stacked>{{data.lablePassword}}</ion-label>\n            <ion-input text-center required [placeholder]="data.password" type="password" [(ngModel)]="password" [ngModelOptions]="{standalone: true}"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label>\n          </ion-item>\n          <ion-item transparent text-center>\n            <!---Input field email-->\n            <ion-label stacked>{{data.lableEmail}}</ion-label>\n            <ion-input text-center required [placeholder]="data.email" type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="email" [ngModelOptions]="{standalone: true}"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isEmailValid">{{data.errorEmail}}</ion-label>\n          </ion-item>\n          <ion-item transparent text-center>\n            <!---Input field country-->\n            <ion-label stacked>{{data.lableCountry}}</ion-label>\n            <ion-input text-center required [placeholder]="data.country" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="country" [ngModelOptions]="{standalone: true}"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isCountryValid">{{data.errorCountry}}</ion-label>\n          </ion-item>\n          <ion-item transparent text-center>\n            <!---Input field city-->\n            <ion-label stacked>{{data.lableCity}}</ion-label>\n            <ion-input text-center required [placeholder]="data.city" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="city" [ngModelOptions]="{standalone: true}"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isCityValid">{{data.errorCity}}</ion-label>\n          </ion-item>\n          <!---Register button-->\n          <button ion-button block default-button text-capitalize box-shadow margin-bottom margin-top (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/register/layout-2/register.html"*/
=======
            selector: 'search-bar-layout-1',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\search-bar\layout-1\search-bar.html"*/'<!-- Theme Search - Simple -->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon [name]="menu"></ion-icon>\n\n      </button>\n\n    <ion-title *ngIf="data != null">{{data.headerTitle}}</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar padding-horizontal padding-bottom>\n\n    <h1 search-bar-title *ngIf="data != null">{{data.titleSearch}}</h1>\n\n    <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="onEvent(\'onTextChange\', $event)"></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<!-- Content -->\n\n<ion-content *ngIf="data != null">\n\n  <ion-grid no-padding>\n\n    <ion-row>\n\n      <ion-col col-12 col-md-6 col-lg-6 col-xl-4 *ngFor="let item of data.items;let i = index">\n\n        <!--Header Styled cards-->\n\n        <ion-item padding-top no-lines transparent>\n\n          <!-- Card Title -->\n\n          <h2 card-title>{{item.title}}</h2>\n\n          <!-- Card Badge -->\n\n          <ion-badge box-shadow item-end badge-light>{{item.button}}</ion-badge>\n\n        </ion-item>\n\n        <!-- End Header Styled Cards-->\n\n        <!-- Card Background -->\n\n        <ion-card box-shadow (click)="onEvent(\'onItemClick\', item.subtitle, $event)">\n\n          <img [src]="item.image" />\n\n          <div text-center title-block>\n\n            <!-- Card Subtitle -->\n\n            <h3 card-subtitle>{{item.subtitle}}</h3>\n\n          </div>\n\n          <span new-category padding-bottom text-uppercase>{{item.category}}</span>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\search-bar\layout-1\search-bar.html"*/
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarLayout1);
    return SearchBarLayout1;
}());

//# sourceMappingURL=search-bar-layout-1.js.map

/***/ })

});
//# sourceMappingURL=53.js.map