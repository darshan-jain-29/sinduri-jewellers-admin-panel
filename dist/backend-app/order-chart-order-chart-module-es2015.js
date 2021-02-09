(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-chart-order-chart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-chart/order-chart.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-chart/order-chart.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div nz-row>\n  <div nz-col style=\"height: 520px\">\n    <nz-skeleton [nzActive]=\"true\" *ngIf=\"!list\" [nzParagraph]=\"{ rows: 8}\"></nz-skeleton>\n    <ngx-charts-line-chart *ngIf=\"list\"\n                           [results]=\"list\"\n                           [scheme]=\"'picnic'\"\n                           [xAxis]=\"true\"\n                           [gradient]=\"true\"\n                           [xAxisLabel]=\"'Orders Sales And Nums'\"\n                           [showXAxisLabel]=\"true\"\n                           [legend]=\"true\"\n                           [yAxis]=\"true\">\n\n    </ngx-charts-line-chart>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/order-chart/order-chart-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/order-chart/order-chart-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OrderChartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderChartRoutingModule", function() { return OrderChartRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-chart.component */ "./src/app/pages/order-chart/order-chart.component.ts");




const routes = [{ path: '', component: _order_chart_component__WEBPACK_IMPORTED_MODULE_3__["OrderChartComponent"] }];
let OrderChartRoutingModule = class OrderChartRoutingModule {
};
OrderChartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrderChartRoutingModule);



/***/ }),

/***/ "./src/app/pages/order-chart/order-chart.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/order-chart/order-chart.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLWNoYXJ0L29yZGVyLWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/order-chart/order-chart.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/order-chart/order-chart.component.ts ***!
  \************************************************************/
/*! exports provided: OrderChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderChartComponent", function() { return OrderChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");



let OrderChartComponent = class OrderChartComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.getList();
    }
    ngOnInit() {
    }
    getList() {
        this.orderService.getSaleAndNums().subscribe(r => {
            this.chartList = r;
            this.list = new Array();
            this.list.push({ name: 'Sales', series: [] });
            this.list.push({ name: 'Nums', series: [] });
            this.chartList.map(c => {
                this.list.map((l, index) => {
                    this.list[index].series.push({ name: c.name, value: index === 0 ? c.sales : c.num });
                });
            });
        });
    }
};
OrderChartComponent.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["OrderService"] }
];
OrderChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-chart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-chart/order-chart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-chart.component.scss */ "./src/app/pages/order-chart/order-chart.component.scss")).default]
    })
], OrderChartComponent);



/***/ }),

/***/ "./src/app/pages/order-chart/order-chart.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/order-chart/order-chart.module.ts ***!
  \*********************************************************/
/*! exports provided: OrderChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderChartModule", function() { return OrderChartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _order_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-chart-routing.module */ "./src/app/pages/order-chart/order-chart-routing.module.ts");
/* harmony import */ var _order_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-chart.component */ "./src/app/pages/order-chart/order-chart.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");







let OrderChartModule = class OrderChartModule {
};
OrderChartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_order_chart_component__WEBPACK_IMPORTED_MODULE_4__["OrderChartComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _order_chart_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderChartRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"]
        ]
    })
], OrderChartModule);



/***/ })

}]);
//# sourceMappingURL=order-chart-order-chart-module-es2015.js.map