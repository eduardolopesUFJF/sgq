webpackJsonp([21,50],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLayout1Module", function() { return SelectLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_layout_1__ = __webpack_require__(818);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_layout_1__["a" /* SelectLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_layout_1__["a" /* SelectLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__select_layout_1__["a" /* SelectLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SelectLayout1Module);
    return SelectLayout1Module;
}());

//# sourceMappingURL=select-layout-1.module.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayout2Module", function() { return LoginLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_layout_2__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_layout_1_select_layout_1_module__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__ = __webpack_require__(352);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */]),
                __WEBPACK_IMPORTED_MODULE_3__select_layout_1_select_layout_1_module__["SelectLayout1Module"],
                __WEBPACK_IMPORTED_MODULE_4_ionic_selectable__["a" /* IonicSelectableModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_2__["a" /* LoginLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginLayout2Module);
    return LoginLayout2Module;
}());

//# sourceMappingURL=login-layout-2.module.js.map

/***/ }),

/***/ 818:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], SelectLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('events'),
        __metadata("design:type", Object)
    ], SelectLayout1.prototype, "events", void 0);
    SelectLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'select-layout-1',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/select/layout-1/select.html"*/'<ion-item color="secondary" no-lines *ngIf="data != null">\n    <ion-label>{{data.title}}</ion-label>\n    <ion-select [(ngModel)]="data.selectedItem" multiple="false">\n        <ion-option value="0">Selecione</ion-option>\n        <ion-option *ngFor="let item of data.items; let i= index" [value]="item.id">{{item.title}}</ion-option>\n    </ion-select>\n</ion-item>'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/select/layout-1/select.html"*/
=======
            selector: 'select-layout-1',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\select\layout-1\select.html"*/'<ion-item color="secondary" no-lines *ngIf="data != null">\n\n    <ion-label>{{data.title}}</ion-label>\n\n    <ion-select [(ngModel)]="data.selectedItem" multiple="false">\n\n        <ion-option value="0">Selecione</ion-option>\n\n        <ion-option *ngFor="let item of data.items; let i= index" [value]="item.id">{{item.title}}</ion-option>\n\n    </ion-select>\n\n</ion-item>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\select\layout-1\select.html"*/
>>>>>>> 1a8b13dc8a7e16c35a632b42a8cb34876192fe7d
        }),
        __metadata("design:paramtypes", [])
    ], SelectLayout1);
    return SelectLayout1;
}());

