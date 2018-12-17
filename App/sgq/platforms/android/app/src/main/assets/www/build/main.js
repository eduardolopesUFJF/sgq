webpackJsonp([81],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    MessageService.prototype.exibirMensagem = function (mensagem) {
        var alert = this.alertCtrl.create({
            subTitle: mensagem,
            buttons: ['Ok']
        });
        alert.present();
    };
    MessageService.prototype.exibirMensagemConfirmacao = function (mensagem, acaoConfirmar) {
        var confirm = this.alertCtrl.create({
            message: mensagem,
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Cancelar'
                },
                {
                    text: 'Confirmar',
                    handler: acaoConfirmar
                }
            ]
        });
        confirm.present();
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MessageService);
    return MessageService;
}());

//# sourceMappingURL=message-service.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = /** @class */ (function () {
    function LoadingService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingService.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "<img src=\"assets/svg/grid.svg\"/>"
        });
        this.loading.present();
    };
    LoadingService.prototype.hide = function () {
        this.loading.dismiss();
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = Object.freeze({
    "IS_FIREBASE_ENABLED": false,
    "SHOW_START_WIZARD": false,
    "SUBSCRIBE": false,
    "TOAST": {
        "duration": 5000,
        "position": "top",
        "cssClass": "toast-success"
    },
    "FIREBASE_CONFIG": {
        apiKey: "AIzaSyBZYIJQFQ7jMsTMRLuDcANj8k43TsxbeNE",
        authDomain: "sgq-gdol.firebaseapp.com",
        databaseURL: "https://sgq-gdol.firebaseio.com",
        projectId: "sgq-gdol",
        storageBucket: "sgq-gdol.appspot.com",
        messagingSenderId: "445415293027"
    },
    "MAP_KEY": {
        "apiKey": 'AIzaSyA4-GoZzOqYTvxMe52YQZch5JaCFN6ACLg'
    }
});
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../core/action-sheet/layout-1/action-sheet-layout-1.module": [
		721,
		19
	],
	"../core/action-sheet/layout-2/action-sheet-layout-2.module": [
		722,
		18
	],
	"../core/action-sheet/layout-3/action-sheet-layout-3.module": [
		723,
		80
	],
	"../core/check-box/layout-1/check-box-layout-1.module": [
		724,
		79
	],
	"../core/check-box/layout-2/check-box-layout-2.module": [
		725,
		78
	],
	"../core/check-box/layout-3/check-box-layout-3.module": [
		726,
		77
	],
	"../core/full-screen-gallery/full-screen-gallery.module": [
		727,
		76
	],
	"../core/image-gallery/layout-1/image-gallery-layout-1.module": [
		728,
		75
	],
	"../core/image-gallery/layout-2/image-gallery-layout-2.module": [
		729,
		74
	],
	"../core/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module": [
		730,
		73
	],
	"../core/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module": [
		731,
		72
	],
	"../core/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module": [
		732,
		71
	],
	"../core/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module": [
		733,
		70
	],
	"../core/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module": [
		717,
		69
	],
	"../core/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module": [
		734,
		68
	],
	"../core/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module": [
		735,
		67
	],
	"../core/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module": [
		736,
		66
	],
	"../core/list-view/expandable/layout-1/expandable-layout-1.module": [
		737,
		65
	],
	"../core/list-view/expandable/layout-2/expandable-layout-2.module": [
		738,
		64
	],
	"../core/list-view/expandable/layout-3/expandable-layout-3.module": [
		739,
		63
	],
	"../core/list-view/google-card/layout-1/google-card-layout-1.module": [
		740,
		62
	],
	"../core/list-view/google-card/layout-2/google-card-layout-2.module": [
		741,
		61
	],
	"../core/list-view/google-card/layout-3/google-card-layout-3.module": [
		742,
		60
	],
	"../core/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module": [
		743,
		6
	],
	"../core/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module": [
		744,
		5
	],
	"../core/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module": [
		745,
		4
	],
	"../core/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module": [
		746,
		59
	],
	"../core/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module": [
		747,
		58
	],
	"../core/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module": [
		748,
		57
	],
	"../core/login/layout-1/login-layout-1.module": [
		749,
		56
	],
	"../core/login/layout-2/login-layout-2.module": [
		719,
		11
	],
	"../core/maps/layout-1/maps-layout-1.module": [
		750,
		0
	],
	"../core/maps/layout-2/maps-layout-2.module": [
		751,
		2
	],
	"../core/maps/layout-3/maps-layout-3.module": [
		752,
		1
	],
	"../core/parallax/layout-1/parallax-layout-1.module": [
		753,
		17
	],
	"../core/parallax/layout-2/parallax-layout-2.module": [
		754,
		16
	],
	"../core/parallax/layout-3/parallax-layout-3.module": [
		755,
		15
	],
	"../core/parallax/layout-4/parallax-layout-4.module": [
		756,
		14
	],
	"../core/radio-button/layout-1/radio-button-layout-1.module": [
		757,
		55
	],
	"../core/radio-button/layout-2/radio-button-layout-2.module": [
		758,
		54
	],
	"../core/radio-button/layout-3/radio-button-layout-3.module": [
		759,
		53
	],
	"../core/range/layout-1/range-layout-1.module": [
		760,
		52
	],
	"../core/range/layout-2/range-layout-2.module": [
		761,
		51
	],
	"../core/range/layout-3/range-layout-3.module": [
		762,
		50
	],
	"../core/range/layout-4/range-layout-4.module": [
		763,
		49
	],
	"../core/register/layout-1/register-layout-1.module": [
		764,
		48
	],
	"../core/register/layout-2/register-layout-2.module": [
		765,
		47
	],
	"../core/search-bar/layout-1/search-bar-layout-1.module": [
		766,
		46
	],
	"../core/search-bar/layout-2/search-bar-layout-2.module": [
		767,
		45
	],
	"../core/search-bar/layout-3/search-bar-layout-3.module": [
		768,
		44
	],
	"../core/select/layout-1/select-layout-1.module": [
		718,
		43
	],
	"../core/select/layout-2/select-layout-2.module": [
		769,
		42
	],
	"../core/select/layout-3/select-layout-3.module": [
		720,
		41
	],
	"../core/select/layout-4/select-layout-4.module": [
		770,
		40
	],
	"../core/select/layout-5/select-layout-5.module": [
		771,
		39
	],
	"../core/select/layout-6/select-layout-6.module": [
		772,
		38
	],
	"../core/spinner/spinner.module": [
		773,
		37
	],
	"../core/splash-screen/layout-1/splash-screen-layout-1.module": [
		774,
		36
	],
	"../core/splash-screen/layout-2/splash-screen-layout-2.module": [
		775,
		35
	],
	"../core/splash-screen/layout-3/splash-screen-layout-3.module": [
		776,
		34
	],
	"../core/sub-image-gallery/layout-1/sub-image-gallery-layout-1.module": [
		777,
		33
	],
	"../core/sub-image-gallery/layout-2/sub-image-gallery-layout-2.module": [
		778,
		32
	],
	"../core/tabs/layout-1/tabs-layout-1.module": [
		779,
		31
	],
	"../core/tabs/layout-2/tabs-layout-2.module": [
		780,
		30
	],
	"../core/tabs/layout-3/tabs-layout-3.module": [
		781,
		29
	],
	"../core/toggle/layout-1/toggle-layout-1.module": [
		782,
		28
	],
	"../core/toggle/layout-2/toggle-layout-2.module": [
		783,
		27
	],
	"../core/toggle/layout-3/toggle-layout-3.module": [
		784,
		26
	],
	"../core/wizard/layout-1/wizard-layout-1.module": [
		785,
		25
	],
	"../core/wizard/layout-2/wizard-layout-2.module": [
		786,
		24
	],
	"../core/wizard/layout-3/wizard-layout-3.module": [
		787,
		23
	],
	"../pages/alteracoes/alteracoes.module": [
		788,
		13
	],
	"../pages/area/area.module": [
		789,
		9
	],
	"../pages/area/cadastro/area-cadastro.module": [
		790,
		8
	],
	"../pages/home/home.module": [
		791,
		22
	],
	"../pages/item-area/item-area.module": [
		792,
		7
	],
	"../pages/login/login.component.module": [
		793,
		3
	],
	"../pages/obra/obra.module": [
		794,
		12
	],
	"../pages/verificacao/manter/manter-verificacao.module": [
		795,
		21
	],
	"../pages/verificacao/realizar/realizar-verificacao.module": [
		796,
		20
	],
	"../pages/verificacao/verificacao.module": [
		797,
		10
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_app_settings__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToastError = function (message) {
        var toastItem = __WEBPACK_IMPORTED_MODULE_2__config_app_settings__["a" /* AppSettings */].TOAST;
        toastItem.cssClass = "toast-error";
        toastItem["message"] = message;
        var toast = this.toastCtrl.create(toastItem);
        toast.present();
    };
    ToastService.prototype.presentToastSuccess = function (message) {
        var toastItem = __WEBPACK_IMPORTED_MODULE_2__config_app_settings__["a" /* AppSettings */].TOAST;
        toastItem.cssClass = "toast-success";
        toastItem["message"] = message;
        var toast = this.toastCtrl.create(toastItem);
        toast.present();
    };
    ToastService.prototype.presentToastWarning = function (message) {
        var toastItem = __WEBPACK_IMPORTED_MODULE_2__config_app_settings__["a" /* AppSettings */].TOAST;
        toastItem.cssClass = "toast-warning";
        toastItem["message"] = message;
        var toast = this.toastCtrl.create(toastItem);
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ObraService = /** @class */ (function (_super) {
    __extends(ObraService, _super);
    function ObraService(http) {
        return _super.call(this, http, 'obra/') || this;
    }
    ObraService.prototype.obterTodasAtivas = function () {
        this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
        return this.http.get(this.apiUrl, { headers: this.headers })
            .catch(this.handleError);
    };
    ObraService.prototype.obterIdsTodasAtivas = function () {
        this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
        return this.http.get(this.apiUrl + 'ids', { headers: this.headers })
            .catch(this.handleError);
    };
    ObraService.prototype.obterObraCompleta = function (idObra) {
        this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
        return this.http.get(this.apiUrl + idObra, { headers: this.headers })
            .catch(this.handleError);
    };
    ObraService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ObraService);
    return ObraService;
}(__WEBPACK_IMPORTED_MODULE_1__base_service__["a" /* BaseService */]));

//# sourceMappingURL=obra.service.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(372);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_app_settings__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_toast_service__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_loading_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_message_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_mask_directive__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_date_picker__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__directives_mask_directive__["a" /* MaskDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../core/action-sheet/layout-1/action-sheet-layout-1.module#ActionSheetLayout1Module', name: 'ActionSheetLayout1', segment: 'action-sheet-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/action-sheet/layout-2/action-sheet-layout-2.module#ActionSheetLayout2Module', name: 'ActionSheetLayout2', segment: 'action-sheet-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/action-sheet/layout-3/action-sheet-layout-3.module#ActionSheetLayout3Module', name: 'ActionSheetLayout3', segment: 'action-sheet-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/check-box/layout-1/check-box-layout-1.module#CheckBoxLayout1Module', name: 'CheckBoxLayout1', segment: 'check-box-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/check-box/layout-2/check-box-layout-2.module#CheckBoxLayout2Module', name: 'CheckBoxLayout2', segment: 'check-box-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/check-box/layout-3/check-box-layout-3.module#CheckBoxLayout3Module', name: 'CheckBoxLayout3', segment: 'check-box-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/full-screen-gallery/full-screen-gallery.module#FullScreenGalleryModule', name: 'FullScreenGallery', segment: 'full-screen-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/image-gallery/layout-1/image-gallery-layout-1.module#ImageGalleryLayout1Module', name: 'ImageGalleryLayout1', segment: 'image-gallery-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/image-gallery/layout-2/image-gallery-layout-2.module#ImageGalleryLayout2Module', name: 'ImageGalleryLayout2', segment: 'image-gallery-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module#AppearanceAnimationLayout1Module', name: 'AppearanceAnimationLayout1', segment: 'appearance-animation-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module#AppearanceAnimationLayout2Module', name: 'AppearanceAnimationLayout2', segment: 'appearance-animation-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module#AppearanceAnimationLayout3Module', name: 'AppearanceAnimationLayout3', segment: 'appearance-animation-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module#AppearanceAnimationLayout4Module', name: 'AppearanceAnimationLayout4', segment: 'appearance-animation-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module#AppearanceAnimationLayout5Module', name: 'AppearanceAnimationLayout5', segment: 'appearance-animation-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module#DragAndDropLayout1Module', name: 'DragAndDropLayout1', segment: 'drag-and-drop-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module#DragAndDropLayout2Module', name: 'DragAndDropLayout2', segment: 'drag-and-drop-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module#DragAndDropLayout3Module', name: 'DragAndDropLayout3', segment: 'drag-and-drop-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/expandable/layout-1/expandable-layout-1.module#ExpandableLayout1Module', name: 'ExpandableLayout1', segment: 'expandable-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/expandable/layout-2/expandable-layout-2.module#ExpandableLayout2Module', name: 'ExpandableLayout2', segment: 'expandable-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/expandable/layout-3/expandable-layout-3.module#ExpandableLayout3Module', name: 'ExpandableLayout3', segment: 'expandable-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/google-card/layout-1/google-card-layout-1.module#GoogleCardLayout1Module', name: 'GoogleCardLayout1', segment: 'google-card-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/google-card/layout-2/google-card-layout-2.module#GoogleCardLayout2Module', name: 'GoogleCardLayout2', segment: 'google-card-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/google-card/layout-3/google-card-layout-3.module#GoogleCardLayout3Module', name: 'GoogleCardLayout3', segment: 'google-card-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module#StickyListHeaderLayout1Module', name: 'StickyListHeaderLayout1', segment: 'sticky-list-header-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module#StickyListHeaderLayout2Module', name: 'StickyListHeaderLayout2', segment: 'sticky-list-header-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module#StickyListHeaderLayout3Module', name: 'StickyListHeaderLayout3', segment: 'sticky-list-header-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module#SwipeToDismissLayout1Module', name: 'SwipeToDismissLayout1', segment: 'swipe-to-dismiss-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module#SwipeToDismissLayout2Module', name: 'SwipeToDismissLayout2', segment: 'swipe-to-dismiss-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module#SwipeToDismissLayout3Module', name: 'SwipeToDismissLayout3', segment: 'swipe-to-dismiss-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/login/layout-1/login-layout-1.module#LoginLayout1Module', name: 'LoginLayout1', segment: 'login-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/login/layout-2/login-layout-2.module#LoginLayout2Module', name: 'LoginLayout2', segment: 'login-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/maps/layout-1/maps-layout-1.module#MapsLayout1Module', name: 'MapsLayout1', segment: 'maps-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/maps/layout-2/maps-layout-2.module#MapsLayout2Module', name: 'MapsLayout2', segment: 'maps-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/maps/layout-3/maps-layout-3.module#MapsLayout3Module', name: 'MapsLayout3', segment: 'maps-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/parallax/layout-1/parallax-layout-1.module#ParallaxLayout1Module', name: 'ParallaxLayout1', segment: 'parallax-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/parallax/layout-2/parallax-layout-2.module#ParallaxLayout2Module', name: 'ParallaxLayout2', segment: 'parallax-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/parallax/layout-3/parallax-layout-3.module#ParallaxLayout3Module', name: 'ParallaxLayout3', segment: 'parallax-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/parallax/layout-4/parallax-layout-4.module#ParallaxLayout4Module', name: 'ParallaxLayout4', segment: 'parallax-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/radio-button/layout-1/radio-button-layout-1.module#RadioButtonLayout1Module', name: 'RadioButtonLayout1', segment: 'radio-button-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/radio-button/layout-2/radio-button-layout-2.module#RadioButtonLayout2Module', name: 'RadioButtonLayout2', segment: 'radio-button-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/radio-button/layout-3/radio-button-layout-3.module#RadioButtonLayout3Module', name: 'RadioButtonLayout3', segment: 'radio-button-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/range/layout-1/range-layout-1.module#RangeLayout1Module', name: 'RangeLayout1', segment: 'range-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/range/layout-2/range-layout-2.module#RangeLayout2Module', name: 'RangeLayout2', segment: 'range-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/range/layout-3/range-layout-3.module#RangeLayout3Module', name: 'RangeLayout3', segment: 'range-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/range/layout-4/range-layout-4.module#RangeLayout4Module', name: 'RangeLayout4', segment: 'range-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/register/layout-1/register-layout-1.module#RegisterLayout1Module', name: 'RegisterLayout1', segment: 'register-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/register/layout-2/register-layout-2.module#RegisterLayout2Module', name: 'RegisterLayout2', segment: 'register-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/search-bar/layout-1/search-bar-layout-1.module#SearchBarLayout1Module', name: 'SearchBarLayout1', segment: 'search-bar-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/search-bar/layout-2/search-bar-layout-2.module#SearchBarLayout2Module', name: 'SearchBarLayout2', segment: 'search-bar-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/search-bar/layout-3/search-bar-layout-3.module#SearchBarLayout3Module', name: 'SearchBarLayout3', segment: 'search-bar-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/select/layout-1/select-layout-1.module#SelectLayout1Module', name: 'SelectLayout1', segment: 'select-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/select/layout-2/select-layout-2.module#SelectLayout2Module', name: 'SelectLayout2', segment: 'select-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/select/layout-3/select-layout-3.module#SelectLayout3Module', name: 'SelectLayout3', segment: 'select-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/select/layout-4/select-layout-4.module#SelectLayout4Module', name: 'SelectLayout4', segment: 'select-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/select/layout-5/select-layout-5.module#SelectLayout5Module', name: 'SelectLayout5', segment: 'select-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/select/layout-6/select-layout-6.module#SelectLayout6Module', name: 'SelectLayout6', segment: 'select-layout-6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/spinner/spinner.module#SpinnerModule', name: 'Spinner', segment: 'spinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/splash-screen/layout-1/splash-screen-layout-1.module#SplashScreenLayout1Module', name: 'SplashScreenLayout1', segment: 'splash-screen-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/splash-screen/layout-2/splash-screen-layout-2.module#SplashScreenLayout2Module', name: 'SplashScreenLayout2', segment: 'splash-screen-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/splash-screen/layout-3/splash-screen-layout-3.module#SplashScreenLayout3Module', name: 'SplashScreenLayout3', segment: 'splash-screen-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/sub-image-gallery/layout-1/sub-image-gallery-layout-1.module#SubImageGalleryLayout1Module', name: 'SubImageGalleryLayout1', segment: 'sub-image-gallery-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/sub-image-gallery/layout-2/sub-image-gallery-layout-2.module#SubImageGalleryLayout2Module', name: 'SubImageGalleryLayout2', segment: 'sub-image-gallery-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/tabs/layout-1/tabs-layout-1.module#TabsLayout1Module', name: 'TabsLayout1', segment: 'tabs-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/tabs/layout-2/tabs-layout-2.module#TabsLayout2Module', name: 'TabsLayout2', segment: 'tabs-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/tabs/layout-3/tabs-layout-3.module#TabsLayout3Module', name: 'TabsLayout3', segment: 'tabs-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/toggle/layout-1/toggle-layout-1.module#ToggleLayout1Module', name: 'ToggleLayout1', segment: 'toggle-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/toggle/layout-2/toggle-layout-2.module#ToggleLayout2Module', name: 'ToggleLayout2', segment: 'toggle-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/toggle/layout-3/toggle-layout-3.module#ToggleLayout3Module', name: 'ToggleLayout3', segment: 'toggle-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/wizard/layout-1/wizard-layout-1.module#WizardLayout1Module', name: 'WizardLayout1', segment: 'wizard-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/wizard/layout-2/wizard-layout-2.module#WizardLayout2Module', name: 'WizardLayout2', segment: 'wizard-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../core/wizard/layout-3/wizard-layout-3.module#WizardLayout3Module', name: 'WizardLayout3', segment: 'wizard-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alteracoes/alteracoes.module#AlteracoesPageModule', name: 'AlteracoesPage', segment: 'alteracoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/area/area.module#AreaPageModule', name: 'AreaPage', segment: 'area', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/area/cadastro/area-cadastro.module#AreaCadastroPageModule', name: 'AreaCadastroPage', segment: 'area-cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-area/item-area.module#ItemAreaPageModule', name: 'ItemAreaPage', segment: 'item-area', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.component.module#LoginPageModule', name: 'LoginPage', segment: 'login.component', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/obra/obra.module#ObraPageModule', name: 'ObraPage', segment: 'obra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verificacao/manter/manter-verificacao.module#ManterVerificacaoPageModule', name: 'ManterVerificacaoPage', segment: 'manter-verificacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verificacao/realizar/realizar-verificacao.module#RealizarVerificacaoPageModule', name: 'RealizarVerificacaoPage', segment: 'realizar-verificacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verificacao/verificacao.module#VerificacaoPageModule', name: 'VerificacaoPage', segment: 'verificacao', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_7__config_app_settings__["a" /* AppSettings */].FIREBASE_CONFIG),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__utils_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_11__utils_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_13__utils_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_date_picker__["a" /* DatePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // urlAPI: 'http://localhost:49754/api/',
    urlAPI: 'http://solvercompany.com:7099/api/',
    versao: '1.0.2'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(673);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseService = /** @class */ (function () {
    function BaseService(http, rota) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlAPI + rota;
        if (localStorage.getItem('BancoSchema'))
            this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
    }
    BaseService.prototype.handleError = function (error) {
        if (error.status == '401' || error.status == '403') {
            location.href = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlAPI;
        }
        else {
            return Promise.reject(error);
        }
    };
    BaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], String])
    ], BaseService);
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_message_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_loading_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_obra_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_checklist_service__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_alteracao_service__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_servico_service__ = __webpack_require__(697);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, menu, loadingService, messageService, storage, obraService, alteracaoService, servicoService, alertCtrl, checklistService, network, splashScreen) {
        var _this = this;
        this.menu = menu;
        this.loadingService = loadingService;
        this.messageService = messageService;
        this.storage = storage;
        this.obraService = obraService;
        this.alteracaoService = alteracaoService;
        this.servicoService = servicoService;
        this.alertCtrl = alertCtrl;
        this.checklistService = checklistService;
        this.network = network;
        this.rootPage = "LoginPage";
        this.atualizacao = false;
        this.statusAtualizacao = "";
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            statusBar.backgroundColorByHexString('rgb(33,177,75)');
            _this.definirRoot();
        });
        this.pages = [
            { "title": "Home", "icon": "home", "component": "HomePage" },
            { "title": "Baixar dados", "icon": "cloud-download", "component": "Baixar" },
            { "title": "Listar alterações", "icon": "list", "component": "AlteracoesPage" },
            { "title": "Publicar alterações", "icon": "cloud-upload", "component": "Subir" },
            { "title": "Descartar alterações", "icon": "trash", "component": "Descartar" },
            { "title": "Checklist de área", "icon": "checkmark-circle-outline", "component": "ObraPage" },
            { "title": "Sair", "icon": "exit", "component": "LoginPage" },
        ];
        this.params = {
            "background": "assets/images/background/5.jpg",
            "image": "assets/images/logo/logo.png"
        };
    }
    MyApp.prototype.definirRoot = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('Usuario').then(function (usuario) {
                if (usuario) {
                    localStorage.setItem('isLogged', 'true');
                    localStorage.setItem("Usuario", usuario);
                    _this.storage.get('BancoSchema').then(function (empresa) {
                        localStorage.setItem("BanchoSchema", empresa);
                    });
                    _this.rootPage = "HomePage";
                }
                else {
                    _this.rootPage = "LoginPage";
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        if (page.component != "") {
            if (page.component == 'Baixar') {
                if (this.network.type === 'none') {
                    this.messageService.exibirMensagem("Você precisa de uma conexão com internet para obter os dados e poder então trabalhar offline.");
                }
                else {
                    this.baixarDados();
                }
            }
            else if (page.component == 'Subir') {
                if (this.network.type === 'none') {
                    this.messageService.exibirMensagem("Você precisa de uma conexão com internet para subir os dados trabalhados offline.");
                }
                else {
                    this.subirDados();
                }
            }
            else if (page.component == 'Descartar') {
                this.descartarDados();
            }
            else if (page.component == 'LoginPage') {
                this.storage.ready().then(function () {
                    _this.storage.get('atualizacoes').then(function (atualizacoes) {
                        if (atualizacoes) {
                            _this.messageService.exibirMensagemConfirmacao("Existem atualizações que não foram publicadas, ao sair da sua conta elas serão perdidas. Deseja sair mesmo assim?", function () { _this.deslogar(); });
                        }
                        else {
                            _this.deslogar();
                        }
                    });
                });
            }
            else {
                this.nav.setRoot(page.component);
            }
        }
    };
    MyApp.prototype.deslogar = function () {
        localStorage.clear();
        this.storage.clear();
        this.nav.setRoot("LoginPage");
    };
    MyApp.prototype.baixarDados = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                if (atualizacoes) {
                    _this.messageService.exibirMensagem("Existem atualizações que não foram publicadas, publique-as ou descarte-as antes de baixar novos dados.");
                }
                else {
                    _this.obterChecklistServico();
                    _this.atualizacao = false;
                    _this.obterObras();
                }
            });
        });
    };
    MyApp.prototype.subirDados = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                if (atualizacoes) {
                    _this.confirmarAtualizarRepositorio(atualizacoes);
                }
                else {
                    _this.messageService.exibirMensagem("Não há nada para publicar.");
                }
            });
        });
    };
    MyApp.prototype.descartarDados = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                if (atualizacoes) {
                    _this.confirmarDescartarDados();
                }
                else {
                    _this.messageService.exibirMensagem("Não há nada para descartar.");
                }
            });
        });
    };
    MyApp.prototype.confirmarDescartarDados = function () {
        var _this = this;
        var mensagem = "Todas as alterações feitas desde a última publicação serão perdidas. Deseja realmente descartá-las?";
        this.messageService.exibirMensagemConfirmacao(mensagem, function () { _this.executarDescartarDados(); });
    };
    MyApp.prototype.executarDescartarDados = function () {
        var _this = this;
        this.storage.remove('atualizacoes');
        this.storage.ready().then(function () {
            _this.storage.get('obrasBackup').then(function (obrasBackup) {
                _this.storage.set('obras', obrasBackup);
                _this.nav.setRoot("HomePage");
            });
        });
    };
    MyApp.prototype.obterObras = function () {
        var _this = this;
        this.loadingService.show();
        this.obraService.obterIdsTodasAtivas().subscribe(function (idsObra) {
            _this.obterObraCompleta(idsObra);
        }, function (error) {
            _this.loadingService.hide();
            _this.messageService.exibirMensagem("Falha na comunicação com o servidor, contate o suporte.");
        });
    };
    MyApp.prototype.obterObraCompleta = function (idsObra) {
        var _this = this;
        var obras = [];
        var qtdErros = 0;
        idsObra.forEach(function (idObra) {
            _this.obraService.obterObraCompleta(idObra).subscribe(function (obra) {
                obras.push(obra);
                _this.setarValoresObras(obras, idsObra, qtdErros);
            }, function (error) {
                qtdErros++;
                _this.setarValoresObras(obras, idsObra, qtdErros);
            });
        });
    };
    MyApp.prototype.setarValoresObras = function (obras, idsObra, qtdErros) {
        if ((obras.length + qtdErros) >= idsObra.length) {
            this.storage.set('obras', obras);
            this.storage.set('obrasBackup', obras);
            this.storage.set('ultimoDownload', new Date());
            this.nav.setRoot("HomePage");
            this.loadingService.hide();
            if (this.statusAtualizacao == "") {
                if (qtdErros > 0) {
                    this.messageService.exibirMensagem("Ocorreu erro durante a busca de algumas obras.");
                }
                else {
                    if (this.atualizacao) {
                        this.messageService.exibirMensagem("Atualizações publicadas com sucesso.");
                    }
                    else {
                        this.messageService.exibirMensagem("Dados recuperados do servidor com sucesso.");
                    }
                }
            }
            else {
                this.messageService.exibirMensagem("Algumas atualizações não foram realizadas: " + this.statusAtualizacao);
            }
            this.statusAtualizacao = "";
        }
    };
    MyApp.prototype.obterChecklistServico = function () {
        var _this = this;
        this.checklistService.obterTodas().subscribe(function (data) {
            _this.storage.set('itensChecklist', data);
        }, function (error) {
            _this.messageService.exibirMensagem("Falha na comunicação com o servidor, contate o suporte.");
        });
    };
    MyApp.prototype.confirmarAtualizarRepositorio = function (atualizacoes) {
        var _this = this;
        var mensagem = "Deseja atualizar o banco com as alterações realizadas?";
        this.messageService.exibirMensagemConfirmacao(mensagem, function () { _this.atualizarRepositorio(atualizacoes); });
    };
    MyApp.prototype.atualizarRepositorio = function (atualizacoes) {
        var _this = this;
        this.loadingService.show();
        this.alteracaoService.publicar(atualizacoes).subscribe(function (data) {
            _this.storage.set('ultimoUpload', new Date());
            _this.storage.remove('atualizacoes');
            _this.nav.setRoot("HomePage");
            _this.loadingService.hide();
            _this.atualizacao = true;
            _this.statusAtualizacao = data;
            _this.obterObras();
        }, function (error) {
            _this.loadingService.hide();
            _this.messageService.exibirMensagem("Falha na comunicação com o servidor, contate o suporte.");
        });
    };
    Object.defineProperty(MyApp.prototype, "isLogged", {
        get: function () {
            return localStorage.getItem('isLogged');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyApp.prototype, "empresa", {
        get: function () {
            return localStorage.getItem('BancoSchema');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyApp.prototype, "usuario", {
        get: function () {
            return localStorage.getItem('Usuario');
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\app\app.html"*/'<!---Settings Main Header-->\n<ion-split-pane when="md">\n    <!-- Menu Main Top -->\n    <ion-menu [content]="content" *ngIf="params != null">\n        <!-- Menu Main List -->\n        <ion-content *ngIf="isLogged == \'true\'">\n            <div header-background-image>\n                <ion-grid>\n                    <ion-row>\n                        <ion-col col-5>\n                            <img [src]="params.image">\n                        </ion-col>\n                        <ion-col col-7>\n                            <h1 ion-text header-title text-wrap>{{empresa}}</h1>\n                            <h2 ion-text header-title text-wrap>{{usuario}}</h2>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </div>\n            <ion-list no-margin>\n                <button menuClose ion-item default-item item-title main-menu no-lines *ngFor="let p of pages" (click)="openPage(p)">\n                    <ion-icon outline icon-small icon-left>\n                        <ion-icon [name]="p.icon"></ion-icon>\n                    </ion-icon>\n                    {{p.title}}\n                </button>\n            </ion-list>\n        </ion-content>\n    </ion-menu>\n    <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n    <ion-nav [root]="rootPage" #content main swipeBackEnabled="false" main></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_obra_service__["a" /* ObraService */], __WEBPACK_IMPORTED_MODULE_9__services_checklist_service__["a" /* ChecklistService */], __WEBPACK_IMPORTED_MODULE_10__services_alteracao_service__["a" /* AlteracaoService */], __WEBPACK_IMPORTED_MODULE_11__services_servico_service__["a" /* ServicoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__utils_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_5__utils_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__services_obra_service__["a" /* ObraService */],
            __WEBPACK_IMPORTED_MODULE_10__services_alteracao_service__["a" /* AlteracaoService */],
            __WEBPACK_IMPORTED_MODULE_11__services_servico_service__["a" /* ServicoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__services_checklist_service__["a" /* ChecklistService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChecklistService = /** @class */ (function (_super) {
    __extends(ChecklistService, _super);
    function ChecklistService(http) {
        return _super.call(this, http, 'checklist/') || this;
    }
    ChecklistService.prototype.obterTodas = function () {
        this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
        return this.http.get(this.apiUrl + 'itens-ativos/', { headers: this.headers })
            .catch(this.handleError);
    };
    ChecklistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ChecklistService);
    return ChecklistService;
}(__WEBPACK_IMPORTED_MODULE_1__base_service__["a" /* BaseService */]));

//# sourceMappingURL=checklist.service.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlteracaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlteracaoService = /** @class */ (function (_super) {
    __extends(AlteracaoService, _super);
    function AlteracaoService(http) {
        return _super.call(this, http, 'alteracao/') || this;
    }
    AlteracaoService.prototype.publicar = function (alteracoes) {
        this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
        return this.http.post(this.apiUrl, alteracoes, { headers: this.headers })
            .catch(this.handleError);
    };
    AlteracaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], AlteracaoService);
    return AlteracaoService;
}(__WEBPACK_IMPORTED_MODULE_1__base_service__["a" /* BaseService */]));

//# sourceMappingURL=alteracao.service.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicoService = /** @class */ (function (_super) {
    __extends(ServicoService, _super);
    function ServicoService(http) {
        return _super.call(this, http, 'servico/') || this;
    }
    ServicoService.prototype.obterServicos = function (areaId) {
        this.headers = this.headers.set('BancoSchema', localStorage.getItem('BancoSchema'));
        return this.http.get(this.apiUrl + areaId, { headers: this.headers })
            .catch(this.handleError);
    };
    ServicoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ServicoService);
    return ServicoService;
}(__WEBPACK_IMPORTED_MODULE_1__base_service__["a" /* BaseService */]));

