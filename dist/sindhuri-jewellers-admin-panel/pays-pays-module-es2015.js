(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pays-pays-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pays/pays-add/pays-add.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pays/pays-add/pays-add.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <form nz-form [formGroup]=\"payForm\">\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"name\">Name</nz-form-label>\n      <nz-form-control [nzSm]=\"16\" [nzXs]=\"24\" nzErrorTip=\"name length is at least 3\">\n        <input nz-input formControlName=\"name\"/>\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"sort\">Sort</nz-form-label>\n      <nz-form-control [nzSm]=\"18\" [nzXs]=\"24\" nzErrorTip=\"required\">\n        <nz-input-number formControlName=\"sort\" [nzMin]=\"1\" [nzMax]=\"100\" [nzStep]=\"1\"></nz-input-number>\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"minAmount\">MinAmount</nz-form-label>\n      <nz-form-control [nzSm]=\"18\" [nzXs]=\"24\" nzErrorTip=\"required\">\n        <nz-input-number formControlName=\"minAmount\" [nzMin]=\"10\" [nzStep]=\"10\"></nz-input-number>\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"maxAmount\">MaxAmount</nz-form-label>\n      <nz-form-control [nzSm]=\"18\" [nzXs]=\"24\" nzErrorTip=\"required\">\n        <nz-input-number formControlName=\"maxAmount\" [nzMin]=\"100\" [nzStep]=\"100\"></nz-input-number>\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"isEnable\">IsEnable</nz-form-label>\n      <nz-form-control [nzSm]=\"16\" [nzXs]=\"24\">\n        <label nz-checkbox formControlName=\"isEnable\">Enable</label>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n  <app-file-upload [previewUrl]=\"imgUrl\" (down)=\"down($event)\"></app-file-upload>\n</div>\n\n<div *nzModalFooter>\n  <button nz-button nzType=\"default\" (click)=\"cancel()\">Cancel</button>\n  <button nz-button nzType=\"primary\" [disabled]=\"!payForm.valid\" (click)=\"onOk()\"\n          [nzLoading]=\"isLoading\">Ok\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pays/pays.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pays/pays.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-box\">\n  <input type=\"text\" nz-input placeholder=\"Search name\" [(ngModel)]=\"searchValue\"/>\n  <button nz-button nzType=\"primary\" (click)=\"search()\">\n    Search\n  </button>\n  <button nz-button (click)=\"reset()\">Reset</button>\n</div>\n\n<button nz-button class=\"btn-add\" nzType=\"primary\" (click)=\"add()\">\n  <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i>Add\n</button>\n\n\n<nz-skeleton [nzActive]=\"true\" *ngIf=\"!list\" [nzParagraph]=\"{ rows: 8 }\"></nz-skeleton>\n<nz-table *ngIf=\"list\" #nzTable [nzData]=\"list\" [nzShowSizeChanger]=\"false\"\n          [nzBordered]=\"true\">\n  <thead>\n  <tr>\n    <th>Name</th>\n    <th>Sort</th>\n    <th>MinAmount</th>\n    <th>MaxAmount</th>\n    <th>IsEnable</th>\n    <th>Img</th>\n    <th>Action</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let data of nzTable.data\">\n    <td>{{ data.name }}</td>\n    <td>{{data.sort}}</td>\n    <td>{{data.minAmount}}</td>\n    <td>{{data.maxAmount}}</td>\n    <td><label nz-checkbox [(nzChecked)]=\"data.isEnable\"></label></td>\n    <td>\n      <img *ngIf=\"data?.img;else no\" [src]=\" data.img\">\n      <ng-template #no>\n        <img [src]=\" data.img\">\n      </ng-template>\n    </td>\n    <td>\n      <a (click)=\"editRow(data)\">\n        <i nz-icon nzType=\"edit\" nzTheme=\"twotone\"></i>\n        Edit</a> |\n      <a nz-popconfirm nzTitle=\"Are you sure to delete?\" (nzOnConfirm)=\"deleteRow(data.id)\">\n        <i nz-icon nzType=\"delete\" nzTheme=\"twotone\" [nzTwotoneColor]=\"'#eb2f96'\"></i>Delete</a>\n    </td>\n  </tr>\n  </tbody>\n</nz-table>\n");

/***/ }),

/***/ "./src/app/pages/pays/pays-add/pays-add.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/pays/pays-add/pays-add.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ant-form-item {\n  margin-bottom: 13px !important;\n}\n\n::ng-deep.upload-preview {\n  height: 80px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5cy9wYXlzLWFkZC9FOlxcV29ya1xcSW9uaWMgTW9iaWxlIEFwcFxcS2hpbWVzYXJhIFNpbGsgTWlsbHNcXGFwcC1iYWNrZW5kL3NyY1xcYXBwXFxwYWdlc1xccGF5c1xccGF5cy1hZGRcXHBheXMtYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXlzL3BheXMtYWRkL3BheXMtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXlzL3BheXMtYWRkL3BheXMtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFudC1mb3JtLWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEzcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLnVwbG9hZC1wcmV2aWV3IHtcclxuICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcclxufVxyXG4iLCIuYW50LWZvcm0taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEzcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLnVwbG9hZC1wcmV2aWV3IHtcbiAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/pays/pays-add/pays-add.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/pays/pays-add/pays-add.component.ts ***!
  \***********************************************************/
