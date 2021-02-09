(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header-fullscreen/header-fullscreen.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header-fullscreen/header-fullscreen.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-item\" nzTrigger=\"click\" (click)=\"toggleScreen()\">\n  <i nz-icon nzType=\"fullscreen\" nzTheme=\"outline\" *ngIf=\"!isFullscreen;else noFull\"></i>\n  <ng-template #noFull>\n    <i nz-icon nzType=\"fullscreen-exit\" nzTheme=\"outline\"></i>\n  </ng-template>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header-icon/header-icon.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header-icon/header-icon.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-item\" nz-dropdown [nzDropdownMenu]=\"iconMenu\" nzTrigger=\"click\" nzPlacement=\"bottomRight\"\n     (nzVisibleChange)=\"change()\">\n  <i nz-icon nzType=\"appstore\"></i>\n</div>\n<nz-dropdown-menu #iconMenu=\"nzDropdownMenu\">\n  <div nz-menu>\n    <nz-spin [nzSpinning]=\"loading\" [nzTip]=\"'loading...'\">\n      <div nz-row [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\" class=\"app-icons\">\n        <div nz-col [nzSpan]=\"6\">\n          <i nz-icon nzType=\"area-chart\" class=\"bg-error text-white\"></i>\n          <small>area-chart</small>\n        </div>\n        <div nz-col [nzSpan]=\"6\">\n          <i nz-icon nzType=\"pie-chart\" class=\"bg-geekblue text-white\"></i>\n          <small>pie-chart</small>\n        </div>\n        <div nz-col [nzSpan]=\"6\">\n          <i nz-icon nzType=\"bar-chart\" class=\"bg-success text-white\"></i>\n          <small>bar-chart</small>\n        </div>\n        <div nz-col [nzSpan]=\"6\">\n          <i nz-icon nzType=\"line-chart\" class=\"bg-magenta text-white\"></i>\n          <small>line-chart</small>\n        </div>\n        <div nz-col [nzSpan]=\"6\">\n          <i nz-icon nzType=\"radar-chart\" class=\"bg-purple text-white\"></i>\n          <small>radar-chart</small>\n        </div>\n        <div nz-col [nzSpan]=\"6\">\n          <i nz-icon nzType=\"rise\" class=\"bg-warning text-white\"></i>\n          <small>rise</small>\n        </div>\n        <div nz-col [nzSpan]=\"6\">\n          <i nz-icon nzType=\"fund\" class=\"bg-cyan text-white\"></i>\n          <small>fund</small>\n        </div>\n        <div nz-col [nzSpan]=\"6\">\n          <i nz-icon nzType=\"heat-map\" class=\"bg-grey text-white\"></i>\n          <small>heat-map</small>\n        </div>\n      </div>\n    </nz-spin>\n  </div>\n</nz-dropdown-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header-language/header-language.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header-language/header-language.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-item d-flex align-items-center px-sm\" nz-dropdown nzPlacement=\"bottomRight\"\n     [nzDropdownMenu]=\"languageMenu\">\n  <nz-avatar class=\"langImg\" [nzSrc]=\"'assets/img/lang/'+selectedLanguage.id+'.png'\"></nz-avatar>\n  {{selectedLanguage.title}}\n</div>\n<nz-dropdown-menu #languageMenu=\"nzDropdownMenu\">\n  <div nz-menu class=\"user-menu\">\n    <div nz-menu-item *ngFor=\"let lang of languages\" (click)=\"setLanguage(lang)\">\n      <nz-avatar class=\"langImg\" [nzSrc]=\"'assets/img/lang/'+lang.id+'.png'\"></nz-avatar>\n      {{lang.title}}\n    </div>\n  </div>\n</nz-dropdown-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header-notify/header-notify.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header-notify/header-notify.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-item\" nz-dropdown [nzDropdownMenu]=\"iconMenu\" nzTrigger=\"click\"\n     nzPlacement=\"bottomRight\" [(nzVisible)]=\"visible\">\n  <nz-badge [nzCount]=\"7\">\n    <i nz-icon nzType=\"bell\"></i>\n  </nz-badge>\n\n</div>\n<nz-dropdown-menu #iconMenu=\"nzDropdownMenu\">\n  <div nz-menu class=\"notice-box\">\n    <nz-spin [nzSpinning]=\"loading\">\n      <nz-tabset>\n        <nz-tab nzTitle=\"Notifications\">\n          <nz-list *ngIf=\"noticeList\" [nzDataSource]=\"noticeList\" [nzRenderItem]=\"item\" [nzItemLayout]=\"'horizontal'\">\n            <ng-template #item let-item>\n              <nz-list-item>\n                <nz-list-item-meta\n                  [nzTitle]=\"nzTitle\"\n                  nzAvatar=\"assets/img/notice.png\"\n                  [nzDescription]=\"item.date\">\n                  <ng-template #nzTitle>\n                    <p class=\"notice-title\">{{ item.description }}</p>\n                  </ng-template>\n                </nz-list-item-meta>\n              </nz-list-item>\n            </ng-template>\n          </nz-list>\n          <div class=\"notice-clear\">Clear</div>\n        </nz-tab>\n        <nz-tab nzTitle=\"New Orders\">\n          <div>\n            <nz-list *ngIf=\"orderList\" [nzDataSource]=\"orderList\" [nzRenderItem]=\"item\" [nzItemLayout]=\"'horizontal'\">\n              <ng-template #item let-item>\n                <nz-list-item>\n                  <nz-list-item-meta\n                    nzTitle=\"{{item?.userName}}--{{item?.orderNo}}\"\n                    nzAvatar=\"assets/img/order.png\"\n                    [nzDescription]=\"item?.status+' '+item?.date\"\n                  >\n                  </nz-list-item-meta>\n                </nz-list-item>\n              </ng-template>\n            </nz-list>\n            <div class=\"notice-clear\" (click)=\"visible = false\" routerLink=\"/pages/order\">View</div>\n          </div>\n        </nz-tab>\n      </nz-tabset>\n    </nz-spin>\n  </div>\n</nz-dropdown-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header-user/header-user.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header-user/header-user.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-item d-flex align-items-center px-sm\" nz-dropdown nzPlacement=\"bottomRight\" [nzDropdownMenu]=\"userMenu\">\n  <nz-avatar nzSrc=\"assets/img/user.png\" nzSize=\"small\"></nz-avatar>\n  {{authService.user?.displayName}}\n</div>\n<nz-dropdown-menu #userMenu=\"nzDropdownMenu\">\n  <div nz-menu class=\"user-menu\">\n    <div nz-menu-item routerLink=\"/pro/account/center\">\n      <i nz-icon nzType=\"user\"></i>\n      User\n    </div>\n    <div nz-menu-item routerLink=\"/pro/account/settings\">\n      <i nz-icon nzType=\"setting\"></i>\n      Setting\n    </div>\n    <li nz-menu-divider></li>\n    <div nz-menu-item (click)=\"logout()\">\n      <i nz-icon nzType=\"logout\" style=\"color: red;\"></i>\n      Logout\n    </div>\n  </div>\n</nz-dropdown-menu>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"nav\">\n  <li>\n    <app-header-language></app-header-language>\n  </li>\n  <li>\n    <app-header-notify></app-header-notify>\n  </li>\n  <li>\n    <app-header-icon></app-header-icon>\n  </li>\n  <li>\n    <app-header-fullscreen></app-header-fullscreen>\n  </li>\n  <li>\n    <app-header-user></app-header-user>\n  </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-result nzStatus=\"404\" nzTitle=\"404\" nzSubTitle=\"Sorry, the page you visited does not exist.\">\n  <div nz-result-extra>\n  </div>\n</nz-result>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-layout class=\"app-layout\">\n  <nz-sider class=\"menu-sidebar\"\n            nzCollapsible\n            nzWidth=\"256px\"\n            nzBreakpoint=\"md\"\n            [(nzCollapsed)]=\"isCollapsed\"\n            [nzTrigger]=\"null\">\n    <div class=\"sidebar-logo\">\n    </div>\n    <ul nz-menu nzTheme=\"dark\" nzMode=\"inline\" [nzInlineCollapsed]=\"isCollapsed\">\n      <ng-container *ngFor=\"let nav of navList\">\n        <ng-template [ngIf]=\"nav.isOpen\" [ngIfElse]=\"menuClose\">\n          <li nz-submenu nzOpen [nzIcon]=\"nav.icon\" [nzTitle]=\"nav.title | translate\">\n            <ul>\n              <li nz-menu-item nzMatchRouter *ngFor=\"let item of nav.child\">\n                <a [routerLink]=\"item.url\">{{item.title |translate}}</a>\n              </li>\n            </ul>\n          </li>\n        </ng-template>\n        <ng-template #menuClose>\n          <li nz-submenu [nzIcon]=\"nav.icon\" [nzTitle]=\"nav.title |translate\">\n            <ul>\n              <li nz-menu-item nzMatchRouter *ngFor=\"let item of nav.child\">\n                <a [routerLink]=\"item.url\">{{item.title|translate}}</a>\n              </li>\n            </ul>\n          </li>\n        </ng-template>\n      </ng-container>\n    </ul>\n  </nz-sider>\n  <nz-layout>\n    <nz-header class=\"nav_header\">\n      <div [ngClass]=\"isCollapsed?'sidebar-logo-small':'sidebar-logo'\">\n        <a href=\"https://ionic-template-web.firebaseapp.com/\" target=\"_blank\">\n          <img src=\"assets/img/logo.png\" alt=\"ionictemplate angular logo\">\n          <h1>{{ \"title\" | translate}}</h1>\n        </a>\n      </div>\n\n      <div class=\"nav-wrap\">\n        <ul class=\"nav\">\n          <li>\n            <div class=\"nav-item\">\n                <span class=\"header-trigger\" (click)=\"isCollapsed = !isCollapsed\">\n                  <i class=\"trigger\" nz-icon [nzType]=\"isCollapsed ? 'menu-unfold' : 'menu-fold'\"></i>\n                </span>\n            </div>\n          </li>\n          <li>\n            <a class=\"nav-item\" href=\"https://github.com/ionictemplate-app\" target=\"_blank\">\n              <i nz-icon nzType=\"github\" nzTheme=\"outline\"></i></a>\n          </li>\n          <li>\n            <a class=\"nav-item\" href=\"https://www.youtube.com/channel/UCVCFQPnGAwAEzKotkGEFC4Q\"\n               target=\"_blank\">\n              <i nz-icon nzType=\"youtube\" nzTheme=\"outline\"></i></a>\n          </li>\n          <li>\n            <a class=\"nav-item\" href=\"https://codecanyon.net/user/captain96778/portfolio\"\n               target=\"_blank\">\n              <i nz-icon>\n                <svg height=\"22px\" viewBox=\"0 0 512 512\" width=\"22px\">\n                  <g>\n                    <path clip-rule=\"evenodd\"\n                          d=\"M256.23,512C396.81,512,512,396.81,512,256.23   C512,115.184,396.81,0,256.23,0C115.184,0,0,115.184,0,256.23C0,396.81,115.184,512,256.23,512L256.23,512z\"\n                          fill=\"#7CB442\" fill-rule=\"evenodd\"/>\n                    <path clip-rule=\"evenodd\"\n                          d=\"M180.489,307.476c0,7.249-4.531,8.608-8.616,4.53   c-27.661-26.31-19.045-78.913-8.616-116.55c4.085-15.874-4.531-19.951-14.061-9.976c-26.755,28.567-40.808,58.501-37.637,100.216   c7.71,97.505,82.991,140.142,173.231,128.346c57.604-7.265,89.787-49.886,106.566-92.068c11.343-28.106,13.155-90.24,1.375-144.656   c-4.999-20.865-18.607-67.118-38.558-77.547c-23.576-12.248-72.556,8.617-92.053,23.576   C209.056,164.162,179.583,244.435,180.489,307.476L180.489,307.476z\"\n                          fill=\"#FFFFFF\" fill-rule=\"evenodd\"/>\n                  </g>\n                </svg>\n              </i>\n            </a>\n          </li>\n          <li>\n            <div class=\"nav-item\" routerLink=\"/lock\">\n              <i nz-icon nzType=\"lock\" nzTheme=\"outline\"></i>\n            </div>\n          </li>\n          <li>\n            <a class=\"nav-item\" href=\"mailto:info@ionictemplate.com\">\n              <i nz-icon nzType=\"mail\" nzTheme=\"outline\"></i>ionictemplate@outlook.com\n            </a>\n          </li>\n          <li>\n            <div class=\"nav-item\">\n              <i nz-icon>\n                <svg class=\"icon\" viewBox=\"0 0 1024 1024\" width=\"20\" height=\"20\">\n                  <path\n                    d=\"M36.865067 421.013333c-0.32 1.749333-0.554667 3.52-0.853334 5.269334 0.896 1.621333 1.706667 3.264 2.624 4.864l-1.770666-10.133334zM986.881067 602.688c0.341333-1.792 0.554667-3.626667 0.874666-5.418667-0.896-1.621333-1.685333-3.285333-2.624-4.906666l1.728 10.325333zM592.043733 982.976c1.642667 0.96 3.306667 1.770667 4.906667 2.688 1.834667-0.32 3.626667-0.533333 5.418667-0.874667l-10.325334-1.813333z\"\n                    fill=\"#444444\" p-id=\"3071\"></path>\n                  <path\n                    d=\"M987.755733 597.269333c-0.32 1.792-0.533333 3.626667-0.896 5.418667l-1.728-10.304c0.938667 1.6 1.728 3.264 2.624 4.885333 5.290667-28.757333 8.064-58.218667 8.064-87.637333 0-65.28-12.8-128.618667-38.037333-188.224a481.28 481.28 0 0 0-103.637333-153.706667 481.664 481.664 0 0 0-341.866667-141.589333c-30.762667 0-61.568 2.88-91.562667 8.64-0.064 0-0.149333 0-0.213333 0.042667 1.664 0.874667 3.392 1.664 5.034667 2.602666l-10.176-1.6 5.12-1.002666A286.570667 286.570667 0 0 0 286.273067 1.237333a284.309333 284.309333 0 0 0-202.410667 83.84A284.437333 284.437333 0 0 0 0.001067 287.509333c0 48.64 12.501333 96.490667 36.010666 138.773334 0.298667-1.749333 0.533333-3.52 0.853334-5.269334l1.770666 10.133334c-0.917333-1.6-1.706667-3.242667-2.624-4.864a486.997333 486.997333 0 0 0-7.274666 83.349333c0 65.28 12.778667 128.597333 38.016 188.202667a481.216 481.216 0 0 0 103.594666 153.706666 481.002667 481.002667 0 0 0 153.728 103.594667 479.402667 479.402667 0 0 0 188.202667 38.037333c28.416 0 56.896-2.56 84.693333-7.509333-1.621333-0.917333-3.285333-1.728-4.928-2.688l10.325334 1.813333c-1.792 0.341333-3.584 0.554667-5.397334 0.874667a285.973333 285.973333 0 0 0 140.8 37.12 284.16 284.16 0 0 0 202.389334-83.84A284.224 284.224 0 0 0 1024.001067 736.533333c0-48.832-12.586667-96.832-36.245334-139.264z\"\n                    fill=\"#00AEF3\" p-id=\"3072\"></path>\n                  <path\n                    d=\"M514.219733 805.76c-171.797333 0-248.64-84.458667-248.64-147.754667 0-32.469333 23.957333-55.232 57.002667-55.232 73.514667 0 54.464 105.578667 191.637333 105.578667 70.186667 0 108.992-38.144 108.992-77.162667 0-23.466667-11.584-49.472-57.813333-60.864l-152.810667-38.144c-123.050667-30.848-145.365333-97.386667-145.365333-159.914666 0-129.834667 122.24-178.56 237.034667-178.56 105.749333 0 230.4 58.410667 230.4 136.32 0 33.365333-28.885333 52.778667-61.909334 52.778666-62.741333 0-51.2-86.826667-177.557333-86.826666-62.72 0-97.472 28.373333-97.472 69.034666 0 40.533333 49.536 53.504 92.544 63.296l113.109333 25.109334c123.861333 27.584 155.264 99.925333 155.264 168.042666 0 105.514667-80.96 184.298667-244.416 184.298667z\"\n                    fill=\"#FFFFFF\" p-id=\"3073\"></path>\n                </svg>\n              </i>ionictemplate999\n            </div>\n          </li>\n          <li>\n            <div class=\"nav-item\">\n              <i nz-icon>\n                <svg t=\"1571798044760\" class=\"icon\" viewBox=\"0 0 1024 1024\" width=\"23\" height=\"23\">\n                  <path\n                    d=\"M544.059897 959.266898h-64.949141c-228.633593 0-415.697442-187.063849-415.697442-415.697442v-64.949141c0-228.633593 187.063849-415.697442 415.697442-415.697442h64.949141c228.633593 0 415.697442 187.063849 415.697442 415.697442v64.949141C959.756315 772.203049 772.692466 959.266898 544.059897 959.266898z\"\n                    fill=\"#4DC247\" p-id=\"2372\"></path>\n                  <path\n                    d=\"M576.882589 541.680388c-8.480842 0-24.804646 31.690275-34.608348 31.690274-2.554594-0.107508-5.03342-0.893852-7.181531-2.280192-18.284544-9.164798-34.288896-18.626522-49.313389-32.989585-12.424848-11.764442-26.127506-29.410082-33.286512-44.754028-0.988049-1.452893-1.563473-3.147423-1.663814-4.901339 0-7.523509 22.570528-21.544595 22.570528-33.970467 0-3.260051-16.643256-47.649575-18.968499-53.23487-3.260051-8.480842-4.878814-11.103012-13.679108-11.103012-4.263458 0-8.207465-0.979858-12.082871-0.979859-6.885629 0-12.082871 2.62217-17.007759 7.181532-15.685923 14.705041-23.527861 30.048987-24.166765 51.616107v2.598621c-0.341978 22.570528 10.761035 45.072456 23.185883 63.380549 28.042171 41.493977 57.133825 77.743613 103.825043 98.94623 14.043611 6.543651 46.395316 20.245285 62.05769 20.245285 18.626522 0 49.017486-11.740893 56.49492-30.048987 2.964148-7.523509 5.562769-16.643256 5.562769-24.804645 0-1.321836 0-3.282576-0.683955-4.90134C635.656678 569.449182 582.445358 541.680388 576.882589 541.680388zM510.583967 714.790727c-39.829139 0-79.338826-12.082871-112.671413-33.970467l-79.042923 25.124098 25.808053-76.078775c-25.459932-34.906298-39.189211-76.990033-39.213784-120.194922 0-112.967316 92.106676-205.073992 205.119043-205.073992s205.142592 92.084151 205.142592 205.051466C715.725535 622.684051 623.619883 714.790727 510.583967 714.790727zM510.583967 263.423169c-135.879821 0-246.225991 110.39122-246.225991 246.22599 0 44.776553 12.082871 88.869151 35.246228 127.079527l-44.41205 132.277793 136.199274-43.773145c119.12701 65.765178 269.012559 22.506023 334.776713-96.62201 20.106036-36.419601 30.662294-77.338154 30.685843-118.939639 0-135.834771-110.39122-246.225991-246.271041-246.225991L510.583967 263.423169z\"\n                    fill=\"#FFFFFF\" p-id=\"2373\"></path>\n                </svg>\n              </i>+852 5548 1060\n            </div>\n          </li>\n\n        </ul>\n        <app-header></app-header>\n      </div>\n    </nz-header>\n\n    <nz-content>\n      <div class=\"inner-content\">\n        <router-outlet></router-outlet>\n      </div>\n    </nz-content>\n  </nz-layout>\n</nz-layout>\n\n\n");

