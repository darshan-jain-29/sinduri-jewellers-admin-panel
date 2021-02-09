(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");




const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'pages/dashboard' },
    { path: 'pages', loadChildren: () => Promise.all(/*! import() | pages-pages-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-pages-module")]).then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "./src/app/pages/pages.module.ts")).then(m => m.PagesModule), canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'login', loadChildren: () => Promise.all(/*! import() | pages-login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null, /*! ./pages/login/login.module */ "./src/app/pages/login/login.module.ts")).then(m => m.LoginModule) },
    { path: 'sign-up', loadChildren: () => Promise.all(/*! import() | pages-sign-up-sign-up-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-sign-up-sign-up-module")]).then(__webpack_require__.bind(null, /*! ./pages/sign-up/sign-up.module */ "./src/app/pages/sign-up/sign-up.module.ts")).then(m => m.SignUpModule) },
    { path: 'lock', loadChildren: () => Promise.all(/*! import() | pages-lock-lock-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-lock-lock-module")]).then(__webpack_require__.bind(null, /*! ./pages/lock/lock.module */ "./src/app/pages/lock/lock.module.ts")).then(m => m.LockModule) }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons-provider.module */ "./src/app/icons-provider.module.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm2015/ngx-pwa-local-storage.js");
























Object(_angular_common__WEBPACK_IMPORTED_MODULE_17__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_18___default.a);
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_10__["IconsProviderModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NgZorroAntdModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_20__["QuillModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_21__["NgxChartsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]]
                }
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorageModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebaseConfig),
            _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_22__["StorageModule"].forRoot({ IDBNoWrap: true })
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"],
            { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_11__["en_US"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/icons-provider.module.ts":
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/*! exports provided: IconsProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function() { return IconsProviderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm2015/ant-design-icons-angular-icons.js");




const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_3__["FormOutline"]];
let IconsProviderModule = class IconsProviderModule {
};
IconsProviderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NZ_ICONS"], useValue: icons }
        ]
    })
], IconsProviderModule);



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: PageDataService, MockDataService, ModalService, AuthGuard, DataInitService, CateModel, GoodsModel, CouponModel, PayModel, AddressModel, OrderDetailModel, OrderModel, CardModel, NoticeModel, FavoriteModel, UserModel, BannerModel, SubCateModel, FruitModel, CateRelationModel, SubCateRelationViewModel, FilterModel, FILTERSMultiple, FILTERSService, GoodImgModel, GoodReviewsModel, GoodPhotoModel, OwsModel, DeliveryModel, LogModel, LocalUserModel, BarModel, LineModel, ChartModel, DataInitializeModel, ConfigModel, CateService, GoodsService, CouponsService, PayService, AddressService, OrderService, CardService, FavoriteService, UsersService, SubCateService, CateRelationService, OrderDetailService, BannerService, NoticeService, GoodReviewsService, GoodPhotoService, OwsService, DeliveryService, AuthService, LogService, DataInitializeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/app/shared/model/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["CateModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodsModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["GoodsModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CouponModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["CouponModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["PayModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddressModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["AddressModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderDetailModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["OrderDetailModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["OrderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["CardModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoticeModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["NoticeModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["FavoriteModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["UserModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BannerModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["BannerModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubCateModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["SubCateModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FruitModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["FruitModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateRelationModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["CateRelationModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubCateRelationViewModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["SubCateRelationViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["FilterModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FILTERSMultiple", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["FILTERSMultiple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FILTERSService", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["FILTERSService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodImgModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["GoodImgModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodReviewsModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["GoodReviewsModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodPhotoModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["GoodPhotoModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwsModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["OwsModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeliveryModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["DeliveryModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["LogModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalUserModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["LocalUserModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["BarModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["LineModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["ChartModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataInitializeModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["DataInitializeModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigModel", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["ConfigModel"]; });

/* harmony import */ var _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/firebase-api/index */ "./src/app/shared/services/firebase-api/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["CateService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodsService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["GoodsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CouponsService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["CouponsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["PayService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["AddressService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["OrderService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["CardService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["FavoriteService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["UsersService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubCateService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["SubCateService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateRelationService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["CateRelationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderDetailService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["OrderDetailService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["BannerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoticeService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["NoticeService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodReviewsService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["GoodReviewsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodPhotoService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["GoodPhotoService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwsService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["OwsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeliveryService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["DeliveryService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["AuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["LogService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataInitializeService", function() { return _services_firebase_api_index__WEBPACK_IMPORTED_MODULE_2__["DataInitializeService"]; });

/* harmony import */ var _page_services_page_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-services/page-data.service */ "./src/app/shared/page-services/page-data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageDataService", function() { return _page_services_page_data_service__WEBPACK_IMPORTED_MODULE_3__["PageDataService"]; });

/* harmony import */ var _page_services_mock_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-services/mock-data.service */ "./src/app/shared/page-services/mock-data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockDataService", function() { return _page_services_mock_data_service__WEBPACK_IMPORTED_MODULE_4__["MockDataService"]; });

/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]; });

/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/shared/services/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _services_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]; });

/* harmony import */ var _services_api_data_init_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/api/data-init.service */ "./src/app/shared/services/api/data-init.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataInitService", function() { return _services_api_data_init_service__WEBPACK_IMPORTED_MODULE_7__["DataInitService"]; });











/***/ }),

/***/ "./src/app/shared/model/address.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/model/address.model.ts ***!
  \***********************************************/
/*! exports provided: AddressModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModel", function() { return AddressModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class AddressModel {
    constructor(model = {}) {
        this.id = model.id;
        this.address = model.address;
        this.phone = model.phone;
        this.userId = model.userId;
        this.street = model.street;
        this.date = model.date;
        this.userName = model.userName;
    }
}


/***/ }),

/***/ "./src/app/shared/model/banner.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/model/banner.model.ts ***!
  \**********************************************/
/*! exports provided: BannerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerModel", function() { return BannerModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BannerModel {
    constructor(model = {}) {
        this.id = model.id;
        this.name = model.name;
        this.img = model.img;
        this.date = model.date;
    }
}


/***/ }),

/***/ "./src/app/shared/model/card.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/model/card.model.ts ***!
  \********************************************/
/*! exports provided: CardModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModel", function() { return CardModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CardModel {
    constructor(model = {}) {
        this.id = model.id;
        this.name = model.name;
        this.img = model.img;
        this.docId = model.docId;
    }
}


/***/ }),

/***/ "./src/app/shared/model/cate-relation.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/model/cate-relation.model.ts ***!
  \*****************************************************/
/*! exports provided: CateRelationModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateRelationModel", function() { return CateRelationModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CateRelationModel {
    constructor(model = {}) {
        this.id = model.id;
        this.cateId = model.cateId;
        this.subCateId = model.subCateId;
    }
}


/***/ }),

/***/ "./src/app/shared/model/cate.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/model/cate.model.ts ***!
  \********************************************/
/*! exports provided: CateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateModel", function() { return CateModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CateModel {
    constructor(model = {}) {
        this.id = model.id;
        this.name = model.name;
        this.date = model.date;
        this.sort = model.sort;
    }
}


/***/ }),

