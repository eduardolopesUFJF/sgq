webpackJsonp([0],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsLayout1Module", function() { return MapsLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps_layout_1__ = __webpack_require__(855);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elastic_header_elastic_header_module__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_app_settings__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MapsLayout1Module = /** @class */ (function () {
    function MapsLayout1Module() {
    }
    MapsLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__maps_layout_1__["a" /* MapsLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__elastic_header_elastic_header_module__["a" /* ElasticHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__config_app_settings__["a" /* AppSettings */].MAP_KEY),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__maps_layout_1__["a" /* MapsLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__maps_layout_1__["a" /* MapsLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], MapsLayout1Module);
    return MapsLayout1Module;
}());

//# sourceMappingURL=maps-layout-1.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsAPIWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps_api_loader_maps_api_loader__ = __webpack_require__(778);



/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = /** @class */ (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._loader.load().then(function () {
                var map = new google.maps.Map(el, mapOptions);
                _this._mapResolver(map);
                return;
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    /**
       * Creates a google map marker with the map context
       */
    GoogleMapsAPIWrapper.prototype.createMarker = /**
       * Creates a google map marker with the map context
       */
    function (options, addToMap) {
        if (options === void 0) { options = {}; }
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (addToMap) {
                options.map = map;
            }
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    /**
       * Creates a google.map.Circle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createCircle = /**
       * Creates a google.map.Circle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    /**
       * Creates a google.map.Rectangle for the current map.
       */
    GoogleMapsAPIWrapper.prototype.createRectangle = /**
       * Creates a google.map.Rectangle for the current map.
       */
    function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Rectangle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Creates a new google.map.Data layer for the current map
     */
    /**
       * Creates a new google.map.Data layer for the current map
       */
    GoogleMapsAPIWrapper.prototype.createDataLayer = /**
       * Creates a new google.map.Data layer for the current map
       */
    function (options) {
        return this._map.then(function (m) {
            var data = new google.maps.Data(options);
            data.setMap(m);
            return data;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    /**
       * Determines if given coordinates are insite a Polygon path.
       */
    GoogleMapsAPIWrapper.prototype.containsLocation = /**
       * Determines if given coordinates are insite a Polygon path.
       */
    function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.clearInstanceListeners = function () {
        this._map.then(function (map) {
            google.maps.event.clearInstanceListeners(map);
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.getMapTypeId = function () {
        return this._map.then(function (map) { return map.getMapTypeId(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
        return this._map.then(function (map) { return map.panBy(x, y); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    GoogleMapsAPIWrapper.prototype.getNativeMap = /**
       * Returns the native Google Maps Map instance. Be careful when using this instance directly.
       */
    function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    /**
       * Triggers the given event name on the map instance.
       */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = /**
       * Triggers the given event name on the map instance.
       */
    function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    GoogleMapsAPIWrapper.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    GoogleMapsAPIWrapper.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__maps_api_loader_maps_api_loader__["a" /* MapsAPILoader */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    return GoogleMapsAPIWrapper;
}());

//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsAPILoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

var MapsAPILoader = /** @class */ (function () {
    function MapsAPILoader() {
    }
    MapsAPILoader.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    return MapsAPILoader;
}());

//# sourceMappingURL=maps-api-loader.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkerManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(777);



var MarkerManager = /** @class */ (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.updateClickable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
    };
    MarkerManager.prototype.updateAnimation = function (marker) {
        return this._markers.get(marker).then(function (m) {
            if (typeof marker.animation === 'string') {
                m.setAnimation(google.maps.Animation[marker.animation]);
            }
            else {
                m.setAnimation(marker.animation);
            }
        });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var markerPromise = this._mapsWrapper.createMarker({
            position: { lat: marker.latitude, lng: marker.longitude },
            label: marker.label,
            draggable: marker.draggable,
            icon: marker.iconUrl,
            opacity: marker.opacity,
            visible: marker.visible,
            zIndex: marker.zIndex,
            title: marker.title,
            clickable: marker.clickable,
            animation: (typeof marker.animation === 'string') ? google.maps.Animation[marker.animation] : marker.animation
        });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    MarkerManager.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    MarkerManager.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    return MarkerManager;
}());

//# sourceMappingURL=marker-manager.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitBoundsAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FitBoundsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__maps_api_loader_maps_api_loader__ = __webpack_require__(778);




/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
var /**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
FitBoundsAccessor = /** @class */ (function () {
    function FitBoundsAccessor() {
    }
    return FitBoundsAccessor;
}());
/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */

/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
var FitBoundsService = /** @class */ (function () {
    function FitBoundsService(loader) {
        var _this = this;
        this._boundsChangeSampleTime$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](200);
        this._includeInBounds$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](new Map());
        this.bounds$ = Object(__WEBPACK_IMPORTED_MODULE_1_rxjs__["from"])(loader.load()).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["flatMap"])(function () { return _this._includeInBounds$; }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["sample"])(this._boundsChangeSampleTime$.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function (time) { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs__["timer"])(0, time); }))), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (includeInBounds) { return _this._generateBounds(includeInBounds); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["shareReplay"])(1));
    }
    FitBoundsService.prototype._generateBounds = function (includeInBounds) {
        var bounds = new google.maps.LatLngBounds();
        includeInBounds.forEach(function (b) { return bounds.extend(b); });
        return bounds;
    };
    FitBoundsService.prototype.addToBounds = function (latLng) {
        var id = this._createIdentifier(latLng);
        if (this._includeInBounds$.value.has(id)) {
            return;
        }
        var map = this._includeInBounds$.value;
        map.set(id, latLng);
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.removeFromBounds = function (latLng) {
        var map = this._includeInBounds$.value;
        map.delete(this._createIdentifier(latLng));
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.changeFitBoundsChangeSampleTime = function (timeMs) {
        this._boundsChangeSampleTime$.next(timeMs);
    };
    FitBoundsService.prototype.getBounds$ = function () {
        return this.bounds$;
    };
    FitBoundsService.prototype._createIdentifier = function (latLng) {
        return latLng.lat + "+" + latLng.lng;
    };
    FitBoundsService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    FitBoundsService.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__maps_api_loader_maps_api_loader__["a" /* MapsAPILoader */], },
    ]; };
    return FitBoundsService;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elastic_header__ = __webpack_require__(783);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ElasticHeaderModule = /** @class */ (function () {
    function ElasticHeaderModule() {
    }
    ElasticHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__elastic_header__["a" /* ElasticHeader */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__elastic_header__["a" /* ElasticHeader */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ElasticHeaderModule);
    return ElasticHeaderModule;
}());

//# sourceMappingURL=elastic-header.module.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElasticHeader = /** @class */ (function () {
    function ElasticHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ElasticHeader.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollerHandle = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = this.scrollerHandle.firstElementChild;
        this.headerHeight = this.scrollerHandle.clientHeight;
        this.ticking = false;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        window.addEventListener('resize', function () {
            _this.headerHeight = _this.scrollerHandle.clientHeight;
        }, false);
        this.scrollerHandle.addEventListener('scroll', function () {
            if (!_this.ticking) {
                window.requestAnimationFrame(function () {
                    _this.updateElasticHeader();
                });
            }
            _this.ticking = true;
        });
    };
    ElasticHeader.prototype.updateElasticHeader = function () {
        this.scrollTop = this.scrollerHandle.scrollTop;
        if (this.scrollTop >= 0) {
            this.translateAmt = this.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -this.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
        this.ticking = false;
    };
    ElasticHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[elastic-header]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ElasticHeader);
    return ElasticHeader;
}());

//# sourceMappingURL=elastic-header.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircleManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(777);



var CircleManager = /** @class */ (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    /**
     * Removes the given circle from the map.
     */
    /**
       * Removes the given circle from the map.
       */
    CircleManager.prototype.removeCircle = /**
       * Removes the given circle from the map.
       */
    function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) { return c.setOptions(options); });
    };
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    CircleManager.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    CircleManager.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    return CircleManager;
}());

//# sourceMappingURL=circle-manager.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RectangleManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(777);



var RectangleManager = /** @class */ (function () {
    function RectangleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    RectangleManager.prototype.addRectangle = function (rectangle) {
        this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex
        }));
    };
    /**
     * Removes the given rectangle from the map.
     */
    /**
       * Removes the given rectangle from the map.
       */
    RectangleManager.prototype.removeRectangle = /**
       * Removes the given rectangle from the map.
       */
    function (rectangle) {
        var _this = this;
        return this._rectangles.get(rectangle).then(function (r) {
            r.setMap(null);
            _this._rectangles.delete(rectangle);
        });
    };
    RectangleManager.prototype.setOptions = function (rectangle, options) {
        return this._rectangles.get(rectangle).then(function (r) { return r.setOptions(options); });
    };
    RectangleManager.prototype.getBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) { return r.getBounds(); });
    };
    RectangleManager.prototype.setBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            });
        });
    };
    RectangleManager.prototype.setEditable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setEditable(rectangle.editable);
        });
    };
    RectangleManager.prototype.setDraggable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setDraggable(rectangle.draggable);
        });
    };
    RectangleManager.prototype.setVisible = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setVisible(rectangle.visible);
        });
    };
    RectangleManager.prototype.createEventObservable = function (eventName, rectangle) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(function (observer) {
            var listener = null;
            _this._rectangles.get(rectangle).then(function (r) {
                listener = r.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    RectangleManager.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    RectangleManager.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    return RectangleManager;
}());

//# sourceMappingURL=rectangle-manager.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoWindowManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__marker_manager__ = __webpack_require__(780);




var InfoWindowManager = /** @class */ (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) {
            return i.setPosition({
                lat: infoWindow.latitude,
                lng: infoWindow.longitude
            });
        });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    InfoWindowManager.prototype.createEventObservable = /**
        * Creates a Google Maps event listener for the given InfoWindow as an Observable
        */
    function (eventName, infoWindow) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    InfoWindowManager.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    InfoWindowManager.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__marker_manager__["a" /* MarkerManager */], },
    ]; };
    return InfoWindowManager;
}());

