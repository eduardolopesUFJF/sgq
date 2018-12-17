webpackJsonp([10],{

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificacaoPageModule", function() { return VerificacaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verificacao__ = __webpack_require__(922);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerificacaoPageModule = /** @class */ (function () {
    function VerificacaoPageModule() {
    }
    VerificacaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verificacao__["a" /* VerificacaoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verificacao__["a" /* VerificacaoPage */])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], VerificacaoPageModule);
    return VerificacaoPageModule;
}());

//# sourceMappingURL=verificacao.module.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alteracao; });
var Alteracao = /** @class */ (function () {
    function Alteracao(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return Alteracao;
}());

//# sourceMappingURL=alteracao.js.map

/***/ }),

/***/ 827:
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

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Servico; });
var Servico = /** @class */ (function () {
    function Servico(values) {
        if (values === void 0) { values = {}; }
        this.id = 0;
        this.idGuidServico = '';
        this.descricao = '';
        this.tipo = '';
        this.idObra = 0;
        this.idChecklist = 0;
        this.idArea = 0;
        this.idAreaGuid = "";
        this.metaAprovacao = 90;
        this.status = 0;
        this.situacao = 'Em aberto';
        this.delete = false;
        this.dataHoraInclusao = new Date();
        this.dataHoraAlteracao = new Date();
        this.inspecoesObra = [];
        Object.assign(this, values);
    }
    return Servico;
}());

