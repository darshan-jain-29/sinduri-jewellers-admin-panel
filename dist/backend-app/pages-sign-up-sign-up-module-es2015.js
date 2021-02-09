(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-up-sign-up-module"], {

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"top\">\n    <a href=\"https://ionic-template-web.firebaseapp.com/\" target=\"_blank\">\n      <img class=\"logo\" src=\"assets/img/logo.png\" alt=\"Sinduri Jewellers Admin Panel\">\n      <span class=\"title\">Sinduri Jewellers Admin Panel</span>\n    </a>\n  </div>\n  <div class=\"form\">\n    <nz-card class=\"card\">\n      <form nz-form [formGroup]=\"rForm\">\n        <nz-form-item>\n          <nz-form-control nzErrorTip=\" please enter a valid email!\">\n            <nz-input-group nzPrefixIcon=\"mail\">\n              <input type=\"text\" nz-input nzSize=\"large\" formControlName=\"email\" placeholder=\"email\"/>\n            </nz-input-group>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-control nzErrorTip=\"UserName length at least 3\">\n            <nz-input-group nzPrefixIcon=\"user\">\n              <input type=\"text\" nz-input nzSize=\"large\" formControlName=\"name\" placeholder=\"UserName\"/>\n            </nz-input-group>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-control nzErrorTip=\"Password length at least 6\">\n            <nz-input-group nzPrefixIcon=\"lock\">\n              <input type=\"password\" nz-input nzSize=\"large\" formControlName=\"pwd\" placeholder=\"Password\"/>\n            </nz-input-group>\n          </nz-form-control>\n        </nz-form-item>\n        <nz-form-item>\n          <nz-form-control style=\"text-align: center\">\n            <button nz-button class=\"login-form-button\" nzType=\"primary\"\n                    [nzLoading]=\"isLoading\" [disabled]=\"!rForm.valid\" (click)=\"onSignup()\">\n              Sign Up\n            </button>\n            <button nz-button class=\"login-form-button\" nzType=\"danger\" routerLink=\"/login\">Login</button>\n          </nz-form-control>\n        </nz-form-item>\n      </form>\n    </nz-card>\n\n\n  </div>\n  <ul class=\"circles\">\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n    <li></li>\n  </ul>\n</div>\n\n\n");

            /***/
}),

/***/ "./src/app/pages/sign-up/sign-up-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SignUpRoutingModule */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpRoutingModule", function () { return SignUpRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up.component */ "./src/app/pages/sign-up/sign-up.component.ts");




            const routes = [{ path: '', component: _sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"] }];
            let SignUpRoutingModule = class SignUpRoutingModule {
            };
            SignUpRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], SignUpRoutingModule);



            /***/
}),