/***/ }),

/***/ "./node_modules/screenfull/dist/screenfull.js":
/*!****************************************************!*\
  !*** ./node_modules/screenfull/dist/screenfull.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* screenfull
* v5.0.0 - 2019-09-09
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs =  true && module.exports;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (element) {
			return new Promise(function (resolve, reject) {
				var onFullScreenEntered = function () {
					this.off('change', onFullScreenEntered);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenEntered);

				element = element || document.documentElement;

				Promise.resolve(element[fn.requestFullscreen]()).catch(reject);
			}.bind(this));
		},
		exit: function () {
			return new Promise(function (resolve, reject) {
				if (!this.isFullscreen) {
					resolve();
					return;
				}

				var onFullScreenExit = function () {
					this.off('change', onFullScreenExit);
					resolve();
				}.bind(this);

				this.on('change', onFullScreenExit);

				Promise.resolve(document[fn.exitFullscreen]()).catch(reject);
			}.bind(this));
		},
		toggle: function (element) {
			return this.isFullscreen ? this.exit() : this.request(element);
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = {isEnabled: false};
		} else {
			window.screenfull = {isEnabled: false};
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		isEnabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ "./src/app/components/header/header-fullscreen/header-fullscreen.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/header/header-fullscreen/header-fullscreen.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci1mdWxsc2NyZWVuL2hlYWRlci1mdWxsc2NyZWVuLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/header/header-fullscreen/header-fullscreen.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/header/header-fullscreen/header-fullscreen.component.ts ***!
  \************************************************************************************/
