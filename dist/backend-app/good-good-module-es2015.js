(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["good-good-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/good/good-add/good-add.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/good/good-add/good-add.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <form nz-form [formGroup]=\"goodForm\">\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"3\" [nzXs]=\"12\" nzRequired nzFor=\"name\">Name</nz-form-label>\n      <nz-form-control [nzSm]=\"14\" [nzXs]=\"15\" nzErrorTip=\"name length is at least 3\">\n        <input nz-input formControlName=\"name\"/>\n      </nz-form-control>\n      <nz-form-label [nzSm]=\"2\" [nzXs]=\"12\" nzRequired nzFor=\"cate\">Cate</nz-form-label>\n      <nz-select style=\"width: 120px;\" [(ngModel)]=\"selectedCate\" [ngModelOptions]=\"{standalone: true}\"\n                 nzPlaceHolder=\"Choose\">\n        <nz-option *ngFor=\"let cate of cateList\" [nzLabel]=\"cate.name\" [nzValue]=\"cate.id\"></nz-option>\n      </nz-select>\n    </nz-form-item>\n\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"3\" [nzXs]=\"3\" nzRequired nzFor=\"sort\">Sort</nz-form-label>\n      <nz-form-control [nzSm]=\"3\" [nzXs]=\"3\" nzErrorTip=\"required\">\n        <nz-input-number formControlName=\"sort\" [nzMin]=\"1\" [nzMax]=\"10000\" [nzStep]=\"1\"></nz-input-number>\n      </nz-form-control>\n      <nz-form-label [nzSm]=\"2\" [nzXs]=\"3\" nzRequired nzFor=\"price\">Price</nz-form-label>\n      <nz-form-control [nzSm]=\"3\" [nzXs]=\"3\" nzErrorTip=\"required\">\n        <nz-input-number formControlName=\"price\" [nzMin]=\"0.2\" [nzMax]=\"1000\" [nzStep]=\"0.1\"></nz-input-number>\n      </nz-form-control>\n      <nz-form-label [nzSm]=\"3\" [nzXs]=\"3\" nzRequired nzFor=\"shelfLife\">shelfLife</nz-form-label>\n      <nz-form-control [nzSm]=\"3\" [nzXs]=\"3\" nzErrorTip=\"required\">\n        <nz-input-number formControlName=\"shelfLife\" [nzMin]=\"1\" [nzMax]=\"100\" [nzStep]=\"1\"></nz-input-number>\n      </nz-form-control>\n      <nz-form-label [nzSm]=\"3\" [nzXs]=\"3\" nzRequired nzFor=\"weight\">weight</nz-form-label>\n      <nz-form-control [nzSm]=\"3\" [nzXs]=\"3\" nzErrorTip=\"required\">\n        <nz-input-number formControlName=\"weight\" [nzMin]=\"0\" [nzMax]=\"1000\" [nzStep]=\"0.2\"></nz-input-number>\n      </nz-form-control>\n    </nz-form-item>\n\n    <nz-form-item>\n      <nz-form-label [nzSm]=\"3\" [nzXs]=\"3\" nzFor=\"isHot\">Hot</nz-form-label>\n      <nz-form-control [nzSm]=\"2\" [nzXs]=\"2\" nzErrorTip=\"required\">\n        <label nz-checkbox formControlName=\"isHot\"></label>\n      </nz-form-control>\n      <nz-form-label [nzSm]=\"2\" [nzXs]=\"2\" nzFor=\"isNew\">New</nz-form-label>\n      <nz-form-control [nzSm]=\"2\" [nzXs]=\"2\" nzErrorTip=\"required\">\n        <label nz-checkbox formControlName=\"isNew\"></label>\n      </nz-form-control>\n      <nz-form-label [nzSm]=\"4\" [nzXs]=\"4\" nzFor=\"storageConditions\">Conditions</nz-form-label>\n      <nz-form-control [nzSm]=\"10\" [nzXs]=\"24\">\n        <input nz-input formControlName=\"storageConditions\"/>\n      </nz-form-control>\n    </nz-form-item>\n  </form>\n  <app-file-upload [previewUrl]=\"imgUrl\" (down)=\"down($event)\" (del)=\"del($event)\"></app-file-upload>\n  <quill-editor [styles]=\"{height: '160px'}\" [(ngModel)]=\"description\"  (onEditorCreated)=\"editorCreated($event)\" ></quill-editor>\n</div>\n\n<div *nzModalFooter>\n  <button nz-button nzType=\"default\" (click)=\"cancel()\">Cancel</button>\n  <button nz-button nzType=\"primary\" [disabled]=\"!goodForm.valid\" (click)=\"onOk()\"\n          [nzLoading]=\"isLoading\">Ok\n  </button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/good/good-photo/good-photo.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/good/good-photo/good-photo.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-skeleton [nzActive]=\"true\" *ngIf=\"!fileList\"></nz-skeleton>\n<div *ngIf=\"fileList\">\n  <nz-upload nzListType=\"picture-card\" [(nzFileList)]=\"fileList\"\n             [nzShowButton]=\"fileList.length < 6\" [nzShowUploadList]=\"showUploadList\"\n             [nzPreview]=\"handlePreview\" [nzCustomRequest]=\"customReq\" [nzRemove]=\"customRemove\"\n             accept=\"image/png, image/gif, image/jpeg, image/bmp, image/x-icon\">\n    <i nz-icon nzType=\"plus\"></i>\n    <div class=\"ant-upload-text\">Upload</div>\n  </nz-upload>\n  <nz-modal [nzVisible]=\"previewVisible\" [nzContent]=\"modalContent\"\n            [nzFooter]=\"null\" (nzOnCancel)=\"previewVisible = false\">\n    <ng-template #modalContent>\n      <img [src]=\"previewImage\" [ngStyle]=\"{ width: '100%' }\"/>\n    </ng-template>\n  </nz-modal>\n</div>\n\n<div *nzModalFooter>\n  <button nz-button nzType=\"primary\" (click)=\"onClose()\">Close\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/good/good-preview/good-preview.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/good/good-preview/good-preview.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center\">\n  <img [src]=\"url\">\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/good/good-reviews/good-reviews.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/good/good-reviews/good-reviews.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-skeleton [nzActive]=\"true\" *ngIf=\"!list\" [nzParagraph]=\"{ rows: 3 }\"></nz-skeleton>\r\n<nz-list [nzDataSource]=\"list\" [nzRenderItem]=\"item\" [nzItemLayout]=\"'horizontal'\">\r\n  <ng-template #item let-item>\r\n    <nz-comment [nzAuthor]=\"item.userName\" [nzDatetime]=\"item.date\">\r\n      <nz-avatar nz-comment-avatar nzIcon=\"user\" [nzSrc]=\"item?.avatar\"></nz-avatar>\r\n      <nz-comment-content>\r\n        <p>{{ item.description }}</p>\r\n      </nz-comment-content>\r\n    </nz-comment>\r\n  </ng-template>\r\n</nz-list>\r\n<div *nzModalFooter>\r\n  <button nz-button nzType=\"primary\" (click)=\"onClose()\">Close\r\n  </button>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/good/good.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/good/good.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-box\">\n  <input type=\"text\" nz-input placeholder=\"Search name\" [(ngModel)]=\"searchValue\"/>\n  <button nz-button nzType=\"primary\" (click)=\"search()\">\n    Search\n  </button>\n  <button nz-button (click)=\"reset()\">Reset</button>\n</div>\n\n<button nz-button class=\"btn-add\" nzType=\"primary\" (click)=\"add()\">\n  <i nz-icon nzType=\"plus\" nzTheme=\"outline\"></i>Add\n</button>\n\n<nz-skeleton [nzActive]=\"true\" *ngIf=\"!list\" [nzParagraph]=\"{ rows: 10 }\"></nz-skeleton>\n<nz-table *ngIf=\"list\" #nzTable [nzData]=\"list\" [nzShowSizeChanger]=\"false\" nzSize=\"small\"\n          [nzBordered]=\"true\">\n  <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n  <tr>\n    <th nzShowSort nzSortKey=\"sort\">Sort</th>\n    <th nzShowSort nzSortKey=\"cateName\">CateName</th>\n    <th nzShowSort nzSortKey=\"name\">Name</th>\n    <th nzShowSort nzSortKey=\"price\">Price</th>\n    <th>Weight</th>\n    <th>Img</th>\n    <th>Action</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let data of nzTable.data\">\n    <td>{{ data.sort }}</td>\n    <td>{{ data.cateName }}</td>\n    <td>{{ data.name }}</td>\n    <td>{{ data.price }}</td>\n    <td>{{ data.weight }}</td>\n    <td (click)=\"onView(data?.img)\">\n      <img *ngIf=\"data?.img;else no\" [src]=\" data.img\">\n      <ng-template #no>\n        <img [src]=\" data.img\">\n      </ng-template>\n    </td>\n    <td>\n      <a (click)=\"reviewsRow(data.id)\">\n        <i nz-icon nzType=\"edit\" nzTheme=\"twotone\"></i>\n        Reviews</a> |\n      <a (click)=\"editRow(data)\">\n        <i nz-icon nzType=\"edit\" nzTheme=\"twotone\"></i>\n        Edit</a> |\n      <a (click)=\"onPhoto(data.id)\">\n        <i nz-icon nzType=\"edit\" nzTheme=\"twotone\"></i>\n        Photos</a> |\n      <a nz-popconfirm nzTitle=\"Are you sure to delete?\" (nzOnConfirm)=\"deleteRow(data.id)\">\n        <i nz-icon nzType=\"delete\" nzTheme=\"twotone\" [nzTwotoneColor]=\"'#eb2f96'\"></i>Delete</a>\n    </td>\n  </tr>\n  </tbody>\n</nz-table>\n<app-loading *ngIf=\"isLoading\"></app-loading>\n");

/***/ }),

