(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupon-coupon-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupon/coupon-add/coupon-add.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupon/coupon-add/coupon-add.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <form nz-form [formGroup]=\"cForm\">\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"name\">Name</nz-form-label>\n      <nz-form-control [nzSm]=\"19\" [nzXs]=\"24\" nzErrorTip=\"name length is at least 3\">\n        <input nz-input formControlName=\"name\"/>\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"sort\">Sort</nz-form-label>\n      <nz-form-control [nzSm]=\"7\" [nzXs]=\"24\" nzErrorTip=\"required\">\n        <nz-input-number formControlName=\"sort\" [nzMin]=\"1\" [nzMax]=\"100\" [nzStep]=\"1\"></nz-input-number>\n      </nz-form-control>\n      <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"enable\">Enable</nz-form-label>\n      <nz-form-control [nzSm]=\"7\" [nzXs]=\"24\">\n        <label nz-checkbox formControlName=\"enable\"></label>\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"discountAmount\">DiscountAmount</nz-form-label>\n      <nz-form-control [nzSm]=\"7\" [nzXs]=\"24\" nzErrorTip=\"required\">\n        <nz-input-number formControlName=\"discountAmount\" [nzMin]=\"0\" [nzStep]=\"10\"></nz-input-number>\n      </nz-form-control>\n\n      <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"amount\">Amount</nz-form-label>\n      <nz-form-control [nzSm]=\"7\" [nzXs]=\"24\" nzErrorTip=\"required\">\n        <nz-input-number formControlName=\"amount\" [nzMin]=\"2\" [nzStep]=\"10\"></nz-input-number>\n      </nz-form-control>\n\n    </nz-form-item>\n\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"beginDate\">BeginDate</nz-form-label>\n      <nz-form-control [nzSm]=\"7\" [nzXs]=\"24\" nzErrorTip=\"required\">\n        <nz-date-picker formControlName=\"beginDate\"></nz-date-picker>\n      </nz-form-control>\n\n      <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"endDate\">EndDate</nz-form-label>\n      <nz-form-control [nzSm]=\"7\" [nzXs]=\"24\" nzErrorTip=\"required\">\n        <nz-date-picker formControlName=\"endDate\"></nz-date-picker>\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"name\">Description</nz-form-label>\n      <nz-form-control [nzSm]=\"19\" [nzXs]=\"24\" nzErrorTip=\"description length is at least 10\">\n        <textarea nz-input formControlName=\"desc\"\n                  [nzAutosize]=\"{ minRows: 4, maxRows: 6 }\"></textarea>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n</div>\n\n<div *nzModalFooter>\n  <button nz-button nzType=\"default\" (click)=\"cancel()\">Cancel</button>\n  <button nz-button nzType=\"primary\" [disabled]=\"!cForm.valid\" (click)=\"onOk()\"\n          [nzLoading]=\"isLoading\">Ok\n  </button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupon/coupon.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupon/coupon.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-box\">\n  <input type=\"text\" nz-input placeholder=\"Search name\" [(ngModel)]=\"searchValue\"/>\n  <button nz-button nzType=\"primary\" (click)=\"search()\">\n    Search\n  </button>\n  <button nz-button (click)=\"reset()\">Reset</button>\n</div>\n\n<button nz-button class=\"btn-add\" nzType=\"primary\" (click)=\"add()\">\n  <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i>Add\n</button>\n\n\n<nz-skeleton [nzActive]=\"true\" *ngIf=\"!list\" [nzParagraph]=\"{ rows: 10 }\"></nz-skeleton>\n<nz-table *ngIf=\"list\" #nzTable [nzData]=\"list\" [nzShowSizeChanger]=\"false\" nzSize=\"small\"\n          [nzBordered]=\"true\">\n  <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n  <tr>\n    <th nzShowSort nzSortKey=\"sort\">Sort</th>\n    <th nzShowSort nzSortKey=\"name\">Name</th>\n    <th>Description</th>\n    <th nzShowSort nzSortKey=\"discountAmount\">DiscountAmount</th>\n    <th nzShowSort nzSortKey=\"amount\">Amount</th>\n    <th>Enable</th>\n    <th>BeginDate</th>\n    <th>EndDate</th>\n    <th>Action</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let data of nzTable.data\">\n    <td>{{ data.sort }}</td>\n    <td>{{ data.name }}</td>\n    <td>{{ data.desc }}</td>\n    <td>{{ data.discountAmount }}</td>\n    <td>{{ data.amount }}</td>\n    <td><label nz-checkbox [(nzChecked)]=\"data.enable\"></label></td>\n    <td>{{ data.beginDate }}</td>\n    <td>{{data.endDate}}</td>\n    <td>\n      <a (click)=\"editRow(data)\">\n        <i nz-icon nzType=\"edit\" nzTheme=\"twotone\"></i>\n        Edit</a> |\n      <a nz-popconfirm nzTitle=\"Are you sure to delete?\" (nzOnConfirm)=\"deleteRow(data.id)\">\n        <i nz-icon nzType=\"delete\" nzTheme=\"twotone\" [nzTwotoneColor]=\"'#eb2f96'\"></i>Delete</a>\n    </td>\n  </tr>\n  </tbody>\n</nz-table>\n");

