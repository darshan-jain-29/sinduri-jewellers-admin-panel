(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cate-relation-cate-relation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cate-relation/cate-relation.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cate-relation/cate-relation.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nz-skeleton [nzActive]=\"true\" *ngIf=\"!cateList\" [nzParagraph]=\"{ rows: 10 }\"></nz-skeleton>\n<nz-tabset style=\"height:100%;\" nzTabPosition=\"left\">\n  <nz-tab *ngFor=\"let cate of cateList\" [nzTitle]=\"cate.name\" (nzSelect)=\"onSelect(cate.id)\">\n    <nz-checkbox-wrapper style=\"width: 100%;\">\n      <div nz-row>\n        <div nz-col nzSpan=\"6\" *ngFor=\"let sub of subCateList\">\n          <label nz-checkbox [nzValue]=\"sub.id\" [(ngModel)]=\"sub.checked\">{{sub.name}}</label>\n          <img [src]=\"sub.img\">\n        </div>\n      </div>\n    </nz-checkbox-wrapper>\n\n    <button nz-button nzValue=\"large\" nzType=\"primary\" (click)=\"onSave()\" [nzLoading]=\"isLoading\">Save</button>\n  </nz-tab>\n</nz-tabset>\n");

/***/ }),

/***/ "./src/app/pages/cate-relation/cate-relation-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cate-relation/cate-relation-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: CateRelationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateRelationRoutingModule", function() { return CateRelationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cate_relation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cate-relation.component */ "./src/app/pages/cate-relation/cate-relation.component.ts");




const routes = [{ path: '', component: _cate_relation_component__WEBPACK_IMPORTED_MODULE_3__["CateRelationComponent"] }];
let CateRelationRoutingModule = class CateRelationRoutingModule {
};
CateRelationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CateRelationRoutingModule);



/***/ }),

/***/ "./src/app/pages/cate-relation/cate-relation.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/cate-relation/cate-relation.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 60px;\n}\n\n[nz-button] {\n  margin-top: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZS1yZWxhdGlvbi9FOlxcV29ya1xcSW9uaWMgTW9iaWxlIEFwcFxcS2hpbWVzYXJhIFNpbGsgTWlsbHNcXGFwcC1iYWNrZW5kL3NyY1xcYXBwXFxwYWdlc1xcY2F0ZS1yZWxhdGlvblxcY2F0ZS1yZWxhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZS1yZWxhdGlvbi9jYXRlLXJlbGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGUtcmVsYXRpb24vY2F0ZS1yZWxhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbltuei1idXR0b25dIHtcclxuICBtYXJnaW4tdG9wOiAzOHB4O1xyXG59XHJcbiIsImltZyB7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG5bbnotYnV0dG9uXSB7XG4gIG1hcmdpbi10b3A6IDM4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/cate-relation/cate-relation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/cate-relation/cate-relation.component.ts ***!
  \****************************************************************/
/*! exports provided: CateRelationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateRelationComponent", function() { return CateRelationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let CateRelationComponent = class CateRelationComponent {
    constructor(pageService, cateService, subCateService, relationService, modalService) {
        this.pageService = pageService;
        this.cateService = cateService;
        this.subCateService = subCateService;
        this.relationService = relationService;
        this.modalService = modalService;
        this.isLoading = false;
        this.pageService.getList([this.cateService.getList(), this.subCateService.getList(), this.relationService.getList()]).then(results => {
            this.cateList = results[0];
            this.subCateList = results[1];
            this.relationList = results[2];
            if (this.cateList.length > 0) {
                this.selectCate = this.cateList[0].id;
                this.setChecked(this.cateList[0].id);
            }
        });
    }
    ngOnInit() {
    }
    setChecked(id) {
        this.subCateList = this.subCateList.map(sub => {
            const relation = this.relationList.find(r => r.subCateId === sub.id && r.cateId === id);
            const subModel = new _shared__WEBPACK_IMPORTED_MODULE_2__["SubCateModel"](sub);
            if (relation) {
                subModel.relationId = relation.id;
                subModel.checked = true;
            }
            else {
                subModel.checked = false;
            }
            return subModel;
        });
    }
    onSelect(id) {
        this.selectCate = id;
        this.relationService.getList().subscribe(r => {
            this.relationList = r;
            this.setChecked(id);
        });
    }
    onSave() {
        const checked = this.subCateList.some(sub => sub.checked);
        if (!checked) {
            this.modalService.warning('Please select sub category');
            return;
        }
        this.isLoading = true;
        const addArray = [];
        this.subCateList.map(sub => {
            if (sub.checked && !sub.relationId) {
                addArray.push(this.relationService.addModel({ cateId: this.selectCate, subCateId: sub.id }));
            }
            if (!sub.checked && sub.relationId) {
                addArray.push(this.relationService.delete(sub.relationId));
            }
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(addArray).subscribe(() => {
            this.isLoading = false;
            this.modalService.success('add success!');
        });
    }
};
CateRelationComponent.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["PageDataService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["CateService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["SubCateService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["CateRelationService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["ModalService"] }
];
CateRelationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cate-relation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cate-relation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cate-relation/cate-relation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cate-relation.component.scss */ "./src/app/pages/cate-relation/cate-relation.component.scss")).default]
    })
], CateRelationComponent);



/***/ }),

/***/ "./src/app/pages/cate-relation/cate-relation.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/cate-relation/cate-relation.module.ts ***!
  \*************************************************************/
/*! exports provided: CateRelationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateRelationModule", function() { return CateRelationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cate_relation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cate-relation-routing.module */ "./src/app/pages/cate-relation/cate-relation-routing.module.ts");
/* harmony import */ var _cate_relation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cate-relation.component */ "./src/app/pages/cate-relation/cate-relation.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






let CateRelationModule = class CateRelationModule {
};
CateRelationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_cate_relation_component__WEBPACK_IMPORTED_MODULE_4__["CateRelationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _cate_relation_routing_module__WEBPACK_IMPORTED_MODULE_3__["CateRelationRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], CateRelationModule);



/***/ })

}]);
//# sourceMappingURL=cate-relation-cate-relation-module-es2015.js.map