(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["address-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-box\">\n  <input type=\"text\" nz-input placeholder=\"Search UserName\" [(ngModel)]=\"userName\"/>\n  <input type=\"text\" nz-input placeholder=\"Search Address\" [(ngModel)]=\"address\"/>\n  <button nz-button nzType=\"primary\" (click)=\"search()\">\n    Search\n  </button>\n  <button nz-button (click)=\"reset()\">Reset</button>\n</div>\n<nz-skeleton [nzActive]=\"true\" *ngIf=\"!list\" [nzParagraph]=\"{ rows: 6 }\"></nz-skeleton>\n<nz-table *ngIf=\"list\" #nzTable [nzData]=\"list\" [nzShowSizeChanger]=\"false\" nzSize=\"small\" [nzBordered]=\"true\">\n  <thead>\n  <tr>\n    <th>UserName</th>\n    <th>Phone</th>\n    <th>Address</th>\n    <th>Street</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let data of nzTable.data\">\n    <td>{{ data.userName }}</td>\n    <td>{{ data.phone }}</td>\n    <td>{{data.address}}</td>\n    <td>{{data.street}}</td>\n  </tr>\n  </tbody>\n</nz-table>\n");

/***/ }),

/***/ "./src/app/pages/address/address-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/address/address-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddressRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressRoutingModule", function() { return AddressRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _address_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address.component */ "./src/app/pages/address/address.component.ts");




const routes = [{ path: '', component: _address_component__WEBPACK_IMPORTED_MODULE_3__["AddressComponent"] }];
let AddressRoutingModule = class AddressRoutingModule {
};
AddressRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AddressRoutingModule);



/***/ }),

/***/ "./src/app/pages/address/address.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/address/address.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/address/address.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/address/address.component.ts ***!
  \****************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");



let AddressComponent = class AddressComponent {
    constructor(addressService, usersService, pageService) {
        this.addressService = addressService;
        this.usersService = usersService;
        this.pageService = pageService;
        this.allList = [];
        this.userName = '';
        this.address = '';
    }
    ngOnInit() {
        this.pageService.getList([this.addressService.getList(), this.usersService.getList()]).then(results => {
            this.allList = results[0];
            this.userList = results[1];
            this.allList = this.allList.map(a => {
                const name = this.userList.find(u => u.uid === a.userId).displayName;
                return new _shared__WEBPACK_IMPORTED_MODULE_2__["AddressModel"](Object.assign({ userName: name }, a));
            });
            this.list = this.allList;
        });
    }
    reset() {
        this.userName = '';
        this.address = '';
        this.search();
    }
    search() {
        this.list = this.allList.filter(d => d.userName.toLowerCase().indexOf(this.userName.toLowerCase()) !== -1 &&
            d.address.toLowerCase().indexOf(this.address.toLowerCase()) !== -1);
    }
};
AddressComponent.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["AddressService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_2__["PageDataService"] }
];
AddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-address',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./address.component.scss */ "./src/app/pages/address/address.component.scss")).default]
    })
], AddressComponent);



/***/ }),

/***/ "./src/app/pages/address/address.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/address/address.module.ts ***!
  \*************************************************/
/*! exports provided: AddressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModule", function() { return AddressModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _address_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address-routing.module */ "./src/app/pages/address/address-routing.module.ts");
/* harmony import */ var _address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./address.component */ "./src/app/pages/address/address.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






let AddressModule = class AddressModule {
};
AddressModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_address_component__WEBPACK_IMPORTED_MODULE_4__["AddressComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _address_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddressRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], AddressModule);



/***/ })

}]);
//# sourceMappingURL=address-address-module-es2015.js.map