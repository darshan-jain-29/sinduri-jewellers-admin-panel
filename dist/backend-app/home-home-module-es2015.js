(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-box\">\n  <input type=\"text\" nz-input placeholder=\"Search name\" [(ngModel)]=\"searchValue\"/>\n  <button nz-button nzType=\"primary\" (click)=\"search()\" class=\"search-button\">\n    Search\n  </button>\n  <button nz-button (click)=\"reset()\">Reset</button>\n</div>\n\n<button nz-button class=\"btn-add\" nzType=\"primary\">\n  <i nz-icon nzType=\"file-add\" nzTheme=\"outline\"></i>Add\n</button>\n\n<!--[nzLoading]=\"true\"-->\n<nz-table #nzTable [nzData]=\"listOfDisplayData\" [nzShowSizeChanger]=\"false\" [nzBordered]=\"true\">\n  <thead (nzSortChange)=\"sort($event)\" nzSingleSort>\n  <tr>\n    <th nzShowSort nzSortKey=\"name\">\n      Name\n    </th>\n    <th nzShowSort nzSortKey=\"age\">Age</th>\n    <th nzShowSort nzSortKey=\"address\">Address</th>\n    <th>Action</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let data of nzTable.data\">\n    <td>{{ data.name }}</td>\n    <td>{{ data.age }}</td>\n    <td>{{ data.address }}</td>\n    <td>\n      <a nz-popconfirm nzTitle=\"Sure to delete?\" (nzOnConfirm)=\"deleteRow(data.id)\">\n        <i nz-icon nzType=\"edit\" nzTheme=\"twotone\"></i>\n        Edit</a> |\n      <a nz-popconfirm nzTitle=\"Sure to delete?\" (nzOnConfirm)=\"deleteRow(data.id)\">\n        <i nz-icon nzType=\"delete\" nzTheme=\"twotone\" [nzTwotoneColor]=\"'#eb2f96'\"></i>Delete</a>\n    </td>\n  </tr>\n  </tbody>\n</nz-table>\n");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");




const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-box {\n  padding: 8px;\n}\n\n.search-box input {\n  width: auto;\n  margin-bottom: 8px;\n  margin-right: 16px;\n}\n\n.search-box button {\n  width: 90px;\n}\n\n.search-button {\n  margin-right: 8px;\n}\n\n.btn-add {\n  margin-bottom: 16px;\n  width: 90px;\n}\n\n[nz-icon] {\n  margin-right: 6px;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9FOlxcV29ya1xcSW9uaWMgTW9iaWxlIEFwcFxcS2hpbWVzYXJhIFNpbGsgTWlsbHNcXGFwcC1iYWNrZW5kL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1ib3gge1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3ggaW5wdXQge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuLmJ0bi1hZGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbn1cclxuXHJcbltuei1pY29uXSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcbiIsIi5zZWFyY2gtYm94IHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uc2VhcmNoLWJveCBpbnB1dCB7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLnNlYXJjaC1ib3ggYnV0dG9uIHtcbiAgd2lkdGg6IDkwcHg7XG59XG5cbi5zZWFyY2gtYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5idG4tYWRkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgd2lkdGg6IDkwcHg7XG59XG5cbltuei1pY29uXSB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBmb250LXNpemU6IDI0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.searchValue = '';
        this.sortName = null;
        this.sortValue = null;
        this.listOfSearchAddress = [];
        this.listOfData = [
            {
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            },
            {
                name: 'Jim Red',
                age: 32,
                address: 'London No. 2 Lake Park'
            }
        ];
        this.listOfDisplayData = [...this.listOfData];
        console.log(this.listOfDisplayData);
    }
    ngOnInit() {
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
    filterAddressChange(value) {
        this.listOfSearchAddress = value;
        this.search();
    }
    search() {
        const filterFunc = (item) => {
            return ((this.listOfSearchAddress.length
                ? this.listOfSearchAddress.some(address => item.address.indexOf(address) !== -1)
                : true) && item.name.indexOf(this.searchValue) !== -1);
        };
        const data = this.listOfData.filter((item) => filterFunc(item));
        this.listOfDisplayData = data.sort((a, b) => this.sortValue === 'ascend'
            ? a[this.sortName] <= b[this.sortName] ? -1 : 1
            : b[this.sortName] > a[this.sortName]
                ? 1
                : -1);
    }
    deleteRow(id) {
        this.listOfData = this.listOfData.filter(d => d.id !== id);
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");







let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzTableModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzButtonModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzInputModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_6__["NzPopconfirmModule"]
        ]
    })
], HomeModule);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map