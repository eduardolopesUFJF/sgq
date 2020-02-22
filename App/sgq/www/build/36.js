webpackJsonp([36],{

<<<<<<< HEAD
/***/ 752:
=======
/***/ 753:
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsLayout1Module", function() { return TabsLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_layout_1__ = __webpack_require__(883);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_layout_1__ = __webpack_require__(856);
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsLayout1Module = /** @class */ (function () {
    function TabsLayout1Module() {
    }
    TabsLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_layout_1__["a" /* TabsLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs_layout_1__["a" /* TabsLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_layout_1__["a" /* TabsLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], TabsLayout1Module);
    return TabsLayout1Module;
}());

//# sourceMappingURL=tabs-layout-1.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 883:
=======
/***/ 856:
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsLayout1; });
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

var TabsLayout1 = /** @class */ (function () {
    function TabsLayout1() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], TabsLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('events'),
        __metadata("design:type", Object)
    ], TabsLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tabs'),
        __metadata("design:type", Object)
    ], TabsLayout1.prototype, "tabRef", void 0);
    TabsLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'tabs-layout-1',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\tabs\layout-1\tabs.html"*/'<!-- Theme Tabs Footer tab - text -->\n\n<ion-tabs #tabs tabsPlacement="bottom">\n\n    <ion-tab [tabTitle]="item.title" [tabIcon]="item.icon" [root]="item.page" *ngFor="let item of data;let i = index"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\tabs\layout-1\tabs.html"*/
=======
            selector: 'tabs-layout-1',template:/*ion-inline-start:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/tabs/layout-1/tabs.html"*/'<!-- Theme Tabs Footer tab - text -->\n<ion-tabs #tabs tabsPlacement="bottom">\n    <ion-tab [tabTitle]="item.title" [tabIcon]="item.icon" [root]="item.page" *ngFor="let item of data;let i = index"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/tabs/layout-1/tabs.html"*/
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
        }),
        __metadata("design:paramtypes", [])
    ], TabsLayout1);
    return TabsLayout1;
}());

//# sourceMappingURL=tabs-layout-1.js.map

/***/ })

});
//# sourceMappingURL=36.js.map