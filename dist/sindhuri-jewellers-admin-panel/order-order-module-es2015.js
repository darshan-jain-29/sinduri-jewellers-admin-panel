(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order-edit/order-edit.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order-edit/order-edit.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-spin [nzSpinning]=\"isLoading\">\n  <nz-descriptions nzBordered nzSize=\"small\" [nzColumn]=\"{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }\">\n    <nz-descriptions-item nzTitle=\"OrderNo\">{{order?.orderNo}}</nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"OrderDate\">{{order?.orderDate}}</nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"Num\">{{order?.num}}</nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"Amount\">{{order?.amount}}($)</nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"OWS\">{{order?.overWeightSurcharge}}($)</nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"Freight\">{{order?.freight}}($)</nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"Discount\">{{order?.discount}}($)</nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"PayDiscount\">{{order?.payDiscount}}($)</nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"Pay\">{{order?.pay}}</nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"PayDate\">{{order?.payDate}}</nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"Express\">{{order?.delivery}}</nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"UserName\">{{order?.userName}}</nz-descriptions-item>\n    <nz-descriptions-item nzTitle=\"address\">{{order?.address}}\n    </nz-descriptions-item>\n  </nz-descriptions>\n\n  <form nz-form [formGroup]=\"orderForm\">\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"4\" [nzXs]=\"3\" nzFor=\"deliveryDate\">ExpressDate</nz-form-label>\n      <nz-form-control [nzSm]=\"8\" [nzXs]=\"24\">\n        <nz-date-picker nzShowTime\n                        nzFormat=\"yyyy-MM-dd HH:mm:ss\"\n                        nzPlaceHolder=\"Select Time\" formControlName=\"deliveryDate\"></nz-date-picker>\n      </nz-form-control>\n      <nz-form-label [nzSm]=\"4\" [nzXs]=\"24\" nzFor=\"deliveryPhone\">ExpressPhone</nz-form-label>\n      <nz-form-control [nzSm]=\"8\" [nzXs]=\"24\">\n        <input nz-input formControlName=\"deliveryPhone\"/>\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"4\" [nzXs]=\"24\" nzFor=\"finishDate\">FinishDate</nz-form-label>\n      <nz-form-control [nzSm]=\"8\" [nzXs]=\"24\">\n        <nz-date-picker nzShowTime\n                        nzFormat=\"yyyy-MM-dd HH:mm:ss\"\n                        nzPlaceHolder=\"Select Time\" formControlName=\"finishDate\"></nz-date-picker>\n      </nz-form-control>\n      <nz-form-label [nzSm]=\"4\" [nzXs]=\"12\" nzRequired nzFor=\"status\">Status</nz-form-label>\n      <nz-select style=\"width: 150px;\" [(ngModel)]=\"selectStatus\" [ngModelOptions]=\"{standalone: true}\"\n                 nzPlaceHolder=\"Choose\">\n        <nz-option *ngFor=\"let state of statusList\" [nzLabel]=\"state\" [nzValue]=\"state\"></nz-option>\n      </nz-select>\n    </nz-form-item>\n  </form>\n\n  <nz-table #smallTable nzSize=\"small\" [nzData]=\"order?.details\" [nzShowPagination]=\"false\">\n    <thead>\n    <tr>\n      <th>Name</th>\n      <th>Img</th>\n      <th>Price($)</th>\n      <th>Num</th>\n      <th>Amount($)</th>\n      <th>Weight(kg)</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let data of smallTable.data\">\n      <td>{{ data.name }}</td>\n      <td><img [src]=\"data.img\"></td>\n      <td>{{ data.detailPrice }}</td>\n      <td>{{ data.num }}</td>\n      <td>{{ data.amount }}</td>\n      <td>{{ data.weight }}</td>\n    </tr>\n    </tbody>\n  </nz-table>\n\n  <div *nzModalFooter>\n    <button nz-button nzType=\"default\" (click)=\"cancel()\">Cancel</button>\n    <button nz-button nzType=\"primary\" [disabled]=\"!orderForm.valid\" (click)=\"onOk()\">Ok\n    </button>\n  </div>\n</nz-spin>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order-view/order-view.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order-view/order-view.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-descriptions nzBordered nzSize=\"small\" [nzColumn]=\"{ xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }\">\n  <nz-descriptions-item nzTitle=\"OrderNo\">{{data?.orderNo}}</nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"OrderDate\">{{data?.orderDate}}</nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"Num\">{{data?.num}}</nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"Amount\">{{data?.amount}}($)</nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"OWS\">{{data?.overWeightSurcharge}}($)</nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"Freight\">{{data?.freight}}($)</nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"Discount\">{{data?.discount}}($)</nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"PayDiscount\">{{data?.payDiscount}}($)</nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"Pay\">{{data?.pay}}</nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"PayDate\">{{data?.payDate}}</nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"Express\">{{data?.delivery}}</nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"ExpressPhone\">{{data?.deliveryPhone}}</nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"ExpressDate\">{{data?.deliveryDate}}</nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"UserName\">{{data?.userName}}</nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"Status\">\n    <nz-badge nzStatus=\"processing\" [nzText]=\"data?.status\"></nz-badge>\n  </nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"FinishDate\">{{data?.finishDate}}</nz-descriptions-item>\n  <nz-descriptions-item nzTitle=\"address\">{{data?.address}}\n  </nz-descriptions-item>\n</nz-descriptions>\n\n<nz-table #smallTable nzSize=\"small\" [nzData]=\"data?.details\" [nzShowPagination]=\"false\">\n  <thead>\n  <tr>\n    <th>Name</th>\n    <th>Img</th>\n    <th>Price($)</th>\n    <th>Num</th>\n    <th>Amount($)</th>\n    <th>Weight(kg)</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let data of smallTable.data\">\n    <td>{{ data.name }}</td>\n    <td><img [src]=\"data.img\"></td>\n    <td>{{ data.detailPrice }}</td>\n    <td>{{ data.num }}</td>\n    <td>{{ data.amount }}</td>\n    <td>{{ data.weight }}</td>\n  </tr>\n  </tbody>\n</nz-table>\n\n<div *nzModalFooter>\n  <button nz-button nzType=\"primary\" (click)=\"onClose()\">Close</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-box\">\n  <input type=\"text\" nz-input placeholder=\"Search OrderNo\" [(ngModel)]=\"searchValue\"/>\n  <button nz-button nzType=\"primary\" (click)=\"search()\">\n    Search\n  </button>\n  <button nz-button (click)=\"reset()\">Reset</button>\n</div>\n\n<nz-skeleton [nzActive]=\"true\" *ngIf=\"!list\" [nzParagraph]=\"{ rows: 10 }\"></nz-skeleton>\n<nz-table #nestedTable *ngIf=\"list\" [nzData]=\"list\" [nzPageSize]=\"9\" nzSize=\"small\">\n  <thead>\n  <tr>\n    <th nzShowExpand></th>\n    <th>OrderNo</th>\n    <th>OrderDate</th>\n    <th>UserName</th>\n    <th>Num</th>\n    <th>Amount($)</th>\n    <th>Pay</th>\n    <th>PayDate</th>\n    <th>Express</th>\n    <th>Status</th>\n    <th>Action</th>\n  </tr>\n  </thead>\n  <tbody>\n  <ng-template ngFor let-data [ngForOf]=\"nestedTable.data\">\n    <tr>\n      <td nzShowExpand [(nzExpand)]=\"data.expand\"></td>\n      <td>{{ data.orderNo }}</td>\n      <td>{{ data.orderDate }}</td>\n      <td>{{ data.userName }}</td>\n      <td>{{ data.num }}</td>\n      <td>{{ data.amount.toFixed(2) }}</td>\n      <td>{{ data.pay }}</td>\n      <td>{{ data.payDate }}</td>\n      <td>{{ data.delivery }}</td>\n      <td>\n        <nz-badge [nzStatus]=\"'success'\" [nzText]=\"data.status\"></nz-badge>\n      </td>\n      <td>\n        <button nz-button nzType=\"primary\" (click)=\"onView(data)\">\n          <i nz-icon nzType=\"eye\" nzTheme=\"outline\" [nzSpin]=\"true\"></i>\n        </button>\n        <button nz-button nzType=\"primary\" (click)=\"onEdit(data)\">\n          <i nz-icon nzType=\"edit\" nzTheme=\"outline\"></i>\n        </button>\n\n      </td>\n    </tr>\n    <tr [nzExpand]=\"data.expand\">\n      <td></td>\n      <td colspan=\"10\">\n        <nz-table #innerTable [nzData]=\"data.details\" nzSize=\"small\" [nzShowPagination]=\"false\">\n  <thead>\n  <tr>\n    <th>Name</th>\n    <th>Img</th>\n    <th>Price($)</th>\n    <th>Num</th>\n    <th>Amount($)</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let data of innerTable.data\">\n    <td>{{ data.name }}</td>\n    <td><img [src]=\"data.img\"></td>\n    <td>{{ data.detailPrice }}</td>\n    <td>{{ data.num }}</td>\n    <td>{{ data.amount }}</td>\n  </tr>\n  </tbody>\n</nz-table>\n</td>\n</tr>\n</ng-template>\n</tbody>\n</nz-table>\n");

