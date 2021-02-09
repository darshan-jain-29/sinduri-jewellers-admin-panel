(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivery-delivery-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery/delivery-add/delivery-add.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery/delivery-add/delivery-add.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-spin [nzSpinning]=\"isLoading\">\n  <div>\n    <form nz-form [formGroup]=\"dForm\">\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"name\">Name</nz-form-label>\n        <nz-form-control [nzSm]=\"19\" [nzXs]=\"24\" nzErrorTip=\"name length is at least 3\">\n          <input nz-input formControlName=\"name\"/>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"shortName\">ShortName</nz-form-label>\n        <nz-form-control [nzSm]=\"16\" [nzXs]=\"24\" nzErrorTip=\"shortName length is at least 2\">\n          <input nz-input formControlName=\"shortName\"/>\n        </nz-form-control>\n      </nz-form-item>\n\n      <nz-form-item>\n        <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"sort\">Sort</nz-form-label>\n        <nz-form-control [nzSm]=\"4\" [nzXs]=\"24\" nzErrorTip=\"Required\">\n          <nz-input-number formControlName=\"sort\" [nzMin]=\"1\" [nzStep]=\"1\"></nz-input-number>\n        </nz-form-control>\n        <nz-form-label [nzSm]=\"4\" [nzXs]=\"24\" nzRequired nzFor=\"cost\">Cost</nz-form-label>\n        <nz-form-control [nzSm]=\"5\" [nzXs]=\"24\" nzErrorTip=\"Required\">\n          <nz-input-number formControlName=\"cost\" [nzMin]=\"0\" [nzStep]=\"1\"></nz-input-number>\n        </nz-form-control>\n        <nz-form-label [nzSm]=\"3\" [nzXs]=\"24\" nzRequired nzFor=\"isEnable\">Enable</nz-form-label>\n        <nz-form-control [nzSm]=\"2\" [nzXs]=\"6\">\n          <label nz-checkbox formControlName=\"isEnable\"></label>\n        </nz-form-control>\n      </nz-form-item>\n    </form>\n  </div>\n\n  <div *nzModalFooter>\n    <button nz-button nzType=\"default\" (click)=\"cancel()\">Cancel</button>\n    <button nz-button nzType=\"primary\" [disabled]=\"!dForm.valid\" (click)=\"onOk()\">Ok</button>\n  </div>\n</nz-spin>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery/delivery.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery/delivery.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button nz-button class=\"btn-add\" nzType=\"primary\" (click)=\"add()\">\n  <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i>Add\n</button>\n\n<nz-skeleton [nzActive]=\"true\" *ngIf=\"!list\" [nzParagraph]=\"{ rows: 8}\"></nz-skeleton>\n<nz-table *ngIf=\"list\" #nzTable [nzData]=\"list\" [nzShowSizeChanger]=\"false\" [nzBordered]=\"true\" nzSize=\"small\">\n  <thead>\n  <tr>\n    <th>Sort</th>\n    <th>ShortName</th>\n    <th>Name</th>\n    <th>Cost($)</th>\n    <th>IsEnable</th>\n    <th nzWidth=\"200px\">Action</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let data of nzTable.data\">\n    <td>{{ data.sort }}</td>\n    <td>{{data.shortName}}</td>\n    <td>{{data.name}}</td>\n    <td>{{data.cost}}</td>\n    <td><label nz-checkbox [(nzChecked)]=\"data.isEnable\"></label></td>\n    <td>\n      <a (click)=\"editRow(data)\">\n        <i nz-icon nzType=\"edit\" nzTheme=\"twotone\"></i>\n        Edit</a> |\n      <a nz-popconfirm nzTitle=\"Are you sure to delete?\" (nzOnConfirm)=\"deleteRow(data.id)\">\n        <i nz-icon nzType=\"delete\" nzTheme=\"twotone\" [nzTwotoneColor]=\"'#eb2f96'\"></i>Delete</a>\n    </td>\n  </tr>\n  </tbody>\n</nz-table>\n<app-loading *ngIf=\"isLoading\"></app-loading>\n");

/***/ }),

/***/ "./src/app/pages/delivery/delivery-add/delivery-add.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/delivery/delivery-add/delivery-add.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbGl2ZXJ5L2RlbGl2ZXJ5LWFkZC9kZWxpdmVyeS1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/delivery/delivery-add/delivery-add.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/delivery/delivery-add/delivery-add.component.ts ***!
  \***********************************************************************/
