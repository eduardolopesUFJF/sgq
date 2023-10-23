webpackJsonp([14],{

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistCadastroPageModule", function() { return ChecklistCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checklist_cadastro__ = __webpack_require__(872);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChecklistCadastroPageModule = /** @class */ (function () {
    function ChecklistCadastroPageModule() {
    }
    ChecklistCadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checklist_cadastro__["a" /* ChecklistCadastroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checklist_cadastro__["a" /* ChecklistCadastroPage */])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ChecklistCadastroPageModule);
    return ChecklistCadastroPageModule;
}());

//# sourceMappingURL=checklist-cadastro.module.js.map

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UUID = (function () {
    function UUID() {
        // no-op
    }
    UUID.UUID = function () {
        if (typeof (window) !== "undefined" && typeof (window.crypto) !== "undefined" && typeof (window.crypto.getRandomValues) !== "undefined") {
            // If we have a cryptographically secure PRNG, use that
            // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
            var buf = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            return (this.pad4(buf[0]) + this.pad4(buf[1]) + "-" + this.pad4(buf[2]) + "-" + this.pad4(buf[3]) + "-" + this.pad4(buf[4]) + "-" + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
        }
        else {
            // Otherwise, just use Math.random
            // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
            return this.random4() + this.random4() + "-" + this.random4() + "-" + this.random4() + "-" +
                this.random4() + "-" + this.random4() + this.random4() + this.random4();
        }
    };
    UUID.pad4 = function (num) {
        var ret = num.toString(16);
        while (ret.length < 4) {
            ret = "0" + ret;
        }
        return ret;
    };
    UUID.random4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return UUID;
}());
exports.UUID = UUID;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemChecklist; });
var ItemChecklist = /** @class */ (function () {
    function ItemChecklist(values) {
        if (values === void 0) { values = {}; }
        this.id = 0;
        this.campo1 = "";
        this.campo2 = "";
        this.campo3 = "";
        this.campo4 = "";
        this.itensChecklistServico = [];
        Object.assign(this, values);
    }
    return ItemChecklist;
}());

//# sourceMappingURL=item-checklist.js.map

/***/ }),

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChecklistCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_uuid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChecklistCadastroPage = /** @class */ (function () {
    function ChecklistCadastroPage(storage, navParams, modalCtrl, toastService, viewCtrl) {
        this.storage = storage;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.toastService = toastService;
        this.viewCtrl = viewCtrl;
        this.checklist = new __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__["a" /* ItemChecklist */]();
        this.checklist = this.navParams.data.checklist ? new __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__["a" /* ItemChecklist */](this.navParams.data.checklist) : new __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__["a" /* ItemChecklist */]();
        this.checklist.tipo = this.checklist.tipo ? this.checklist.tipo.slice(0, 1) : null;
    }
    ChecklistCadastroPage.prototype.voltar = function () {
        this.viewCtrl.dismiss(null);
    };
    ChecklistCadastroPage.prototype.salvar = function (formValido) {
        if (formValido && this.checklist.tipo) {
            this.checklist.idGuid = __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__["UUID"].UUID();
            this.adicionarItens();
        }
        else {
            this.toastService.presentToastWarning("Preencha todos os campos.");
        }
    };
    ChecklistCadastroPage.prototype.adicionarItens = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CadastroItemPage", { checklist: this.checklist });
        modal.present();
        modal.onWillDismiss(function (checklist) {
            if (checklist) {
                _this.viewCtrl.dismiss(checklist);
            }
        });
    };
    ChecklistCadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-checklist-cadastro',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/pages/checklist/cadastro/checklist-cadastro.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row class="pad-nav-page" (click)="voltar()">\n            <button class="button-nav">\n                <span ion-text>Voltar</span>\n            </button>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid no-padding>\n        <ion-row padding-left padding-right>\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n                <form #cadastroForm="ngForm" padding-top>\n                    <ion-list radio-group no-margin [(ngModel)]="checklist.tipo" name="tipo">\n                        <ion-grid>\n                            <ion-row>\n                                <ion-col col-6>\n                                    <ion-item radio>\n                                        <ion-label>Controlado</ion-label>\n                                        <ion-radio value="C"></ion-radio>\n                                    </ion-item>\n                                </ion-col>\n                                <ion-col col-6>\n                                    <ion-item radio>\n                                        <ion-label>Especializado</ion-label>\n                                        <ion-radio value="E"></ion-radio>\n                                    </ion-item>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-list>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>CÓDIGO</ion-label>\n                        <ion-input text-center required type="text" [(ngModel)]="checklist.codigo" name="codigo"></ion-input>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>DESCRIÇÃO</ion-label>\n                        <ion-textarea rows="3" text-center required type="text" [(ngModel)]="checklist.descricao" name="descricao"></ion-textarea>\n                    </ion-item>\n\n                    <h3 text-center class="locais">Critérios de localização do serviço</h3>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>CAMPO 1</ion-label>\n                        <ion-input text-center type="text" [(ngModel)]="checklist.campo1" name="campo1"></ion-input>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>CAMPO 2</ion-label>\n                        <ion-input text-center type="text" [(ngModel)]="checklist.campo2" name="campo2"></ion-input>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>CAMPO 3</ion-label>\n                        <ion-input text-center type="text" [(ngModel)]="checklist.campo3" name="campo3"></ion-input>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>CAMPO 4</ion-label>\n                        <ion-input text-center type="text" [(ngModel)]="checklist.campo4" name="campo4"></ion-input>\n                    </ion-item>\n\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n                        (click)="salvar(cadastroForm.valid)">Definir Itens</button>\n                </form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/pages/checklist/cadastro/checklist-cadastro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], ChecklistCadastroPage);
    return ChecklistCadastroPage;
}());

//# sourceMappingURL=checklist-cadastro.js.map

/***/ })

});
//# sourceMappingURL=14.js.map