/***/ }),

/***/ "./src/app/pages/order/order-edit/order-edit.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/order/order-edit/order-edit.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ant-form-item {\n  margin-bottom: 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXItZWRpdC9FOlxcV29ya1xcSW9uaWMgTW9iaWxlIEFwcFxcS2hpbWVzYXJhIFNpbGsgTWlsbHNcXGFwcC1iYWNrZW5kL3NyY1xcYXBwXFxwYWdlc1xcb3JkZXJcXG9yZGVyLWVkaXRcXG9yZGVyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVyLWVkaXQvb3JkZXItZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci9vcmRlci1lZGl0L29yZGVyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW50LWZvcm0taXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmFudC1mb3JtLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/order/order-edit/order-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/order/order-edit/order-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEditComponent", function() { return OrderEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let OrderEditComponent = class OrderEditComponent {
    constructor(modal, fb, datePipe, orderDetailService, orderService) {
        this.modal = modal;
        this.fb = fb;
        this.datePipe = datePipe;
        this.orderDetailService = orderDetailService;
        this.orderService = orderService;
        this.statusList = ['start', 'process', 'delivery', 'finish', 'cancel'];
        this.isLoading = false;
        this.orderForm = this.fb.group({
            deliveryDate: [new Date()],
            deliveryPhone: [''],
            finishDate: [new Date()],
        });
    }
    ngOnInit() {
        if (this.order) {
            this.orderForm.get('deliveryDate').setValue(this.order.deliveryDate);
            this.orderForm.get('finishDate').setValue(this.order.finishDate);
            this.orderForm.get('deliveryPhone').setValue(this.order.deliveryPhone);
            this.selectStatus = this.order.status;
        }
    }
    cancel() {
        this.modal.close();
    }
    onOk() {
        this.isLoading = true;
        const model = this.order;
        model.deliveryDate = this.datePipe.transform(this.orderForm.controls.deliveryDate.value, 'yyyy-MM-dd HH:mm:ss');
        model.finishDate = this.datePipe.transform(this.orderForm.controls.finishDate.value, 'yyyy-MM-dd HH:mm:ss');
        model.deliveryPhone = this.orderForm.controls.deliveryPhone.value;
        model.status = this.selectStatus;
        this.orderService.update(model).then(() => {
            this.isLoading = false;
            this.modal.close(true);
        });
    }
};
OrderEditComponent.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["OrderDetailService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["OrderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderEditComponent.prototype, "order", void 0);
OrderEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order-edit/order-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-edit.component.scss */ "./src/app/pages/order/order-edit/order-edit.component.scss")).default]
    })
], OrderEditComponent);