/***/ "./src/app/pages/good/good-add/good-add.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/good/good-add/good-add.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ant-form-item {\n  margin-bottom: 8px !important;\n}\n\n::ng-deep.upload-preview {\n  height: 70px !important;\n}\n\n::ng-deep.ant-select-selection--single {\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ29vZC9nb29kLWFkZC9FOlxcV29ya1xcSW9uaWMgTW9iaWxlIEFwcFxcS2hpbWVzYXJhIFNpbGsgTWlsbHNcXGFwcC1iYWNrZW5kL3NyY1xcYXBwXFxwYWdlc1xcZ29vZFxcZ29vZC1hZGRcXGdvb2QtYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9nb29kL2dvb2QtYWRkL2dvb2QtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FETUE7RUFDRSxlQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nb29kL2dvb2QtYWRkL2dvb2QtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFudC1mb3JtLWl0ZW0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAudXBsb2FkLXByZXZpZXcge1xyXG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLzo6bmctZGVlcC5hbnQtbW9kYWwge1xyXG4vLyAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbi8vfVxyXG5cclxuOjpuZy1kZWVwLmFudC1zZWxlY3Qtc2VsZWN0aW9uLS1zaW5nbGUge1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG4iLCIuYW50LWZvcm0taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAudXBsb2FkLXByZXZpZXcge1xuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLmFudC1zZWxlY3Qtc2VsZWN0aW9uLS1zaW5nbGUge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/good/good-add/good-add.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/good/good-add/good-add.component.ts ***!
  \***********************************************************/
