webpackJsonp([73],{

<<<<<<< HEAD
/***/ 708:
=======
/***/ 707:
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragAndDropLayout1Module", function() { return DragAndDropLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_1__ = __webpack_require__(839);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_1__ = __webpack_require__(810);
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DragAndDropLayout1Module = /** @class */ (function () {
    function DragAndDropLayout1Module() {
    }
    DragAndDropLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_1__["a" /* DragAndDropLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_1__["a" /* DragAndDropLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__drag_and_drop_layout_1__["a" /* DragAndDropLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], DragAndDropLayout1Module);
    return DragAndDropLayout1Module;
}());

//# sourceMappingURL=drag-and-drop-layout-1.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 839:
=======
/***/ 810:
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DragAndDropLayout1 = /** @class */ (function () {
    function DragAndDropLayout1() {
        var _this = this;
        this.reorderItems = function (indexes) {
            _this.data.items = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* reorderArray */])(_this.data.items, indexes);
        };
    }
    DragAndDropLayout1.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DragAndDropLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], DragAndDropLayout1.prototype, "content", void 0);
    DragAndDropLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'drag-and-drop-layout-1',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\drag-and-drop\layout-1\drag-and-drop.html"*/'<!-- Themes Drag and drop - Small item + header -->\n\n<ion-content>\n\n    <ion-grid no-padding *ngIf="data != null">\n\n        <!--Header-->\n\n        <ion-row>\n\n            <!--Content-->\n\n            <ion-col col-12>\n\n                <ion-list-header transparent header-section no-lines padding-horizontal no-margin>\n\n                    <h1 header-title text-capitalize>{{data.header}}</h1>\n\n                </ion-list-header>\n\n                <!-- Item List Section -->\n\n                <ion-list no-margin reorder="true" (ionItemReorder)="reorderItems($event)">\n\n                    <ion-item default-item no-lines padding-left *ngFor="let item of data.items; let i = index;"\n\n                    (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n                        <h2 item-title>{{item.title}}</h2>\n\n                        <h3 item-subtitle>{{item.subtitle}}</h3>\n\n                        <span span-medium>{{item.textIcon}}</span>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\drag-and-drop\layout-1\drag-and-drop.html"*/
=======
            selector: 'drag-and-drop-layout-1',template:/*ion-inline-start:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/list-view/drag-and-drop/layout-1/drag-and-drop.html"*/'<!-- Themes Drag and drop - Small item + header -->\n<ion-content>\n    <ion-grid no-padding *ngIf="data != null">\n        <!--Header-->\n        <ion-row>\n            <!--Content-->\n            <ion-col col-12>\n                <ion-list-header transparent header-section no-lines padding-horizontal no-margin>\n                    <h1 header-title text-capitalize>{{data.header}}</h1>\n                </ion-list-header>\n                <!-- Item List Section -->\n                <ion-list no-margin reorder="true" (ionItemReorder)="reorderItems($event)">\n                    <ion-item default-item no-lines padding-left *ngFor="let item of data.items; let i = index;"\n                    (click)="onEvent(\'onItemClick\', item.title, $event)">\n                        <h2 item-title>{{item.title}}</h2>\n                        <h3 item-subtitle>{{item.subtitle}}</h3>\n                        <span span-medium>{{item.textIcon}}</span>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/list-view/drag-and-drop/layout-1/drag-and-drop.html"*/
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
        }),
        __metadata("design:paramtypes", [])
    ], DragAndDropLayout1);
    return DragAndDropLayout1;
}());

//# sourceMappingURL=drag-and-drop-layout-1.js.map

/***/ })

});
//# sourceMappingURL=73.js.map