//# sourceMappingURL=select-layout-1.js.map

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_toast_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
<<<<<<< HEAD
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
=======
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
>>>>>>> 1a8b13dc8a7e16c35a632b42a8cb34876192fe7d
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var LoginLayout2 = /** @class */ (function () {
    function LoginLayout2(toastService, storage) {
        var _this = this;
        this.toastService = toastService;
        this.storage = storage;
        this.background = '';
        this.passwordType = 'password';
        this.salvarSenha = true;
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
                        'empresa': _this.empresa.title
                    });
                }
            }
            else {
                if (_this.events[event]) {
                    _this.events[event]();
                }
            }
        };
        this.popularSenhaSalva();
    }
    LoginLayout2.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType == 'text' ? 'password' : 'text';
    };
    LoginLayout2.prototype.popularSenhaSalva = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, senhaArmazenada, empresaArmazenada;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.storage.ready()];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.storage.get('UsuarioSalvo')];
                    case 2:
                        _a.usuario = _b.sent();
                        if (!this.usuario) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.storage.get('Senha:' + this.usuario.toUpperCase())];
                    case 3:
                        senhaArmazenada = _b.sent();
                        if (senhaArmazenada) {
                            this.senha = senhaArmazenada;
                        }
                        else {
                            this.senha = "";
                        }
                        return [4 /*yield*/, this.storage.get('EmpresaSalva')];
                    case 4:
                        empresaArmazenada = _b.sent();
                        if (empresaArmazenada) {
                            this.empresa = { id: 1, title: empresaArmazenada };
                        }
                        else {
                            this.empresa = null;
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        this.usuario = "";
                        this.senha = "";
                        this.empresa = null;
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginLayout2.prototype, "events", void 0);
    LoginLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'login-layout-2',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/login/layout-2/login.html"*/'<ion-content has-header *ngIf="data != null" background-size style="background-color: white;">\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-row padding-left padding-right align-items-center>\n      <ion-col *ngIf="data.possuiLogo" text-center col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <img [src]="data.logo">\n      </ion-col>\n      <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <ion-item transparent text-center no-lines>\n          <h1 ion-text login-title no-margin text-wrap text-capitalize>{{data.title}}</h1>\n        </ion-item>\n        <form #loginForm="ngForm">\n          <ion-item text-center transparent>\n            <ion-label stacked>EMPRESA</ion-label>\n            <ionic-selectable item-content [(ngModel)]="empresa"\n                [items]="data.selectData.items" itemValueField="title" itemTextField="title" [canSearch]="true" name="empresa" required>\n            </ionic-selectable>\n          </ion-item>\n          <!---Input field username-->\n          <ion-item text-center transparent>\n            <ion-label stacked>{{data.labelUsername}}</ion-label>\n            <ion-input text-center required type="text" [placeholder]="data.username" [(ngModel)]="usuario" name="usuario"></ion-input>\n          </ion-item>\n          <!---Input field password-->\n          <ion-item text-center transparent>\n            <ion-label stacked>{{data.labelPassword}}</ion-label>\n            <ion-input required text-center [type]="passwordType" clearOnEdit="false" [placeholder]="data.password"\n              [(ngModel)]="senha" name="senha" style="margin: 0 !important;"></ion-input>\n            <ion-icon item-end name="eye" class="passwordIcon" (click)="hideShowPassword()"></ion-icon>\n          </ion-item>\n          <ion-item transparent>\n            <ion-label>Salvar Senha</ion-label>\n            <ion-checkbox [(ngModel)]="salvarSenha" name="salvarSenha" (ionChange)="onEvent(\'onCheckSavePassword\')"></ion-checkbox>\n          </ion-item>\n          <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: black !important;"\n            (click)="onEvent(\'onLogin\', loginForm.valid)">{{data.login}}</button>\n          <button *ngIf="data.possuiRegistrar" ion-button default-button block text-capitalize margin-bottom (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n          <button *ngIf="data.possuiEsqueciSenha" ion-button button-clear text-capitalize clear float-right no-padding\n            no-margin>{{data.forgotPassword}}</button>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/login/layout-2/login.html"*/
=======
            selector: 'login-layout-2',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\login\layout-2\login.html"*/'<ion-content has-header *ngIf="data != null" background-size style="background-color: white;">\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row padding-left padding-right align-items-center>\n\n      <ion-col *ngIf="data.possuiLogo" text-center col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <img [src]="data.logo">\n\n      </ion-col>\n\n      <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <ion-item transparent text-center no-lines>\n\n          <h1 ion-text login-title no-margin text-wrap text-capitalize>{{data.title}}</h1>\n\n        </ion-item>\n\n        <form #loginForm="ngForm">\n\n          <ion-item text-center transparent>\n\n            <ion-label stacked>EMPRESA</ion-label>\n\n            <ionic-selectable item-content [(ngModel)]="empresa"\n\n                [items]="data.selectData.items" itemValueField="title" itemTextField="title" [canSearch]="true" name="empresa" required>\n\n            </ionic-selectable>\n\n          </ion-item>\n\n          <!---Input field username-->\n\n          <ion-item text-center transparent>\n\n            <ion-label stacked>{{data.labelUsername}}</ion-label>\n\n            <ion-input text-center required type="text" [placeholder]="data.username" [(ngModel)]="usuario" name="usuario"></ion-input>\n\n          </ion-item>\n\n          <!---Input field password-->\n\n          <ion-item text-center transparent>\n\n            <ion-label stacked>{{data.labelPassword}}</ion-label>\n\n            <ion-input required text-center [type]="passwordType" clearOnEdit="false" [placeholder]="data.password"\n\n              [(ngModel)]="senha" name="senha" style="margin: 0 !important;"></ion-input>\n\n            <ion-icon item-end name="eye" class="passwordIcon" (click)="hideShowPassword()"></ion-icon>\n\n          </ion-item>\n\n          <ion-item transparent>\n\n            <ion-label>Salvar Senha</ion-label>\n\n            <ion-checkbox [(ngModel)]="salvarSenha" name="salvarSenha" (ionChange)="onEvent(\'onCheckSavePassword\')"></ion-checkbox>\n\n          </ion-item>\n\n          <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: black !important;"\n\n            (click)="onEvent(\'onLogin\', loginForm.valid)">{{data.login}}</button>\n\n          <button *ngIf="data.possuiRegistrar" ion-button default-button block text-capitalize margin-bottom (click)="onEvent(\'onRegister\')">{{data.register}}</button>\n\n          <button *ngIf="data.possuiEsqueciSenha" ion-button button-clear text-capitalize clear float-right no-padding\n\n            no-margin>{{data.forgotPassword}}</button>\n\n        </form>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\login\layout-2\login.html"*/
>>>>>>> 1a8b13dc8a7e16c35a632b42a8cb34876192fe7d
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__utils_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__utils_toast_service__["a" /* ToastService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object])
    ], LoginLayout2);
    return LoginLayout2;
    var _a, _b;
}());

//# sourceMappingURL=login-layout-2.js.map

/***/ })

});
//# sourceMappingURL=21.js.map