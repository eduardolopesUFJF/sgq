webpackJsonp([39],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubImageGalleryLayout1Module", function() { return SubImageGalleryLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_image_gallery_layout_1__ = __webpack_require__(854);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubImageGalleryLayout1Module = /** @class */ (function () {
    function SubImageGalleryLayout1Module() {
    }
    SubImageGalleryLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sub_image_gallery_layout_1__["a" /* SubImageGalleryLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sub_image_gallery_layout_1__["a" /* SubImageGalleryLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sub_image_gallery_layout_1__["a" /* SubImageGalleryLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SubImageGalleryLayout1Module);
    return SubImageGalleryLayout1Module;
}());

//# sourceMappingURL=sub-image-gallery-layout-1.module.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubImageGalleryLayout1; });
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


var SubImageGalleryLayout1 = /** @class */ (function () {
    function SubImageGalleryLayout1(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.onEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
        this.openImageSlider = function (group, index) {
            _this.navCtrl.push(group.fullscreen, {
                'group': group.items,
                'index': index
            });
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SubImageGalleryLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SubImageGalleryLayout1.prototype, "events", void 0);
    SubImageGalleryLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sub-image-gallery-layout-1',template:/*ion-inline-start:"/Users/user227439/Desktop/sgq/App/sgq/src/core/sub-image-gallery/layout-1/sub-image-gallery-layout-1.html"*/'<!-- Theme Image Sub-Gallery for Thumb grid -->\n<ion-grid *ngIf="data != null">\n    <ion-row>\n        <ion-col no-padding col-3 col-sm-3 col-md-6 col-lg-4 col-xl-3 *ngFor="let item of data.items;let i = index;">\n            <ion-card background-size (click)="openImageSlider(data, i)">\n              <img [src]="item.image"  />\n            </ion-card>\n        </ion-col>\n    </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/user227439/Desktop/sgq/App/sgq/src/core/sub-image-gallery/layout-1/sub-image-gallery-layout-1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], SubImageGalleryLayout1);
    return SubImageGalleryLayout1;
}());

//# sourceMappingURL=sub-image-gallery-layout-1.js.map

/***/ })

});
//# sourceMappingURL=39.js.map