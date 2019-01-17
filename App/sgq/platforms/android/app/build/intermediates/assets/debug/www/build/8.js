webpackJsonp([8],{

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcorrenciaPageModule", function() { return OcorrenciaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ocorrencia__ = __webpack_require__(898);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OcorrenciaPageModule = /** @class */ (function () {
    function OcorrenciaPageModule() {
    }
    OcorrenciaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ocorrencia__["a" /* OcorrenciaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ocorrencia__["a" /* OcorrenciaPage */])
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], OcorrenciaPageModule);
    return OcorrenciaPageModule;
}());

//# sourceMappingURL=ocorrencia.module.js.map

/***/ }),

/***/ 788:
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

/***/ 789:
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

/***/ 801:
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
        this.itensChecklistServico = [];
        Object.assign(this, values);
    }
    return Servico;
}());

//# sourceMappingURL=servico.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inspecao; });
var Inspecao = /** @class */ (function () {
    function Inspecao(values) {
        if (values === void 0) { values = {}; }
        this.id = 0;
        this.idGuidInspecao = '';
        this.campo1 = "";
        this.campo2 = "";
        this.campo3 = "";
        this.campo4 = "";
        this.status = 0;
        this.situacao = 'Em aberto';
        this.delete = false;
        this.dataHoraAlteracao = new Date();
        this.qtdNA = 0;
        this.qtdA = 0;
        this.qtdR = 0;
        this.qtdRA = 0;
        this.qtdX = 0;
        this.inspecaoObraItens = [];
        this.ocorrencias = [];
        Object.assign(this, values);
    }
    return Inspecao;
}());

//# sourceMappingURL=inspecao.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ocorrencia; });
var Ocorrencia = /** @class */ (function () {
    function Ocorrencia(values) {
        if (values === void 0) { values = {}; }
        this.id = 0;
        this.idGuidOcorrencia = '';
        this.idInspecaoObra = 0;
        this.idGuidInspecao = '';
        this.descricao = '';
        this.tratativa = '';
        this.dataHoraAlteracao = new Date();
        Object.assign(this, values);
    }
    return Ocorrencia;
}());