//# sourceMappingURL=info-window-manager.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolygonManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(777);



var PolygonManager = /** @class */ (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolygonManager.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PolygonManager.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    return PolygonManager;
}());

//# sourceMappingURL=polygon-manager.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolylineManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(777);



var PolylineManager = /** @class */ (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var path = PolylineManager._convertPoints(line);
        var polylinePromise = this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolylineManager.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PolylineManager.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    return PolylineManager;
}());

//# sourceMappingURL=polyline-manager.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KmlLayerManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(777);



/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = /** @class */ (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    /**
       * Adds a new KML Layer to the map.
       */
    KmlLayerManager.prototype.addKmlLayer = /**
       * Adds a new KML Layer to the map.
       */
    function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    KmlLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given KmlLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    KmlLayerManager.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    KmlLayerManager.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    return KmlLayerManager;
}());

//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataLayerManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__ = __webpack_require__(777);



/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = /** @class */ (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    /**
       * Adds a new Data Layer to the map.
       */
    DataLayerManager.prototype.addDataLayer = /**
       * Adds a new Data Layer to the map.
       */
    function (layer) {
        var _this = this;
        var newLayer = this._wrapper.createDataLayer({
            style: layer.style
        })
            .then(function (d) {
            if (layer.geoJson) {
                _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    DataLayerManager.prototype.createEventObservable = /**
       * Creates a Google Maps event listener for the given DataLayer as an Observable
       */
    function (eventName, layer) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    DataLayerManager.prototype.getDataFeatures = /**
       * Extract features from a geoJson using google.maps Data Class
       * @param d : google.maps.Data class instance
       * @param geoJson : url or geojson object
       */
    function (d, geoJson) {
        return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
                try {
                    var features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject("Impossible to extract features from geoJson: wrong argument type");
            }
        });
    };
    DataLayerManager.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    DataLayerManager.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_2__google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
    ]; };
    return DataLayerManager;
}());

//# sourceMappingURL=data-layer-manager.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmInfoWindow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_info_window_manager__ = __webpack_require__(787);


var infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmInfoWindow = /** @class */ (function () {
    function AgmInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
           * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
           */
        this.isOpen = false;
        /**
           * Emits an event when the info window is closed.
           */
        this.infoWindowClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    AgmInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    AgmInfoWindow.prototype._registerEventListeners = function () {
        var _this = this;
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this.isOpen = false;
            _this.infoWindowClose.emit();
        });
    };
    AgmInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this.open() : this.close();
    };
    AgmInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    /**
     * Opens the info window.
     */
    /**
       * Opens the info window.
       */
    AgmInfoWindow.prototype.open = /**
       * Opens the info window.
       */
    function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    /**
       * Closes the info window.
       */
    AgmInfoWindow.prototype.close = /**
       * Closes the info window.
       */
    function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
    };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.toString = /** @internal */
    function () { return 'AgmInfoWindow-' + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmInfoWindow.prototype.ngOnDestroy = /** @internal */
    function () { this._infoWindowManager.deleteInfoWindow(this); };
    AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
    AgmInfoWindow.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'agm-info-window',
                    template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmInfoWindow.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_info_window_manager__["a" /* InfoWindowManager */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    AgmInfoWindow.propDecorators = {
        "latitude": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "longitude": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "disableAutoPan": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "zIndex": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "maxWidth": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "isOpen": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "infoWindowClose": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return AgmInfoWindow;
}());

//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmPolylinePoint; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * SembGoogleMapPolyline}
 */
var AgmPolylinePoint = /** @class */ (function () {
    function AgmPolylinePoint() {
        /**
           * This event emitter gets emitted when the position of the point changed.
           */
        this.positionChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AgmPolylinePoint.prototype.ngOnChanges = function (changes) {
        if (changes['latitude'] || changes['longitude']) {
            var position = {
                lat: changes['latitude'].currentValue,
                lng: changes['longitude'].currentValue
            };
            this.positionChanged.emit(position);
        }
    };
    AgmPolylinePoint.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: 'agm-polyline-point' },] },
    ];
    /** @nocollapse */
    AgmPolylinePoint.ctorParameters = function () { return []; };
    AgmPolylinePoint.propDecorators = {
        "latitude": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "longitude": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "positionChanged": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return AgmPolylinePoint;
}());

