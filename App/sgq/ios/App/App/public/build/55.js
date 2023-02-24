webpackJsonp([55],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeLayout4Module", function() { return RangeLayout4Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__range_layout_4__ = __webpack_require__(843);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RangeLayout4Module = /** @class */ (function () {
    function RangeLayout4Module() {
    }
    RangeLayout4Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__range_layout_4__["a" /* RangeLayout4 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__range_layout_4__["a" /* RangeLayout4 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__range_layout_4__["a" /* RangeLayout4 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], RangeLayout4Module);
    return RangeLayout4Module;
}());

//# sourceMappingURL=range-layout-4.module.js.map

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeLayout4; });
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

var RangeLayout4 = /** @class */ (function () {
    function RangeLayout4() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    RangeLayout4.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], RangeLayout4.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('events'),
        __metadata("design:type", Object)
    ], RangeLayout4.prototype, "events", void 0);
    RangeLayout4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'range-button-layout-4',template:/*ion-inline-start:"/Users/user227439/Desktop/sgq/App/sgq/src/core/range/layout-4/range.html"*/'<!-- RANGE COMPONENTS - Two sliders -->\n<ion-list no-lines *ngIf="data != null">\n    <!--- Divider item-->\n    <ion-item-divider no-lines no-margin transparent>\n        <p ion-text color="primaryBase">{{data.title}}</p>\n    </ion-item-divider>\n    <ion-item transparent>\n        <ion-range dualKnobs="true" pin="true" [(ngModel)]="data.value" (ionChange)="onEvent(\'onChange\', data.value, $event)">\n            <ion-label range-left span-large color="primaryBase">{{data.textLeft}}</ion-label>\n            <ion-label range-right span-large color="primaryBase">{{data.textRight}}</ion-label>\n        </ion-range>\n    </ion-item>\n</ion-list>\n'/*ion-inline-end:"/Users/user227439/Desktop/sgq/App/sgq/src/core/range/layout-4/range.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RangeLayout4);
    return RangeLayout4;
}());

//# sourceMappingURL=range-layout-4.js.map

/***/ })

});
//# sourceMappingURL=55.js.map