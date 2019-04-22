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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _portal_on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portal/on-boarding-form/on-boarding-form.component */ "./src/app/portal/on-boarding-form/on-boarding-form.component.ts");
/* harmony import */ var _portal_list_students_list_students_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portal/list-students/list-students.component */ "./src/app/portal/list-students/list-students.component.ts");






var route = [
    {
        path: 'onBoardingForm',
        component: _portal_on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_4__["OnBoardingFormComponent"]
    },
    {
        path: 'listStudents',
        component: _portal_list_students_list_students_component__WEBPACK_IMPORTED_MODULE_5__["ListStudentsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(route)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"adminName==undefined\">\n<app-login-admin (notify)='onNotify($event)'>\n</app-login-admin>\n</div>\n<div *ngIf=\"adminName!=undefined\">\n<app-portal></app-portal>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onNotify = function (message) {
        this.adminName = message;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-admin/login-admin.component */ "./src/app/login-admin/login-admin.component.ts");
/* harmony import */ var _portal_portal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portal/portal.component */ "./src/app/portal/portal.component.ts");
/* harmony import */ var _portal_on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portal/on-boarding-form/on-boarding-form.component */ "./src/app/portal/on-boarding-form/on-boarding-form.component.ts");
/* harmony import */ var _portal_list_students_list_students_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portal/list-students/list-students.component */ "./src/app/portal/list-students/list-students.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_admin_login_admin_component__WEBPACK_IMPORTED_MODULE_6__["LoginAdminComponent"],
                _portal_portal_component__WEBPACK_IMPORTED_MODULE_7__["PortalComponent"],
                _portal_on_boarding_form_on_boarding_form_component__WEBPACK_IMPORTED_MODULE_8__["OnBoardingFormComponent"],
                _portal_list_students_list_students_component__WEBPACK_IMPORTED_MODULE_9__["ListStudentsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login-admin/login-admin.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login-admin/login-admin.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWFkbWluL2xvZ2luLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login-admin/login-admin.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-admin/login-admin.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"row mt-5\"></div>\n        <div class=\"row\"><div class=\"col-4\"></div>\n        <div class=\"col-3\">Login School Admin</div>\n        </div>\n\n<div [formGroup]=\"userForm\" >\n        <div class=\"row mt-2\"></div>\n    <div class=\"row \">\n        <div class=\"col-4\"></div>\n        <div class=\"col-4\">\n        <input type=\"text\" placeholder=\"User Name\" formControlName=\"userName\" /></div></div>\n        <div class=\"row\"><div class=\"col-4\"></div>\n        <div class=\"col-4\">\n        <input type=\"password\" placeholder=\"Password\" formControlName=\"password\" /></div></div>\n        <div class=\"row\"><div class=\"col-4\"></div>\n            <div class=\"col-1\">\n        <button type=\"submit\" (click)='login()'>Login</button>\n        </div>\n<div class=\"col-2\">\n<button type=\"reset\" (click)='reset()' >Reset</button></div>\n</div>\n</div>\n<div class=\"row mt-5\"></div>\n<div class=\"row\"><div class=\"col-5\"></div>\n        <div class=\"col-3\">\n    {{loginResult}}\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/login-admin/login-admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-admin/login-admin.component.ts ***!
  \******************************************************/
/*! exports provided: LoginAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdminComponent", function() { return LoginAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../student.service */ "./src/app/student.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var LoginAdminComponent = /** @class */ (function () {
    function LoginAdminComponent(student, fb) {
        this.student = student;
        this.fb = fb;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userName = "";
        this.password = "";
        this.loginResult = "";
        this.userForm = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    LoginAdminComponent.prototype.ngOnInit = function () {
        this.student.fetchAdmins();
    };
    LoginAdminComponent.prototype.login = function () {
        this.student.fetchAdmins();
        for (var i = this.student.admin$.value.length - 1; i >= 0; --i) {
            if (this.student.admin$.value[i].username == this.userForm.value.userName
                && this.student.admin$.value[i].password == this.userForm.value.password) {
                localStorage.setItem('admin', JSON.stringify(this.student.admin$.value[i]));
                this.notify.emit(this.student.admin$.value[i].adminName);
            }
        }
        this.loginResult = "Invalid Credentials";
    };
    LoginAdminComponent.prototype.reset = function () {
        this.userForm.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LoginAdminComponent.prototype, "notify", void 0);
    LoginAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-admin',
            template: __webpack_require__(/*! ./login-admin.component.html */ "./src/app/login-admin/login-admin.component.html"),
            styles: [__webpack_require__(/*! ./login-admin.component.css */ "./src/app/login-admin/login-admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginAdminComponent);
    return LoginAdminComponent;
}());



/***/ }),