//# sourceMappingURL=servico.js.map

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_servico__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_alteracao__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_message_service__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VerificacaoPage = /** @class */ (function () {
    function VerificacaoPage(navParams, storage, modalCtrl, messageService) {
        this.navParams = navParams;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.messageService = messageService;
        this.servico = new __WEBPACK_IMPORTED_MODULE_2__models_servico__["a" /* Servico */]();
        this.inspecoes = [];
        this.inspecoesBackup = [];
        this.servico = navParams.data.servico;
        this.inspecoes = this.servico.inspecoesObra.slice();
        this.inspecoesBackup = this.servico.inspecoesObra.slice();
    }
    VerificacaoPage.prototype.novaInspecao = function () {
    };
    VerificacaoPage.prototype.abrirItensInspecao = function (inspecao) {
    };
    VerificacaoPage.prototype.editar = function (inspecao) {
        var modal = this.modalCtrl.create("ManterVerificacaoPage", { inspecao: inspecao });
        modal.present();
        modal.onWillDismiss(function (inspecao) {
            if (inspecao) {
                // this.areas.unshift(area);
                // this.reload = false;
                // this.loadingService.show();
                // setTimeout(() => {
                //     this.reload = true;
                //     this.loadingService.hide();
                // }, 700);
            }
        });
    };
    VerificacaoPage.prototype.filtrar = function (valor) {
        if (valor.length == 0) {
            this.inspecoes = this.inspecoesBackup.slice();
        }
        else {
            this.inspecoes = this.inspecoesBackup.filter(function (item) {
                return item.local.toLowerCase().indexOf(valor.toLowerCase()) > -1;
            });
        }
    };
    VerificacaoPage.prototype.confirmarExclusao = function (item) {
        var _this = this;
        var mensagem;
        if (!item.delete) {
            mensagem = "Deseja realmente excluir a verificação '" + item.local + "'?";
        }
        else {
            mensagem = "Deseja realmente reativar a verificação '" + item.local + "'?";
        }
        this.messageService.exibirMensagemConfirmacao(mensagem, function () { _this.alterarSituacaoArea(item); });
    };
    VerificacaoPage.prototype.alterarSituacaoArea = function (item) {
        var _this = this;
        this.storage.ready().then(function () {
            var atualizacoesArray = [];
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                item.delete = !item.delete;
                var alteracao = new __WEBPACK_IMPORTED_MODULE_4__models_alteracao__["a" /* Alteracao */]({ id: __WEBPACK_IMPORTED_MODULE_5_angular2_uuid__["UUID"].UUID(), idInspecao: item.id, idGuidInspecao: item.idGuid, idArea: _this.servico.idArea, idGuidArea: _this.servico.idAreaGuid, idServico: _this.servico.id, idGuidServico: _this.servico.idGuidServico, tipo: "Update", entidade: "Inspecao", valor: JSON.stringify(item), data: new Date(), descricao: (item.delete ? "Inativação" : "Ativação") + " da verificação '" + item.local + "' no serviço '" + _this.servico.descricao + "'.", obraId: _this.servico.idObra });
                if (atualizacoes) {
                    atualizacoesArray = atualizacoes;
                    atualizacoesArray.push(alteracao);
                }
                else {
                    atualizacoesArray.push(alteracao);
                }
                _this.storage.set('atualizacoes', atualizacoesArray);
                _this.atualizarObra(item);
            });
        });
    };
    VerificacaoPage.prototype.atualizarObra = function (item) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('obras').then(function (obras) {
                obras.find(function (x) { return x.id == _this.servico.idObra; }).areas.find(function (x) { return _this.servico.idAreaGuid ? (x.idGuid == _this.servico.idAreaGuid) : (x.id == _this.servico.idArea); }).servicos.find(function (x) { return _this.servico.idGuidServico ? (x.idGuidServico == _this.servico.idGuidServico) : (x.id == _this.servico.id); }).inspecoesObra.find(function (x) { return item.idGuid ? (x.idGuid == item.idGuid) : (x.id == item.id); }).delete = item.delete;
                _this.storage.set('obras', obras);
            });
        });
    };
    VerificacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-verificacao',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\verificacao\verificacao.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon class="icon-menu" name="menu"></ion-icon>\n\n        </button>\n\n        <div buy>\n\n            <ion-title>\n\n                Verificação\n\n            </ion-title>\n\n        </div>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <h2 padding text-center class="aviso" *ngIf="inspecoes.length < 1">Nenhum registro encontrado.</h2>\n\n    <ion-grid no-padding>\n\n        <ion-row>\n\n            <button ion-button default-button block text-capitalize box-shadow margin-bottom class="button-novo"\n\n                (click)="novaInspecao()">Nova inspeção</button>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col class="col-search" col-12 *ngIf="inspecoesBackup.length > 0">\n\n                <ion-searchbar [placeholder]="\'Filtrar pelo local\'" (ionInput)="filtrar($event.target.value)"></ion-searchbar>\n\n            </ion-col>\n\n            <ion-col col-12>\n\n                <ion-list no-margin>\n\n                    <ion-item default-item no-lines [ngClass]="{\'novo-item\': !item.id}" *ngFor="let item of inspecoes; let i = index;"\n\n                        (click)="abrirItensInspecao(item)">\n\n                        <ion-row class="espacamento">\n\n                            <ion-col col-10>\n\n                                <h2 item-title text-wrap>Local: {{item.local}}</h2>\n\n                                <h3 item-situacao text-wrap>Situação: {{item.situacao}}</h3>\n\n                                <h3 item-situacao text-wrap>Abertura: {{item.dataInspecao ? (item.dataInspecao | date: \'dd/MM/yyyy\') : \'Não informada\'}}</h3>\n\n                                <h3 item-situacao text-wrap>Encerramento: {{item.dataEncerramento ? (item.dataEncerramento | date: \'dd/MM/yyyy\') : \'Não informada\'}}</h3>\n\n                            </ion-col>\n\n                            <ion-col col-2>\n\n                                <ion-icon icon-small name="trash" item-right (click)="confirmarExclusao(item)"\n\n                                    style="font-size: 32px !important; margin: 0px" [ngClass]="{\'color-black\': !item.delete , \'color-red\' : item.delete}"></ion-icon>\n\n                                <br>\n\n                                <ion-icon icon-small name="create" item-right (click)="editar(item)"\n\n                                    style="font-size: 32px !important; margin: 0px"></ion-icon>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\verificacao\verificacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__utils_message_service__["a" /* MessageService */]])
    ], VerificacaoPage);
    return VerificacaoPage;
}());

//# sourceMappingURL=verificacao.js.map

/***/ })

});
//# sourceMappingURL=10.js.map