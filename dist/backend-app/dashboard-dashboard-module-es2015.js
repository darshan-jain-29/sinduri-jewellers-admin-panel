(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div nz-row>\r\n    <div nz-col class=\"gutter-row\" nzSpan=\"4\">\r\n      <div class=\"gutter-box\">\r\n        <nz-card [nzLoading]=\"loading\">\r\n          <nz-statistic [nzValue]=\"totalVisits\" [nzTitle]=\"'Total Visits'\" [nzPrefix]=\"prefixTplOne1\">\r\n          </nz-statistic>\r\n          <ng-template #prefixTplOne1>\r\n            <i nz-icon nzType=\"eye\" nzTheme=\"twotone\" [nzSpin]=\"true\" nzTwotoneColor=\"#52c41a\"></i>\r\n          </ng-template>\r\n        </nz-card>\r\n      </div>\r\n    </div>\r\n    <div nz-col class=\"gutter-row\" nzSpan=\"4\">\r\n      <div class=\"gutter-box\">\r\n        <nz-card [nzLoading]=\"loading\">\r\n          <nz-statistic [nzValue]=\"totalUsers\" [nzTitle]=\"'Total Users'\" [nzPrefix]=\"prefixTplOne2\">\r\n          </nz-statistic>\r\n          <ng-template #prefixTplOne2>\r\n            <i nz-icon nzType=\"idcard\" nzTheme=\"twotone\"></i>\r\n          </ng-template>\r\n        </nz-card>\r\n      </div>\r\n    </div>\r\n    <div nz-col class=\"gutter-row\" nzSpan=\"4\">\r\n      <div class=\"gutter-box\">\r\n        <nz-card [nzLoading]=\"loading\">\r\n          <nz-statistic [nzValue]=\"totalSales\" [nzTitle]=\"'Total Sales'\" [nzPrefix]=\"prefixTplOne3\">\r\n          </nz-statistic>\r\n          <ng-template #prefixTplOne3>\r\n            <i nz-icon nzType=\"shopping\" nzTheme=\"twotone\"></i>\r\n          </ng-template>\r\n        </nz-card>\r\n      </div>\r\n    </div>\r\n    <div nz-col class=\"gutter-row\" nzSpan=\"4\">\r\n      <div class=\"gutter-box\">\r\n        <nz-card [nzLoading]=\"loading\">\r\n          <nz-statistic [nzValue]=\"totalOrders\" [nzTitle]=\"'Total Orders'\" [nzPrefix]=\"prefixTplOne4\">\r\n          </nz-statistic>\r\n          <ng-template #prefixTplOne4>\r\n            <i nz-icon nzType=\"heart\" nzTheme=\"twotone\"></i>\r\n          </ng-template>\r\n        </nz-card>\r\n      </div>\r\n    </div>\r\n    <div nz-col class=\"gutter-row\" nzSpan=\"4\">\r\n      <div class=\"gutter-box\">\r\n        <nz-card [nzLoading]=\"loading\">\r\n          <nz-statistic [nzValue]=\"totalNotices\" [nzTitle]=\"'Total Notices'\" [nzPrefix]=\"prefixTplOne5\">\r\n          </nz-statistic>\r\n          <ng-template #prefixTplOne5>\r\n            <i nz-icon nzType=\"notification\" nzTheme=\"twotone\"></i>\r\n          </ng-template>\r\n        </nz-card>\r\n      </div>\r\n    </div>\r\n    <div nz-col class=\"gutter-row\" nzSpan=\"4\">\r\n      <div class=\"gutter-box\">\r\n        <nz-card [nzLoading]=\"loading\">\r\n          <nz-statistic [nzValue]=\"totalFavorites\" [nzTitle]=\"'Total Favorites'\" [nzPrefix]=\"prefixTplOne6\">\r\n          </nz-statistic>\r\n          <ng-template #prefixTplOne6>\r\n            <i nz-icon nzType=\"smile\" nzTheme=\"twotone\"></i>\r\n          </ng-template>\r\n        </nz-card>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div nz-row class=\"gutter-row\">\r\n    <div nz-col nzSpan=\"16\">\r\n      <div class=\"gutter-box\">\r\n        <nz-card [nzLoading]=\"loadingOrder\" nzSize=\"small\">\r\n          <div style=\"height: 300px;margin-right: 5px\">\r\n            <ngx-charts-bar-vertical\r\n              [results]=\"barList\"\r\n              [scheme]=\"'neons'\"\r\n              [xAxis]=\"showXAxis\"\r\n              [gradient]=\"true\"\r\n              [xAxisLabel]=\"'Orders Sale Amount'\"\r\n              [showXAxisLabel]=\"true\"\r\n              [yAxis]=\"showYAxis\">\r\n            </ngx-charts-bar-vertical>\r\n          </div>\r\n        </nz-card>\r\n      </div>\r\n    </div>\r\n    <div nz-col nzSpan=\"8\">\r\n      <div class=\"gutter-box\">\r\n        <nz-card [nzLoading]=\"loadingCate\" nzSize=\"small\">\r\n          <div style=\"height: 300px\">\r\n            <ngx-charts-bar-horizontal\r\n              [results]=\"barHorizontalList\"\r\n              [xAxis]=\"showXAxis\"\r\n              [scheme]=\"'picnic'\"\r\n              [xAxisLabel]=\"'Sales Num'\"\r\n              [showXAxisLabel]=\"true\"\r\n              [gradient]=\"true\"\r\n              [showGridLines]=\"false\"\r\n              [yAxis]=\"showYAxis\">\r\n            </ngx-charts-bar-horizontal>\r\n          </div>\r\n        </nz-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div nz-row class=\"gutter-row\">\r\n    <div nz-col nzSpan=\"8\">\r\n      <div class=\"gutter-box\">\r\n        <nz-card [nzLoading]=\"loadingUser\" nzSize=\"small\">\r\n          <div style=\"height: 300px;margin-right: 5px;\">\r\n            <ngx-charts-area-chart\r\n              [scheme]=\"'ocean'\"\r\n              [curve]=\"curve\"\r\n              [results]=\"lineList\"\r\n              [xAxis]=\"showXAxis\"\r\n              [yAxis]=\"showYAxis\"\r\n              [showXAxisLabel]=\"true\"\r\n              [gradient]=\"true\"\r\n              [xAxisLabel]=\"'SignUp Users'\">\r\n            </ngx-charts-area-chart>\r\n          </div>\r\n        </nz-card>\r\n      </div>\r\n    </div>\r\n    <div nz-col nzSpan=\"8\">\r\n      <div class=\"gutter-box\">\r\n        <nz-card [nzLoading]=\"loadingDevice\" nzSize=\"small\">\r\n          <div style=\"height: 300px;display: grid;\">\r\n            <ngx-charts-pie-chart\r\n              [results]=\"pieList\"\r\n              [scheme]=\"'forest'\"\r\n              [gradient]=\"true\"\r\n              [labels]=\"true\">\r\n            </ngx-charts-pie-chart>\r\n          </div>\r\n        </nz-card>\r\n      </div>\r\n    </div>\r\n    <div nz-col nzSpan=\"8\">\r\n      <div class=\"gutter-box\">\r\n        <nz-card nzSize=\"small\" [nzLoading]=\"loadingCate\">\r\n          <div style=\"height: 300px;display: grid;\">\r\n            <ngx-charts-pie-grid\r\n              [results]=\"pipList\"\r\n              [scheme]=\"'vivid'\">\r\n            </ngx-charts-pie-grid>\r\n          </div>\r\n        </nz-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div nz-row>\r\n    <div nz-col nzSpan=\"24\">\r\n      <div class=\"gutter-box\">\r\n        <nz-card [nzLoading]=\"loadingVisit\" nzSize=\"small\">\r\n          <div style=\"height: 300px;margin-right: 5px;\">\r\n            <ngx-charts-line-chart\r\n              [scheme]=\"'ocean'\"\r\n              [curve]=\"curve\"\r\n              [results]=\"visitList\"\r\n              [xAxis]=\"showXAxis\"\r\n              [yAxis]=\"showYAxis\"\r\n              [showXAxisLabel]=\"true\"\r\n              [gradient]=\"true\"\r\n              [xAxisLabel]=\"'Visits'\">\r\n            </ngx-charts-line-chart>\r\n          </div>\r\n        </nz-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");