/***/ "./src/app/shared/model/chart.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/model/chart.model.ts ***!
  \*********************************************/
/*! exports provided: BarModel, LineModel, ChartModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarModel", function() { return BarModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineModel", function() { return LineModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModel", function() { return ChartModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BarModel {
    constructor(model = {}) {
        this.name = model.name;
        this.value = model.value;
    }
}
class LineModel {
    constructor(model = {}) {
        this.name = model.name;
        this.series = model.series;
    }
}
class ChartModel {
    constructor(model = {}) {
        this.name = model.name;
        this.num = model.num;
        this.sales = model.sales;
    }
}


/***/ }),

/***/ "./src/app/shared/model/config.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/model/config.model.ts ***!
  \**********************************************/
/*! exports provided: ConfigModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModel", function() { return ConfigModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ConfigModel = {
    isTest: true,
    visitKey: 'totalVisits',
    userKey: 'totalUsers',
    saleKey: 'totalSales',
    orderKey: 'totalOrders',
    noticeKey: 'totalNotices',
    favoriteKey: 'totalFavorites',
    testInfo: 'This is a demo version. For data security, you cannot delete, modify, ' +
        'add, upload images, etc. If you want a perfect operating experience, please contact the  administrator.'
};


/***/ }),

/***/ "./src/app/shared/model/coupon.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/model/coupon.model.ts ***!
  \**********************************************/
/*! exports provided: CouponModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponModel", function() { return CouponModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CouponModel {
    constructor(model = {}) {
        this.id = model.id;
        this.beginDate = model.beginDate;
        this.endDate = model.endDate;
        this.desc = model.desc;
        this.name = model.name;
        this.sort = model.sort;
        this.amount = model.amount;
        this.date = model.date;
        this.enable = model.enable;
        this.discountAmount = model.discountAmount;
    }
}


/***/ }),

/***/ "./src/app/shared/model/data-Initialize.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/model/data-Initialize.model.ts ***!
  \*******************************************************/
/*! exports provided: DataInitializeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataInitializeModel", function() { return DataInitializeModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DataInitializeModel {
}


/***/ }),

/***/ "./src/app/shared/model/delivery.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/model/delivery.model.ts ***!
  \************************************************/
/*! exports provided: DeliveryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryModel", function() { return DeliveryModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DeliveryModel {
    constructor(model = {}) {
        this.id = model.id;
        this.sort = model.sort;
        this.name = model.name;
        this.shortName = model.shortName;
        this.cost = model.cost;
        this.isEnable = model.isEnable;
        this.date = model.date;
    }
}


/***/ }),

/***/ "./src/app/shared/model/favorite.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/model/favorite.model.ts ***!
  \************************************************/
/*! exports provided: FavoriteModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteModel", function() { return FavoriteModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FavoriteModel {
    constructor(model = {}) {
        this.goodId = model.goodId;
        this.userId = model.userId;
        this.date = model.date;
        this.userName = model.userName;
    }
}


/***/ }),

/***/ "./src/app/shared/model/filter.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/model/filter.model.ts ***!
  \**********************************************/
/*! exports provided: FilterModel, FILTERSMultiple, FILTERSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterModel", function() { return FilterModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTERSMultiple", function() { return FILTERSMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTERSService", function() { return FILTERSService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FilterModel {
}
const FILTERSMultiple = [
    { cate: 1, type: 1, name: 'Multiple' },
    { cate: 1, type: 2, name: 'Lowest price' },
    { cate: 1, type: 3, name: 'Highest price' },
    { cate: 1, type: 4, name: 'Latest' }
];
const FILTERSService = [
    { cate: 2, type: 1, name: 'Cash on delivery' },
    { cate: 2, type: 2, name: 'Online pay' },
    { cate: 2, type: 3, name: 'Promotion' },
];


/***/ }),

/***/ "./src/app/shared/model/fruit.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/model/fruit.model.ts ***!
  \*********************************************/
/*! exports provided: FruitModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FruitModel", function() { return FruitModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FruitModel {
    constructor(good = {}) {
        this.subCateId = good.subCateId;
        this.id = good.id;
        this.img = good.img;
        this.inventory = good.inventory;
        this.name = good.name || '';
        this.price = good.price || 0;
        this.saleNum = good.likes || 0;
        this.place = good.place;
        this.docId = good.docId;
    }
}


/***/ }),

/***/ "./src/app/shared/model/good-img.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/model/good-img.model.ts ***!
  \************************************************/
/*! exports provided: GoodImgModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodImgModel", function() { return GoodImgModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GoodImgModel {
    constructor(model = {}) {
        this.id = model.id;
        this.goodId = model.goodid;
        this.img = model.img;
    }
}


/***/ }),

/***/ "./src/app/shared/model/good-photo.model.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/model/good-photo.model.ts ***!
  \**************************************************/
/*! exports provided: GoodPhotoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodPhotoModel", function() { return GoodPhotoModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GoodPhotoModel {
    constructor(model = {}) {
        this.id = model.id;
        this.goodId = model.goodId;
        this.img = model.img;
        this.imgName = model.imgName;
    }
}


/***/ }),

/***/ "./src/app/shared/model/good-reviews.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/model/good-reviews.model.ts ***!
  \****************************************************/
/*! exports provided: GoodReviewsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodReviewsModel", function() { return GoodReviewsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GoodReviewsModel {
    constructor(model = {}) {
        this.id = model.id;
        this.uid = model.uid;
        this.description = model.description;
        this.date = model.date;
        this.goodId = model.goodId;
    }
}


/***/ }),

/***/ "./src/app/shared/model/goods.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/model/goods.model.ts ***!
  \*********************************************/
/*! exports provided: GoodsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsModel", function() { return GoodsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GoodsModel {
    constructor(good = {}) {
        this.subCateId = good.subCateId;
        this.id = good.id;
        this.img = good.img;
        this.name = good.name || '';
        this.price = good.price || 0;
        this.weight = good.weight;
        this.shelfLife = good.shelfLife;
        this.storageConditions = good.storageConditions;
        this.sort = good.sort;
        this.isHot = good.isHot;
        this.isNew = good.isNew;
        this.description = good.description;
        this.date = good.date;
        this.cateName = good.cateName;
    }
}


/***/ }),

/***/ "./src/app/shared/model/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/model/index.ts ***!
  \***************************************/
/*! exports provided: CateModel, GoodsModel, CouponModel, PayModel, AddressModel, OrderDetailModel, OrderModel, CardModel, NoticeModel, FavoriteModel, UserModel, BannerModel, SubCateModel, FruitModel, CateRelationModel, SubCateRelationViewModel, FilterModel, FILTERSMultiple, FILTERSService, GoodImgModel, GoodReviewsModel, GoodPhotoModel, OwsModel, DeliveryModel, LogModel, LocalUserModel, BarModel, LineModel, ChartModel, DataInitializeModel, ConfigModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cate_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cate.model */ "./src/app/shared/model/cate.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateModel", function() { return _cate_model__WEBPACK_IMPORTED_MODULE_1__["CateModel"]; });

/* harmony import */ var _goods_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods.model */ "./src/app/shared/model/goods.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodsModel", function() { return _goods_model__WEBPACK_IMPORTED_MODULE_2__["GoodsModel"]; });

