webpackJsonp([64],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeToDismissLayout2Module", function() { return SwipeToDismissLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_2__ = __webpack_require__(825);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SwipeToDismissLayout2Module = /** @class */ (function () {
    function SwipeToDismissLayout2Module() {
    }
    SwipeToDismissLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_2__["a" /* SwipeToDismissLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_2__["a" /* SwipeToDismissLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_2__["a" /* SwipeToDismissLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SwipeToDismissLayout2Module);
    return SwipeToDismissLayout2Module;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-2.module.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout2; });
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


var SwipeToDismissLayout2 = /** @class */ (function () {
    function SwipeToDismissLayout2() {
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
    SwipeToDismissLayout2.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], SwipeToDismissLayout2.prototype, "content", void 0);
    SwipeToDismissLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'swipe-to-dismiss-layout-2',template:/*ion-inline-start:"/Users/user227439/Desktop/sgq/App/sgq/src/core/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss.html"*/'<!-- Themes Swipe To Dismiss - Products + CTA -->\n<ion-content>\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-row>\n      <ion-col col-12>\n        <!-- Header top Swipe To Dismiss Products + CTA -->\n        <ion-list-header transparent no-lines header-section no-margin>\n          <!-- Big Title Swipe To Dismiss Products + CTA -->\n          <h1 header-title text-capitalize>{{data.header}}</h1>\n        </ion-list-header>\n        <!-- Content -->\n        <ion-list no-margin>\n          <ion-item-sliding default-item *ngFor="let item of data.items" #slidingItem>\n            <ion-item transparent no-padding no-lines (click)="onEvent(\'onItemClick\', item.title, $event)">\n              <!-- Images -->\n                <ion-thumbnail item-start>\n                  <img [src]="item.image">\n                </ion-thumbnail>\n                <!-- Title -->\n                <h2 item-title>{{item.title}}</h2>\n                <!-- Subtitle -->\n                <p item-subtitle text-wrap>{{item.subtitle}}</p>\n                <!-- Button -->\n                <button ion-button button-follow text-capitalize box-shadow item-end>{{item.ionButton}}</button>\n            </ion-item>\n            <!--Action Button-->\n            <ion-item-options no-lines>\n              <!-- Button -->\n              <button ion-button text-capitalize (click)="delete(item)">\n              {{item.delate}}\n            </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/user227439/Desktop/sgq/App/sgq/src/core/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SwipeToDismissLayout2);
    return SwipeToDismissLayout2;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-2.js.map

/***/ })

});
//# sourceMappingURL=64.js.map