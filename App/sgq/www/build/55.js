webpackJsonp([55],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLayout1Module", function() { return RegisterLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_layout_1__ = __webpack_require__(872);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterLayout1Module = /** @class */ (function () {
    function RegisterLayout1Module() {
    }
    RegisterLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_layout_1__["a" /* RegisterLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_layout_1__["a" /* RegisterLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register_layout_1__["a" /* RegisterLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], RegisterLayout1Module);
    return RegisterLayout1Module;
}());

//# sourceMappingURL=register-layout-1.module.js.map

/***/ }),

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterLayout1; });
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

var RegisterLayout1 = /** @class */ (function () {
    function RegisterLayout1() {
        var _this = this;
        this.birth = '';
        this.isEmailValid = true;
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        this.isCityValid = true;
        this.isCountryValid = true;
        this.isBirthValid = true;
        this.regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.onEvent = function (event) {
            if (event == "onRegister" && !_this.validate()) {
                return;
            }
            if (_this.events[event]) {
                _this.events[event]({
                    'username': _this.username,
                    'password': _this.password,
                    'country': _this.country,
                    'city': _this.city,
                    'email': _this.email,
                    'birth': _this.birth
                });
            }
        };
    }
    RegisterLayout1.prototype.validate = function () {
        this.isEmailValid = true;
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        this.isCityValid = true;
        this.isCountryValid = true;
        this.isBirthValid = true;
        if (!this.username || this.username.length == 0) {
            this.isUsernameValid = false;
        }
        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }
        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }
        if (!this.city || this.city.length == 0) {
            this.isCityValid = false;
        }
        if (!this.country || this.country.length == 0) {
            this.isCountryValid = false;
        }
        if (!this.birth || this.birth.length == 0) {
            this.isBirthValid = false;
        }
        this.isEmailValid = this.regex.test(this.email);
        return this.isEmailValid &&
            this.isPasswordValid &&
            this.isUsernameValid &&
            this.isCityValid &&
            this.isBirthValid &&
            this.isCountryValid;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterLayout1.prototype, "events", void 0);
    RegisterLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'register-layout-1',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\register\layout-1\register.html"*/'<!-- Themes Register + logo -->\n\n<!--Content -->\n\n<ion-content has-header *ngIf="data != null" background-size [ngStyle]="{\'background-image\': \'url(\' + data.background + \')\'}">\n\n  <ion-grid no-padding>\n\n    <ion-row padding-horizontal align-items-center *ngIf="data != null">\n\n      <ion-col col-12 no-padding>\n\n        <ion-item transparent no-padding no-lines>\n\n          <!---Logo-->\n\n          <img item-start [src]="data.logo">\n\n          <!---Buttin Skip-->\n\n          <div item-content no-margin no-padding>\n\n            <button ion-button text-capitalize button-clear clear item-end no-margin no-padding (click)="onEvent(\'onSkip\')">{{data.skip}}</button>\n\n          </div>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col no-padding text-center col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <!--Form Title-->\n\n        <h1 register-title text-wrap margin-bottom>{{data.title}}</h1>\n\n        <!--Form-->\n\n        <form>\n\n          <!---Input field username-->\n\n          <ion-item transparent text-center>\n\n            <ion-label stacked>{{data.lableUsername}}</ion-label>\n\n            <ion-input text-center required [placeholder]="data.username" type="text" [(ngModel)]="username" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isUsernameValid">{{data.errorUser}}</ion-label>\n\n          </ion-item>\n\n          <!---Input field password-->\n\n          <ion-item transparent text-center>\n\n            <ion-label stacked>{{data.lablePassword}}</ion-label>\n\n            <ion-input text-center required [placeholder]="data.password" type="password" [(ngModel)]="password" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label>\n\n          </ion-item>\n\n          <!---Input field email-->\n\n          <ion-item transparent text-center>\n\n            <ion-label stacked>{{data.lableEmail}}</ion-label>\n\n            <ion-input text-center required [placeholder]="data.email" type="email" [ngModelOptions]="{standalone: true}" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="email"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isEmailValid">{{data.errorEmail}}</ion-label>\n\n          </ion-item>\n\n          <!---Input field country-->\n\n          <ion-item transparent text-center>\n\n            <ion-label stacked>{{data.lableCountry}}</ion-label>\n\n            <ion-input text-center required [placeholder]="data.country" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="country" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isCountryValid">{{data.errorCountry}}</ion-label>\n\n          </ion-item>\n\n          <!---Input field city-->\n\n          <ion-item transparent text-center>\n\n            <ion-label stacked>{{data.lableCity}}</ion-label>\n\n            <ion-input text-center required [placeholder]="data.city" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="city" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isCityValid">{{data.errorCity}}</ion-label>\n\n          </ion-item>\n\n          <ion-item text-center transparent>\n\n            <ion-label stacked>{{data.lableDate}}</ion-label>\n\n            <ion-datetime transparent [displayFormat]="data.dateFormat" [placeholder]="data.birth" [(ngModel)]="birth" [ngModelOptions]="{standalone: true}"></ion-datetime>\n\n            <ion-label error-field no-margin *ngIf="!isBirthValid">{{data.errorBirth}}</ion-label>\n\n          </ion-item>\n\n          <ion-item transparent no-lines no-margin no-padding *ngFor="let item of data.items" (tap)="onEvent(\'onButton\', item)">\n\n            <ion-label text-right item-subtitle>{{item.title}}</ion-label>\n\n            <ion-checkbox item-end [checked]="item.isChecked"></ion-checkbox>\n\n          </ion-item>\n\n          <!---Register button-->\n\n          <button ion-button block default-button text-capitalize box-shadow margin-bottom (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n\n        </form>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\register\layout-1\register.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RegisterLayout1);
    return RegisterLayout1;
}());

//# sourceMappingURL=register-layout-1.js.map

/***/ })

});
//# sourceMappingURL=55.js.map