(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notice-notice-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notice/notice-add/notice-add.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notice/notice-add/notice-add.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <form nz-form [formGroup]=\"nForm\">\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"name\">Name</nz-form-label>\n      <nz-form-control [nzSm]=\"19\" [nzXs]=\"24\" nzErrorTip=\"name length is at least 3\">\n        <input nz-input formControlName=\"name\"/>\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"5\" [nzXs]=\"24\" nzRequired nzFor=\"description\">Description</nz-form-label>\n      <nz-form-control [nzSm]=\"19\" [nzXs]=\"24\" nzErrorTip=\"Description length is at least 10\">\n        <textarea nz-input formControlName=\"description\"\n                  [nzAutosize]=\"{ minRows: 6, maxRows: 8 }\"></textarea>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n</div>\n\n<div *nzModalFooter>\n  <button nz-button nzType=\"default\" (click)=\"cancel()\">Cancel</button>\n  <button nz-button nzType=\"primary\" [disabled]=\"!nForm.valid\" (click)=\"onOk()\"\n          [nzLoading]=\"isLoading\">Ok\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notice/notice.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notice/notice.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-box\">\n  <input type=\"text\" nz-input placeholder=\"Search name\" [(ngModel)]=\"searchValue\"/>\n  <button nz-button nzType=\"primary\" (click)=\"search()\">\n    Search\n  </button>\n  <button nz-button (click)=\"reset()\">Reset</button>\n</div>\n\n<button nz-button class=\"btn-add\" nzType=\"primary\" (click)=\"add()\">\n  <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i>Add\n</button>\n\n\n<nz-skeleton [nzActive]=\"true\" *ngIf=\"!list\"></nz-skeleton>\n<nz-table *ngIf=\"list\" #nzTable [nzData]=\"list\" [nzShowSizeChanger]=\"false\"\n          [nzBordered]=\"true\" nzSize=\"small\">\n  <thead>\n  <tr>\n    <th>Name</th>\n    <th>Description</th>\n    <th nzWidth=\"200px\">Action</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let data of nzTable.data\">\n    <td>{{ data.name }}</td>\n    <td>{{data.description}}</td>\n    <td>\n      <a (click)=\"editRow(data)\">\n        <i nz-icon nzType=\"edit\" nzTheme=\"twotone\"></i>\n        Edit</a> |\n      <a nz-popconfirm nzTitle=\"Are you sure to delete?\" (nzOnConfirm)=\"deleteRow(data.id)\">\n        <i nz-icon nzType=\"delete\" nzTheme=\"twotone\" [nzTwotoneColor]=\"'#eb2f96'\"></i>Delete</a>\n    </td>\n  </tr>\n  </tbody>\n</nz-table>\n");

/***/ }),

/***/ "./src/app/pages/notice/notice-add/notice-add.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/notice/notice-add/notice-add.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGljZS9ub3RpY2UtYWRkL25vdGljZS1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/notice/notice-add/notice-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/notice/notice-add/notice-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: NoticeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeAddComponent", function() { return NoticeAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let NoticeAddComponent = class NoticeAddComponent {
    constructor(fb, modal, datePipe, noticeService) {
        this.fb = fb;
        this.modal = modal;
        this.datePipe = datePipe;
        this.noticeService = noticeService;
        this.isLoading = false;
        this.nForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]],
        });
    }
    ngOnInit() {
        if (this.data) {
            this.nForm.get('name').setValue(this.data.name);
            this.nForm.get('description').setValue(this.data.description);
        }
    }
    cancel() {
        this.modal.destroy(false);
    }
    onOk() {
        this.isLoading = true;
        const model = new _shared__WEBPACK_IMPORTED_MODULE_3__["NoticeModel"]();
        model.name = this.nForm.controls.name.value;
        model.description = this.nForm.controls.description.value;
        model.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        if (this.isEdit) {
            model.id = this.data.id;
            this.noticeService.update(model).then(() => {
                this.isLoading = false;
                this.modal.close(true);
            });
        }
        else {
            this.noticeService.addModel(model).then(() => {
                this.isLoading = false;
                this.modal.close(true);
            });
        }
    }
};
NoticeAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_3__["NoticeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NoticeAddComponent.prototype, "isEdit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NoticeAddComponent.prototype, "data", void 0);
NoticeAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notice-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notice-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notice/notice-add/notice-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notice-add.component.scss */ "./src/app/pages/notice/notice-add/notice-add.component.scss")).default]
    })
], NoticeAddComponent);



/***/ }),

/***/ "./src/app/pages/notice/notice-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/notice/notice-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: NoticeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeRoutingModule", function() { return NoticeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice.component */ "./src/app/pages/notice/notice.component.ts");




const routes = [{ path: '', component: _notice_component__WEBPACK_IMPORTED_MODULE_3__["NoticeComponent"] }];
let NoticeRoutingModule = class NoticeRoutingModule {
};
NoticeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NoticeRoutingModule);



/***/ }),

/***/ "./src/app/pages/notice/notice.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/notice/notice.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGljZS9ub3RpY2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/notice/notice.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/notice/notice.component.ts ***!
  \**************************************************/
/*! exports provided: NoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeComponent", function() { return NoticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _notice_add_notice_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notice-add/notice-add.component */ "./src/app/pages/notice/notice-add/notice-add.component.ts");





let NoticeComponent = class NoticeComponent {
    constructor(noticeService, modalService) {
        this.noticeService = noticeService;
        this.modalService = modalService;
        this.searchValue = '';
        this.allList = [];
    }
    ngOnInit() {
        this.bindData();
    }
    bindData() {
        this.noticeService.getList().subscribe(r => {
            this.allList = r;
            this.list = this.allList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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
        this.noticeService.delete(id).then(() => {
            this.modalService.success({
                nzTitle: 'info',
                nzContent: 'delete success'
            });
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
            nzTitle: isEdit ? 'Edit Notice' : 'Add Notice',
            nzContent: _notice_add_notice_add_component__WEBPACK_IMPORTED_MODULE_4__["NoticeAddComponent"],
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
NoticeComponent.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["NoticeService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
NoticeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notice/notice.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notice.component.scss */ "./src/app/pages/notice/notice.component.scss")).default]
    })
], NoticeComponent);



/***/ }),

/***/ "./src/app/pages/notice/notice.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/notice/notice.module.ts ***!
  \***********************************************/
/*! exports provided: NoticeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeModule", function() { return NoticeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _notice_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice-routing.module */ "./src/app/pages/notice/notice-routing.module.ts");
/* harmony import */ var _notice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notice.component */ "./src/app/pages/notice/notice.component.ts");
/* harmony import */ var _notice_add_notice_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notice-add/notice-add.component */ "./src/app/pages/notice/notice-add/notice-add.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");







let NoticeModule = class NoticeModule {
};
NoticeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_notice_component__WEBPACK_IMPORTED_MODULE_4__["NoticeComponent"], _notice_add_notice_add_component__WEBPACK_IMPORTED_MODULE_5__["NoticeAddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _notice_routing_module__WEBPACK_IMPORTED_MODULE_3__["NoticeRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ],
        entryComponents: [_notice_add_notice_add_component__WEBPACK_IMPORTED_MODULE_5__["NoticeAddComponent"]]
    })
], NoticeModule);



/***/ })

}]);
//# sourceMappingURL=notice-notice-module-es2015.js.map