/* harmony import */ var _coupon_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon.model */ "./src/app/shared/model/coupon.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CouponModel", function() { return _coupon_model__WEBPACK_IMPORTED_MODULE_3__["CouponModel"]; });

/* harmony import */ var _pay_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pay.model */ "./src/app/shared/model/pay.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayModel", function() { return _pay_model__WEBPACK_IMPORTED_MODULE_4__["PayModel"]; });

/* harmony import */ var _address_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address.model */ "./src/app/shared/model/address.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddressModel", function() { return _address_model__WEBPACK_IMPORTED_MODULE_5__["AddressModel"]; });

/* harmony import */ var _order_detail_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-detail.model */ "./src/app/shared/model/order-detail.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderDetailModel", function() { return _order_detail_model__WEBPACK_IMPORTED_MODULE_6__["OrderDetailModel"]; });

/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order.model */ "./src/app/shared/model/order.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderModel", function() { return _order_model__WEBPACK_IMPORTED_MODULE_7__["OrderModel"]; });

/* harmony import */ var _card_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card.model */ "./src/app/shared/model/card.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardModel", function() { return _card_model__WEBPACK_IMPORTED_MODULE_8__["CardModel"]; });

/* harmony import */ var _notice_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notice.model */ "./src/app/shared/model/notice.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoticeModel", function() { return _notice_model__WEBPACK_IMPORTED_MODULE_9__["NoticeModel"]; });

/* harmony import */ var _favorite_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./favorite.model */ "./src/app/shared/model/favorite.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteModel", function() { return _favorite_model__WEBPACK_IMPORTED_MODULE_10__["FavoriteModel"]; });

/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user.model */ "./src/app/shared/model/user.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return _user_model__WEBPACK_IMPORTED_MODULE_11__["UserModel"]; });

/* harmony import */ var _banner_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./banner.model */ "./src/app/shared/model/banner.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BannerModel", function() { return _banner_model__WEBPACK_IMPORTED_MODULE_12__["BannerModel"]; });

/* harmony import */ var _sub_cate_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sub-cate.model */ "./src/app/shared/model/sub-cate.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubCateModel", function() { return _sub_cate_model__WEBPACK_IMPORTED_MODULE_13__["SubCateModel"]; });

/* harmony import */ var _fruit_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fruit.model */ "./src/app/shared/model/fruit.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FruitModel", function() { return _fruit_model__WEBPACK_IMPORTED_MODULE_14__["FruitModel"]; });

/* harmony import */ var _cate_relation_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cate-relation.model */ "./src/app/shared/model/cate-relation.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateRelationModel", function() { return _cate_relation_model__WEBPACK_IMPORTED_MODULE_15__["CateRelationModel"]; });

/* harmony import */ var _sub_cate_relation_view_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sub-cate-relation-view.model */ "./src/app/shared/model/sub-cate-relation-view.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubCateRelationViewModel", function() { return _sub_cate_relation_view_model__WEBPACK_IMPORTED_MODULE_16__["SubCateRelationViewModel"]; });

/* harmony import */ var _filter_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./filter.model */ "./src/app/shared/model/filter.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterModel", function() { return _filter_model__WEBPACK_IMPORTED_MODULE_17__["FilterModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FILTERSMultiple", function() { return _filter_model__WEBPACK_IMPORTED_MODULE_17__["FILTERSMultiple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FILTERSService", function() { return _filter_model__WEBPACK_IMPORTED_MODULE_17__["FILTERSService"]; });

/* harmony import */ var _good_img_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./good-img.model */ "./src/app/shared/model/good-img.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodImgModel", function() { return _good_img_model__WEBPACK_IMPORTED_MODULE_18__["GoodImgModel"]; });

/* harmony import */ var _good_reviews_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./good-reviews.model */ "./src/app/shared/model/good-reviews.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodReviewsModel", function() { return _good_reviews_model__WEBPACK_IMPORTED_MODULE_19__["GoodReviewsModel"]; });

/* harmony import */ var _good_photo_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./good-photo.model */ "./src/app/shared/model/good-photo.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodPhotoModel", function() { return _good_photo_model__WEBPACK_IMPORTED_MODULE_20__["GoodPhotoModel"]; });

/* harmony import */ var _ows_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ows.model */ "./src/app/shared/model/ows.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwsModel", function() { return _ows_model__WEBPACK_IMPORTED_MODULE_21__["OwsModel"]; });

/* harmony import */ var _delivery_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./delivery.model */ "./src/app/shared/model/delivery.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeliveryModel", function() { return _delivery_model__WEBPACK_IMPORTED_MODULE_22__["DeliveryModel"]; });

/* harmony import */ var _log_model__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./log.model */ "./src/app/shared/model/log.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogModel", function() { return _log_model__WEBPACK_IMPORTED_MODULE_23__["LogModel"]; });

/* harmony import */ var _local_user_model__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./local-user.model */ "./src/app/shared/model/local-user.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalUserModel", function() { return _local_user_model__WEBPACK_IMPORTED_MODULE_24__["LocalUserModel"]; });

/* harmony import */ var _chart_model__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./chart.model */ "./src/app/shared/model/chart.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarModel", function() { return _chart_model__WEBPACK_IMPORTED_MODULE_25__["BarModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LineModel", function() { return _chart_model__WEBPACK_IMPORTED_MODULE_25__["LineModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartModel", function() { return _chart_model__WEBPACK_IMPORTED_MODULE_25__["ChartModel"]; });

/* harmony import */ var _data_Initialize_model__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./data-Initialize.model */ "./src/app/shared/model/data-Initialize.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataInitializeModel", function() { return _data_Initialize_model__WEBPACK_IMPORTED_MODULE_26__["DataInitializeModel"]; });

/* harmony import */ var _config_model__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./config.model */ "./src/app/shared/model/config.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigModel", function() { return _config_model__WEBPACK_IMPORTED_MODULE_27__["ConfigModel"]; });































/***/ }),

/***/ "./src/app/shared/model/local-user.model.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/model/local-user.model.ts ***!
  \**************************************************/
/*! exports provided: LocalUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalUserModel", function() { return LocalUserModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LocalUserModel {
}


/***/ }),

/***/ "./src/app/shared/model/log.model.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/model/log.model.ts ***!
  \*******************************************/
/*! exports provided: LogModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogModel", function() { return LogModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LogModel {
    constructor(model = {}) {
        this.id = model.id;
        this.device = model.device;
        this.userId = model.userId;
        this.date = model.date;
        this.userName = model.userName;
        this.email = model.email;
    }
}


/***/ }),

/***/ "./src/app/shared/model/notice.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/model/notice.model.ts ***!
  \**********************************************/
/*! exports provided: NoticeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeModel", function() { return NoticeModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class NoticeModel {
    constructor(model = {}) {
        this.id = model.id;
        this.name = model.name;
        this.description = model.description;
        this.date = model.date;
    }
}


/***/ }),

/***/ "./src/app/shared/model/order-detail.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/model/order-detail.model.ts ***!
  \****************************************************/
/*! exports provided: OrderDetailModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailModel", function() { return OrderDetailModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class OrderDetailModel {
    constructor(model = {}) {
        this.id = model.id;
        this.orderId = model.orderId;
        this.goodId = model.goodId;
        this.num = model.num;
        this.amount = model.amount;
        this.detailPrice = model.detailPrice;
    }
}


/***/ }),

