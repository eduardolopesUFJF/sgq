webpackJsonp([42],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenLayout2Module", function() { return SplashScreenLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_2__ = __webpack_require__(855);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplashScreenLayout2Module = /** @class */ (function () {
    function SplashScreenLayout2Module() {
    }
    SplashScreenLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_2__["a" /* SplashScreenLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_2__["a" /* SplashScreenLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_2__["a" /* SplashScreenLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SplashScreenLayout2Module);
    return SplashScreenLayout2Module;
}());

//# sourceMappingURL=splash-screen-layout-2.module.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreenLayout2; });
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

var SplashScreenLayout2 = /** @class */ (function () {
    function SplashScreenLayout2() {
    }
    SplashScreenLayout2.prototype.ngOnChanges = function (changes) {
        clearInterval(this.timer);
        this.executeEvents();
    };
    SplashScreenLayout2.prototype.getData = function () {
        return this.data;
    };
    SplashScreenLayout2.prototype.getEvents = function () {
        return this.events;
    };
    SplashScreenLayout2.prototype.executeEvents = function () {
        var duration = (this.getData() && this.getData().duration) ? this.getData().duration : 10000;
        var events = null;
        if (this.getEvents()) {
            events = this.getEvents()['onRedirect'];
        }
        this.timer = setTimeout(function () {
            if (events) {
                events();
            }
        }, duration);
    };
    SplashScreenLayout2.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], SplashScreenLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('events'),
        __metadata("design:type", Object)
    ], SplashScreenLayout2.prototype, "events", void 0);
    SplashScreenLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'splash-screen-layout-2',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/splash-screen/layout-2/splash-screen.html"*/'<!--Theme Logo + fade in + Ken Burns-->\n<div id="splash-background-image">\n  <img class="splash-screen" [src]="data.backgroundImage" />\n  <img logo animation [src]="data.logo" />\n</div>\n'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/splash-screen/layout-2/splash-screen.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SplashScreenLayout2);
    return SplashScreenLayout2;
}());

//# sourceMappingURL=splash-screen-layout-2.js.map

/***/ })

});
//# sourceMappingURL=42.js.map