/*! exports provided: PaysAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaysAddComponent", function() { return PaysAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let PaysAddComponent = class PaysAddComponent {
    constructor(fb, modal, datePipe, payService) {
        this.fb = fb;
        this.modal = modal;
        this.datePipe = datePipe;
        this.payService = payService;
        this.isLoading = false;
        this.imgUrl = '';
        this.payForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            sort: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            minAmount: [10, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maxAmount: [100, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isEnable: [true]
        });
    }
    ngOnInit() {
        if (this.data) {
            this.payForm.get('name').setValue(this.data.name);
            this.payForm.get('sort').setValue(this.data.sort);
            this.payForm.get('minAmount').setValue(this.data.minAmount);
            this.payForm.get('maxAmount').setValue(this.data.maxAmount);
            this.payForm.get('isEnable').setValue(this.data.isEnable);
            this.imgUrl = this.data.img;
        }
    }
    cancel() {
        this.modal.destroy(false);
    }
    down(event) {
        this.imgUrl = event;
    }
    onOk() {
        this.isLoading = true;
        const model = new _shared__WEBPACK_IMPORTED_MODULE_3__["PayModel"]();
        model.name = this.payForm.controls.name.value;
        model.sort = +this.payForm.controls.sort.value;
        model.minAmount = +this.payForm.controls.minAmount.value;
        model.maxAmount = +this.payForm.controls.maxAmount.value;
        model.isEnable = this.payForm.controls.isEnable.value;
        model.img = this.imgUrl;
        model.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        if (this.isEdit) {
            model.id = this.data.id;
            this.payService.update(model).then(() => {
                this.isLoading = false;
                this.modal.close(true);
            });
        }
        else {
            this.payService.addModel(model).then(() => {
                this.isLoading = false;
                this.modal.close(true);
            });
        }
    }
};
PaysAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_3__["PayService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaysAddComponent.prototype, "isEdit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaysAddComponent.prototype, "data", void 0);
PaysAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pays-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pays-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pays/pays-add/pays-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pays-add.component.scss */ "./src/app/pages/pays/pays-add/pays-add.component.scss")).default]
    })
], PaysAddComponent);



/***/ }),

/***/ "./src/app/pages/pays/pays-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/pays/pays-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PaysRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaysRoutingModule", function() { return PaysRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pays_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pays.component */ "./src/app/pages/pays/pays.component.ts");




const routes = [{ path: '', component: _pays_component__WEBPACK_IMPORTED_MODULE_3__["PaysComponent"] }];
let PaysRoutingModule = class PaysRoutingModule {
};
PaysRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PaysRoutingModule);



/***/ }),

/***/ "./src/app/pages/pays/pays.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/pays/pays.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5cy9FOlxcV29ya1xcSW9uaWMgTW9iaWxlIEFwcFxcS2hpbWVzYXJhIFNpbGsgTWlsbHNcXGFwcC1iYWNrZW5kL3NyY1xcYXBwXFxwYWdlc1xccGF5c1xccGF5cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5cy9wYXlzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5cy9wYXlzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG4iLCJpbWcge1xuICB3aWR0aDogNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/pays/pays.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/pays/pays.component.ts ***!
  \**********************************************/
/*! exports provided: PaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaysComponent", function() { return PaysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _pays_add_pays_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pays-add/pays-add.component */ "./src/app/pages/pays/pays-add/pays-add.component.ts");





let PaysComponent = class PaysComponent {
    constructor(payService, modalService, mService) {
        this.payService = payService;
        this.modalService = modalService;
        this.mService = mService;
        this.searchValue = '';
        this.allList = [];
    }
    ngOnInit() {
        this.bindData();
    }
    bindData() {
        this.payService.getList().subscribe(r => {
            this.allList = r;
            this.list = this.allList.sort((a, b) => a.sort - b.sort);
        });
    }
    reset() {
        this.searchValue = '';
        this.search();
    }
    search() {
        this.list = this.allList.filter(d => d.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1);
    }
    deleteRow(id) {
        this.list = this.list.filter(d => d.id !== id);
        this.payService.delete(id).then(() => {
            this.mService.success('delete success');
        });
    }
    editRow(data) {
        this.createComponentModal(true, data);
    }
    add() {
        this.createComponentModal(false);
    }
    createComponentModal(isEdit, data = null) {
        const modal = this.modalService.create({
            nzTitle: isEdit ? 'Edit Pay' : 'Add Pay',
            nzContent: _pays_add_pays_add_component__WEBPACK_IMPORTED_MODULE_4__["PaysAddComponent"],
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
PaysComponent.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["PayService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }
];
PaysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pays',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pays.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pays/pays.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pays.component.scss */ "./src/app/pages/pays/pays.component.scss")).default]
    })
], PaysComponent);



/***/ }),

/***/ "./src/app/pages/pays/pays.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/pays/pays.module.ts ***!
  \*******************************************/
/*! exports provided: PaysModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaysModule", function() { return PaysModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pays_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pays-routing.module */ "./src/app/pages/pays/pays-routing.module.ts");
/* harmony import */ var _pays_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pays.component */ "./src/app/pages/pays/pays.component.ts");
/* harmony import */ var _pays_add_pays_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pays-add/pays-add.component */ "./src/app/pages/pays/pays-add/pays-add.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");








let PaysModule = class PaysModule {
};
PaysModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pays_component__WEBPACK_IMPORTED_MODULE_4__["PaysComponent"], _pays_add_pays_add_component__WEBPACK_IMPORTED_MODULE_5__["PaysAddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _pays_routing_module__WEBPACK_IMPORTED_MODULE_3__["PaysRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"]
        ],
        entryComponents: [_pays_add_pays_add_component__WEBPACK_IMPORTED_MODULE_5__["PaysAddComponent"]]
    })
], PaysModule);



/***/ })

}]);
//# sourceMappingURL=pays-pays-module-es2015.js.map