/*! exports provided: HeaderFullscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderFullscreenComponent", function() { return HeaderFullscreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



let HeaderFullscreenComponent = class HeaderFullscreenComponent {
    constructor() {
        this.isFullscreen = false;
    }
    ngOnInit() {
    }
    toggleScreen() {
        this.isFullscreen = !this.isFullscreen;
        const sf = screenfull__WEBPACK_IMPORTED_MODULE_2__;
        if (sf.isEnabled) {
            sf.toggle();
        }
    }
};
HeaderFullscreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-fullscreen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-fullscreen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header-fullscreen/header-fullscreen.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-fullscreen.component.scss */ "./src/app/components/header/header-fullscreen/header-fullscreen.component.scss")).default]
    })
], HeaderFullscreenComponent);



/***/ }),

/***/ "./src/app/components/header/header-icon/header-icon.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/header/header-icon/header-icon.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-icons {\n  padding: 16px;\n}\n.app-icons i {\n  padding: 15px;\n  font-size: 22px;\n  border-radius: 50%;\n}\n.app-icons small {\n  display: block;\n  padding-top: 4px;\n  color: #9c9c9c;\n  font-size: 14px;\n}\n.ant-col-6 {\n  padding: 16px 0;\n  text-align: center;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n.bg-error {\n  background-color: #f5222d !important;\n}\n.bg-geekblue {\n  background-color: #2f54eb !important;\n}\n.bg-success {\n  background-color: #52c41a !important;\n}\n.bg-magenta {\n  background-color: #eb2f96 !important;\n}\n.bg-purple {\n  background-color: #722ed1 !important;\n}\n.bg-warning {\n  background-color: #fadb14 !important;\n}\n.bg-cyan {\n  background-color: #13c2c2 !important;\n}\n.bg-grey {\n  background-color: #bfbfbf !important;\n}\n.text-white {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLWljb24vRTpcXFdvcmtcXElvbmljIE1vYmlsZSBBcHBcXEtoaW1lc2FyYSBTaWxrIE1pbGxzXFxhcHAtYmFja2VuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXItaWNvblxcaGVhZGVyLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci1pY29uL2hlYWRlci1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQUo7QURHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDQUY7QURHQTtFQUNFLG9DQUFBO0FDQUY7QURHQTtFQUNFLG9DQUFBO0FDQUY7QURHQTtFQUNFLG9DQUFBO0FDQUY7QURHQTtFQUNFLG9DQUFBO0FDQUY7QURHQTtFQUNFLG9DQUFBO0FDQUY7QURHQTtFQUNFLG9DQUFBO0FDQUY7QURHQTtFQUNFLG9DQUFBO0FDQUY7QURHQTtFQUNFLG9DQUFBO0FDQUY7QURHQTtFQUNFLHNCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXItaWNvbi9oZWFkZXItaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtaWNvbnMge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gIGkge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcblxyXG4gIHNtYWxsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIGNvbG9yOiAjOWM5YzljO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG4uYW50LWNvbC02e1xyXG4gIHBhZGRpbmc6IDE2cHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcclxufVxyXG5cclxuLmJnLWVycm9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUyMjJkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1nZWVrYmx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmNTRlYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzQxYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctbWFnZW50YSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViMmY5NiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctcHVycGxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzIyZWQxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFkYjE0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1jeWFuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTNjMmMyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1ncmV5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiZmJmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXdoaXRlIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5hcHAtaWNvbnMge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmFwcC1pY29ucyBpIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYXBwLWljb25zIHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGNvbG9yOiAjOWM5YzljO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hbnQtY29sLTYge1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbn1cblxuLmJnLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1MjIyZCAhaW1wb3J0YW50O1xufVxuXG4uYmctZ2Vla2JsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY1NGViICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzQxYSAhaW1wb3J0YW50O1xufVxuXG4uYmctbWFnZW50YSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjJmOTYgIWltcG9ydGFudDtcbn1cblxuLmJnLXB1cnBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MjJlZDEgIWltcG9ydGFudDtcbn1cblxuLmJnLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFkYjE0ICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1jeWFuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzYzJjMiAhaW1wb3J0YW50O1xufVxuXG4uYmctZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmJmYmYgIWltcG9ydGFudDtcbn1cblxuLnRleHQtd2hpdGUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/header/header-icon/header-icon.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/header/header-icon/header-icon.component.ts ***!
  \************************************************************************/