/***/ }),

/***/ "./src/app/pages/order/order-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/order/order-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.component */ "./src/app/pages/order/order.component.ts");




const routes = [{ path: '', component: _order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"] }];
let OrderRoutingModule = class OrderRoutingModule {
};
OrderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrderRoutingModule);



/***/ }),

/***/ "./src/app/pages/order/order-view/order-view.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/order/order-view/order-view.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVyLXZpZXcvb3JkZXItdmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/order/order-view/order-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/order/order-view/order-view.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderViewComponent", function() { return OrderViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");



let OrderViewComponent = class OrderViewComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
    onClose() {
        this.modal.close(true);
    }
};
OrderViewComponent.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderViewComponent.prototype, "data", void 0);
OrderViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order-view/order-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-view.component.scss */ "./src/app/pages/order/order-view/order-view.component.scss")).default]
    })
], OrderViewComponent);



/***/ }),

/***/ "./src/app/pages/order/order.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/order/order.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 51px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXIvRTpcXFdvcmtcXElvbmljIE1vYmlsZSBBcHBcXEtoaW1lc2FyYSBTaWxrIE1pbGxzXFxhcHAtYmFja2VuZC9zcmNcXGFwcFxccGFnZXNcXG9yZGVyXFxvcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgd2lkdGg6IDUxcHg7XHJcbn1cclxuIiwiaW1nIHtcbiAgd2lkdGg6IDUxcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/order/order.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/order/order.component.ts ***!
  \************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _order_view_order_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-view/order-view.component */ "./src/app/pages/order/order-view/order-view.component.ts");