//# sourceMappingURL=polyline-point.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GoogleMapsScriptProtocol */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LAZY_MAPS_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LazyMapsAPILoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_browser_globals__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps_api_loader__ = __webpack_require__(778);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var GoogleMapsScriptProtocol;
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
var LAZY_MAPS_API_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');
var LazyMapsAPILoader = /** @class */ (function (_super) {
    __extends(LazyMapsAPILoader, _super);
    function LazyMapsAPILoader(config, w, d) {
        if (config === void 0) { config = null; }
        var _this = _super.call(this) || this;
        _this._SCRIPT_ID = 'agmGoogleMapsApiScript';
        _this.callbackName = "agmLazyMapsAPILoader";
        _this._config = config || {};
        _this._windowRef = w;
        _this._documentRef = d;
        return _this;
    }
    LazyMapsAPILoader.prototype.load = function () {
        var window = this._windowRef.getNativeWindow();
        if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            return Promise.resolve();
        }
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        // this can happen in HMR situations or Stackblitz.io editors.
        var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
        if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);
            return this._scriptLoadingPromise;
        }
        var script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.id = this._SCRIPT_ID;
        script.src = this._getScriptSrc(this.callbackName);
        this._assignScriptLoadingPromise(script);
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LazyMapsAPILoader.prototype._assignScriptLoadingPromise = function (scriptElem) {
        var _this = this;
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this._windowRef.getNativeWindow()[_this.callbackName] = function () {
                resolve();
            };
            scriptElem.onerror = function (error) {
                reject(error);
            };
        });
    };
    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
        var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        var protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        var queryParams = {
            v: this._config.apiVersion || '3',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) {
            return entry.key + "=" + entry.value;
        })
            .join('&');
        return protocol + "//" + hostAndPath + "?" + params;
    };
    LazyMapsAPILoader.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    LazyMapsAPILoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"], args: [LAZY_MAPS_API_CONFIG,] },] },
        { type: __WEBPACK_IMPORTED_MODULE_1__utils_browser_globals__["c" /* WindowRef */], },
        { type: __WEBPACK_IMPORTED_MODULE_1__utils_browser_globals__["b" /* DocumentRef */], },
    ]; };
    return LazyMapsAPILoader;
}(__WEBPACK_IMPORTED_MODULE_2__maps_api_loader__["a" /* MapsAPILoader */]));

//# sourceMappingURL=lazy-maps-api-loader.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_google_maps_api_wrapper__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_managers_circle_manager__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_managers_rectangle_manager__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_managers_info_window_manager__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_managers_marker_manager__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_managers_polygon_manager__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_managers_polyline_manager__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_managers_kml_layer_manager__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_managers_data_layer_manager__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_fit_bounds__ = __webpack_require__(781);











/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMap = /** @class */ (function () {
    function AgmMap(_elem, _mapsWrapper, _fitBoundsService) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._fitBoundsService = _fitBoundsService;
        /**
           * The longitude that defines the center of the map.
           */
        this.longitude = 0;
        /**
           * The latitude that defines the center of the map.
           */
        this.latitude = 0;
        /**
           * The zoom level of the map. The default zoom level is 8.
           */
        this.zoom = 8;
        /**
           * Enables/disables if map is draggable.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
           * Enables/disables zoom and center on double click. Enabled by default.
           */
        this.disableDoubleClickZoom = false;
        /**
           * Enables/disables all default UI of the Google map. Please note: When the map is created, this
           * value cannot get updated.
           */
        this.disableDefaultUI = false;
        /**
           * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
           */
        this.scrollwheel = true;
        /**
           * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
           * enabled by default.
           */
        this.keyboardShortcuts = true;
        /**
           * The enabled/disabled state of the Zoom control.
           */
        this.zoomControl = true;
        /**
           * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
           * modes, these styles will only apply to labels and geometry.
           */
        this.styles = [];
        /**
           * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
           * used to
           * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
           */
        this.usePanning = false;
        /**
           * The initial enabled/disabled state of the Street View Pegman control.
           * This control is part of the default UI, and should be set to false when displaying a map type
           * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
           */
        this.streetViewControl = true;
        /**
           * Sets the viewport to contain the given bounds.
           * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
           */
        this.fitBounds = false;
        /**
           * The initial enabled/disabled state of the Scale control. This is disabled by default.
           */
        this.scaleControl = false;
        /**
           * The initial enabled/disabled state of the Map type control.
           */
        this.mapTypeControl = false;
        /**
           * The initial enabled/disabled state of the Pan control.
           */
        this.panControl = false;
        /**
           * The initial enabled/disabled state of the Rotate control.
           */
        this.rotateControl = false;
        /**
           * The initial enabled/disabled state of the Fullscreen control.
           */
        this.fullscreenControl = false;
        /**
           * The map mapTypeId. Defaults to 'roadmap'.
           */
        this.mapTypeId = 'roadmap';
        /**
           * When false, map icons are not clickable. A map icon represents a point of interest,
           * also known as a POI. By default map icons are clickable.
           */
        this.clickableIcons = true;
        /**
           * This setting controls how gestures on the map are handled.
           * Allowed values:
           * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
           * - 'greedy'      (All touch gestures pan or zoom the map.)
           * - 'none'        (The map cannot be panned or zoomed by user gestures.)
           * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
           */
        this.gestureHandling = 'auto';
        this._observableSubscriptions = [];
        /**
           * This event emitter gets emitted when the user clicks on the map (but not when they click on a
           * marker or infoWindow).
           */
        this.mapClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user right-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapRightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user double-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */
        this.mapDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event emitter is fired when the map center changes.
           */
        this.centerChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the viewport bounds have changed.
           */
        this.boundsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the mapTypeId property changes.
           */
        this.mapTypeIdChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the map becomes idle after panning or zooming.
           */
        this.idle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the zoom level has changed.
           */
        this.zoomChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the google map is fully initialized.
           * You get the google.maps.Map instance as a result of this EventEmitter.
           */
        this.mapReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnInit = /** @internal */
    function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling
        })
            .then(function () { return _this._mapsWrapper.getNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleIdleEvent();
    };
    /** @internal */
    /** @internal */
    AgmMap.prototype.ngOnDestroy = /** @internal */
    function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    };
    /* @internal */
    /* @internal */
    AgmMap.prototype.ngOnChanges = /* @internal */
    function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    AgmMap.prototype.triggerResize = /**
       * Triggers a resize event on the google map instance.
       * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
       * Returns a promise that gets resolved after the event was triggered.
       */
    function (recenter) {
        var _this = this;
        if (recenter === void 0) { recenter = true; }
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () {
                return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                    if (recenter) {
                        _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                    }
                    resolve();
                });
            });
        });
    };
    AgmMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    };
    AgmMap.prototype._setCenter = function () {
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                this._updateBounds(this.fitBounds);
        }
    };
    AgmMap.prototype._subscribeToFitBoundsUpdates = function () {
        var _this = this;
        this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(function (b) { return _this._updateBounds(b); });
    };
    AgmMap.prototype._updateBounds = function (bounds) {
        if (this._isLatLngBoundsLiteral(bounds) && google && google.maps) {
            var newBounds = google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds);
            return;
        }
        this._mapsWrapper.fitBounds(bounds);
    };
    AgmMap.prototype._isLatLngBoundsLiteral = function (bounds) {
        return bounds != null && bounds.extend === undefined;
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapTypeIdChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this._mapsWrapper.getMapTypeId().then(function (mapTypeId) { _this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = { coords: { lat: event.latLng.lat(), lng: event.latLng.lng() } };
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    /**
       * Map option attributes that can change over time
       */
    AgmMap._mapOptionsAttributes = [
        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
        'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
        'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
        'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
        'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
        'mapTypeId', 'clickableIcons', 'gestureHandling'
    ];
    AgmMap.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'agm-map',
                    providers: [
                        __WEBPACK_IMPORTED_MODULE_1__services_google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], __WEBPACK_IMPORTED_MODULE_5__services_managers_marker_manager__["a" /* MarkerManager */], __WEBPACK_IMPORTED_MODULE_4__services_managers_info_window_manager__["a" /* InfoWindowManager */], __WEBPACK_IMPORTED_MODULE_2__services_managers_circle_manager__["a" /* CircleManager */], __WEBPACK_IMPORTED_MODULE_3__services_managers_rectangle_manager__["a" /* RectangleManager */],
                        __WEBPACK_IMPORTED_MODULE_7__services_managers_polyline_manager__["a" /* PolylineManager */], __WEBPACK_IMPORTED_MODULE_6__services_managers_polygon_manager__["a" /* PolygonManager */], __WEBPACK_IMPORTED_MODULE_8__services_managers_kml_layer_manager__["a" /* KmlLayerManager */], __WEBPACK_IMPORTED_MODULE_9__services_managers_data_layer_manager__["a" /* DataLayerManager */], __WEBPACK_IMPORTED_MODULE_9__services_managers_data_layer_manager__["a" /* DataLayerManager */],
                        __WEBPACK_IMPORTED_MODULE_10__services_fit_bounds__["b" /* FitBoundsService */]
                    ],
                    host: {
                        // todo: deprecated - we will remove it with the next version
                        '[class.sebm-google-map-container]': 'true'
                    },
                    styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "],
                    template: "\n    <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n    <div class='agm-map-content'>\n      <ng-content></ng-content>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    AgmMap.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_1__services_google_maps_api_wrapper__["a" /* GoogleMapsAPIWrapper */], },
        { type: __WEBPACK_IMPORTED_MODULE_10__services_fit_bounds__["b" /* FitBoundsService */], },
    ]; };
    AgmMap.propDecorators = {
        "longitude": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "latitude": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "zoom": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "minZoom": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "maxZoom": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "draggable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['mapDraggable',] },],
        "disableDoubleClickZoom": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "disableDefaultUI": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "scrollwheel": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "backgroundColor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "draggableCursor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "draggingCursor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "keyboardShortcuts": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "zoomControl": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "zoomControlOptions": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "styles": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "usePanning": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "streetViewControl": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "streetViewControlOptions": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "fitBounds": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "scaleControl": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "scaleControlOptions": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "mapTypeControl": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "mapTypeControlOptions": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "panControl": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "panControlOptions": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "rotateControl": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "rotateControlOptions": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "fullscreenControl": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "fullscreenControlOptions": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "mapTypeId": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "clickableIcons": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "gestureHandling": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "mapClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mapRightClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mapDblClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "centerChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "boundsChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mapTypeIdChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "idle": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "zoomChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mapReady": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return AgmMap;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmCircle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_circle_manager__ = __webpack_require__(785);


var AgmCircle = /** @class */ (function () {
    function AgmCircle(_manager) {
        this._manager = _manager;
        /**
           * Indicates whether this Circle handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this circle over the map. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this circle by dragging the control points shown at
           * the center and around the circumference of the circle. Defaults to false.
           */
        this.editable = false;
        /**
           * The radius in meters on the Earth's surface.
           */
        this.radius = 0;
        /**
           * The stroke position. Defaults to CENTER.
           * This property is not supported on Internet Explorer 8 and earlier.
           */
        this.strokePosition = 'CENTER';
        /**
           * The stroke width in pixels.
           */
        this.strokeWeight = 0;
        /**
           * Whether this circle is visible on the map. Defaults to true.
           */
        this.visible = true;
        /**
           * This event is fired when the circle's center is changed.
           */
        this.centerChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the circle.
           */
        this.circleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the circle.
           */
        this.circleDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the circle.
           */
        this.drag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the circle.
           */
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the circle.
           */
        this.dragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the circle.
           */
        this.mouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the circle.
           */
        this.mouseMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired on circle mouseout.
           */
        this.mouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired on circle mouseover.
           */
        this.mouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the DOM mouseup event is fired on the circle.
           */
        this.mouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the circle's radius is changed.
           */
        this.radiusChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the circle is right-clicked on.
           */
        this.rightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    /** @internal */
    AgmCircle.prototype.ngOnInit = /** @internal */
    function () {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmCircle.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    };
    AgmCircle.prototype._updateCircleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmCircle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmCircle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                switch (eventName) {
                    case 'radius_changed':
                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                        break;
                    case 'center_changed':
                        _this._manager.getCenter(_this).then(function (center) {
                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
                        });
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    };
    /** @internal */
    /** @internal */
    AgmCircle.prototype.ngOnDestroy = /** @internal */
    function () {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    };
    /**
     * Gets the LatLngBounds of this Circle.
     */
    /**
       * Gets the LatLngBounds of this Circle.
       */
    AgmCircle.prototype.getBounds = /**
       * Gets the LatLngBounds of this Circle.
       */
    function () { return this._manager.getBounds(this); };
    AgmCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
    AgmCircle._mapOptions = [
        'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
        'visible', 'zIndex', 'clickable'
    ];
    AgmCircle.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: 'agm-circle'
                },] },
    ];
    /** @nocollapse */
    AgmCircle.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_circle_manager__["a" /* CircleManager */], },
    ]; };
    AgmCircle.propDecorators = {
        "latitude": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "longitude": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "clickable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "draggable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['circleDraggable',] },],
        "editable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "fillColor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "fillOpacity": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "radius": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "strokeColor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "strokeOpacity": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "strokePosition": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "strokeWeight": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "visible": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "zIndex": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "centerChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "circleClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "circleDblClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "drag": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "dragEnd": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "dragStart": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mouseDown": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mouseMove": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mouseOut": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mouseOver": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mouseUp": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "radiusChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "rightClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return AgmCircle;
}());