/***/ "./src/app/pages/sign-up/sign-up.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  background: #1890ff;\n  background: linear-gradient(to bottom, #088bc8, #1890ff);\n}\n\n.top {\n  text-align: center;\n  margin-top: 100px;\n}\n\n.top span {\n  color: white;\n  font-weight: 600;\n  font-size: 33px;\n  font-family: \"Myriad Pro\", \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n  vertical-align: middle;\n}\n\n.login-form-button {\n  width: 90px;\n  margin-right: 5px;\n}\n\n.form {\n  padding: 50px;\n  max-width: 500px;\n  margin: 15px auto;\n  border-radius: 9px;\n  overflow: hidden;\n}\n\n.card {\n  z-index: 999 !important;\n  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);\n  border: unset !important;\n  background: #ccf6e445;\n}\n\n.circles {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  padding: 0px !important;\n  margin: 0px !important;\n}\n\n.circles li {\n  position: absolute;\n  display: block;\n  list-style: none;\n  width: 20px;\n  height: 20px;\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-animation: animate 25s linear infinite;\n          animation: animate 25s linear infinite;\n  bottom: -150px;\n}\n\n.circles li:nth-child(1) {\n  left: 25%;\n  width: 80px;\n  height: 80px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n\n.circles li:nth-child(2) {\n  left: 10%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 12s;\n          animation-duration: 12s;\n}\n\n.circles li:nth-child(3) {\n  left: 70%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n\n.circles li:nth-child(4) {\n  left: 40%;\n  width: 60px;\n  height: 60px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-duration: 18s;\n          animation-duration: 18s;\n}\n\n.circles li:nth-child(5) {\n  left: 65%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n\n.circles li:nth-child(6) {\n  left: 75%;\n  width: 110px;\n  height: 110px;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n}\n\n.circles li:nth-child(7) {\n  left: 35%;\n  width: 150px;\n  height: 150px;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n}\n\n.circles li:nth-child(8) {\n  left: 50%;\n  width: 25px;\n  height: 25px;\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s;\n  -webkit-animation-duration: 45s;\n          animation-duration: 45s;\n}\n\n.circles li:nth-child(9) {\n  left: 20%;\n  width: 15px;\n  height: 15px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 35s;\n          animation-duration: 35s;\n}\n\n.circles li:nth-child(10) {\n  left: 85%;\n  width: 150px;\n  height: 150px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-duration: 11s;\n          animation-duration: 11s;\n}\n\n@-webkit-keyframes animate {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 10px;\n  }\n  100% {\n    transform: translateY(-1000px) rotate(720deg);\n    opacity: 0;\n    border-radius: 50%;\n  }\n}\n\n@keyframes animate {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 10px;\n  }\n  100% {\n    transform: translateY(-1000px) rotate(720deg);\n    opacity: 0;\n    border-radius: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbi11cC9FOlxcV29ya1xcSW9uaWMgTW9iaWxlIEFwcFxcS2hpbWVzYXJhIFNpbGsgTWlsbHNcXGFwcC1iYWNrZW5kL3NyY1xcYXBwXFxwYWdlc1xcc2lnbi11cFxcc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsd0RBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURBRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5RUFBQTtFQUNBLHNCQUFBO0FDRUo7O0FERUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxnREFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFRTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURJRTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDRko7O0FES0U7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FDSEo7O0FETUU7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQ0pKOztBRE9FO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ0xKOztBRFFFO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ05KOztBRFNFO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ1BKOztBRFVFO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUNSSjs7QURXRTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDVEo7O0FEWUU7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQ1ZKOztBRGNBO0VBRUU7SUFDRSxxQ0FBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtFQ1pGO0VEZUE7SUFDRSw2Q0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQ2JGO0FBQ0Y7O0FEQ0E7RUFFRTtJQUNFLHFDQUFBO0lBQ0EsVUFBQTtJQUNBLG1CQUFBO0VDWkY7RURlQTtJQUNFLDZDQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0VDYkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6ICMxODkwZmY7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDg4YmM4LCAjMTg5MGZmKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDg4YmM4LCAjMTg5MGZmKTtcclxufVxyXG5cclxuLnRvcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIHNwYW57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAzM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNeXJpYWQgUHJvJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9naW4tZm9ybS1idXR0b24ge1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogMTVweCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgei1pbmRleDogOTk5ICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCA0cHggcmdiYSgxOSwgMzUsIDQ3LCAwLjMpO1xyXG4gIGJvcmRlcjogdW5zZXQgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAjY2NmNmU0NDU7XHJcbn1cclxuXHJcbi5jaXJjbGVzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgbGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGUgMjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGJvdHRvbTogLTE1MHB4O1xyXG4gIH1cclxuXHJcbiAgbGk6bnRoLWNoaWxkKDEpIHtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICB9XHJcblxyXG5cclxuICBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMnM7XHJcbiAgfVxyXG5cclxuICBsaTpudGgtY2hpbGQoMykge1xyXG4gICAgbGVmdDogNzAlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDRzO1xyXG4gIH1cclxuXHJcbiAgbGk6bnRoLWNoaWxkKDQpIHtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMThzO1xyXG4gIH1cclxuXHJcbiAgbGk6bnRoLWNoaWxkKDUpIHtcclxuICAgIGxlZnQ6IDY1JTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICB9XHJcblxyXG4gIGxpOm50aC1jaGlsZCg2KSB7XHJcbiAgICBsZWZ0OiA3NSU7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzcztcclxuICB9XHJcblxyXG4gIGxpOm50aC1jaGlsZCg3KSB7XHJcbiAgICBsZWZ0OiAzNSU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiA3cztcclxuICB9XHJcblxyXG4gIGxpOm50aC1jaGlsZCg4KSB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMTVzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0NXM7XHJcbiAgfVxyXG5cclxuICBsaTpudGgtY2hpbGQoOSkge1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzNXM7XHJcbiAgfVxyXG5cclxuICBsaTpudGgtY2hpbGQoMTApIHtcclxuICAgIGxlZnQ6IDg1JTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMXM7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG5cclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSByb3RhdGUoNzIwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCIuY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogIzE4OTBmZjtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDg4YmM4LCAjMTg5MGZmKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA4OGJjOCwgIzE4OTBmZik7XG59XG5cbi50b3Age1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuLnRvcCBzcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk15cmlhZCBQcm9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9naW4tZm9ybS1idXR0b24ge1xuICB3aWR0aDogOTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5mb3JtIHtcbiAgcGFkZGluZzogNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQge1xuICB6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCA0cHggcmdiYSgxOSwgMzUsIDQ3LCAwLjMpO1xuICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNjY2Y2ZTQ0NTtcbn1cblxuLmNpcmNsZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2lyY2xlcyBsaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYW5pbWF0aW9uOiBhbmltYXRlIDI1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGJvdHRvbTogLTE1MHB4O1xufVxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDEpIHtcbiAgbGVmdDogMjUlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDBzO1xufVxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogMTAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDJzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDEycztcbn1cbi5jaXJjbGVzIGxpOm50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDcwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiA0cztcbn1cbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg0KSB7XG4gIGxlZnQ6IDQwJTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxOHM7XG59XG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoNSkge1xuICBsZWZ0OiA2NSU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG59XG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoNikge1xuICBsZWZ0OiA3NSU7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAzcztcbn1cbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg3KSB7XG4gIGxlZnQ6IDM1JTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDdzO1xufVxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDgpIHtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBhbmltYXRpb24tZGVsYXk6IDE1cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0NXM7XG59XG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoOSkge1xuICBsZWZ0OiAyMCU7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMzVzO1xufVxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDEwKSB7XG4gIGxlZnQ6IDg1JTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDExcztcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSByb3RhdGUoNzIwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxufSJdfQ== */");

            /***/
}),

