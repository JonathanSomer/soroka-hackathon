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

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1 style=\"text-align: center;\">\r\n    אודות\r\n  </h1>\r\n  <p style=\"text-align: right;direction: rtl;\">\r\n    \"מי זה מה זה\", הינה אפליקציה שנוצרה בהאקטון בבית החולים סורוקה.\r\n    מטרתינו לייצר סביבה ידידותית ולאפשר לילדים להתחבר לציוד ולאנשים בבית החולים בצורה מסקרנת וכיפית.\r\n  </p>\r\n  <h2 style=\"text-align: center;\">\r\n    הקבוצה\r\n  </h2>\r\n  <p style=\"text-align: right;direction: rtl;\">\r\n    יוסי עינב, יהונתן זומר, עידו קסלר, ד\"ר מנור שפריץ, ליאת טודריס, רויטל גוטרמן, קלאודיו אלתר, אנדי פלקון, סטאס ריבקין.\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.scss":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  padding: 10px; }\n\nh2, h1 {\n  margin-top: 15px; }\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
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

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"main\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <mat-tab-group selectedIndex=\"1\" (selectedIndexChange)=\"changeCurrentTab($event)\">\r\n    <mat-tab label=\"הצוות המטפל\"></mat-tab>\r\n    <mat-tab label=\"גלה חפצים סביבך\"></mat-tab>\r\n    <mat-tab label=\"אודות\"></mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-tab-group {\n  position: absolute;\n  bottom: 0; }\n\n.main {\n  background-image: url('client/dist/client/bg.jpg');\n  background-size: cover; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AppComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
    }
    AppComponent.prototype.openyouTubeMovie = function (url, title) {
        var dialogRef = this.dialog.open(_you_tuve_iframe_you_tuve_iframe_component__WEBPACK_IMPORTED_MODULE_2__["YouTuveIframeComponent"], {
            width: '400px',
            data: { url: url, title: title }
        });
    };
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.changeCurrentTab = function (index) {
        switch (index) {
            case 1:
                this.router.navigateByUrl('/video-game');
                break;
            case 0:
                this.router.navigateByUrl('/employees');
                break;
            case 2:
                this.router.navigateByUrl('/about-us');
                break;
        }
    };
    AppComponent.prototype.onEmployeeClick = function (employee) {
        this.openyouTubeMovie(employee.videoUrl, employee.name);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _employes_heads_employes_heads_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employes-heads/employes-heads.component */ "./src/app/employes-heads/employes-heads.component.ts");
/* harmony import */ var _you_tuve_iframe_you_tuve_iframe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./you-tuve-iframe/you-tuve-iframe.component */ "./src/app/you-tuve-iframe/you-tuve-iframe.component.ts");
/* harmony import */ var _video_game_video_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video-game/video-game.component */ "./src/app/video-game/video-game.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MyHammerConfig = /** @class */ (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            // override hammerjs default configuration
            'swipe': { direction: hammerjs__WEBPACK_IMPORTED_MODULE_9__["DIRECTION_ALL"] }
        };
        return _this;
    }
    return MyHammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerGestureConfig"]));

