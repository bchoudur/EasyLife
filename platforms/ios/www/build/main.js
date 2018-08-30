webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AddFoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddFoodPage = /** @class */ (function () {
    function AddFoodPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddFoodPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddFoodPage');
    };
    AddFoodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-food',template:/*ion-inline-start:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\add-food\add-food.html"*/'<!--\n  Generated template for the AddFoodPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <button class="long-btn">Search</button>\n\n  <form>\n    <div class="form-section">\n      <p>Everything in this form is required</p>\n      <label for="food-title">Food Title</label>\n      <input type="text" id="food-title" placeholder="Name of Food">\n      \n      <label for="food-time">Food Time:</label>\n      <select id="food-time" name="exercise">\n        <option value="text">Breakfast</option>\n        <option value="text">Lunch</option>\n        <option value="text">Dinner</option>\n        <option value="text">Supper</option>\n        <option value="text">Snack</option>\n      </select>\n\n      <div class="input-container-3">\n        <label for="carbs">Carbs</label>\n        <input type="text" id="carbs" placeholder="g" name="carbs">\n      </div>\n\n      <div class="input-container-3">\n          <label for="fats">Fats</label>\n          <input type="text" id="fats" placeholder="g" name="fats">\n        </div>\n\n        <div class="input-container-3">\n            <label for="carbs">Protein</label>\n            <input type="text" id="proteins" placeholder="g" name="proteins">\n          </div>\n    </div>\n\n    <div class="form-section">\n        <p>Everything in this form is optional</p>\n        <div class="input-container-2">\n          <label for="dietary-fiber">Dietary Fiber</label>\n          <input type="text" id="dietary-fiber" placeholder="g" name="dietary-fiber">\n        </div>\n  \n        <div class="input-container-2">\n          <label for="sugar">Sugar</label>\n          <input type="text" id="sugar" placeholder="g" name="sugar">\n        </div>\n        \n        <div class="input-container-3">\n          <label for="sat-fats">Sat Fat</label>\n          <input type="text" id="sat-fats" placeholder="g" name="sat-fats">\n        </div>\n\n        <div class="input-container-3">\n          <label for="sat-fats">Trans Fat</label>\n          <input type="text" id="sat-fats" placeholder="g" name="sat-fats">\n        </div>\n\n          <div class="input-container-3">\n            <label for="sat-fats">Unsat Fat</label>\n            <input type="text" id="sat-fats" placeholder="g" name="sat-fats">\n          </div>\n\n          <div class="input-container-2">\n            <label for="cholest">Cholesterol</label>\n            <input type="text" id="cholest" placeholder="mg" name="cholest">\n          </div>\n\n          <div class="input-container-2">\n            <label for="sodium">Sodium</label>\n            <input type="text" id="sodium" placeholder="mg" name="sodium">\n          </div>\n\n          <div class="input-container-3">\n            <label for="vit-a">Vitamin A</label>\n            <input type="text" id="vit-a" placeholder="%" name="vit-a">\n          </div>\n\n          <div class="input-container-3">\n            <label for="vit-b">Vitamin B</label>\n            <input type="text" id="vit-b" placeholder="%" name="vit-b">\n          </div>\n\n          <div class="input-container-3">\n            <label for="vit-c">Vitamin C</label>\n            <input type="text" id="vit-c" placeholder="%" name="vit-c">\n          </div>\n\n          <div class="input-container-3">\n            <label for="vit-c">Vitamin D</label>\n            <input type="text" id="vit-d" placeholder="%" name="vit-d">\n          </div>\n\n            <div class="input-container-3">\n              <label for="vit-e">Vitamin E</label>\n              <input type="text" id="vit-e" placeholder="%" name="vit-e">\n            </div>\n\n              <div class="input-container-3">\n                <label for="vit-k">Vitamin K</label>\n                <input type="text" id="vit-k" placeholder="%" name="vit-k">\n              </div>\n      </div>\n\n      \n\n  </form>\n  \n</ion-content>\n'/*ion-inline-end:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\add-food\add-food.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AddFoodPage);
    return AddFoodPage;
}());