/***/ "./src/app/shared/model/order.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/model/order.model.ts ***!
  \*********************************************/
/*! exports provided: OrderModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModel", function() { return OrderModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class OrderModel {
    constructor(model = {}) {
        this.id = model.id;
        this.orderNo = model.orderNo;
        this.orderDate = model.orderDate;
        this.num = model.num;
        this.amount = model.amount;
        this.overWeightSurcharge = model.overWeightSurcharge;
        this.freight = model.freight;
        this.discount = model.discount;
        this.payDiscount = model.payDiscount;
        this.pay = model.pay;
        this.payDate = model.payDate;
        this.address = model.address;
        this.delivery = model.delivery;
        this.deliveryPhone = model.deliveryPhone;
        this.deliveryDate = model.deliveryDate;
        this.userId = model.userId;
        this.status = model.status;
        this.date = model.date;
        this.finishDate = model.finishDate;
        this.total = model.total;
    }
}


/***/ }),

/***/ "./src/app/shared/model/ows.model.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/model/ows.model.ts ***!
  \*******************************************/
/*! exports provided: OwsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwsModel", function() { return OwsModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class OwsModel {
    constructor(model = {}) {
        this.id = model.id;
        this.minWeight = model.minWeight;
        this.maxWeight = model.maxWeight;
        this.cost = model.cost;
        this.sort = model.sort;
        this.isEnable = model.isEnable;
        this.date = model.date;
    }
}


/***/ }),

/***/ "./src/app/shared/model/pay.model.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/model/pay.model.ts ***!
  \*******************************************/
/*! exports provided: PayModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayModel", function() { return PayModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PayModel {
    constructor(model = {}) {
        this.id = model.id;
        this.img = model.img;
        this.name = model.name;
        this.minAmount = model.minAmount;
        this.maxAmount = model.maxAmount;
        this.sort = model.sort;
        this.date = model.date;
        this.isEnable = model.isEnable;
    }
}


/***/ }),

/***/ "./src/app/shared/model/sub-cate-relation-view.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/model/sub-cate-relation-view.model.ts ***!
  \**************************************************************/
/*! exports provided: SubCateRelationViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCateRelationViewModel", function() { return SubCateRelationViewModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SubCateRelationViewModel {
    constructor(model = {}) {
        this.id = model.id;
        this.name = model.name;
        this.img = model.img;
        this.cateId = model.cateId;
        this.docId = model.docId;
    }
}


/***/ }),

/***/ "./src/app/shared/model/sub-cate.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/model/sub-cate.model.ts ***!
  \************************************************/
/*! exports provided: SubCateModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCateModel", function() { return SubCateModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SubCateModel {
    constructor(model = {}) {
        this.id = model.id;
        this.img = model.img;
        this.name = model.name;
        this.date = model.date;
        this.img = model.img;
        this.checked = model.checked;
    }
}


/***/ }),

/***/ "./src/app/shared/model/user.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/model/user.model.ts ***!
  \********************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserModel {
    constructor(model = {}) {
        this.id = model.id;
        this.uid = model.uid;
        this.displayName = model.displayName;
        this.email = model.email;
        this.photoURL = model.photoURL;
        this.lastDate = model.lastDate;
        this.registerDate = model.registerDate;
        this.balance = model.balance;
    }
}


/***/ }),

/***/ "./src/app/shared/page-services/mock-data.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/page-services/mock-data.service.ts ***!
  \***********************************************************/
/*! exports provided: MockDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockDataService", function() { return MockDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let MockDataService = class MockDataService {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.totalVisits = Math.ceil(Math.random() * 10000);
        this.totalUsers = Math.ceil(Math.random() * 10000);
        this.totalSales = Math.ceil(Math.random() * 100000);
        this.totalOrders = Math.ceil(Math.random() * 10000);
        this.totalNotices = Math.ceil(Math.random() * 20);
        this.totalFavorites = Math.ceil(Math.random() * 200);
        this.barList = new Array();
        this.lineList = new Array();
        this.pieList = new Array();
        this.visitList = new Array();
        this.deviceList = ['Android', 'Ios', 'Web', 'Mobile', 'IphoneX'];
        this.initData();
    }
    initData() {
        for (let i = 14; i > -1; i--) {
            this.barList.push(({ name: this.getDate(-i), value: Math.ceil(Math.random() * 10000) }));
        }
        this.deviceList.map(d => {
            this.pieList.push(({ name: d, value: Math.ceil(Math.random() * 1000) }));
        });
        this.visitList[0] = new _model__WEBPACK_IMPORTED_MODULE_2__["LineModel"]({ name: 'Num', series: [] });
        for (let i = 24; i > -1; i--) {
            this.visitList[0].series.push(({ name: this.getDate(-i), value: Math.ceil(Math.random() * 1000) }));
        }
        this.lineList[0] = new _model__WEBPACK_IMPORTED_MODULE_2__["LineModel"]({ name: 'Num', series: [] });
        for (let i = 4; i > -1; i--) {
            this.lineList[0].series.push(({ name: this.getDate(-i), value: Math.ceil(Math.random() * 1000) }));
        }
    }
    getDate(days) {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return this.datePipe.transform(date, 'MM-dd');
    }
};
MockDataService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }
];
MockDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], MockDataService);



/***/ }),

/***/ "./src/app/shared/page-services/page-data.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/page-services/page-data.service.ts ***!
  \***********************************************************/
/*! exports provided: PageDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDataService", function() { return PageDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/modal.service */ "./src/app/shared/services/modal.service.ts");




let PageDataService = class PageDataService {
    constructor(modalService) {
        this.modalService = modalService;
        this.quotaErrMsg = 'Too many requests,Firebase Request Quota exceeded,Please try again at 00:00:00。';
    }
    getList(serviceList) {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(serviceList).subscribe(results => {
                if (results) {
                    resolve(results);
                }
            }, error => {
                if (error === 'Quota exceeded.') {
                    this.modalService.error(this.quotaErrMsg);
                }
                this.modalService.error(error);
            });
        }));
    }
    getSingleList(service) {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            service.getList().subscribe(result => {
                resolve(result);
            }, error => this.modalService.error(error));
        }));
    }
    getModel(service, id) {
        return new Promise((resolve, reject) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            service.getModel(id).subscribe(result => {
                resolve(result);
            }, error => this.modalService.error(error));
        }));
    }
};
PageDataService.ctorParameters = () => [
    { type: _services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"] }
];
PageDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PageDataService);



/***/ }),

/***/ "./src/app/shared/services/api/data-init.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/api/data-init.service.ts ***!
  \**********************************************************/
/*! exports provided: DataInitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataInitService", function() { return DataInitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let DataInitService = class DataInitService {
    constructor(http) {
        this.http = http;
    }
    handleError(error) {
        let errMsg;
        if (!error.ok) {
            errMsg = 'Can\'t connect to server.';
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Promise.reject(errMsg);
    }
    getBannerList() {
        return this.http.get('./assets/init-data/banner.json', { withCredentials: false })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getNoticeList() {
        return this.http.get('./assets/init-data/notice.json', { withCredentials: false })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getDiscountList() {
        return this.http.get('./assets/init-data/discount.json', { withCredentials: false })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getPayList() {
        return this.http.get('./assets/init-data/pays.json', { withCredentials: false })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getExpressList() {
        return this.http.get('./assets/init-data/express.json', { withCredentials: false })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getCateList() {
        return this.http.get('./assets/init-data/cate.json', { withCredentials: false })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getOrderList() {
        return this.http.get('./assets/init-data/order.json', { withCredentials: false })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getProductList() {
        return this.http.get('./assets/init-data/product.json', { withCredentials: false })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getSubCateList() {
        return this.http.get('./assets/init-data/subcate.json', { withCredentials: false })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getOwsList() {
        return this.http.get('./assets/init-data/ows.json', { withCredentials: false })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
};
DataInitService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataInitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataInitService);



/***/ }),

