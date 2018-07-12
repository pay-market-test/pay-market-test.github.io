(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/services/auth.guard */ "./src/app/auth/services/auth.guard.ts");
/* harmony import */ var _auth_services_login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/services/login.guard */ "./src/app/auth/services/login.guard.ts");
/* harmony import */ var _auth_containers_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/containers/login-page/login-page.component */ "./src/app/auth/containers/login-page/login-page.component.ts");
/* harmony import */ var _transactions_containers_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transactions/containers/list/list.component */ "./src/app/transactions/containers/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'login',
        component: _auth_containers_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
        canActivate: [_auth_services_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
    },
    {
        path: '',
        component: _transactions_containers_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
        canActivate: [_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
    },
    {
        path: '**',
        redirectTo: '/',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  position: relative; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/utils */ "./src/app/core/utils/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/components/auth/auth.component */ "./src/app/auth/components/auth/auth.component.ts");
/* harmony import */ var _auth_containers_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/containers/login-page/login-page.component */ "./src/app/auth/containers/login-page/login-page.component.ts");
/* harmony import */ var _transactions_components_transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./transactions/components/transaction-list/transaction-list.component */ "./src/app/transactions/components/transaction-list/transaction-list.component.ts");
/* harmony import */ var _transactions_components_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transactions/components/transaction/transaction.component */ "./src/app/transactions/components/transaction/transaction.component.ts");
/* harmony import */ var _status_components_status_status_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./status/components/status/status.component */ "./src/app/status/components/status/status.component.ts");
/* harmony import */ var _status_containers_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./status/containers/login-status/login-status.component */ "./src/app/status/containers/login-status/login-status.component.ts");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/services/auth.guard */ "./src/app/auth/services/auth.guard.ts");
/* harmony import */ var _auth_services_login_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/services/login.guard */ "./src/app/auth/services/login.guard.ts");
/* harmony import */ var _core_services_token_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/services/token.service */ "./src/app/core/services/token.service.ts");
/* harmony import */ var _auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/effects/auth.effects */ "./src/app/auth/effects/auth.effects.ts");
/* harmony import */ var _transactions_effects_transactions_effects__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./transactions/effects/transactions.effects */ "./src/app/transactions/effects/transactions.effects.ts");
/* harmony import */ var _core_reducers__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./core/reducers */ "./src/app/core/reducers/index.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _core_pipes_amount_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/pipes/amount.pipe */ "./src/app/core/pipes/amount.pipe.ts");
/* harmony import */ var _core_pipes_customer_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./core/pipes/customer.pipe */ "./src/app/core/pipes/customer.pipe.ts");
/* harmony import */ var _core_pipes_card_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./core/pipes/card.pipe */ "./src/app/core/pipes/card.pipe.ts");
/* harmony import */ var _transactions_containers_list_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./transactions/containers/list/list.component */ "./src/app/transactions/containers/list/list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _auth_containers_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__["LoginPageComponent"],
                _transactions_components_transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_15__["TransactionListComponent"],
                _auth_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"],
                _status_components_status_status_component__WEBPACK_IMPORTED_MODULE_17__["StatusComponent"],
                _status_containers_login_status_login_status_component__WEBPACK_IMPORTED_MODULE_18__["LoginStatusComponent"],
                _transactions_components_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_16__["TransactionComponent"],
                _core_pipes_amount_pipe__WEBPACK_IMPORTED_MODULE_27__["AmountPipe"],
                _core_pipes_customer_pipe__WEBPACK_IMPORTED_MODULE_28__["CustomerPipe"],
                _core_pipes_card_pipe__WEBPACK_IMPORTED_MODULE_29__["CardPipe"],
                _transactions_containers_list_list_component__WEBPACK_IMPORTED_MODULE_30__["ListComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_26__["InfiniteScrollModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_core_reducers__WEBPACK_IMPORTED_MODULE_25__["reducers"], { metaReducers: _core_reducers__WEBPACK_IMPORTED_MODULE_25__["metaReducers"] }),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["StoreRouterConnectingModule"].forRoot({
                    stateKey: 'router',
                }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument({
                    name: 'ArsenalPay',
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_23__["AuthEffects"], _transactions_effects_transactions_effects__WEBPACK_IMPORTED_MODULE_24__["TransactionEffects"]]),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"]
            ],
            providers: [
                _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"],
                _auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"],
                _auth_services_login_guard__WEBPACK_IMPORTED_MODULE_21__["LoginGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _core_services_token_service__WEBPACK_IMPORTED_MODULE_22__["TokenInterceptor"],
                    multi: true,
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _core_services_token_service__WEBPACK_IMPORTED_MODULE_22__["ErrorInterceptor"],
                    multi: true,
                },
                { provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_7__["RouterStateSerializer"], useClass: _core_utils__WEBPACK_IMPORTED_MODULE_8__["CustomRouterStateSerializer"] },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/actions/auth.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/actions/auth.actions.ts ***!
  \**********************************************/
/*! exports provided: AuthActionTypes, Login, Logout, LoginSuccess, LoginFailure, LoginRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFailure", function() { return LoginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRedirect", function() { return LoginRedirect; });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["Login"] = "[Auth] Login";
    AuthActionTypes["Logout"] = "[Auth] Logout";
    AuthActionTypes["LoginSuccess"] = "[Auth] Login Success";
    AuthActionTypes["LoginFailure"] = "[Auth] Login Failure";
    AuthActionTypes["LoginRedirect"] = "[Auth] Login Redirect";
})(AuthActionTypes || (AuthActionTypes = {}));
var Login = /** @class */ (function () {
    function Login(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.Login;
    }
    return Login;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = AuthActionTypes.Logout;
    }
    return Logout;
}());

var LoginSuccess = /** @class */ (function () {
    function LoginSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LoginSuccess;
    }
    return LoginSuccess;
}());

var LoginFailure = /** @class */ (function () {
    function LoginFailure(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LoginFailure;
    }
    return LoginFailure;
}());

var LoginRedirect = /** @class */ (function () {
    function LoginRedirect() {
        this.type = AuthActionTypes.LoginRedirect;
    }
    return LoginRedirect;
}());



/***/ }),

/***/ "./src/app/auth/components/auth/auth.component.html":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/auth/auth.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  <input type=\"text\" placeholder=\"login\" formControlName=\"login\" />\n  <input type=\"password\" placeholder=\"password\" formControlName=\"password\" />\n  <button type=\"submit\" [disabled]=\"pending\">Login</button>\n  <br />\n  <span *ngIf=\"errorMessage\">{{ errorMessage }}</span>\n  <span *ngIf=\"pending\">Loading...</span>\n</form>"

/***/ }),

/***/ "./src/app/auth/components/auth/auth.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/auth/auth.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/components/auth/auth.component.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/components/auth/auth.component.ts ***!
  \********************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AuthComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.submitted.emit(this.form.value);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AuthComponent.prototype, "pending", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AuthComponent.prototype, "errorMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AuthComponent.prototype, "submitted", void 0);
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/components/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/components/auth/auth.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/containers/login-page/login-page.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/auth/containers/login-page/login-page.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-auth\n(submitted)=\"onSubmit($event)\"\n[errorMessage]=\"error$ | async\"\n[pending]=\"pending$ | async\">\n</app-auth>\n"

/***/ }),

/***/ "./src/app/auth/containers/login-page/login-page.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/auth/containers/login-page/login-page.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/containers/login-page/login-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/auth/containers/login-page/login-page.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/reducers */ "./src/app/core/reducers/index.ts");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/auth.actions */ "./src/app/auth/actions/auth.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(store) {
        this.store = store;
        this.error$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_reducers__WEBPACK_IMPORTED_MODULE_2__["getErrorMessage"]));
        this.pending$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_reducers__WEBPACK_IMPORTED_MODULE_2__["getPendingStatus"]));
    }
    LoginPageComponent.prototype.onSubmit = function ($event) {
        this.store.dispatch(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["Login"]($event));
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/auth/containers/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/auth/containers/login-page/login-page.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/auth/effects/auth.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/effects/auth.effects.ts ***!
  \**********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/auth/actions/auth.actions.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/auth/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions, authService, router) {
        var _this = this;
        this.actions = actions;
        this.authService = authService;
        this.router = router;
        this.login = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthActionTypes"].Login), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (payload) {
            return _this.authService.login(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["LoginSuccess"]({
                    token: data.access_token,
                    login: data.login,
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["LoginFailure"](error)); }));
        }));
        this.loginSuccess = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthActionTypes"].LoginSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            localStorage.setItem('token', data.payload.token);
            _this.router.navigate(['/']);
        }));
        this.loginFailure = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthActionTypes"].LoginFailure), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["LoginRedirect"]()); }));
        this.loginRedirect = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthActionTypes"].LoginRedirect, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthActionTypes"].Logout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            localStorage.removeItem('token');
            _this.router.navigate(['/login']);
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AuthEffects.prototype, "login", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AuthEffects.prototype, "loginSuccess", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AuthEffects.prototype, "loginFailure", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], AuthEffects.prototype, "loginRedirect", void 0);
    AuthEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/auth/reducers/auth.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/reducers/auth.reducer.ts ***!
  \***********************************************/
/*! exports provided: initialState, reducer, getLoginStatus, getMerchant, getErrorMessage, getPendingStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginStatus", function() { return getLoginStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMerchant", function() { return getMerchant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessage", function() { return getErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPendingStatus", function() { return getPendingStatus; });
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/auth/actions/auth.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    isAuthenticated: false,
    merchant: null,
    errorMessage: null,
    pending: false,
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].Login: {
            return __assign({}, state, { errorMessage: null, pending: true });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LoginSuccess: {
            return __assign({}, state, { isAuthenticated: true, pending: false, merchant: {
                    login: action.payload.login,
                } });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LoginFailure: {
            return __assign({}, state, { pending: false, errorMessage: action.payload.error.text });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].Logout: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};
var getLoginStatus = function (state) { return state.isAuthenticated; };
var getMerchant = function (state) { return state.merchant; };
var getErrorMessage = function (state) { return state.errorMessage; };
var getPendingStatus = function (state) { return state.pending; };


/***/ }),

/***/ "./src/app/auth/services/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/services/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/reducers */ "./src/app/core/reducers/index.ts");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/auth/actions/auth.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(store) {
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_reducers__WEBPACK_IMPORTED_MODULE_3__["getLoginStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (auth) {
            if (!auth) {
                _this.store.dispatch(new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["LoginRedirect"]());
                return false;
            }
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.API_BASE = 'https://test.arsenalpay.ru/pay-api';
    }
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.login = function (merchant) {
        return this.http.post(this.API_BASE + "/authentication.php", JSON.stringify(merchant));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/services/login.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/services/login.guard.ts ***!
  \**********************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/reducers */ "./src/app/core/reducers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginGuard = /** @class */ (function () {
    function LoginGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function () {
        var _this = this;
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_core_reducers__WEBPACK_IMPORTED_MODULE_4__["getLoginStatus"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) {
            if (auth) {
                _this.router.navigate(['/']);
                return false;
            }
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/core/CONSTANTS.ts":
/*!***********************************!*\
  !*** ./src/app/core/CONSTANTS.ts ***!
  \***********************************/
/*! exports provided: CARD_TYPES, CARD_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_TYPES", function() { return CARD_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_LIST", function() { return CARD_LIST; });
var CARD_TYPES = {
    UNKNOWN_CARD: 'unknown',
    VISA_ELECTRON: 'visa-electron',
    MAESTRO: 'maestro',
    VISA: 'visa',
    MIR: 'mir',
    MASTERCARD: 'mastercard',
};
var CARD_LIST = [
    {
        type: CARD_TYPES.UNKNOWN_CARD,
        patterns: [],
    },
    {
        type: CARD_TYPES.MAESTRO,
        patterns: [50, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
    },
    {
        type: CARD_TYPES.VISA,
        patterns: [4],
    },
    {
        type: CARD_TYPES.MIR,
        patterns: [220],
    },
    {
        type: CARD_TYPES.MASTERCARD,
        patterns: [222, 223, 224, 225, 226, 227, 228, 229, 23, 24, 25, 26, 27, 51, 52, 53, 54, 55,],
    },
];


/***/ }),

/***/ "./src/app/core/pipes/amount.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/core/pipes/amount.pipe.ts ***!
  \*******************************************/
/*! exports provided: AmountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmountPipe", function() { return AmountPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AmountPipe = /** @class */ (function () {
    function AmountPipe() {
    }
    AmountPipe.prototype.transform = function (value, status, decimals, dec, thousandsSeparator) {
        if (decimals === void 0) { decimals = 2; }
        if (dec === void 0) { dec = '.'; }
        if (thousandsSeparator === void 0) { thousandsSeparator = ' '; }
        var check = !isFinite(value) ? 0 : value;
        var prec = !isFinite(decimals) ? 0 : Math.abs(decimals);
        var toFixed = function (check, prec) {
            var k = Math.pow(10, prec);
            return Math.round(check * k) / k;
        };
        var splitted = (prec
            ? toFixed(check, prec)
            : Math.round(check))
            .toString()
            .split('.');
        if (splitted[0].length > 3) {
            splitted[0] = splitted[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, thousandsSeparator);
        }
        if ((splitted[1] || '').length < prec) {
            splitted[1] = splitted[1] || '';
        }
        var result = "" + (status && status === 'refund' ? '- ' : '') + splitted.join(splitted[1] ? dec : '') + " \u20BD";
        return result;
    };
    AmountPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'amount',
        })
    ], AmountPipe);
    return AmountPipe;
}());



/***/ }),

/***/ "./src/app/core/pipes/card.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/core/pipes/card.pipe.ts ***!
  \*****************************************/
/*! exports provided: CardPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPipe", function() { return CardPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CONSTANTS */ "./src/app/core/CONSTANTS.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CardPipe = /** @class */ (function () {
    function CardPipe() {
    }
    CardPipe.prototype.transform = function (cardNumber) {
        var unknownCard = _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CARD_LIST"].filter(function (system) { return system.type === _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CARD_TYPES"].UNKNOWN_CARD; })[0];
        var paymentSystem = null;
        _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__["CARD_LIST"].forEach(function (card) {
            card.patterns.forEach(function (pattern) {
                var number = String(cardNumber);
                var strPattern = String(pattern);
                if (number.substring(0, strPattern.length) === strPattern) {
                    paymentSystem = card;
                }
            });
        });
        return paymentSystem !== null ? paymentSystem.type : unknownCard.type;
    };
    CardPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'card'
        })
    ], CardPipe);
    return CardPipe;
}());



/***/ }),

/***/ "./src/app/core/pipes/customer.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/core/pipes/customer.pipe.ts ***!
  \*********************************************/
/*! exports provided: CustomerPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPipe", function() { return CustomerPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomerPipe = /** @class */ (function () {
    function CustomerPipe() {
    }
    CustomerPipe.prototype.transform = function (value) {
        var formattedValue;
        var cardFormatter = function (value) {
            return value
                .replace(/(\d{4})/g, '$1 ')
                .replace(/(\xxxx)/g, ' $1 ')
                .trim();
        };
        var phoneFormatter = function (value) {
            return value.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/g, '+$1 ($2) $3-$4-$5');
        };
        if (new RegExp('xxxx').test(value)) {
            formattedValue = cardFormatter(value);
        }
        else {
            formattedValue = phoneFormatter(value);
        }
        return formattedValue;
    };
    CustomerPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'customer',
        })
    ], CustomerPipe);
    return CustomerPipe;
}());



/***/ }),

/***/ "./src/app/core/reducers/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/reducers/index.ts ***!
  \****************************************/
