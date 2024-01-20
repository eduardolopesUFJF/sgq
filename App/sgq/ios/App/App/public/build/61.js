webpackJsonp([61],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonLayout2Module", function() { return RadioButtonLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radio_button_layout_2__ = __webpack_require__(865);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RadioButtonLayout2Module = /** @class */ (function () {
    function RadioButtonLayout2Module() {
    }
    RadioButtonLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__radio_button_layout_2__["a" /* RadioButtonLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__radio_button_layout_2__["a" /* RadioButtonLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__radio_button_layout_2__["a" /* RadioButtonLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], RadioButtonLayout2Module);
    return RadioButtonLayout2Module;
}());

//# sourceMappingURL=radio-button-layout-2.module.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButtonLayout2; });
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

var RadioButtonLayout2 = /** @class */ (function () {
    function RadioButtonLayout2() {
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
    ], RadioButtonLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('events'),
        __metadata("design:type", Object)
    ], RadioButtonLayout2.prototype, "events", void 0);
    RadioButtonLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'radio-button-layout-2',template:/*ion-inline-start:"C:\Users\jluca\OneDrive\Documents\GitHub\sgq\App\sgq\src\core\radio-button\layout-2\radio-button.html"*/'<!--Themes Radio Button - With Avatars -->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-list radio-group [(ngModel)]="data.selectedItem">\n\n      <!-- Header Title Top -->\n\n      <ion-list-header header-section no-lines>\n\n        <h1 header-title text-capitalize>{{data.title}}</h1>\n\n      </ion-list-header>\n\n      <!--Content -->\n\n      <ion-item default-item no-lines *ngFor="let item of data.items; let i= index">\n\n        <!-- Content Avatar -->\n\n        <ion-thumbnail item-start>\n\n          <img [src]="item.avatar" />\n\n        </ion-thumbnail >\n\n        <!-- Content Title -->\n\n        <ion-label item-title padding-top>{{item.title}}</ion-label>\n\n        <!-- Content Subtitle -->\n\n        <ion-label item-subtitle text-wrap>{{item.subtitle}}</ion-label>\n\n        <ion-radio item-end [value]="item.id" (ionSelect)="onEvent(\'onSelect\',item)" [checked]="item.isChecked"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jluca\OneDrive\Documents\GitHub\sgq\App\sgq\src\core\radio-button\layout-2\radio-button.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RadioButtonLayout2);
    return RadioButtonLayout2;
}());

//# sourceMappingURL=radio-button-layout-2.js.map

/***/ })

});
//# sourceMappingURL=61.js.map