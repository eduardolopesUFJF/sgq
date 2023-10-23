webpackJsonp([59],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeLayout1Module", function() { return RangeLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_layout_1__ = __webpack_require__(866);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RangeLayout1Module = /** @class */ (function () {
    function RangeLayout1Module() {
    }
    RangeLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__range_layout_1__["a" /* RangeLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__range_layout_1__["a" /* RangeLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__range_layout_1__["a" /* RangeLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], RangeLayout1Module);
    return RangeLayout1Module;
}());

//# sourceMappingURL=range-layout-1.module.js.map

/***/ }),

/***/ 866:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeLayout1; });
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

var RangeLayout1 = /** @class */ (function () {
    function RangeLayout1() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    RangeLayout1.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], RangeLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('events'),
        __metadata("design:type", Object)
    ], RangeLayout1.prototype, "events", void 0);
    RangeLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'radio-button-layout-3',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/radio-button/layout-3/radio-button.html"*/'<!--Themes Radio Button - Simple 2-->\n<ion-content>\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-list radio-group [(ngModel)]="data.selectedItem">\n      <!-- Header Title Top -->\n      <ion-list-header header-section no-lines>\n        <h1 header-title text-capitalize>{{data.title}}</h1>\n      </ion-list-header>\n      <!--Content -->\n      <ion-item default-item no-lines *ngFor="let item of data.items; let i= index">\n        <ion-radio item-start [value]="item.id" (ionSelect)="onEvent(\'onSelect\',item)"></ion-radio>\n        <!--Content Title-->\n        <ion-label item-title>{{item.title}}</ion-label>\n        <!--Content Subtitle-->\n        <ion-label item-end text-right item-subtitle>{{item.subtitle}}</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/radio-button/layout-3/radio-button.html"*/
=======
            selector: 'range-button-layout-1',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\range\layout-1\range.html"*/'<!-- RANGE COMPONENTS - Basic -->\n\n<ion-list no-lines *ngIf="data != null">\n\n    <!--- Divider item-->\n\n    <ion-item-divider padding-top no-lines no-margin transparent>\n\n      <p color="primaryBase" ion-text>{{data.title}}</p>\n\n      <ion-badge item-end>{{data.value}}</ion-badge>\n\n    </ion-item-divider>\n\n    <ion-item transparent>\n\n        <ion-range [(ngModel)]="data.value" (ionChange)="onEvent(\'onChange\', data.value, $event)">\n\n        </ion-range>\n\n    </ion-item>\n\n</ion-list>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\range\layout-1\range.html"*/
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
        }),
        __metadata("design:paramtypes", [])
    ], RangeLayout1);
    return RangeLayout1;
}());

//# sourceMappingURL=range-layout-1.js.map

/***/ })

});
//# sourceMappingURL=59.js.map