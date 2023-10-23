webpackJsonp([12],{

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChecklistCadastroPageModule", function() { return ChecklistCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_item__ = __webpack_require__(872);
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
                __WEBPACK_IMPORTED_MODULE_2__cadastro_item__["a" /* CadastroItemPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_item__["a" /* CadastroItemPage */])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ChecklistCadastroPageModule);
    return ChecklistCadastroPageModule;
}());

//# sourceMappingURL=cadastro-item.module.js.map

/***/ }),

/***/ 779:
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

/***/ 787:
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_item_checklist_servico__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_loading_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_message_service__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CadastroItemPage = /** @class */ (function () {
    function CadastroItemPage(storage, navCtrl, navParams, toastService, viewCtrl, loadingService, messageService) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastService = toastService;
        this.viewCtrl = viewCtrl;
        this.loadingService = loadingService;
        this.messageService = messageService;
        this.checklist = new __WEBPACK_IMPORTED_MODULE_4__models_item_checklist__["a" /* ItemChecklist */]();
        this.itemChecklist = new __WEBPACK_IMPORTED_MODULE_6__models_item_checklist_servico__["a" /* ItemChecklistServico */]();
        this.itens = [];
        this.isEdicao = false;
        this.checklist = this.navParams.data.checklist;
        this.itens = this.checklist.itensChecklistServico.slice();
    }
    CadastroItemPage.prototype.voltar = function () {
        this.navCtrl.setRoot("HomePage");
    };
    CadastroItemPage.prototype.limpar = function () {
        this.itemChecklist = new __WEBPACK_IMPORTED_MODULE_6__models_item_checklist_servico__["a" /* ItemChecklistServico */]();
    };
    CadastroItemPage.prototype.editarItem = function (item) {
        this.isEdicao = true;
        this.itemChecklist = new __WEBPACK_IMPORTED_MODULE_6__models_item_checklist_servico__["a" /* ItemChecklistServico */](item);
    };
    CadastroItemPage.prototype.adicionar = function (formValido) {
        var _this = this;
        if (formValido) {
            if (this.isEdicao) {
                var indice = this.itens.findIndex(function (x) { return x.idGuid == _this.itemChecklist.idGuid; });
                if (indice == -1) {
                    indice = this.itens.findIndex(function (x) { return x.id == _this.itemChecklist.id; });
                }
                this.itens[indice] = this.itemChecklist;
            }
            else {
                this.itemChecklist.idGuid = __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__["UUID"].UUID();
                this.itens.unshift(this.itemChecklist);
            }
            this.itemChecklist = new __WEBPACK_IMPORTED_MODULE_6__models_item_checklist_servico__["a" /* ItemChecklistServico */]();
            this.isEdicao = false;
        }
        else {
            this.toastService.presentToastWarning("Preencha todos os campos.");
        }
    };
    CadastroItemPage.prototype.concluir = function () {
        var _this = this;
        if (this.itens.length == 0) {
            this.messageService.exibirMensagemConfirmacao("Nenhum item foi adicionado a esse checklist e não é possível adicionar via aplicativo posteriormente. Deseja salvar mesmo assim?", function () { _this.realizarConclusao(); });
        }
        else {
            this.realizarConclusao();
        }
    };
    CadastroItemPage.prototype.realizarConclusao = function () {
        this.checklist.itensChecklistServico = this.itens.slice();
        this.viewCtrl.dismiss(this.checklist);
    };
    CadastroItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cadastro-item',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/pages/checklist/cadastro-item/cadastro-item.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-row class="pad-nav-page" (click)="voltar()">\n            <button class="button-nav">\n                <span ion-text>Voltar</span>\n            </button>\n        </ion-row>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid no-padding>\n        <ion-row padding-left padding-right>\n            <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n                <form #cadastroForm="ngForm" padding-top>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>ORDEM</ion-label>\n                        <ion-input text-center required type="number" [(ngModel)]="itemChecklist.ordem" name="ordem"></ion-input>\n                    </ion-item>\n                    <ion-item text-center transparent>\n                        <ion-label stacked>DESCRIÇÃO</ion-label>\n                        <ion-textarea rows="3" text-center required type="text" [(ngModel)]="itemChecklist.descricao"\n                            name="descricao"></ion-textarea>\n                    </ion-item>\n\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n                        (click)="adicionar(cadastroForm.valid)">{{isEdicao ? \'Atualizar\' : \'Adicionar\'}}</button>\n                    <button *ngIf="isEdicao" ion-button default-button block text-capitalize box-shadow margin-bottom\n                        style="background-color: rgb(33,177,75) !important;" (click)="limpar()">Limpar</button>\n                    <button ion-button default-button block text-capitalize box-shadow margin-bottom style="background-color: rgb(33,177,75) !important;"\n                        (click)="concluir()">Concluir</button>\n\n                    <h3 text-center *ngIf="itens.length > 0" class="locais" style="margin-bottom: 0px;">Itens de\n                        checklist adicionados</h3>\n\n                    <h3 text-center *ngIf="itens.length == 0" class="locais">Nenhum item de checklist adicionado</h3>\n                    <ion-list *ngIf="itens.length > 0">\n                        <ion-item text-wrap class="list-item" *ngFor="let item of itens" (click)="editarItem(item)">\n                            {{item.ordem}} - {{item.descricao.toUpperCase()}}\n                        </ion-item>\n                    </ion-list>\n\n                </form>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/pages/checklist/cadastro-item/cadastro-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__utils_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_7__utils_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_8__utils_message_service__["a" /* MessageService */]])
    ], CadastroItemPage);
    return CadastroItemPage;
}());

//# sourceMappingURL=cadastro-item.js.map

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemChecklistServico; });
var ItemChecklistServico = /** @class */ (function () {
    function ItemChecklistServico(values) {
        if (values === void 0) { values = {}; }
        this.descricao = "";
        this.ordem = null;
        Object.assign(this, values);
    }
    return ItemChecklistServico;
}());

//# sourceMappingURL=item-checklist-servico.js.map

/***/ })

});
//# sourceMappingURL=12.js.map