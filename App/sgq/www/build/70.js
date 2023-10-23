webpackJsonp([70],{

<<<<<<< HEAD
/***/ 712:
=======
/***/ 714:
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableLayout3Module", function() { return ExpandableLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expandable_layout_2__ = __webpack_require__(816);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expandable_layout_3__ = __webpack_require__(847);
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExpandableLayout3Module = /** @class */ (function () {
    function ExpandableLayout3Module() {
    }
    ExpandableLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__expandable_layout_3__["a" /* ExpandableLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expandable_layout_3__["a" /* ExpandableLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__expandable_layout_3__["a" /* ExpandableLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ExpandableLayout3Module);
    return ExpandableLayout3Module;
}());

//# sourceMappingURL=expandable-layout-3.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 816:
=======
/***/ 847:
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableLayout3; });
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


var ExpandableLayout3 = /** @class */ (function () {
    function ExpandableLayout3() {
    }
    ExpandableLayout3.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ExpandableLayout3.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    ExpandableLayout3.prototype.isGroupShown = function (group) {
        return group.show;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ExpandableLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ExpandableLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ExpandableLayout3.prototype, "content", void 0);
    ExpandableLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'expandable-layout-2',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/expandable/layout-2/expandable.html"*/'<!-- Themes Expandable - Full image with CTA -->\n<ion-content>\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-row>\n      <ion-col col-12 no-padding no-margin>\n        <ion-list>\n          <ul no-margin no-padding class="collapsible">\n            <li margin *ngFor="let group of data.items;">\n              <!-- Expandable Full image with CTA Header-->\n              <div class="collapsible-header" (click)="toggleGroup(group)">\n                <ion-item no-margin no-padding no-lines background-size text-center [ngStyle]="{\'background-image\': \'url(\' + group.backgroundImage + \')\'}">\n                  <div watch-now text-center>\n                    <!-- Icon And Text For Read More-->\n                    <button ion-button button-icon icon-center>\n                    <ion-icon icon-large [name]="group.icon"></ion-icon>\n                  </button >\n                    </div>\n                </ion-item>\n              </div>\n              <!-- Expandable Full image with CTA Body -->\n              <div class="item-accordion" background-size [ngClass]="{\'active\': isGroupShown(group) }" [hidden]="!isGroupShown(group)" [ngStyle]="{\'background-image\': \'url(\' + data.listBackgroundImage + \')\'}">\n                <ion-item text-wrap no-lines text-center padding transparent>\n                  <!-- Titile -->\n                  <h2 subitem-title>{{group.expandItems.title}}</h2>\n                  <!-- Icon Rating Star -->\n                  <ion-icon padding-top *ngFor="let item of group.expandItems.iconsStars;let i = index"\n                  (click)="onStarClass(group.expandItems.iconsStars, i, $event);">\n                    <i icon-small *ngIf="item.isActive" class="icon {{item.iconActive}}"></i>\n                    <i icon-small *ngIf="!item.isActive" class="icon {{item.iconInactive}}"></i>\n                  </ion-icon>\n                  <!-- Reviews Star -->\n                  <span span-medium>{{group.expandItems.reviews}}</span>\n                  <div padding-top (click)="onEvent(\'onItemClick\', group, $event)">\n                    <!-- Description -->\n                    <p subitem-subtitle>{{group.expandItems.description}}</p>\n                  </div>\n                </ion-item>\n              </div>\n            </li>\n          </ul>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/expandable/layout-2/expandable.html"*/
=======
            selector: 'expandable-layout-3',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\expandable\layout-3\expandable.html"*/'<!-- Themes Expandable - Filters Products -->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row>\n\n      <ion-col col-12 no-padding no-margin>\n\n        <!-- Header -->\n\n        <ion-list>\n\n          <ion-list-header transparent header-section no-lines padding-horizontal>\n\n            <h1 header-title text-capitalize>{{data.header}}</h1>\n\n          </ion-list-header>\n\n          <!--- List Content -->\n\n          <ul no-margin no-padding class="collapsible">\n\n            <li no-margin *ngFor="let group of data.items;">\n\n              <!-- Expandable - Filters Products - Header-->\n\n              <div class="collapsible-header" no-margin no-padding (click)="toggleGroup(group)">\n\n                <ion-item default-item no-lines>\n\n                  <h2 item-title text-capitalize>{{group.title}}</h2>\n\n                  <div item-content>\n\n                    <ion-icon icon-medium>\n\n                      <i class="icon {{group.icon}}"></i>\n\n                    </ion-icon>\n\n                  </div>\n\n                </ion-item>\n\n              </div>\n\n              <!-- End Expandable - Filters Products - Header-->\n\n              <!-- Expandable - Filters Productsr - Body -->\n\n              <div class="item-accordion" [ngClass]="{\'active\': isGroupShown(group) }" [hidden]="!isGroupShown(group)">\n\n                <ion-item default-item no-lines *ngFor="let item of group.expandItems;" (tap)="onEvent(\'onCheckBoxClick\', item, $event);">\n\n                  <ion-label item-title>{{item.title}}</ion-label>\n\n                  <ion-checkbox [checked]="item.isChecked"></ion-checkbox>\n\n                </ion-item>\n\n              </div>\n\n              <!-- End Expandable - Filters Productsr- Body -->\n\n            </li>\n\n          </ul>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<ion-footer padding>\n\n  <button box-shadow block ion-button default-button *ngIf="data != null" (click)="onEvent(\'onButtonClick\', null, $event)">{{data.button}}</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\expandable\layout-3\expandable.html"*/
>>>>>>> e231fdfa1cb4eccbf9b4b4416cebb1aa15234b51
        }),
        __metadata("design:paramtypes", [])
    ], ExpandableLayout3);
    return ExpandableLayout3;
}());

//# sourceMappingURL=expandable-layout-3.js.map

/***/ })

});
//# sourceMappingURL=70.js.map