/*! exports provided: HeaderIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderIconComponent", function() { return HeaderIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderIconComponent = class HeaderIconComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.loading = true;
    }
    change() {
        setTimeout(() => {
            this.loading = false;
            this.cdr.detectChanges();
        }, 500);
    }
};
HeaderIconComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HeaderIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-icon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-icon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header-icon/header-icon.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-icon.component.scss */ "./src/app/components/header/header-icon/header-icon.component.scss")).default]
    })
], HeaderIconComponent);



/***/ }),

/***/ "./src/app/components/header/header-language/header-language.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/header/header-language/header-language.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".langImg {\n  width: 50px !important;\n  height: auto !important;\n  border-radius: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLWxhbmd1YWdlL0U6XFxXb3JrXFxJb25pYyBNb2JpbGUgQXBwXFxLaGltZXNhcmEgU2lsayBNaWxsc1xcYXBwLWJhY2tlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLWxhbmd1YWdlXFxoZWFkZXItbGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci1sYW5ndWFnZS9oZWFkZXItbGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci1sYW5ndWFnZS9oZWFkZXItbGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZ0ltZyB7XHJcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5sYW5nSW1nIHtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IHVuc2V0ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/header/header-language/header-language.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/header/header-language/header-language.component.ts ***!
  \********************************************************************************/
/*! exports provided: HeaderLanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLanguageComponent", function() { return HeaderLanguageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let HeaderLanguageComponent = class HeaderLanguageComponent {
    constructor(translate) {
        this.translate = translate;
        this.languages = [
            {
                id: 'ar',
                title: 'Arabic'
            },
            {
                id: 'cn',
                title: 'Chinese'
            },
            {
                id: 'en',
                title: 'English'
            },
            {
                id: 'es',
                title: 'Española'
            },
            {
                id: 'fr',
                title: 'French'
            },
            {
                id: 'de',
                title: 'German'
            },
            {
                id: 'hk',
                title: 'Hong Kong'
            },
            {
                id: 'jp',
                title: 'Japanese'
            },
            {
                id: 'kr',
                title: 'Korea'
            }
        ];
        this.translate.use('en');
    }
    ngOnInit() {
        this.selectedLanguage = this.languages.find(l => l.id === this.translate.currentLang);
    }
    setLanguage(lang) {
        this.selectedLanguage = lang;
        this.translate.use(lang.id);
    }
};
HeaderLanguageComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
HeaderLanguageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-language',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-language.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header-language/header-language.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-language.component.scss */ "./src/app/components/header/header-language/header-language.component.scss")).default]
    })
], HeaderLanguageComponent);