/***/ "./src/app/portal/list-students/list-students.component.css":
/*!******************************************************************!*\
  !*** ./src/app/portal/list-students/list-students.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9saXN0LXN0dWRlbnRzL2xpc3Qtc3R1ZGVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/portal/list-students/list-students.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/portal/list-students/list-students.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3 offset-md-2\">\nCategory <select id=\"Category\" #Category style=\"display: block\" (change)=\"setCategory()\" >\n    <option value=\"All\"  selected>All</option>  \n    <option value=\"Domestic\">Domestic</option>\n    <option value=\"International\">International</option>\n    </select>\n  </div>\n\n  <div class=\"col-md-3 offset-md-2\">\n <input type id=\"searchStudent\" #SearchStudent style=\"display: block\" placeholder=\"Search Student\" (change)=\"setStudentFilter()\" value = \"{{this.studentFilter}}\">\n  </div>\n\n  </div>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Student Name</th>\n      <th scope=\"col\">Category</th>\n      <th scope=\"col\">Date of Birth</th>\n      <th scope=\"col\">Options</th>\n    </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\" let student of this.students; let i = index \">\n        <td *ngIf=\"(this.categoryFilter=='All' || student.category == this.categoryFilter)\n        && (student.studentName!=null && student.studentName.includes(this.studentFilter) )\">{{i+1}}</td>\n        <td *ngIf=\"(this.categoryFilter=='All' || student.category == this.categoryFilter) \n        && (student.studentName!=null && student.studentName.includes(this.studentFilter))\"> {{student.studentName}}</td>\n        <td *ngIf=\"(this.categoryFilter=='All' || student.category == this.categoryFilter) \n        && (student.studentName!=null && student.studentName.includes(this.studentFilter))\">{{student.category}}</td>\n        <td *ngIf=\"(this.categoryFilter=='All' || student.category == this.categoryFilter) \n        && (student.studentName!=null && student.studentName.includes(this.studentFilter))\">{{student.dob | date : 'mediumDate'}}</td>\n        <td *ngIf=\"(this.categoryFilter=='All' || student.category == this.categoryFilter) \n        && (student.studentName!=null && student.studentName.includes(this.studentFilter))\">\n            <a [routerLink]=\"['/onBoardingForm']\"><input type=\"button\" style=\"background-color:#00df00\" value=\"View\" (click)='onView($event, student)' /></a>\n            <a [routerLink]=\"['/onBoardingForm']\"><input type=\"button\" value=\"Edit\" (click)='onEdit($event, student)' /></a>\n          <input type=\"button\" value=\"Delete\" style=\"background-color:#df0000\" (click)='onDelete($event, student)'/>\n        </td>\n      </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/portal/list-students/list-students.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/portal/list-students/list-students.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStudentsComponent", function() { return ListStudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/student.service */ "./src/app/student.service.ts");



