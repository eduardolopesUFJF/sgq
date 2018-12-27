webpackJsonp([41],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLayout3Module", function() { return SelectLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_layout_3__ = __webpack_require__(841);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectLayout3Module = /** @class */ (function () {
    function SelectLayout3Module() {
    }
    SelectLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_layout_3__["a" /* SelectLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_layout_3__["a" /* SelectLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__select_layout_3__["a" /* SelectLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SelectLayout3Module);
    return SelectLayout3Module;
}());

//# sourceMappingURL=select-layout-3.module.js.map

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLayout3; });
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

var SelectLayout3 = /** @class */ (function () {
    function SelectLayout3() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('data'),
        __metadata("design:type", Object)
    ], SelectLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], SelectLayout3.prototype, "events", void 0);
    SelectLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'select-layout-3',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\select\layout-3\select.html"*/'<ion-item color="secondary" no-lines *ngIf="data != null">\n\n    <ion-label>{{data.title}}</ion-label>\n\n    <ion-select [(ngModel)]="data.selectedItem" multiple="false" interface="action-sheet">\n\n        <ion-option *ngFor="let item of data.items; let i= index" [value]="item.id">{{item.title}}</ion-option>\n\n    </ion-select>\n\n</ion-item>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\select\layout-3\select.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SelectLayout3);
    return SelectLayout3;
}());

//# sourceMappingURL=select-layout-3.js.map

/***/ })

});
//# sourceMappingURL=41.js.map