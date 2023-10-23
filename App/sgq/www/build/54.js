webpackJsonp([54],{

<<<<<<< HEAD
/***/ 738:
=======
/***/ 740:
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLayout2Module", function() { return RegisterLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_layout_1__ = __webpack_require__(842);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_layout_2__ = __webpack_require__(873);
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterLayout2Module = /** @class */ (function () {
    function RegisterLayout2Module() {
    }
    RegisterLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_layout_2__["a" /* RegisterLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_layout_2__["a" /* RegisterLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register_layout_2__["a" /* RegisterLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], RegisterLayout2Module);
    return RegisterLayout2Module;
}());

//# sourceMappingURL=register-layout-2.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 842:
=======
/***/ 873:
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterLayout2; });
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

var RegisterLayout2 = /** @class */ (function () {
    function RegisterLayout2() {
        var _this = this;
        this.isEmailValid = true;
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        this.isCityValid = true;
        this.isCountryValid = true;
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
                    'email': _this.email
                });
            }
        };
    }
    RegisterLayout2.prototype.validate = function () {
        this.isEmailValid = true;
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        this.isCityValid = true;
        this.isCountryValid = true;
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
        this.isEmailValid = this.regex.test(this.email);
        return this.isEmailValid &&
            this.isPasswordValid &&
            this.isUsernameValid &&
            this.isCityValid &&
            this.isCountryValid;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RegisterLayout2.prototype, "events", void 0);
    RegisterLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'register-layout-1',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/register/layout-1/register.html"*/'<!-- Themes Register + logo -->\n<!--Content -->\n<ion-content has-header *ngIf="data != null" background-size [ngStyle]="{\'background-image\': \'url(\' + data.background + \')\'}">\n  <ion-grid no-padding>\n    <ion-row padding-horizontal align-items-center *ngIf="data != null">\n      <ion-col col-12 no-padding>\n        <ion-item transparent no-padding no-lines>\n          <!---Logo-->\n          <img item-start [src]="data.logo">\n          <!---Buttin Skip-->\n          <div item-content no-margin no-padding>\n            <button ion-button text-capitalize button-clear clear item-end no-margin no-padding (click)="onEvent(\'onSkip\')">{{data.skip}}</button>\n          </div>\n        </ion-item>\n      </ion-col>\n      <ion-col no-padding text-center col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <!--Form Title-->\n        <h1 register-title text-wrap margin-bottom>{{data.title}}</h1>\n        <!--Form-->\n        <form>\n          <!---Input field username-->\n          <ion-item transparent text-center>\n            <ion-label stacked>{{data.lableUsername}}</ion-label>\n            <ion-input text-center required [placeholder]="data.username" type="text" [(ngModel)]="username" [ngModelOptions]="{standalone: true}"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isUsernameValid">{{data.errorUser}}</ion-label>\n          </ion-item>\n          <!---Input field password-->\n          <ion-item transparent text-center>\n            <ion-label stacked>{{data.lablePassword}}</ion-label>\n            <ion-input text-center required [placeholder]="data.password" type="password" [(ngModel)]="password" [ngModelOptions]="{standalone: true}"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label>\n          </ion-item>\n          <!---Input field email-->\n          <ion-item transparent text-center>\n            <ion-label stacked>{{data.lableEmail}}</ion-label>\n            <ion-input text-center required [placeholder]="data.email" type="email" [ngModelOptions]="{standalone: true}" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="email"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isEmailValid">{{data.errorEmail}}</ion-label>\n          </ion-item>\n          <!---Input field country-->\n          <ion-item transparent text-center>\n            <ion-label stacked>{{data.lableCountry}}</ion-label>\n            <ion-input text-center required [placeholder]="data.country" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="country" [ngModelOptions]="{standalone: true}"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isCountryValid">{{data.errorCountry}}</ion-label>\n          </ion-item>\n          <!---Input field city-->\n          <ion-item transparent text-center>\n            <ion-label stacked>{{data.lableCity}}</ion-label>\n            <ion-input text-center required [placeholder]="data.city" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="city" [ngModelOptions]="{standalone: true}"></ion-input>\n            <ion-label error-field no-margin *ngIf="!isCityValid">{{data.errorCity}}</ion-label>\n          </ion-item>\n          <ion-item text-center transparent>\n            <ion-label stacked>{{data.lableDate}}</ion-label>\n            <ion-datetime transparent [displayFormat]="data.dateFormat" [placeholder]="data.birth" [(ngModel)]="birth" [ngModelOptions]="{standalone: true}"></ion-datetime>\n            <ion-label error-field no-margin *ngIf="!isBirthValid">{{data.errorBirth}}</ion-label>\n          </ion-item>\n          <ion-item transparent no-lines no-margin no-padding *ngFor="let item of data.items" (tap)="onEvent(\'onButton\', item)">\n            <ion-label text-right item-subtitle>{{item.title}}</ion-label>\n            <ion-checkbox item-end [checked]="item.isChecked"></ion-checkbox>\n          </ion-item>\n          <!---Register button-->\n          <button ion-button block default-button text-capitalize box-shadow margin-bottom (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/register/layout-1/register.html"*/
=======
            selector: 'register-layout-2',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\register\layout-2\register.html"*/'<!-- Themes Register + Image -->\n\n\n\n<!--Content -->\n\n<ion-content has-header no-padding background-size *ngIf="data != null" [ngStyle]="{\'background-image\': \'url(\' + data.background + \')\'}">\n\n  <ion-grid no-padding>\n\n    <ion-row padding-horizontal align-items-center>\n\n      <ion-col text-center col-12 margin-bottom>\n\n        <!-- Header Title -->\n\n        <h1 register-title no-margin text-wrap>{{data.title}}</h1>\n\n      </ion-col>\n\n      <ion-col text-center col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <!--Form-->\n\n        <form>\n\n          <ion-item transparent text-center>\n\n            <!---Input field username-->\n\n            <ion-label stacked>{{data.lableUsername}}</ion-label>\n\n            <ion-input text-center required [placeholder]="data.username" type="text" [(ngModel)]="username" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isUsernameValid">{{data.errorUser}}</ion-label>\n\n          </ion-item>\n\n          <ion-item transparent text-center>\n\n            <!---Input field password-->\n\n            <ion-label stacked>{{data.lablePassword}}</ion-label>\n\n            <ion-input text-center required [placeholder]="data.password" type="password" [(ngModel)]="password" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label>\n\n          </ion-item>\n\n          <ion-item transparent text-center>\n\n            <!---Input field email-->\n\n            <ion-label stacked>{{data.lableEmail}}</ion-label>\n\n            <ion-input text-center required [placeholder]="data.email" type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="email" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isEmailValid">{{data.errorEmail}}</ion-label>\n\n          </ion-item>\n\n          <ion-item transparent text-center>\n\n            <!---Input field country-->\n\n            <ion-label stacked>{{data.lableCountry}}</ion-label>\n\n            <ion-input text-center required [placeholder]="data.country" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="country" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isCountryValid">{{data.errorCountry}}</ion-label>\n\n          </ion-item>\n\n          <ion-item transparent text-center>\n\n            <!---Input field city-->\n\n            <ion-label stacked>{{data.lableCity}}</ion-label>\n\n            <ion-input text-center required [placeholder]="data.city" type="text" pattern="[a-zA-Z ]*" required [(ngModel)]="city" [ngModelOptions]="{standalone: true}"></ion-input>\n\n            <ion-label error-field no-margin *ngIf="!isCityValid">{{data.errorCity}}</ion-label>\n\n          </ion-item>\n\n          <!---Register button-->\n\n          <button ion-button block default-button text-capitalize box-shadow margin-bottom margin-top (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n\n        </form>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\register\layout-2\register.html"*/
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
        }),
        __metadata("design:paramtypes", [])
    ], RegisterLayout2);
    return RegisterLayout2;
}());

//# sourceMappingURL=register-layout-2.js.map

/***/ })

});
//# sourceMappingURL=54.js.map