//# sourceMappingURL=circle.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmRectangle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_rectangle_manager__ = __webpack_require__(786);


var AgmRectangle = /** @class */ (function () {
    function AgmRectangle(_manager) {
        this._manager = _manager;
        /**
           * Indicates whether this Rectangle handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this rectangle over the map. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this rectangle by dragging the control points shown at
           * the center and around the circumference of the rectangle. Defaults to false.
           */
        this.editable = false;
        /**
           * The stroke position. Defaults to CENTER.
           * This property is not supported on Internet Explorer 8 and earlier.
           */
        this.strokePosition = 'CENTER';
        /**
           * The stroke width in pixels.
           */
        this.strokeWeight = 0;
        /**
           * Whether this rectangle is visible on the map. Defaults to true.
           */
        this.visible = true;
        /**
           * This event is fired when the rectangle's is changed.
           */
        this.boundsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the rectangle.
           */
        this.rectangleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event emitter gets emitted when the user clicks on the rectangle.
           */
        this.rectangleDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the rectangle.
           */
        this.drag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the rectangle.
           */
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the rectangle.
           */
        this.dragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the rectangle.
           */
        this.mouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the rectangle.
           */
        this.mouseMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired on rectangle mouseout.
           */
        this.mouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired on rectangle mouseover.
           */
        this.mouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the DOM mouseup event is fired on the rectangle.
           */
        this.mouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the rectangle is right-clicked on.
           */
        this.rightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    /** @internal */
    AgmRectangle.prototype.ngOnInit = /** @internal */
    function () {
        this._manager.addRectangle(this);
        this._rectangleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    /** @internal */
    AgmRectangle.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (!this._rectangleAddedToManager) {
            return;
        }
        if (changes['north'] ||
            changes['east'] ||
            changes['south'] ||
            changes['west']) {
            this._manager.setBounds(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        this._updateRectangleOptionsChanges(changes);
    };
    AgmRectangle.prototype._updateRectangleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmRectangle._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
        });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmRectangle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('bounds_changed', this.boundsChange);
        events.set('click', this.rectangleClick);
        events.set('dblclick', this.rectangleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager
                .createEventObservable(eventName, _this)
                .subscribe(function (value) {
                switch (eventName) {
                    case 'bounds_changed':
                        _this._manager.getBounds(_this).then(function (bounds) {
                            return eventEmitter.emit({
                                north: bounds.getNorthEast().lat(),
                                east: bounds.getNorthEast().lng(),
                                south: bounds.getSouthWest().lat(),
                                west: bounds.getSouthWest().lng()
                            });
                        });
                        break;
                    default:
                        eventEmitter.emit({
                            coords: { lat: value.latLng.lat(), lng: value.latLng.lng() }
                        });
                }
            }));
        });
    };
    /** @internal */
    /** @internal */
    AgmRectangle.prototype.ngOnDestroy = /** @internal */
    function () {
        this._eventSubscriptions.forEach(function (s) {
            s.unsubscribe();
        });
        this._eventSubscriptions = null;
        this._manager.removeRectangle(this);
    };
    /**
     * Gets the LatLngBounds of this Rectangle.
     */
    /**
       * Gets the LatLngBounds of this Rectangle.
       */
    AgmRectangle.prototype.getBounds = /**
       * Gets the LatLngBounds of this Rectangle.
       */
    function () {
        return this._manager.getBounds(this);
    };
    AgmRectangle._mapOptions = [
        'fillColor',
        'fillOpacity',
        'strokeColor',
        'strokeOpacity',
        'strokePosition',
        'strokeWeight',
        'visible',
        'zIndex',
        'clickable'
    ];
    AgmRectangle.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: 'agm-rectangle'
                },] },
    ];
    /** @nocollapse */
    AgmRectangle.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_rectangle_manager__["a" /* RectangleManager */], },
    ]; };
    AgmRectangle.propDecorators = {
        "north": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "east": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "south": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "west": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "clickable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "draggable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['rectangleDraggable',] },],
        "editable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "fillColor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "fillOpacity": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "strokeColor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "strokeOpacity": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "strokePosition": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "strokeWeight": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "visible": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "zIndex": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "boundsChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "rectangleClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "rectangleDblClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "drag": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "dragEnd": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "dragStart": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mouseDown": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mouseMove": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mouseOut": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mouseOver": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mouseUp": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "rightClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return AgmRectangle;
}());

