(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"main\">\n    <video #video autoplay></video>\n    <button (click)=\"sendCurrentFrame()\"> Send Frame!</button>\n  </div>\n  <app-employes-heads (clickOnEmployee)=\"onEmployeeClick($event)\"></app-employes-heads>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  height: calc(100vh - 100px);\n  position: relative; }\n\nbutton {\n  position: absolute;\n  width: 100px;\n  left: 0;\n  bottom: 0;\n  color: red; }\n\nvideo {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _you_tuve_iframe_you_tuve_iframe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./you-tuve-iframe/you-tuve-iframe.component */ "./src/app/you-tuve-iframe/you-tuve-iframe.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
    }
    AppComponent.prototype.openyouTubeMovie = function (url, title) {
        var dialogRef = this.dialog.open(_you_tuve_iframe_you_tuve_iframe_component__WEBPACK_IMPORTED_MODULE_2__["YouTuveIframeComponent"], {
            width: '400px',
            data: { url: url, title: title }
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.requestCameraAccess();
    };
    AppComponent.prototype.sendCurrentFrame = function () {
        var _this = this;
        var videoWidth = this.video.nativeElement.videoWidth;
        var timesBig = videoWidth / 256;
        var canvas = document.createElement('canvas');
        var canvasHeight = videoWidth / timesBig;
        var canvasWidth = this.video.nativeElement.videoHeight / timesBig;
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.getContext('2d').drawImage(this.video.nativeElement, 0, 0, canvasWidth, canvasHeight);
        canvas.toBlob(function (blob) {
            var f = new File([blob], 'image.jpeg', { type: "image/jpeg" });
            var formData = new FormData();
            formData.append('image', f);
            fetch('https://soroka-hackathon.herokuapp.com/classify', { method: 'POST', body: formData })
                .then(function (r) { return r.json(); })
                .then(function (data) {
                _this.openyouTubeMovie(data.url, data.name + " - " + data.description);
            });
        }, 'image/jpeg');
    };
    AppComponent.prototype.requestCameraAccess = function () {
        var _this = this;
        navigator.mediaDevices.getUserMedia({ video: true, facingMode: 'environment' })
            .then(function (stream) {
            _this.video.nativeElement.srcObject = stream;
        })
            .catch(function (err) {
            console.error(err);
            /* handle the error */
        });
    };
    AppComponent.prototype.onEmployeeClick = function (employee) {
        this.openyouTubeMovie(employee.videoUrl, employee.name);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('video'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "video", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _employes_heads_employes_heads_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employes-heads/employes-heads.component */ "./src/app/employes-heads/employes-heads.component.ts");
/* harmony import */ var _you_tuve_iframe_you_tuve_iframe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./you-tuve-iframe/you-tuve-iframe.component */ "./src/app/you-tuve-iframe/you-tuve-iframe.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _employes_heads_employes_heads_component__WEBPACK_IMPORTED_MODULE_5__["EmployesHeadsComponent"],
                _you_tuve_iframe_you_tuve_iframe_component__WEBPACK_IMPORTED_MODULE_6__["YouTuveIframeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
            ],
            entryComponents: [
                _you_tuve_iframe_you_tuve_iframe_component__WEBPACK_IMPORTED_MODULE_6__["YouTuveIframeComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employes-heads/employes-heads.component.html":
/*!**************************************************************!*\
  !*** ./src/app/employes-heads/employes-heads.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"employees-container\">\n  <div (click)=\"clickOnEmployee.next(employe)\" *ngFor=\"let employe of employes\" class=\"employee\">\n    <img [src]=\"employe.imageUrl\"/>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/employes-heads/employes-heads.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/employes-heads/employes-heads.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employee {\n  display: inline-block;\n  float: left;\n  margin-left: 10px; }\n  .employee img {\n    width: 80px;\n    height: 80px;\n    border-radius: 100%; }\n  .employees-container {\n  height: 100px;\n  display: flex;\n  overflow-x: scroll;\n  align-items: center; }\n"

/***/ }),

/***/ "./src/app/employes-heads/employes-heads.component.ts":
/*!************************************************************!*\
  !*** ./src/app/employes-heads/employes-heads.component.ts ***!
  \************************************************************/
/*! exports provided: EmployesHeadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployesHeadsComponent", function() { return EmployesHeadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployesHeadsComponent = /** @class */ (function () {
    function EmployesHeadsComponent() {
        this.clickOnEmployee = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.employes = [
            { name: 'קלאודיו אלתר', title: 'אח', imageUrl: 'https://s3.amazonaws.com/yossi-eynav-uploads/cloudyo.jpg', videoUrl: 'https://youtu.be/V-7pTTNvUs8' },
            { name: 'רויטל גוטרמן', title: 'אחות', imageUrl: 'https://s3.amazonaws.com/yossi-eynav-uploads/revital.jpg', videoUrl: 'https://youtu.be/UQ2wIJj__ls' },
            { name: 'מנור שפריץ', title: 'רופא', imageUrl: 'https://s3.amazonaws.com/yossi-eynav-uploads/cloudyo.jpg', videoUrl: 'https://youtu.be/V-7pTTNvUs8' },
        ];
    }
    EmployesHeadsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], EmployesHeadsComponent.prototype, "clickOnEmployee", void 0);
    EmployesHeadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employes-heads',
            template: __webpack_require__(/*! ./employes-heads.component.html */ "./src/app/employes-heads/employes-heads.component.html"),
            styles: [__webpack_require__(/*! ./employes-heads.component.scss */ "./src/app/employes-heads/employes-heads.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployesHeadsComponent);
    return EmployesHeadsComponent;
}());



/***/ }),

/***/ "./src/app/you-tuve-iframe/you-tuve-iframe.component.html":
/*!****************************************************************!*\
  !*** ./src/app/you-tuve-iframe/you-tuve-iframe.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p *ngIf=\"data.title\">{{data.title}}</p>\n  <iframe width=\"100%\" height=\"400px\"\n          [src]=\"iframeUrl()\"\n          frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n\n  </iframe>\n</div>\n"

/***/ }),

/***/ "./src/app/you-tuve-iframe/you-tuve-iframe.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/you-tuve-iframe/you-tuve-iframe.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: right; }\n"

/***/ }),

/***/ "./src/app/you-tuve-iframe/you-tuve-iframe.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/you-tuve-iframe/you-tuve-iframe.component.ts ***!
  \**************************************************************/
/*! exports provided: YouTuveIframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTuveIframeComponent", function() { return YouTuveIframeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var YouTuveIframeComponent = /** @class */ (function () {
    function YouTuveIframeComponent(dialogRef, sanitizer, data) {
        this.dialogRef = dialogRef;
        this.sanitizer = sanitizer;
        this.data = data;
        console.log(data);
    }
    YouTuveIframeComponent.prototype.iframeUrl = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url);
    };
    YouTuveIframeComponent.prototype.ngOnInit = function () {
    };
    YouTuveIframeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-you-tuve-iframe',
            template: __webpack_require__(/*! ./you-tuve-iframe.component.html */ "./src/app/you-tuve-iframe/you-tuve-iframe.component.html"),
            styles: [__webpack_require__(/*! ./you-tuve-iframe.component.scss */ "./src/app/you-tuve-iframe/you-tuve-iframe.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], Object])
    ], YouTuveIframeComponent);
    return YouTuveIframeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/dev/soroka-hackathon/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map