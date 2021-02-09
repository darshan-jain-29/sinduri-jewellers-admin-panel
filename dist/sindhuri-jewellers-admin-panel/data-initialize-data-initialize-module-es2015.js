(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-initialize-data-initialize-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/data-initialize/data-initialize.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/data-initialize/data-initialize.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box\">\r\n  <div class=\"box-wrap\">\r\n    <table *ngFor=\"let data of dataList\">\r\n      <tr>\r\n        <td>Index:</td>\r\n        <td>{{data.sort}}</td>\r\n        <td>TableName:</td>\r\n        <td>{{data.tableName}}</td>\r\n        <td style=\"text-align: right\">\r\n          <button nz-button nzType=\"primary\" (click)=\"onInit(data)\" [disabled]=\"data.isInit\">Init Data</button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n<app-loading *ngIf=\"loading\"></app-loading>\r\n");

/***/ }),

/***/ "./src/app/pages/data-initialize/data-initialize-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/data-initialize/data-initialize-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DataInitializeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataInitializeRoutingModule", function() { return DataInitializeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_initialize_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-initialize.component */ "./src/app/pages/data-initialize/data-initialize.component.ts");




const routes = [{ path: '', component: _data_initialize_component__WEBPACK_IMPORTED_MODULE_3__["DataInitializeComponent"] }];
let DataInitializeRoutingModule = class DataInitializeRoutingModule {
};
DataInitializeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DataInitializeRoutingModule);



/***/ }),

/***/ "./src/app/pages/data-initialize/data-initialize.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/data-initialize/data-initialize.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.box-wrap {\n  flex: 1;\n  padding: 50px;\n}\n.box-wrap table {\n  border-collapse: collapse;\n  width: 100%;\n}\n.box-wrap table td, .box-wrap table th {\n  border: 1px solid #ddd;\n  padding: 3px;\n  width: 20%;\n}\n.box-wrap table tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n.box-wrap table tr:hover {\n  background-color: #ddd;\n}\n.box-wrap table th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGF0YS1pbml0aWFsaXplL0U6XFxXb3JrXFxJb25pYyBNb2JpbGUgQXBwXFxLaGltZXNhcmEgU2lsayBNaWxsc1xcYXBwLWJhY2tlbmQvc3JjXFxhcHBcXHBhZ2VzXFxkYXRhLWluaXRpYWxpemVcXGRhdGEtaW5pdGlhbGl6ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGF0YS1pbml0aWFsaXplL2RhdGEtaW5pdGlhbGl6ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7QUNDSjtBRENJO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDQ047QURFSTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNBTjtBREdJO0VBQ0UseUJBQUE7QUNETjtBRElJO0VBQ0Usc0JBQUE7QUNGTjtBREtJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXRhLWluaXRpYWxpemUvZGF0YS1pbml0aWFsaXplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAmLXdyYXAge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcblxyXG4gICAgdGFibGUge1xyXG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB0ZCwgdGFibGUgdGgge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIH1cclxuXHJcbiAgICB0YWJsZSB0cjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUgdGgge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYm94LXdyYXAge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLmJveC13cmFwIHRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYm94LXdyYXAgdGFibGUgdGQsIC5ib3gtd3JhcCB0YWJsZSB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDNweDtcbiAgd2lkdGg6IDIwJTtcbn1cbi5ib3gtd3JhcCB0YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuLmJveC13cmFwIHRhYmxlIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cbi5ib3gtd3JhcCB0YWJsZSB0aCB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/data-initialize/data-initialize.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/data-initialize/data-initialize.component.ts ***!
  \********************************************************************/
