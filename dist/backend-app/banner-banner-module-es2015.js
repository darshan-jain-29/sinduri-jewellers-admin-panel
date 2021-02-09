(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["banner-banner-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banner/banner-edit/banner-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banner/banner-edit/banner-edit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <form nz-form [formGroup]=\"bForm\">\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"3\" [nzXs]=\"24\" nzRequired nzFor=\"name\">Name</nz-form-label>\n      <nz-form-control [nzSm]=\"16\" [nzXs]=\"24\" nzErrorTip=\"name length is at least 3\">\n        <input nz-input formControlName=\"name\"/>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n  <app-file-upload [previewUrl]=\"imgUrl\" (down)=\"down($event)\"></app-file-upload>\n</div>\n\n<div *nzModalFooter>\n  <button nz-button nzType=\"default\" (click)=\"cancel()\">Cancel</button>\n  <button nz-button nzType=\"primary\" [disabled]=\"!bForm.valid || this.imgUrl===null\" (click)=\"onOk()\"\n          [nzLoading]=\"isLoading\">Ok\n  </button>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banner/banner.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banner/banner.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-box\">\n  <input type=\"text\" nz-input placeholder=\"Search name\" [(ngModel)]=\"searchValue\"/>\n  <button nz-button nzType=\"primary\" (click)=\"search()\">\n    Search\n  </button>\n  <button nz-button (click)=\"reset()\">Reset</button>\n</div>\n\n<button nz-button class=\"btn-add\" nzType=\"primary\" (click)=\"add()\">\n  <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i>Add\n</button>\n\n\n<nz-skeleton [nzActive]=\"true\" *ngIf=\"!listOfDisplayData\" [nzParagraph]=\"{ rows: 6 }\"></nz-skeleton>\n<nz-table *ngIf=\"listOfDisplayData\" #nzTable [nzData]=\"listOfDisplayData\" [nzShowSizeChanger]=\"false\"\n          [nzBordered]=\"true\">\n  <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n  <tr>\n    <th nzShowSort nzSortKey=\"name\">Name</th>\n    <th>Img</th>\n    <th nzWidth=\"200px\">Action</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let data of nzTable.data\">\n    <td>{{ data.name }}</td>\n    <td>\n      <img *ngIf=\"data?.img;else no\" [src]=\" data.img\">\n      <ng-template #no>\n        <img [src]=\" data.img\">\n      </ng-template>\n    </td>\n    <td>\n      <a (click)=\"editRow(data)\">\n        <i nz-icon nzType=\"edit\" nzTheme=\"twotone\"></i>\n        Edit</a> |\n      <a nz-popconfirm nzTitle=\"Are you sure to delete?\" (nzOnConfirm)=\"deleteRow(data.id)\">\n        <i nz-icon nzType=\"delete\" nzTheme=\"twotone\" [nzTwotoneColor]=\"'#eb2f96'\"></i>Delete</a>\n    </td>\n  </tr>\n  </tbody>\n</nz-table>\n<app-loading *ngIf=\"isLoading\"></app-loading>\n");

/***/ }),