var ListStudentsComponent = /** @class */ (function () {
    function ListStudentsComponent(studentService) {
        this.studentService = studentService;
        this.categoryFilter = "All";
        this.studentFilter = "";
    }
    ListStudentsComponent.prototype.ngOnInit = function () {
        this.studentService.fetchStudents();
        this.students = JSON.parse(localStorage.getItem('students'));
        if (this.students == null) {
            this.students = this.studentService.students$.value;
            localStorage.setItem('students', JSON.stringify(this.students));
        }
    };
    ListStudentsComponent.prototype.onView = function (event, student) {
        this.studentService.currentMode = 'view';
        this.studentService.currentStudent = student;
    };
    ListStudentsComponent.prototype.onEdit = function (event, student) {
        this.studentService.currentMode = 'edit';
        this.studentService.currentStudent = student;
    };
    ListStudentsComponent.prototype.onDelete = function (event, student) {
        if (confirm("Are you sure you want to delete")) {
            for (var i = this.students.length - 1; i >= 0; --i) {
                if (this.students[i].id == student.id) {
                    this.students.splice(i, 1);
                }
            }
            localStorage.setItem('students', JSON.stringify(this.students));
            alert("Student Deleted");
        }
        else {
            alert("Delete Aborted");
        }
    };
    ListStudentsComponent.prototype.setCategory = function () {
        this.categoryFilter = document.getElementById("Category").value;
    };
    ListStudentsComponent.prototype.setStudentFilter = function () {
        this.studentFilter = document.getElementById("searchStudent").value;
    };
    ListStudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-students',
            template: __webpack_require__(/*! ./list-students.component.html */ "./src/app/portal/list-students/list-students.component.html"),
            styles: [__webpack_require__(/*! ./list-students.component.css */ "./src/app/portal/list-students/list-students.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
    ], ListStudentsComponent);
    return ListStudentsComponent;
}());



/***/ }),

/***/ "./src/app/portal/on-boarding-form/on-boarding-form.component.css":
/*!************************************************************************!*\
  !*** ./src/app/portal/on-boarding-form/on-boarding-form.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9vbi1ib2FyZGluZy1mb3JtL29uLWJvYXJkaW5nLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/portal/on-boarding-form/on-boarding-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/portal/on-boarding-form/on-boarding-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-md-4 offset-md-1\">\n  Onboarding Form ({{this.studentService.currentMode}})\n  </div>\n  \n</div>\n\n<div [formGroup]=\"onBoardingForm\" *ngIf=\"this.studentService.currentMode=='create'||this.studentService.currentMode=='edit'\">\n Student Name  <input type=\"text\" placeholder=\" Name\" formControlName=\"studentName\" required minlength=\"3\"/><br>\n \n Category <select formControlName=\"category\" required>\n    <option value=\"\" disabled selected>Select category</option>  \n    <option value=\"Domestic\">Domestic</option>\n    <option value=\"International\">International</option>\n    </select>\n <br> Documents <label><input type=\"checkbox\" formControlName=\"domicile\" required>Domicile</label>\n <br> <label><input type=\"checkbox\" formControlName=\"birthCertificate\" required>Birth Certificate</label>\n <br> <label><input type=\"checkbox\" formControlName=\"marksheets\" required>Marksheets</label>\n <br> <label><input type=\"checkbox\" formControlName=\"policeClearance\" ng-required=\"this.onBoardingForm.value.category=='International'\">Police Clearance</label>\n <br> <label><input type=\"checkbox\" formControlName=\"passport\" ng-required=\"this.onBoardingForm.value.category=='International'\">Passport</label>\n <br> <label><input type=\"checkbox\" formControlName=\"declaration\"required>Declaration</label>\n <br> DOB<input type=\"date\" formControlName=\"dob\" value=\"this.student\"><br>\n  Father's Name <input type=\"text\" formControlName=\"fathersName\"><br>\n  Mother's Name <input type=\"text\" formControlName=\"mothersName\"><br>\n  Last Class Score <input type=\"number\" min=\"0\" step=\"1\" max=\"100\" formControlName=\"lastClassScore\"  placeholder=\"%(marks)\" min=\"0\" max=\"100\"><br>\n  <button type=\"submit\" (click)='onBoardStudent()'>Onboard</button>\n</div>\n\n<div [formGroup]=\"onBoardingForm\" *ngIf=\"this.studentService.currentMode=='view'\">\n Student Name : {{this.studentService.currentStudent.studentName}}<br>\n \n Category : {{this.studentService.currentStudent.category}}\n Documents <label><input type=\"checkbox\" disabled=\"disabled\" formControlName=\"domicile\">Domicile</label>\n <br> <label><input type=\"checkbox\" disabled=\"disabled\" formControlName=\"birthCertificate\">Birth Certificate</label>\n <br> <label><input type=\"checkbox\" disabled=\"disabled\" formControlName=\"marksheets\">Marksheets</label>\n <br> <label><input type=\"checkbox\" disabled=\"disabled\" formControlName=\"policeClearance\">Police Clearance</label>\n <br> <label><input type=\"checkbox\" disabled=\"disabled\" formControlName=\"passport\">Passport</label>\n <br> <label><input type=\"checkbox\" disabled=\"disabled\" formControlName=\"declaration\">Declaration</label>\n <br> DOB : {{this.studentService.currentStudent.dob | date : 'mediumDate'}} <br>\n  Father's Name :{{this.studentService.currentStudent.fathersName}}<br>\n  Mother's Name : {{this.studentService.currentStudent.mothersName}}<br>\n  Last Class Score : {{this.studentService.currentStudent.lastClassScore}}%<br>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/portal/on-boarding-form/on-boarding-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/portal/on-boarding-form/on-boarding-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: OnBoardingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingFormComponent", function() { return OnBoardingFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/student.service */ "./src/app/student.service.ts");