//# sourceMappingURL=ocorrencia.js.map

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OcorrenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_inspecao__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_message_service__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_ocorrencia__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_alteracao__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_uuid__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_servico__ = __webpack_require__(801);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OcorrenciaPage = /** @class */ (function () {
    function OcorrenciaPage(navParams, storage, viewCtrl, actionSheetCtrl, modalCtrl, messageService) {
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.messageService = messageService;
        this.inspecao = new __WEBPACK_IMPORTED_MODULE_2__models_inspecao__["a" /* Inspecao */]();
        this.servico = new __WEBPACK_IMPORTED_MODULE_8__models_servico__["a" /* Servico */]();
        this.ocorrenciaBackup = new __WEBPACK_IMPORTED_MODULE_5__models_ocorrencia__["a" /* Ocorrencia */]();
        this.inspecao = navParams.data.inspecao;
        this.servico = navParams.data.servico;
        this.broadcomb = navParams.data.broadcomb;
    }
    OcorrenciaPage.prototype.exibirOpcoes = function (ocorrencia) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            "buttons": [
                {
                    "text": "Editar",
                    handler: function () {
                        _this.editar(ocorrencia);
                    }
                },
                {
                    "text": !ocorrencia.delete ? "Excluir" : "Reativar",
                    handler: function () {
                        _this.confirmarExclusao(ocorrencia);
                    }
                },
                {
                    "text": "Cancelar",
                    "role": "cancel"
                }
            ]
        });
        actionSheet.present();
    };
    OcorrenciaPage.prototype.novaOcorrencia = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ManterOcorrenciaPage", { ocorrencia: new __WEBPACK_IMPORTED_MODULE_2__models_inspecao__["a" /* Inspecao */]() });
        modal.present();
        modal.onWillDismiss(function (ocorrencia) {
            if (ocorrencia) {
                ocorrencia.idGuidOcorrencia = __WEBPACK_IMPORTED_MODULE_7_angular2_uuid__["UUID"].UUID();
                ocorrencia.idInspecaoObra = _this.inspecao.id;
                ocorrencia.idGuidInspecao = _this.inspecao.idGuidInspecao;
                _this.inspecao.ocorrencias.unshift(ocorrencia);
                _this.gerarNovaOcorrencia(ocorrencia);
            }
        });
    };
    OcorrenciaPage.prototype.gerarNovaOcorrencia = function (ocorrencia) {
        var _this = this;
        this.storage.ready().then(function () {
            var atualizacoesArray = [];
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                var alteracao = new __WEBPACK_IMPORTED_MODULE_6__models_alteracao__["a" /* Alteracao */]({ id: __WEBPACK_IMPORTED_MODULE_7_angular2_uuid__["UUID"].UUID(), idOcorrencia: ocorrencia.id, idGuidOcorrencia: ocorrencia.idGuidOcorrencia, idInspecao: _this.inspecao.id, idGuidInspecao: _this.inspecao.idGuidInspecao, idArea: _this.servico.idArea, idGuidArea: _this.servico.idAreaGuid, idServico: _this.servico.id, idGuidServico: _this.servico.idGuidServico, tipo: "Insert", entidade: "Ocorrencia", valor: JSON.stringify(ocorrencia), data: new Date(), descricao: "Criação da ocorrência '" + ocorrencia.descricao + "' em '" + _this.broadcomb + "'.", obraId: _this.servico.idObra });
                if (atualizacoes) {
                    atualizacoesArray = atualizacoes;
                    atualizacoesArray.push(alteracao);
                }
                else {
                    atualizacoesArray.push(alteracao);
                }
                _this.storage.set('atualizacoes', atualizacoesArray);
                _this.atualizarOcorrenciaCriacao(ocorrencia);
            });
        });
    };
    OcorrenciaPage.prototype.atualizarOcorrenciaCriacao = function (item) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('obras').then(function (obras) {
                obras.find(function (x) { return x.id == _this.servico.idObra; }).areas.find(function (x) { return _this.servico.idAreaGuid ? (x.idGuid == _this.servico.idAreaGuid) : (x.id == _this.servico.idArea); }).servicos.find(function (x) { return _this.servico.idGuidServico ? (x.idGuidServico == _this.servico.idGuidServico) : (x.id == _this.servico.id); }).inspecoesObra.find(function (x) { return _this.inspecao.idGuidInspecao ? (x.idGuidInspecao == _this.inspecao.idGuidInspecao) : (x.id == _this.inspecao.id); }).ocorrencias.unshift(item);
                _this.storage.set('obras', obras);
            });
        });
    };
    OcorrenciaPage.prototype.editar = function (ocorrencia) {
        var _this = this;
        var modal = this.modalCtrl.create("ManterOcorrenciaPage", { ocorrencia: ocorrencia });
        this.ocorrenciaBackup = new __WEBPACK_IMPORTED_MODULE_5__models_ocorrencia__["a" /* Ocorrencia */](ocorrencia);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.editarOcorrencias(data);
            }
            else {
                var ocorrenciaArray = _this.inspecao.ocorrencias.find(function (x) { return _this.ocorrenciaBackup.idGuidOcorrencia ? (x.idGuidOcorrencia == _this.ocorrenciaBackup.idGuidOcorrencia) : (x.id == _this.ocorrenciaBackup.id); });
                ocorrenciaArray.dataDescricao = _this.ocorrenciaBackup.dataDescricao;
                ocorrenciaArray.descricao = _this.ocorrenciaBackup.descricao;
                ocorrenciaArray.dataTratativa = _this.ocorrenciaBackup.dataTratativa;
                ocorrenciaArray.tratativa = _this.ocorrenciaBackup.tratativa;
            }
        });
    };
    OcorrenciaPage.prototype.editarOcorrencias = function (ocorrencia) {
        var _this = this;
        this.storage.ready().then(function () {
            var atualizacoesArray = [];
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                var alteracao = new __WEBPACK_IMPORTED_MODULE_6__models_alteracao__["a" /* Alteracao */]({ id: __WEBPACK_IMPORTED_MODULE_7_angular2_uuid__["UUID"].UUID(), idOcorrencia: ocorrencia.id, idGuidOcorrencia: ocorrencia.idGuidOcorrencia, idInspecao: _this.inspecao.id, idGuidInspecao: _this.inspecao.idGuidInspecao, idArea: _this.servico.idArea, idGuidArea: _this.servico.idAreaGuid, idServico: _this.servico.id, idGuidServico: _this.servico.idGuidServico, tipo: "Update", entidade: "Ocorrencia", valor: JSON.stringify(ocorrencia), data: new Date(), descricao: "Edição da ocorrência '" + ocorrencia.descricao + "' em '" + _this.broadcomb + "'.", obraId: _this.servico.idObra });
                if (atualizacoes) {
                    atualizacoesArray = atualizacoes;
                    atualizacoesArray.push(alteracao);
                }
                else {
                    atualizacoesArray.push(alteracao);
                }
                _this.storage.set('atualizacoes', atualizacoesArray);
                _this.atualizarOcorrenciaEdicao(ocorrencia);
            });
        });
    };
    OcorrenciaPage.prototype.atualizarOcorrenciaEdicao = function (item) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('obras').then(function (obras) {
                var ocorrencia = obras.find(function (x) { return x.id == _this.servico.idObra; }).areas.find(function (x) { return _this.servico.idAreaGuid ? (x.idGuid == _this.servico.idAreaGuid) : (x.id == _this.servico.idArea); }).servicos.find(function (x) { return _this.servico.idGuidServico ? (x.idGuidServico == _this.servico.idGuidServico) : (x.id == _this.servico.id); }).inspecoesObra.find(function (x) { return _this.inspecao.idGuidInspecao ? (x.idGuidInspecao == _this.inspecao.idGuidInspecao) : (x.id == _this.inspecao.id); }).ocorrencias.find(function (x) { return x.idGuidOcorrencia ? (x.idGuidOcorrencia == item.idGuidOcorrencia) : (x.id == item.id); });
                ocorrencia.dataDescricao = item.dataDescricao;
                ocorrencia.descricao = item.descricao;
                ocorrencia.dataTratativa = item.dataTratativa;
                ocorrencia.tratativa = item.tratativa;
                _this.storage.set('obras', obras);
            });
        });
    };
    OcorrenciaPage.prototype.confirmarExclusao = function (ocorrencia) {
        var _this = this;
        var mensagem;
        if (!ocorrencia.delete) {
            mensagem = "Deseja realmente excluir a ocorrência selecionada?";
        }
        else {
            mensagem = "Deseja realmente reativar a ocorrência selecionada?";
        }
        this.messageService.exibirMensagemConfirmacao(mensagem, function () { _this.alterarSituacaoOcorrencia(ocorrencia); });
    };
    OcorrenciaPage.prototype.alterarSituacaoOcorrencia = function (ocorrencia) {
        var _this = this;
        this.storage.ready().then(function () {
            var atualizacoesArray = [];
            _this.storage.get('atualizacoes').then(function (atualizacoes) {
                ocorrencia.delete = !ocorrencia.delete;
                var alteracao = new __WEBPACK_IMPORTED_MODULE_6__models_alteracao__["a" /* Alteracao */]({ id: __WEBPACK_IMPORTED_MODULE_7_angular2_uuid__["UUID"].UUID(), idOcorrencia: ocorrencia.id, idGuidOcorrencia: ocorrencia.idGuidOcorrencia, idInspecao: _this.inspecao.id, idGuidInspecao: _this.inspecao.idGuidInspecao, idServico: _this.servico.id, idGuidServico: _this.servico.idGuidServico, tipo: "Update", entidade: "Ocorrencia", valor: JSON.stringify(ocorrencia), data: new Date(), descricao: (ocorrencia.delete ? "Inativação" : "Ativação") + " da ocorrência '" + ocorrencia.descricao + "' em '" + _this.broadcomb.toUpperCase() + "'." });
                if (atualizacoes) {
                    atualizacoesArray = atualizacoes;
                    atualizacoesArray.push(alteracao);
                }
                else {
                    atualizacoesArray.push(alteracao);
                }
                _this.storage.set('atualizacoes', atualizacoesArray);
                _this.atualizarOcorrenciaSituacao(ocorrencia);
            });
        });
    };
    OcorrenciaPage.prototype.atualizarOcorrenciaSituacao = function (ocorrencia) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('obras').then(function (obras) {
                obras.find(function (x) { return x.id == _this.servico.idObra; }).areas.find(function (x) { return _this.servico.idAreaGuid ? (x.idGuid == _this.servico.idAreaGuid) : (x.id == _this.servico.idArea); }).servicos.find(function (x) { return _this.servico.idGuidServico ? (x.idGuidServico == _this.servico.idGuidServico) : (x.id == _this.servico.id); }).inspecoesObra.find(function (x) { return _this.inspecao.idGuidInspecao ? (x.idGuidInspecao == _this.inspecao.idGuidInspecao) : (x.id == _this.inspecao.id); }).ocorrencias.find(function (x) { return ocorrencia.idGuidOcorrencia ? (x.idGuidOcorrencia == ocorrencia.idGuidOcorrencia) : (x.id == ocorrencia.id); }).delete = ocorrencia.delete;
                _this.storage.set('obras', obras);
            });
        });
    };
    OcorrenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ocorrencia',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\ocorrencia\ocorrencia.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon class="icon-menu" name="menu"></ion-icon>\n\n        </button>\n\n        <div buy>\n\n            <ion-title>Ocorrências</ion-title>\n\n        </div>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <h2 text-center text-wrap class="broadcomb">{{broadcomb.toUpperCase()}}</h2>\n\n    <h2 padding text-center class="aviso" *ngIf="inspecao.ocorrencias.length < 1">Nenhum registro encontrado.</h2>\n\n    <ion-grid no-padding>\n\n        <ion-row>\n\n            <button ion-button default-button block text-capitalize box-shadow margin-bottom class="button-novo"\n\n                (click)="novaOcorrencia()">Nova ocorrência</button>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n                <ion-list no-margin>\n\n                    <ion-item default-item no-lines [ngClass]="{\'novo-item\': !item.id, \'item-removido\': item.delete}" *ngFor="let item of inspecao.ocorrencias; let i = index;">\n\n                        <ion-row class="espacamento">\n\n                            <ion-col col-10 (click)="editar(item)">\n\n                                <h2 item-title text-wrap>Data da descrição: {{item.dataDescricao ? (item.dataDescricao\n\n                                    | date:\n\n                                    \'dd/MM/yyyy\') : \'--\'}}</h2>\n\n                                <h2 item-title text-wrap>Descrição: {{item.descricao}}</h2>\n\n                                <h2 item-title text-wrap>Data da tratativa: {{item.dataTratativa ? (item.dataTratativa\n\n                                    | date:\n\n                                    \'dd/MM/yyyy\') : \'--\'}}</h2>\n\n                                <h2 item-title text-wrap>Tratativa: {{item.tratativa}}</h2>\n\n                            </ion-col>\n\n                            <ion-col col-2>\n\n                                <ion-icon name="more" icon-small item-right style="font-size: 32px !important; margin: 0px"\n\n                                    (click)="exibirOpcoes(item)"></ion-icon>\n\n                            </ion-col>\n\n                        </ion-row>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\pages\ocorrencia\ocorrencia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__utils_message_service__["a" /* MessageService */]])
    ], OcorrenciaPage);
    return OcorrenciaPage;
}());

//# sourceMappingURL=ocorrencia.js.map

/***/ })

});
//# sourceMappingURL=8.js.map