/***/ "./src/app/pages/banner/banner-edit/banner-edit.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/banner/banner-edit/banner-edit.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  width: 90px;\n}\n\n::ng-deep.upload-preview {\n  height: 150px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmFubmVyL2Jhbm5lci1lZGl0L0U6XFxXb3JrXFxJb25pYyBNb2JpbGUgQXBwXFxLaGltZXNhcmEgU2lsayBNaWxsc1xcYXBwLWJhY2tlbmQvc3JjXFxhcHBcXHBhZ2VzXFxiYW5uZXJcXGJhbm5lci1lZGl0XFxiYW5uZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYmFubmVyL2Jhbm5lci1lZGl0L2Jhbm5lci1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jhbm5lci9iYW5uZXItZWRpdC9iYW5uZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcC51cGxvYWQtcHJldmlldyB7XHJcbiAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbiIsImJ1dHRvbiB7XG4gIHdpZHRoOiA5MHB4O1xufVxuXG46Om5nLWRlZXAudXBsb2FkLXByZXZpZXcge1xuICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/banner/banner-edit/banner-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/banner/banner-edit/banner-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: BannerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerEditComponent", function() { return BannerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let BannerEditComponent = class BannerEditComponent {
    constructor(fb, modal, datePipe, bannerService) {
        this.fb = fb;
        this.modal = modal;
        this.datePipe = datePipe;
        this.bannerService = bannerService;
        this.isLoading = false;
        this.imgUrl = null;
        this.bForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]]
        });
    }
    ngOnInit() {
        if (this.data) {
            this.bForm.get('name').setValue(this.data.name);
            this.imgUrl = this.data.img;
        }
    }
    down(event) {
        this.imgUrl = event;
    }
    cancel() {
        this.modal.destroy(false);
    }
    onOk() {
        this.isLoading = true;
        const model = new _shared__WEBPACK_IMPORTED_MODULE_4__["BannerModel"]();
        model.name = this.bForm.controls.name.value;
        model.img = this.imgUrl;
        model.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        if (this.isEdit) {
            model.id = this.data.id;
            this.bannerService.update(model).then(() => {
                this.isLoading = false;
                this.modal.close(true);
            });
        }
        else {
            this.bannerService.addModel(model).then(() => {
                this.isLoading = false;
                this.modal.close(true);
            });
        }
    }
};
BannerEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["BannerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BannerEditComponent.prototype, "isEdit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BannerEditComponent.prototype, "data", void 0);
BannerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banner-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./banner-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banner/banner-edit/banner-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./banner-edit.component.scss */ "./src/app/pages/banner/banner-edit/banner-edit.component.scss")).default]
    })
], BannerEditComponent);



/***/ }),

/***/ "./src/app/pages/banner/banner-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/banner/banner-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: BannerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerRoutingModule", function() { return BannerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner.component */ "./src/app/pages/banner/banner.component.ts");




const routes = [
    { path: '', component: _banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"] }
];
let BannerRoutingModule = class BannerRoutingModule {
};
BannerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BannerRoutingModule);



/***/ }),

/***/ "./src/app/pages/banner/banner.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/banner/banner.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/banner/banner.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/banner/banner.component.ts ***!
  \**************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _banner_edit_banner_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner-edit/banner-edit.component */ "./src/app/pages/banner/banner-edit/banner-edit.component.ts");





let BannerComponent = class BannerComponent {
    constructor(bannerService, modalService) {
        this.bannerService = bannerService;
        this.modalService = modalService;
        this.searchValue = '';
        this.sortName = '';
        this.sortValue = '';
        this.list = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.bindData();
    }
    bindData() {
        this.bannerService.getList().subscribe(r => {
            this.list = r;
            this.listOfDisplayData = this.list;
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
        const data = this.list.filter(d => d.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1);
        this.listOfDisplayData = data.sort((a, b) => {
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
        this.isLoading = true;
        this.listOfDisplayData = this.listOfDisplayData.filter(d => d.id !== id);
        this.bannerService.delete(id).then(() => {
            this.isLoading = false;
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
            nzTitle: isEdit ? 'Edit Banner' : 'Add Banner',
            nzContent: _banner_edit_banner_edit_component__WEBPACK_IMPORTED_MODULE_4__["BannerEditComponent"],
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
BannerComponent.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["BannerService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banner/banner.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./banner.component.scss */ "./src/app/pages/banner/banner.component.scss")).default]
    })
], BannerComponent);



/***/ }),

/***/ "./src/app/pages/banner/banner.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/banner/banner.module.ts ***!
  \***********************************************/
/*! exports provided: BannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerModule", function() { return BannerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _banner_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner-routing.module */ "./src/app/pages/banner/banner-routing.module.ts");
/* harmony import */ var _banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner.component */ "./src/app/pages/banner/banner.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _banner_edit_banner_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./banner-edit/banner-edit.component */ "./src/app/pages/banner/banner-edit/banner-edit.component.ts");
/* harmony import */ var _components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");
/* harmony import */ var _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/loading/loading.module */ "./src/app/components/loading/loading.module.ts");








let BannerModule = class BannerModule {
};
BannerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"], _banner_edit_banner_edit_component__WEBPACK_IMPORTED_MODULE_5__["BannerEditComponent"]],
        imports: [
            _banner_routing_module__WEBPACK_IMPORTED_MODULE_2__["BannerRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"],
            _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_7__["LoadingModule"]
        ],
        entryComponents: [_banner_edit_banner_edit_component__WEBPACK_IMPORTED_MODULE_5__["BannerEditComponent"]]
    })
], BannerModule);



/***/ })

}]);
//# sourceMappingURL=banner-banner-module-es2015.js.map