/*! exports provided: DataInitializeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataInitializeComponent", function() { return DataInitializeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let DataInitializeComponent = class DataInitializeComponent {
    constructor(modalService, datePipe, payService, couponService, bannerService, noticeService, deliveryService, goodsService, orderService, orderDetailService, cateRelationService, owsService, authService, cateService, subCateService, dataInitService) {
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.payService = payService;
        this.couponService = couponService;
        this.bannerService = bannerService;
        this.noticeService = noticeService;
        this.deliveryService = deliveryService;
        this.goodsService = goodsService;
        this.orderService = orderService;
        this.orderDetailService = orderDetailService;
        this.cateRelationService = cateRelationService;
        this.owsService = owsService;
        this.authService = authService;
        this.cateService = cateService;
        this.subCateService = subCateService;
        this.dataInitService = dataInitService;
        this.loading = false;
        this.dataList = [
            { sort: 1, tableName: 'banner', isInit: false },
            { sort: 2, tableName: 'notice', isInit: false },
            { sort: 3, tableName: 'coupon', isInit: false },
            { sort: 4, tableName: 'express', isInit: false },
            { sort: 5, tableName: 'ows', isInit: false },
            { sort: 5, tableName: 'pays', isInit: false },
            { sort: 6, tableName: 'cate', isInit: false },
            { sort: 7, tableName: 'subcate', isInit: false },
            { sort: 8, tableName: 'caterelation', isInit: false },
            { sort: 9, tableName: 'product', isInit: false },
            { sort: 10, tableName: 'order', isInit: false }
        ];
    }
    ngOnInit() {
    }
    onInit(model) {
        if (_shared__WEBPACK_IMPORTED_MODULE_4__["ConfigModel"].isTest) {
            this.modalService.error(_shared__WEBPACK_IMPORTED_MODULE_4__["ConfigModel"].testInfo);
            return;
        }
        if (model.tableName === 'banner') {
            this.addBanner();
        }
        if (model.tableName === 'coupon') {
            this.addCoupon();
        }
        if (model.tableName === 'notice') {
            this.addNotice();
        }
        if (model.tableName === 'pays') {
            this.addPay();
        }
        if (model.tableName === 'express') {
            this.addExpress();
        }
        if (model.tableName === 'ows') {
            this.addOws();
        }
        if (model.tableName === 'cate') {
            this.addCate();
        }
        if (model.tableName === 'subcate') {
            this.addSubCate();
        }
        if (model.tableName === 'caterelation') {
            this.addCateRelation();
        }
        if (model.tableName === 'product') {
            this.addProduct();
        }
        if (model.tableName === 'order') {
            this.addOrderList();
        }
        model.isInit = true;
    }
    addBanner() {
        this.addModel(this.dataInitService.getBannerList(), this.bannerService);
    }
    addNotice() {
        this.addModel(this.dataInitService.getNoticeList(), this.noticeService);
    }
    addCoupon() {
        this.addModel(this.dataInitService.getDiscountList(), this.couponService);
    }
    addPay() {
        this.addModel(this.dataInitService.getPayList(), this.payService);
    }
    addExpress() {
        this.addModel(this.dataInitService.getExpressList(), this.deliveryService);
    }
    addCate() {
        this.addModel(this.dataInitService.getCateList(), this.cateService);
    }
    addSubCate() {
        this.addModel(this.dataInitService.getSubCateList(), this.subCateService);
    }
    addCateRelation() {
        this.loading = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.cateService.getList(),
            this.subCateService.getList()]).subscribe(results => {
            this.cateList = results[0];
            this.subList = results[1];
            const list = [];
            this.cateList.map(cate => {
                for (let i = 0; i < 6; i++) {
                    const index = Math.ceil(Math.random() * (this.subList.length - 1));
                    const model = new _shared__WEBPACK_IMPORTED_MODULE_4__["CateRelationModel"]({ cateId: cate.id, subCateId: this.subList[index].id });
                    list.push(this.cateRelationService.addModel(model));
                }
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(list).subscribe(r => {
                this.loading = false;
                this.modalService.success('success');
            });
        }, error => {
            this.loading = false;
            this.modalService.error(error);
        });
    }
    addOws() {
        this.addModel(this.dataInitService.getOwsList(), this.owsService);
    }
    addProduct() {
        this.loading = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.dataInitService.getProductList(), this.subCateService.getList()]).subscribe(results => {
            this.productList = results[0];
            this.subList = results[1];
            const list = [];
            this.productList.map(p => {
                delete p.id;
                const subModel = this.subList.find(sub => p.cateName === sub.name);
                p.subCateId = subModel.id;
                p.cateName = subModel.name;
                list.push(this.goodsService.addModel(p));
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(list).subscribe(r => {
                this.loading = false;
                this.modalService.success('success');
            });
        });
    }
    addOrderList() {
        this.loading = true;
        const list = Array.from({ length: 30 }, (v, i) => i).map(a => this.addOrder());
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(list).subscribe(r => {
            this.loading = false;
            this.modalService.success('success');
        }, error => {
            this.loading = false;
            this.modalService.error(error);
        });
    }
    addOrder() {
        return this.goodsService.getList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(goods => {
            const list = this.generateOrderDetailList('$orderId$', goods);
            const order = this.generateOrder(list);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.orderService.addModel(order)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(orderResult => {
                list.forEach(d => d.orderId = orderResult.id);
                return list.map(d => this.orderDetailService.addModel(d));
            }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["timeout"])(1000 * 30));
    }
    generateOrder(gList) {
        const statusArray = ['start', 'process', 'delivery', 'finish', 'cancel'];
        const orderModel = new _shared__WEBPACK_IMPORTED_MODULE_4__["OrderModel"]();
        orderModel.orderNo = new Date().getTime().toString();
        orderModel.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        orderModel.num = gList.map(g => g.num).reduce((p, c) => p + c, 0);
        orderModel.amount = gList.map(g => g.num * g.detailPrice).reduce((p, c) => p + c, 0);
        orderModel.userId = this.authService.user.uid;
        orderModel.status = statusArray[Math.floor(Math.random() * statusArray.length)];
        orderModel.userName = this.authService.user.displayName;
        orderModel.address = `Chicago 1900 Green Street`;
        orderModel.delivery = 'UPS';
        orderModel.deliveryDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        orderModel.pay = 'Cash on Delivery';
        orderModel.payDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
        orderModel.payDiscount = 0;
        orderModel.discount = 0;
        orderModel.freight = 0;
        orderModel.total = orderModel.amount + orderModel.discount + orderModel.freight;
        return orderModel;
    }
    generateOrderDetailList(orderId, goodList) {
        const detailList = [];
        const nums = Math.floor(Math.random() * 6) + 1;
        for (let i = 0; i < nums; i++) {
            const good = goodList[Math.floor(Math.random() * goodList.length)];
            const num = Math.floor(Math.random() * 5) + 1;
            detailList.push(new _shared__WEBPACK_IMPORTED_MODULE_4__["OrderDetailModel"]({ orderId, goodId: good.id, num, detailPrice: good.price, amount: (good.price * num).toFixed(2) }));
        }
        return detailList;
    }
    addModel(obs, baseService) {
        this.loading = true;
        obs.subscribe(result => {
            const list = result.map(p => {
                if (p.hasOwnProperty('id')) {
                    delete p.id;
                }
                return baseService.addModel(p);
            });
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(list).subscribe(r => {
                this.loading = false;
                this.modalService.success('success');
            });
        }, error => {
            this.loading = false;
            this.modalService.error(error);
        });
    }
};
DataInitializeComponent.ctorParameters = () => [
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["PayService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["CouponsService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["BannerService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["NoticeService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["DeliveryService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["GoodsService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["OrderDetailService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["CateRelationService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["OwsService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["CateService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["SubCateService"] },
    { type: _shared__WEBPACK_IMPORTED_MODULE_4__["DataInitService"] }
];
DataInitializeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-data-initialize',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./data-initialize.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/data-initialize/data-initialize.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./data-initialize.component.scss */ "./src/app/pages/data-initialize/data-initialize.component.scss")).default]
    })
], DataInitializeComponent);



/***/ }),

/***/ "./src/app/pages/data-initialize/data-initialize.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/data-initialize/data-initialize.module.ts ***!
  \*****************************************************************/
/*! exports provided: DataInitializeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataInitializeModule", function() { return DataInitializeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _data_initialize_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-initialize-routing.module */ "./src/app/pages/data-initialize/data-initialize-routing.module.ts");
/* harmony import */ var _data_initialize_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-initialize.component */ "./src/app/pages/data-initialize/data-initialize.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/loading/loading.module */ "./src/app/components/loading/loading.module.ts");







let DataInitializeModule = class DataInitializeModule {
};
DataInitializeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_data_initialize_component__WEBPACK_IMPORTED_MODULE_4__["DataInitializeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _data_initialize_routing_module__WEBPACK_IMPORTED_MODULE_3__["DataInitializeRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _components_loading_loading_module__WEBPACK_IMPORTED_MODULE_6__["LoadingModule"]
        ]
    })
], DataInitializeModule);



/***/ })

}]);
//# sourceMappingURL=data-initialize-data-initialize-module-es2015.js.map