/*! exports provided: reducers, localStorageSyncReducer, logger, metaReducers, AuthStateSelector, getLoginStatus, getMerchant, getErrorMessage, getPendingStatus, TransactionStateSelector, getCurrentTransactionPage, getTotalTransactions, getTransactionPendingStatus, getTransactionErrorMessage, getTransactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function() { return localStorageSyncReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStateSelector", function() { return AuthStateSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginStatus", function() { return getLoginStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMerchant", function() { return getMerchant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorMessage", function() { return getErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPendingStatus", function() { return getPendingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionStateSelector", function() { return TransactionStateSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTransactionPage", function() { return getCurrentTransactionPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalTransactions", function() { return getTotalTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactionPendingStatus", function() { return getTransactionPendingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactionErrorMessage", function() { return getTransactionErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactions", function() { return getTransactions; });
/* harmony import */ var _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth/reducers/auth.reducer */ "./src/app/auth/reducers/auth.reducer.ts");
/* harmony import */ var _transactions_reducers_transactions_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../transactions/reducers/transactions.reducer */ "./src/app/transactions/reducers/transactions.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngrx-store-localstorage */ "./node_modules/ngrx-store-localstorage/dist/index.js");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");





var reducers = {
    auth: _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    transactions: _transactions_reducers_transactions_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["routerReducer"],
};
var localStorageSyncReducer = function (reducer) {
    return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_3__["localStorageSync"])({
        keys: [{ auth: ['isAuthenticated', 'merchant'] }],
        rehydrate: true,
    })(reducer);
};
var logger = function (reducer) {
    return function (state, action) {
        console.log('current state', state);
        console.log('action', action);
        return reducer(state, action);
    };
};
var metaReducers = [
    localStorageSyncReducer,
    logger,
];
// Auth selectors
var AuthStateSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('auth');
var getLoginStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(AuthStateSelector, _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["getLoginStatus"]);
var getMerchant = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(AuthStateSelector, _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["getMerchant"]);
var getErrorMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(AuthStateSelector, _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["getErrorMessage"]);
var getPendingStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(AuthStateSelector, _auth_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["getPendingStatus"]);
// Transactions selectors
var TransactionStateSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('transactions');
var getCurrentTransactionPage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(TransactionStateSelector, _transactions_reducers_transactions_reducer__WEBPACK_IMPORTED_MODULE_1__["getCurrentTransactionPage"]);
var getTotalTransactions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(TransactionStateSelector, _transactions_reducers_transactions_reducer__WEBPACK_IMPORTED_MODULE_1__["getTotalTransactions"]);
var getTransactionPendingStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(TransactionStateSelector, _transactions_reducers_transactions_reducer__WEBPACK_IMPORTED_MODULE_1__["getTransactionPendingStatus"]);
var getTransactionErrorMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(TransactionStateSelector, _transactions_reducers_transactions_reducer__WEBPACK_IMPORTED_MODULE_1__["getTransactionErrorMessage"]);
var getTransactions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(TransactionStateSelector, _transactions_reducers_transactions_reducer__WEBPACK_IMPORTED_MODULE_1__["getTransactions"]);


/***/ }),

/***/ "./src/app/core/services/token.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/token.service.ts ***!
  \************************************************/
/*! exports provided: TokenInterceptor, ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(injector) {
        this.injector = injector;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        this.authService = this.injector.get(_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]);
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.authService.getToken(),
                'Content-Type': 'application/json',
            },
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());

var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(router) {
        this.router = router;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (response) {
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && response.status === 401) {
                localStorage.removeItem('token');
                _this.router.navigate(['/login']);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(response);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/core/utils/index.ts":
/*!*************************************!*\
  !*** ./src/app/core/utils/index.ts ***!
  \*************************************/
/*! exports provided: CustomRouterStateSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRouterStateSerializer", function() { return CustomRouterStateSerializer; });
var CustomRouterStateSerializer = /** @class */ (function () {
    function CustomRouterStateSerializer() {
    }
    CustomRouterStateSerializer.prototype.serialize = function (routerState) {
        var route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        var url = routerState.url, queryParams = routerState.root.queryParams;
        var params = route.params;
        return { url: url, params: params, queryParams: queryParams };
    };
    return CustomRouterStateSerializer;
}());



/***/ }),

