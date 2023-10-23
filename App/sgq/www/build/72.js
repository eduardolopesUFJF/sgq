webpackJsonp([72],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableLayout1Module", function() { return ExpandableLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expandable_layout_1__ = __webpack_require__(817);
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

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableLayout1; });
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
            selector: 'expandable-layout-1',template:/*ion-inline-start:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/expandable/layout-1/expandable.html"*/'<!-- Theme Expandable- List big image -->\n<ion-content>\n  <ion-grid no-padding *ngIf="data != null">\n    <ion-row>\n      <ion-col col-12>\n        <!-- Header List Big Image -->\n        <ion-list no-margin>\n          <ion-list-header transparent header-section no-lines padding-horizontal>\n            <h1 header-title>{{data.header}}</h1>\n          </ion-list-header>\n          <ul collapsible no-margin no-padding>\n            <li *ngFor="let group of data.items;">\n              <!-- List big image Header -->\n              <div collapsible-header (click)="toggleGroup(group)">\n                <ion-item default-item no-lines>\n                  <ion-thumbnail item-start>\n                    <img [src]="group.image" alt="{{group.title}}" />\n                  </ion-thumbnail>\n                  <h2 item-title>{{group.title}}</h2>\n                  <h3 item-subtitle text-wrap>{{group.description}}</h3>\n                </ion-item>\n              </div>\n              <!-- End List big image Header -->\n              <!-- List big image Body -->\n              <div item-accordion [ngClass]="{\'active\': isGroupShown(group) }" [hidden]="!isGroupShown(group)">\n                <ion-item default-item no-lines *ngFor="let item of group.expandItems;"\n                (click)="onEvent(\'onItemClick\', item, $event)">\n                  <!-- Avatar -->\n                  <ion-thumbnail item-start>\n                    <img [src]="item.image" [alt]="item.title" />\n                  </ion-thumbnail>\n                  <!-- Title -->\n                  <h2 subitem-title text-wrap>{{item.title}}</h2>\n                  <!-- Subtitle -->\n                  <h3 subitem-subtitle text-wrap>{{item.description}}</h3>\n                  <!-- Details item-->\n                  <span span-small>{{item.details}}</span>\n                </ion-item>\n              </div>\n              <!-- End List big image Body -->\n            </li>\n          </ul>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/user223953/Desktop/sgq/App/sgq/src/core/list-view/expandable/layout-1/expandable.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ExpandableLayout1);
    return ExpandableLayout1;
}());

//# sourceMappingURL=expandable-layout-1.js.map

/***/ })

});
//# sourceMappingURL=72.js.map