/* harmony import */ var _order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-edit/order-edit.component */ "./src/app/pages/order/order-edit/order-edit.component.ts");






let OrderComponent = class OrderComponent {
    constructor(orderService, detailService, modalService, mService) {
        this.orderService = orderService;
        this.detailService = detailService;
        this.modalService = modalService;
        this.mService = mService;
        this.sortName = '';
        this.sortValue = '';
        this.searchValue = '';
        this.allList = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.bindData();
    }
    bindData() {
        this.orderService.getOrderList1().subscribe(result => {
            this.allList = result;
            this.allList = this.allList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            this.list = this.allList;
        });
    }
    reset() {
        this.searchValue = '';
        this.search();
    }
    sort(sort) {
        this.sortName = sort.key;
        this.sortValue = sort.value;
        this.search();
    }
    search() {
        this.list = this.allList.filter(d => d.orderNo.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1);
    }
    onEdit(data) {
        this.createComponentModal(data);
    }
    createComponentModal(data) {
        const modal = this.mService.create({
            nzTitle: 'Edit Order',
            nzContent: _order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_5__["OrderEditComponent"],
            nzComponentParams: {
                order: data
            },
            nzWidth: '750px'
        });
        modal.afterClose.subscribe(result => {
            if (result) {
                this.bindData();
            }
        });
    }
    onView(data) {
        this.mService.create({
            nzTitle: 'Orders Info',
            nzContent: _order_view_order_view_component__WEBPACK_IMPORTED_MODULE_4__["OrderViewComponent"],
            nzComponentParams: {
                data
            },
            nzWidth: '900px'
        });
    }
};
OrderComponent.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["OrderService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["OrderDetailService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order.component.scss */ "./src/app/pages/order/order.component.scss")).default]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/pages/order/order.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/order/order.module.ts ***!
  \*********************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-routing.module */ "./src/app/pages/order/order-routing.module.ts");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.component */ "./src/app/pages/order/order.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _order_view_order_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-view/order-view.component */ "./src/app/pages/order/order-view/order-view.component.ts");
/* harmony import */ var _order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order-edit/order-edit.component */ "./src/app/pages/order/order-edit/order-edit.component.ts");








let OrderModule = class OrderModule {
};
OrderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"], _order_view_order_view_component__WEBPACK_IMPORTED_MODULE_6__["OrderViewComponent"], _order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_7__["OrderEditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _order_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        entryComponents: [_order_view_order_view_component__WEBPACK_IMPORTED_MODULE_6__["OrderViewComponent"], _order_edit_order_edit_component__WEBPACK_IMPORTED_MODULE_7__["OrderEditComponent"]]
    })
], OrderModule);



/***/ })

}]);
//# sourceMappingURL=order-order-module-es2015.js.map