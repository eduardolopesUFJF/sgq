webpackJsonp([47],{

<<<<<<< HEAD
/***/ 742:
=======
/***/ 743:
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLayout2Module", function() { return SelectLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_layout_2__ = __webpack_require__(873);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_layout_2__ = __webpack_require__(846);
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectLayout2Module = /** @class */ (function () {
    function SelectLayout2Module() {
    }
    SelectLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_layout_2__["a" /* SelectLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_layout_2__["a" /* SelectLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__select_layout_2__["a" /* SelectLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SelectLayout2Module);
    return SelectLayout2Module;
}());

//# sourceMappingURL=select-layout-2.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 873:
=======
/***/ 846:
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLayout2; });
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

var SelectLayout2 = /** @class */ (function () {
    function SelectLayout2() {
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
    ], SelectLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('events'),
        __metadata("design:type", Object)
    ], SelectLayout2.prototype, "events", void 0);
    SelectLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'select-layout-2',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\select\layout-2\select.html"*/'<ion-item color="secondary" no-lines *ngIf="data != null">\n\n    <ion-label>{{data.title}}</ion-label>\n\n    <ion-select [(ngModel)]="data.selectedItem" multiple="false" interface="popover">\n\n        <ion-option *ngFor="let item of data.items; let i= index" [value]="item.id">{{item.title}}</ion-option>\n\n    </ion-select>\n\n</ion-item>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\select\layout-2\select.html"*/
=======
            selector: 'select-layout-2',template:/*ion-inline-start:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/select/layout-2/select.html"*/'<ion-item color="secondary" no-lines *ngIf="data != null">\n    <ion-label>{{data.title}}</ion-label>\n    <ion-select [(ngModel)]="data.selectedItem" multiple="false" interface="popover">\n        <ion-option *ngFor="let item of data.items; let i= index" [value]="item.id">{{item.title}}</ion-option>\n    </ion-select>\n</ion-item>\n'/*ion-inline-end:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/select/layout-2/select.html"*/
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
        }),
        __metadata("design:paramtypes", [])
    ], SelectLayout2);
    return SelectLayout2;
}());

//# sourceMappingURL=select-layout-2.js.map

/***/ })

});
//# sourceMappingURL=47.js.map