const routes = [{ path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] }];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gutter-row {\n  margin-bottom: 10px;\n}\n\n.gutter-box {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0U6XFxXb3JrXFxJb25pYyBNb2JpbGUgQXBwXFxLaGltZXNhcmEgU2lsayBNaWxsc1xcYXBwLWJhY2tlbmQvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ndXR0ZXItcm93IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZ3V0dGVyLWJveCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbiIsIi5ndXR0ZXItcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmd1dHRlci1ib3gge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_firebase_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/firebase-api */ "./src/app/shared/services/firebase-api/index.ts");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/model */ "./src/app/shared/model/index.ts");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm2015/ngx-pwa-local-storage.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








let DashboardComponent = class DashboardComponent {
    constructor(storage, orderService, userService, logService, noticeService, favoriteService, pageService, mockService) {
        this.storage = storage;
        this.orderService = orderService;
        this.userService = userService;
        this.logService = logService;
        this.noticeService = noticeService;
        this.favoriteService = favoriteService;
        this.pageService = pageService;
        this.mockService = mockService;
        this.loading = false;
        this.loadingOrder = false;
        this.loadingCate = false;
        this.loadingDevice = false;
        this.loadingUser = false;
        this.loadingVisit = false;
        this.showXAxis = true;
        this.showYAxis = true;
        this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_4__["curveBasis"];
        this.totalVisits = 0;
        this.totalUsers = 0;
        this.totalSales = 0;
        this.totalOrders = 0;
        this.totalNotices = 0;
        this.totalFavorites = 0;
    }
    ngOnInit() {
        this.bindData();
        this.bindChart();
    }
    bindChart() {
        if (_shared_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].isTest) {
            this.barList = this.mockService.barList;
            this.lineList = this.mockService.lineList;
            this.visitList = this.mockService.visitList;
            this.pieList = this.mockService.pieList;
        }
        else {
            this.loadChart();
        }
        this.loadingCate = true;
        this.orderService.getBarHorizontalList().subscribe(r => {
            this.loadingCate = false;
            this.barHorizontalList = r;
            this.pipList = this.barHorizontalList.slice(0, 4);
        });
    }
    loadChart() {
        this.loadingOrder = true;
        this.loadingUser = true;
        this.loadingDevice = true;
        this.loadingVisit = true;
        this.orderService.getBarList().subscribe(r => {
            this.loadingOrder = false;
            this.barList = r;
        });
        this.userService.getLineList().subscribe(r => {
            this.loadingUser = false;
            this.lineList = r;
        });
        this.logService.getPieList().subscribe(r => {
            this.loadingDevice = false;
            this.pieList = r;
        });
        this.logService.getVisitList().subscribe(r => {
            this.loadingVisit = false;
            const temp = new Array();
            const line = new _shared_model__WEBPACK_IMPORTED_MODULE_3__["LineModel"]({ name: 'Num', series: r });
            temp.push(line);
            this.visitList = temp;
        });
    }
    bindData() {
        if (_shared_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].isTest) {
            this.totalVisits = this.mockService.totalVisits;
            this.totalUsers = this.mockService.totalUsers;
            this.totalSales = this.mockService.totalSales;
            this.totalOrders = this.mockService.totalOrders;
            this.totalNotices = this.mockService.totalNotices;
            this.totalFavorites = this.mockService.totalFavorites;
        }
        else {
            this.loadStatistics();
        }
    }
    loadStatistics() {
        this.loading = true;
        this.storage.has(_shared_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].visitKey).subscribe(r => {
            if (r) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([
                    this.storage.get(_shared_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].visitKey, { type: 'number' }),
                    this.storage.get(_shared_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].userKey, { type: 'number' }),
                    this.storage.get(_shared_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].orderKey, { type: 'number' }),
                    this.storage.get(_shared_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].saleKey, { type: 'number' }),
                    this.storage.get(_shared_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].noticeKey, { type: 'number' }),
                    this.storage.get(_shared_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].favoriteKey, { type: 'number' })
                ]).subscribe(results => {
                    this.totalVisits = results[0];
                    this.totalUsers = results[1];
                    this.totalOrders = results[2];
                    this.totalSales = results[3];
                    this.totalNotices = results[4];
                    this.totalFavorites = results[5];
                    this.loading = false;
                });
            }
            else {
                this.pageService.getList([
                    this.logService.getList(),
                    this.userService.getList(),
                    this.orderService.getList(),
                    this.noticeService.getList(),
                    this.favoriteService.getList()
                ]).then(results => {
                    this.loading = false;
                    this.totalVisits = results[0].length;
                    this.totalUsers = results[1].length;
                    this.totalOrders = results[2].length;
                    this.totalSales = +results[2].map(o => o.total).reduce((p, c) => p + c, 0).toFixed(2);
                    this.totalNotices = results[3].length;
                    this.totalFavorites = results[4].length;
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([
                        this.storage.set(_shared_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].visitKey, this.totalVisits),
                        this.storage.set(_shared_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].userKey, this.totalUsers),
                        this.storage.set(_shared_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].orderKey, this.totalOrders),
                        this.storage.set(_shared_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].saleKey, this.totalSales),
                        this.storage.set(_shared_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].noticeKey, this.totalNotices),
                        this.storage.set(_shared_model__WEBPACK_IMPORTED_MODULE_3__["ConfigModel"].favoriteKey, this.totalFavorites)
                    ]).subscribe();
                });
            }
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_6__["StorageMap"] },
    { type: _shared_services_firebase_api__WEBPACK_IMPORTED_MODULE_2__["OrderService"] },
    { type: _shared_services_firebase_api__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _shared_services_firebase_api__WEBPACK_IMPORTED_MODULE_2__["LogService"] },
    { type: _shared_services_firebase_api__WEBPACK_IMPORTED_MODULE_2__["NoticeService"] },
    { type: _shared_services_firebase_api__WEBPACK_IMPORTED_MODULE_2__["FavoriteService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_5__["PageDataService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_5__["MockDataService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");







let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"]
        ]
    })
], DashboardModule);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map