var appRoutes = [
    { path: 'employees', component: _employes_heads_employes_heads_component__WEBPACK_IMPORTED_MODULE_5__["EmployesHeadsComponent"] },
    { path: 'video-game', component: _video_game_video_game_component__WEBPACK_IMPORTED_MODULE_7__["VideoGameComponent"] },
    { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"] },
    { path: '**', component: _video_game_video_game_component__WEBPACK_IMPORTED_MODULE_7__["VideoGameComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _employes_heads_employes_heads_component__WEBPACK_IMPORTED_MODULE_5__["EmployesHeadsComponent"],
                _you_tuve_iframe_you_tuve_iframe_component__WEBPACK_IMPORTED_MODULE_6__["YouTuveIframeComponent"],
                _video_game_video_game_component__WEBPACK_IMPORTED_MODULE_7__["VideoGameComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AboutUsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, { enableTracing: true, useHash: true } // <-- debugging purposes only
                )
            ],
            entryComponents: [
                _you_tuve_iframe_you_tuve_iframe_component__WEBPACK_IMPORTED_MODULE_6__["YouTuveIframeComponent"]
            ],
            providers: [
                {
                    provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
                    useClass: MyHammerConfig
                }
            ],
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

module.exports = "<nav class=\"employees-container\">\r\n  <h1>{{ employes[currentEmployee].name }}</h1>\r\n  <div class=\"employee\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\">\r\n    <img [src]=\"employes[currentEmployee].imageUrl\"/>\r\n  </div>\r\n\r\n  <button (click)=\"clickOnEmployee()\" mat-button>\r\n    נגן וידאו\r\n    <mat-icon>play_circle_filled</mat-icon>\r\n  </button>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/employes-heads/employes-heads.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/employes-heads/employes-heads.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employee {\n  display: block;\n  width: 100%;\n  background-image: url('client/dist/client/hospital_room.png');\n  background-size: cover; }\n  .employee img {\n    width: 100%; }\n  .employees-container {\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center; }\n  h1 {\n  font-size: 30px;\n  margin-bottom: 20px; }\n  button {\n  direction: rtl;\n  font-size: 18px;\n  font-weight: 500; }\n"

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
/* harmony import */ var _you_tuve_iframe_you_tuve_iframe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../you-tuve-iframe/you-tuve-iframe.component */ "./src/app/you-tuve-iframe/you-tuve-iframe.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
    function EmployesHeadsComponent(dialog) {
        this.dialog = dialog;
        this.currentEmployee = 1;
        this.employes = [
            { name: 'קלאודיו אלתר', title: 'אח', imageUrl: './assets/claudio.png', videoUrl: './assets/cloud.mp4' },
            { name: 'רויטל גוטרמן', title: 'אחות', imageUrl: './assets/revital.png', videoUrl: './assets/revi.mp4' },
            { name: 'מנור שפריץ', title: 'רופא', imageUrl: './assets/manor.png', videoUrl: './assets/cloud.mp4' },
            { name: 'סטאס ריבקין', title: 'מלך', imageUrl: './assets/stas.png', videoUrl: './assets/stas.mp4' }
        ];
    }
    EmployesHeadsComponent.prototype.ngOnInit = function () {
    };
    EmployesHeadsComponent.prototype.openyouTubeMovie = function (url, title) {
        var dialogRef = this.dialog.open(_you_tuve_iframe_you_tuve_iframe_component__WEBPACK_IMPORTED_MODULE_1__["YouTuveIframeComponent"], {
            width: '400px',
            data: { url: url, title: title }
        });
    };
    EmployesHeadsComponent.prototype.swipe = function (type) {
        console.log(type);
        switch (type) {
            case 'swipeleft': {
                var index = this.currentEmployee - 1;
                this.currentEmployee = index >= 0 ? index : this.employes.length - 1;
                break;
            }
            case 'swiperight': {
                var index = this.currentEmployee + 1;
                this.currentEmployee = index <= this.employes.length - 1 ? index : 0;
                break;
            }
        }
    };
    EmployesHeadsComponent.prototype.clickOnEmployee = function () {
        this.openyouTubeMovie(this.employes[this.currentEmployee].videoUrl, this.employes[this.currentEmployee].name);
    };
    EmployesHeadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employes-heads',
            template: __webpack_require__(/*! ./employes-heads.component.html */ "./src/app/employes-heads/employes-heads.component.html"),
            styles: [__webpack_require__(/*! ./employes-heads.component.scss */ "./src/app/employes-heads/employes-heads.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], EmployesHeadsComponent);
    return EmployesHeadsComponent;
}());



/***/ }),

/***/ "./src/app/video-game/video-game.component.html":
/*!******************************************************!*\
  !*** ./src/app/video-game/video-game.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <video #video autoplay></video>\r\n  <button (click)=\"sendCurrentFrame()\">\r\n    חפש עכשיו! <img src=\"./assets/search.svg\"/>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/video-game/video-game.component.scss":
/*!******************************************************!*\
  !*** ./src/app/video-game/video-game.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  position: absolute;\n  left: 0;\n  bottom: 13px;\n  width: 100%;\n  display: flex;\n  flex-flow: row;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: 700;\n  color: white;\n  background: rgba(0, 0, 0, 0.6);\n  border: none;\n  padding: 10px;\n  box-sizing: border-box;\n  transition: all 1s;\n  outline: 0;\n  direction: rtl; }\n  button img {\n    width: 40px; }\n  button:active {\n    background: rgba(189, 185, 185, 0.45); }\n  video {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n"

/***/ }),

/***/ "./src/app/video-game/video-game.component.ts":
/*!****************************************************!*\
  !*** ./src/app/video-game/video-game.component.ts ***!
  \****************************************************/
/*! exports provided: VideoGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGameComponent", function() { return VideoGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _you_tuve_iframe_you_tuve_iframe_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../you-tuve-iframe/you-tuve-iframe.component */ "./src/app/you-tuve-iframe/you-tuve-iframe.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoGameComponent = /** @class */ (function () {
    function VideoGameComponent(dialog) {
        this.dialog = dialog;
    }
    VideoGameComponent.prototype.openyouTubeMovie = function (url, title) {
        var dialogRef = this.dialog.open(_you_tuve_iframe_you_tuve_iframe_component__WEBPACK_IMPORTED_MODULE_1__["YouTuveIframeComponent"], {
            width: '400px',
            data: { url: url, title: title }
        });
    };
    VideoGameComponent.prototype.ngOnInit = function () {
        this.requestCameraAccess();
    };
    VideoGameComponent.prototype.sendCurrentFrame = function () {
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
    VideoGameComponent.prototype.requestCameraAccess = function () {
        var _this = this;
        navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: 'environment' } } })
            .then(function (stream) {
            _this.video.nativeElement.srcObject = stream;
        })
            .catch(function () {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                _this.video.nativeElement.srcObject = stream;
            })
                .catch(function (err) {
                console.error(err);
                /* handle the error */
            });
            /* handle the error */
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('video'),
        __metadata("design:type", Object)
    ], VideoGameComponent.prototype, "video", void 0);
    VideoGameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-game',
            template: __webpack_require__(/*! ./video-game.component.html */ "./src/app/video-game/video-game.component.html"),
            styles: [__webpack_require__(/*! ./video-game.component.scss */ "./src/app/video-game/video-game.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], VideoGameComponent);
    return VideoGameComponent;
}());



/***/ }),

/***/ "./src/app/you-tuve-iframe/you-tuve-iframe.component.html":
/*!****************************************************************!*\
  !*** ./src/app/you-tuve-iframe/you-tuve-iframe.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <p *ngIf=\"data.title\">{{data.title}}</p>\r\n  <video width=\"100%\"\r\n          [src]=\"iframeUrl()\"\r\n           controls\r\n           autoplay>\r\n  </video>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/you-tuve-iframe/you-tuve-iframe.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/you-tuve-iframe/you-tuve-iframe.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  text-align: right;\n  margin-bottom: 10px; }\n"

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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kessi\Repo\soroka-hackathon\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map