//# sourceMappingURL=rectangle.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmKmlLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_kml_layer_manager__ = __webpack_require__(790);


var layerId = 0;
var AgmKmlLayer = /** @class */ (function () {
    function AgmKmlLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
           * If true, the layer receives mouse events. Default value is true.
           */
        this.clickable = true;
        /**
           * By default, the input map is centered and zoomed to the bounding box of the contents of the
           * layer.
           * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
           * were never set.
           */
        this.preserveViewport = false;
        /**
           * Whether to render the screen overlays. Default true.
           */
        this.screenOverlays = true;
        /**
           * Suppress the rendering of info windows when layer features are clicked.
           */
        this.suppressInfoWindows = false;
        /**
           * The URL of the KML document to display.
           */
        this.url = null;
        /**
           * The z-index of the layer.
           */
        this.zIndex = null;
        /**
           * This event is fired when a feature in the layer is clicked.
           */
        this.layerClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the KML layers default viewport has changed.
           */
        this.defaultViewportChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the KML layer has finished loading.
           * At this point it is safe to read the status property to determine if the layer loaded
           * successfully.
           */
        this.statusChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AgmKmlLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmKmlLayer.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    };
    AgmKmlLayer.prototype._updatePolygonOptions = function (changes) {
        var options = Object.keys(changes)
            .filter(function (k) { return AgmKmlLayer._kmlLayerOptions.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmKmlLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
            { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
            { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    /** @internal */
    AgmKmlLayer.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmKmlLayer.prototype.toString = /** @internal */
    function () { return "AgmKmlLayer-" + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmKmlLayer.prototype.ngOnDestroy = /** @internal */
    function () {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
    AgmKmlLayer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: 'agm-kml-layer'
                },] },
    ];
    /** @nocollapse */
    AgmKmlLayer.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_kml_layer_manager__["a" /* KmlLayerManager */], },
    ]; };
    AgmKmlLayer.propDecorators = {
        "clickable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "preserveViewport": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "screenOverlays": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "suppressInfoWindows": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "url": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "zIndex": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "layerClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "defaultViewportChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "statusChange": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return AgmKmlLayer;
}());

//# sourceMappingURL=kml-layer.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmDataLayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_data_layer_manager__ = __webpack_require__(791);


var layerId = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
var AgmDataLayer = /** @class */ (function () {
    function AgmDataLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
           * This event is fired when a feature in the layer is clicked.
           */
        this.layerClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * The geoJson to be displayed
           */
        this.geoJson = null;
    }
    AgmDataLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addDataLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmDataLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.toString = /** @internal */
    function () { return "AgmDataLayer-" + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.ngOnDestroy = /** @internal */
    function () {
        this._manager.deleteDataLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /** @internal */
    /** @internal */
    AgmDataLayer.prototype.ngOnChanges = /** @internal */
    function (changes) {
        var _this = this;
        if (!this._addedToManager) {
            return;
        }
        var geoJsonChange = changes['geoJson'];
        if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
        }
        var dataOptions = {};
        AgmDataLayer._dataOptionsAttributes.forEach(function (k) { return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this[k]; });
        this._manager.setDataOptions(this, dataOptions);
    };
    AgmDataLayer._dataOptionsAttributes = ['style'];
    AgmDataLayer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: 'agm-data-layer'
                },] },
    ];
    /** @nocollapse */
    AgmDataLayer.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_data_layer_manager__["a" /* DataLayerManager */], },
    ]; };
    AgmDataLayer.propDecorators = {
        "layerClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "geoJson": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "style": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return AgmDataLayer;
}());

//# sourceMappingURL=data-layer.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmMarker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fit_bounds__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_managers_marker_manager__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_window__ = __webpack_require__(792);





var markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarker = /** @class */ (function () {
    function AgmMarker(_markerManager) {
        this._markerManager = _markerManager;
        /**
           * If true, the marker can be dragged. Default value is false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If true, the marker is visible
           */
        this.visible = true;
        /**
           * Whether to automatically open the child info window when the marker is clicked.
           */
        this.openInfoWindow = true;
        /**
           * The marker's opacity between 0.0 and 1.0.
           */
        this.opacity = 1;
        /**
           * All markers are displayed on the map in order of their zIndex, with higher values displaying in
           * front of markers with lower values. By default, markers are displayed according to their
           * vertical position on screen, with lower markers appearing in front of markers further up the
           * screen.
           */
        this.zIndex = 1;
        /**
           * If true, the marker can be clicked. Default value is true.
           */
        // tslint:disable-next-line:no-input-rename
        this.clickable = true;
        /**
           * This event emitter gets emitted when the user clicks on the marker.
           */
        this.markerClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the user rightclicks on the marker.
           */
        this.markerRightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the marker.
           */
        this.dragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the user mouses over the marker.
           */
        this.mouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the user mouses outside the marker.
           */
        this.mouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * @internal
           */
        this.infoWindow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._fitBoundsDetails$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"](1);
        this._id = (markerId++).toString();
    }
    /* @internal */
    /* @internal */
    AgmMarker.prototype.ngAfterContentInit = /* @internal */
    function () {
        var _this = this;
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(function () { return _this.handleInfoWindowUpdate(); });
    };
    AgmMarker.prototype.handleInfoWindowUpdate = function () {
        var _this = this;
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(function (marker) {
            marker.hostMarker = _this;
        });
    };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.ngOnChanges = /** @internal */
    function (changes) {
        if (typeof this.latitude === 'string') {
            this.latitude = Number(this.latitude);
        }
        if (typeof this.longitude === 'string') {
            this.longitude = Number(this.longitude);
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._updateFitBoundsDetails();
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
            this._updateFitBoundsDetails();
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
        if (changes['clickable']) {
            this._markerManager.updateClickable(this);
        }
        if (changes['animation']) {
            this._markerManager.updateAnimation(this);
        }
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmMarker.prototype.getFitBoundsDetails$ = /**
       * @internal
       */
    function () {
        return this._fitBoundsDetails$.asObservable();
    };
    AgmMarker.prototype._updateFitBoundsDetails = function () {
        this._fitBoundsDetails$.next({ latLng: { lat: this.latitude, lng: this.longitude } });
    };
    AgmMarker.prototype._addEventListeners = function () {
        var _this = this;
        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this.openInfoWindow) {
                _this.infoWindow.forEach(function (infoWindow) { return infoWindow.open(); });
            }
            _this.markerClick.emit(_this);
        });
        this._observableSubscriptions.push(cs);
        var rc = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
            _this.markerRightClick.emit(null);
        });
        this._observableSubscriptions.push(rc);
        var ds = this._markerManager.createEventObservable('dragend', this)
            .subscribe(function (e) {
            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
        var mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe(function (e) {
            _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mover);
        var mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe(function (e) {
            _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mout);
    };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.toString = /** @internal */
    function () { return 'AgmMarker-' + this._id.toString(); };
    /** @internal */
    /** @internal */
    AgmMarker.prototype.ngOnDestroy = /** @internal */
    function () {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmMarker.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: 'agm-marker',
                    providers: [
                        { provide: __WEBPACK_IMPORTED_MODULE_2__services_fit_bounds__["a" /* FitBoundsAccessor */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return AgmMarker; }) }
                    ],
                    inputs: [
                        'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
                        'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation'
                    ],
                    outputs: ['markerClick', 'dragEnd', 'mouseOver', 'mouseOut']
                },] },
    ];
    /** @nocollapse */
    AgmMarker.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_3__services_managers_marker_manager__["a" /* MarkerManager */], },
    ]; };
    AgmMarker.propDecorators = {
        "latitude": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "longitude": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "title": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "label": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "draggable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['markerDraggable',] },],
        "iconUrl": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "visible": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "openInfoWindow": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "opacity": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "zIndex": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "clickable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['markerClickable',] },],
        "markerClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "markerRightClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "dragEnd": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mouseOver": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "mouseOut": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "infoWindow": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_4__info_window__["a" /* AgmInfoWindow */],] },],
    };
    return AgmMarker;
}());

//# sourceMappingURL=marker.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmPolygon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_polygon_manager__ = __webpack_require__(788);


/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: Array<LatLngLiteral> = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
var AgmPolygon = /** @class */ (function () {
    function AgmPolygon(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
           * Indicates whether this Polygon handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this shape over the map. The geodesic
           * property defines the mode of dragging. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this shape by dragging the control
           * points shown at the vertices and on each segment. Defaults to false.
           */
        this.editable = false;
        /**
           * When true, edges of the polygon are interpreted as geodesic and will
           * follow the curvature of the Earth. When false, edges of the polygon are
           * rendered as straight lines in screen space. Note that the shape of a
           * geodesic polygon may appear to change when dragged, as the dimensions
           * are maintained relative to the surface of the earth. Defaults to false.
           */
        this.geodesic = false;
        /**
           * The ordered sequence of coordinates that designates a closed loop.
           * Unlike polylines, a polygon may consist of one or more paths.
           *  As a result, the paths property may specify one or more arrays of
           * LatLng coordinates. Paths are closed automatically; do not repeat the
           * first vertex of the path as the last vertex. Simple polygons may be
           * defined using a single array of LatLngs. More complex polygons may
           * specify an array of arrays. Any simple arrays are converted into Arrays.
           * Inserting or removing LatLngs from the Array will automatically update
           * the polygon on the map.
           */
        this.paths = [];
        /**
           * This event is fired when the DOM click event is fired on the Polygon.
           */
        this.polyClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the DOM dblclick event is fired on the Polygon.
           */
        this.polyDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the polygon.
           */
        this.polyDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the polygon.
           */
        this.polyDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the polygon.
           */
        this.polyDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the Polygon.
           */
        this.polyMouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the Polygon.
           */
        this.polyMouseMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired on Polygon mouseout.
           */
        this.polyMouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired on Polygon mouseover.
           */
        this.polyMouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired whe the DOM mouseup event is fired on the Polygon
           */
        this.polyMouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This even is fired when the Polygon is right-clicked on.
           */
        this.polyRightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    /** @internal */
    /** @internal */
    AgmPolygon.prototype.ngAfterContentInit = /** @internal */
    function () {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    };
    AgmPolygon.prototype.ngOnChanges = function (changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    };
    AgmPolygon.prototype._init = function () {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolygon.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    AgmPolygon.prototype._updatePolygonOptions = function (changes) {
        return Object.keys(changes)
            .filter(function (k) { return AgmPolygon._polygonOptionsAttributes.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    };
    /** @internal */
    /** @internal */
    AgmPolygon.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmPolygon.prototype.ngOnDestroy = /** @internal */
    function () {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmPolygon._polygonOptionsAttributes = [
        'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
        'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
        'editable', 'visible'
    ];
    AgmPolygon.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: 'agm-polygon'
                },] },
    ];
    /** @nocollapse */
    AgmPolygon.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_polygon_manager__["a" /* PolygonManager */], },
    ]; };
    AgmPolygon.propDecorators = {
        "clickable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "draggable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['polyDraggable',] },],
        "editable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "fillColor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "fillOpacity": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "geodesic": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "paths": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "strokeColor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "strokeOpacity": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "strokeWeight": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "visible": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "zIndex": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "polyClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "polyDblClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "polyDrag": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "polyDragEnd": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "polyDragStart": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "polyMouseDown": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "polyMouseMove": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "polyMouseOut": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "polyMouseOver": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "polyMouseUp": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "polyRightClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return AgmPolygon;
}());

//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmPolyline; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_polyline_manager__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyline_point__ = __webpack_require__(793);



var polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmPolyline = /** @class */ (function () {
    function AgmPolyline(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
           * Indicates whether this Polyline handles mouse events. Defaults to true.
           */
        this.clickable = true;
        /**
           * If set to true, the user can drag this shape over the map. The geodesic property defines the
           * mode of dragging. Defaults to false.
           */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
           * If set to true, the user can edit this shape by dragging the control points shown at the
           * vertices and on each segment. Defaults to false.
           */
        this.editable = false;
        /**
           * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
           * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
           * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
           * are maintained relative to the surface of the earth. Defaults to false.
           */
        this.geodesic = false;
        /**
           * Whether this polyline is visible on the map. Defaults to true.
           */
        this.visible = true;
        /**
           * This event is fired when the DOM click event is fired on the Polyline.
           */
        this.lineClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the DOM dblclick event is fired on the Polyline.
           */
        this.lineDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is repeatedly fired while the user drags the polyline.
           */
        this.lineDrag = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the user stops dragging the polyline.
           */
        this.lineDragEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the user starts dragging the polyline.
           */
        this.lineDragStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousedown event is fired on the Polyline.
           */
        this.lineMouseDown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired when the DOM mousemove event is fired on the Polyline.
           */
        this.lineMouseMove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired on Polyline mouseout.
           */
        this.lineMouseOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired on Polyline mouseover.
           */
        this.lineMouseOver = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This event is fired whe the DOM mouseup event is fired on the Polyline
           */
        this.lineMouseUp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /**
           * This even is fired when the Polyline is right-clicked on.
           */
        this.lineRightClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    /** @internal */
    AgmPolyline.prototype.ngAfterContentInit = /** @internal */
    function () {
        var _this = this;
        if (this.points.length) {
            this.points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
                _this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        var s = this.points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
        this._subscriptions.push(s);
        this._polylineManager.updatePolylinePoints(this);
    };
    AgmPolyline.prototype.ngOnChanges = function (changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmPolyline._polylineOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
        this._polylineManager.setPolylineOptions(this, options);
    };
    AgmPolyline.prototype._init = function () {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolyline.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    /** @internal */
    AgmPolyline.prototype._getPoints = /** @internal */
    function () {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    };
    /** @internal */
    /** @internal */
    AgmPolyline.prototype.id = /** @internal */
    function () { return this._id; };
    /** @internal */
    /** @internal */
    AgmPolyline.prototype.ngOnDestroy = /** @internal */
    function () {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmPolyline._polylineOptionsAttributes = [
        'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
        'zIndex'
    ];
    AgmPolyline.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: 'agm-polyline'
                },] },
    ];
    /** @nocollapse */
    AgmPolyline.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__services_managers_polyline_manager__["a" /* PolylineManager */], },
    ]; };
    AgmPolyline.propDecorators = {
        "clickable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "draggable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['polylineDraggable',] },],
        "editable": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "geodesic": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "strokeColor": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "strokeOpacity": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "strokeWeight": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "visible": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "zIndex": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        "lineClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "lineDblClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "lineDrag": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "lineDragEnd": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "lineDragStart": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "lineMouseDown": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "lineMouseMove": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "lineMouseOut": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "lineMouseOver": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "lineMouseUp": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "lineRightClick": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        "points": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"], args: [__WEBPACK_IMPORTED_MODULE_2__polyline_point__["a" /* AgmPolylinePoint */],] },],
    };
    return AgmPolyline;
}());

//# sourceMappingURL=polyline.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmFitBounds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fit_bounds__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);




/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
var AgmFitBounds = /** @class */ (function () {
    function AgmFitBounds(_fitBoundsAccessor, _fitBoundsService) {
        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
           * If the value is true, the element gets added to the bounds of the map.
           * Default: true.
           */
        this.agmFitBounds = true;
        this._destroyed$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        this._latestFitBoundsDetails = null;
    }
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmFitBounds.prototype.ngOnChanges = /**
       * @internal
       */
    function (changes) {
        this._updateBounds();
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmFitBounds.prototype.ngOnInit = /**
       * @internal
       */
    function () {
        var _this = this;
        this._fitBoundsAccessor
            .getFitBoundsDetails$()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["distinctUntilChanged"])(function (x, y) {
            return x.latLng.lat === y.latLng.lng;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["takeUntil"])(this._destroyed$))
            .subscribe(function (details) { return _this._updateBounds(details); });
    };
    AgmFitBounds.prototype._updateBounds = function (newFitBoundsDetails) {
        if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
        }
        if (!this._latestFitBoundsDetails) {
            return;
        }
        if (this.agmFitBounds) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
        }
        else {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    };
    /**
     * @internal
     */
    /**
       * @internal
       */
    AgmFitBounds.prototype.ngOnDestroy = /**
       * @internal
       */
    function () {
        this._destroyed$.next();
        this._destroyed$.complete();
        if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    };
    AgmFitBounds.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[agmFitBounds]'
                },] },
    ];
    /** @nocollapse */
    AgmFitBounds.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__services_fit_bounds__["a" /* FitBoundsAccessor */], decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Self"] },] },
        { type: __WEBPACK_IMPORTED_MODULE_1__services_fit_bounds__["b" /* FitBoundsService */], },
    ]; };
    AgmFitBounds.propDecorators = {
        "agmFitBounds": [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return AgmFitBounds;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BROWSER_GLOBALS_PROVIDERS; });
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    WindowRef.prototype.getNativeWindow = function () { return window; };
    return WindowRef;
}());

var DocumentRef = /** @class */ (function () {
    function DocumentRef() {
    }
    DocumentRef.prototype.getNativeDocument = function () { return document; };
    return DocumentRef;
}());

var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
//# sourceMappingURL=browser-globals.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives__ = __webpack_require__(817);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(818);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_module__ = __webpack_require__(820);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__core_module__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_map__ = __webpack_require__(798);
/* unused harmony reexport AgmMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_circle__ = __webpack_require__(799);
/* unused harmony reexport AgmCircle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_rectangle__ = __webpack_require__(800);
/* unused harmony reexport AgmRectangle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_info_window__ = __webpack_require__(792);
/* unused harmony reexport AgmInfoWindow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_kml_layer__ = __webpack_require__(801);
/* unused harmony reexport AgmKmlLayer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_data_layer__ = __webpack_require__(802);
/* unused harmony reexport AgmDataLayer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_marker__ = __webpack_require__(803);
/* unused harmony reexport AgmMarker */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_polygon__ = __webpack_require__(804);
/* unused harmony reexport AgmPolygon */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_polyline__ = __webpack_require__(805);
/* unused harmony reexport AgmPolyline */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_polyline_point__ = __webpack_require__(793);
/* unused harmony reexport AgmPolylinePoint */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_fit_bounds__ = __webpack_require__(806);
/* unused harmony reexport AgmFitBounds */











//# sourceMappingURL=directives.js.map

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_google_maps_api_wrapper__ = __webpack_require__(777);
/* unused harmony reexport GoogleMapsAPIWrapper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_managers_circle_manager__ = __webpack_require__(785);
/* unused harmony reexport CircleManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_managers_rectangle_manager__ = __webpack_require__(786);
/* unused harmony reexport RectangleManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_managers_info_window_manager__ = __webpack_require__(787);
/* unused harmony reexport InfoWindowManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_managers_marker_manager__ = __webpack_require__(780);
/* unused harmony reexport MarkerManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_managers_polygon_manager__ = __webpack_require__(788);
/* unused harmony reexport PolygonManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_managers_polyline_manager__ = __webpack_require__(789);
/* unused harmony reexport PolylineManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_managers_kml_layer_manager__ = __webpack_require__(790);
/* unused harmony reexport KmlLayerManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_managers_data_layer_manager__ = __webpack_require__(791);
/* unused harmony reexport DataLayerManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_maps_api_loader_lazy_maps_api_loader__ = __webpack_require__(794);
/* unused harmony reexport GoogleMapsScriptProtocol */
/* unused harmony reexport LAZY_MAPS_API_CONFIG */
/* unused harmony reexport LazyMapsAPILoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_maps_api_loader_maps_api_loader__ = __webpack_require__(778);
/* unused harmony reexport MapsAPILoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_maps_api_loader_noop_maps_api_loader__ = __webpack_require__(819);
/* unused harmony reexport NoOpMapsAPILoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_fit_bounds__ = __webpack_require__(781);
/* unused harmony reexport FitBoundsAccessor */













//# sourceMappingURL=services.js.map

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NoOpMapsAPILoader */
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
var /**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
NoOpMapsAPILoader = /** @class */ (function () {
    function NoOpMapsAPILoader() {
    }
    NoOpMapsAPILoader.prototype.load = function () {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    };
    return NoOpMapsAPILoader;
}());
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */

//# sourceMappingURL=noop-maps-api-loader.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export coreDirectives */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgmCoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_map__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_circle__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_rectangle__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_info_window__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_marker__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_polygon__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_polyline__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_polyline_point__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_kml_layer__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_data_layer__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_maps_api_loader_lazy_maps_api_loader__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_maps_api_loader_maps_api_loader__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_browser_globals__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agm_core_directives_fit_bounds__ = __webpack_require__(806);
















