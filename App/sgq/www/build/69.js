webpackJsonp([69],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleCardLayout1Module", function() { return GoogleCardLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expandable_layout_3__ = __webpack_require__(817);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_card_layout_1__ = __webpack_require__(846);
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GoogleCardLayout1Module = /** @class */ (function () {
    function GoogleCardLayout1Module() {
    }
    GoogleCardLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__google_card_layout_1__["a" /* GoogleCardLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__google_card_layout_1__["a" /* GoogleCardLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__google_card_layout_1__["a" /* GoogleCardLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], GoogleCardLayout1Module);
    return GoogleCardLayout1Module;
}());

//# sourceMappingURL=google-card-layout-1.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 817:
=======
/***/ 846:
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCardLayout1; });
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


var GoogleCardLayout1 = /** @class */ (function () {
    function GoogleCardLayout1() {
        this.slider = {};
    }
    GoogleCardLayout1.prototype.slideHasChanged = function (slider, index) {
        this.slider[index] = slider;
        if (2 == slider._activeIndex) {
            if (this.data.items) {
                this.data.items.splice(index, 1);
            }
            else {
                this.data.splice(index, 1);
            }
        }
    };
    GoogleCardLayout1.prototype.onStarClass = function (items, index, e) {
        if (e) {
            e.stopPropagation();
        }
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates", index, e);
    };
    ;
    GoogleCardLayout1.prototype.onClickEvent = function (index) {
        if (this.slider[index]) {
            this.slider[index].slidePrev(300);
        }
    };
    GoogleCardLayout1.prototype.onEvent = function (event, item, e) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GoogleCardLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GoogleCardLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], GoogleCardLayout1.prototype, "content", void 0);
    GoogleCardLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'expandable-layout-3',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/expandable/layout-3/expandable.html"*/'<!-- Themes Expandable - Filters Products -->\n<ion-content>\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-row>\n      <ion-col col-12 no-padding no-margin>\n        <!-- Header -->\n        <ion-list>\n          <ion-list-header transparent header-section no-lines padding-horizontal>\n            <h1 header-title text-capitalize>{{data.header}}</h1>\n          </ion-list-header>\n          <!--- List Content -->\n          <ul no-margin no-padding class="collapsible">\n            <li no-margin *ngFor="let group of data.items;">\n              <!-- Expandable - Filters Products - Header-->\n              <div class="collapsible-header" no-margin no-padding (click)="toggleGroup(group)">\n                <ion-item default-item no-lines>\n                  <h2 item-title text-capitalize>{{group.title}}</h2>\n                  <div item-content>\n                    <ion-icon icon-medium>\n                      <i class="icon {{group.icon}}"></i>\n                    </ion-icon>\n                  </div>\n                </ion-item>\n              </div>\n              <!-- End Expandable - Filters Products - Header-->\n              <!-- Expandable - Filters Productsr - Body -->\n              <div class="item-accordion" [ngClass]="{\'active\': isGroupShown(group) }" [hidden]="!isGroupShown(group)">\n                <ion-item default-item no-lines *ngFor="let item of group.expandItems;" (tap)="onEvent(\'onCheckBoxClick\', item, $event);">\n                  <ion-label item-title>{{item.title}}</ion-label>\n                  <ion-checkbox [checked]="item.isChecked"></ion-checkbox>\n                </ion-item>\n              </div>\n              <!-- End Expandable - Filters Productsr- Body -->\n            </li>\n          </ul>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer padding>\n  <button box-shadow block ion-button default-button *ngIf="data != null" (click)="onEvent(\'onButtonClick\', null, $event)">{{data.button}}</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/expandable/layout-3/expandable.html"*/
=======
            selector: 'google-card-layout-1',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\google-card\layout-1\google-card.html"*/'<!--Theme Google Card - Full Image Cards-->\n\n<ion-content padding-top>\n\n  <ion-grid no-padding>\n\n    <ion-row *ngIf="data != null">\n\n      <ion-col col-12 col-md-6 col-lg-4 *ngFor="let item of data.items;let i = index">\n\n        <ion-card text-left box-shadow margin-bottom>\n\n          <!--Card Image-->\n\n          <div card-image>\n\n            <img [src]="item.image" />\n\n            <div watch-now text-center (click)="onEvent(\'onItemClick\', item, $event)">\n\n              <button ion-button button-icon icon-center>\n\n                <ion-icon icon-large [name]="item.icon"></ion-icon>\n\n              </button >\n\n            </div>\n\n          </div>\n\n          <!--Card descriptiom-->\n\n          <ion-card-content>\n\n            <ion-card-title text-center>\n\n                <!--Card Subtitle-->\n\n                <h1 card-title>{{item.title}}</h1>\n\n                <!-- Icon Rating Star -->\n\n                <ion-icon *ngFor="let star of item.ratingStar.iconsStars; let i = index" (click)="onStarClass(item.ratingStar.iconsStars, i, $event)">\n\n                  <i icon-small *ngIf="star.isActive" class="icon {{star.iconActive}}"></i>\n\n                  <i icon-small *ngIf="!star.isActive" class="icon {{star.iconInactive}}"></i>\n\n                </ion-icon>\n\n                <!-- Reviews Star -->\n\n                <span span-medium>{{item.reviews}}</span>\n\n                <!--Card Body Text-->\n\n                <p margin-top card-body-text>{{item.description}}</p>\n\n            </ion-card-title>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\google-card\layout-1\google-card.html"*/
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
        }),
        __metadata("design:paramtypes", [])
    ], GoogleCardLayout1);
    return GoogleCardLayout1;
}());

//# sourceMappingURL=google-card-layout-1.js.map

/***/ })

});
//# sourceMappingURL=69.js.map