/***/ "./src/app/shared/services/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _firebase_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase-api */ "./src/app/shared/services/firebase-api/index.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        if (!this.authService.isAuthenticated) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _firebase_api__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/address.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/address.service.ts ***!
  \*****************************************************************/
/*! exports provided: AddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return AddressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");






let AddressService = class AddressService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'address', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
};
AddressService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
AddressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AddressService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/auth.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/auth.service.ts ***!
  \**************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm2015/ngx-store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







let AuthService = class AuthService {
    constructor(afAuth, afs, datePipe) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.datePipe = datePipe;
        this.isAuthenticated = false;
        this.device = 'Web Admin';
        this.loginUrl = '/login';
    }
    updateUser(user, userName) {
        return this.afs.doc(`users/${user.uid}`).set({
            uid: user.uid,
            displayName: userName || user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            registerDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss'),
            lastDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss'),
            balance: 0
        });
    }
    signWithAnonymous() {
        return this.afAuth.auth.signInAnonymously()
            .then(credential => {
            return this.updateUser(credential.user);
        });
    }
    signWithEmail(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }
    signUp(email, password, userName) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }
    signOut() {
        return this.afAuth.auth.signOut();
    }
    githubLogin() {
        this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GithubAuthProvider())
            .then(credential => {
            return this.updateUser(credential.user);
        });
    }
    googleLogin() {
        this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider())
            .then(credential => {
            return this.updateUser(credential.user);
        });
    }
    twitterLogin() {
        this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].TwitterAuthProvider())
            .then(credential => {
            return this.updateUser(credential.user);
        });
    }
    facebookLogin() {
        this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider())
            .then(credential => {
            return this.updateUser(credential.user);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(ngx_store__WEBPACK_IMPORTED_MODULE_5__["SessionStorage"])()
], AuthService.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(ngx_store__WEBPACK_IMPORTED_MODULE_5__["SessionStorage"])()
], AuthService.prototype, "isAuthenticated", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(ngx_store__WEBPACK_IMPORTED_MODULE_5__["SessionStorage"])()
], AuthService.prototype, "device", void 0);
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/banner.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/banner.service.ts ***!
  \****************************************************************/
/*! exports provided: BannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return BannerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");






let BannerService = class BannerService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'banner', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
};
BannerService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
BannerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], BannerService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/base.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/base.service.ts ***!
  \**************************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model */ "./src/app/shared/model/index.ts");




class BaseService {
    constructor(db, myErr, path, modalService) {
        this.db = db;
        this.myErr = myErr;
        this.path = path;
        this.modalService = modalService;
        this.baseCollection = this.db.collection(path);
    }
    error(msg) {
        this.modalService.error({ nzTitle: 'Info', nzContent: msg });
    }
    getList() {
        return this.baseCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((d) => {
            return d.map((action) => {
                const data = action.payload.doc.data();
                return (Object.assign({ id: action.payload.doc.id }, data));
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.myErr.handleError));
    }
    getListByParam(fieldName, id) {
        this.baseCollection = this.db.collection(this.path, ref => ref.where(fieldName, '==', id));
        return this.baseCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((d) => {
            return d.map((action) => {
                const data = action.payload.doc.data();
                return (Object.assign({ id: action.payload.doc.id }, data));
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.myErr.handleError));
    }
    getModel(id) {
        return this.db.doc(`/${this.path}/${id}`).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(d => (Object.assign({ id: d.payload.id }, d.payload.data()))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.myErr.handleError));
    }
    addModel(item) {
        if (_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].isTest) {
            this.error(_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].testInfo);
        }
        else {
            return this.baseCollection.add(JSON.parse(JSON.stringify(item)));
        }
    }
    addAndUpdate(item) {
        if (_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].isTest) {
            this.error(_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].testInfo);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.baseCollection.add(JSON.parse(JSON.stringify(item)))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(r => {
                item.id = r.id;
                return [this.db.doc(`/${this.path}/${r.id}`).update(JSON.parse(JSON.stringify(item)))];
            }));
        }
    }
    addList(list) {
        const resultList = new Array();
        list.map(item => resultList.push(this.baseCollection.add(JSON.parse(JSON.stringify(item)))));
        return resultList;
    }
    create(c, id) {
        return new c(id);
    }
    update(item) {
        if (_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].isTest) {
            this.error(_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].testInfo);
        }
        else {
            return this.db.doc(`/${this.path}/${item.id}`).update(JSON.parse(JSON.stringify(item)));
        }
    }
    delete(id) {
        if (_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].isTest) {
            this.error(_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].testInfo);
            return new Promise((resolve) => resolve());
        }
        else {
            return this.db.doc(`/${this.path}/${id}`).delete();
        }
    }
}


/***/ }),

/***/ "./src/app/shared/services/firebase-api/card.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/card.service.ts ***!
  \**************************************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");






let CardService = class CardService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'card', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
};
CardService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
CardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CardService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/cate-relation.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/cate-relation.service.ts ***!
  \***********************************************************************/
/*! exports provided: CateRelationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateRelationService", function() { return CateRelationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");






let CateRelationService = class CateRelationService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'caterelation', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
};
CateRelationService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
CateRelationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CateRelationService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/cate.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/cate.service.ts ***!
  \**************************************************************/
/*! exports provided: CateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateService", function() { return CateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");






let CateService = class CateService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'cate', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
};
CateService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
CateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CateService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/coupons.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/coupons.service.ts ***!
  \*****************************************************************/
/*! exports provided: CouponsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsService", function() { return CouponsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");






let CouponsService = class CouponsService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'coupon', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
};
CouponsService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
CouponsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CouponsService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/data-initialize.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/data-initialize.service.ts ***!
  \*************************************************************************/
/*! exports provided: DataInitializeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataInitializeService", function() { return DataInitializeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");




let DataInitializeService = class DataInitializeService {
    constructor(db, myErr) {
        this.db = db;
        this.myErr = myErr;
    }
};
DataInitializeService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] }
];
DataInitializeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], DataInitializeService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/delivery.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/delivery.service.ts ***!
  \******************************************************************/