/***/ }),

/***/ "./src/app/components/header/header-notify/header-notify.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/header/header-notify/header-notify.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notice-box {\n  width: 500px;\n  min-height: 200px;\n}\n\n::ng-deep.ant-tabs-nav-scroll {\n  text-align: center;\n}\n\n.notice-title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 430px;\n}\n\n.ant-list-item {\n  padding: 5px 0 !important;\n}\n\n.ant-list-item-meta {\n  margin-left: 15px !important;\n  margin-right: 15px !important;\n}\n\n.notice-clear {\n  height: 46px;\n  color: rgba(0, 0, 0, 0.65);\n  line-height: 46px;\n  text-align: center;\n  border-top: 1px solid #e8e8e8;\n  border-radius: 0 0 4px 4px;\n  cursor: pointer;\n  transition: all 0.3s;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLW5vdGlmeS9FOlxcV29ya1xcSW9uaWMgTW9iaWxlIEFwcFxcS2hpbWVzYXJhIFNpbGsgTWlsbHNcXGFwcC1iYWNrZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci1ub3RpZnlcXGhlYWRlci1ub3RpZnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci1ub3RpZnkvaGVhZGVyLW5vdGlmeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXItbm90aWZ5L2hlYWRlci1ub3RpZnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWNlLWJveCB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAuYW50LXRhYnMtbmF2LXNjcm9sbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubm90aWNlLXRpdGxlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDQzMHB4O1xyXG59XHJcblxyXG4uYW50LWxpc3QtaXRlbSB7XHJcbiAgcGFkZGluZzogNXB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFudC1saXN0LWl0ZW0tbWV0YSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vdGljZS1jbGVhciB7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42NSk7XHJcbiAgbGluZS1oZWlnaHQ6IDQ2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCIubm90aWNlLWJveCB7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG5cbjo6bmctZGVlcC5hbnQtdGFicy1uYXYtc2Nyb2xsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubm90aWNlLXRpdGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiA0MzBweDtcbn1cblxuLmFudC1saXN0LWl0ZW0ge1xuICBwYWRkaW5nOiA1cHggMCAhaW1wb3J0YW50O1xufVxuXG4uYW50LWxpc3QtaXRlbS1tZXRhIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3RpY2UtY2xlYXIge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/header/header-notify/header-notify.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/header/header-notify/header-notify.component.ts ***!
  \****************************************************************************/
