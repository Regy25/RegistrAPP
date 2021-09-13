(self["webpackChunkRegistrAPP"] = self["webpackChunkRegistrAPP"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 2844:
/*!**********************************!*\
  !*** ./src/app/model/Usuario.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Usuario": () => (/* binding */ Usuario)
/* harmony export */ });
class Usuario {
    constructor() {
        this.nombreUsuario = '';
        this.password = '';
        this.User = 'Jose';
        this.pass = '1234';
        this.newPass = '1111';
        this.confirmarPass = '2222';
    }
    ValidarNombreUsuario() {
        if (this.nombreUsuario.trim() === '') {
            return 'Debe ingresar un nombre de usuario';
        }
        if (this.nombreUsuario.length < 3 || this.nombreUsuario.length > 8) {
            return 'El nombre de usuario debe tener entre 3 y 8 caracteres';
        }
        if (this.nombreUsuario.trim() === this.User) {
            return '';
        }
        else {
            return 'Usuario incorrecto';
        }
    }
    validarPassword() {
        if (this.password.trim() === '') {
            return 'Para entrar al sistema debe ingresar la contraseña.';
        }
        for (let i = 0; i < this.password.length; i++) {
            if ('0123456789'.indexOf(this.password.charAt(i)) === -1) {
                return 'La contraseña debe ser numérica.';
            }
        }
        if (this.password.length !== 4) {
            return 'La contraseña debe ser numérica de 4 dígitos.';
        }
        if (this.password.trim() === this.pass) {
            return '';
        }
        else {
            return 'Contraseña Incorrecta';
        }
    }
    cambiarPass() {
        if (this.newPass === this.confirmarPass) {
            this.pass = this.newPass;
            return '';
        }
        else {
            return 'Contraseñas no coinciden';
        }
    }
    validarUsuario() {
        return this.ValidarNombreUsuario() || this.validarPassword();
    }
}


/***/ }),

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/Usuario */ 2844);







let LoginPage = class LoginPage {
    constructor(router, toastController) {
        this.router = router;
        this.toastController = toastController;
        this.usuario = new src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_2__.Usuario();
        this.usuario.nombreUsuario = '';
        this.usuario.password = '';
    }
    ngOnInit() {
        // this.usuario.nombreUsuario = 'Jose';
        // this.usuario.password = '1234';
        // this.ingresar();
    }
    ingresar() {
        if (!this.validarUsuario(this.usuario)) {
            return;
        }
        this.mostrarMensaje('Bienvenido!');
        const navigationExtras = {
            state: {
                usuario: this.usuario
            }
        };
        this.router.navigate(['/home'], navigationExtras);
    }
    validarUsuario(usuario) {
        const mensajeError = usuario.validarUsuario();
        if (mensajeError) {
            this.mostrarMensaje(mensajeError);
            return false;
        }
        return true;
    }
    mostrarMensaje(mensaje, duracion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: mensaje,
                duration: duracion ? duracion : 2000
            });
            toast.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <!-- Titulo -->\r\n  <ion-title class=\"ion-padding-top ion-text-center\">\r\n    <ion-label>\r\n          <ion-img src=\"../../../assets/images/Logo.png\" alt=\"logo\" style=\"width: 90px;object-fit: cover;\"></ion-img>\r\n    </ion-label>\r\n  </ion-title>\r\n  <!-- Login -->\r\n  <div class=\"ion-padding-vertical\">\r\n    <ion-card class=\"ion-text-center ion-padding-vertical\">\r\n      <ion-card-title class=\"ion-text-center\">\r\n        <ion-label>\r\n          <h2 >¡Inicie Sesion para <br>\r\n            registrar Asistencia!</h2>\r\n          <br>\r\n        </ion-label>\r\n      </ion-card-title>\r\n      <ion-card-content>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Usuario</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"usuario.nombreUsuario\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Contraseña</ion-label>\r\n          <ion-input type=\"password\" [(ngModel)]=\"usuario.password\"></ion-input>\r\n        </ion-item>\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <br>\r\n            <ion-button shape=\"block\" (click)=\"ingresar()\">Iniciar Sesion</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n      <ion-label>\r\n        <br>\r\n        <a [routerLink]=\"['../recuperar']\">Recuperar</a>\r\n      </ion-label>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map