/*! exports provided: DeliveryAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryAddComponent", function() { return DeliveryAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let DeliveryAddComponent = class DeliveryAddComponent {
    constructor(fb, modal, datePipe, dService) {
        this.fb = fb;
        this.modal = modal;
        this.datePipe = datePipe;
        this.dService = dService;
        this.isLoading = false;
        this.dForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            shortName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            sort: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cost: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isEnable: [false],
        });
    }
    ngOnInit() {
        if (this.data) {
            this.dForm.get('name').setValue(this.data.name);
            this.dForm.get('shortName').setValue(this.data.shortName);
            this.dForm.get('sort').setValue(this.data.sort);
            this.dForm.get('cost').setValue(this.data.cost);
            this.dForm.get('isEnable').setValue(this.data.isEnable);
        }
    }
    cancel() {
        this.modal.destroy(false);
    }
    onOk() {
        this.isLoading = true;
        const model = new _shared__WEBPACK_IMPORTED_MODULE_3__["DeliveryModel"]();
        model.name = this.dForm.controls.name.value;
        model.shortName = this.dForm.controls.shortName.value;
        model.sort = +this.dForm.controls.sort.value;
        model.cost = +this.dForm.controls.cost.value;
        model.isEnable = this.dForm.controls.isEnable.value;
        model.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        if (this.isEdit) {
            model.id = this.data.id;
            this.dService.update(model).then(() => {
                this.isLoading = false;
                this.modal.close(true);
            });
        }
        else {
            this.dService.addModel(model).then(() => {
                this.isLoading = false;
                this.modal.close(true);
            });
        }
    }
};
DeliveryAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_3__["DeliveryService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DeliveryAddComponent.prototype, "isEdit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DeliveryAddComponent.prototype, "data", void 0);
DeliveryAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delivery-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery/delivery-add/delivery-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delivery-add.component.scss */ "./src/app/pages/delivery/delivery-add/delivery-add.component.scss")).default]
    })
], DeliveryAddComponent);



/***/ }),

/***/ "./src/app/pages/delivery/delivery-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/delivery/delivery-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DeliveryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryRoutingModule", function() { return DeliveryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _delivery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery.component */ "./src/app/pages/delivery/delivery.component.ts");




const routes = [{ path: '', component: _delivery_component__WEBPACK_IMPORTED_MODULE_3__["DeliveryComponent"] }];
let DeliveryRoutingModule = class DeliveryRoutingModule {
};
DeliveryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DeliveryRoutingModule);



/***/ }),

/***/ "./src/app/pages/delivery/delivery.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/delivery/delivery.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbGl2ZXJ5L2RlbGl2ZXJ5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/delivery/delivery.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/delivery/delivery.component.ts ***!
  \******************************************************/
/*! exports provided: DeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryComponent", function() { return DeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _delivery_add_delivery_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delivery-add/delivery-add.component */ "./src/app/pages/delivery/delivery-add/delivery-add.component.ts");





let DeliveryComponent = class DeliveryComponent {
    constructor(dService, mService, modalService) {
        this.dService = dService;
        this.mService = mService;
        this.modalService = modalService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.bindData();
    }
    bindData() {
        this.dService.getList().subscribe(r => {
            this.list = r;
            this.list = this.list.sort((a, b) => a.sort - b.sort);
        });
    }
    deleteRow(id) {
        this.isLoading = true;
        this.list = this.list.filter(d => d.id !== id);
        this.dService.delete(id).then(() => {
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
            nzTitle: isEdit ? 'Edit Express' : 'Add Express',
            nzContent: _delivery_add_delivery_add_component__WEBPACK_IMPORTED_MODULE_4__["DeliveryAddComponent"],
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
DeliveryComponent.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["DeliveryService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }
];
DeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delivery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/delivery/delivery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delivery.component.scss */ "./src/app/pages/delivery/delivery.component.scss")).default]
    })
], DeliveryComponent);



/***/ }),

/***/ "./src/app/pages/delivery/delivery.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/delivery/delivery.module.ts ***!
  \***************************************************/
/*! exports provided: DeliveryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryModule", function() { return DeliveryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _delivery_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery-routing.module */ "./src/app/pages/delivery/delivery-routing.module.ts");
/* harmony import */ var _delivery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delivery.component */ "./src/app/pages/delivery/delivery.component.ts");
/* harmony import */ var _delivery_add_delivery_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delivery-add/delivery-add.component */ "./src/app/pages/delivery/delivery-add/delivery-add.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/loading/loading.module */ "./src/app/components/loading/loading.module.ts");








let DeliveryModule = class DeliveryModule {
};
DeliveryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_delivery_component__WEBPACK_IMPORTED_MODULE_4__["DeliveryComponent"], _delivery_add_delivery_add_component__WEBPACK_IMPORTED_MODULE_5__["DeliveryAddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _delivery_routing_module__WEBPACK_IMPORTED_MODULE_3__["DeliveryRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_7__["LoadingModule"]
        ],
        entryComponents: [_delivery_add_delivery_add_component__WEBPACK_IMPORTED_MODULE_5__["DeliveryAddComponent"]]
    })
], DeliveryModule);



/***/ })

}]);
//# sourceMappingURL=delivery-delivery-module-es2015.js.map