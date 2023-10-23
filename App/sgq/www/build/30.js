webpackJsonp([30],{

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardLayout3Module", function() { return WizardLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wizard_layout_3__ = __webpack_require__(895);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WizardLayout3Module = /** @class */ (function () {
    function WizardLayout3Module() {
    }
    WizardLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wizard_layout_3__["a" /* WizardLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wizard_layout_3__["a" /* WizardLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__wizard_layout_3__["a" /* WizardLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], WizardLayout3Module);
    return WizardLayout3Module;
}());

//# sourceMappingURL=wizard-layout-3.module.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardLayout3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WizardLayout3 = /** @class */ (function () {
    function WizardLayout3() {
        this.next = true;
        this.finish = true;
        this.next = true;
        this.finish = false;
    }
    WizardLayout3.prototype.changeSlide = function (index) {
        if (index > 0) {
            this.slider.slideNext(300);
        }
        else {
            this.slider.slidePrev(300);
        }
    };
    WizardLayout3.prototype.slideHasChanged = function (index) {
        try {
            this.next = this.slider.getActiveIndex() < (this.slider.length() - 1);
            this.finish = this.slider.isEnd();
        }
        catch (e) { }
    };
    WizardLayout3.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    WizardLayout3.prototype.onEvent = function (event) {
        if (this.events[event]) {
            this.events[event]();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WizardLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WizardLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('wizardSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* Slides */])
    ], WizardLayout3.prototype, "slider", void 0);
    WizardLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'wizard-layout-2',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/wizard/layout-2/wizard.html"*/'<ion-slides #wizardSlider (ionSlideDidChange)="slideHasChanged()" pager="true" *ngIf="data != null">\n  <ion-slide background-size padding *ngFor="let item of data.items;" [ngStyle]="{\'background-image\': \'url(\' + item.backgroundSlider + \')\'}">\n    <!--Wizard Content -->\n    <div wizard-content text-center>\n      <!--Wizard Subitem -->\n      <h3 wizard-subtitle margin-bottom>{{item.welcome}}</h3>\n      <!--Wizard Title -->\n      <h1 margin-bottom wizard-title>{{item.title}}</h1>\n      <!--Wizard Description -->\n      <h3 wizard-description>{{item.description}}</h3>\n    </div>\n  </ion-slide>\n</ion-slides>\n<!--Button section-->\n<div *ngIf="data != null" text-center>\n  <button ion-button default-button wizard-button text-capitalize (click)="changeSlide(1)" *ngIf="next">\n        {{data.btnNext}}\n    </button>\n  <button ion-button default-button wizard-button text-capitalize (click)="onEvent(\'onFinish\')" *ngIf="finish">\n        {{data.btnFinish}}\n    </button>\n</div>\n'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/wizard/layout-2/wizard.html"*/
=======
            selector: 'wizard-layout-3',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\wizard\layout-3\wizard.html"*/'<!--Theme Wizard Big Image With Text -->\n\n<ion-slides #wizardSlider (ionSlideDidChange)="slideHasChanged()" pager="true" *ngIf="data != null">\n\n  <ion-slide background-size padding *ngFor="let item of data.items;" [ngStyle]="{\'background-image\': \'url(\' + item.backgroundImage + \')\'}">\n\n    <!--Wizard Content -->\n\n    <div wizard-content text-center>\n\n      <!--Wizard Subitem -->\n\n      <h3 wizard-subtitle margin-bottom>{{item.subtitle}}</h3>\n\n      <!--Wizard Title -->\n\n      <h1 wizard-title no-margin>{{item.title}}</h1>\n\n    </div>\n\n  </ion-slide>\n\n</ion-slides>\n\n<!--Button section-->\n\n<div *ngIf="data != null" text-center>\n\n  <button ion-button default-button wizard-button text-capitalize (click)="changeSlide(1)" *ngIf="next">\n\n        {{data.btnNext}}\n\n    </button>\n\n  <button ion-button default-button wizard-button text-capitalize (click)="onEvent(\'onFinish\')" *ngIf="finish">\n\n        {{data.btnFinish}}\n\n    </button>\n\n</div>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\wizard\layout-3\wizard.html"*/
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
        }),
        __metadata("design:paramtypes", [])
    ], WizardLayout3);
    return WizardLayout3;
}());

//# sourceMappingURL=wizard-layout-3.js.map

/***/ })

});
//# sourceMappingURL=30.js.map