/***/ "./src/app/status/components/status/status.component.html":
/*!****************************************************************!*\
  !*** ./src/app/status/components/status/status.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <div class=\"logotype\">\n    <a href=\"#\" class=\"logo-image\">ArsenalPay</a>\n  </div>\n  <div class=\"login\">\n    <div class=\"login-icon\"></div>\n    <div class=\"login-text\">{{ merchant.login }}</div>\n  </div>\n  <a class=\"nav-item transactions\" [routerLink]=\"['/']\">\n    <div class=\"icon\"></div>\n    Transactions\n  </a>\n  <a class=\"nav-item logout\" (click)=\"logout()\">\n    <div class=\"icon\"></div>\n    Logout\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/status/components/status/status.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/status/components/status/status.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  width: 186px;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  background-color: white;\n  box-shadow: 0 -1px 12px 0 rgba(0, 0, 0, 0.18); }\n  .sidebar .logotype {\n    width: 100%;\n    height: 60px;\n    background-color: rgba(0, 0, 0, 0.06);\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center; }\n  .sidebar .logotype .logo-image {\n      margin-left: 17px;\n      background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9Ijc0cHgiIGhlaWdodD0iNDJweCIgdmlld0JveD0iMCAwIDc0IDQyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDxkZWZzPjwvZGVmcz4NCiAgICA8ZyBpZD0iYXNzZXRzL0FQX2xvZ29fb3V0bGluZXMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAyLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiPg0KICAgICAgICAgICAgPHBhdGggZD0iTTcuMjE4NzQ5OSwyNCBMNi4wNDU3MDMwNCwyMS4wMDI5Mjk3IEwyLjI2ODc0OTk3LDIxLjAwMjkyOTcgTDEuMTA4NTkzNzMsMjQgTDAsMjQgTDMuNzI1MzkwNTcsMTQuNTM4MjgxNCBMNC42NDcwNzAyNSwxNC41MzgyODE0IEw4LjM1MzEyNDg4LDI0IEw3LjIxODc0OTksMjQgWiBNNS43MDQxMDE0OCwyMC4wMTY3OTY5IEw0LjYwODM5ODM3LDE3LjA5NzA3MDQgQzQuNDY2NjAwNzksMTYuNzI3NTM3MyA0LjMyMDUwODUsMTYuMjc0MjIxNSA0LjE3MDExNzEzLDE1LjczNzEwOTUgQzQuMDc1NTg1NDEsMTYuMTQ5NjExNiAzLjk0MDIzNTIsMTYuNjAyOTI3MyAzLjc2NDA2MjQ1LDE3LjA5NzA3MDQgTDIuNjU1NDY4NzEsMjAuMDE2Nzk2OSBMNS43MDQxMDE0OCwyMC4wMTY3OTY5IFogTTEzLjI2MDE1NjEsMTYuODA3MDMxNCBDMTMuNTczODI5NSwxNi44MDcwMzE0IDEzLjg1NTI3MiwxNi44MzI4MTIzIDE0LjEwNDQ5MiwxNi44ODQzNzUxIEwxMy45NTYyNDk4LDE3Ljg3Njk1MzIgQzEzLjY2NDA2MDksMTcuODEyNDk5OCAxMy40MDYyNTA5LDE3Ljc4MDI3MzUgMTMuMTgyODEyMywxNy43ODAyNzM1IEMxMi42MTEzMjUxLDE3Ljc4MDI3MzUgMTIuMTIyNTYwNSwxOC4wMTIzMDI1IDExLjcxNjUwMzgsMTguNDc2MzY3MyBDMTEuMzEwNDQ3LDE4Ljk0MDQzMjEgMTEuMTA3NDIxNywxOS41MTgzNTYgMTEuMTA3NDIxNywyMC4yMTAxNTYzIEwxMS4xMDc0MjE3LDI0IEwxMC4wMzc0OTk5LDI0IEwxMC4wMzc0OTk5LDE2LjkzNTkzNzYgTDEwLjkyMDUwNzcsMTYuOTM1OTM3NiBMMTEuMDQyOTY4NiwxOC4yNDQzMzYgTDExLjA5NDUzMTEsMTguMjQ0MzM2IEMxMS4zNTY2NDE4LDE3Ljc4NDU2ODEgMTEuNjcyNDU4OSwxNy40MzAwNzk1IDEyLjA0MTk5MiwxNy4xODA4NTk1IEMxMi40MTE1MjUxLDE2LjkzMTYzOTUgMTIuODE3NTc1NywxNi44MDcwMzE0IDEzLjI2MDE1NjEsMTYuODA3MDMxNCBaIE0yMC41MzI2MTY5LDIyLjA3Mjg1MTYgQzIwLjUzMjYxNjksMjIuNzMwMjc2NyAyMC4yODc2OTc1LDIzLjIzNzMwMjkgMTkuNzk3ODUxMywyMy41OTM5NDUzIEMxOS4zMDgwMDUxLDIzLjk1MDU4NzcgMTguNjIwNTEyLDI0LjEyODkwNjIgMTcuNzM1MzUxMywyNC4xMjg5MDYyIEMxNi43OTg2Mjc5LDI0LjEyODkwNjIgMTYuMDY4MTY2NSwyMy45ODA2NjU1IDE1LjU0Mzk0NTEsMjMuNjg0MTc5NyBMMTUuNTQzOTQ1MSwyMi42OTE2MDE2IEMxNS44ODMzOTk5LDIyLjg2MzQ3NzQgMTYuMjQ3NTU2NSwyMi45OTg4Mjc2IDE2LjYzNjQyNTYsMjMuMDk3NjU2MyBDMTcuMDI1Mjk0NywyMy4xOTY0ODQ5IDE3LjQwMDE5MzMsMjMuMjQ1ODk4NCAxNy43NjExMzI2LDIzLjI0NTg5ODQgQzE4LjMxOTcyOTEsMjMuMjQ1ODk4NCAxOC43NDk0MTIzLDIzLjE1NjczOTIgMTkuMDUwMTk1MSwyMi45Nzg0MTggQzE5LjM1MDk3NzgsMjIuODAwMDk2OCAxOS41MDEzNjY5LDIyLjUyODMyMjIgMTkuNTAxMzY2OSwyMi4xNjMwODYgQzE5LjUwMTM2NjksMjEuODg4MDg0NiAxOS4zODIxMjk5LDIxLjY1MjgzMyAxOS4xNDM2NTIxLDIxLjQ1NzMyNDMgQzE4LjkwNTE3NDQsMjEuMjYxODE1NSAxOC40NDAwNDIzLDIxLjAzMDg2MDcgMTcuNzQ4MjQyLDIwLjc2NDQ1MzIgQzE3LjA5MDgxNjgsMjAuNTE5NTMwMSAxNi42MjM1MzYzLDIwLjMwNTc2MjcgMTYuMzQ2Mzg2NSwyMC4xMjMxNDQ2IEMxNi4wNjkyMzY3LDE5Ljk0MDUyNjUgMTUuODYyOTg4OCwxOS43MzMyMDQzIDE1LjcyNzYzNjUsMTkuNTAxMTcxOSBDMTUuNTkyMjg0MywxOS4yNjkxMzk1IDE1LjUyNDYwOTIsMTguOTkxOTkzOSAxNS41MjQ2MDkyLDE4LjY2OTcyNjYgQzE1LjUyNDYwOTIsMTguMDkzOTQyNSAxNS43NTg3ODY1LDE3LjYzOTU1MjUgMTYuMjI3MTQ4MiwxNy4zMDY1NDMxIEMxNi42OTU1MSwxNi45NzM1MzM2IDE3LjMzNzg4NjMsMTYuODA3MDMxNCAxOC4xNTQyOTY3LDE2LjgwNzAzMTQgQzE4LjkxNDg0NzMsMTYuODA3MDMxNCAxOS42NTgxOTkyLDE2Ljk2MTcxNzMgMjAuMzg0Mzc0NywxNy4yNzEwOTM4IEwyMC4wMDQxMDEzLDE4LjE0MTIxMSBDMTkuMjk1MTEzNCwxNy44NDkwMjIxIDE4LjY1MjczNywxNy43MDI5Mjk4IDE4LjA3Njk1MjksMTcuNzAyOTI5OCBDMTcuNTY5OTE5MSwxNy43MDI5Mjk4IDE3LjE4NzUwMTEsMTcuNzgyNDIxMiAxNi45Mjk2ODczLDE3Ljk0MTQwNjMgQzE2LjY3MTg3MzUsMTguMTAwMzkxNSAxNi41NDI5Njg2LDE4LjMxOTUyOTkgMTYuNTQyOTY4NiwxOC41OTg4MjgyIEMxNi41NDI5Njg2LDE4Ljc4Nzg5MTYgMTYuNTkxMzA3OSwxOC45NDkwMjI4IDE2LjY4Nzk4ODEsMTkuMDgyMjI2NiBDMTYuNzg0NjY4MiwxOS4yMTU0MzA0IDE2Ljk0MDQyODQsMTkuMzQyMTg3IDE3LjE1NTI3MzIsMTkuNDYyNTAwMSBDMTcuMzcwMTE4MSwxOS41ODI4MTMyIDE3Ljc4MjYxMzksMTkuNzU2ODM0OSAxOC4zOTI3NzMyLDE5Ljk4NDU3MDQgQzE5LjIzMDY2OCwyMC4yODk2NSAxOS43OTY3NzU2LDIwLjU5Njg3MzUgMjAuMDkxMTEzLDIwLjkwNjI1IEMyMC4zODU0NTA0LDIxLjIxNTYyNjYgMjAuNTMyNjE2OSwyMS42MDQ0ODk5IDIwLjUzMjYxNjksMjIuMDcyODUxNiBaIE0yNS44MDcwMzA5LDI0LjEyODkwNjIgQzI0Ljc2Mjg4NTEsMjQuMTI4OTA2MiAyMy45Mzg5Njc2LDIzLjgxMDk0MDcgMjMuMzM1MjUzNiwyMy4xNzUgQzIyLjczMTUzOTcsMjIuNTM5MDU5MyAyMi40Mjk2ODcyLDIxLjY1NjA2MDQgMjIuNDI5Njg3MiwyMC41MjU5NzY2IEMyMi40Mjk2ODcyLDE5LjM4NzI5OTEgMjIuNzEwMDU1NSwxOC40ODI4MTU5IDIzLjI3MDgwMDUsMTcuODEyNTAwMSBDMjMuODMxNTQ1NSwxNy4xNDIxODQyIDI0LjU4NDU2NTMsMTYuODA3MDMxNCAyNS41Mjk4ODI1LDE2LjgwNzAzMTQgQzI2LjQxNTA0MzIsMTYuODA3MDMxNCAyNy4xMTU0MjY4LDE3LjA5ODE0MTcgMjcuNjMxMDU0MywxNy42ODAzNzEyIEMyOC4xNDY2ODE5LDE4LjI2MjYwMDcgMjguNDA0NDkxOCwxOS4wMzA2NTk0IDI4LjQwNDQ5MTgsMTkuOTg0NTcwNCBMMjguNDA0NDkxOCwyMC42NjEzMjgyIEwyMy41MzgyODEsMjAuNjYxMzI4MiBDMjMuNTU5NzY1NSwyMS40OTA2MjkyIDIzLjc2OTIzNiwyMi4xMjAxMTUxIDI0LjE2NjY5ODksMjIuNTQ5ODA0NyBDMjQuNTY0MTYxOCwyMi45Nzk0OTQ0IDI1LjEyMzgyNDIsMjMuMTk0MzM1OSAyNS44NDU3MDI4LDIzLjE5NDMzNTkgQzI2LjYwNjI1MzUsMjMuMTk0MzM1OSAyNy4zNTgxOTkxLDIzLjAzNTM1MzIgMjguMTAxNTYyMiwyMi43MTczODI4IEwyOC4xMDE1NjIyLDIzLjY3MTI4OTEgQzI3LjcyMzQzNTMsMjMuODM0NTcxMSAyNy4zNjU3MjQsMjMuOTUxNjU5OCAyNy4wMjg0MTc2LDI0LjAyMjU1ODYgQzI2LjY5MTExMTMsMjQuMDkzNDU3NCAyNi4yODM5ODY0LDI0LjEyODkwNjIgMjUuODA3MDMwOSwyNC4xMjg5MDYyIFogTTI1LjUxNjk5MTksMTcuNzAyOTI5OCBDMjQuOTQ5ODAxNiwxNy43MDI5Mjk4IDI0LjQ5NzU2LDE3Ljg4NzY5MzYgMjQuMTYwMjUzNiwxOC4yNTcyMjY2IEMyMy44MjI5NDcyLDE4LjYyNjc1OTcgMjMuNjI0MjE4OCwxOS4xMzgwODI3IDIzLjU2NDA2MjIsMTkuNzkxMjExIEwyNy4yNTcyMjYyLDE5Ljc5MTIxMSBDMjcuMjU3MjI2MiwxOS4xMTY1OTgzIDI3LjEwNjgzNzEsMTguNTk5OTA0MiAyNi44MDYwNTQ0LDE4LjI0MTExMzQgQzI2LjUwNTI3MTYsMTcuODgyMzIyNSAyNi4wNzU1ODg0LDE3LjcwMjkyOTggMjUuNTE2OTkxOSwxNy43MDI5Mjk4IFogTTM1LjYxMjQ5OTYsMjQgTDM1LjYxMjQ5OTYsMTkuNDMwMjczNSBDMzUuNjEyNDk5NiwxOC44NTQ0ODk0IDM1LjQ4MTQ0NjIsMTguNDI0ODA2MiAzNS4yMTkzMzU1LDE4LjE0MTIxMSBDMzQuOTU3MjI0OCwxNy44NTc2MTU5IDM0LjU0Njg3NzQsMTcuNzE1ODIwNCAzMy45ODgyODA4LDE3LjcxNTgyMDQgQzMzLjI0OTIxNDcsMTcuNzE1ODIwNCAzMi43MDc4MTM4LDE3LjkxNTYyMzEgMzIuMzY0MDYyMSwxOC4zMTUyMzQ1IEMzMi4wMjAzMTA0LDE4LjcxNDg0NTggMzEuODQ4NDM3MSwxOS4zNzQ0MDk1IDMxLjg0ODQzNzEsMjAuMjkzOTQ1NCBMMzEuODQ4NDM3MSwyNCBMMzAuNzc4NTE1MywyNCBMMzAuNzc4NTE1MywxNi45MzU5Mzc2IEwzMS42NDg2MzI0LDE2LjkzNTkzNzYgTDMxLjgyMjY1NTksMTcuOTAyNzM0NSBMMzEuODc0MjE4NCwxNy45MDI3MzQ1IEMzMi4wOTMzNjAxLDE3LjU1NDY4NTkgMzIuNDAwNTgzNiwxNy4yODUwNTk2IDMyLjc5NTg5OCwxNy4wOTM4NDc4IEMzMy4xOTEyMTI1LDE2LjkwMjYzNTkgMzMuNjMxNjM3OCwxNi44MDcwMzE0IDM0LjExNzE4NzEsMTYuODA3MDMxNCBDMzQuOTY3OTcyNiwxNi44MDcwMzE0IDM1LjYwODIwMDUsMTcuMDEyMjA1MSAzNi4wMzc4OTAyLDE3LjQyMjU1ODcgQzM2LjQ2NzU3OTgsMTcuODMyOTEyMyAzNi42ODI0MjE0LDE4LjQ4OTI1MzQgMzYuNjgyNDIxNCwxOS4zOTE2MDE2IEwzNi42ODI0MjE0LDI0IEwzNS42MTI0OTk2LDI0IFogTTQzLjc3NDQxMzUsMjQgTDQzLjU2MTcxODIsMjIuOTk0NTMxMyBMNDMuNTEwMTU1NywyMi45OTQ1MzEzIEM0My4xNTc4MTAyLDIzLjQzNzExMTYgNDIuODA2NTQ0MiwyMy43MzY4MTU2IDQyLjQ1NjM0NzEsMjMuODkzNjUyMyBDNDIuMTA2MTUwMSwyNC4wNTA0ODkxIDQxLjY2ODk0NzQsMjQuMTI4OTA2MiA0MS4xNDQ3MjYxLDI0LjEyODkwNjIgQzQwLjQ0NDMzMiwyNC4xMjg5MDYyIDM5Ljg5NTQxMTcsMjMuOTQ4NDM5MyAzOS40OTc5NDg3LDIzLjU4NzUgQzM5LjEwMDQ4NTgsMjMuMjI2NTYwNyAzOC45MDE3NTczLDIyLjcxMzA4OTMgMzguOTAxNzU3MywyMi4wNDcwNzAzIEMzOC45MDE3NTczLDIwLjYyMDUwMDcgNDAuMDQyNTY2MiwxOS44NzI4NTIgNDIuMzI0MjE4MiwxOS44MDQxMDE2IEw0My41MjMwNDYzLDE5Ljc2NTQyOTcgTDQzLjUyMzA0NjMsMTkuMzI3MTQ4NSBDNDMuNTIzMDQ2MywxOC43NzI4NDg5IDQzLjQwMzgwOTMsMTguMzYzNTc1NiA0My4xNjUzMzE1LDE4LjA5OTMxNjUgQzQyLjkyNjg1MzgsMTcuODM1MDU3NCA0Mi41NDU1MDk5LDE3LjcwMjkyOTggNDIuMDIxMjg4NiwxNy43MDI5Mjk4IEM0MS40MzI2MTM3LDE3LjcwMjkyOTggNDAuNzY2NjA0OCwxNy44ODMzOTY3IDQwLjAyMzI0MTcsMTguMjQ0MzM2IEwzOS42OTQ1MzA4LDE3LjQyNTc4MTMgQzQwLjA0MjU3OTQsMTcuMjM2NzE3OSA0MC40MjM5MjMyLDE3LjA4ODQ3NzIgNDAuODM4NTczNywxNi45ODEwNTQ4IEM0MS4yNTMyMjQyLDE2Ljg3MzYzMjQgNDEuNjY4OTQyNywxNi44MTk5MjIgNDIuMDg1NzQxNywxNi44MTk5MjIgQzQyLjkyNzkzMzQsMTYuODE5OTIyIDQzLjU1MjA0ODIsMTcuMDA2ODM0MiA0My45NTgxMDQ5LDE3LjM4MDY2NDIgQzQ0LjM2NDE2MTYsMTcuNzU0NDk0MSA0NC41NjcxODcsMTguMzUzOTAyMiA0NC41NjcxODcsMTkuMTc4OTA2MyBMNDQuNTY3MTg3LDI0IEw0My43NzQ0MTM1LDI0IFogTTQxLjM1NzQyMTQsMjMuMjQ1ODk4NCBDNDIuMDIzNDQwMywyMy4yNDU4OTg0IDQyLjU0NjU3OTYsMjMuMDYzMjgzMSA0Mi45MjY4NTQ5LDIyLjY5ODA0NjkgQzQzLjMwNzEzMDMsMjIuMzMyODEwNyA0My40OTcyNjUxLDIxLjgyMTQ4NzcgNDMuNDk3MjY1MSwyMS4xNjQwNjI1IEw0My40OTcyNjUxLDIwLjUyNTk3NjYgTDQyLjQyNzM0MzIsMjAuNTcxMDkzOCBDNDEuNTc2NTU3NywyMC42MDExNzIxIDQwLjk2MzE4NSwyMC43MzMyOTk3IDQwLjU4NzIwNjUsMjAuOTY3NDgwNSBDNDAuMjExMjI4MSwyMS4yMDE2NjE0IDQwLjAyMzI0MTcsMjEuNTY1ODE3OSA0MC4wMjMyNDE3LDIyLjA1OTk2MSBDNDAuMDIzMjQxNywyMi40NDY2ODE2IDQwLjE0MDMzMDQsMjIuNzQxMDE0NiA0MC4zNzQ1MTEyLDIyLjk0Mjk2ODggQzQwLjYwODY5MjEsMjMuMTQ0OTIyOSA0MC45MzYzMjU1LDIzLjI0NTg5ODQgNDEuMzU3NDIxNCwyMy4yNDU4OTg0IFogTTQ4LjM5MTQwNTcsMjQgTDQ3LjMyMTQ4MzgsMjQgTDQ3LjMyMTQ4MzgsMTMuOTcxMDkzOSBMNDguMzkxNDA1NywxMy45NzEwOTM5IEw0OC4zOTE0MDU3LDI0IFoiIGlkPSJBcnNlbmFsIiBmaWxsLW9wYWNpdHk9IjAuNyI+PC9wYXRoPg0KICAgICAgICAgICAgPHBhdGggZD0iTTU2Ljk3MDI2MzYsMTcuMzIyNjU2MyBDNTYuOTcwMjYzNiwxOC4yNzY1Njc0IDU2LjY0NDc3ODUsMTkuMDEwMjUxNCA1NS45OTM3OTg3LDE5LjUyMzczMDUgQzU1LjM0MjgxODksMjAuMDM3MjA5NyA1NC40MTE0ODA2LDIwLjI5Mzk0NTQgNTMuMTk5NzU1OCwyMC4yOTM5NDU0IEw1Mi4wOTExNjIxLDIwLjI5Mzk0NTQgTDUyLjA5MTE2MjEsMjQgTDUwLjk5NTQ1OSwyNCBMNTAuOTk1NDU5LDE0LjU3Njk1MzMgTDUzLjQzODIzMjQsMTQuNTc2OTUzMyBDNTUuNzkyOTMxNiwxNC41NzY5NTMzIDU2Ljk3MDI2MzYsMTUuNDkyMTc4NSA1Ni45NzAyNjM2LDE3LjMyMjY1NjMgWiBNNTIuMDkxMTYyMSwxOS4zNTI5Mjk4IEw1My4wNzcyOTQ5LDE5LjM1MjkyOTggQzU0LjA0ODM5MzUsMTkuMzUyOTI5OCA1NC43NTA5MjU1LDE5LjE5NjA5NTQgNTUuMTg0OTEyLDE4Ljg4MjQyMTkgQzU1LjYxODg5ODYsMTguNTY4NzQ4NSA1NS44MzU4ODg2LDE4LjA2NjAxOTIgNTUuODM1ODg4NiwxNy4zNzQyMTg4IEM1NS44MzU4ODg2LDE2Ljc1MTE2ODkgNTUuNjMxNzg5MSwxNi4yODcxMTEgNTUuMjIzNTgzOSwxNS45ODIwMzE0IEM1NC44MTUzNzg3LDE1LjY3Njk1MTcgNTQuMTc5NDQ3NiwxNS41MjQ0MTQyIDUzLjMxNTc3MTQsMTUuNTI0NDE0MiBMNTIuMDkxMTYyMSwxNS41MjQ0MTQyIEw1Mi4wOTExNjIxLDE5LjM1MjkyOTggWiBNNjIuNDc1NTM2OSwyNCBMNjIuMjYyODQxNiwyMi45OTQ1MzEzIEw2Mi4yMTEyNzkxLDIyLjk5NDUzMTMgQzYxLjg1ODkzMzYsMjMuNDM3MTExNiA2MS41MDc2Njc2LDIzLjczNjgxNTYgNjEuMTU3NDcwNiwyMy44OTM2NTIzIEM2MC44MDcyNzM1LDI0LjA1MDQ4OTEgNjAuMzcwMDcwOCwyNC4xMjg5MDYyIDU5Ljg0NTg0OTUsMjQuMTI4OTA2MiBDNTkuMTQ1NDU1NCwyNC4xMjg5MDYyIDU4LjU5NjUzNTEsMjMuOTQ4NDM5MyA1OC4xOTkwNzIyLDIzLjU4NzUgQzU3LjgwMTYwOTIsMjMuMjI2NTYwNyA1Ny42MDI4ODA4LDIyLjcxMzA4OTMgNTcuNjAyODgwOCwyMi4wNDcwNzAzIEM1Ny42MDI4ODA4LDIwLjYyMDUwMDcgNTguNzQzNjg5NiwxOS44NzI4NTIgNjEuMDI1MzQxNiwxOS44MDQxMDE2IEw2Mi4yMjQxNjk4LDE5Ljc2NTQyOTcgTDYyLjIyNDE2OTgsMTkuMzI3MTQ4NSBDNjIuMjI0MTY5OCwxOC43NzI4NDg5IDYyLjEwNDkzMjcsMTguMzYzNTc1NiA2MS44NjY0NTQ5LDE4LjA5OTMxNjUgQzYxLjYyNzk3NzIsMTcuODM1MDU3NCA2MS4yNDY2MzMzLDE3LjcwMjkyOTggNjAuNzIyNDEyLDE3LjcwMjkyOTggQzYwLjEzMzczNzIsMTcuNzAyOTI5OCA1OS40Njc3MjgyLDE3Ljg4MzM5NjcgNTguNzI0MzY1MSwxOC4yNDQzMzYgTDU4LjM5NTY1NDIsMTcuNDI1NzgxMyBDNTguNzQzNzAyOCwxNy4yMzY3MTc5IDU5LjEyNTA0NjYsMTcuMDg4NDc3MiA1OS41Mzk2OTcxLDE2Ljk4MTA1NDggQzU5Ljk1NDM0NzYsMTYuODczNjMyNCA2MC4zNzAwNjYxLDE2LjgxOTkyMiA2MC43ODY4NjUxLDE2LjgxOTkyMiBDNjEuNjI5MDU2OCwxNi44MTk5MjIgNjIuMjUzMTcxNiwxNy4wMDY4MzQyIDYyLjY1OTIyODMsMTcuMzgwNjY0MiBDNjMuMDY1Mjg1MSwxNy43NTQ0OTQxIDYzLjI2ODMxMDQsMTguMzUzOTAyMiA2My4yNjgzMTA0LDE5LjE3ODkwNjMgTDYzLjI2ODMxMDQsMjQgTDYyLjQ3NTUzNjksMjQgWiBNNjAuMDU4NTQ0OCwyMy4yNDU4OTg0IEM2MC43MjQ1NjM3LDIzLjI0NTg5ODQgNjEuMjQ3NzAzLDIzLjA2MzI4MzEgNjEuNjI3OTc4NCwyMi42OTgwNDY5IEM2Mi4wMDgyNTM3LDIyLjMzMjgxMDcgNjIuMTk4Mzg4NSwyMS44MjE0ODc3IDYyLjE5ODM4ODUsMjEuMTY0MDYyNSBMNjIuMTk4Mzg4NSwyMC41MjU5NzY2IEw2MS4xMjg0NjY2LDIwLjU3MTA5MzggQzYwLjI3NzY4MTIsMjAuNjAxMTcyMSA1OS42NjQzMDg0LDIwLjczMzI5OTcgNTkuMjg4MzMsMjAuOTY3NDgwNSBDNTguOTEyMzUxNSwyMS4yMDE2NjE0IDU4LjcyNDM2NTEsMjEuNTY1ODE3OSA1OC43MjQzNjUxLDIyLjA1OTk2MSBDNTguNzI0MzY1MSwyMi40NDY2ODE2IDU4Ljg0MTQ1MzgsMjIuNzQxMDE0NiA1OS4wNzU2MzQ2LDIyLjk0Mjk2ODggQzU5LjMwOTgxNTUsMjMuMTQ0OTIyOSA1OS42Mzc0NDg5LDIzLjI0NTg5ODQgNjAuMDU4NTQ0OCwyMy4yNDU4OTg0IFogTTYzLjcwMTEyMjksMTYuOTM1OTM3NiBMNjQuODQ4Mzg4NSwxNi45MzU5Mzc2IEw2Ni4zOTUyNjM1LDIwLjk2NDI1NzkgQzY2LjczNDcxODMsMjEuODgzNzkzNyA2Ni45NDUyNjMsMjIuNTQ3NjU0MiA2Ny4wMjY5MDQxLDIyLjk1NTg1OTQgTDY3LjA3ODQ2NjYsMjIuOTU1ODU5NCBDNjcuMTM0MzI2MiwyMi43MzY3MTc3IDY3LjI1MTQxNDksMjIuMzYxODE5MSA2Ny40Mjk3MzYxLDIxLjgzMTE1MjQgQzY3LjYwODA1NzMsMjEuMzAwNDg1NyA2OC4xOTEzNTIyLDE5LjY2ODc2MzcgNjkuMTc5NjM4NCwxNi45MzU5Mzc2IEw3MC4zMjY5MDQsMTYuOTM1OTM3NiBMNjcuMjkxMTYxOSwyNC45Nzk2ODc1IEM2Ni45OTAzNzkxLDI1Ljc3NDYxMzMgNjYuNjM5MTEzMSwyNi4zMzg1NzI1IDY2LjIzNzM1MzMsMjYuNjcxNTgyIEM2NS44MzU1OTM1LDI3LjAwNDU5MTUgNjUuMzQyNTMyLDI3LjE3MTA5MzcgNjQuNzU4MTU0MSwyNy4xNzEwOTM3IEM2NC40MzE1OSwyNy4xNzEwOTM3IDY0LjEwOTMyNzYsMjcuMTM0NTcwNiA2My43OTEzNTcyLDI3LjA2MTUyMzQgTDYzLjc5MTM1NzIsMjYuMjA0Mjk2OCBDNjQuMDI3Njg2NiwyNi4yNTU4NTk2IDY0LjI5MTk0MTcsMjYuMjgxNjQwNiA2NC41ODQxMzA3LDI2LjI4MTY0MDYgQzY1LjMxODksMjYuMjgxNjQwNiA2NS44NDMxMTM1LDI1Ljg2OTE0NDcgNjYuMTU2Nzg2OSwyNS4wNDQxNDA2IEw2Ni41NDk5NTEsMjQuMDM4NjcxOSBMNjMuNzAxMTIyOSwxNi45MzU5Mzc2IFoiIGlkPSJQYXkiIGZpbGwtb3BhY2l0eT0iMC43Ij48L3BhdGg+DQogICAgICAgICAgICA8cGF0aCBkPSJNNDUuOTk4OTg3OSw2LjA4MTgwNzk5IEM0Ni41NjE5NzM2LDUuNzUzODcxODkgNDcuNDAwNjA2OCw2LjIxMjA5NjEyIDQ3Ljg3MTYwNzQsNy4xMDUyMDQ5OSBDNDguMzQyOTE1Niw3Ljk5ODYwOTI5IDQ4LjI2ODQ2NjEsOC45ODg2MjE4IDQ3LjcwNTE3MjgsOS4zMTY1NTc5MSBDNDcuMTQyMTg3Miw5LjY0NDc4OTQ1IDQ2LjMwMzg2MTYsOS4xODY1NjUyMiA0NS44MzI1NTM0LDguMjkzMTYwOTEgQzQ1LjM2MTI0NTIsNy4zOTk3NTY2MSA0NS40MzYwMDIzLDYuNDA5NzQ0MSA0NS45OTg5ODc5LDYuMDgxODA3OTkgWiBNNTAuMzQzODIxOSw3Ljc3ODgwMzQ3IEM1MC45MDEyNyw3LjQ0MDUyNzA0IDUxLjc0NzI4NjcsNy44ODMzODg1IDUyLjIzMzA1NCw4Ljc2NzkyOTY3IEM1Mi43MTkxMjkxLDkuNjUyNDcwODQgNTIuNjYwOTg0NywxMC42NDM2NjUxIDUyLjEwMzUzNjYsMTAuOTgxOTQxNSBDNTEuNTQ2MDg4NSwxMS4zMjAyMTggNTAuNzAwMDcxOCwxMC44NzczNTY1IDUwLjIxMzk5NjgsOS45OTI4MTUzNCBDNDkuNzI4MjI5NCw5LjEwODU2OTYgNDkuNzg2MDY2Miw4LjExNzA3OTkgNTAuMzQzODIxOSw3Ljc3ODgwMzQ3IFogTTQxLjYxNzU0NDUsOC45OTMzNDg4MSBDNDIuMTAzNjE5Niw4LjU0OTYwMTA0IDQzLjAxNDI0MTEsOC44MTQ2MDg4NiA0My42NTE5ODM5LDkuNTg1NDA2NDMgQzQ0LjI4OTQxOSwxMC4zNTYyMDQgNDQuNDEyNDc2LDExLjM0MDg5ODYgNDMuOTI2NzA4NiwxMS43ODQ5NDE4IEM0My40NDA2MzM1LDEyLjIyODY4OTYgNDIuNTMwMDEyLDExLjk2MzY4MTggNDEuODkyMjY5MiwxMS4xOTI4ODQyIEM0MS4yNTQ4MzQxLDEwLjQyMjA4NjcgNDEuMTMxNzc3MSw5LjQzNzM5MjAyIDQxLjYxNzU0NDUsOC45OTMzNDg4MSBaIE00NS41NDQ2MDAxLDIuOTIzODcxOTMgQzQ1Ljc5Nzc4OTgsMi41OTUwNDk1MiA0Ni4zOTI3NzAzLDIuNjYwMzQxMyA0Ni44NzM2MTU0LDMuMDY5MjI3NCBDNDcuMzU0MTUyOCwzLjQ3ODQwODkzIDQ3LjUzODQzMDYsNC4wNzYzNzUzMSA0Ny4yODUyNDA5LDQuNDA0OTAyMjkgQzQ3LjAzMjA1MTIsNC43MzM3MjQ3MSA0Ni40MzcwNzA4LDQuNjY4NDMyOTIgNDUuOTU2NTMzMyw0LjI1OTI1MTM5IEM0NS40NzU2ODgyLDMuODUwMzY1MjkgNDUuMjkxNDEwNCwzLjI1MjM5ODkyIDQ1LjU0NDYwMDEsMi45MjM4NzE5MyBaIE00NC45MTkxNjMsMC4xMDkyMzQ3NTYgQzQ1LjA3MTEzODQsLTAuMDg3ODIyMzQ0NiA0NS40NzI2MTE4LC0wLjAxMTAwODQ4MjIgNDUuODE1OTQwNywwLjI4MTE3OTYzMyBDNDYuMTU5MjY5NywwLjU3MzM2Nzc0NyA0Ni4zMTQzMjE0LDAuOTcwMTQwODkgNDYuMTYyMzQ2MSwxLjE2NzE5Nzk5IEM0Ni4wMTAzNzA3LDEuMzY0MjU1MDkgNDUuNjA4ODk3NCwxLjI4NzQ0MTIzIDQ1LjI2NTU2ODQsMC45OTUyNTMxMTQgQzQ0LjkyMjIzOTUsMC43MDMwNjUgNDQuNzY3MTg3NywwLjMwNjI5MTg1NyA0NC45MTkxNjMsMC4xMDkyMzQ3NTYgWiBNNTMuNDMyMjQ0Miw2LjM0Mzg2MTQ0IEM1My43ODA4MDMxLDYuMTMyMzI3ODggNTQuMzEzOTQ3NCw2LjQxNzQyNTQ4IDU0LjYyMzEyOCw2Ljk4MDIzNDc0IEM1NC45MzIzMDg3LDcuNTQzMDQ0IDU0LjkwMDYyMTUsOC4xNzA4NDk2MSA1NC41NTIwNjI2LDguMzgyMDg3NzMgQzU0LjIwMzgxMTQsOC41OTM2MjEyOSA1My42NzAzNTk1LDguMzA4ODE5MTIgNTMuMzYxMTc4OCw3Ljc0NTcxNDQyIEM1My4wNTE5OTgyLDcuMTgyOTA1MTYgNTMuMDgzNjg1Myw2LjU1NTM5NSA1My40MzIyNDQyLDYuMzQzODYxNDQgWiBNNTUuMDQ5NTIwNCw1LjI5MDAzNDMzIEM1NS4yNTg0MDk3LDUuMTYzMjkxNDYgNTUuNjA2OTY4NSw1LjM4NjM0NzEgNTUuODI3ODU1OCw1Ljc4ODQzODEyIEM1Ni4wNDg3NDMsNi4xOTA1MjkxNSA1Ni4wNTgyOCw2LjYxOTIwOTU5IDU1Ljg0OTM5MDcsNi43NDU5NTI0NiBDNTUuNjQwMTkzOSw2Ljg3Mjk5MDc3IDU1LjI5MTYzNSw2LjY0OTYzOTcgNTUuMDcwNzQ3OCw2LjI0Nzg0NDExIEM1NC44NDk4NjA1LDUuODQ1NzUzMDggNTQuODQwMzIzNiw1LjQxNjc3NzIxIDU1LjA0OTUyMDQsNS4yOTAwMzQzMyBaIE0zOC40MDU3NTc2LDcuNTM4MDIxNTYgQzM4LjU3NTg4MzksNy4xNTQ4Mzg1NiAzOS4xNjgwOTU1LDcuMDY2Nzk4MDYgMzkuNzI4NjIsNy4zNDE1NTUzMyBDNDAuMjg5MTQ0NSw3LjYxNjMxMjYxIDQwLjYwNTcwODYsOC4xNDk1NzgwOCA0MC40MzU1ODIzLDguNTMyNzYxMDcgQzQwLjI2NTQ1NjEsOC45MTU5NDQwNyAzOS42NzMyNDQ0LDkuMDAzOTg0NTggMzkuMTEyNzE5OSw4LjcyOTUyMjc0IEMzOC41NTIxOTU0LDguNDU0NzY1NDYgMzguMjM1NjMxNCw3LjkyMTQ5OTk5IDM4LjQwNTc1NzYsNy41MzgwMjE1NiBaIE0zNi4wMDA5MTY4LDYuNjE3MTQxNTIgQzM2LjAyMTgzNjUsNi4zNjQ1NDIwOSAzNi4zOTU2MjIsNi4xOTIzMDE3OCAzNi44MzU4NTgzLDYuMjMyNzc2NzcgQzM3LjI3NjA5NDYsNi4yNzMyNTE3NyAzNy42MTU3MzE5LDYuNTExMDc5MzEgMzcuNTk0NTA0NSw2Ljc2MzY3ODc0IEMzNy41NzM1ODQ5LDcuMDE2NTczNjEgMzcuMTk5Nzk5Myw3LjE4ODUxODQ4IDM2Ljc1OTU2Myw3LjE0ODA0MzQ5IEMzNi4zMTk2MzQzLDcuMTA3NTY4NDkgMzUuOTc5OTk3MSw2Ljg3MDAzNjM5IDM2LjAwMDkxNjgsNi42MTcxNDE1MiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGwtb3BhY2l0eT0iMC4zMDAwMDAwMTIiPjwvcGF0aD4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik00NS45OTg5ODc5LDMyLjA4MTgwOCBDNDYuNTYxOTczNiwzMS43NTM4NzE5IDQ3LjQwMDYwNjgsMzIuMjEyMDk2MSA0Ny44NzE2MDc0LDMzLjEwNTIwNSBDNDguMzQyOTE1NiwzMy45OTg2MDkzIDQ4LjI2ODQ2NjEsMzQuOTg4NjIxOCA0Ny43MDUxNzI4LDM1LjMxNjU1NzkgQzQ3LjE0MjE4NzIsMzUuNjQ0Nzg5NSA0Ni4zMDM4NjE2LDM1LjE4NjU2NTIgNDUuODMyNTUzNCwzNC4yOTMxNjA5IEM0NS4zNjEyNDUyLDMzLjM5OTc1NjYgNDUuNDM2MDAyMywzMi40MDk3NDQxIDQ1Ljk5ODk4NzksMzIuMDgxODA4IFogTTUwLjM0MzgyMTksMzMuNzc4ODAzNSBDNTAuOTAxMjcsMzMuNDQwNTI3IDUxLjc0NzI4NjcsMzMuODgzMzg4NSA1Mi4yMzMwNTQsMzQuNzY3OTI5NyBDNTIuNzE5MTI5MSwzNS42NTI0NzA4IDUyLjY2MDk4NDcsMzYuNjQzNjY1MSA1Mi4xMDM1MzY2LDM2Ljk4MTk0MTUgQzUxLjU0NjA4ODUsMzcuMzIwMjE4IDUwLjcwMDA3MTgsMzYuODc3MzU2NSA1MC4yMTM5OTY4LDM1Ljk5MjgxNTMgQzQ5LjcyODIyOTQsMzUuMTA4NTY5NiA0OS43ODYwNjYyLDM0LjExNzA3OTkgNTAuMzQzODIxOSwzMy43Nzg4MDM1IFogTTQxLjYxNzU0NDUsMzQuOTkzMzQ4OCBDNDIuMTAzNjE5NiwzNC41NDk2MDEgNDMuMDE0MjQxMSwzNC44MTQ2MDg5IDQzLjY1MTk4MzksMzUuNTg1NDA2NCBDNDQuMjg5NDE5LDM2LjM1NjIwNCA0NC40MTI0NzYsMzcuMzQwODk4NiA0My45MjY3MDg2LDM3Ljc4NDk0MTggQzQzLjQ0MDYzMzUsMzguMjI4Njg5NiA0Mi41MzAwMTIsMzcuOTYzNjgxOCA0MS44OTIyNjkyLDM3LjE5Mjg4NDIgQzQxLjI1NDgzNDEsMzYuNDIyMDg2NyA0MS4xMzE3NzcxLDM1LjQzNzM5MiA0MS42MTc1NDQ1LDM0Ljk5MzM0ODggWiBNNDUuNTQ0NjAwMSwyOC45MjM4NzE5IEM0NS43OTc3ODk4LDI4LjU5NTA0OTUgNDYuMzkyNzcwMywyOC42NjAzNDEzIDQ2Ljg3MzYxNTQsMjkuMDY5MjI3NCBDNDcuMzU0MTUyOCwyOS40Nzg0MDg5IDQ3LjUzODQzMDYsMzAuMDc2Mzc1MyA0Ny4yODUyNDA5LDMwLjQwNDkwMjMgQzQ3LjAzMjA1MTIsMzAuNzMzNzI0NyA0Ni40MzcwNzA4LDMwLjY2ODQzMjkgNDUuOTU2NTMzMywzMC4yNTkyNTE0IEM0NS40NzU2ODgyLDI5Ljg1MDM2NTMgNDUuMjkxNDEwNCwyOS4yNTIzOTg5IDQ1LjU0NDYwMDEsMjguOTIzODcxOSBaIE00NC45MTkxNjMsMjYuMTA5MjM0OCBDNDUuMDcxMTM4NCwyNS45MTIxNzc3IDQ1LjQ3MjYxMTgsMjUuOTg4OTkxNSA0NS44MTU5NDA3LDI2LjI4MTE3OTYgQzQ2LjE1OTI2OTcsMjYuNTczMzY3NyA0Ni4zMTQzMjE0LDI2Ljk3MDE0MDkgNDYuMTYyMzQ2MSwyNy4xNjcxOTggQzQ2LjAxMDM3MDcsMjcuMzY0MjU1MSA0NS42MDg4OTc0LDI3LjI4NzQ0MTIgNDUuMjY1NTY4NCwyNi45OTUyNTMxIEM0NC45MjIyMzk1LDI2LjcwMzA2NSA0NC43NjcxODc3LDI2LjMwNjI5MTkgNDQuOTE5MTYzLDI2LjEwOTIzNDggWiBNNTMuNDMyMjQ0MiwzMi4zNDM4NjE0IEM1My43ODA4MDMxLDMyLjEzMjMyNzkgNTQuMzEzOTQ3NCwzMi40MTc0MjU1IDU0LjYyMzEyOCwzMi45ODAyMzQ3IEM1NC45MzIzMDg3LDMzLjU0MzA0NCA1NC45MDA2MjE1LDM0LjE3MDg0OTYgNTQuNTUyMDYyNiwzNC4zODIwODc3IEM1NC4yMDM4MTE0LDM0LjU5MzYyMTMgNTMuNjcwMzU5NSwzNC4zMDg4MTkxIDUzLjM2MTE3ODgsMzMuNzQ1NzE0NCBDNTMuMDUxOTk4MiwzMy4xODI5MDUyIDUzLjA4MzY4NTMsMzIuNTU1Mzk1IDUzLjQzMjI0NDIsMzIuMzQzODYxNCBaIE01NS4wNDk1MjA0LDMxLjI5MDAzNDMgQzU1LjI1ODQwOTcsMzEuMTYzMjkxNSA1NS42MDY5Njg1LDMxLjM4NjM0NzEgNTUuODI3ODU1OCwzMS43ODg0MzgxIEM1Ni4wNDg3NDMsMzIuMTkwNTI5MSA1Ni4wNTgyOCwzMi42MTkyMDk2IDU1Ljg0OTM5MDcsMzIuNzQ1OTUyNSBDNTUuNjQwMTkzOSwzMi44NzI5OTA4IDU1LjI5MTYzNSwzMi42NDk2Mzk3IDU1LjA3MDc0NzgsMzIuMjQ3ODQ0MSBDNTQuODQ5ODYwNSwzMS44NDU3NTMxIDU0Ljg0MDMyMzYsMzEuNDE2Nzc3MiA1NS4wNDk1MjA0LDMxLjI5MDAzNDMgWiBNMzguNDA1NzU3NiwzMy41MzgwMjE2IEMzOC41NzU4ODM5LDMzLjE1NDgzODYgMzkuMTY4MDk1NSwzMy4wNjY3OTgxIDM5LjcyODYyLDMzLjM0MTU1NTMgQzQwLjI4OTE0NDUsMzMuNjE2MzEyNiA0MC42MDU3MDg2LDM0LjE0OTU3ODEgNDAuNDM1NTgyMywzNC41MzI3NjExIEM0MC4yNjU0NTYxLDM0LjkxNTk0NDEgMzkuNjczMjQ0NCwzNS4wMDM5ODQ2IDM5LjExMjcxOTksMzQuNzI5NTIyNyBDMzguNTUyMTk1NCwzNC40NTQ3NjU1IDM4LjIzNTYzMTQsMzMuOTIxNSAzOC40MDU3NTc2LDMzLjUzODAyMTYgWiBNMzYuMDAwOTE2OCwzMi42MTcxNDE1IEMzNi4wMjE4MzY1LDMyLjM2NDU0MjEgMzYuMzk1NjIyLDMyLjE5MjMwMTggMzYuODM1ODU4MywzMi4yMzI3NzY4IEMzNy4yNzYwOTQ2LDMyLjI3MzI1MTggMzcuNjE1NzMxOSwzMi41MTEwNzkzIDM3LjU5NDUwNDUsMzIuNzYzNjc4NyBDMzcuNTczNTg0OSwzMy4wMTY1NzM2IDM3LjE5OTc5OTMsMzMuMTg4NTE4NSAzNi43NTk1NjMsMzMuMTQ4MDQzNSBDMzYuMzE5NjM0MywzMy4xMDc1Njg1IDM1Ljk3OTk5NzEsMzIuODcwMDM2NCAzNi4wMDA5MTY4LDMyLjYxNzE0MTUgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlLUNvcHkiIGZpbGwtb3BhY2l0eT0iMC4zMDAwMDAwMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2LjAwMDAwMCwgMzIuMDAwMDAwKSBzY2FsZSgxLCAtMSkgdHJhbnNsYXRlKC00Ni4wMDAwMDAsIC0zMi4wMDAwMDApICI+PC9wYXRoPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+);\n      background-repeat: no-repeat;\n      text-indent: -9999px;\n      width: 74px;\n      height: 42px; }\n  .sidebar .login {\n    width: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: start;\n        justify-content: flex-start;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n  .sidebar .login .login-icon {\n      height: 38px;\n      width: 48px;\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMTYgOVY3aC0xdjJoLTFhMSAxIDAgMCAxLTEtMVY2SDhhNCA0IDAgMSAxLTggMFY0YTQgNCAwIDEgMSA4IDBoMTBhMSAxIDAgMCAxIDAgMnYyYTEgMSAwIDAgMS0xIDFoLTF6TTQgMWEzIDMgMCAwIDAtMyAzdjJhMyAzIDAgMSAwIDYgMFY0YTMgMyAwIDAgMC0zLTN6Ii8+DQogICAgPC9kZWZzPg0KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1IDE0KSI+DQogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+DQogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPg0KICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYSIvPg0KICAgICAgICAgICAgPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNSIgbWFzaz0idXJsKCNiKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTS0xNS0xNGg0OHYzOGgtNDh6Ii8+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=);\n      background-repeat: no-repeat; }\n  .sidebar .login .login-text {\n      width: calc(100% - 48px);\n      font-size: 0.7875em;\n      letter-spacing: -0.2px;\n      color: rgba(0, 0, 0, 0.6);\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .sidebar .nav-item {\n    text-decoration: none;\n    width: 100%;\n    height: 100px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-align: center;\n        align-items: center;\n    cursor: pointer;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    font-size: 0.85em;\n    letter-spacing: -0.2px;\n    color: black; }\n  .sidebar .nav-item .icon {\n      margin-top: 18px;\n      width: 48px;\n      height: 38px;\n      background-repeat: no-repeat;\n      transition: 0.3s all ease-in-out; }\n  .sidebar .nav-item.transactions .icon {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMi4xMzMgMTJDLjk1NSAxMiAwIDExLjEwNSAwIDEwVjJDMCAuODk1Ljk1NSAwIDIuMTMzIDBoMTEuNzM0QzE1LjA0NSAwIDE2IC44OTUgMTYgMnY4YzAgMS4xMDUtLjk1NSAyLTIuMTMzIDJIMi4xMzN6bTEyLjgtMTBjMC0uNTUyLS40NzgtMS0xLjA2Ni0xSDIuMTMzYy0uNTg4IDAtMS4wNjYuNDQ4LTEuMDY2IDF2MWgxMy44NjZWMnpNMS4wNjcgNnY0YzAgLjU1Mi40NzggMSAxLjA2NiAxaDExLjczNGMuNTg4IDAgMS4wNjYtLjQ0OCAxLjA2Ni0xVjZIMS4wNjd6Ii8+DQogICAgPC9kZWZzPg0KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2IDEzKSI+DQogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+DQogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPg0KICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAiIHhsaW5rOmhyZWY9IiNhIi8+DQo8ZyBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii41IiBtYXNrPSJ1cmwoI2IpIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNLTE2LTEzaDQ4djM4aC00OHoiLz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==); }\n  .sidebar .nav-item.transactions:hover .icon {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMi4xMzMgMTJDLjk1NSAxMiAwIDExLjEwNSAwIDEwVjJDMCAuODk1Ljk1NSAwIDIuMTMzIDBoMTEuNzM0QzE1LjA0NSAwIDE2IC44OTUgMTYgMnY4YzAgMS4xMDUtLjk1NSAyLTIuMTMzIDJIMi4xMzN6bTEyLjgtMTBjMC0uNTUyLS40NzgtMS0xLjA2Ni0xSDIuMTMzYy0uNTg4IDAtMS4wNjYuNDQ4LTEuMDY2IDF2MWgxMy44NjZWMnpNMS4wNjcgNnY0YzAgLjU1Mi40NzggMSAxLjA2NiAxaDExLjczNGMuNTg4IDAgMS4wNjYtLjQ0OCAxLjA2Ni0xVjZIMS4wNjd6Ii8+DQogICAgPC9kZWZzPg0KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2IDEzKSI+DQogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+DQogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPg0KICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAiIHhsaW5rOmhyZWY9IiNhIi8+DQogIDxnIGZpbGw9IiMxYWE0YjgiIG1hc2s9InVybCgjYikiPg0KDQogICAgICAgICAgICAgICAgPHBhdGggZD0iTS0xNi0xM2g0OHYzOGgtNDh6Ii8+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=); }\n  .sidebar .nav-item.logout .icon {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMTYgOVY3aC0xdjJoLTFhMSAxIDAgMCAxLTEtMVY2SDhhNCA0IDAgMSAxLTggMFY0YTQgNCAwIDEgMSA4IDBoMTBhMSAxIDAgMCAxIDAgMnYyYTEgMSAwIDAgMS0xIDFoLTF6TTQgMWEzIDMgMCAwIDAtMyAzdjJhMyAzIDAgMSAwIDYgMFY0YTMgMyAwIDAgMC0zLTN6Ii8+DQogICAgPC9kZWZzPg0KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1IDE0KSI+DQogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+DQogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPg0KICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYSIvPg0KICAgICAgICAgICAgPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIuNSIgbWFzaz0idXJsKCNiKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTS0xNS0xNGg0OHYzOGgtNDh6Ii8+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=); }\n  .sidebar .nav-item.logout:hover .icon {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMTYgOVY3aC0xdjJoLTFhMSAxIDAgMCAxLTEtMVY2SDhhNCA0IDAgMSAxLTggMFY0YTQgNCAwIDEgMSA4IDBoMTBhMSAxIDAgMCAxIDAgMnYyYTEgMSAwIDAgMS0xIDFoLTF6TTQgMWEzIDMgMCAwIDAtMyAzdjJhMyAzIDAgMSAwIDYgMFY0YTMgMyAwIDAgMC0zLTN6Ii8+DQogICAgPC9kZWZzPg0KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1IDE0KSI+DQogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+DQogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPg0KICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYSIvPg0KICA8ZyBmaWxsPSIjMWFhNGI4IiBtYXNrPSJ1cmwoI2IpIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNLTE1LTE0aDQ4djM4aC00OHoiLz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==); }\n"

/***/ }),

