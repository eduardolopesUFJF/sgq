webpackJsonp([73],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropLayout2Module", function() { return DragAndDropLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_2__ = __webpack_require__(842);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DragAndDropLayout2Module = /** @class */ (function () {
    function DragAndDropLayout2Module() {
    }
    DragAndDropLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_2__["a" /* DragAndDropLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_2__["a" /* DragAndDropLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_2__["a" /* DragAndDropLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], DragAndDropLayout2Module);
    return DragAndDropLayout2Module;
}());

//# sourceMappingURL=drag-and-drop-layout-2.module.js.map

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropLayout2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DragAndDropLayout2 = /** @class */ (function () {
    function DragAndDropLayout2() {
        var _this = this;
        this.reorderItems = function (indexes) {
            _this.data.items = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* reorderArray */])(_this.data.items, indexes);
        };
    }
    DragAndDropLayout2.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], DragAndDropLayout2.prototype, "content", void 0);
    DragAndDropLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'drag-and-drop-layout-2',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\drag-and-drop\layout-2\drag-and-drop.html"*/'<!-- Themes Drag and drop - Products + CTA header -->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <!-- Header Products + CTA header -->\n\n        <ion-list-header transparent header-section no-lines padding background-size [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}">\n\n          <!--Header Big Title-->\n\n          <h1 header-title text-capitalize>{{data.header}}</h1>\n\n          <ion-item transparent margin-vertical no-padding no-lines>\n\n            <!-- Title -->\n\n            <h2 item-title text-capitalize text-wrap>{{data.title}}</h2>\n\n            <!-- Subtitle -->\n\n            <p item-subtitle no-margin text-wrap>{{data.subtitle}}</p>\n\n          </ion-item>\n\n          <!-- Button -->\n\n          <button box-shadow ion-button block default-button (click)="onEvent(\'onButtonGetClick\', \'Ok\', $event)">{{data.button}}</button>\n\n        </ion-list-header>\n\n        <!-- Content Products + CTA header -->\n\n        <ion-list no-margin reorder="true" (ionItemReorder)="reorderItems($event)">\n\n          <ion-item no-lines default-item *ngFor="let item of data.items; let i = index;" (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n            <!-- Avatar -->\n\n            <ion-thumbnail item-start no-margin>\n\n              <img [src]="item.image">\n\n            </ion-thumbnail>\n\n            <!-- Title -->\n\n            <h2 item-title margin-left>{{item.title}}</h2>\n\n            <!-- Subtitle -->\n\n            <p item-subtitle margin-left>{{item.subtitle}}</p>\n\n            <!-- Badge -->\n\n            <ion-badge box-shadow badge-light margin-left>{{item.price}}</ion-badge>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\drag-and-drop\layout-2\drag-and-drop.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DragAndDropLayout2);
    return DragAndDropLayout2;
}());

//# sourceMappingURL=drag-and-drop-layout-2.js.map

/***/ })

});
//# sourceMappingURL=73.js.map