/*! exports provided: DeliveryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryService", function() { return DeliveryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");






let DeliveryService = class DeliveryService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'delivery', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
};
DeliveryService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
DeliveryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], DeliveryService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/favorite.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/favorite.service.ts ***!
  \******************************************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");








let FavoriteService = class FavoriteService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'favorite', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
    // getFavoriteList() {
    //   return this.db.collection<FavoriteModel>('favorite').valueChanges()
    //     .pipe(mergeMap(f => {
    //       const goodIds = uniq(f.map(o => o.goodId));
    //       const userIds = uniq(f.map(o => o.userId));
    //       if (f.length > 0) {
    //         return combineLatest(
    //           of([...f]),
    //           combineLatest(goodIds.map(id => {
    //             return this.db.doc<GoodsModel>(`/goods/${id}`)
    //               .snapshotChanges()
    //               .pipe(map(g => ({id: g.payload.id, ...g.payload.data()})));
    //           })),
    //           combineLatest(
    //             userIds.map(userId =>
    //               this.db.doc<UserModel>(`/users/${userId}`)
    //                 .valueChanges().pipe(map(user => user))
    //             )));
    //       } else {
    //         return of(f, [], []);
    //       }
    //
    //
    //     }), map(([favorites, goods, users]) => {
    //       return favorites ? favorites.map(f => {
    //         const good = goods.find(g => g.id === f.goodId);
    //         return {
    //           ...f,
    //           name: good.name,
    //           img: good.img,
    //           userName: users.find(u => u.uid === f.userId).displayName
    //         };
    //       }) : [];
    //     }));
    // }
    getFavoriteList1() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([this.db.collection('favorite').snapshotChanges(),
            this.db.collection('goods').snapshotChanges(),
            this.db.collection('users').snapshotChanges()
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(results => {
            const fList = results[0].map((action) => {
                const data = action.payload.doc.data();
                return (Object.assign({ id: action.payload.doc.id }, data));
            });
            const gList = results[1].map((action) => {
                const data = action.payload.doc.data();
                return (Object.assign({ id: action.payload.doc.id }, data));
            });
            const uList = results[2].map((action) => {
                const data = action.payload.doc.data();
                return (Object.assign({ id: action.payload.doc.id }, data));
            });
            return fList.map(f => {
                const good = gList.find(g => g.id === f.goodId);
                return Object.assign({}, f, { name: good.name, img: good.img, userName: uList.find(u => u.uid === f.userId).displayName });
            });
        }));
    }
};
FavoriteService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzModalService"] }
];
FavoriteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], FavoriteService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/good-photo.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/good-photo.service.ts ***!
  \********************************************************************/
/*! exports provided: GoodPhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodPhotoService", function() { return GoodPhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");






let GoodPhotoService = class GoodPhotoService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'goodPhotos', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
};
GoodPhotoService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
GoodPhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], GoodPhotoService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/good-reviews.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/good-reviews.service.ts ***!
  \**********************************************************************/
/*! exports provided: GoodReviewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodReviewsService", function() { return GoodReviewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");






let GoodReviewsService = class GoodReviewsService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'goodReviews', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
};
GoodReviewsService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
GoodReviewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], GoodReviewsService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/goods.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/goods.service.ts ***!
  \***************************************************************/
/*! exports provided: GoodsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsService", function() { return GoodsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");










let GoodsService = class GoodsService extends _base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'goods', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
    getGoodList() {
        return this.db.collection('goods').valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(goods => {
            const subCateIds = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["uniq"])(goods.map(o => o.subCateId));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(goods), Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(subCateIds.map(subCateId => this.db.doc(`subcate/${subCateId}`).snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(d => new _model__WEBPACK_IMPORTED_MODULE_3__["SubCateModel"](Object.assign({ id: d.payload.id }, d.payload.data())))))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([goods, cate]) => {
            return goods.map(good => {
                const name = cate.find(c => c.id === good.subCateId).name;
                return new _model__WEBPACK_IMPORTED_MODULE_3__["GoodsModel"](Object.assign({ cateName: name }, good));
            });
        }));
    }
};
GoodsService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_4__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzModalService"] }
];
GoodsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], GoodsService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/firebase-api/index.ts ***!
  \*******************************************************/
/*! exports provided: CateService, GoodsService, CouponsService, PayService, AddressService, OrderService, CardService, FavoriteService, UsersService, SubCateService, CateRelationService, OrderDetailService, BannerService, NoticeService, GoodReviewsService, GoodPhotoService, OwsService, DeliveryService, AuthService, LogService, DataInitializeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cate.service */ "./src/app/shared/services/firebase-api/cate.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateService", function() { return _cate_service__WEBPACK_IMPORTED_MODULE_1__["CateService"]; });

/* harmony import */ var _goods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods.service */ "./src/app/shared/services/firebase-api/goods.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodsService", function() { return _goods_service__WEBPACK_IMPORTED_MODULE_2__["GoodsService"]; });

/* harmony import */ var _coupons_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupons.service */ "./src/app/shared/services/firebase-api/coupons.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CouponsService", function() { return _coupons_service__WEBPACK_IMPORTED_MODULE_3__["CouponsService"]; });

/* harmony import */ var _pay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pay.service */ "./src/app/shared/services/firebase-api/pay.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayService", function() { return _pay_service__WEBPACK_IMPORTED_MODULE_4__["PayService"]; });

/* harmony import */ var _address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address.service */ "./src/app/shared/services/firebase-api/address.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return _address_service__WEBPACK_IMPORTED_MODULE_5__["AddressService"]; });

/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order.service */ "./src/app/shared/services/firebase-api/order.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return _order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]; });

/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card.service */ "./src/app/shared/services/firebase-api/card.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return _card_service__WEBPACK_IMPORTED_MODULE_7__["CardService"]; });

/* harmony import */ var _favorite_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./favorite.service */ "./src/app/shared/services/firebase-api/favorite.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return _favorite_service__WEBPACK_IMPORTED_MODULE_8__["FavoriteService"]; });

/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users.service */ "./src/app/shared/services/firebase-api/users.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return _users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"]; });

/* harmony import */ var _sub_cate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sub-cate.service */ "./src/app/shared/services/firebase-api/sub-cate.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubCateService", function() { return _sub_cate_service__WEBPACK_IMPORTED_MODULE_10__["SubCateService"]; });

/* harmony import */ var _cate_relation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cate-relation.service */ "./src/app/shared/services/firebase-api/cate-relation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CateRelationService", function() { return _cate_relation_service__WEBPACK_IMPORTED_MODULE_11__["CateRelationService"]; });

/* harmony import */ var _order_detail_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./order-detail.service */ "./src/app/shared/services/firebase-api/order-detail.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderDetailService", function() { return _order_detail_service__WEBPACK_IMPORTED_MODULE_12__["OrderDetailService"]; });

/* harmony import */ var _banner_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./banner.service */ "./src/app/shared/services/firebase-api/banner.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return _banner_service__WEBPACK_IMPORTED_MODULE_13__["BannerService"]; });

/* harmony import */ var _notice_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notice.service */ "./src/app/shared/services/firebase-api/notice.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoticeService", function() { return _notice_service__WEBPACK_IMPORTED_MODULE_14__["NoticeService"]; });

/* harmony import */ var _good_reviews_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./good-reviews.service */ "./src/app/shared/services/firebase-api/good-reviews.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodReviewsService", function() { return _good_reviews_service__WEBPACK_IMPORTED_MODULE_15__["GoodReviewsService"]; });

/* harmony import */ var _good_photo_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./good-photo.service */ "./src/app/shared/services/firebase-api/good-photo.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodPhotoService", function() { return _good_photo_service__WEBPACK_IMPORTED_MODULE_16__["GoodPhotoService"]; });

/* harmony import */ var _ows_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ows.service */ "./src/app/shared/services/firebase-api/ows.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OwsService", function() { return _ows_service__WEBPACK_IMPORTED_MODULE_17__["OwsService"]; });

