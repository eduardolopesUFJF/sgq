webpackJsonp([32],{

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleLayout2Module", function() { return ToggleLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_layout_2__ = __webpack_require__(889);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToggleLayout2Module = /** @class */ (function () {
    function ToggleLayout2Module() {
    }
    ToggleLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__toggle_layout_2__["a" /* ToggleLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__toggle_layout_2__["a" /* ToggleLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__toggle_layout_2__["a" /* ToggleLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ToggleLayout2Module);
    return ToggleLayout2Module;
}());

//# sourceMappingURL=toggle-layout-2.module.js.map

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleLayout2; });
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

var ToggleLayout2 = /** @class */ (function () {
    function ToggleLayout2() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    ToggleLayout2.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], ToggleLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('events'),
        __metadata("design:type", Object)
    ], ToggleLayout2.prototype, "events", void 0);
    ToggleLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'toggle-layout-2',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\toggle\layout-2\toggle.html"*/'<!--Themes Toggle - Simple 2 -->\n\n<ion-content>\n\n  <ion-grid no-padding>\n\n    <!-- List Section -->\n\n    <ion-list no-lines *ngIf="data != null">\n\n      <ion-list-header header-section>\n\n        <!-- Header-title -->\n\n        <h1 header-title text-capitalize no-lines>{{data.title}}</h1>\n\n      </ion-list-header>\n\n      <ion-item default-item *ngFor="let item of data.items; let i= index">\n\n        <!-- Toggle -->\n\n        <ion-toggle item-start [value]="item.id" (ionChange)="onEvent(\'onSelect\',item)" [checked]="item.isChecked"></ion-toggle>\n\n        <!-- Item-subtitle -->\n\n        <ion-label item-subtitle>{{item.subtitle}}</ion-label>\n\n        <!-- Item-title -->\n\n        <ion-label item-title>{{item.title}}</ion-label>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\toggle\layout-2\toggle.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ToggleLayout2);
    return ToggleLayout2;
}());

//# sourceMappingURL=toggle-layout-2.js.map

/***/ })

});
//# sourceMappingURL=32.js.map