/***/ "./src/app/status/components/status/status.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/status/components/status/status.component.ts ***!
  \**************************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../auth/actions/auth.actions */ "./src/app/auth/actions/auth.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatusComponent = /** @class */ (function () {
    function StatusComponent(store) {
        this.store = store;
    }
    StatusComponent.prototype.logout = function () {
        this.store.dispatch(new _auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_3__["Logout"]());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], StatusComponent.prototype, "isAuthenticated", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], StatusComponent.prototype, "merchant", void 0);
    StatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/status/components/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.scss */ "./src/app/status/components/status/status.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/status/containers/login-status/login-status.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/status/containers/login-status/login-status.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-status\n  [isAuthenticated]=\"isAuthenticated$ | async\"\n  [merchant]=\"merchant$ | async \"\n></app-status>\n"

/***/ }),

/***/ "./src/app/status/containers/login-status/login-status.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/status/containers/login-status/login-status.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/status/containers/login-status/login-status.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/status/containers/login-status/login-status.component.ts ***!
  \**************************************************************************/
/*! exports provided: LoginStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStatusComponent", function() { return LoginStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/reducers */ "./src/app/core/reducers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginStatusComponent = /** @class */ (function () {
    function LoginStatusComponent(store) {
        this.store = store;
        this.merchant$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_reducers__WEBPACK_IMPORTED_MODULE_2__["getMerchant"]));
    }
    LoginStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-status',
            template: __webpack_require__(/*! ./login-status.component.html */ "./src/app/status/containers/login-status/login-status.component.html"),
            styles: [__webpack_require__(/*! ./login-status.component.scss */ "./src/app/status/containers/login-status/login-status.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], LoginStatusComponent);
    return LoginStatusComponent;
}());