/* harmony import */ var _delivery_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./delivery.service */ "./src/app/shared/services/firebase-api/delivery.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeliveryService", function() { return _delivery_service__WEBPACK_IMPORTED_MODULE_18__["DeliveryService"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/firebase-api/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"]; });

/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./log.service */ "./src/app/shared/services/firebase-api/log.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return _log_service__WEBPACK_IMPORTED_MODULE_20__["LogService"]; });

/* harmony import */ var _data_initialize_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./data-initialize.service */ "./src/app/shared/services/firebase-api/data-initialize.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataInitializeService", function() { return _data_initialize_service__WEBPACK_IMPORTED_MODULE_21__["DataInitializeService"]; });

























/***/ }),

/***/ "./src/app/shared/services/firebase-api/log.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/log.service.ts ***!
  \*************************************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");









let LogService = class LogService extends _base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'logs', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
    addLog(item) {
        return this.baseCollection.add(JSON.parse(JSON.stringify(item)));
    }
    // getLogList() {
    //   return this.db.collection<LogModel>('logs').valueChanges()
    //     .pipe(switchMap(f => {
    //       const userIds = uniq(f.map(o => o.userId));
    //       if (f.length > 0) {
    //         return combineLatest(
    //           of(f),
    //           combineLatest(
    //             userIds.map(userId =>
    //               this.db.doc<UserModel>(`/users/${userId}`)
    //                 .valueChanges().pipe(map(user => user))
    //             )));
    //       } else {
    //         return of(f, []);
    //       }
    //     }), map(([logs, users]) => {
    //       return logs.map(l => {
    //         const user = users.filter(u => u !== undefined).find(u => u.uid === l.userId);
    //         return {
    //           ...l,
    //           userName: user ? user.displayName : 'anonymous',
    //           email: user ? user.email : 'anonymous@gmail.com'
    //         };
    //       });
    //     }));
    // }
    getLogList1() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([this.db.collection('logs').snapshotChanges(),
            this.db.collection('users').snapshotChanges()])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(results => {
            const logList = results[0].map((action) => {
                const data = action.payload.doc.data();
                return (Object.assign({ id: action.payload.doc.id }, data));
            });
            const userList = results[1].map((action) => {
                const data = action.payload.doc.data();
                return (Object.assign({ id: action.payload.doc.id }, data));
            });
            return logList.map(log => {
                const user = userList.find(u => u.uid === log.userId);
                return Object.assign({}, log, { userName: user ? user.displayName : 'anonymous', email: user ? user.email : 'anonymous@gmail.com' });
            });
        }));
    }
    getPieList() {
        return this.db.collection('logs').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(logs => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(logs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(g => g.device), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["toArray"])())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(arr => {
                return new _model__WEBPACK_IMPORTED_MODULE_3__["BarModel"]({
                    name: arr[0].device,
                    value: arr.length
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["toArray"])());
        }));
    }
    getVisitList(count = 15) {
        return this.db.collection('logs', model => model.orderBy('date', 'asc')).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(logs => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(logs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(g => g.date.substring(0, 10)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["toArray"])())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(arr => {
                return new _model__WEBPACK_IMPORTED_MODULE_3__["BarModel"]({
                    name: arr[0].date.substring(0, 10),
                    value: arr.length
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeLast"])(count));
        }));
    }
};
LogService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_4__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzModalService"] }
];
LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], LogService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/my-error.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/firebase-api/my-error.ts ***!
  \**********************************************************/
/*! exports provided: MyError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyError", function() { return MyError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal.service */ "./src/app/shared/services/modal.service.ts");




let MyError = class MyError {
    constructor(modalService) {
        this.modalService = modalService;
        this.quotaErrMsg = 'Too many requests,Firebase Request Quota exceeded,Please try again after 12 hours';
    }
    handleError(error) {
        let errMsg;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        if (error === 'Quota exceeded.') {
            this.modalService.error(this.quotaErrMsg);
        }
        this.modalService.error(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
    }
};
MyError.ctorParameters = () => [
    { type: _modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"] }
];
MyError = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
], MyError);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/notice.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/notice.service.ts ***!
  \****************************************************************/
/*! exports provided: NoticeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeService", function() { return NoticeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");






let NoticeService = class NoticeService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'notice', modalService);
        this.db = db;
        this.myErr = myErr;
    }
};
NoticeService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
NoticeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], NoticeService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/order-detail.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/order-detail.service.ts ***!
  \**********************************************************************/