/*! exports provided: HeaderNotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNotifyComponent", function() { return HeaderNotifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");




let HeaderNotifyComponent = class HeaderNotifyComponent {
    constructor(msg, noticeService, orderService, pageService) {
        this.msg = msg;
        this.noticeService = noticeService;
        this.orderService = orderService;
        this.pageService = pageService;
        this.visible = false;
        this.loading = true;
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        this.pageService.getList([this.noticeService.getList(), this.orderService.getList()]).then(results => {
            this.noticeList = results[0];
            this.orderList = results[1];
            this.noticeList = this.noticeList.slice(0, 5);
            this.orderList = this.orderList.slice(0, 5);
            this.loading = false;
        });
    }
};
HeaderNotifyComponent.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_3__["NoticeService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_3__["OrderService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_3__["PageDataService"] }
];
HeaderNotifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-notify',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-notify.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header-notify/header-notify.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-notify.component.scss */ "./src/app/components/header/header-notify/header-notify.component.scss")).default]
    })
], HeaderNotifyComponent);



/***/ }),

/***/ "./src/app/components/header/header-user/header-user.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/header/header-user/header-user.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-menu {\n  width: 150px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.align-items-center {\n  align-items: center !important;\n}\n\n.d-flex {\n  display: flex !important;\n}\n\n.px-sm {\n  padding-right: 8px !important;\n  padding-left: 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLXVzZXIvRTpcXFdvcmtcXElvbmljIE1vYmlsZSBBcHBcXEtoaW1lc2FyYSBTaWxrIE1pbGxzXFxhcHAtYmFja2VuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXItdXNlclxcaGVhZGVyLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci11c2VyL2hlYWRlci11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLDhCQUFBO0FDQUY7O0FER0E7RUFDRSx3QkFBQTtBQ0FGOztBREdBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLXVzZXIvaGVhZGVyLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnVzZXItbWVudSB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZC1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5weC1zbSB7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHggIWltcG9ydGFudDtcclxufVxyXG4iLCIudXNlci1tZW51IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xufVxuXG4ucHgtc20ge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiA4cHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/header/header-user/header-user.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/header/header-user/header-user.component.ts ***!
  \************************************************************************/
/*! exports provided: HeaderUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderUserComponent", function() { return HeaderUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");




let HeaderUserComponent = class HeaderUserComponent {
    constructor(router, modalService, authService) {
        this.router = router;
        this.modalService = modalService;
        this.authService = authService;
    }
    logout() {
        this.modalService.confirm('Are you sure you want to exit?').afterClose.subscribe(r => {
            if (r) {
                this.authService.signOut().then(() => {
                    this.authService.user = new _shared__WEBPACK_IMPORTED_MODULE_3__["UserModel"]();
                    this.authService.isAuthenticated = false;
                    this.router.navigateByUrl(this.authService.loginUrl);
                });
            }
        });
    }
};
HeaderUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_3__["ModalService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
HeaderUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header-user/header-user.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-user.component.scss */ "./src/app/components/header/header-user/header-user.component.scss")).default]
    })
], HeaderUserComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/header/header.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/header/header.module.ts ***!
  \****************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _header_fullscreen_header_fullscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-fullscreen/header-fullscreen.component */ "./src/app/components/header/header-fullscreen/header-fullscreen.component.ts");
/* harmony import */ var _header_icon_header_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header-icon/header-icon.component */ "./src/app/components/header/header-icon/header-icon.component.ts");
/* harmony import */ var _header_notify_header_notify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-notify/header-notify.component */ "./src/app/components/header/header-notify/header-notify.component.ts");
/* harmony import */ var _header_user_header_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header-user/header-user.component */ "./src/app/components/header/header-user/header-user.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _header_language_header_language_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header-language/header-language.component */ "./src/app/components/header/header-language/header-language.component.ts");











let HeaderModule = class HeaderModule {
};
HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _header_fullscreen_header_fullscreen_component__WEBPACK_IMPORTED_MODULE_4__["HeaderFullscreenComponent"],
            _header_icon_header_icon_component__WEBPACK_IMPORTED_MODULE_5__["HeaderIconComponent"],
            _header_notify_header_notify_component__WEBPACK_IMPORTED_MODULE_6__["HeaderNotifyComponent"],
            _header_user_header_user_component__WEBPACK_IMPORTED_MODULE_7__["HeaderUserComponent"],
            _header_language_header_language_component__WEBPACK_IMPORTED_MODULE_10__["HeaderLanguageComponent"]
        ],
        exports: [
            _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]
        ]
    })
], HeaderModule);



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/not-found/not-found.component.scss")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");