//# sourceMappingURL=add-food.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__starter_form_starter_form__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the StarterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StarterPage = /** @class */ (function () {
    function StarterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.starterFormPage = __WEBPACK_IMPORTED_MODULE_2__starter_form_starter_form__["a" /* StarterFormPage */];
    }
    StarterPage.prototype.ionViewDidLoad = function () {
    };
    StarterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-starter',template:/*ion-inline-start:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\starter\starter.html"*/'<!--\n  Generated template for the StarterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="starter-container">\n      <h1>Easy Life</h1>\n      <button [navPush]="starterFormPage">Get Started</button>\n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\starter\starter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], StarterPage);
    return StarterPage;
}());

//# sourceMappingURL=starter.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-food/add-food.module": [
		277,
		2
	],
	"../pages/starter-form/starter-form.module": [
		278,
		1
	],
	"../pages/starter/starter.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_starter_starter__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_starter_form_starter_form__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_person_service_person_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_add_food_add_food__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_starter_starter__["a" /* StarterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_starter_form_starter_form__["a" /* StarterFormPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_food_add_food__["a" /* AddFoodPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-food/add-food.module#AddFoodPageModule', name: 'AddFoodPage', segment: 'add-food', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/starter-form/starter-form.module#StarterFormPageModule', name: 'StarterFormPage', segment: 'starter-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/starter/starter.module#StarterPageModule', name: 'StarterPage', segment: 'starter', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_starter_starter__["a" /* StarterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_starter_form_starter_form__["a" /* StarterFormPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_add_food_add_food__["a" /* AddFoodPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_person_service_person_service__["a" /* PersonService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_starter_starter__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_starter_form_starter_form__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_food_add_food__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AddFoodPage } from '../pages/add-food/add-food';
//import { HomePage } from '../pages/home/home';




//import { StarterFormPage } from '../pages/starter-form/starter-form';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] },
            { title: 'Starter', component: __WEBPACK_IMPORTED_MODULE_4__pages_starter_starter__["a" /* StarterPage */] },
            { title: 'Starter Form', component: __WEBPACK_IMPORTED_MODULE_5__pages_starter_form_starter_form__["a" /* StarterFormPage */] },
            { title: 'Add Food', component: __WEBPACK_IMPORTED_MODULE_6__pages_add_food_add_food__["a" /* AddFoodPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_person_service_person_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the StarterFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StarterFormPage = /** @class */ (function () {
    //person: Person
    function StarterFormPage(navCtrl, personService) {
        this.navCtrl = navCtrl;
        this.personService = personService;
    }
    StarterFormPage.prototype.savePersonInfo = function (person) {
        this.personService.savePersonInfo(person);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    StarterFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-starter-form',template:/*ion-inline-start:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\starter-form\starter-form.html"*/'<!--\n  Generated template for the StarterFormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Home</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="savePersonInfo(f.value)" #f="ngForm">\n    <div class="form-section">\n      <h3 class="form-title">Name</h3>\n\n      <label for="name">Name:</label>\n      <input type="text" id="name" name="name" ngModel>\n    </div>\n\n    <div class="form-section">\n      <h3 class="form-title">Health</h3>\n\n      <div class="input-container-2">\n        <label for="age">Age:</label>\n        <input type="text" id="age" placeholder="years" name="age" ngModel>\n      </div>\n\n      <div class="input-container-2">\n        <label for="sex">Sex:</label>\n        <select id="sex" name="sex" ngModel>\n          <option value="text">male</option>\n          <option value="text">female</option>\n        </select>\n      </div>\n      \n      <div class="input-container-2">\n        <label for="height">Height:</label>\n        <input type="text" id="height" placeholder="feet" name="feet" ngModel>\n      </div>\n\n      <div class="input-container-2">\n        <input type="text" id="height-s" placeholder="inches" name="inches" ngModel>\n      </div>\n      \n      <div class="input-container-2">\n        <label for="weight">Weight:</label>\n        <input type="text" id="weight" placeholder="lbs" name="weight" ngModel>\n      </div>\n      \n      <label for="fitness">Fitness Level:</label>\n      <select id="fitness" name="exercise" ngModel>\n        <option value="text">Lightly Active - exercise/sport 1-3 times/week</option>\n        <option value="text">kg</option>\n      </select>\n\n    </div>\n\n    <div class="form-section">\n      <h3 class="form-title">Money</h3>\n\n      <label for="balance">Balance:</label>\n      <input type="text" id="balance" placeholder="dollars" name="balance" ngModel>\n\n      <label for="allowance">Allowance:</label>\n      <input type="text" id="allowance" placeholder="dollars" name="allowance" ngModel>\n    </div>\n\n    <button type="submit" class="submit-btn">Save & Continue</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\starter-form\starter-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_person_service_person_service__["a" /* PersonService */]])
    ], StarterFormPage);
    return StarterFormPage;
}());

//# sourceMappingURL=starter-form.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PersonServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PersonService = /** @class */ (function () {
    function PersonService(storage) {
        this.storage = storage;
        this.persons = [];
    }
    PersonService.prototype.savePersonInfo = function (person) {
        person.id = Date.now();
        this.persons.push(person);
        this.storage.set('persons', this.persons);
    };
    PersonService.prototype.getAllPersonInfo = function () {
        var _this = this;
        return this.storage.get('persons').then(function (persons) {
            _this.persons = persons == null ? [] : persons;
            return _this.persons.slice();
        });
    };
    PersonService.prototype.getPersonInfo = function (id) {
        var _this = this;
        return this.storage.get('persons').then(function (persons) {
            _this.person = persons.slice().find(function (r) { return r.id == id; });
            return _this.person;
        });
    };
    PersonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], PersonService);
    return PersonService;
}());