/*! exports provided: GoodAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodAddComponent", function() { return GoodAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");








let GoodAddComponent = class GoodAddComponent {
    constructor(fb, modal, storage, datePipe, subCateService, goodService) {
        this.fb = fb;
        this.modal = modal;
        this.storage = storage;
        this.datePipe = datePipe;
        this.subCateService = subCateService;
        this.goodService = goodService;
        this.basePath = 'uploads';
        this.isLoading = false;
        this.goodForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            sort: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            price: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            weight: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            shelfLife: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            storageConditions: [''],
            isHot: [false],
            isNew: [false],
        });
    }
    ngOnInit() {
        if (this.data) {
            this.goodForm.get('name').setValue(this.data.name);
            this.goodForm.get('sort').setValue(this.data.sort);
            this.goodForm.get('price').setValue(this.data.price);
            this.goodForm.get('weight').setValue(this.data.weight);
            this.goodForm.get('shelfLife').setValue(this.data.shelfLife);
            this.goodForm.get('storageConditions').setValue(this.data.storageConditions);
            this.goodForm.get('isHot').setValue(this.data.isHot);
            this.goodForm.get('isNew').setValue(this.data.isNew);
            this.imgUrl = this.data.img;
            this.description = this.data.description;
        }
        this.subCateService.getList().subscribe(r => {
            this.cateList = r;
            if (this.data) {
                this.selectedCate = this.data.subCateId;
            }
        });
    }
    down(event) {
        this.imgUrl = event;
    }
    del(event) {
        if (event) {
            this.imgUrl = '';
        }
    }
    cancel() {
        this.modal.destroy(false);
    }
    onOk() {
        this.isLoading = true;
        const model = new _shared__WEBPACK_IMPORTED_MODULE_3__["GoodsModel"]();
        model.name = this.goodForm.controls.name.value;
        model.sort = +this.goodForm.controls.sort.value;
        model.price = +this.goodForm.controls.price.value;
        model.weight = +this.goodForm.controls.weight.value;
        model.shelfLife = +this.goodForm.controls.shelfLife.value;
        model.storageConditions = this.goodForm.controls.storageConditions.value;
        model.isHot = this.goodForm.controls.isHot.value;
        model.isNew = this.goodForm.controls.isNew.value;
        model.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        model.description = this.description;
        model.subCateId = this.selectedCate;
        model.img = this.imgUrl;
        model.cateName = this.cateList.find(c => c.id === this.selectedCate).name;
        if (this.isEdit) {
            model.id = this.data.id;
            this.goodService.update(model).then(() => {
                this.isLoading = false;
                this.modal.close(true);
            });
        }
        else {
            this.goodService.addModel(model).then(() => {
                this.isLoading = false;
                this.modal.close(true);
            });
        }
    }
    editorCreated(quill) {
        const toolbar = quill.getModule('toolbar');
        toolbar.addHandler(this.imageHandler.bind(this));
        this.editor = quill;
    }
    imageHandler() {
        const img = document.createElement('input');
        img.setAttribute('type', 'file');
        img.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
        img.classList.add('ql-image');
        img.addEventListener('change', () => {
            const file = img.files[0];
            const path = `${this.basePath}/${new Date().getTime()}_${file.name}`;
            const fileRef = this.storage.ref(path);
            const task = this.storage.upload(path, file);
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
                fileRef.getDownloadURL().subscribe(url => {
                    const range = this.editor.getSelection(true);
                    this.editor.insertEmbed(range.index, 'image', url);
                });
            })).subscribe();
        });
        img.click();
    }
};
GoodAddComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_3__["SubCateService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_3__["GoodsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GoodAddComponent.prototype, "isEdit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GoodAddComponent.prototype, "data", void 0);
GoodAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-good-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./good-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/good/good-add/good-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./good-add.component.scss */ "./src/app/pages/good/good-add/good-add.component.scss")).default]
    })
], GoodAddComponent);



