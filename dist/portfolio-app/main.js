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
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _recent_works_recent_works_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recent-works/recent-works.component */ "./src/app/recent-works/recent-works.component.ts");
/* harmony import */ var _interview_questions_interview_questions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interview-questions/interview-questions.component */ "./src/app/interview-questions/interview-questions.component.ts");
/* harmony import */ var _skillset_skillset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skillset/skillset.component */ "./src/app/skillset/skillset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: '', component: _recent_works_recent_works_component__WEBPACK_IMPORTED_MODULE_3__["RecentWorksComponent"] },
    { path: 'interview', component: _interview_questions_interview_questions_component__WEBPACK_IMPORTED_MODULE_4__["InterviewQuestionsComponent"] },
    { path: 'skills', component: _skillset_skillset_component__WEBPACK_IMPORTED_MODULE_5__["SkillsetComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ".nav-link{\r\n  color: white!important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg\" style=\"background:#7a107b\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"../../assets/images/me1.png\" alt=\"\" class=\"img-fluid text-center\" style=\"overflow:hidden;height:40px;width:40px;border-radius:50%\">\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" style=\"float:left\">\n    <ul class=\" navbar-nav ml-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" routerLink=\"skills\">Skills</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Dropdown\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"interview\">Interview Questions</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n\n<div class=\"footer\" style=\"background:black;height:5rem;position:fixed;bottom:0px;width:100%;\">\n  <div class=\"text-center\">\n    <p style=\"color:white;padding:1rem;font-size:smaller;letter-spacing:3px\">Created and maintained by Chanda Roy</p>\n  </div>\n</div>\n"

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
        this.title = 'portfolio-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _recent_works_recent_works_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recent-works/recent-works.component */ "./src/app/recent-works/recent-works.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _interview_questions_interview_questions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interview-questions/interview-questions.component */ "./src/app/interview-questions/interview-questions.component.ts");
/* harmony import */ var _skillset_skillset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skillset/skillset.component */ "./src/app/skillset/skillset.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _recent_works_recent_works_component__WEBPACK_IMPORTED_MODULE_3__["RecentWorksComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
                _interview_questions_interview_questions_component__WEBPACK_IMPORTED_MODULE_6__["InterviewQuestionsComponent"],
                _skillset_skillset_component__WEBPACK_IMPORTED_MODULE_7__["SkillsetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parallax{\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n\r\n@media only screen and (max-device-width: 768px) {\r\n  .parallax {\r\n    background-attachment: scroll;\r\n  }\r\n}\r\n\r\n\r\n.card{\r\n  width:100%;\r\n  height: 80%;\r\n  box-shadow: 5px 7px 8px #a29595;\r\n  margin-top: 30px;\r\n  text-align: left;\r\n}\r\n\r\n\r\ninput,textarea{\r\n  max-width:500px;\r\n}\r\n\r\n\r\nlabel{\r\n  text-align:left;\r\n  display: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid text-center\" style=\"width:100%;position:absolute\"> -->\n  <div class=\"row\">\n    <div class=\"col-sm-12\" style=\"padding:0\">\n      <div class=\"parallax\" style=\"position:absolute;margin:0;width:100%;min-height:700px;background-image:url(../../assets/images/contact.png);background-size:cover;filter:blur(3px) grayscale(0.5) brightness(0.5)\"></div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\" style=\"text-align:-webkit-center\">\n      <div class=\"card text-center\" style=\"padding:3rem;margin-top:3rem;background:#fffdfd66;max-width:500px\">\n        <div class=\"card-block text-center\">\n          <h5 style=\"color:white\">\n            Thanks for taking the time to reach out. <br>\n            How can I help you today?\n          </h5>\n          <form>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-12\">\n                <label for=\"inputPassword4\">Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Name\">\n              </div>\n              <br>\n              <div class=\"form-group col-md-12\">\n                <label for=\"inputEmail4\">Email</label>\n                <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n              </div>\n\n              <div class=\"form-group col-md-12\">\n                <label for=\"inputAddress\">Message</label>\n                <textarea name=\"message\" class=\"form-control\"  rows=\"3\" cols=\"80\" placeholder=\"Some message\"></textarea>\n              </div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" style=\"height:70px;width:70px;border-radius:35px;box-shadow:4px 2px 4px black\">Send</button><br>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <img src=\"../../assets/images/developer.png\" alt=\"\" class=\"img-fluid text-center\" style=\"margin-top:4rem\">\n    </div>\n  </div>\n<!-- </div> -->\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/interview-questions/interview-questions.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/interview-questions/interview-questions.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interview-questions/interview-questions.component.html":
/*!************************************************************************!*\
  !*** ./src/app/interview-questions/interview-questions.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-top:1rem\">\n  <div class=\"col-sm-3\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" [ngClass]=\"{'active': selectedItem == topic}\" (click)=\"listClick($event, topic)\" *ngFor=\"let topic of topics\">{{topic}}</li>\n    </ul>\n  </div>\n  <div class=\"col-sm-9\">\n    <h3>{{selectedItem}} Interview Questions</h3><hr>\n    <div class=\"questions\" *ngFor=\"let item of questions;let i=index\">\n      <h6><span>{{i+1}} .</span> {{item.question}}</h6>\n      <p>{{item.answer}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/interview-questions/interview-questions.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/interview-questions/interview-questions.component.ts ***!
  \**********************************************************************/
/*! exports provided: InterviewQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewQuestionsComponent", function() { return InterviewQuestionsComponent; });
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

var InterviewQuestionsComponent = /** @class */ (function () {
    function InterviewQuestionsComponent() {
        this.questions = [];
        this.selectedItem = "";
        this.topics = ["Node.js", "Angular", "MongoDB", "Java", "Others"];
    }
    InterviewQuestionsComponent.prototype.ngOnInit = function () {
        this.selectedItem = "Node.js";
        this.questions = [
            {
                "question": "Write a function to reverse a string",
                "answer": ""
            },
            {
                "question": "Write a function to check if a string is a palindrome",
                "answer": ""
            },
            {
                "question": "How is abstract behavior achieved in javascript? ",
                "answer": ""
            },
            {
                "question": "How to implement inheritance in javascript?",
                "answer": ""
            },
            {
                "question": "Why is nodejs used ?",
                "answer": ""
            },
            {
                "question": "alert(parseInt(010)); alert(+010); alert(+”010”);",
                "answer": ""
            },
            {
                "question": "How will u scale nodejs application normally as well as heroku?",
                "answer": ""
            },
            {
                "question": "Explain closure in JavaScript.",
                "answer": ""
            },
            {
                "question": "Differences in ES5 & ES6.",
                "answer": ""
            },
            {
                "question": "Why nodejs (compared to java)?",
                "answer": ""
            },
            {
                "question": "Compare let and var keywords.",
                "answer": ""
            },
            {
                "question": "How to pass data from a route to  another in express.js?",
                "answer": ""
            },
            {
                "question": "Compare setImmediate, setTimeout, process.nextTick, setInterval.",
                "answer": ""
            },
            {
                "question": "How to check how much time a function has taken in node.js?",
                "answer": ""
            },
            {
                "question": "What is callback hell and how to deal with it?",
                "answer": ""
            },
            {
                "question": "",
                "answer": ""
            },
            {
                "question": "",
                "answer": ""
            },
            {
                "question": "",
                "answer": ""
            },
            {
                "question": "",
                "answer": ""
            }
        ];
    };
    InterviewQuestionsComponent.prototype.listClick = function (event, newValue) {
        console.log(newValue);
        this.selectedItem = newValue; // don't forget to update the model here
        // ... do other stuff here ...
    };
    InterviewQuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interview-questions',
            template: __webpack_require__(/*! ./interview-questions.component.html */ "./src/app/interview-questions/interview-questions.component.html"),
            styles: [__webpack_require__(/*! ./interview-questions.component.css */ "./src/app/interview-questions/interview-questions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InterviewQuestionsComponent);
    return InterviewQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/recent-works/recent-works.component.css":
/*!*********************************************************!*\
  !*** ./src/app/recent-works/recent-works.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".one{\r\n  background-image: linear-gradient(red,black);\r\n}\r\n.two{\r\n  background-image: linear-gradient(orange,black);\r\n}\r\n.three{\r\n  background-image: linear-gradient(blue,black);\r\n}\r\n.four{\r\n  background-image: linear-gradient(green,black);\r\n}\r\n.one,.two,.three,.four{\r\n  height: 370px;\r\n}\r\n.overlay{\r\n  background-color: black;\r\n  opacity: 0.7;\r\n}\r\n.gallery_item,{\r\n  height:300px;\r\n  text-align: center;\r\n  padding: 15px;\r\n  /* box-shadow: 5px 7px 8px #a29595; */\r\n}\r\n.gallery_item .card{\r\n  width:100%;\r\n  height: 80%;\r\n  box-shadow: 5px 7px 8px #a29595;\r\n  margin-top: 30px;\r\n}\r\n.parallax{\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n/* @media only screen and (max-device-width: 768px) {\r\n  .parallax {\r\n    background-attachment: scroll;\r\n  }\r\n} */\r\n"

/***/ }),

/***/ "./src/app/recent-works/recent-works.component.html":
/*!**********************************************************!*\
  !*** ./src/app/recent-works/recent-works.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row \">\n  <div class=\"col-sm-12 parallax\" style=\"position:relative;min-height:800px;padding:0\">\n    <div class=\"parallax\" style=\"position:absolute;margin:0;width:100%;min-height:700px;background-image:url(../../assets/images/cover.png);background-size:cover;filter:grayscale(0.5) brightness(0.5)\"></div>\n    <div class=\" card text-center\" style=\"position:absolute;height:500px;width: -webkit-fill-available;margin:3rem;background:transparent;padding-top:8rem\">\n      <div class=\"imageOuter\" style=\"\">\n        <img src=\"../../assets/images/me1.png\" alt=\"\" class=\"img-fluid text-center\" style=\"overflow:hidden;height:80px;width:80px;border-radius:50%\">\n      </div>\n      <h1 class=\"text-center\" style=\"color:white;letter-spacing:4px;\">CHANDA ROY</h1>\n      <h5 class=\"text-center\" style=\"color:white;letter-spacing:7px;\">WEB DEVELOPER</h5>\n      <h6 class=\"text-center \" style=\"color:white;letter-spacing:7px;padding:1rem;\">Enthusiast, learner, coder, designer</h6>\n\n    </div>\n  </div>\n</div>\n<h4 class=\"text-center\">SOME OF MY WORKS</h4>\n<div class=\"row\">\n  <div class=\"col-sm-12 parallax\" style=\"background-image:linear-gradient(pink,white)\">\n    <div class=\"row \">\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">LIMBER</h5>\n            <p class=\"card-text\" title=\"An app for agile project managemen with features like, trello like project management (adding, removing team members), github integration, chat integration\">An app for agile project managemen with features like, trello like project management...</p>\n            <a href=\"https://github.com/ChandaRoy/limber\" target=\"_blank\" class=\"\">Github</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">My Chat App</h5>\n            <p class=\"card-text\">Users can login and chat.</p>\n            <a href=\"https://github.com/ChandaRoy/mychatapp\" class=\"\" target=\"_blank\">Github</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4 gallery_item\">\n        <div class=\"card \">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Button</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <br><br>\n  </div>\n</div>\n<h3 class=\"text-center\" style=\"letter-spacing:4px\">Hobbies</h3>\n<div class=\"row\">\n  <div class=\"col-sm-12 parallax align-middle\" style=\"min-height:400px;background-image:url(../../assets/images/hobby.jpg)\">\n    <h1 class=\"float-right align-middle\" style=\"letter-spacing:4px;margin-top:4rem\">Singing</h1>\n  </div>\n  <div class=\"col-sm-12 parallax\" style=\"min-height:400px;background-image:url(../../assets/images/sky.jpg)\">\n    <h1 class=\"text-center\" style=\"letter-spacing:4px;margin-top:8rem;color:white;font-size:xxx-large\">Sky Watching</h1>\n  </div>\n  <div class=\"col-sm-12 parallax\" style=\"min-height:400px;background-image:url(../../assets/images/gardening.jpg)\">\n    <h1 class=\"text-center\" style=\"background:#092b099e;letter-spacing:4px;margin-top:8rem;color:white;font-size:xx-large\">Gardening</h1>\n  </div>\n</div>\n<br><br>\n"

/***/ }),

/***/ "./src/app/recent-works/recent-works.component.ts":
/*!********************************************************!*\
  !*** ./src/app/recent-works/recent-works.component.ts ***!
  \********************************************************/
/*! exports provided: RecentWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentWorksComponent", function() { return RecentWorksComponent; });
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

var RecentWorksComponent = /** @class */ (function () {
    function RecentWorksComponent() {
    }
    RecentWorksComponent.prototype.ngOnInit = function () {
    };
    RecentWorksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recent-works',
            template: __webpack_require__(/*! ./recent-works.component.html */ "./src/app/recent-works/recent-works.component.html"),
            styles: [__webpack_require__(/*! ./recent-works.component.css */ "./src/app/recent-works/recent-works.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecentWorksComponent);
    return RecentWorksComponent;
}());



/***/ }),

/***/ "./src/app/skillset/skillset.component.css":
/*!*************************************************!*\
  !*** ./src/app/skillset/skillset.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/skillset/skillset.component.html":
/*!**************************************************!*\
  !*** ./src/app/skillset/skillset.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\" style=\"margin-top:20px\">\n  <div class=\"col-sm-2\" *ngFor=\"let image of images\">\n    <div class=\"card\" style=\"padding:10px;box-shadow:4px 4px 4px gray\">\n        <img src={{path+image}} class=\"img-fluid\" alt=\"\"  style=\"width:150px\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/skillset/skillset.component.ts":
/*!************************************************!*\
  !*** ./src/app/skillset/skillset.component.ts ***!
  \************************************************/
/*! exports provided: SkillsetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsetComponent", function() { return SkillsetComponent; });
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

var SkillsetComponent = /** @class */ (function () {
    function SkillsetComponent() {
        this.path = "../../assets/images/";
        this.images = ["node.png", "mongo.png", "angular.png", "express.png", "redis.png", "mysql.png", "socket.png", "html5.png", "git.png", "css3.png", "bootstrap.png", "java.png"];
    }
    SkillsetComponent.prototype.ngOnInit = function () {
    };
    SkillsetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skillset',
            template: __webpack_require__(/*! ./skillset.component.html */ "./src/app/skillset/skillset.component.html"),
            styles: [__webpack_require__(/*! ./skillset.component.css */ "./src/app/skillset/skillset.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsetComponent);
    return SkillsetComponent;
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

module.exports = __webpack_require__(/*! D:\Projects\PortFolio\portfolio-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map