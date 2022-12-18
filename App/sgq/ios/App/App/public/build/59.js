webpackJsonp([59],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonLayout3Module", function() { return RadioButtonLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radio_button_layout_3__ = __webpack_require__(837);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RadioButtonLayout3Module = /** @class */ (function () {
    function RadioButtonLayout3Module() {
    }
    RadioButtonLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__radio_button_layout_3__["a" /* RadioButtonLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__radio_button_layout_3__["a" /* RadioButtonLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__radio_button_layout_3__["a" /* RadioButtonLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], RadioButtonLayout3Module);
    return RadioButtonLayout3Module;
}());

//# sourceMappingURL=radio-button-layout-3.module.js.map

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButtonLayout3; });
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

var RadioButtonLayout3 = /** @class */ (function () {
    function RadioButtonLayout3() {
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
    ], RadioButtonLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('events'),
        __metadata("design:type", Object)
    ], RadioButtonLayout3.prototype, "events", void 0);
    RadioButtonLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'radio-button-layout-3',template:/*ion-inline-start:"/Users/user227439/Desktop/sgq/App/sgq/src/core/radio-button/layout-3/radio-button.html"*/'<!--Themes Radio Button - Simple 2-->\n<ion-content>\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-list radio-group [(ngModel)]="data.selectedItem">\n      <!-- Header Title Top -->\n      <ion-list-header header-section no-lines>\n        <h1 header-title text-capitalize>{{data.title}}</h1>\n      </ion-list-header>\n      <!--Content -->\n      <ion-item default-item no-lines *ngFor="let item of data.items; let i= index">\n        <ion-radio item-start [value]="item.id" (ionSelect)="onEvent(\'onSelect\',item)"></ion-radio>\n        <!--Content Title-->\n        <ion-label item-title>{{item.title}}</ion-label>\n        <!--Content Subtitle-->\n        <ion-label item-end text-right item-subtitle>{{item.subtitle}}</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/user227439/Desktop/sgq/App/sgq/src/core/radio-button/layout-3/radio-button.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RadioButtonLayout3);
    return RadioButtonLayout3;
}());

//# sourceMappingURL=radio-button-layout-3.js.map

/***/ })

});
//# sourceMappingURL=59.js.map