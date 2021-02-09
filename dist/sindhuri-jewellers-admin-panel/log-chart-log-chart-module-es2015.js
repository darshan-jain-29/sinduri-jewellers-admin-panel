(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["log-chart-log-chart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/log-chart/log-chart.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/log-chart/log-chart.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div nz-row>\n  <div nz-col style=\"height: 520px\">\n    <nz-skeleton [nzActive]=\"true\" *ngIf=\"!list\" [nzParagraph]=\"{ rows: 8}\"></nz-skeleton>\n    <ngx-charts-bar-vertical *ngIf=\"list\"\n                             [results]=\"list\"\n                             [scheme]=\"'natural'\"\n                             [xAxis]=\"true\"\n                             [gradient]=\"true\"\n                             [xAxisLabel]=\"'Visits'\"\n                             [showXAxisLabel]=\"true\"\n                             [yAxis]=\"true\">\n    </ngx-charts-bar-vertical>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/log-chart/log-chart-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/log-chart/log-chart-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LogChartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogChartRoutingModule", function() { return LogChartRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _log_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-chart.component */ "./src/app/pages/log-chart/log-chart.component.ts");




const routes = [{ path: '', component: _log_chart_component__WEBPACK_IMPORTED_MODULE_3__["LogChartComponent"] }];
let LogChartRoutingModule = class LogChartRoutingModule {
};
LogChartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LogChartRoutingModule);



/***/ }),

/***/ "./src/app/pages/log-chart/log-chart.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/log-chart/log-chart.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZy1jaGFydC9sb2ctY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/log-chart/log-chart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/log-chart/log-chart.component.ts ***!
  \********************************************************/
/*! exports provided: LogChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogChartComponent", function() { return LogChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_firebase_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/firebase-api */ "./src/app/shared/services/firebase-api/index.ts");



let LogChartComponent = class LogChartComponent {
    constructor(logService) {
        this.logService = logService;
        this.getList();
    }
    ngOnInit() {
    }
    getList() {
        this.logService.getVisitList().subscribe(r => {
            this.list = r;
        });
    }
};
LogChartComponent.ctorParameters = () => [
    { type: _shared_services_firebase_api__WEBPACK_IMPORTED_MODULE_2__["LogService"] }
];
LogChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-log-chart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./log-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/log-chart/log-chart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./log-chart.component.scss */ "./src/app/pages/log-chart/log-chart.component.scss")).default]
    })
], LogChartComponent);



/***/ }),

/***/ "./src/app/pages/log-chart/log-chart.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/log-chart/log-chart.module.ts ***!
  \*****************************************************/
/*! exports provided: LogChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogChartModule", function() { return LogChartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _log_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log-chart-routing.module */ "./src/app/pages/log-chart/log-chart-routing.module.ts");
/* harmony import */ var _log_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log-chart.component */ "./src/app/pages/log-chart/log-chart.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");







let LogChartModule = class LogChartModule {
};
LogChartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_log_chart_component__WEBPACK_IMPORTED_MODULE_4__["LogChartComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _log_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__["LogChartRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"]
        ]
    })
], LogChartModule);



/***/ })

}]);
//# sourceMappingURL=log-chart-log-chart-module-es2015.js.map