//# sourceMappingURL=person-service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_person_service_person_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, personService) {
        this.navCtrl = navCtrl;
        this.personService = personService;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.persons = this.getAllPersonInfo();
        //this.setMainProgressHeight();
    };
    HomePage.prototype.getPersonInfo = function (id) {
        var _this = this;
        this.personService.getPersonInfo(id).then(function (p) {
            _this.person = p;
            _this.navCtrl.push;
        });
    };
    HomePage.prototype.getAllPersonInfo = function () {
        return this.personService.getAllPersonInfo();
    };
    //Animations below
    HomePage.prototype.progressFitAnim = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.show').addClass('hide-left');
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.hide-left').addClass('show');
    };
    HomePage.prototype.hideProgressOpt = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.inner-progress-opt').css({
            'transform': 'scale(0)'
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.exit-opt-btn').css({
            'opacity': '0'
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\home\home.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="main-progress-container">\n    \n    <div class="main-progress hide-left">\n      <!--<div class="inner-progress-wrapper">-->\n        <button class="inner-progress" (click)="showProgressOpt()">\n          <h2>5600/10000</h2>\n          <h3>Steps</h3>\n          <div class="inner-progress-opt">\n            <button class="inner-progress-btn">Add Food</button>\n            <button class="inner-progress-btn">Add Water</button>\n          </div>\n        </button>\n      <!--</div>-->\n    </div>\n\n    <div class="main-progress show">\n        <!--<div class="inner-progress-wrapper">-->\n          <button class="inner-progress" (click)="showProgressOpt()">\n            <h2>1325/2000</h2>\n            <h3>Calories</h3>\n            <div class="inner-progress-opt">\n              <button class="inner-progress-btn">Add Food</button>\n              <button class="inner-progress-btn">Add Water</button>\n            </div>\n          </button>\n        <!--</div>-->\n      </div>\n\n    <div class="main-progress hide-right">\n      <!--<div class="inner-progress-wrapper">-->\n        <button class="inner-progress" (click)="showProgressOpt()">\n          <h2>$320/$500</h2>\n          <div class="inner-progress-opt">\n            <button class="inner-progress-btn">Add Food</button>\n            <button class="inner-progress-btn">Add Water</button>\n          </div>\n        </button>\n      <!--</div>-->\n    </div>\n  </div>\n  \n\n  <div class="progress-switch">\n    <button class="progess-switch-btn" (click)="progressFitAnim()">F</button>\n    <button class="progess-switch-btn">F</button>\n    <button class="progess-switch-btn">C</button>\n    <button class="progess-switch-btn">M</button>\n    <button class="progess-switch-btn exit-opt-btn" (click)="hideProgressOpt()">X</button>\n  </div>\n\n  <div class="other-progress">\n\n    <div class="progress-block">\n      <h4>Carbs 200/300</h4>\n      <div class="progress-bar">\n        <div class="inner-bar carbs"></div>\n      </div>\n    </div>\n\n    <div class="progress-block">\n      <h4>Fats 200/300</h4>\n      <div class="progress-bar">\n        <div class="inner-bar fats"></div>\n      </div>\n    </div>\n\n    <div class="progress-block">\n      <h4>Protein 200/300</h4>\n      <div class="progress-bar">\n        <div class="inner-bar protiens"></div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_person_service_person_service__["a" /* PersonService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map