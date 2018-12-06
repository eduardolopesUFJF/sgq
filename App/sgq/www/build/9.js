webpackJsonp([9,39],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLayout1Module", function() { return SelectLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_layout_1__ = __webpack_require__(825);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectLayout1Module = /** @class */ (function () {
    function SelectLayout1Module() {
    }
    SelectLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_layout_1__["a" /* SelectLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_layout_1__["a" /* SelectLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__select_layout_1__["a" /* SelectLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], SelectLayout1Module);
    return SelectLayout1Module;
}());

//# sourceMappingURL=select-layout-1.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayout2Module", function() { return LoginLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_layout_2__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_layout_1_select_layout_1_module__ = __webpack_require__(716);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginLayout2Module = /** @class */ (function () {
    function LoginLayout2Module() {
    }
    LoginLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */]),
                __WEBPACK_IMPORTED_MODULE_3__select_layout_1_select_layout_1_module__["SelectLayout1Module"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], LoginLayout2Module);
    return LoginLayout2Module;
}());

//# sourceMappingURL=login-layout-2.module.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLayout1; });
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

var SelectLayout1 = /** @class */ (function () {
    function SelectLayout1() {
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
    ], SelectLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('events'),
        __metadata("design:type", Object)
    ], SelectLayout1.prototype, "events", void 0);
    SelectLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'select-layout-1',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\select\layout-1\select.html"*/'<ion-item color="secondary" no-lines *ngIf="data != null">\n\n    <ion-label>{{data.title}}</ion-label>\n\n    <ion-select [(ngModel)]="data.selectedItem" multiple="false">\n\n        <ion-option value="0">Selecione</ion-option>\n\n        <ion-option *ngFor="let item of data.items; let i= index" [value]="item.id">{{item.title}}</ion-option>\n\n    </ion-select>\n\n</ion-item>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\select\layout-1\select.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SelectLayout1);
    return SelectLayout1;
}());

//# sourceMappingURL=select-layout-1.js.map

/***/ }),

/***/ 831:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_toast_service__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginLayout2 = /** @class */ (function () {
    function LoginLayout2(toastService) {
        var _this = this;
        this.toastService = toastService;
        this.background = '';
        this.onEvent = function (event, formValido) {
            if (event == 'onLogin') {
                if (!formValido) {
                    _this.toastService.presentToastError("Preencha todos os campos para logar");
                    return;
                }
                if (_this.events[event]) {
                    _this.events[event]({
                        'usuario': _this.usuario,
                        'senha': _this.senha,
                        'empresa': _this.empresa
                    });
                }
            }
            else {
                if (_this.events[event]) {
                    _this.events[event]();
                }
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginLayout2.prototype, "events", void 0);
    LoginLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login-layout-2',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\login\layout-2\login.html"*/'<ion-content has-header *ngIf="data != null" background-size style="background-color: white;" >\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row padding-left padding-right align-items-center>\n\n      <ion-col *ngIf="data.possuiLogo" text-center col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <img [src]="data.logo">\n\n      </ion-col>\n\n      <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <ion-item transparent text-center no-lines>\n\n          <h1 ion-text login-title no-margin text-wrap text-capitalize>{{data.title}}</h1>\n\n        </ion-item>\n\n        <form #loginForm="ngForm">\n\n          <!-- <ion-item text-center margin-top transparent>\n\n            <select-layout-3 [data]="data.selectData" [events]="data.selectEvents"></select-layout-3>\n\n          </ion-item> -->\n\n          <ion-item text-center transparent>\n\n            <ion-label stacked>EMPRESA</ion-label>\n\n            <ion-select required [(ngModel)]="empresa" multiple="false" name="empresa" okText="Ok" cancelText="Cancelar">\n\n              <ion-option *ngFor="let item of data.selectData.items; let i= index" [value]="item.title">{{item.title}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <!---Input field username-->\n\n          <ion-item text-center transparent>\n\n            <ion-label stacked>{{data.labelUsername}}</ion-label>\n\n            <ion-input text-center required type="text" [placeholder]="data.username" [(ngModel)]="usuario" name="usuario"></ion-input>\n\n          </ion-item>\n\n          <!---Input field password-->\n\n          <ion-item text-center transparent>\n\n            <ion-label stacked>{{data.labelPassword}}</ion-label>\n\n            <ion-input text-center required type="password" [placeholder]="data.password" [(ngModel)]="senha" name="senha"></ion-input>\n\n          </ion-item>\n\n          <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: black !important;" (click)="onEvent(\'onLogin\', loginForm.valid)">{{data.login}}</button>\n\n          <button *ngIf="data.possuiRegistrar" ion-button default-button block text-capitalize margin-bottom (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n\n          <button *ngIf="data.possuiEsqueciSenha" ion-button button-clear text-capitalize clear float-right no-padding\n\n            no-margin>{{data.forgotPassword}}</button>\n\n        </form>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\login\layout-2\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__utils_toast_service__["a" /* ToastService */]])
    ], LoginLayout2);
    return LoginLayout2;
}());

//# sourceMappingURL=login-layout-2.js.map

/***/ })

});
//# sourceMappingURL=9.js.map