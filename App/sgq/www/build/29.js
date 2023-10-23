webpackJsonp([29],{

<<<<<<< HEAD
/***/ 761:
=======
/***/ 768:
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wizard_layout_3__ = __webpack_require__(865);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(903);
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 865:
=======
/***/ 903:
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navParams, events) {
        this.navParams = navParams;
        this.events = events;
        this.Math = Math;
        this.pages = [
            { "title": "Baixar dados", "icon": "cloud-download", "component": "Baixar", "color": "green" },
            { "title": "Publicar alterações", "icon": "cloud-upload", "component": "Subir", "color": "green" },
            { "title": "Listar alterações", "icon": "list", "component": "AlteracoesPage", "color": "orange" },
            { "title": "Descartar alterações", "icon": "trash", "component": "Descartar", "color": "red" },
            { "title": "Cadastrar Checklist", "icon": "checkmark-circle-outline", "component": "ChecklistPage", "color": "orange" },
            { "title": "Acesso ás obras", "icon": "build", "component": "ObraPage", "color": "green" },
            { "title": "Sair", "icon": "exit", "component": "LoginPage", "color": "red" },
        ];
    }
    Object.defineProperty(HomePage.prototype, "progressbarAtivo", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */].progressbarAtivo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "progress", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */].progress;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "segundos", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */].segundos;
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.openPage = function (page) {
        this.events.publish('openPage', page);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'wizard-layout-3',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/wizard/layout-3/wizard.html"*/'<!--Theme Wizard Big Image With Text -->\n<ion-slides #wizardSlider (ionSlideDidChange)="slideHasChanged()" pager="true" *ngIf="data != null">\n  <ion-slide background-size padding *ngFor="let item of data.items;" [ngStyle]="{\'background-image\': \'url(\' + item.backgroundImage + \')\'}">\n    <!--Wizard Content -->\n    <div wizard-content text-center>\n      <!--Wizard Subitem -->\n      <h3 wizard-subtitle margin-bottom>{{item.subtitle}}</h3>\n      <!--Wizard Title -->\n      <h1 wizard-title no-margin>{{item.title}}</h1>\n    </div>\n  </ion-slide>\n</ion-slides>\n<!--Button section-->\n<div *ngIf="data != null" text-center>\n  <button ion-button default-button wizard-button text-capitalize (click)="changeSlide(1)" *ngIf="next">\n        {{data.btnNext}}\n    </button>\n  <button ion-button default-button wizard-button text-capitalize (click)="onEvent(\'onFinish\')" *ngIf="finish">\n        {{data.btnFinish}}\n    </button>\n</div>\n'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/wizard/layout-3/wizard.html"*/
=======
            selector: 'page-home',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar class="pad-nav-page">\n    <button ion-button menuToggle>\n      <ion-icon class="icon-menu" name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h1 *ngIf="!progressbarAtivo" padding text-center class="boas-vindas">Bem vindo ao SGQ Checklist</h1>\n  <h1 *ngIf="!progressbarAtivo" padding text-center class="instrucao">Somente inicie alguma atividade após <b>Baixar Dados</b></h1>\n  <ion-grid *ngIf="!progressbarAtivo">\n    <ion-row>\n      <button menuClose ion-item default-item item-title main-menu no-lines class="mt-6 mb-6" [ngClass]="p.color" *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon outline icon-small icon-left>\n          <ion-icon [name]="p.icon"></ion-icon>\n        </ion-icon>\n        {{p.title}}\n      </button>\n    </ion-row>\n  </ion-grid>\n  <div class="progress-outer" *ngIf="progressbarAtivo">\n    <div class="progress-inner" [style.width]="progress + \'%\'">\n      {{this.Math.round(progress*100)/100}}%\n    </div>\n  </div>\n  <h2 *ngIf="progressbarAtivo" text-center style="color: red; font-weight: bold;">{{segundos}} segundos</h2>\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\home\home.html"*/
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=29.js.map