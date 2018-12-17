webpackJsonp([56],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayout1Module", function() { return LoginLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_layout_1__ = __webpack_require__(872);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginLayout1Module = /** @class */ (function () {
    function LoginLayout1Module() {
    }
    LoginLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_1__["a" /* LoginLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_layout_1__["a" /* LoginLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_1__["a" /* LoginLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], LoginLayout1Module);
    return LoginLayout1Module;
}());

//# sourceMappingURL=login-layout-1.module.js.map

/***/ }),

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayout1; });
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

var LoginLayout1 = /** @class */ (function () {
    function LoginLayout1() {
        var _this = this;
        this.isUsernameValidLogin = true;
        this.isPasswordValidLogin = true;
        this.isEmailValidRegister = true;
        this.isUsernameValidRegister = true;
        this.isPasswordValidRegister = true;
        this.isCityValidRegister = true;
        this.isCountryValidRegister = true;
        this.regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.selectedItem = "login";
        this.onEvent = function (event) {
            if (event == "onLogin") {
                if (!_this.validateLogin()) {
                    return;
                }
                if (_this.events[event]) {
                    _this.events[event]({
                        'username': _this.usernameLogin,
                        'password': _this.passwordLogin
                    });
                }
            }
            else if (event == "onRegister") {
                if (!_this.validateRegister()) {
                    return;
                }
                if (_this.events[event]) {
                    _this.events[event]({
                        'username': _this.usernameRegister,
                        'password': _this.passwordRegister,
                        'country': _this.countryRegister,
                        'city': _this.cityRegister,
                        'email': _this.emailRegister
                    });
                }
            }
        };
    }
    LoginLayout1.prototype.validateLogin = function () {
        this.isUsernameValidLogin = true;
        this.isPasswordValidLogin = true;
        if (!this.usernameLogin || this.usernameLogin.length == 0) {
            this.isUsernameValidLogin = false;
        }
        if (!this.passwordLogin || this.passwordLogin.length == 0) {
            this.isPasswordValidLogin = false;
        }
        return this.isPasswordValidLogin && this.isUsernameValidLogin;
    };
    LoginLayout1.prototype.validateRegister = function () {
        this.isEmailValidRegister = true;
        this.isUsernameValidRegister = true;
        this.isPasswordValidRegister = true;
        this.isCityValidRegister = true;
        this.isCountryValidRegister = true;
        if (!this.usernameRegister || this.usernameRegister.length == 0) {
            this.isUsernameValidRegister = false;
        }
        if (!this.passwordRegister || this.passwordRegister.length == 0) {
            this.isPasswordValidRegister = false;
        }
        if (!this.passwordRegister || this.passwordRegister.length == 0) {
            this.isPasswordValidRegister = false;
        }
        if (!this.cityRegister || this.cityRegister.length == 0) {
            this.isCityValidRegister = false;
        }
        if (!this.countryRegister || this.countryRegister.length == 0) {
            this.isCountryValidRegister = false;
        }
        this.isEmailValidRegister = this.regex.test(this.emailRegister);
        return this.isEmailValidRegister &&
            this.isPasswordValidRegister &&
            this.isUsernameValidRegister &&
            this.isCityValidRegister &&
            this.isCountryValidRegister;
    };
    LoginLayout1.prototype.isEnabled = function (value) {
        return this.selectedItem == value;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginLayout1.prototype, "events", void 0);
    LoginLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login-layout-1',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\login\layout-1\login.html"*/'<!-- Themes Login + logo 1 -->\n\n<ion-content has-header *ngIf="data != null" background-size [ngStyle]="{\'background-image\': \'url(\' + data.background + \')\'}">\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <!--- Settings Segmet Block -->\n\n    <div segment-block>\n\n      <ion-segment has-header [(ngModel)]="selectedItem">\n\n        <ion-segment-button value="login" text-capitalize>\n\n          {{data.segmentLogin}}\n\n        </ion-segment-button>\n\n        <ion-segment-button value="register" text-capitalize>\n\n          {{data.segmentRegister}}\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n\n    <!--- SETTINGS LOGIN SCREEN -->\n\n    <ion-row *ngIf="isEnabled(\'login\')" padding-left padding-right align-items-center>\n\n      <ion-col margin-bottom col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <ion-item transparent margin-top no-padding no-lines>\n\n          <!---Logo Title-->\n\n          <h1 item-start login-title no-margin>{{data.login.title}}</h1>\n\n          <div item-content no-margin no-padding>\n\n            <button ion-button button-clear text-uppercase clear no-margin no-padding (click)="onEvent(\'onSkip\')">{{data.skip}}</button>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col text-center col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <!---Logo-->\n\n        <img [src]="data.logo">\n\n        <form>\n\n          <!---Input field username-->\n\n          <ion-item text-center transparent>\n\n            <ion-label stacked>{{data.login.labelUsername}}</ion-label>\n\n            <ion-input text-center required type="text" [placeholder]="data.login.username" [(ngModel)]="usernameLogin" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isUsernameValidLogin">{{data.login.errorUser}}</ion-label>\n\n          </ion-item>\n\n          <!---Input field password-->\n\n          <ion-item transparent>\n\n            <ion-label stacked>{{data.login.labelPassword}}</ion-label>\n\n            <ion-input text-center required type="password" [placeholder]="data.login.password" [(ngModel)]="passwordLogin" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isPasswordValidLogin">{{data.login.errorPassword}}</ion-label>\n\n          </ion-item>\n\n          <button ion-button button-clear text-capitalize clear float-right no-margin no-padding (click)="onEvent(\'onForgot\')">{{data.login.forgotPassword}}</button>\n\n          <!-- Settings Button Login Screen -->\n\n          <!---Login button-->\n\n          <button ion-button full default-button login-button text-capitalize box-shadow (click)="onEvent(\'onLogin\')">{{data.login.login}}</button>\n\n          <!---Facebook button-->\n\n          <button ion-button full default-button text-capitalize icon-end box-shadow margin-bottom (click)="onEvent(\'onFacebook\')">\n\n            {{data.login.facebookLogin}}\n\n            <i icon-small class="icon icon-facebook"></i>\n\n        </button>\n\n        </form>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <!--- SETTINGS REGISTER SCREEN -->\n\n    <ion-row *ngIf="isEnabled(\'register\')" padding-left padding-right align-items-center>\n\n      <ion-col margin-bottom col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <ion-item transparent margin-top no-padding no-lines>\n\n          <!-- Register Title -->\n\n          <h1 register-title item-start text-wrap>{{data.register.title}}</h1>\n\n          <!-- Button Skip -->\n\n          <div item-content no-margin no-padding>\n\n            <button no-margin no-padding ion-button button-clear text-uppercase clear (click)="onEvent(\'onSkip\')">{{data.skip}}</button>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col text-center col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <!---Logo-->\n\n        <img [src]="data.logo">\n\n        <!--Form-->\n\n        <form>\n\n          <ion-item text-center transparent>\n\n            <!---Input field username-->\n\n            <ion-label stacked>{{data.register.lableUsername}}</ion-label>\n\n            <ion-input text-center required [placeholder]="data.register.username" type="text" [(ngModel)]="usernameRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isUsernameValidRegister">{{data.register.errorUser}}</ion-label>\n\n          </ion-item>\n\n          <ion-item text-center transparent>\n\n            <!---Input field password-->\n\n            <ion-label stacked>{{data.register.lablePassword}}</ion-label>\n\n            <ion-input text-center required [placeholder]="data.register.password" type="password" [(ngModel)]="passwordRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isPasswordValidRegister">{{data.register.errorPassword}}</ion-label>\n\n          </ion-item>\n\n          <ion-item text-center transparent>\n\n            <!---Input field email-->\n\n            <ion-label stacked>{{data.register.lableEmail}}</ion-label>\n\n            <ion-input text-center required [placeholder]="data.register.email" type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="emailRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isEmailValidRegister">{{data.register.errorEmail}}</ion-label>\n\n          </ion-item>\n\n          <ion-item text-center transparent>\n\n            <!---Input field country-->\n\n            <ion-label stacked>{{data.register.lableCountry}}</ion-label>\n\n            <ion-input text-center required [placeholder]="data.register.country" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="countryRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isCountryValidRegister">{{data.register.errorCountry}}</ion-label>\n\n          </ion-item>\n\n          <ion-item text-center transparent>\n\n            <!---Input field city-->\n\n            <ion-label stacked>{{data.register.lableCity}}</ion-label>\n\n            <ion-input text-center required [placeholder]="data.register.city" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="cityRegister" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isCityValidRegister">{{data.register.errorCity}}</ion-label>\n\n          </ion-item>\n\n          <!---Register button-->\n\n          <button ion-button default-button full text-capitalize box-shadow margin-bottom margin-top (click)="onEvent(\'onRegister\')">{{data.register.register}}</button>\n\n        </form>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\login\layout-1\login.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoginLayout1);
    return LoginLayout1;
}());

//# sourceMappingURL=login-layout-1.js.map

/***/ })

});
//# sourceMappingURL=56.js.map