/***/ }),

/***/ "./src/app/pages/coupon/coupon-add/coupon-add.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/coupon/coupon-add/coupon-add.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ant-form-item {\n  margin-bottom: 13px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cG9uL2NvdXBvbi1hZGQvRTpcXFdvcmtcXElvbmljIE1vYmlsZSBBcHBcXEtoaW1lc2FyYSBTaWxrIE1pbGxzXFxhcHAtYmFja2VuZC9zcmNcXGFwcFxccGFnZXNcXGNvdXBvblxcY291cG9uLWFkZFxcY291cG9uLWFkZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY291cG9uL2NvdXBvbi1hZGQvY291cG9uLWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb3Vwb24vY291cG9uLWFkZC9jb3Vwb24tYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFudC1mb3JtLWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEzcHggIWltcG9ydGFudDtcclxufVxyXG4iLCIuYW50LWZvcm0taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEzcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/coupon/coupon-add/coupon-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/coupon/coupon-add/coupon-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: CouponAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponAddComponent", function() { return CouponAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let CouponAddComponent = class CouponAddComponent {
    constructor(fb, modal, datePipe, couponService) {
        this.fb = fb;
        this.modal = modal;
        this.datePipe = datePipe;
        this.couponService = couponService;
        this.isLoading = false;
        this.cForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            sort: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            enable: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            discountAmount: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            amount: [100, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            beginDate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            endDate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            desc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
        });
    }
    ngOnInit() {
        if (this.data) {
            this.cForm.get('name').setValue(this.data.name);
            this.cForm.get('desc').setValue(this.data.desc);
            this.cForm.get('sort').setValue(this.data.sort);
            this.cForm.get('amount').setValue(this.data.amount);
            this.cForm.get('enable').setValue(this.data.enable);
            this.cForm.get('discountAmount').setValue(this.data.discountAmount);
            this.cForm.get('beginDate').setValue(this.data.beginDate);
            this.cForm.get('endDate').setValue(this.data.endDate);
        }
    }
    cancel() {
        this.modal.destroy(false);
    }
    onOk() {
        this.isLoading = true;
        const model = new _shared__WEBPACK_IMPORTED_MODULE_3__["CouponModel"]();
        model.name = this.cForm.controls.name.value;
        model.desc = this.cForm.controls.desc.value;
        model.enable = this.cForm.controls.enable.value;
        model.sort = +this.cForm.controls.sort.value;
        model.amount = +this.cForm.controls.amount.value;
        model.discountAmount = +this.cForm.controls.discountAmount.value;
        model.beginDate = this.datePipe.transform(this.cForm.controls.beginDate.value, 'yyyy-MM-dd HH:mm:ss');
        model.endDate = this.datePipe.transform(this.cForm.controls.endDate.value, 'yyyy-MM-dd HH:mm:ss');
        model.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        if (this.isEdit) {
            model.id = this.data.id;
            this.couponService.update(model).then(() => {
                this.isLoading = false;
                this.modal.close(true);
            });
        }
        else {
            this.couponService.addModel(model).then(() => {
                this.isLoading = false;
                this.modal.close(true);
            });
        }
    }
};
CouponAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_3__["CouponsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CouponAddComponent.prototype, "isEdit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CouponAddComponent.prototype, "data", void 0);
CouponAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coupon-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coupon-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupon/coupon-add/coupon-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coupon-add.component.scss */ "./src/app/pages/coupon/coupon-add/coupon-add.component.scss")).default]
    })
], CouponAddComponent);



