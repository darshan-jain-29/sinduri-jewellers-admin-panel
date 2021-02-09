(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div nz-row>\n  </div>\n  <div class=\"top\">\n    <a href=\"https://ionic-template-web.firebaseapp.com/\" target=\"_blank\">\n      <img class=\"logo\" src=\"assets/img/logo.png\" alt=\"Sinduri Jewellers Admin Panel\">\n      <span class=\"title\">Sinduri Jewellers Admin Panel</span>\n    </a>\n  </div>\n  <div class=\"form\">\n    <form nz-form [formGroup]=\"loginForm\">\n      <nz-form-item>\n        <nz-form-control nzErrorTip=\" please enter a valid email!\">\n          <nz-input-group nzPrefixIcon=\"mail\">\n            <input type=\"text\" nz-input nzSize=\"large\" formControlName=\"email\" placeholder=\"email\"/>\n          </nz-input-group>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-control nzErrorTip=\"Password length at least 6!\">\n          <nz-input-group nzPrefixIcon=\"lock\">\n            <input type=\"password\" nz-input nzSize=\"large\" formControlName=\"pwd\" placeholder=\"Password\"/>\n          </nz-input-group>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-control>\n          <label nz-checkbox formControlName=\"remember\">\n            <span style=\"color: white\">Remember</span>\n          </label>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-control style=\"text-align: center\">\n          <button nz-button class=\"login-form-button\" nzType=\"primary\"\n                  [nzLoading]=\"isLoading\" [disabled]=\"!loginForm.valid\" (click)=\"onLogin()\">\n            Log In\n          </button>\n          <button nz-button class=\"login-form-button\" nzType=\"primary\" routerLink=\"/sign-up\">Sign Up</button>\n        </nz-form-control>\n      </nz-form-item>\n    </form>\n  </div>\n</div>\n\n\n\n\n");

            /***/
}),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");




            const routes = [{ path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }];
            let LoginRoutingModule = class LoginRoutingModule {
            };
            LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], LoginRoutingModule);



            /***/
}),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  background-image: url('lg.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100%;\n  overflow: hidden;\n}\n\n.top {\n  text-align: center;\n  margin-top: 100px;\n}\n\n.top span {\n  color: white;\n  font-weight: 600;\n  font-size: 33px;\n  font-family: \"Myriad Pro\", \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\n\n.login-form-forgot {\n  float: right;\n}\n\n.login-form-button {\n  width: 90px;\n  margin-right: 5px;\n}\n\n.form {\n  background: rgba(49, 70, 213, 0.35);\n  padding: 60px;\n  max-width: 500px;\n  margin: 10px auto;\n  border-radius: 9px;\n  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRTpcXFdvcmtcXElvbmljIE1vYmlsZSBBcHBcXEtoaW1lc2FyYSBTaWxrIE1pbGxzXFxhcHAtYmFja2VuZC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5RUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURJQTtFQUNFLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2xnLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICBmb250LWZhbWlseTogJ015cmlhZCBQcm8nLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtLWZvcmdvdCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubG9naW4tZm9ybS1idXR0b24ge1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG5cclxuLmZvcm0ge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNDksIDcwLCAyMTMsIDAuMzUpO1xyXG4gIHBhZGRpbmc6IDYwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCA0cHggcmdiYSgxOSwgMzUsIDQ3LCAwLjMpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbGcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50b3Age1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuLnRvcCBzcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk15cmlhZCBQcm9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9naW4tZm9ybS1mb3Jnb3Qge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5sb2dpbi1mb3JtLWJ1dHRvbiB7XG4gIHdpZHRoOiA5MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmZvcm0ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQ5LCA3MCwgMjEzLCAwLjM1KTtcbiAgcGFkZGluZzogNjBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCA0cHggcmdiYSgxOSwgMzUsIDQ3LCAwLjMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */");

            /***/
}),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ngx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-store */ "./node_modules/ngx-store/esm2015/ngx-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








            let LoginComponent = class LoginComponent {
                constructor(fb, datePipe, modalService, userService, logService, authService, router) {
                    this.fb = fb;
                    this.datePipe = datePipe;
                    this.modalService = modalService;
                    this.userService = userService;
                    this.logService = logService;
                    this.authService = authService;
                    this.router = router;
                    this.isLoading = false;
                    this.remember = false;
                    this.loginForm = this.fb.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                        pwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
                        remember: [false]
                    });
                }
                ngOnInit() {
                    if (this.remember) {
                        if (this.localUser) {
                            this.loginForm.get('email').setValue(this.localUser.email);
                            this.loginForm.get('pwd').setValue(this.localUser.password);
                        }
                        this.loginForm.get('remember').setValue(this.remember);
                    }
                }
                onLogin() {
                    this.isLoading = true;
                    const remember = this.loginForm.controls.remember.value;
                    const email = this.loginForm.controls.email.value;
                    const pwd = this.loginForm.controls.pwd.value;
                    this.authService.signWithEmail(email, pwd).then(r => {
                        if (r.user) {
                            const log = new _shared__WEBPACK_IMPORTED_MODULE_4__["LogModel"]();
                            log.userId = r.user.uid;
                            log.device = this.authService.device;
                            log.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([this.userService.getModel(r.user.uid), this.logService.addLog(log)]).subscribe(results => {
                                this.authService.user = results[0];
                                this.authService.isAuthenticated = true;
                                if (remember) {
                                    this.remember = true;
                                    const local = new _shared__WEBPACK_IMPORTED_MODULE_4__["LocalUserModel"]();
                                    local.email = email;
                                    local.password = pwd;
                                    this.localUser = local;
                                }
                                else {
                                    this.remember = false;
                                    this.localUser = null;
                                }
                                this.isLoading = false;
                                this.router.navigateByUrl('pages/dashboard');
                            });
                        }
                        else {
                            this.isLoading = false;
                            this.modalService.warning('Invalid email or password.');
                        }
                    }).catch(err => {
                        this.isLoading = false;
                        this.modalService.error('Invalid email or password.');
                    });
                }
            };
            LoginComponent.ctorParameters = () => [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_4__["LogService"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
            ];
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(ngx_store__WEBPACK_IMPORTED_MODULE_5__["LocalStorage"])()
            ], LoginComponent.prototype, "remember", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(ngx_store__WEBPACK_IMPORTED_MODULE_5__["LocalStorage"])()
            ], LoginComponent.prototype, "localUser", void 0);
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")).default]
                })
            ], LoginComponent);



            /***/
}),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function () { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






            let LoginModule = class LoginModule {
            };
            LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                    ]
                })
            ], LoginModule);



            /***/
})

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map