/***/ "./src/app/pages/sign-up/sign-up.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







            let SignUpComponent = class SignUpComponent {
                constructor(fb, datePipe, modalService, userService, logService, authService, router) {
                    this.fb = fb;
                    this.datePipe = datePipe;
                    this.modalService = modalService;
                    this.userService = userService;
                    this.logService = logService;
                    this.authService = authService;
                    this.router = router;
                    this.isLoading = false;
                    this.rForm = this.fb.group({
                        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
                        pwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
                    });
                }
                ngOnInit() {
                }
                onSignup() {
                    this.isLoading = true;
                    const email = this.rForm.controls.email.value;
                    const pwd = this.rForm.controls.pwd.value;
                    const name = this.rForm.controls.name.value;
                    this.authService.signUp(email, pwd, name).then(r => {
                        if (r.user) {
                            const log = new _shared__WEBPACK_IMPORTED_MODULE_4__["LogModel"]();
                            log.userId = r.user.uid;
                            log.device = 'Web Admin';
                            log.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
                            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([this.authService.updateUser(r.user, name), this.logService.addLog(log)])
                                .subscribe(results => {
                                    const user = new _shared__WEBPACK_IMPORTED_MODULE_4__["UserModel"](r.user);
                                    user.displayName = name;
                                    this.authService.user = user;
                                    this.authService.isAuthenticated = true;
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
            SignUpComponent.ctorParameters = () => [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_4__["ModalService"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_4__["LogService"] },
                { type: _shared__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ];
            SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sign-up',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/pages/sign-up/sign-up.component.scss")).default]
                })
            ], SignUpComponent);



            /***/
}),

/***/ "./src/app/pages/sign-up/sign-up.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/sign-up/sign-up.module.ts ***!
  \*************************************************/
/*! exports provided: SignUpModule */
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function () { return SignUpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up-routing.module */ "./src/app/pages/sign-up/sign-up-routing.module.ts");
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up.component */ "./src/app/pages/sign-up/sign-up.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






            let SignUpModule = class SignUpModule {
            };
            SignUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_3__["SignUpRoutingModule"],
                        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                    ]
                })
            ], SignUpModule);



            /***/
})

}]);
//# sourceMappingURL=pages-sign-up-sign-up-module-es2015.js.map