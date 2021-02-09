(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ows-ows-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ows/ows-add/ows-add.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ows/ows-add/ows-add.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-spin [nzSpinning]=\"isLoading\">\n  <div>\n    <form nz-form [formGroup]=\"oForm\">\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"minWeight\">MinWeight</nz-form-label>\n        <nz-form-control [nzSm]=\"6\" [nzXs]=\"24\" nzErrorTip=\"Required\">\n          <nz-input-number formControlName=\"minWeight\" [nzMin]=\"0\" [nzStep]=\"1\"></nz-input-number>\n        </nz-form-control>\n\n        <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"maxWeight\">MaxWeight</nz-form-label>\n        <nz-form-control [nzSm]=\"6\" [nzXs]=\"24\" nzErrorTip=\"Required\">\n          <nz-input-number formControlName=\"maxWeight\" [nzMin]=\"1\" [nzStep]=\"3\"></nz-input-number>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"sort\">Sort</nz-form-label>\n        <nz-form-control [nzSm]=\"6\" [nzXs]=\"24\" nzErrorTip=\"Required\">\n          <nz-input-number formControlName=\"sort\" [nzMin]=\"1\" [nzStep]=\"1\"></nz-input-number>\n        </nz-form-control>\n\n        <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"cost\">Cost</nz-form-label>\n        <nz-form-control [nzSm]=\"6\" [nzXs]=\"24\" nzErrorTip=\"Required\">\n          <nz-input-number formControlName=\"cost\" [nzMin]=\"0\" [nzStep]=\"1\"></nz-input-number>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"isEnable\">Enable</nz-form-label>\n        <nz-form-control [nzSm]=\"8\" [nzXs]=\"24\" nzErrorTip=\"Required\">\n          <label nz-checkbox formControlName=\"isEnable\"></label>\n        </nz-form-control>\n      </nz-form-item>\n    </form>\n  </div>\n\n  <div *nzModalFooter>\n    <button nz-button nzType=\"default\" (click)=\"cancel()\">Cancel</button>\n    <button nz-button nzType=\"primary\" [disabled]=\"!oForm.valid\" (click)=\"onOk()\">Ok</button>\n  </div>\n</nz-spin>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ows/ows.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ows/ows.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button nz-button class=\"btn-add\" nzType=\"primary\" (click)=\"add()\">\n  <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i>Add\n</button>\n\n<nz-skeleton [nzActive]=\"true\" *ngIf=\"!list\" [nzParagraph]=\"{ rows: 6}\"></nz-skeleton>\n<nz-table *ngIf=\"list\" #nzTable [nzData]=\"list\" [nzShowSizeChanger]=\"false\" [nzBordered]=\"true\" nzSize=\"small\">\n  <thead>\n  <tr>\n    <th>Sort</th>\n    <th>MinWeight(kg)</th>\n    <th>MaxWeight(kg)</th>\n    <th>cost($)</th>\n    <th>Enable</th>\n    <th nzWidth=\"200px\">Action</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let data of nzTable.data\">\n    <td>{{ data.sort }}</td>\n    <td>{{data.minWeight}}</td>\n    <td>{{data.maxWeight}}</td>\n    <td>{{data.cost}}</td>\n    <td><label nz-checkbox [(nzChecked)]=\"data.isEnable\"></label></td>\n    <td>\n      <a (click)=\"editRow(data)\">\n        <i nz-icon nzType=\"edit\" nzTheme=\"twotone\"></i>\n        Edit</a> |\n      <a nz-popconfirm nzTitle=\"Are you sure to delete?\" (nzOnConfirm)=\"deleteRow(data.id)\">\n        <i nz-icon nzType=\"delete\" nzTheme=\"twotone\" [nzTwotoneColor]=\"'#eb2f96'\"></i>Delete</a>\n    </td>\n  </tr>\n  </tbody>\n</nz-table>\n<app-loading *ngIf=\"isLoading\"></app-loading>\n");

/***/ }),

/***/ "./src/app/pages/ows/ows-add/ows-add.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/ows/ows-add/ows-add.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293cy9vd3MtYWRkL293cy1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/ows/ows-add/ows-add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/ows/ows-add/ows-add.component.ts ***!
  \********************************************************/
