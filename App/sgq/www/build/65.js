webpackJsonp([65],{

<<<<<<< HEAD
/***/ 720:
=======
/***/ 722:
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeToDismissLayout2Module", function() { return SwipeToDismissLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__ = __webpack_require__(824);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_2__ = __webpack_require__(855);
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
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

<<<<<<< HEAD
/***/ 824:
=======
/***/ 855:
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout2; });
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
<<<<<<< HEAD
            selector: 'swipe-to-dismiss-layout-1',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss.html"*/'<!--Theme Swipe To Dismiss - Small item + header-->\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row *ngIf="data != null">\n      <ion-col col-12>\n        <!--Header Small item + header-->\n        <ion-list-header transparent header-section no-lines padding background-size [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}">\n          <!--Header Big Title-->\n          <h1 header-title text-capitalize>{{data.header}}</h1>\n          <ion-item transparent margin-vertical no-padding no-lines>\n            <!-- Title -->\n            <h2 item-title text-capitalize text-wrap>{{data.title}}</h2>\n            <!-- Subtitle -->\n            <p item-subtitle no-margin text-wrap>{{data.subtitle}}</p>\n          </ion-item>\n          <button box-shadow ion-button block default-button (click)="onEvent(\'onButtonGetClick\', \'Ok\', $event)">{{data.button}}</button>\n        </ion-list-header>\n        <ion-list>\n          <ion-item-sliding default-item *ngFor="let item of data.items" #slidingItem>\n            <ion-item transparent no-lines (click)="onEvent(\'onItemClick\', item.title, $event)">\n              <!-- Title -->\n              <h2 item-title>{{item.title}}</h2>\n              <!-- Subtitle -->\n              <h3 item-subtitle>{{item.subtitle}}</h3>\n              <!-- Details Item-->\n              <span span-medium>{{item.time}}</span>\n            </ion-item>\n            <!--Action Button-->\n            <ion-item-options text-center>\n              <button no-padding ion-button button-icon (click)="onEvent(\'onButtonGetClick\', \'Info\', $event)">\n                <ion-icon no-padding icon-large [name]="item.icon"></ion-icon>\n              </button >\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss.html"*/
=======
            selector: 'swipe-to-dismiss-layout-2',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\swipe-to-dismiss\layout-2\swipe-to-dismiss.html"*/'<!-- Themes Swipe To Dismiss - Products + CTA -->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <!-- Header top Swipe To Dismiss Products + CTA -->\n\n        <ion-list-header transparent no-lines header-section no-margin>\n\n          <!-- Big Title Swipe To Dismiss Products + CTA -->\n\n          <h1 header-title text-capitalize>{{data.header}}</h1>\n\n        </ion-list-header>\n\n        <!-- Content -->\n\n        <ion-list no-margin>\n\n          <ion-item-sliding default-item *ngFor="let item of data.items" #slidingItem>\n\n            <ion-item transparent no-padding no-lines (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n              <!-- Images -->\n\n                <ion-thumbnail item-start>\n\n                  <img [src]="item.image">\n\n                </ion-thumbnail>\n\n                <!-- Title -->\n\n                <h2 item-title>{{item.title}}</h2>\n\n                <!-- Subtitle -->\n\n                <p item-subtitle text-wrap>{{item.subtitle}}</p>\n\n                <!-- Button -->\n\n                <button ion-button button-follow text-capitalize box-shadow item-end>{{item.ionButton}}</button>\n\n            </ion-item>\n\n            <!--Action Button-->\n\n            <ion-item-options no-lines>\n\n              <!-- Button -->\n\n              <button ion-button text-capitalize (click)="delete(item)">\n\n              {{item.delate}}\n\n            </button>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\swipe-to-dismiss\layout-2\swipe-to-dismiss.html"*/
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
        }),
        __metadata("design:paramtypes", [])
    ], SwipeToDismissLayout2);
    return SwipeToDismissLayout2;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-2.js.map

/***/ })

});
//# sourceMappingURL=65.js.map