/***/ }),

/***/ "./src/app/pages/good/good-photo/good-photo.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/good/good-photo/good-photo.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i[nz-icon] {\n  font-size: 32px;\n  color: #999;\n}\n\n.ant-upload-text {\n  margin-top: 8px;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ29vZC9nb29kLXBob3RvL0U6XFxXb3JrXFxJb25pYyBNb2JpbGUgQXBwXFxLaGltZXNhcmEgU2lsayBNaWxsc1xcYXBwLWJhY2tlbmQvc3JjXFxhcHBcXHBhZ2VzXFxnb29kXFxnb29kLXBob3RvXFxnb29kLXBob3RvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9nb29kL2dvb2QtcGhvdG8vZ29vZC1waG90by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ29vZC9nb29kLXBob3RvL2dvb2QtcGhvdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpW256LWljb25dIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuLmFudC11cGxvYWQtdGV4dCB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcbiIsImlbbnotaWNvbl0ge1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4uYW50LXVwbG9hZC10ZXh0IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBjb2xvcjogIzY2Njtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/good/good-photo/good-photo.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/good/good-photo/good-photo.component.ts ***!
  \***************************************************************/
/*! exports provided: File, GoodPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodPhotoComponent", function() { return GoodPhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






class File {
}
let GoodPhotoComponent = class GoodPhotoComponent {
    constructor(modal, storage, photoService) {
        this.modal = modal;
        this.storage = storage;
        this.photoService = photoService;
        this.basePath = 'uploads';
        this.showUploadList = {
            showPreviewIcon: true,
            showRemoveIcon: true,
            hidePreviewIconInNonImage: true
        };
        this.previewVisible = false;
        this.handlePreview = (file) => {
            this.previewImage = file.url || file.thumbUrl;
            this.previewVisible = true;
        };
        this.customRemove = (file) => {
            const index = this.fileList.findIndex(f => f.name === file.name);
            this.fileList.splice(index, 1);
            const path = `${this.basePath}/${file.name}`;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this.photoService.delete(file.uid), this.storage.ref(path).delete()]).subscribe(r => {
                console.log('img delete');
            });
        };
        this.customReq = (item) => {
            const fileName = item.file.name;
            const path = `${this.basePath}/${fileName}`;
            const task = this.storage.upload(path, item.file);
            return task.then(snapshot => snapshot.ref.getDownloadURL())
                .then((url) => {
                this.photoService.addModel({ goodId: this.id, imgName: fileName, img: url }).then(r => {
                    const index = this.fileList.findIndex(f => f.name === fileName);
                    if (index > -1) {
                        this.fileList[index].uid = r.id;
                    }
                });
                item.onSuccess({}, item.file, {});
            })
                .catch((error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;
                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            });
        };
    }
    ngOnInit() {
        this.photoService.getListByParam('goodId', this.id).subscribe(result => {
            this.photoList = result;
            if (this.photoList && this.photoList.length > 0) {
                this.photoList.map(p => {
                    this.fileList = [];
                    this.fileList.push({ uid: p.id, name: p.imgName, status: 'done', url: p.img, thumbUrl: '' });
                });
            }
            else {
                this.fileList = [];
                console.log(this.fileList);
            }
        });
    }
    onClose() {
        this.modal.close(true);
    }
    deleteFileStorage(path) {
        this.storage.ref(path).delete().subscribe();
    }
};
GoodPhotoComponent.ctorParameters = () => [
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalRef"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["GoodPhotoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GoodPhotoComponent.prototype, "id", void 0);
GoodPhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-good-photo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./good-photo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/good/good-photo/good-photo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./good-photo.component.scss */ "./src/app/pages/good/good-photo/good-photo.component.scss")).default]
    })
], GoodPhotoComponent);