/***/ }),

/***/ "./src/app/transactions/actions/transactions.actions.ts":
/*!**************************************************************!*\
  !*** ./src/app/transactions/actions/transactions.actions.ts ***!
  \**************************************************************/
/*! exports provided: TransactionsActionTypes, Load, LoadSuccess, LoadFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsActionTypes", function() { return TransactionsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Load", function() { return Load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFailure", function() { return LoadFailure; });
var TransactionsActionTypes;
(function (TransactionsActionTypes) {
    TransactionsActionTypes["Load"] = "[Transaction] Load";
    TransactionsActionTypes["LoadSuccess"] = "[Transaction] Load Success";
    TransactionsActionTypes["LoadFailure"] = "[Transaction] LoadFailure";
})(TransactionsActionTypes || (TransactionsActionTypes = {}));
var Load = /** @class */ (function () {
    function Load(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.Load;
    }
    return Load;
}());

var LoadSuccess = /** @class */ (function () {
    function LoadSuccess(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.LoadSuccess;
    }
    return LoadSuccess;
}());

var LoadFailure = /** @class */ (function () {
    function LoadFailure(payload) {
        this.payload = payload;
        this.type = TransactionsActionTypes.LoadFailure;
    }
    return LoadFailure;
}());



/***/ }),

/***/ "./src/app/transactions/components/transaction-list/transaction-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/transactions/components/transaction-list/transaction-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login-status></app-login-status>\n<div class=\"container\">\n  <div class=\"group\" *ngFor=\"let group of transactions\">\n    {{test(group)}}\n    <!-- <div class=\"date-pointer\">\n      <div class=\"pointer\" [title]=\"group.date | date:'fullDate'\">{{group['date'] | date:'dd.MM'}}</div>\n    </div> -->\n    <!-- <div class=\"transactions\">\n      <app-transaction *ngFor=\"let transaction of group['values'] | paginate: { id: 'remote', itemsPerPage: 8, currentPage: currentPage, totalItems: total };\" [transaction]=\"transaction\"></app-transaction>\n    </div> -->\n  </div>\n  <!-- <pagination-template #p=\"paginationApi\" id=\"remote\" (pageChange)=\"onSubmit($event)\">\n    <ul class=\"pagination\" role=\"navigation\" *ngIf=\"!(p.pages.length <= 1)\">\n      <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\">\n        <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\">\n          <svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"rgba(0,0,0,0.7)\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"></polyline></svg>\n          <span class=\"prev-icon\">Prev</span>\n        </a>\n        <span *ngIf=\"p.isFirstPage()\">\n          <svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"rgba(0,0,0,0.7)\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"></polyline></svg>\n          <span class=\"prev-icon\">Prev</span>\n        </span>\n      </li>\n      <li [class.current]=\"p.getCurrent() === page.value\" *ngFor=\"let page of p.pages\">\n        <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n          <span>{{ page.label }}</span>\n        </a>\n        <ng-container *ngIf=\"p.getCurrent() === page.value\">\n          <span>{{ page.label }}</span>\n        </ng-container>\n      </li>\n      <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\">\n        <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\">\n          <span class=\"next-icon\">Next</span>\n         <svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"></polyline></svg>\n        </a>\n        <span *ngIf=\"p.isLastPage()\">\n          <span class=\"next-icon\">Next</span>\n        <svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"></polyline></svg>\n        </span>\n      </li>\n    </ul>\n  </pagination-template> -->\n  <span *ngIf=\"pending\">Loading...</span>\n</div>"

/***/ }),

/***/ "./src/app/transactions/components/transaction-list/transaction-list.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/transactions/components/transaction-list/transaction-list.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 150px 38px 0 186px; }\n  .container .pagination {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    padding: 0;\n    -ms-flex-pack: center;\n        justify-content: center;\n    list-style: none; }\n  .container .pagination .current,\n    .container .pagination .disabled {\n      pointer-events: none; }\n  .container .pagination .disabled {\n      opacity: 0.5; }\n  .container .pagination .prev-icon {\n      margin-left: 15px; }\n  .container .pagination .next-icon {\n      margin-right: 15px; }\n  .container .pagination .current {\n      background: #e4eaf9;\n      border-radius: 50%; }\n  .container .pagination .current > * {\n        color: black; }\n  .container .pagination > * {\n      position: relative;\n      margin-right: 15px;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n      min-width: 35px;\n      min-height: 35px; }\n  .container .pagination > * > * {\n        cursor: pointer;\n        display: block;\n        color: rgba(0, 0, 0, 0.7);\n        transition: color 0.1s ease-in-out;\n        outline: none;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none; }\n  .container .pagination > * > *:hover {\n          color: black; }\n  .container .group {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between; }\n  .container .group .date-pointer {\n      width: 102px;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: center;\n          justify-content: center;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n  .container .group .date-pointer .pointer {\n        font-size: 0.85em;\n        color: black;\n        padding: 8px 14px;\n        margin-top: 8px;\n        border-radius: 20px;\n        background-color: #e4eaf9; }\n  .container .group .transactions {\n      width: 100%;\n      margin-bottom: 8px; }\n"

