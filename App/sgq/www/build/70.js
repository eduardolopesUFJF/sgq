webpackJsonp([70],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableLayout1Module", function() { return ExpandableLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expandable_layout_1__ = __webpack_require__(842);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expandable_layout_1__ = __webpack_require__(814);
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExpandableLayout1Module = /** @class */ (function () {
    function ExpandableLayout1Module() {
    }
    ExpandableLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__expandable_layout_1__["a" /* ExpandableLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__expandable_layout_1__["a" /* ExpandableLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__expandable_layout_1__["a" /* ExpandableLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ExpandableLayout1Module);
    return ExpandableLayout1Module;
}());

//# sourceMappingURL=expandable-layout-1.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 842:
=======
/***/ 814:
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableLayout1; });
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


var ExpandableLayout1 = /** @class */ (function () {
    function ExpandableLayout1() {
    }
    ExpandableLayout1.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    ExpandableLayout1.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    ExpandableLayout1.prototype.isGroupShown = function (group) {
        return group.show;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ExpandableLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ExpandableLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ExpandableLayout1.prototype, "content", void 0);
    ExpandableLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
<<<<<<< HEAD
            selector: 'expandable-layout-1',template:/*ion-inline-start:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\expandable\layout-1\expandable.html"*/'<!-- Theme Expandable- List big image -->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <!-- Header List Big Image -->\n\n        <ion-list no-margin>\n\n          <ion-list-header transparent header-section no-lines padding-horizontal>\n\n            <h1 header-title>{{data.header}}</h1>\n\n          </ion-list-header>\n\n          <ul collapsible no-margin no-padding>\n\n            <li *ngFor="let group of data.items;">\n\n              <!-- List big image Header -->\n\n              <div collapsible-header (click)="toggleGroup(group)">\n\n                <ion-item default-item no-lines>\n\n                  <ion-thumbnail item-start>\n\n                    <img [src]="group.image" alt="{{group.title}}" />\n\n                  </ion-thumbnail>\n\n                  <h2 item-title>{{group.title}}</h2>\n\n                  <h3 item-subtitle text-wrap>{{group.description}}</h3>\n\n                </ion-item>\n\n              </div>\n\n              <!-- End List big image Header -->\n\n              <!-- List big image Body -->\n\n              <div item-accordion [ngClass]="{\'active\': isGroupShown(group) }" [hidden]="!isGroupShown(group)">\n\n                <ion-item default-item no-lines *ngFor="let item of group.expandItems;"\n\n                (click)="onEvent(\'onItemClick\', item, $event)">\n\n                  <!-- Avatar -->\n\n                  <ion-thumbnail item-start>\n\n                    <img [src]="item.image" [alt]="item.title" />\n\n                  </ion-thumbnail>\n\n                  <!-- Title -->\n\n                  <h2 subitem-title text-wrap>{{item.title}}</h2>\n\n                  <!-- Subtitle -->\n\n                  <h3 subitem-subtitle text-wrap>{{item.description}}</h3>\n\n                  <!-- Details item-->\n\n                  <span span-small>{{item.details}}</span>\n\n                </ion-item>\n\n              </div>\n\n              <!-- End List big image Body -->\n\n            </li>\n\n          </ul>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Arquivos\Freelancer\SGQ\App\sgq\src\core\list-view\expandable\layout-1\expandable.html"*/
=======
            selector: 'expandable-layout-1',template:/*ion-inline-start:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/list-view/expandable/layout-1/expandable.html"*/'<!-- Theme Expandable- List big image -->\n<ion-content>\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-row>\n      <ion-col col-12>\n        <!-- Header List Big Image -->\n        <ion-list no-margin>\n          <ion-list-header transparent header-section no-lines padding-horizontal>\n            <h1 header-title>{{data.header}}</h1>\n          </ion-list-header>\n          <ul collapsible no-margin no-padding>\n            <li *ngFor="let group of data.items;">\n              <!-- List big image Header -->\n              <div collapsible-header (click)="toggleGroup(group)">\n                <ion-item default-item no-lines>\n                  <ion-thumbnail item-start>\n                    <img [src]="group.image" alt="{{group.title}}" />\n                  </ion-thumbnail>\n                  <h2 item-title>{{group.title}}</h2>\n                  <h3 item-subtitle text-wrap>{{group.description}}</h3>\n                </ion-item>\n              </div>\n              <!-- End List big image Header -->\n              <!-- List big image Body -->\n              <div item-accordion [ngClass]="{\'active\': isGroupShown(group) }" [hidden]="!isGroupShown(group)">\n                <ion-item default-item no-lines *ngFor="let item of group.expandItems;"\n                (click)="onEvent(\'onItemClick\', item, $event)">\n                  <!-- Avatar -->\n                  <ion-thumbnail item-start>\n                    <img [src]="item.image" [alt]="item.title" />\n                  </ion-thumbnail>\n                  <!-- Title -->\n                  <h2 subitem-title text-wrap>{{item.title}}</h2>\n                  <!-- Subtitle -->\n                  <h3 subitem-subtitle text-wrap>{{item.description}}</h3>\n                  <!-- Details item-->\n                  <span span-small>{{item.details}}</span>\n                </ion-item>\n              </div>\n              <!-- End List big image Body -->\n            </li>\n          </ul>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/duduulopes/Desktop/sgq/App/sgq/src/core/list-view/expandable/layout-1/expandable.html"*/
>>>>>>> de8d8dcd1da236f3cd43d8a9e2e5ad6e84e68c99
        }),
        __metadata("design:paramtypes", [])
    ], ExpandableLayout1);
    return ExpandableLayout1;
}());

//# sourceMappingURL=expandable-layout-1.js.map

/***/ })

});
//# sourceMappingURL=70.js.map