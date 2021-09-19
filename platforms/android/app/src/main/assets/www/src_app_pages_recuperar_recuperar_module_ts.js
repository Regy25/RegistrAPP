(self["webpackChunkRegistrAPP"] = self["webpackChunkRegistrAPP"] || []).push([["src_app_pages_recuperar_recuperar_module_ts"],{

/***/ 8126:
/*!*************************************************************!*\
  !*** ./src/app/pages/recuperar/recuperar-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarPageRoutingModule": () => (/* binding */ RecuperarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _recuperar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recuperar.page */ 4384);




const routes = [
    {
        path: '',
        component: _recuperar_page__WEBPACK_IMPORTED_MODULE_0__.RecuperarPage
    }
];
let RecuperarPageRoutingModule = class RecuperarPageRoutingModule {
};
RecuperarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecuperarPageRoutingModule);



/***/ }),

/***/ 9649:
/*!*****************************************************!*\
  !*** ./src/app/pages/recuperar/recuperar.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarPageModule": () => (/* binding */ RecuperarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _recuperar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recuperar-routing.module */ 8126);
/* harmony import */ var _recuperar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recuperar.page */ 4384);







let RecuperarPageModule = class RecuperarPageModule {
};
RecuperarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recuperar_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecuperarPageRoutingModule
        ],
        declarations: [_recuperar_page__WEBPACK_IMPORTED_MODULE_1__.RecuperarPage]
    })
], RecuperarPageModule);



/***/ }),

/***/ 4384:
/*!***************************************************!*\
  !*** ./src/app/pages/recuperar/recuperar.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarPage": () => (/* binding */ RecuperarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_recuperar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./recuperar.page.html */ 6705);
/* harmony import */ var _recuperar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recuperar.page.scss */ 4347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/Usuario */ 2844);







let RecuperarPage = class RecuperarPage {
    constructor(router, toastController) {
        this.router = router;
        this.toastController = toastController;
        this.usuario = new src_app_model_Usuario__WEBPACK_IMPORTED_MODULE_2__.Usuario();
        this.usuario.nombreUsuario = '';
        this.usuario.password = '';
        this.usuario.newPass = '';
        this.usuario.confirmarPass = '';
    }
    ngOnInit() {
    }
    cambiarPass() {
        if (!this.validarNewPass(this.usuario)) {
            return;
        }
        this.mostrarMensaje('Contraseña Cambiada!');
        const navigationExtras = {
            state: {
                user: this.usuario
            }
        };
        this.router.navigate(['/login'], navigationExtras);
    }
    validarNewPass(usuario) {
        const mensajeError = usuario.validarCambioPass();
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
RecuperarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
RecuperarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-recuperar',
        template: _raw_loader_recuperar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_recuperar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RecuperarPage);



/***/ }),

/***/ 4347:
/*!*****************************************************!*\
  !*** ./src/app/pages/recuperar/recuperar.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".tarjeta {\n  background-color: #878683;\n}\n\n.titulo {\n  background-color: #f4d47c;\n  padding-top: 15px;\n  color: white;\n}\n\nh2 {\n  color: white;\n}\n\n.item {\n  color: white;\n}\n\nion-item {\n  --ion-background-color:#444444;\n}\n\nion-content {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3VwZXJhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSx5QkFBQTtBQUZKOztBQUtBO0VBRUkseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFISjs7QUFTQTtFQUVJLFlBQUE7QUFQSjs7QUFVQTtFQUVJLFlBQUE7QUFSSjs7QUFZQTtFQUVJLDhCQUFBO0FBVko7O0FBYUE7RUFFSSxnQkFBQTtBQVhKIiwiZmlsZSI6InJlY3VwZXJhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi50YXJqZXRhIHsgXHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3ODY4MztcclxufVxyXG5cclxuLnRpdHVsbyB7IFxyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGQ0N2M7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuaDIgeyBcclxuXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pdGVte1xyXG4gICAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG5pb24taXRlbXtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiM0NDQ0NDQ7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 6705:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recuperar/recuperar.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <!-- Login -->\r\n  <div class=\"ion-padding-vertical lol\">\r\n    <ion-card class=\"ion-text-center ion-padding-vertical ion-padding-horizontal tarjeta\">\r\n      <ion-card-title class=\"ion-text-center titulo \">\r\n        <ion-label> \r\n          <h2 > Complete la información <br>\r\n            para cambiar la contraseña </h2>\r\n          <br>\r\n        </ion-label>\r\n      </ion-card-title>\r\n      <ion-card-content>\r\n        <ion-item class=\"item\">\r\n          <ion-label position=\"floating\">Usuario</ion-label>\r\n          <ion-input type=\"text\" [(ngModel)]=\"usuario.nombreUsuario\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nueva Contraseña</ion-label>\r\n          <ion-input type=\"password\" [(ngModel)]=\"usuario.newPass\"></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Confirmar Contraseña</ion-label>\r\n          <ion-input type=\"password\" [(ngModel)]=\"usuario.confirmarPass\"></ion-input>\r\n        </ion-item>\r\n        <ion-row >\r\n          <ion-col size=\"12\" >\r\n            <br>\r\n            <ion-button color=\"light\" shape=\"block\"  (click)=\"cambiarPass()\">Cambiar contraseña</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_recuperar_recuperar_module_ts.js.map