const routes = [
    {
        path: '', component: _pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomeModule), canActivate: [_shared__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
            { path: 'banner', loadChildren: () => Promise.all(/*! import() | banner-banner-module */[__webpack_require__.e("common"), __webpack_require__.e("banner-banner-module")]).then(__webpack_require__.bind(null, /*! ./banner/banner.module */ "./src/app/pages/banner/banner.module.ts")).then(m => m.BannerModule) },
            { path: 'notice', loadChildren: () => __webpack_require__.e(/*! import() | notice-notice-module */ "notice-notice-module").then(__webpack_require__.bind(null, /*! ./notice/notice.module */ "./src/app/pages/notice/notice.module.ts")).then(m => m.NoticeModule) },
            { path: 'cate', loadChildren: () => __webpack_require__.e(/*! import() | cate-cate-module */ "cate-cate-module").then(__webpack_require__.bind(null, /*! ./cate/cate.module */ "./src/app/pages/cate/cate.module.ts")).then(m => m.CateModule) },
            { path: 'sub-cate', loadChildren: () => Promise.all(/*! import() | sub-cate-sub-cate-module */[__webpack_require__.e("common"), __webpack_require__.e("sub-cate-sub-cate-module")]).then(__webpack_require__.bind(null, /*! ./sub-cate/sub-cate.module */ "./src/app/pages/sub-cate/sub-cate.module.ts")).then(m => m.SubCateModule) },
            { path: 'cate-relation', loadChildren: () => __webpack_require__.e(/*! import() | cate-relation-cate-relation-module */ "cate-relation-cate-relation-module").then(__webpack_require__.bind(null, /*! ./cate-relation/cate-relation.module */ "./src/app/pages/cate-relation/cate-relation.module.ts")).then(m => m.CateRelationModule) },
            { path: 'coupon', loadChildren: () => __webpack_require__.e(/*! import() | coupon-coupon-module */ "coupon-coupon-module").then(__webpack_require__.bind(null, /*! ./coupon/coupon.module */ "./src/app/pages/coupon/coupon.module.ts")).then(m => m.CouponModule) },
            { path: 'pays', loadChildren: () => Promise.all(/*! import() | pays-pays-module */[__webpack_require__.e("common"), __webpack_require__.e("pays-pays-module")]).then(__webpack_require__.bind(null, /*! ./pays/pays.module */ "./src/app/pages/pays/pays.module.ts")).then(m => m.PaysModule) },
            { path: 'good', loadChildren: () => Promise.all(/*! import() | good-good-module */[__webpack_require__.e("common"), __webpack_require__.e("good-good-module")]).then(__webpack_require__.bind(null, /*! ./good/good.module */ "./src/app/pages/good/good.module.ts")).then(m => m.GoodModule) },
            { path: 'ows', loadChildren: () => Promise.all(/*! import() | ows-ows-module */[__webpack_require__.e("common"), __webpack_require__.e("ows-ows-module")]).then(__webpack_require__.bind(null, /*! ./ows/ows.module */ "./src/app/pages/ows/ows.module.ts")).then(m => m.OwsModule) },
            { path: 'delivery', loadChildren: () => Promise.all(/*! import() | delivery-delivery-module */[__webpack_require__.e("common"), __webpack_require__.e("delivery-delivery-module")]).then(__webpack_require__.bind(null, /*! ./delivery/delivery.module */ "./src/app/pages/delivery/delivery.module.ts")).then(m => m.DeliveryModule) },
            { path: 'order', loadChildren: () => __webpack_require__.e(/*! import() | order-order-module */ "order-order-module").then(__webpack_require__.bind(null, /*! ./order/order.module */ "./src/app/pages/order/order.module.ts")).then(m => m.OrderModule) },
            { path: 'address', loadChildren: () => __webpack_require__.e(/*! import() | address-address-module */ "address-address-module").then(__webpack_require__.bind(null, /*! ./address/address.module */ "./src/app/pages/address/address.module.ts")).then(m => m.AddressModule) },
            { path: 'users', loadChildren: () => __webpack_require__.e(/*! import() | users-users-module */ "users-users-module").then(__webpack_require__.bind(null, /*! ./users/users.module */ "./src/app/pages/users/users.module.ts")).then(m => m.UsersModule) },
            { path: 'favorite', loadChildren: () => __webpack_require__.e(/*! import() | favorite-favorite-module */ "favorite-favorite-module").then(__webpack_require__.bind(null, /*! ./favorite/favorite.module */ "./src/app/pages/favorite/favorite.module.ts")).then(m => m.FavoriteModule) },
            { path: 'login-log', loadChildren: () => __webpack_require__.e(/*! import() | login-log-login-log-module */ "login-log-login-log-module").then(__webpack_require__.bind(null, /*! ./login-log/login-log.module */ "./src/app/pages/login-log/login-log.module.ts")).then(m => m.LoginLogModule) },
            { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardModule) },
            { path: 'data-initialize', loadChildren: () => Promise.all(/*! import() | data-initialize-data-initialize-module */[__webpack_require__.e("common"), __webpack_require__.e("data-initialize-data-initialize-module")]).then(__webpack_require__.bind(null, /*! ./data-initialize/data-initialize.module */ "./src/app/pages/data-initialize/data-initialize.module.ts")).then(m => m.DataInitializeModule) },
            { path: 'log-chart', loadChildren: () => __webpack_require__.e(/*! import() | log-chart-log-chart-module */ "log-chart-log-chart-module").then(__webpack_require__.bind(null, /*! ./log-chart/log-chart.module */ "./src/app/pages/log-chart/log-chart.module.ts")).then(m => m.LogChartModule) },
            { path: 'order-chart', loadChildren: () => __webpack_require__.e(/*! import() | order-chart-order-chart-module */ "order-chart-order-chart-module").then(__webpack_require__.bind(null, /*! ./order-chart/order-chart.module */ "./src/app/pages/order-chart/order-chart.module.ts")).then(m => m.OrderChartModule) },
            { path: 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] },
            { path: '**', redirectTo: 'not-found' }
        ],
    }
];
let PagesRoutingModule = class PagesRoutingModule {
};
PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PagesRoutingModule);