//# sourceMappingURL=servico.service.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskDirective; });
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var MaskDirective = /** @class */ (function () {
    function MaskDirective(pattern) {
        this.pattern = pattern;
    }
    MaskDirective.prototype.onInputChange = function (e) {
        try {
            var value = e.target.value, caret = e.target.selectionStart, pattern = this.pattern, reserve = pattern.replace(/\*/, 'g'), applied = '', ordinal = 0;
            if (e.keyCode === 8 || e.key === 'Backspace' || e.keyCode === 46 || e.key === 'Delete') {
                if (value.length) {
                    //remove all trailing formatting
                    while (value.length && pattern[value.length] && pattern[value.length] !== '*') {
                        value = value.substring(0, value.length - 1);
                    }
                    //remove all leading formatting to restore placeholder
                    if (pattern.substring(0, value.length).indexOf('*') < 0) {
                        value = value.substring(0, value.length - 1);
                    }
                }
            }
            //apply mask characters 
            for (var i = 0; i < value.length; i++) {
                //enforce pattern limit
                if (i < pattern.length) {
                    //match mask
                    if (value[i] === pattern[ordinal]) {
                        applied += value[i];
                        ordinal++;
                    }
                    else if (reserve.indexOf(value[i]) > -1) {
                        //skip other reserved characters
                    }
                    else {
                        //apply leading formatting
                        while (ordinal < pattern.length && pattern[ordinal] !== '*') {
                            applied += pattern[ordinal];
                            ordinal++;
                        }
                        applied += value[i];
                        ordinal++;
                        //apply trailing formatting
                        while (ordinal < pattern.length && pattern[ordinal] !== '*') {
                            applied += pattern[ordinal];
                            ordinal++;
                        }
                    }
                }
            }
            e.target.value = applied;
            if (caret < value.length) {
                e.target.setSelectionRange(caret, caret);
            }
        }
        catch (ex) {
            console.error(ex.message);
        }
    };
    MaskDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[mask]',
            host: {
                '(keyup)': 'onInputChange($event)'
            }
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Attribute */])('mask')),
        __metadata("design:paramtypes", [String])
    ], MaskDirective);
    return MaskDirective;
}());

//# sourceMappingURL=mask.directive.js.map

/***/ })

},[367]);
//# sourceMappingURL=main.js.map