/***/ }),

/***/ "./src/app/transactions/components/transaction-list/transaction-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/transactions/components/transaction-list/transaction-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TransactionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionListComponent", function() { return TransactionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransactionListComponent = /** @class */ (function () {
    function TransactionListComponent() {
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TransactionListComponent.prototype.ngOnChanges = function () {
        console.log('CHANGED');
        if (this.transactions) {
            console.log(this.transactions);
        }
    };
    TransactionListComponent.prototype.test = function (value, index) {
        console.log('FIRST NGFOR CALLS', value, index);
    };
    TransactionListComponent.prototype.onSubmit = function ($event) {
        this.submitted.emit($event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TransactionListComponent.prototype, "transactions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TransactionListComponent.prototype, "total", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TransactionListComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TransactionListComponent.prototype, "pending", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TransactionListComponent.prototype, "errorMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TransactionListComponent.prototype, "submitted", void 0);
    TransactionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction-list',
            template: __webpack_require__(/*! ./transaction-list.component.html */ "./src/app/transactions/components/transaction-list/transaction-list.component.html"),
            styles: [__webpack_require__(/*! ./transaction-list.component.scss */ "./src/app/transactions/components/transaction-list/transaction-list.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], TransactionListComponent);
    return TransactionListComponent;
}());



/***/ }),

/***/ "./src/app/transactions/components/transaction/transaction.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/transactions/components/transaction/transaction.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"transaction\" [ngClass]=\"appliedClass(transaction)\">\n  <div class=\"transaction-row d-flex\" (click)=\"toggleState()\">\n    <div class=\"status\">\n      <div class=\"icon\" [ngClass]=\"transaction.status\"></div>\n    </div>\n    <div class=\"time\" [title]=\"transaction.date | date:'full'\">\n      {{ transaction.date | date:'h:mm' }}\n    </div>\n    <div class=\"amount\" [ngClass]=\"transaction.status\">\n      {{ transaction.orderData['amount'] | amount:transaction.status }}\n    </div>\n    <div class=\"customer\">\n      {{ transaction.source | customer }}\n    </div>\n    <div class=\"customer_icons\">\n      <div *ngIf=\"transaction.orderType['type'] === 'card'; else icon\">\n        <div class=\"icon\">\n          <div class=\"card\" [ngClass]=\"transaction.source | card\"></div>\n        </div>\n      </div>\n      <ng-template #icon>\n        <div [ngClass]=\"transaction.status\">\n          <div class=\"icon\" [ngClass]=\"transaction.orderType['type']\"></div>\n        </div>\n      </ng-template>\n      <div *ngIf=\"transaction.orderType['isAutopayment']\" [ngClass]=\"transaction.status\">\n        <div class=\"icon autopayment\"></div>\n      </div>\n      <div *ngIf=\"transaction.orderType['isSaved']\" [ngClass]=\"transaction.status\">\n        <div class=\"icon saved\"></div>\n      </div>\n    </div>\n    <div class=\"destination\">{{ transaction.destination }}</div>\n  </div>\n  <div class=\"toggle-info\" [@toggle]=\"toggle\">\n    <div class=\"transaction-row d-flex\">\n      <div class=\"status\">\n        <div class=\"icon info\"></div>\n      </div>\n      <div class=\"details d-flex j-between\">\n        Transaction {{ transaction._id }}\n      </div>\n    </div>\n    <div class=\"transaction-row d-flex\">\n      <div class=\"status\">\n        <div class=\"icon info\"></div>\n      </div>\n      <div class=\"details d-flex j-between\">\n        Terminal {{ transaction.terminal }}\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/transactions/components/transaction/transaction.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/transactions/components/transaction/transaction.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".transaction {\n  margin-bottom: 2px;\n  cursor: pointer;\n  background-color: white; }\n  .transaction.is-first {\n    border-radius: 10px 10px 0 0; }\n  .transaction.is-last {\n    border-radius: 0 0 10px 10px; }\n  .transaction.is-single {\n    border-radius: 10px; }\n  .d-flex {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n  .j-between {\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n  .transaction-row {\n  width: 100%;\n  height: 48px;\n  font-size: 0.9125em;\n  padding: 0 12px; }\n  .transaction-row .icon {\n    width: 48px;\n    height: 38px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    background-repeat: no-repeat; }\n  .transaction-row .icon.info {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMyAwaDE0YTMgMyAwIDAgMSAzIDN2MTJhMyAzIDAgMCAxLTMgM0gzYTMgMyAwIDAgMS0zLTNWM2EzIDMgMCAwIDEgMy0zem0wIDFhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWM2EyIDIgMCAwIDAtMi0ySDN6bTQuMjYgNS42MjRjLjA3Ni0xLjQ1IDEuMTAxLTIuNTc3IDIuODY1LTIuNTc3IDEuNjQ3IDAgMi44MDMgMS4wNTMgMi44MDMgMi40NDcgMCAxLjAxMi0uNTA2IDEuNzMtMS40NDMgMi4zMzEtLjg5NS41NzQtMS4xNDguOTY0LTEuMTQ4IDEuNzIzdi41MTNoLS45MXYtLjY0M2MtLjAwNi0uOTEuMzktMS40ODMgMS4zNTQtMi4wOTkuODYxLS41NiAxLjE4My0xLjAzMiAxLjE4My0xLjc4NCAwLS45Ny0uNzczLTEuNjc1LTEuODczLTEuNjc1LTEuMDk0IDAtMS44NTMuNjg0LTEuOTQyIDEuNzY0aC0uODg4em0yLjcwOCA3LjQ3MmMtLjQ1MiAwLS43NjYtLjMyMi0uNzY2LS43NjYgMC0uNDUxLjMxNC0uNzcyLjc2Ni0uNzcyLjQ0NCAwIC43NTguMzIuNzU4Ljc3MiAwIC40NDQtLjMxNC43NjYtLjc1OC43NjZ6Ii8+DQogICAgPC9kZWZzPg0KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0IDEwKSI+DQogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+DQogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPg0KICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAiIHhsaW5rOmhyZWY9IiNhIi8+DQogICAgICAgICAgICA8ZyBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii41IiBtYXNrPSJ1cmwoI2IpIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNLTE0LTEwaDQ4djM4aC00OHoiLz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==); }\n  .transaction-row div {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: start;\n        justify-content: flex-start; }\n  .transaction-row .status {\n    width: 5%; }\n  .transaction-row .status div.payment {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNOC4wMyAxMC4zMjdsNC4yMi00LjIyYTEgMSAwIDAgMSAxLjQxNCAxLjQxNGwtNC4yMiA0LjIydi4wMDJsLS43MDYuNzA3YTEgMSAwIDAgMS0xLjQxNSAwTDQuNDk1IDkuNjJhMSAxIDAgMCAxIDEuNDE0LTEuNDE0bDIuMTIgMi4xMnpNOSAxOEE5IDkgMCAxIDEgOSAwYTkgOSAwIDAgMSAwIDE4em0wLTFBOCA4IDAgMSAwIDkgMWE4IDggMCAwIDAgMCAxNnoiLz4NCiAgICA8L2RlZnM+DQogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUgMTApIj4NCiAgICAgICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4NCiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+DQogICAgICAgICAgICA8L21hc2s+DQogICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMCIgeGxpbms6aHJlZj0iI2EiLz4NCiAgICAgICAgICAgIDxnIGZpbGw9IiMxYWE0YjgiIG1hc2s9InVybCgjYikiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0tMTUtMTBoNDh2MzhoLTQ4eiIvPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+); }\n  .transaction-row .status div.cancelinit {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNOSAxOEE5IDkgMCAxIDEgOSAwYTkgOSAwIDAgMSAwIDE4em0wLTFBOCA4IDAgMSAwIDkgMWE4IDggMCAwIDAgMCAxNnpNOC41IDRoMWwtLjA4NSA2LjVoLS44M0w4LjUgNHptLjUwNCAxMEM4LjQxOSAxNCA4IDEzLjU4NCA4IDEzLjAwNCA4IDEyLjQxNiA4LjQxOSAxMiA5LjAwNCAxMmMuNTg0IDAgLjk5Ni40MTYuOTk2IDEuMDA0IDAgLjU4LS40MTIuOTk2LS45OTYuOTk2eiIvPg0KICAgIDwvZGVmcz4NCiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNSAxMCkiPg0KICAgICAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPg0KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4NCiAgICAgICAgICAgIDwvbWFzaz4NCiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIwIiB4bGluazpocmVmPSIjYSIvPg0KICAgICAgICAgICAgPGcgZmlsbD0iI2Y3NWY1MiIgbWFzaz0idXJsKCNiKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTS0xNS0xMGg0OHYzOGgtNDh6Ii8+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=); }\n  .transaction-row .status div.hold {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMTggMjZhMiAyIDAgMCAxLTItMlYxNGEyIDIgMCAwIDEgMi0yaDEuOTcxbC4wMTkgMi4wMDcgMS4wMTUuOTkzaDEuMDI0TDIzIDE0bC4wMTQtMmgxLjk3MmwuMDA5IDIuMDIzLjk3Ni45NzdoMS4wMjRMMjggMTRsLjAyOS0ySDMwYTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMkgxOHptOC0xNmgxdjRoLTF2LTR6bS01IDBoMXY0aC0xdi00em0tNCA3aDE0djcuMDAzYzAgLjU1LS40NS45OTctMS4wMDcuOTk3SDE4LjAwN0ExLjAwNiAxLjAwNiAwIDAgMSAxNyAyNC4wMDNWMTd6Ii8+DQogICAgPC9kZWZzPg0KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4NCiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4NCiAgICAgICAgPC9tYXNrPg0KICAgICAgICA8dXNlIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMCIgeGxpbms6aHJlZj0iI2EiLz4NCiAgICAgICAgPGcgZmlsbD0iIzI2OGVmZiIgbWFzaz0idXJsKCNiKSI+DQogICAgICAgICAgICA8cGF0aCBkPSJNMCAwaDQ4djM4SDB6Ii8+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=); }\n  .transaction-row .status div.refund {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMi42NTcgMy41djdoLTF2LThoOHYxaC03eiIvPg0KICAgIDwvZGVmcz4NCiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiAxMi41KSI+DQogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+DQogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPg0KICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgPGcgZmlsbD0iI2IwYTRmYyIgbWFzaz0idXJsKCNiKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTS0xOC0xMGg0OHYzOGgtNDh6Ii8+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=);\n      -webkit-transform: rotateZ(-45deg);\n          -ms-transform: rotate(-45deg);\n              transform: rotateZ(-45deg); }\n  .transaction-row .time {\n    width: 10%; }\n  .transaction-row .details {\n    width: 100%;\n    padding-right: 30px; }\n  .transaction-row .amount {\n    width: 20%; }\n  .transaction-row .amount.refund {\n      color: #b0a4fc; }\n  .transaction-row .customer {\n    width: 140px; }\n  .transaction-row .customer_icons {\n    width: 25%; }\n  .transaction-row .customer_icons .card {\n      width: 34px;\n      height: 22px;\n      border: 1px solid rgba(0, 0, 0, 0.14);\n      border-radius: 4px;\n      background-repeat: no-repeat;\n      background-position: -1px; }\n  .transaction-row .customer_icons .card.visa {\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIzNHB4IiBoZWlnaHQ9IjIycHgiIHZpZXdCb3g9IjAgMCAzNCAyMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+UGF5Zm9ybS9PbmVGaWVsZC9pY29uL3Zpc2E8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPjwvZGVmcz4NCiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJQYXlmb3JtL09uZUZpZWxkL2ljb24vdmlzYSI+DQogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzQiIGhlaWdodD0iMjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYuMzc4MzU2NSw3LjA1MDAwMDE5IEwxNC43MDc4NzA0LDE1LjA1MDAwMDIgTDEyLjY4NzUsMTUuMDUwMDAwMiBMMTQuMzU4NjgwNiw3LjA1MDAwMDE5IEwxNi4zNzgzNTY1LDcuMDUwMDAwMTkgWiBNMjcuMTMxNTk3MiwxNS4wNTAwMDAyIEwyNi44ODc1LDEzLjg1NDc4NDYgTDI0LjI5NTk0OTEsMTMuODU0Nzg0NiBMMjMuODc0NTM3LDE1LjA1MDAwMDIgTDIxLjc1MzgxOTQsMTUuMDUwMDAwMiBMMjQuNzg0OTUzNyw3LjYzNjY5OTI3IEMyNC45MzAwOTI2LDcuMjgwODYxNzcgMjUuMjU3MDYwMiw3LjA1MDAwMDE5IDI1LjY0NDkwNzQsNy4wNTAwMDAxOSBMMjcuMzY5MDk3Miw3LjA1MDAwMDE5IEwyOSwxNS4wNTAwMDAyIEwyNy4xMzE1OTcyLDE1LjA1MDAwMDIgWiBNMjQuODc3NDMwNiwxMi4zMTU0MTg2IEwyNi41NTMwMDkzLDEyLjMxNTQxODYgTDI1Ljk0MDg1NjUsOS40MTAxNzQ3NyBMMjQuODc3NDMwNiwxMi4zMTU0MTg2IFogTTIxLjg1ODc5NjMsMTIuNDM3MDk2OCBDMjEuODY3ODI0MSwxMC4yNjc1NjA3IDE5LjAwOTAyNzgsMTAuMTQ3NzgyMyAxOS4wMjg3MDM3LDkuMTc4MzQ1MTQgQzE5LjAzNDk1MzcsOC44ODM1OTA0MSAxOS4zMDE2MjA0LDguNTcwMTkyNjcgMTkuODg1NTMyNCw4LjQ4OTg5MzYzIEMyMC4xNzQ1MzcsOC40NTAxNzA1OSAyMC45NzI4MDA5LDguNDE5MzQyNTggMjEuODc3MDgzMyw4Ljg1NzYzNjQgTDIyLjIzMjA2MDIsNy4xMTQ0NTI4MiBDMjEuNzQ1NjAxOSw2LjkyODYzMTg0IDIxLjEyMDQ4NjEsNi43NSAyMC4zNDIwMTM5LDYuNzUgQzE4LjM0NTQ4NjEsNi43NSAxNi45Mzk5MzA2LDcuODY3NjA2NTggMTYuOTI4NzAzNyw5LjQ2NzM3MjkyIEMxNi45MTUzOTM1LDEwLjY1MTUwOTUgMTcuOTMxNzEzLDExLjMxMTMyNjMgMTguNjk3NDUzNywxMS43MDUwMjMxIEMxOS40ODQxNDM1LDEyLjEwNzg1ODYgMTkuNzQ4MDMyNCwxMi4zNjYzMDIxIDE5Ljc0NTEzODksMTIuNzI2NjEyIEMxOS43MzkyMzYxLDEzLjI3ODQ2OTkgMTkuMTE3MzYxMSwxMy41MjE2ODIxIDE4LjUzNTk5NTQsMTMuNTMxMTg2NCBDMTcuNTIwMzcwNCwxMy41NDc4Nzk4IDE2LjkzMDkwMjgsMTMuMjQyMTU4NiAxNi40NjEyMjY5LDEzLjAxMTc0MDYgTDE2LjA5NTQ4NjEsMTQuODEzMjkwMiBDMTYuNTY3MDEzOSwxNS4wNDEzOTMxIDE3LjQzODMxMDIsMTUuMjQwMjUyIDE4LjM0MTg5ODEsMTUuMjUgQzIwLjQ2NDIzNjEsMTUuMjUgMjEuODUyMTk5MSwxNC4xNDY3NzE3IDIxLjg1ODc5NjMsMTIuNDM3MDk2OCBaIE0xMy40OTE3ODI0LDcuMDUwMDAwMTkgTDEwLjIxODc1LDE1LjA1MDAwMDIgTDguMDgzNDQ5MDcsMTUuMDUwMDAwMiBMNi40NzI4MDA5Myw4LjY2NTQzODM5IEM2LjM3NSw4LjI3MjM2ODk4IDYuMjkwMTYyMDQsOC4xMjgwNjU2NyA1Ljk5MjgyNDA3LDcuOTYyNzc0OTUgQzUuNTA3MjkxNjcsNy42OTI1NDcxNCA0LjcwNTQzOTgxLDcuNDM5Mjc1MjcgNCw3LjI4MTkyODkzIEw0LjA0NzU2OTQ0LDcuMDUwMDAwMTkgTDcuNDg1MTg1MTksNy4wNTAwMDAxOSBDNy45MjMwMzI0MSw3LjA1MDAwMDE5IDguMzE3MjQ1MzcsNy4zNDg0NDgzNyA4LjQxNjY2NjY3LDcuODY1NTQ1MTEgTDkuMjY3MzYxMTEsMTIuNDk0OTg5NyBMMTEuMzY5OTA3NCw3LjA1MDAwMDE5IEwxMy40OTE3ODI0LDcuMDUwMDAwMTkgWiIgaWQ9Imljb25fdmlzYSIgZmlsbD0iIzFBNkJDOCI+PC9wYXRoPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+); }\n  .transaction-row .customer_icons .card.mastercard {\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIzNHB4IiBoZWlnaHQ9IjIycHgiIHZpZXdCb3g9IjAgMCAzNCAyMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+UGF5Zm9ybS9PbmVGaWVsZC9pY29uL21hc3RlcmNhcmQ8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPjwvZGVmcz4NCiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJQYXlmb3JtL09uZUZpZWxkL2ljb24vbWFzdGVyY2FyZCI+DQogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzQiIGhlaWdodD0iMjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbl9tYXN0ZXJjYXJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjAwMDAwMCwgNS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMiIgZmlsbD0iI0ZGNzIzQSIgcG9pbnRzPSI3LjI4NTYzMDUgMTAuNjkwMTgwMSAxMi42ODYyMTcgMTAuNjkwMTgwMSAxMi42ODYyMTcgMS4yNzk2Nzc3MyA3LjI4NTYzMDUgMS4yNzk2Nzc3MyI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy42Mjg3MzksNS45ODQ5Mjg5MSBDNy42Mjg3MzksNC4wNzU4NDgzNCA4LjU1MDY3NDQ5LDIuMzc1NjU4NzcgOS45ODYwOTk3MSwxLjI3OTY3NzczIEM4LjkzNjA3MDM4LDAuNDc4MTIzMjIzIDcuNjExNTU0MjUsMCA2LjE3MTczMDIxLDAgQzIuNzYzMTA4NSwwIDAsMi42Nzk2OTY2OCAwLDUuOTg0OTI4OTEgQzAsOS4yOTAxNjExNCAyLjc2MzEwODUsMTEuOTY5ODU3OCA2LjE3MTczMDIxLDExLjk2OTg1NzggQzcuNjExNTU0MjUsMTEuOTY5ODU3OCA4LjkzNjA3MDM4LDExLjQ5MTczNDYgOS45ODYwOTk3MSwxMC42OTAxODAxIEM4LjU1MDY3NDQ5LDkuNTk0MjU1OTIgNy42Mjg3MzksNy44OTQwMDk0OCA3LjYyODczOSw1Ljk4NDkyODkxIiBpZD0iRmlsbC0zIiBmaWxsPSIjRjUzQjRBIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy44MDA0NjkyLDExLjk2NzI3MyBDMTIuMzYwNjQ1MiwxMS45NjcyNzMgMTEuMDM2MTI5LDExLjQ4OTIzNzEgOS45ODY1MTAyNiwxMC42ODc4MjkxIEMxMS40MjE5MzU1LDkuNTkyNTAzMTUgMTIuMzQzNTE5MSw3Ljg5MjIyNjE1IDEyLjM0MzUxOTEsNS45ODM0Mzc0OSBDMTIuMzQzNTE5MSw0LjA3NDcwNTY5IDExLjQyMTkzNTUsMi4zNzQ4MjY3MyA5Ljk4NjUxMDI2LDEuMjc5MDQ1OTEgQzExLjAzNjEyOSwwLjQ3ODAzNTg3NSAxMi4zNjA2NDUyLDAgMTMuODAwNDY5MiwwIEMxNy4yMDkwOTA5LDAgMTkuOTcyMTk5NCwyLjY3ODgwOTEgMTkuOTcyMTk5NCw1Ljk4MzQzNzQ5IEMxOS45NzIxOTk0LDkuMjg4NDYzOTIgMTcuMjA5MDkwOSwxMS45NjcyNzMgMTMuODAwNDY5MiwxMS45NjcyNzMgWiIgaWQ9IkZpbGwtNCIgZmlsbD0iI0ZGQjMyQiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==); }\n  .transaction-row .customer_icons .card.maestro {\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIzNHB4IiBoZWlnaHQ9IjIycHgiIHZpZXdCb3g9IjAgMCAzNCAyMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+UGF5Zm9ybS9PbmVGaWVsZC9pY29uL21hZXN0cm88L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxkZWZzPjwvZGVmcz4NCiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJQYXlmb3JtL09uZUZpZWxkL2ljb24vbWFlc3RybyI+DQogICAgICAgICAgICA8ZyBpZD0iR3JvdXAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtNyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzQiIGhlaWdodD0iMjIiPjwvcmVjdD4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbl9tYWVzdHJvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjAwMDAwMCwgNS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMiIgZmlsbD0iIzgxN0NCNCIgcG9pbnRzPSI3LjI4NTYzMDUgMTAuNjkwMTgwMSAxMi42ODYyMTcgMTAuNjkwMTgwMSAxMi42ODYyMTcgMS4yNzk2Nzc3MyA3LjI4NTYzMDUgMS4yNzk2Nzc3MyI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy42Mjg3MzksNS45ODQ5Mjg5MSBDNy42Mjg3MzksNC4wNzU4NDgzNCA4LjU1MDY3NDQ5LDIuMzc1NjU4NzcgOS45ODYwOTk3MSwxLjI3OTY3NzczIEM4LjkzNjA3MDM4LDAuNDc4MTIzMjIzIDcuNjExNTU0MjUsMCA2LjE3MTczMDIxLDAgQzIuNzYzMTA4NSwwIDAsMi42Nzk2OTY2OCAwLDUuOTg0OTI4OTEgQzAsOS4yOTAxNjExNCAyLjc2MzEwODUsMTEuOTY5ODU3OCA2LjE3MTczMDIxLDExLjk2OTg1NzggQzcuNjExNTU0MjUsMTEuOTY5ODU3OCA4LjkzNjA3MDM4LDExLjQ5MTczNDYgOS45ODYwOTk3MSwxMC42OTAxODAxIEM4LjU1MDY3NDQ5LDkuNTk0MjU1OTIgNy42Mjg3MzksNy44OTQwMDk0OCA3LjYyODczOSw1Ljk4NDkyODkxIiBpZD0iRmlsbC0zIiBmaWxsPSIjRjUzQjRBIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMy44MDA0NjkyLDExLjk2NzI3MyBDMTIuMzYwNjQ1MiwxMS45NjcyNzMgMTEuMDM2MTI5LDExLjQ4OTIzNzEgOS45ODY1MTAyNiwxMC42ODc4MjkxIEMxMS40MjE5MzU1LDkuNTkyNTAzMTUgMTIuMzQzNTE5MSw3Ljg5MjIyNjE1IDEyLjM0MzUxOTEsNS45ODM0Mzc0OSBDMTIuMzQzNTE5MSw0LjA3NDcwNTY5IDExLjQyMTkzNTUsMi4zNzQ4MjY3MyA5Ljk4NjUxMDI2LDEuMjc5MDQ1OTEgQzExLjAzNjEyOSwwLjQ3ODAzNTg3NSAxMi4zNjA2NDUyLDAgMTMuODAwNDY5MiwwIEMxNy4yMDkwOTA5LDAgMTkuOTcyMTk5NCwyLjY3ODgwOTEgMTkuOTcyMTk5NCw1Ljk4MzQzNzQ5IEMxOS45NzIxOTk0LDkuMjg4NDYzOTIgMTcuMjA5MDkwOSwxMS45NjcyNzMgMTMuODAwNDY5MiwxMS45NjcyNzMgWiIgaWQ9IkZpbGwtNCIgZmlsbD0iIzU0QjFFNSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==); }\n  .transaction-row .customer_icons .card.mir {\n        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHdpZHRoPSIzNHB4IiBoZWlnaHQ9IjIycHgiIHZpZXdCb3g9IjAgMCAzNCAyMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+UGF5Zm9ybS9PbmVGaWVsZC9pY29uL21pcjwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGQ9Ik0xOC40ODk3NDMzLDAgQzE4LjgwMDM2NzYsMS44OTYyNjcwMyAyMC4yNzg0OTUzLDMuMzMzMzMzMzMgMjIuMDU3MzIwMywzLjMzMzMzMzMzIEwyMi4wNTczMjAzLDMuMzMzMzMzMzMgTDI2LjAyODkyNTUsMy4zMzMzMzMzMyBDMjYuMDYxMDUyOCwzLjE1MzYyNDA3IDI2LjA3ODM3OTksMi45Njc5MzggMjYuMDc4Mzc5OSwyLjc3NzU5MjA2IEwyNi4wNzgzNzk5LDIuNzc3NTkyMDYgQzI2LjA3ODM3OTksMS4yNDM3ODI2MSAyNC45NzA0Mzg0LDAgMjMuNjA0MDM0NCwwIEwyMy42MDQwMzQ0LDAgTDE4LjQ4OTc0MzMsMCBaIiBpZD0icGF0aC0xIj48L3BhdGg+DQogICAgPC9kZWZzPg0KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IlBheWZvcm0vT25lRmllbGQvaWNvbi9taXIiPg0KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIj4NCiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTciIGZpbGwtb3BhY2l0eT0iMCIgZmlsbD0iI0ZGRkZGRiIgeD0iMCIgeT0iMCIgd2lkdGg9IjM0IiBoZWlnaHQ9IjIyIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGcgaWQ9Imljb25fbWlyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgNy4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjMyMTI4NDQsMC44NDUwMzY4MDEgQzE0LjUzNjIwMzIsMC4zMjk3MTk1MTUgMTUuMDAxODAwNywwIDE1LjUxNDQ3OSwwIEwxNy40NjU5MDkxLDAgTDE3LjQ2NTkwOTEsOCBMMTUuMTY2NDA0LDggTDE1LjE2NjQwNCwzLjI3MjgyNjc0IEwxNS4wMDIzMzk3LDMuMjcyODI2NzQgTDEzLjM4MzM1MDksNy4xNTQ5NjMyIEMxMy4xNjgzNDIyLDcuNjcwMjgwNDkgMTIuNzAyODM0Nyw4IDEyLjE5MDYwNTYsOCBMMTAuMjM4NjM2NCw4IEwxMC4yMzg2MzY0LDAgTDEyLjUzODIzMTMsMCBMMTIuNTM4MjMxMyw0LjcyNzE3MzI2IEwxMi43MDI4MzQ3LDQuNzI3MTczMjYgTDE0LjMyMTI4NDQsMC44NDUwMzY4MDEgWiBNNS41Mzg0ODM5LDEuMDUxNTU1ODggQzUuNjk4MTMzMywwLjQyODg1NzM2NyA2LjIwMzgyMjExLDAgNi43Nzg1MjQ2NSwwIEw5LjAzNDA5MDkxLDAgTDkuMDM0MDkwOTEsOCBMNi43NzU0MzU4LDggTDYuNzc1NDM1OCwzLjI3MjUyMzg0IEw2LjYxNDI4NjEsMy4yNzI1MjM4NCBMNS4zMjM2NzY0Nyw4IEwzLjcxMDMyNjE4LDggTDIuNDE5ODA0OCwzLjI3MjUyMzg0IEwyLjI1ODEyNTU5LDMuMjcyNTIzODQgTDIuMjU4MTI1NTksOCBMMCw4IEwwLDAgTDIuMjU1NTY2MjYsMCBDMi44MzAyNjg3OSwwIDMuMzM1OTU3NjEsMC40Mjg4NTczNjcgMy40OTU2MDcwMSwxLjA1MTU1NTg4IEw0LjQzNjQ3MDYxLDQuNzI3NDc2MTYgTDQuNTk3NjIwMyw0LjcyNzQ3NjE2IEw1LjUzODQ4MzksMS4wNTE1NTU4OCBaIE0xOC42NzA0NTQ1LDQgTDI1Ljg5NzcyNzMsNCBDMjUuNTUyMTI2NSw0Ljk3MDM5MzE2IDI0LjYyNDA0NjQsNS42NjY3MzUwNCAyMy41MzAxMzI5LDUuNjY2NzM1MDQgTDIxLjAxMTczOTMsNS42NjY3MzUwNCBMMjEuMDExNzM5Myw4IEwxOC42NzA0NTQ1LDggTDE4LjY3MDQ1NDUsNCBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9IiMyMEFBNEQiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4NCiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSJDbGlwLTExIiBmaWxsPSIjMzRCQ0U4IiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=); }\n  .transaction-row .customer_icons .autopayment,\n    .transaction-row .customer_icons .saved {\n      margin-left: -7px; }\n  .transaction-row .customer_icons .payment .mk {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMTggMTMuNjk2QTIuNzAyIDIuNzAyIDAgMCAxIDIwLjY5MyAxMWg2LjYxNEEyLjY5MiAyLjY5MiAwIDAgMSAzMCAxMy42OTZ2MTAuNjA4QTIuNzAyIDIuNzAyIDAgMCAxIDI3LjMwNyAyN2gtNi42MTRBMi42OTIgMi42OTIgMCAwIDEgMTggMjQuMzA0VjEzLjY5NnpNMjQgMjYuM2ExLjI1IDEuMjUgMCAxIDAgMC0yLjUgMS4yNSAxLjI1IDAgMCAwIDAgMi41em0tNS0xMi4zMDhWMjNoMTB2LTkuMDA4QTIuMDAxIDIuMDAxIDAgMCAwIDI3IDEyaC02Yy0xLjExMyAwLTIgLjg5Mi0yIDEuOTkyeiIvPg0KICAgIDwvZGVmcz4NCiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+DQogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+DQogICAgICAgIDwvbWFzaz4NCiAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAiIHhsaW5rOmhyZWY9IiNhIi8+DQogICAgICAgIDxnIGZpbGw9IiMxYWE0YjgiIG1hc2s9InVybCgjYikiPg0KICAgICAgICAgICAgPHBhdGggZD0iTTAgMGg0OHYzOEgweiIvPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+); }\n  .transaction-row .customer_icons .payment .wallet {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMTUgNFYzYTIgMiAwIDAgMC0yLTJIM2EyIDIgMCAwIDAtMiAydjhhMiAyIDAgMCAwIDIgMmgxMGEyIDIgMCAwIDAgMi0ydi0xSDkuOTk3YTMgMyAwIDAgMSAwLTZIMTV6TTMgMGgxMGEzIDMgMCAwIDEgMyAzdjhhMyAzIDAgMCAxLTMgM0gzYTMgMyAwIDAgMS0zLTNWM2EzIDMgMCAwIDEgMy0zem03IDguNWExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM3oiLz4NCiAgICA8L2RlZnM+DQogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYgMTIpIj4NCiAgICAgICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4NCiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+DQogICAgICAgICAgICA8L21hc2s+DQogICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMCIgeGxpbms6aHJlZj0iI2EiLz4NCiAgICAgICAgICAgIDxnIGZpbGw9IiMxYWE0YjgiIG1hc2s9InVybCgjYikiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0tMTYtMTJoNDh2MzhoLTQ4eiIvPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+); }\n  .transaction-row .customer_icons .payment .autopayment {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNLjA2MiA5SDEuMDdBNy4wMDIgNy4wMDIgMCAwIDAgMTUgOGE3IDcgMCAwIDAtNy03VjBBOCA4IDAgMSAxIC4wNjIgOXoiLz4NCiAgICA8L2RlZnM+DQogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYgMTEpIj4NCiAgICAgICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4NCiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+DQogICAgICAgICAgICA8L21hc2s+DQogICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMCIgeGxpbms6aHJlZj0iI2EiLz4NCiAgICAgICAgICAgIDxnIGZpbGw9IiMxYWE0YjgiIG1hc2s9InVybCgjYikiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0tMTYtMTFoNDh2MzhoLTQ4eiIvPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+); }\n  .transaction-row .customer_icons .payment .saved {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMi4xMzMgMTJDLjk1NSAxMiAwIDExLjEwNSAwIDEwVjJDMCAuODk1Ljk1NSAwIDIuMTMzIDBoMTEuNzM0QzE1LjA0NSAwIDE2IC44OTUgMTYgMnY4YzAgMS4xMDUtLjk1NSAyLTIuMTMzIDJIMi4xMzN6bTEyLjgtMTBjMC0uNTUyLS40NzgtMS0xLjA2Ni0xSDIuMTMzYy0uNTg4IDAtMS4wNjYuNDQ4LTEuMDY2IDF2MWgxMy44NjZWMnpNMS4wNjcgNnY0YzAgLjU1Mi40NzggMSAxLjA2NiAxaDExLjczNGMuNTg4IDAgMS4wNjYtLjQ0OCAxLjA2Ni0xVjZIMS4wNjd6Ii8+DQogICAgPC9kZWZzPg0KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2IDEzKSI+DQogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+DQogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPg0KICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAiIHhsaW5rOmhyZWY9IiNhIi8+DQogICAgICAgICAgICA8ZyBmaWxsPSIjMWFhNGI4IiBtYXNrPSJ1cmwoI2IpIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNLTE2LTEzaDQ4djM4aC00OHoiLz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==); }\n  .transaction-row .customer_icons .cancelinit .wallet {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMTUgNFYzYTIgMiAwIDAgMC0yLTJIM2EyIDIgMCAwIDAtMiAydjhhMiAyIDAgMCAwIDIgMmgxMGEyIDIgMCAwIDAgMi0ydi0xSDkuOTk3YTMgMyAwIDAgMSAwLTZIMTV6TTMgMGgxMGEzIDMgMCAwIDEgMyAzdjhhMyAzIDAgMCAxLTMgM0gzYTMgMyAwIDAgMS0zLTNWM2EzIDMgMCAwIDEgMy0zem03IDguNWExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM3oiLz4NCiAgICA8L2RlZnM+DQogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYgMTIpIj4NCiAgICAgICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4NCiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+DQogICAgICAgICAgICA8L21hc2s+DQogICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMCIgeGxpbms6aHJlZj0iI2EiLz4NCiAgICAgICAgICAgIDxnIGZpbGw9IiNmNzVmNTIiIG1hc2s9InVybCgjYikiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0tMTYtMTJoNDh2MzhoLTQ4eiIvPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+); }\n  .transaction-row .customer_icons .cancelinit .autopayment {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNLjA2MiA5SDEuMDdBNy4wMDIgNy4wMDIgMCAwIDAgMTUgOGE3IDcgMCAwIDAtNy03VjBBOCA4IDAgMSAxIC4wNjIgOXoiLz4NCiAgICA8L2RlZnM+DQogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYgMTEpIj4NCiAgICAgICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4NCiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+DQogICAgICAgICAgICA8L21hc2s+DQogICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMCIgeGxpbms6aHJlZj0iI2EiLz4NCiAgICAgICAgICAgIDxnIGZpbGw9IiNmNzVmNTIiIG1hc2s9InVybCgjYikiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0tMTYtMTFoNDh2MzhoLTQ4eiIvPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+); }\n  .transaction-row .customer_icons .cancelinit .saved {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMi4xMzMgMTJDLjk1NSAxMiAwIDExLjEwNSAwIDEwVjJDMCAuODk1Ljk1NSAwIDIuMTMzIDBoMTEuNzM0QzE1LjA0NSAwIDE2IC44OTUgMTYgMnY4YzAgMS4xMDUtLjk1NSAyLTIuMTMzIDJIMi4xMzN6bTEyLjgtMTBjMC0uNTUyLS40NzgtMS0xLjA2Ni0xSDIuMTMzYy0uNTg4IDAtMS4wNjYuNDQ4LTEuMDY2IDF2MWgxMy44NjZWMnpNMS4wNjcgNnY0YzAgLjU1Mi40NzggMSAxLjA2NiAxaDExLjczNGMuNTg4IDAgMS4wNjYtLjQ0OCAxLjA2Ni0xVjZIMS4wNjd6Ii8+DQogICAgPC9kZWZzPg0KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2IDEzKSI+DQogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+DQogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPg0KICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAiIHhsaW5rOmhyZWY9IiNhIi8+DQogICAgICAgICAgICA8ZyBmaWxsPSIjZjc1ZjUyIiBtYXNrPSJ1cmwoI2IpIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNLTE2LTEzaDQ4djM4aC00OHoiLz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==); }\n  .transaction-row .customer_icons .refund .autopayment {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNLjA2MiA5SDEuMDdBNy4wMDIgNy4wMDIgMCAwIDAgMTUgOGE3IDcgMCAwIDAtNy03VjBBOCA4IDAgMSAxIC4wNjIgOXoiLz4NCiAgICA8L2RlZnM+DQogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYgMTEpIj4NCiAgICAgICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4NCiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+DQogICAgICAgICAgICA8L21hc2s+DQogICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMCIgeGxpbms6aHJlZj0iI2EiLz4NCiAgICAgICAgICAgIDxnIGZpbGw9IiNiMGE0ZmMiIG1hc2s9InVybCgjYikiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0tMTYtMTFoNDh2MzhoLTQ4eiIvPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+); }\n  .transaction-row .customer_icons .refund .saved {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMi4xMzMgMTJDLjk1NSAxMiAwIDExLjEwNSAwIDEwVjJDMCAuODk1Ljk1NSAwIDIuMTMzIDBoMTEuNzM0QzE1LjA0NSAwIDE2IC44OTUgMTYgMnY4YzAgMS4xMDUtLjk1NSAyLTIuMTMzIDJIMi4xMzN6bTEyLjgtMTBjMC0uNTUyLS40NzgtMS0xLjA2Ni0xSDIuMTMzYy0uNTg4IDAtMS4wNjYuNDQ4LTEuMDY2IDF2MWgxMy44NjZWMnpNMS4wNjcgNnY0YzAgLjU1Mi40NzggMSAxLjA2NiAxaDExLjczNGMuNTg4IDAgMS4wNjYtLjQ0OCAxLjA2Ni0xVjZIMS4wNjd6Ii8+DQogICAgPC9kZWZzPg0KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2IDEzKSI+DQogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+DQogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPg0KICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAiIHhsaW5rOmhyZWY9IiNhIi8+DQogICAgICAgICAgICA8ZyBmaWxsPSIjYjBhNGZjIiBtYXNrPSJ1cmwoI2IpIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNLTE2LTEzaDQ4djM4aC00OHoiLz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==); }\n  .transaction-row .customer_icons .hold .autopayment {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNLjA2MiA5SDEuMDdBNy4wMDIgNy4wMDIgMCAwIDAgMTUgOGE3IDcgMCAwIDAtNy03VjBBOCA4IDAgMSAxIC4wNjIgOXoiLz4NCiAgICA8L2RlZnM+DQogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYgMTEpIj4NCiAgICAgICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4NCiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+DQogICAgICAgICAgICA8L21hc2s+DQogICAgICAgICAgICA8dXNlIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMCIgeGxpbms6aHJlZj0iI2EiLz4NCiAgICAgICAgICAgIDxnIGZpbGw9IiMyNjhlZmYiIG1hc2s9InVybCgjYikiPg0KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0tMTYtMTFoNDh2MzhoLTQ4eiIvPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+); }\n  .transaction-row .customer_icons .hold .saved {\n      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA0OCAzOCI+DQogICAgPGRlZnM+DQogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMi4xMzMgMTJDLjk1NSAxMiAwIDExLjEwNSAwIDEwVjJDMCAuODk1Ljk1NSAwIDIuMTMzIDBoMTEuNzM0QzE1LjA0NSAwIDE2IC44OTUgMTYgMnY4YzAgMS4xMDUtLjk1NSAyLTIuMTMzIDJIMi4xMzN6bTEyLjgtMTBjMC0uNTUyLS40NzgtMS0xLjA2Ni0xSDIuMTMzYy0uNTg4IDAtMS4wNjYuNDQ4LTEuMDY2IDF2MWgxMy44NjZWMnpNMS4wNjcgNnY0YzAgLjU1Mi40NzggMSAxLjA2NiAxaDExLjczNGMuNTg4IDAgMS4wNjYtLjQ0OCAxLjA2Ni0xVjZIMS4wNjd6Ii8+DQogICAgPC9kZWZzPg0KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2IDEzKSI+DQogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+DQogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPg0KICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9IjAiIHhsaW5rOmhyZWY9IiNhIi8+DQogICAgICAgICAgICA8ZyBmaWxsPSIjMjY4ZWZmIiBtYXNrPSJ1cmwoI2IpIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNLTE2LTEzaDQ4djM4aC00OHoiLz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==); }\n"

/***/ }),