/***/ }),

/***/ "./src/app/pages/good/good-preview/good-preview.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/good/good-preview/good-preview.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dvb2QvZ29vZC1wcmV2aWV3L2dvb2QtcHJldmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/good/good-preview/good-preview.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/good/good-preview/good-preview.component.ts ***!
  \*******************************************************************/
/*! exports provided: GoodPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodPreviewComponent", function() { return GoodPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GoodPreviewComponent = class GoodPreviewComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GoodPreviewComponent.prototype, "url", void 0);
GoodPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-good-preview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./good-preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/good/good-preview/good-preview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./good-preview.component.scss */ "./src/app/pages/good/good-preview/good-preview.component.scss")).default]
    })
], GoodPreviewComponent);



/***/ }),

/***/ "./src/app/pages/good/good-reviews/good-reviews.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/good/good-reviews/good-reviews.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dvb2QvZ29vZC1yZXZpZXdzL2dvb2QtcmV2aWV3cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/good/good-reviews/good-reviews.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/good/good-reviews/good-reviews.component.ts ***!
  \*******************************************************************/
/*! exports provided: GoodReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodReviewsComponent", function() { return GoodReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/model */ "./src/app/shared/model/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");





let GoodReviewsComponent = class GoodReviewsComponent {
    constructor(gService, userService, pageService, modal) {
        this.gService = gService;
        this.userService = userService;
        this.pageService = pageService;
        this.modal = modal;
    }
    ngOnInit() {
        this.pageService.getList([this.gService.getListByParam('goodId', this.id), this.userService.getList()]).then(results => {
            this.list = results[0];
            this.userList = results[1];
            this.list = this.list.map(g => {
                const name = this.userList.find(u => u.uid === g.uid).displayName;
                return new _shared_model__WEBPACK_IMPORTED_MODULE_2__["GoodReviewsModel"](Object.assign({ userName: name }, g));
            });
        });
    }
    onClose() {
        this.modal.close(true);
    }
};
GoodReviewsComponent.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_3__["GoodReviewsService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_3__["PageDataService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_4__["NzModalRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GoodReviewsComponent.prototype, "id", void 0);
GoodReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-good-reviews',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./good-reviews.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/good/good-reviews/good-reviews.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./good-reviews.component.scss */ "./src/app/pages/good/good-reviews/good-reviews.component.scss")).default]
    })
], GoodReviewsComponent);



