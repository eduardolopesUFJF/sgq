webpackJsonp([64],{

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeToDismissLayout3Module", function() { return SwipeToDismissLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_3__ = __webpack_require__(828);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SwipeToDismissLayout3Module = /** @class */ (function () {
    function SwipeToDismissLayout3Module() {
    }
    SwipeToDismissLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_3__["a" /* SwipeToDismissLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_3__["a" /* SwipeToDismissLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_3__["a" /* SwipeToDismissLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SwipeToDismissLayout3Module);
    return SwipeToDismissLayout3Module;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-3.module.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SwipeToDismissLayout3 = /** @class */ (function () {
    function SwipeToDismissLayout3() {
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
    SwipeToDismissLayout3.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SwipeToDismissLayout3.prototype, "content", void 0);
    SwipeToDismissLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'swipe-to-dismiss-layout-3',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss.html"*/'<!-- Themes Swipe To Dismiss - Full width image -->\n<ion-content has-header padding-top>\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-row>\n      <ion-col col-12 align-self-end>\n        <ion-list>\n          <ion-item-sliding transparent *ngFor="let item of data.items" #slidingItem>\n            <ion-item no-lines box-shadow background-size (click)="onEvent(\'onItemClick\', item.title, $event)" [ngStyle]="{\'background-image\': \'url(\' + item.image + \')\'}">\n              <div title-block>\n                <!-- Subtitle -->\n                <p card-subtitle>{{item.subtitle}}</p>\n                <!-- Title -->\n                <h1 card-title text-wrap>{{item.title}}</h1>\n              </div>\n            </ion-item>\n            <!---Action Button-->\n            <ion-item-options>\n              <button ion-button text-capitalize transparent (click)="delete(item)">\n              {{item.delate}}\n            </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SwipeToDismissLayout3);
    return SwipeToDismissLayout3;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-3.js.map

/***/ })

});
//# sourceMappingURL=64.js.map