/*! exports provided: OrderDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailService", function() { return OrderDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");








let OrderDetailService = class OrderDetailService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'orderdetail', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
    getList1(orderId) {
        return this.db.collection('orderdetail', ref => ref.where('orderId', '==', orderId)).valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(detail => detail[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(detail => {
            return this.db.doc(`/goods/${detail.goodId}`)
                .valueChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(g => [(Object.assign({}, g, detail))]));
        }));
    }
    getDetail(orderId) {
        return this.db.collection('orderdetail', ref => ref.where('orderId', '==', orderId)).valueChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(detail => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(detail.map(d => {
                return this.db.doc(`/goods/${d.goodId}`)
                    .valueChanges()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(g => (Object.assign({}, g, d))));
            }));
        }));
    }
};
OrderDetailService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NzModalService"] }
];
OrderDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], OrderDetailService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/order.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/order.service.ts ***!
  \***************************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");










let OrderService = class OrderService extends _base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'orders', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
    getList1() {
        return this.db.collection('orders').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(orders => {
            const orderIds = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["uniq"])(orders.map(o => o.payload.doc.id));
            const userIds = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["uniq"])(orders.map(o => o.payload.doc.data().userId));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(orders.map(o => (Object.assign({ id: o.payload.doc.id }, o.payload.doc.data())))), Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(orderIds.map(orderId => this.db.collection('orderdetail', ref => ref.where('orderId', '==', orderId))
                .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(detail => detail[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(detail => {
                return this.db.doc(`/goods/${detail.goodId}`)
                    .valueChanges()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(g => (Object.assign({}, g, detail))));
            })))), Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(userIds.map(userId => this.db.doc(`/users/${userId}`)
                .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(user => (Object.assign({ id: user.payload.id }, user.payload.data())))))));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([orders, details, users]) => {
            return orders.map(order => {
                const user = users.find(u => u.id === order.userId);
                return Object.assign({}, order, { details: details.filter(d => d.orderId === order.id), userName: user ? user.displayName : '' });
            });
        }));
    }
    getOrderList() {
        return this.db.collection('orders').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(orders => {
            const orderIds = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["uniq"])(orders.map(o => o.payload.doc.id));
            const userIds = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["uniq"])(orders.map(o => o.payload.doc.data().userId));
            if (orders.length > 0) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(orders.map(o => (Object.assign({ id: o.payload.doc.id }, o.payload.doc.data())))), Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(orderIds.map(orderId => this.db.collection('orderdetail', ref => ref.where('orderId', '==', orderId))
                    .valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(detail => {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(detail.map(d => {
                        return this.db.doc(`/goods/${d.goodId}`)
                            .valueChanges()
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(g => (Object.assign({}, d, g))));
                    }));
                })))), Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(userIds.map(userId => this.db.doc(`/users/${userId}`)
                    .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(user => (Object.assign({ id: user.payload.id }, user.payload.data())))))));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])([], [], []);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([orders, details, users]) => {
            return orders ? orders.map(order => {
                const user = users.find(u => u.id === order.userId);
                return Object.assign({}, order, { details: details.map(d => d.filter(de => de.orderId === order.id)).filter(c => c.length > 0)[0], userName: user ? user.displayName : '' });
            }) : [];
        }));
    }
    getOrderList1() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([this.db.collection('orders').snapshotChanges(),
            this.db.collection('orderdetail').snapshotChanges(),
            this.db.collection('goods').snapshotChanges(),
            this.db.collection('users').snapshotChanges()
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(results => {
            const orderList = results[0].map((action) => {
                const data = action.payload.doc.data();
                return (Object.assign({ id: action.payload.doc.id }, data));
            });
            const detailList = results[1].map((action) => {
                const data = action.payload.doc.data();
                return (Object.assign({ id: action.payload.doc.id }, data));
            });
            const goodList = results[2].map((action) => {
                const data = action.payload.doc.data();
                return (Object.assign({ id: action.payload.doc.id }, data));
            });
            const userList = results[3].map((action) => {
                const data = action.payload.doc.data();
                return (Object.assign({ id: action.payload.doc.id }, data));
            });
            const dgList = detailList.map(d => {
                const good = goodList.find(g => g.id === d.goodId);
                return (Object.assign({}, d, good));
            });
            return orderList ? orderList.map(order => {
                const user = userList.find(u => u.id === order.userId);
                return Object.assign({}, order, { details: dgList.filter(d => d.orderId === order.id), userName: user ? user.displayName : '' });
            }) : [];
        }));
    }
    getBarList() {
        return this.db.collection('orders', model => model.orderBy('date', 'asc')).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(orders => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(orders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(g => g.date.substring(0, 10)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["toArray"])())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(arr => {
                return new _model__WEBPACK_IMPORTED_MODULE_3__["BarModel"]({
                    name: arr[0].date.substring(0, 10),
                    value: +Object(lodash__WEBPACK_IMPORTED_MODULE_8__["sumBy"])(arr, 'total').toFixed(2)
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeLast"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["toArray"])());
        }));
    }
    getBarHorizontalList() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([
            this.db.collection('orderdetail').snapshotChanges(),
            this.db.collection('goods').snapshotChanges(),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(results => {
            const detailList = results[0].map((action) => {
                const data = action.payload.doc.data();
                return (Object.assign({ id: action.payload.doc.id }, data));
            });
            const goodList = results[1].map((action) => {
                const data = action.payload.doc.data();
                return (Object.assign({ id: action.payload.doc.id }, data));
            });
            const cateList = new Array();
            detailList.map(d => {
                const cateName = goodList.find(g => g.id === d.goodId).cateName;
                cateList.push({ name: cateName, value: d.num });
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(cateList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(g => g.name), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["toArray"])())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(arr => {
                return new _model__WEBPACK_IMPORTED_MODULE_3__["BarModel"]({
                    name: arr[0].name,
                    value: Object(lodash__WEBPACK_IMPORTED_MODULE_8__["sumBy"])(arr, 'value')
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["toArray"])());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(r => r));
    }
    getSaleAndNums(count = 15) {
        return this.db.collection('orders', model => model.orderBy('date', 'asc')).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(orders => {
            const detailList = orders.map((action) => {
                const data = action.payload.doc.data();
                return (Object.assign({ id: action.payload.doc.id }, data));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(detailList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(g => g.date.substring(0, 10)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["toArray"])())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(arr => {
                return new _model__WEBPACK_IMPORTED_MODULE_3__["ChartModel"]({
                    name: arr[0].date.substring(0, 10),
                    sales: +Object(lodash__WEBPACK_IMPORTED_MODULE_8__["sumBy"])(arr, 'total').toFixed(2),
                    num: Object(lodash__WEBPACK_IMPORTED_MODULE_8__["sumBy"])(arr, 'num')
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeLast"])(count), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["toArray"])());
        }));
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_4__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NzModalService"] }
];
OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], OrderService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/ows.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/ows.service.ts ***!
  \*************************************************************/
/*! exports provided: OwsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwsService", function() { return OwsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");






let OwsService = class OwsService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'ows', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
};
OwsService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
OwsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], OwsService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/pay.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/pay.service.ts ***!
  \*************************************************************/
/*! exports provided: PayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayService", function() { return PayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");






let PayService = class PayService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'pays', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
};
PayService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
PayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], PayService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/sub-cate.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/sub-cate.service.ts ***!
  \******************************************************************/
/*! exports provided: SubCateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCateService", function() { return SubCateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");






let SubCateService = class SubCateService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'subcate', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
};
SubCateService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_3__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalService"] }
];
SubCateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], SubCateService);



/***/ }),

/***/ "./src/app/shared/services/firebase-api/users.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/services/firebase-api/users.service.ts ***!
  \***************************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _my_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-error */ "./src/app/shared/services/firebase-api/my-error.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/firebase-api/base.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");









let UsersService = class UsersService extends _base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] {
    constructor(db, myErr, modalService) {
        super(db, myErr, 'users', modalService);
        this.db = db;
        this.myErr = myErr;
        this.modalService = modalService;
    }
    getLineList() {
        return this.db.collection('users', model => model.orderBy('registerDate', 'asc')).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(users => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(users).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["groupBy"])(u => u.registerDate.substring(0, 10)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(group => group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["toArray"])())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(arr => {
                return new _model__WEBPACK_IMPORTED_MODULE_3__["BarModel"]({
                    name: arr[0].registerDate.substring(0, 10),
                    value: arr.length
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["reduce"])((previous, bar) => {
                return {
                    name: 'Users Num',
                    series: [
                        ...previous.series,
                        bar
                    ]
                };
            }, { name: 'Users Num', series: [] }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeLast"])(5), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["toArray"])());
        }));
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _my_error__WEBPACK_IMPORTED_MODULE_4__["MyError"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NzModalService"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], UsersService);



/***/ }),

/***/ "./src/app/shared/services/modal.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/modal.service.ts ***!
  \**************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");



let ModalService = class ModalService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    info(msg) {
        this.modalService.info({
            nzTitle: 'Info',
            nzContent: msg
        });
    }
    success(msg) {
        this.modalService.success({
            nzTitle: 'Info',
            nzContent: msg
        });
    }
    error(msg) {
        this.modalService.error({
            nzTitle: 'Info',
            nzContent: msg
        });
    }
    warning(msg) {
        this.modalService.warning({
            nzTitle: 'Info',
            nzContent: msg
        });
    }
    confirm(msg) {
        const modal = this.modalService.confirm({
            nzTitle: 'Confirm',
            nzContent: msg,
            nzOkText: 'OK',
            nzCancelText: 'Cancel',
            nzOnCancel: () => modal.close(false),
            nzOnOk: () => modal.close(true)
        });
        return modal;
    }
};
ModalService.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] }
];
ModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ModalService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAtypO43AZOPQhjqS-YvsALNhQ0nD6jZ-Q",
        authDomain: "sdapp-fae6d.firebaseapp.com",
        databaseURL: "https://sdapp-fae6d.firebaseio.com",
        projectId: "sdapp-fae6d",
        storageBucket: "sdapp-fae6d.appspot.com",
        messagingSenderId: "100135250981",
        appId: "1:100135250981:web:d27369545086eeedefa3cc",
        measurementId: "G-S2DGMSSM22"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Work\Ionic Mobile App\Khimesara Silk Mills\app-backend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map