/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.app-layout {\n  height: 100%;\n}\n\n.menu-sidebar {\n  position: relative;\n  z-index: 10;\n  min-height: 100vh;\n  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);\n}\n\n.header-trigger {\n  height: 64px;\n  padding: 20px 24px;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s, padding 0s;\n}\n\n.header-ident {\n  height: 64px;\n  padding: 20px 10px;\n  margin-left: 37px;\n  font-size: 22px;\n  cursor: pointer;\n  transition: all 0.3s, padding 0s;\n}\n\n.trigger:hover {\n  color: white;\n}\n\n.sidebar-logo {\n  width: 240px;\n  position: relative;\n  height: 64px;\n  padding-left: 24px;\n  overflow: hidden;\n  line-height: 64px;\n  background: #1890ff;\n  transition: all 0.3s;\n}\n\n.sidebar-logo-small {\n  width: 64px;\n  position: relative;\n  height: 64px;\n  overflow: hidden;\n  line-height: 64px;\n  padding-left: 12px;\n  background: #1890ff;\n  transition: all 0.3s;\n}\n\n.sidebar-logo-small img {\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  vertical-align: middle;\n}\n\n.sidebar-logo img {\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  vertical-align: middle;\n}\n\n.sidebar-logo h1 {\n  display: inline-block;\n  margin: 0 0 0 20px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\n\n.app-header {\n  position: relative;\n  height: 64px;\n  padding: 0;\n  background: #1890ff;\n  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n  color: white;\n}\n\nnz-content {\n  margin: 88px 24px 24px;\n}\n\n.inner-content {\n  padding: 8px 24px;\n  background: #fff;\n}\n\n.nav_header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 64px;\n  padding: 0 16px;\n  background-color: #1890ff;\n  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);\n}\n\n.nav-wrap {\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvRTpcXFdvcmtcXElvbmljIE1vYmlsZSBBcHBcXEtoaW1lc2FyYSBTaWxrIE1pbGxzXFxhcHAtYmFja2VuZC9zcmNcXGFwcFxccGFnZXNcXHBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUNDRjs7QURFQTtFQUVFLFlBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FERUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURJQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ0RGOztBRElBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpRUFBQTtFQUNBLHNCQUFBO0FDREY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLHNCQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSx5Q0FBQTtBQ0ZGOztBREtBO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSw4QkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbi5hcHAtbGF5b3V0IHtcclxuICAvL2hlaWdodDogMTAwdmg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWVudS1zaWRlYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDAgNnB4IHJnYmEoMCwgMjEsIDQxLCAuMzUpO1xyXG59XHJcblxyXG4uaGVhZGVyLXRyaWdnZXIge1xyXG4gIGhlaWdodDogNjRweDtcclxuICBwYWRkaW5nOiAyMHB4IDI0cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzLCBwYWRkaW5nIDBzO1xyXG59XHJcblxyXG4uaGVhZGVyLWlkZW50IHtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzN3B4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcywgcGFkZGluZyAwcztcclxufVxyXG5cclxuLnRyaWdnZXI6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNpZGViYXItbG9nbyB7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XHJcbiAgYmFja2dyb3VuZDogIzE4OTBmZjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG59XHJcblxyXG4uc2lkZWJhci1sb2dvLXNtYWxsIHtcclxuICB3aWR0aDogNjRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICMxODkwZmY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHJcbiAgaW1nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyLWxvZ28gaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWxvZ28gaDEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDAgMCAwIDIwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhIE5ldWUsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuXHJcbi5hcHAtaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZDogIzE4OTBmZjtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAyMSwgNDEsIC4wOCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5uei1jb250ZW50IHtcclxuICBtYXJnaW46IDg4cHggMjRweCAyNHB4O1xyXG59XHJcblxyXG4uaW5uZXItY29udGVudCB7XHJcbiAgcGFkZGluZzogOHB4IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLm5hdl9oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODkwZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIC4yKTtcclxufVxyXG5cclxuLm5hdi13cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uYXBwLWxheW91dCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1lbnUtc2lkZWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBib3gtc2hhZG93OiAycHggMCA2cHggcmdiYSgwLCAyMSwgNDEsIDAuMzUpO1xufVxuXG4uaGVhZGVyLXRyaWdnZXIge1xuICBoZWlnaHQ6IDY0cHg7XG4gIHBhZGRpbmc6IDIwcHggMjRweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzLCBwYWRkaW5nIDBzO1xufVxuXG4uaGVhZGVyLWlkZW50IHtcbiAgaGVpZ2h0OiA2NHB4O1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzN3B4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MsIHBhZGRpbmcgMHM7XG59XG5cbi50cmlnZ2VyOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2lkZWJhci1sb2dvIHtcbiAgd2lkdGg6IDI0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgYmFja2dyb3VuZDogIzE4OTBmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5zaWRlYmFyLWxvZ28tc21hbGwge1xuICB3aWR0aDogNjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDY0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIGJhY2tncm91bmQ6ICMxODkwZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLnNpZGViYXItbG9nby1zbWFsbCBpbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zaWRlYmFyLWxvZ28gaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uc2lkZWJhci1sb2dvIGgxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSBOZXVlLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uYXBwLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2NHB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiAjMTg5MGZmO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAyMSwgNDEsIDAuMDgpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbm56LWNvbnRlbnQge1xuICBtYXJnaW46IDg4cHggMjRweCAyNHB4O1xufVxuXG4uaW5uZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDhweCAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ubmF2X2hlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NHB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODkwZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubmF2LXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_firebase_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/firebase-api */ "./src/app/shared/services/firebase-api/index.ts");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let PagesComponent = class PagesComponent {
    constructor(router, datePipe, logService, authService) {
        this.router = router;
        this.datePipe = datePipe;
        this.logService = logService;
        this.authService = authService;
        this.isCollapsed = false;
        this.navList = [
            {
                title: 'nav.home', icon: 'home', isOpen: true, child: [
                    { title: 'nav.initialize', url: '/pages/data-initialize' },
                    { title: 'nav.dashboard', url: '/pages/dashboard' },
                    { title: 'nav.banner', url: '/pages/banner' },
                    { title: 'nav.notice', url: '/pages/notice' },
                    { title: 'nav.coupon', url: '/pages/coupon' },
                    { title: 'nav.pay', url: '/pages/pays' }
                ]
            },
            {
                title: 'nav.product', icon: 'profile', isOpen: false, child: [
                    { title: 'nav.cate', url: '/pages/cate' },
                    { title: 'nav.subCate', url: '/pages/sub-cate' },
                    { title: 'nav.relation', url: '/pages/cate-relation' },
                    { title: 'nav.good', url: '/pages/good' }
                ]
            },
            {
                title: 'nav.order', icon: 'table', isOpen: false, child: [
                    { title: 'nav.order', url: '/pages/order' },
                    { title: 'nav.ows', url: '/pages/ows' },
                    { title: 'nav.express', url: '/pages/delivery' }
                ]
            },
            {
                title: 'nav.users', icon: 'user', isOpen: false, child: [
                    { title: 'nav.users', url: '/pages/users' },
                    { title: 'nav.address', url: '/pages/address' },
                    { title: 'nav.favorite', url: '/pages/favorite' },
                    { title: 'nav.log', url: '/pages/login-log' }
                ]
            },
            {
                title: 'nav.statistics', icon: 'user', isOpen: false, child: [
                    { title: 'nav.log-chart', url: '/pages/log-chart' },
                    { title: 'nav.order-chart', url: '/pages/order-chart' },
                ]
            }
        ];
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            }
        });
    }
    ngOnInit() {
    }
    addLog() {
        const log = new _shared_model__WEBPACK_IMPORTED_MODULE_4__["LogModel"]();
        log.userId = this.authService.user.uid;
        log.device = this.authService.device;
        log.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        this.logService.addLog(log);
    }
};
PagesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _shared_services_firebase_api__WEBPACK_IMPORTED_MODULE_3__["LogService"] },
    { type: _shared_services_firebase_api__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")).default]
    })
], PagesComponent);



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header/header.module */ "./src/app/components/header/header.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let PagesModule = class PagesModule {
};
PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
        ]
    })
], PagesModule);



/***/ })

}]);
//# sourceMappingURL=pages-pages-module-es2015.js.map