/***/ "./src/app/transactions/components/transaction/transaction.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/transactions/components/transaction/transaction.component.ts ***!
  \******************************************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionComponent = /** @class */ (function () {
    function TransactionComponent() {
        this.toggle = 'inactive';
    }
    TransactionComponent.prototype.appliedClass = function (transaction) {
        console.log(transaction);
    };
    TransactionComponent.prototype.toggleState = function () {
        this.toggle = this.toggle === 'active' ? 'inactive' : 'active';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TransactionComponent.prototype, "transaction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TransactionComponent.prototype, "isLast", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TransactionComponent.prototype, "isFirst", void 0);
    TransactionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transaction',
            template: __webpack_require__(/*! ./transaction.component.html */ "./src/app/transactions/components/transaction/transaction.component.html"),
            styles: [__webpack_require__(/*! ./transaction.component.scss */ "./src/app/transactions/components/transaction/transaction.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toggle', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '0',
                        opacity: '0',
                        pointerEvents: 'none',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*',
                        opacity: '1',
                        pointerEvents: 'auto',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s ease-out')),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [])
    ], TransactionComponent);
    return TransactionComponent;
}());



/***/ }),

/***/ "./src/app/transactions/containers/list/list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/transactions/containers/list/list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-transaction-list [transactions]=\"transactions$ | async\" [total]=\"total$ | async\" [currentPage]=\"currentPage$ | async\" [pending]=\"pending$ | async\" [errorMessage]=\"errorMessage$ | async\" (submitted)=\"getTransactions($event)\">\n</app-transaction-list>"

