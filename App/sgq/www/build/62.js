webpackJsonp([62],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropLayout3Module", function() { return DragAndDropLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_3__ = __webpack_require__(851);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DragAndDropLayout3Module = /** @class */ (function () {
    function DragAndDropLayout3Module() {
    }
    DragAndDropLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_3__["a" /* DragAndDropLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_3__["a" /* DragAndDropLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_3__["a" /* DragAndDropLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], DragAndDropLayout3Module);
    return DragAndDropLayout3Module;
}());

//# sourceMappingURL=drag-and-drop-layout-3.module.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropLayout3; });
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


var DragAndDropLayout3 = /** @class */ (function () {
    function DragAndDropLayout3() {
        var _this = this;
        this.reorderItems = function (indexes) {
            _this.data.items = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* reorderArray */])(_this.data.items, indexes);
        };
    }
    DragAndDropLayout3.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], DragAndDropLayout3.prototype, "content", void 0);
    DragAndDropLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'drag-and-drop-layout-3',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\drag-and-drop\layout-3\drag-and-drop.html"*/'<!-- Themes Drag and drop - Medium item with avatar-->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <!-- Header Medium item with avatar-->\n\n        <ion-list-header transparent header-section no-lines padding-horizontal>\n\n          <h1 header-title text-capitalize>{{data.header}}</h1>\n\n        </ion-list-header>\n\n        <!-- Content Medium Item With Avatar-->\n\n        <ion-list no-margin reorder="true" (ionItemReorder)="reorderItems($event)">\n\n          <ion-item no-lines default-item *ngFor="let item of data.items; let i = index;"\n\n          (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n            <!--Avatar-->\n\n            <ion-thumbnail item-left>\n\n              <img [src]="item.image">\n\n            </ion-thumbnail>\n\n            <!--Title-->\n\n            <h2 item-title>{{item.title}}</h2>\n\n            <!--Subtitle-->\n\n            <h3 item-subtitle>{{item.subtitle}}</h3>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\drag-and-drop\layout-3\drag-and-drop.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DragAndDropLayout3);
    return DragAndDropLayout3;
}());

//# sourceMappingURL=drag-and-drop-layout-3.js.map

/***/ })

});
//# sourceMappingURL=62.js.map