var OnBoardingFormComponent = /** @class */ (function () {
    function OnBoardingFormComponent(studentService, fb) {
        this.studentService = studentService;
        this.fb = fb;
        this.categories = ['International', 'Domestic'];
        this.studentService.fetchStudents();
        // const sub = this.studentService.fetchStudents().subscribe(data => {
        //     this.students = data;
        // });
        this.students = JSON.parse(localStorage.getItem('students'));
        if (this.studentService.currentMode != 'create') {
            this.onBoardingForm = this.fb.group({
                studentName: [this.studentService.currentStudent.studentName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                category: [this.studentService.currentStudent.category, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                domicile: [this.studentService.currentStudent.domicile, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                birthCertificate: [this.studentService.currentStudent.birthCerti, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                marksheets: [this.studentService.currentStudent.marksheets, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                policeClearance: [this.studentService.currentStudent.policeClearance],
                passport: [this.studentService.currentStudent.passport],
                declaration: [this.studentService.currentStudent.declaration, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                dob: [this.studentService.currentStudent.dob],
                fathersName: [this.studentService.currentStudent.fatherName],
                mothersName: [this.studentService.currentStudent.motherName],
                lastClassScore: [this.studentService.currentStudent.lastClassScore]
            });
        }
        else {
            this.onBoardingForm = this.fb.group({
                studentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                domicile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                birthCertificate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                marksheets: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                policeClearance: [''],
                passport: [''],
                declaration: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                dob: [''],
                fathersName: [],
                mothersName: [],
                lastClassScore: []
            });
        }
    }
    OnBoardingFormComponent.prototype.ngOnInit = function () {
    };
    OnBoardingFormComponent.prototype.updateStudent = function () {
        this.studentService.currentStudent.studentName = this.onBoardingForm.value.studentName;
        this.studentService.currentStudent.category = this.onBoardingForm.value.category;
        this.studentService.currentStudent.studentName = this.onBoardingForm.value.studentName;
        this.studentService.currentStudent.studentName = this.onBoardingForm.value.studentName;
        this.studentService.currentStudent.studentName = this.onBoardingForm.value.studentName;
        this.studentService.currentStudent.studentName = this.onBoardingForm.value.studentName;
        this.studentService.currentStudent.studentName = this.onBoardingForm.value.studentName;
    };
    OnBoardingFormComponent.prototype.onBoardStudent = function () {
        if (this.onBoardingForm.value.studentName == null) {
            alert("Name not given : student not onboarded");
            return;
        }
        if (this.onBoardingForm.value.studentName.length < 3) {
            alert("Name has to atleast of 3 characters : student not onboarded");
            return;
        }
        if (this.onBoardingForm.value.category == null) {
            alert("Category not given : student not onboarded");
            return;
        }
        if (this.onBoardingForm.value.domicile == null || this.onBoardingForm.value.domicile == false) {
            alert("Domicile not submitted : student not onboarded");
            return;
        }
        if (this.onBoardingForm.value.birthCertificate == null || this.onBoardingForm.value.birthCertificate == false) {
            alert("Birth Certificate not submitted : student not onboarded");
            return;
        }
        if (this.onBoardingForm.value.marksheets == null || this.onBoardingForm.value.marksheets == false) {
            alert("marksheets not submitted : student not onboarded");
            return;
        }
        if (this.onBoardingForm.value.category == 'International') {
            if (this.onBoardingForm.value.policeClearance == null || this.onBoardingForm.value.policeClearance == false) {
                alert("Police Clearance Doc not submitted : student not onboarded");
                return;
            }
            if (this.onBoardingForm.value.passport == null || this.onBoardingForm.value.passport == false) {
                alert("Passport Doc not submitted : student not onboarded");
                return;
            }
        }
        if (this.onBoardingForm.value.declaration == null || this.onBoardingForm.value.declaration == false) {
            alert("Signed declaration Doc not submitted : student not onboarded");
            return;
        }
        var student = {
            id: 0,
            studentName: this.onBoardingForm.value.studentName,
            category: this.onBoardingForm.value.category,
            domicile: this.onBoardingForm.value.domicile,
            birthCerti: this.onBoardingForm.value.birthCertificate,
            marksheets: this.onBoardingForm.value.marksheets,
            policeClearance: this.onBoardingForm.value.policeClearance,
            passport: this.onBoardingForm.value.passport,
            declaration: this.onBoardingForm.value.declaration,
            dob: new Date(this.onBoardingForm.value.dob),
            fatherName: this.onBoardingForm.value.fathersName,
            motherName: this.onBoardingForm.value.mothersName,
            lastClassScore: this.onBoardingForm.value.lastClassScore
        };
        if (this.studentService.currentMode == 'edit') {
            student.id = this.studentService.currentStudent.id;
            if (student.dob == null || student.dob == undefined) {
                student.dob = this.studentService.currentStudent.dob;
            }
            for (var i = this.students.length - 1; i >= 0; --i) {
                if (this.students[i].id == student.id) {
                    this.students[i] = student;
                    this.studentService.updateStudent(student);
                    break;
                }
            }
        }
        else {
            if (this.studentService.students$.value != null && this.studentService.students$.value.length > 0) {
                student.id = this.studentService.students$.value[this.studentService.students$.value.length - 1].id + 1;
            }
            this.studentService.addStudent(student);
        }
        this.studentService.currentStudent = null;
        localStorage.setItem('students', JSON.stringify(this.studentService.students$.value));
    };
    OnBoardingFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-on-boarding-form',
            template: __webpack_require__(/*! ./on-boarding-form.component.html */ "./src/app/portal/on-boarding-form/on-boarding-form.component.html"),
            styles: [__webpack_require__(/*! ./on-boarding-form.component.css */ "./src/app/portal/on-boarding-form/on-boarding-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_student_service__WEBPACK_IMPORTED_MODULE_3__["StudentService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], OnBoardingFormComponent);
    return OnBoardingFormComponent;
}());



/***/ }),

/***/ "./src/app/portal/portal.component.css":
/*!*********************************************!*\
  !*** ./src/app/portal/portal.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9wb3J0YWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/portal/portal.component.html":
/*!**********************************************!*\
  !*** ./src/app/portal/portal.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\" style = \"font-size: x-large\">\n<div class=\"col-sm-4 offset-md-2\">On Boarding App</div>\n<div class=\"col-md-4 offset-md-2\">\n    {{this.admin.adminName}}\n  </div>\n</div>\n<nav class=\"navbar navbar-expand-sm bg-light\">\n\n  <!-- Links -->\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" (click) = \"this.studentService.currentMode = 'create'\" [routerLink]=\"['/onBoardingForm']\" routerLinkActive=\"router-link-active\">On Boarding Form</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" [routerLink]=\"['/listStudents']\">List Students</a>\n    </li>\n  </ul>\n\n</nav>\n\n<!-- \n<ul>\n    <li><a [routerLink]=\"['/onBoardingForm']\" routerLinkActive=\"router-link-active\"\n      > On Boarding Form</a></li>\n    <li><a [routerLink]=\"['/listStudents']\" >List Students</a></li>\n</ul> -->\n\n<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/portal/portal.component.ts":
/*!********************************************!*\
  !*** ./src/app/portal/portal.component.ts ***!
  \********************************************/
/*! exports provided: PortalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalComponent", function() { return PortalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../student.service */ "./src/app/student.service.ts");



var PortalComponent = /** @class */ (function () {
    function PortalComponent(studentService) {
        this.studentService = studentService;
        this.admin = JSON.parse(localStorage.getItem('admin'));
        this.studentService.currentMode = 'create';
    }
    PortalComponent.prototype.ngOnInit = function () {
    };
    PortalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portal',
            template: __webpack_require__(/*! ./portal.component.html */ "./src/app/portal/portal.component.html"),
            styles: [__webpack_require__(/*! ./portal.component.css */ "./src/app/portal/portal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"]])
    ], PortalComponent);
    return PortalComponent;
}());



