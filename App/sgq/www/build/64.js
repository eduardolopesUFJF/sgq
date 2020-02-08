webpackJsonp([64],{

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeToDismissLayout1Module", function() { return SwipeToDismissLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__ = __webpack_require__(821);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SwipeToDismissLayout1Module = /** @class */ (function () {
    function SwipeToDismissLayout1Module() {
    }
    SwipeToDismissLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__["a" /* SwipeToDismissLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__["a" /* SwipeToDismissLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__["a" /* SwipeToDismissLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SwipeToDismissLayout1Module);
    return SwipeToDismissLayout1Module;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-1.module.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout1; });
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


var SwipeToDismissLayout1 = /** @class */ (function () {
    function SwipeToDismissLayout1() {
        var _this = this;
        this.undo = function (slidingItem) {
            slidingItem.close();
        };
        this.delete = function (item) {
            var index = _this.data.items.indexOf(item);
            if (index > -1) {
                _this.data.items.splice(index, 1);
            }
        };
    }
    SwipeToDismissLayout1.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SwipeToDismissLayout1.prototype, "content", void 0);
    SwipeToDismissLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'swipe-to-dismiss-layout-1',template:/*ion-inline-start:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss.html"*/'<!--Theme Swipe To Dismiss - Small item + header-->\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row *ngIf="data != null">\n      <ion-col col-12>\n        <!--Header Small item + header-->\n        <ion-list-header transparent header-section no-lines padding background-size [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}">\n          <!--Header Big Title-->\n          <h1 header-title text-capitalize>{{data.header}}</h1>\n          <ion-item transparent margin-vertical no-padding no-lines>\n            <!-- Title -->\n            <h2 item-title text-capitalize text-wrap>{{data.title}}</h2>\n            <!-- Subtitle -->\n            <p item-subtitle no-margin text-wrap>{{data.subtitle}}</p>\n          </ion-item>\n          <button box-shadow ion-button block default-button (click)="onEvent(\'onButtonGetClick\', \'Ok\', $event)">{{data.button}}</button>\n        </ion-list-header>\n        <ion-list>\n          <ion-item-sliding default-item *ngFor="let item of data.items" #slidingItem>\n            <ion-item transparent no-lines (click)="onEvent(\'onItemClick\', item.title, $event)">\n              <!-- Title -->\n              <h2 item-title>{{item.title}}</h2>\n              <!-- Subtitle -->\n              <h3 item-subtitle>{{item.subtitle}}</h3>\n              <!-- Details Item-->\n              <span span-medium>{{item.time}}</span>\n            </ion-item>\n            <!--Action Button-->\n            <ion-item-options text-center>\n              <button no-padding ion-button button-icon (click)="onEvent(\'onButtonGetClick\', \'Info\', $event)">\n                <ion-icon no-padding icon-large [name]="item.icon"></ion-icon>\n              </button >\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SwipeToDismissLayout1);
    return SwipeToDismissLayout1;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-1.js.map

/***/ })

});
//# sourceMappingURL=64.js.map