/***/ }),

/***/ "./src/app/transactions/containers/list/list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/transactions/containers/list/list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/transactions/containers/list/list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/transactions/containers/list/list.component.ts ***!
  \****************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/reducers */ "./src/app/core/reducers/index.ts");
/* harmony import */ var _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/transactions.actions */ "./src/app/transactions/actions/transactions.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = /** @class */ (function () {
    function ListComponent(store) {
        this.store = store;
        this.transactions$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_reducers__WEBPACK_IMPORTED_MODULE_2__["getTransactions"]));
        this.total$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_reducers__WEBPACK_IMPORTED_MODULE_2__["getTotalTransactions"]));
        this.currentPage$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_reducers__WEBPACK_IMPORTED_MODULE_2__["getCurrentTransactionPage"]));
        this.pending$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_reducers__WEBPACK_IMPORTED_MODULE_2__["getTransactionPendingStatus"]));
        this.errorMessage$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_core_reducers__WEBPACK_IMPORTED_MODULE_2__["getTransactionErrorMessage"]));
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getTransactions(1);
    };
    ListComponent.prototype.getTransactions = function ($event) {
        this.store.dispatch(new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_3__["Load"]($event));
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/transactions/containers/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/transactions/containers/list/list.component.scss")],
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/transactions/effects/transactions.effects.ts":
/*!**************************************************************!*\
  !*** ./src/app/transactions/effects/transactions.effects.ts ***!
  \**************************************************************/
/*! exports provided: TransactionEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionEffects", function() { return TransactionEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/transactions.actions */ "./src/app/transactions/actions/transactions.actions.ts");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/transaction.service */ "./src/app/transactions/services/transaction.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransactionEffects = /** @class */ (function () {
    function TransactionEffects(actions, transactionService) {
        var _this = this;
        this.actions = actions;
        this.transactionService = transactionService;
        this.load$ = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["TransactionsActionTypes"].Load), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function (payload) {
            return _this.transactionService.getTransactions(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (data) {
                if (!data) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(data.transactions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["groupBy"])(function (transaction) {
                    return new Date(transaction.date).setHours(0, 0, 0, 0);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (group$) {
                    return group$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["reduce"])(function (acc, curr) { return acc.concat([curr]); }, ['' + group$.key]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (arr) { return ({ date: arr[0], values: arr.slice(1) }); }));
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["toArray"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (newData) {
                    return new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["LoadSuccess"]({
                        transactions: newData,
                        total: data.total,
                        currentPage: payload,
                    });
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_4__["LoadFailure"](error)); }));
            }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], TransactionEffects.prototype, "load$", void 0);
    TransactionEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _services_transaction_service__WEBPACK_IMPORTED_MODULE_5__["TransactionService"]])
    ], TransactionEffects);
    return TransactionEffects;
}());



/***/ }),

/***/ "./src/app/transactions/reducers/transactions.reducer.ts":
/*!***************************************************************!*\
  !*** ./src/app/transactions/reducers/transactions.reducer.ts ***!
  \***************************************************************/
/*! exports provided: initialState, reducer, getCurrentTransactionPage, getTotalTransactions, getTransactionPendingStatus, getTransactionErrorMessage, getTransactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTransactionPage", function() { return getCurrentTransactionPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalTransactions", function() { return getTotalTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactionPendingStatus", function() { return getTransactionPendingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactionErrorMessage", function() { return getTransactionErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransactions", function() { return getTransactions; });
/* harmony import */ var _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/transactions.actions */ "./src/app/transactions/actions/transactions.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    total: 0,
    transactions: null,
    errorMessage: null,
    pending: false,
    currentPage: 1,
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].Load: {
            return __assign({}, state, { errorMessage: null, pending: true });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].LoadSuccess: {
            return __assign({}, state, { pending: false, total: action.payload.total, transactions: action.payload.transactions, currentPage: action.payload.currentPage });
        }
        case _actions_transactions_actions__WEBPACK_IMPORTED_MODULE_0__["TransactionsActionTypes"].LoadFailure: {
            return __assign({}, state, { pending: false, errorMessage: action.payload.error.text });
        }
        default: {
            return state;
        }
    }
};
var getCurrentTransactionPage = function (state) { return state.currentPage; };
var getTotalTransactions = function (state) { return state.total; };
var getTransactionPendingStatus = function (state) { return state.pending; };
var getTransactionErrorMessage = function (state) { return state.errorMessage; };
var getTransactions = function (state) { return state.transactions; };


/***/ }),

/***/ "./src/app/transactions/services/transaction.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/transactions/services/transaction.service.ts ***!
  \**************************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionService = /** @class */ (function () {
    function TransactionService(http) {
        this.http = http;
        this.API_BASE = 'http://localhost:1337/transactions';
    }
    TransactionService.prototype.getTransactions = function (page) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('page', "" + page);
        return this.http.get(this.API_BASE, { params: params });
    };
    TransactionService.prototype.updateTransactionStatus = function (transaction) {
        return this.http.put(this.API_BASE + "/" + transaction._id, transaction);
    };
    TransactionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TransactionService);
    return TransactionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
var environment = {
    production: false,
};



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/anstertum/Desktop/Dashboard/arsenalpay/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map