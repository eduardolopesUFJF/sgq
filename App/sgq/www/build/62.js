webpackJsonp([62],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonLayout1Module", function() { return RadioButtonLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radio_button_layout_1__ = __webpack_require__(837);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RadioButtonLayout1Module = /** @class */ (function () {
    function RadioButtonLayout1Module() {
    }
    RadioButtonLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__radio_button_layout_1__["a" /* RadioButtonLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__radio_button_layout_1__["a" /* RadioButtonLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__radio_button_layout_1__["a" /* RadioButtonLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], RadioButtonLayout1Module);
    return RadioButtonLayout1Module;
}());

//# sourceMappingURL=radio-button-layout-1.module.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButtonLayout1; });
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

var RadioButtonLayout1 = /** @class */ (function () {
    function RadioButtonLayout1() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], RadioButtonLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('events'),
        __metadata("design:type", Object)
    ], RadioButtonLayout1.prototype, "events", void 0);
    RadioButtonLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'radio-button-layout-1',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/radio-button/layout-1/radio-button.html"*/'<!--Themes Radio Button - Simple -->\n<ion-content>\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-list radio-group [(ngModel)]="data.selectedItem">\n      <!-- Header Title Top -->\n      <ion-list-header transparent header-section no-lines>\n        <h1 header-title text-capitalize>{{data.title}}</h1>\n      </ion-list-header>\n      <!-- Content List -->\n      <ion-item no-lines default-item *ngFor="let item of data.items; let i= index">\n        <!-- Content List Title -->\n        <ion-label item-title>{{item.title}}</ion-label>\n        <ion-radio [value]="item.id" (ionSelect)="onEvent(\'onSelect\',item)"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/radio-button/layout-1/radio-button.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RadioButtonLayout1);
    return RadioButtonLayout1;
}());

//# sourceMappingURL=radio-button-layout-1.js.map

/***/ })

});
//# sourceMappingURL=62.js.map