/**
 * @internal
 */
function coreDirectives() {
    return [
        __WEBPACK_IMPORTED_MODULE_1__directives_map__["a" /* AgmMap */], __WEBPACK_IMPORTED_MODULE_5__directives_marker__["a" /* AgmMarker */], __WEBPACK_IMPORTED_MODULE_4__directives_info_window__["a" /* AgmInfoWindow */], __WEBPACK_IMPORTED_MODULE_2__directives_circle__["a" /* AgmCircle */], __WEBPACK_IMPORTED_MODULE_3__directives_rectangle__["a" /* AgmRectangle */],
        __WEBPACK_IMPORTED_MODULE_6__directives_polygon__["a" /* AgmPolygon */], __WEBPACK_IMPORTED_MODULE_7__directives_polyline__["a" /* AgmPolyline */], __WEBPACK_IMPORTED_MODULE_8__directives_polyline_point__["a" /* AgmPolylinePoint */], __WEBPACK_IMPORTED_MODULE_9__directives_kml_layer__["a" /* AgmKmlLayer */],
        __WEBPACK_IMPORTED_MODULE_10__directives_data_layer__["a" /* AgmDataLayer */], __WEBPACK_IMPORTED_MODULE_14__agm_core_directives_fit_bounds__["a" /* AgmFitBounds */]
    ];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
var AgmCoreModule = /** @class */ (function () {
    function AgmCoreModule() {
    }
    /**
     * Please use this method when you register the module at the root level.
     */
    /**
       * Please use this method when you register the module at the root level.
       */
    AgmCoreModule.forRoot = /**
       * Please use this method when you register the module at the root level.
       */
    function (lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule,
            providers: __WEBPACK_IMPORTED_MODULE_13__utils_browser_globals__["a" /* BROWSER_GLOBALS_PROVIDERS */].concat([
                { provide: __WEBPACK_IMPORTED_MODULE_12__services_maps_api_loader_maps_api_loader__["a" /* MapsAPILoader */], useClass: __WEBPACK_IMPORTED_MODULE_11__services_maps_api_loader_lazy_maps_api_loader__["b" /* LazyMapsAPILoader */] },
                { provide: __WEBPACK_IMPORTED_MODULE_11__services_maps_api_loader_lazy_maps_api_loader__["a" /* LAZY_MAPS_API_CONFIG */], useValue: lazyMapsAPILoaderConfig }
            ]),
        };
    };
    AgmCoreModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{ declarations: coreDirectives(), exports: coreDirectives() },] },
    ];
    return AgmCoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsLayout1; });
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


var MapsLayout1 = /** @class */ (function () {
    function MapsLayout1() {
    }
    MapsLayout1.prototype.onEvent = function (event, index, e) {
        if (this.events[event]) {
            this.events[event](index);
        }
        console.log(event);
    };
    MapsLayout1.prototype.onStarClass = function (items, index, e) {
        for (var i = 0; i < items.length; i++) {
            items[i].isActive = i <= index;
        }
        this.onEvent("onRates", index, e);
    };
    ;
    MapsLayout1.prototype.ngOnChanges = function (changes) {
        this.subscribeToIonScroll();
    };
    MapsLayout1.prototype.ngAfterViewInit = function () {
        this.subscribeToIonScroll();
    };
    MapsLayout1.prototype.ngAfterViewChecked = function () {
        this.subscribeToIonScroll();
    };
    MapsLayout1.prototype.isClassActive = function () {
        return this.active;
    };
    MapsLayout1.prototype.subscribeToIonScroll = function () {
        var _this = this;
        if (this.content != null && this.content.ionScroll != null) {
            this.content.ionScroll.subscribe(function (d) {
                if (d.scrollTop < 200) {
                    _this.active = false;
                    return;
                }
                _this.active = true;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MapsLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MapsLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], MapsLayout1.prototype, "content", void 0);
    MapsLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'maps-layout-1',template:/*ion-inline-start:"/Users/user916661/Desktop/sgq/App/sgq/src/core/maps/layout-1/maps.html"*/'<!-- Theme Google Maps - Gmaps + Location  Details -->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon [name]="menu"></ion-icon>\n    </button>\n        <ion-title *ngIf="data != null">{{data.headerTitle}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<!--Content -->\n<ion-content elastic-header>\n    <div id="elastic-header">\n        <agm-map *ngIf="data != null" [latitude]="data.map.lat" [longitude]="data.map.lng"\n        [zoom]="data.map.zoom" [mapTypeControl]="data.map.mapTypeControl"\n        [streetViewControl]="data.map.streetViewControl" [styles]= "data.map.styles">\n            <agm-marker [latitude]="data.map.lat" [longitude]="data.map.lng"></agm-marker>\n        </agm-map>\n    </div>\n    <ion-grid no-padding *ngIf="data != null">\n        <ion-row>\n            <ion-col col-12 map-header>\n                <ion-item no-lines padding-left>\n                    <!--Maps Title-->\n                    <h1 maps-title margin-top margin-bottom text-wrap>{{data.title}}</h1>\n                    <!--Parallax Rateing-->\n                    <div  margin-right float-left>\n                        <ion-icon float-left *ngFor="let item of data.iconsStars;let i = index" (click)="onStarClass(data.iconsStars, i, $event)">\n                            <i icon-medium *ngIf="item.isActive" class="icon {{item.iconActive}}"></i>\n                            <i icon-medium *ngIf="!item.isActive" class="icon {{item.iconInactive}}"></i>\n                        </ion-icon>\n                    </div>\n                    <span span-medium>{{data.reviews}}</span>\n                </ion-item>\n            </ion-col>\n            <!---Content-->\n            <ion-col col-12 map-content>\n                <ion-item-group>\n                    <ion-item-divider no-lines>\n                        <h2 maps-description-title text-wrap margin-bottom>{{data.contentTitle}}</h2>\n                        <p maps-description text-wrap>{{data.contentDescription}}</p>\n                    </ion-item-divider>\n                    <!--Info Location-->\n                    <ion-item no-lines>\n                        <ion-icon icon-medium [name]="data.icon" item-start></ion-icon>\n                        <h2 maps-info-description no-paddnig>{{data.location}}</h2>\n                    </ion-item>\n                    <!--Info Time-->\n                    <ion-item no-lines>\n                        <ion-icon icon-medium [name]="data.icon" item-start></ion-icon>\n                        <h2 maps-info-description no-paddnig>{{data.time}}</h2>\n                    </ion-item>\n                    <!--Info Phone-->\n                    <ion-item no-lines>\n                        <ion-icon icon-medium [name]="data.icon" item-start></ion-icon>\n                        <h2 maps-info-description no-paddnig>{{data.phone}}</h2>\n                    </ion-item>\n                    <!--Info WebSite-->\n                    <ion-item no-lines>\n                        <ion-icon icon-medium [name]="data.icon" item-start></ion-icon>\n                        <h2 maps-info-description no-paddnig>{{data.webSite}}</h2>\n                    </ion-item>\n                    <!--Info Email-->\n                    <ion-item no-lines>\n                        <ion-icon icon-medium [name]="data.icon" item-start></ion-icon>\n                        <h2 maps-info-description no-paddnig>{{data.email}}</h2>\n                    </ion-item>\n                </ion-item-group>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/user916661/Desktop/sgq/App/sgq/src/core/maps/layout-1/maps.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MapsLayout1);
    return MapsLayout1;
}());

//# sourceMappingURL=maps-layout-1.js.map

/***/ })

});
//# sourceMappingURL=0.js.map