/*! exports provided: OwsAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwsAddComponent", function() { return OwsAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let OwsAddComponent = class OwsAddComponent {
    constructor(fb, modal, datePipe, owsService) {
        this.fb = fb;
        this.modal = modal;
        this.datePipe = datePipe;
        this.owsService = owsService;
        this.isLoading = false;
        this.oForm = this.fb.group({
            minWeight: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maxWeight: [100, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            sort: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cost: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isEnable: [true]
        });
    }
    ngOnInit() {
        if (this.data) {
            this.oForm.get('minWeight').setValue(this.data.minWeight);
            this.oForm.get('maxWeight').setValue(this.data.maxWeight);
            this.oForm.get('sort').setValue(this.data.sort);
            this.oForm.get('cost').setValue(this.data.cost);
            this.oForm.get('isEnable').setValue(this.data.isEnable);
        }
    }
    cancel() {
        this.modal.destroy(false);
    }
    onOk() {
        this.isLoading = true;
        const model = new _shared__WEBPACK_IMPORTED_MODULE_3__["OwsModel"]();
        model.minWeight = +this.oForm.controls.minWeight.value;
        model.maxWeight = +this.oForm.controls.maxWeight.value;
        model.sort = +this.oForm.controls.sort.value;
        model.cost = +this.oForm.controls.cost.value;
        model.isEnable = this.oForm.controls.isEnable.value;
        model.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        if (this.isEdit) {
            model.id = this.data.id;
            this.owsService.update(model).then(() => {
                this.isLoading = false;
                this.modal.close(true);
            });
        }
        else {
            this.owsService.addModel(model).then(() => {
                this.isLoading = false;
                this.modal.close(true);
            });
        }
    }
};
OwsAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_3__["OwsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OwsAddComponent.prototype, "isEdit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OwsAddComponent.prototype, "data", void 0);
OwsAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ows-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ows-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ows/ows-add/ows-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ows-add.component.scss */ "./src/app/pages/ows/ows-add/ows-add.component.scss")).default]
    })
], OwsAddComponent);



/***/ }),

/***/ "./src/app/pages/ows/ows-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/ows/ows-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OwsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwsRoutingModule", function() { return OwsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ows_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ows.component */ "./src/app/pages/ows/ows.component.ts");




const routes = [{ path: '', component: _ows_component__WEBPACK_IMPORTED_MODULE_3__["OwsComponent"] }];
let OwsRoutingModule = class OwsRoutingModule {
};
OwsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OwsRoutingModule);



/***/ }),

/***/ "./src/app/pages/ows/ows.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/ows/ows.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293cy9vd3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/ows/ows.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/ows/ows.component.ts ***!
  \********************************************/
/*! exports provided: OwsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwsComponent", function() { return OwsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _ows_add_ows_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ows-add/ows-add.component */ "./src/app/pages/ows/ows-add/ows-add.component.ts");





let OwsComponent = class OwsComponent {
    constructor(owsService, mService, modalService) {
        this.owsService = owsService;
        this.mService = mService;
        this.modalService = modalService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.bindData();
    }
    bindData() {
        this.owsService.getList().subscribe(r => {
            this.list = r;
            this.list = this.list.sort((a, b) => a.sort - b.sort);
        });
    }
    deleteRow(id) {
        this.isLoading = true;
        this.list = this.list.filter(d => d.id !== id);
        this.owsService.delete(id).then(() => {
            this.isLoading = false;
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
            nzTitle: isEdit ? 'Edit OverWeight Surcharge' : 'Add OverWeight Surcharge',
            nzContent: _ows_add_ows_add_component__WEBPACK_IMPORTED_MODULE_4__["OwsAddComponent"],
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
OwsComponent.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["OwsService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }
];
OwsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ows',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ows.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ows/ows.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ows.component.scss */ "./src/app/pages/ows/ows.component.scss")).default]
    })
], OwsComponent);



/***/ }),

/***/ "./src/app/pages/ows/ows.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/ows/ows.module.ts ***!
  \*****************************************/
/*! exports provided: OwsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwsModule", function() { return OwsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ows_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ows-routing.module */ "./src/app/pages/ows/ows-routing.module.ts");
/* harmony import */ var _ows_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ows.component */ "./src/app/pages/ows/ows.component.ts");
/* harmony import */ var _ows_add_ows_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ows-add/ows-add.component */ "./src/app/pages/ows/ows-add/ows-add.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/loading/loading.module */ "./src/app/components/loading/loading.module.ts");








let OwsModule = class OwsModule {
};
OwsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ows_component__WEBPACK_IMPORTED_MODULE_4__["OwsComponent"], _ows_add_ows_add_component__WEBPACK_IMPORTED_MODULE_5__["OwsAddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ows_routing_module__WEBPACK_IMPORTED_MODULE_3__["OwsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_7__["LoadingModule"]
        ],
        entryComponents: [_ows_add_ows_add_component__WEBPACK_IMPORTED_MODULE_5__["OwsAddComponent"]]
    })
], OwsModule);



/***/ })

}]);
//# sourceMappingURL=ows-ows-module-es2015.js.map