/***/ }),

/***/ "./src/app/pages/good/good-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/good/good-routing.module.ts ***!
  \***************************************************/
/*! exports provided: GoodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodRoutingModule", function() { return GoodRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _good_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./good.component */ "./src/app/pages/good/good.component.ts");




const routes = [{ path: '', component: _good_component__WEBPACK_IMPORTED_MODULE_3__["GoodComponent"] }];
let GoodRoutingModule = class GoodRoutingModule {
};
GoodRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GoodRoutingModule);



/***/ }),

/***/ "./src/app/pages/good/good.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/good/good.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ29vZC9FOlxcV29ya1xcSW9uaWMgTW9iaWxlIEFwcFxcS2hpbWVzYXJhIFNpbGsgTWlsbHNcXGFwcC1iYWNrZW5kL3NyY1xcYXBwXFxwYWdlc1xcZ29vZFxcZ29vZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ29vZC9nb29kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ29vZC9nb29kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuIiwiaW1nIHtcbiAgd2lkdGg6IDYwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/good/good.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/good/good.component.ts ***!
  \**********************************************/
/*! exports provided: GoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodComponent", function() { return GoodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _good_add_good_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./good-add/good-add.component */ "./src/app/pages/good/good-add/good-add.component.ts");
/* harmony import */ var _good_reviews_good_reviews_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./good-reviews/good-reviews.component */ "./src/app/pages/good/good-reviews/good-reviews.component.ts");
/* harmony import */ var _good_photo_good_photo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./good-photo/good-photo.component */ "./src/app/pages/good/good-photo/good-photo.component.ts");
/* harmony import */ var _good_preview_good_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./good-preview/good-preview.component */ "./src/app/pages/good/good-preview/good-preview.component.ts");








