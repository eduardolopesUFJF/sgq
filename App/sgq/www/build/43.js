webpackJsonp([43],{

<<<<<<< HEAD
/***/ 747:
=======
/***/ 749:
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenLayout1Module", function() { return SplashScreenLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spinner__ = __webpack_require__(851);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_1__ = __webpack_require__(882);
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplashScreenLayout1Module = /** @class */ (function () {
    function SplashScreenLayout1Module() {
    }
    SplashScreenLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_1__["a" /* SplashScreenLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_1__["a" /* SplashScreenLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__splash_screen_layout_1__["a" /* SplashScreenLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SplashScreenLayout1Module);
    return SplashScreenLayout1Module;
}());

//# sourceMappingURL=splash-screen-layout-1.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 851:
=======
/***/ 882:
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreenLayout1; });
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

var SplashScreenLayout1 = /** @class */ (function () {
    function SplashScreenLayout1() {
    }
    SplashScreenLayout1.prototype.ngOnChanges = function (changes) {
        clearInterval(this.timer);
        this.executeEvents();
    };
    SplashScreenLayout1.prototype.getData = function () {
        return this.data;
    };
    SplashScreenLayout1.prototype.getEvents = function () {
        return this.events;
    };
    SplashScreenLayout1.prototype.executeEvents = function () {
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
    SplashScreenLayout1.prototype.ngOnDestroy = function () {
        clearInterval(this.timer);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], SplashScreenLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('events'),
        __metadata("design:type", Object)
    ], SplashScreenLayout1.prototype, "events", void 0);
    SplashScreenLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'spinner',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/spinner/spinner.html"*/'<img [src]="path" />'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/spinner/spinner.html"*/
=======
            selector: 'splash-screen-layout-1',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\splash-screen\layout-1\splash-screen.html"*/'<!--Theme Animation Logo + Ken Burns -->\n\n<div id="splash-background-image">\n\n  <img class="splash-screen" [src]="data.backgroundImage" />\n\n  <img logo animation [src]="data.logo" />\n\n</div>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\splash-screen\layout-1\splash-screen.html"*/
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
        }),
        __metadata("design:paramtypes", [])
    ], SplashScreenLayout1);
    return SplashScreenLayout1;
}());

//# sourceMappingURL=splash-screen-layout-1.js.map

/***/ })

});
//# sourceMappingURL=43.js.map