webpackJsonp([2],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherPageModule", function() { return TeacherPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teacher__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TeacherPageModule = /** @class */ (function () {
    function TeacherPageModule() {
    }
    TeacherPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__teacher__["a" /* TeacherPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__teacher__["a" /* TeacherPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__teacher__["a" /* TeacherPage */]
            ]
        })
    ], TeacherPageModule);
    return TeacherPageModule;
}());

//# sourceMappingURL=teacher.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeacherPage = /** @class */ (function () {
    function TeacherPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TeacherPage.prototype.startApp = function () {
        this.navCtrl.setRoot('WelcomePage', {}, {
            animate: true,
            direction: 'forward'
        });
    };
    TeacherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacher',template:/*ion-inline-start:"C:\Users\oSK8er\Documents\Oscar\proyecto\sociogramaIonic\src\pages\teacher\teacher.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <ion-title>{{ \'TEACHER_TITLE\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <ion-card>\n\n\n\n        <ion-item>\n\n            <ion-avatar item-start>\n\n                <img src="assets/img/marty-avatar.png">\n\n            </ion-avatar>\n\n\n\n\n\n            <h2>Profesor anónimo</h2>\n\n            <p>25 de marzo de 2018</p>\n\n        </ion-item>\n\n\n\n        <img src="../assets/img/splashbg.png" padding>\n\n\n\n        <ion-card-content>\n\n            <p>Este es el código que tienes que compartir con tus alumnos:</p>\n\n        </ion-card-content>\n\n\n\n        <ion-item padding>\n\n            <ion-label text-center>CÓDIGO A COMPARTIR</ion-label>\n\n        </ion-item>\n\n\n\n        <ion-row padding>\n\n            <button ion-button block (click)="startApp()">{{ \'CONTINUE\' | translate }}</button>\n\n        </ion-row>\n\n\n\n    </ion-card>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\oSK8er\Documents\Oscar\proyecto\sociogramaIonic\src\pages\teacher\teacher.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], TeacherPage);
    return TeacherPage;
}());

//# sourceMappingURL=teacher.js.map

/***/ })

});
//# sourceMappingURL=2.js.map