let GoodComponent = class GoodComponent {
    constructor(goodService, subCateService, pageService, modalService, mService) {
        this.goodService = goodService;
        this.subCateService = subCateService;
        this.pageService = pageService;
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
        this.goodService.getList().subscribe(result => {
            this.allList = result;
            this.list = this.allList.sort((a, b) => b.sort - a.sort);
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
        this.isLoading = true;
        this.list = this.list.filter(d => d.id !== id);
        this.goodService.delete(id).then(() => {
            this.modalService.success('delete success');
            this.isLoading = false;
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
            nzTitle: isEdit ? 'Edit Goods' : 'Add Goods',
            nzContent: _good_add_good_add_component__WEBPACK_IMPORTED_MODULE_4__["GoodAddComponent"],
            nzComponentParams: {
                isEdit,
                data
            },
            nzWidth: '750px'
        });
        modal.afterClose.subscribe(result => {
            if (result) {
                this.bindData();
            }
        });
    }
    reviewsRow(id) {
        this.mService.create({
            nzTitle: 'Good Reviews',
            nzContent: _good_reviews_good_reviews_component__WEBPACK_IMPORTED_MODULE_5__["GoodReviewsComponent"],
            nzComponentParams: {
                id,
            },
            nzWidth: '700px'
        });
    }
    onPhoto(id) {
        this.mService.create({
            nzTitle: 'Good Photos',
            nzContent: _good_photo_good_photo_component__WEBPACK_IMPORTED_MODULE_6__["GoodPhotoComponent"],
            nzComponentParams: {
                id,
            },
            nzWidth: '700px'
        });
    }
    onView(url) {
        this.mService.create({
            nzContent: _good_preview_good_preview_component__WEBPACK_IMPORTED_MODULE_7__["GoodPreviewComponent"],
            nzComponentParams: {
                url,
            },
            nzWidth: '470px', nzFooter: null
        });
    }
};
GoodComponent.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["GoodsService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["SubCateService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["PageDataService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
    { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"] }
];
GoodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-good',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./good.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/good/good.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./good.component.scss */ "./src/app/pages/good/good.component.scss")).default]
    })
], GoodComponent);



/***/ }),

/***/ "./src/app/pages/good/good.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/good/good.module.ts ***!
  \*******************************************/
/*! exports provided: GoodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodModule", function() { return GoodModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _good_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./good-routing.module */ "./src/app/pages/good/good-routing.module.ts");
/* harmony import */ var _good_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./good.component */ "./src/app/pages/good/good.component.ts");
/* harmony import */ var _good_add_good_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./good-add/good-add.component */ "./src/app/pages/good/good-add/good-add.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/file-upload/file-upload.module */ "./src/app/components/file-upload/file-upload.module.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
/* harmony import */ var _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/loading/loading.module */ "./src/app/components/loading/loading.module.ts");
/* harmony import */ var _good_reviews_good_reviews_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./good-reviews/good-reviews.component */ "./src/app/pages/good/good-reviews/good-reviews.component.ts");
/* harmony import */ var _good_photo_good_photo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./good-photo/good-photo.component */ "./src/app/pages/good/good-photo/good-photo.component.ts");
/* harmony import */ var _good_preview_good_preview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./good-preview/good-preview.component */ "./src/app/pages/good/good-preview/good-preview.component.ts");













let GoodModule = class GoodModule {
};
GoodModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_good_component__WEBPACK_IMPORTED_MODULE_4__["GoodComponent"], _good_add_good_add_component__WEBPACK_IMPORTED_MODULE_5__["GoodAddComponent"], _good_reviews_good_reviews_component__WEBPACK_IMPORTED_MODULE_10__["GoodReviewsComponent"], _good_photo_good_photo_component__WEBPACK_IMPORTED_MODULE_11__["GoodPhotoComponent"], _good_preview_good_preview_component__WEBPACK_IMPORTED_MODULE_12__["GoodPreviewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _good_routing_module__WEBPACK_IMPORTED_MODULE_3__["GoodRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _components_file_upload_file_upload_module__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_8__["QuillModule"],
            _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_9__["LoadingModule"],
        ],
        entryComponents: [_good_add_good_add_component__WEBPACK_IMPORTED_MODULE_5__["GoodAddComponent"], _good_reviews_good_reviews_component__WEBPACK_IMPORTED_MODULE_10__["GoodReviewsComponent"], _good_photo_good_photo_component__WEBPACK_IMPORTED_MODULE_11__["GoodPhotoComponent"], _good_preview_good_preview_component__WEBPACK_IMPORTED_MODULE_12__["GoodPreviewComponent"]]
    })
], GoodModule);



/***/ })

}]);
//# sourceMappingURL=good-good-module-es2015.js.map