/***/ }),

/***/ "./src/app/pages/coupon/coupon-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/coupon/coupon-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CouponRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponRoutingModule", function() { return CouponRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _coupon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon.component */ "./src/app/pages/coupon/coupon.component.ts");




const routes = [{ path: '', component: _coupon_component__WEBPACK_IMPORTED_MODULE_3__["CouponComponent"] }];
let CouponRoutingModule = class CouponRoutingModule {
};
CouponRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CouponRoutingModule);



/***/ }),

/***/ "./src/app/pages/coupon/coupon.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/coupon/coupon.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvdXBvbi9jb3Vwb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/coupon/coupon.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/coupon/coupon.component.ts ***!
  \**************************************************/
/*! exports provided: CouponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponComponent", function() { return CouponComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _coupon_add_coupon_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon-add/coupon-add.component */ "./src/app/pages/coupon/coupon-add/coupon-add.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");





let CouponComponent = class CouponComponent {
    constructor(couponService, modalService, mService) {
        this.couponService = couponService;
        this.modalService = modalService;
        this.mService = mService;
        this.sortName = '';
        this.sortValue = '';
        this.searchValue = '';
        this.allList = [];
    }
    ngOnInit() {
        this.bindData();
    }
    bindData() {
        this.couponService.getList().subscribe(r => {
            this.allList = r;
            this.list = this.allList;
            this.list = this.list.sort((a, b) => a.sort - b.sort);
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
        const data = this.allList.filter(d => d.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1);
        this.list = data.sort((a, b) => {
            return this.sortValue === 'ascend'
                // tslint:disable-next-line:no-non-null-assertion
                ? a[this.sortName] <= b[this.sortName] ? -1 : 1
                // tslint:disable-next-line:no-non-null-assertion
                : b[this.sortName] > a[this.sortName]
                    ? 1
                    : -1;
        });
    }
    deleteRow(id) {
        this.list = this.list.filter(d => d.id !== id);
        this.couponService.delete(id).then(() => {
            this.modalService.success('delete success!');
        });
    }
    editRow(data) {
        this.createComponentModal(true, data);
    }
    add() {
        this.createComponentModal(false);
    }
    createComponentModal(isEdit, data = null) {
        const modal = this.mService.create({
            nzTitle: isEdit ? 'Edit Coupon' : 'Add Coupon',
            nzContent: _coupon_add_coupon_add_component__WEBPACK_IMPORTED_MODULE_3__["CouponAddComponent"],
            nzComponentParams: {
                isEdit,
                data
            }
        });
        modal.afterClose.subscribe(result => {
            if (result) {
                this.bindData();
            }
        });
    }
};
CouponComponent.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["CouponsService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalService"] }
];
CouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coupon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupon/coupon.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coupon.component.scss */ "./src/app/pages/coupon/coupon.component.scss")).default]
    })
], CouponComponent);



/***/ }),

/***/ "./src/app/pages/coupon/coupon.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/coupon/coupon.module.ts ***!
  \***********************************************/
/*! exports provided: CouponModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponModule", function() { return CouponModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _coupon_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon-routing.module */ "./src/app/pages/coupon/coupon-routing.module.ts");
/* harmony import */ var _coupon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coupon.component */ "./src/app/pages/coupon/coupon.component.ts");
/* harmony import */ var _coupon_add_coupon_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coupon-add/coupon-add.component */ "./src/app/pages/coupon/coupon-add/coupon-add.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");







let CouponModule = class CouponModule {
};
CouponModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_coupon_component__WEBPACK_IMPORTED_MODULE_4__["CouponComponent"], _coupon_add_coupon_add_component__WEBPACK_IMPORTED_MODULE_5__["CouponAddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _coupon_routing_module__WEBPACK_IMPORTED_MODULE_3__["CouponRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ],
        entryComponents: [_coupon_add_coupon_add_component__WEBPACK_IMPORTED_MODULE_5__["CouponAddComponent"]]
    })
], CouponModule);



/***/ })

}]);
//# sourceMappingURL=coupon-coupon-module-es2015.js.map