/***/ }),

/***/ "./src/app/student.service.ts":
/*!************************************!*\
  !*** ./src/app/student.service.ts ***!
  \************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
        this.students$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.admin$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.currentStudent = {
            id: null,
            studentName: null,
            category: null,
            domicile: null,
            birthCerti: null,
            marksheets: null,
            policeClearance: null,
            passport: null,
            declaration: null,
            dob: null,
            fatherName: null,
            motherName: null,
            lastClassScore: null
        };
    }
    StudentService.prototype.fetchStudents = function () {
        this.students$.next(JSON.parse(localStorage.getItem('students')));
        // const url = '/assets/student.json';
        // this.http.get<StudentInterface[]>(url).subscribe(data => {
        //   this.students$.next(data);
        // });
    };
    StudentService.prototype.fetchAdmins = function () {
        var _this = this;
        var url = '/assets/admin.json';
        this.http.get(url).subscribe(function (data) {
            _this.admin$.next(data);
        });
    };
    StudentService.prototype.updateStudent = function (student) {
        // this.students$.next({...this.students$.value, ...student});
        var currentData = this.students$.getValue();
        for (var i = currentData.length - 1; i >= 0; --i) {
            if (currentData[i].id == student.id) {
                currentData[i] = student;
            }
        }
        this.students$.next(currentData);
    };
    StudentService.prototype.addStudent = function (student) {
        console.log(student);
        var currentData = this.students$.getValue();
        console.log(currentData);
        if (currentData != null) {
            var updatedData = currentData.concat([student]);
            this.students$.next(updatedData);
        }
        else {
            this.students$.next([student]);
        }
        console.log(this.students$.value);
    };
    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StudentService);
    return StudentService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\NAGP\Angular\student-onboarding\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map