webpackJsonp([6],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(51);
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

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_person_service_person_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__heart_sensor_heart_sensor__ = __webpack_require__(133);
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
        this.pages = [
            { component: __WEBPACK_IMPORTED_MODULE_4__heart_sensor_heart_sensor__["a" /* HeartSensorPage */] }
        ];
    }
    /*******************PAGES**********************/
    HomePage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.push(page.component);
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.persons = this.getAllPersonInfo();
        //this.setMainProgressHeight();
    };
    /*******************END OF PAGES**********************/
    /*******************DATABASE**********************/
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
    /*******************END OF DATABASE**********************/
    /*******************ANIMATIONS**********************/
    HomePage.prototype.progressFitAnim = function () {
        //TOP CIRCLE PROGRESS
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.fitness').css({
            'top': '50%',
            'left': '50%',
            'transform': 'translate(-50%, -50%)'
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.calories').css({
            'top': '50%',
            'left': '100%',
            'transform': 'translateY(-50%)'
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.money').css({
            'top': '50%',
            'left': '200%',
            'transform': 'translateY(-50%)'
        });
        //OTHER PROGRESS
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.fitness-container').css({
            'left': '0',
            'transform': 'translateX(0)'
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.calories-container').css({
            'left': '-100%',
            'transform': 'translateX(-50%)'
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.money-container').css({
            'left': '-200%',
            'transform': 'translateX(-50%)'
        });
        //BORDER COLOR
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.progess-switch-btn').css({
            'border': '2px #0EBBBF solid'
        });
    };
    HomePage.prototype.progressCaloriesAnim = function () {
        //TOP CIRCLE PROGRESS
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.fitness').css({
            'top': '50%',
            'left': '-100%',
            'transform': 'translate(-50%, -50%)'
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.calories').css({
            'top': '50%',
            'left': '50%',
            'transform': 'translate(-50%, -50%)'
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.money').css({
            'top': '50%',
            'left': '100%',
            'transform': 'translateY(-50%)'
        });
        //OTHER PROGRESS
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.fitness-container').css({
            'left': '100%',
            'transform': 'translateX(50%)'
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.calories-container').css({
            'left': '0',
            'transform': 'translateX(0)'
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.money-container').css({
            'left': '-100%',
            'transform': 'translateX(-50%)'
        });
        //BORDER COLOR
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.progess-switch-btn').css({
            'border': '2px #FF0E3D solid'
        });
    };
    HomePage.prototype.progressMoneyAnim = function () {
        //TOP CIRCLE PROGRESS
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.fitness').css({
            'top': '50%',
            'left': '-200%',
            'transform': 'translateY(-50%)'
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.calories').css({
            'top': '50%',
            'left': '-100%',
            'transform': 'translateY(-50%)'
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.money').css({
            'top': '50%',
            'left': '50%',
            'transform': 'translate(-50%, -50%)'
        });
        //OTHER PROGRESS
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.fitness-container').css({
            'left': '200%',
            'transform': 'translateX(50%)'
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.calories-container').css({
            'left': '100%',
            'transform': 'translateX(50%)'
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.money-container').css({
            'left': '0%',
            'transform': 'translateX(0)'
        });
        //BORDER COLOR
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.progess-switch-btn').css({
            'border': '2px #1CB567 solid'
        });
    };
    HomePage.prototype.showProgressOpt = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.inner-progress-opt').css({
            'transform': 'scale(1)'
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.exit-opt-btn').css({
            'opacity': '1'
        });
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
            selector: 'page-home',template:/*ion-inline-start:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\home\home.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="main-progress-container">\n    \n    <div class="main-progress fitness hide-left">\n      <!--<div class="inner-progress-wrapper">-->\n        <button class="inner-progress fitness-color" (click)="showProgressOpt()">\n          <h2>5600/10000</h2>\n          <h3>Steps</h3>\n          <i class="fas fa-plus"></i>\n          <div class="inner-progress-opt">\n            <button class="inner-progress-btn fitness-color">Add Exercise</button>\n            <button class="inner-progress-btn fitness-color">Add Walk</button>\n          </div>\n        </button>\n      <!--</div>-->\n    </div>\n\n    <div class="main-progress calories show">\n        <!--<div class="inner-progress-wrapper">-->\n          <button class="inner-progress calories-color" (click)="showProgressOpt()">\n            <h2>1325/2000</h2>\n            <h3>Calories</h3>\n            <i class="fas fa-plus"></i>\n            <div class="inner-progress-opt calories-color">\n              <button class="inner-progress-btn calories-color">Add Food</button>\n              <button class="inner-progress-btn calories-color">Add Water</button>\n            </div>\n          </button>\n        <!--</div>-->\n      </div>\n\n    <div class="main-progress money hide-right">\n      <!--<div class="inner-progress-wrapper">-->\n        <button class="inner-progress money-color" (click)="showProgressOpt()">\n          <h2>$320/$500</h2>\n          <div class="inner-progress-opt">\n            <button class="inner-progress-btn">Add Food</button>\n            <button class="inner-progress-btn">Add Water</button>\n          </div>\n        </button>\n      <!--</div>-->\n    </div>\n  </div>\n  \n\n  <div class="progress-switch">\n    <div class="row-center">\n\n        <button class="progess-switch-btn" (click)="progressFitAnim()">\n            <img src="assets/imgs/icons8-exercise-128.png">\n        </button>\n\n        <button class="progess-switch-btn" (click)="progressCaloriesAnim()">\n            <img src="assets/imgs/icons8-meal-128.png">\n        </button>\n\n        <button class="progess-switch-btn" (click)="progressMoneyAnim()">\n          <img src="assets/imgs/icons8-coins-128.png">\n        </button>\n\n        <button class="progess-switch-btn exit-opt-btn calories-c" (click)="hideProgressOpt()">\n          <img src="assets/imgs/icons8-bread-128.png">\n        </button>\n    </div>\n  </div>\n\n  <div class="other-progress">\n\n    <!--CALORIE CONTAINER-->\n    <div class="calories-container">\n\n      <div class="row-center">\n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-bread-128.png">\n          <p>Carbs</p>\n          <p>132/200</p>\n          <div class="progress-bar">\n              <div class="inner-bar calories-color carbs"></div>\n          </div>\n        </div>\n          \n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-olive-oil-128.png">\n          <p>Fats</p>\n          <p>132/200</p>\n          <div class="progress-bar">\n            <div class="inner-bar calories-color fats"></div>\n          </div>\n        </div>\n          \n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-thanksgiving-turkey-128.png">\n          <p>Proteins</p>\n          <p>132/200</p>\n          <div class="progress-bar">\n            <div class="inner-bar calories-color protiens"></div>\n          </div>\n        </div>\n\n      </div><!--END OF ROW-->\n      \n      <div class="row-center">\n    \n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-sodium-80.png">\n          <p>Sodium</p>\n          <p>84%</p>\n          <div class="progress-bar">\n            <div class="inner-bar calories-color sodium"></div>\n          </div>\n        </div>\n        \n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-tetra-pak-128.png">\n          <p>Calcium</p>\n          <p>63%</p>\n          <div class="progress-bar">\n            <div class="inner-bar calories-color calcium"></div>\n          </div>\n        </div>\n        \n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-water-glass-128.png">\n          <p>Water</p>\n          <p>5/8</p>\n          <div class="progress-bar">\n            <div class="inner-bar calories-color water"></div>\n          </div>\n        </div>\n\n      </div><!--END OF ROW-->\n    </div><!--END OF CALORIES CONTAINER-->\n\n    <!--CALORIE CONTAINER-->\n    <div class="fitness-container">\n\n      <div class="row-center">\n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-stairs-120.png">\n          <p>Stairs</p>\n          <p>13</p>\n          <div class="progress-bar">\n              <div class="inner-bar fitness-color carbs"></div>\n          </div>\n        </div>\n          \n        <div class="btm-general-btn" (click)="openPage(pages[0])">\n          <img src="assets/imgs/icons8-pulse-128.png">\n          <p>Heart rate</p>\n          <p>132/200</p>\n          <div class="progress-bar">\n            <div class="inner-bar fitness-color fats"></div>\n          </div>\n        </div>\n          \n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-hypertension-128.png">\n          <p>Stress</p>\n          <p>132/200</p>\n          <div class="progress-bar">\n            <div class="inner-bar fitness-color protiens"></div>\n          </div>\n        </div>\n\n      </div><!--END OF ROW-->\n      \n      <div class="row-center">\n    \n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-exercise-128.png">\n          <p>Exercise</p>\n          <p>84%</p>\n          <div class="progress-bar">\n            <div class="inner-bar fitness-color sodium"></div>\n          </div>\n        </div>\n        \n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-running-128.png">\n          <p>Run</p>\n          <p>63%</p>\n          <div class="progress-bar">\n            <div class="inner-bar fitness-color calcium"></div>\n          </div>\n        </div>\n        \n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-walking-128.png">\n          <p>Walk</p>\n          <p>5/8</p>\n          <div class="progress-bar">\n            <div class="inner-bar fitness-color water"></div>\n          </div>\n        </div>\n\n      </div><!--END OF ROW-->\n    </div><!--END OF FITENSS CONTAINER-->\n\n    <div class="money-container">\n\n      <div class="row-center">\n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-bank-cards-128.png">\n          <p>Credit</p>\n          <p>132/200</p>\n          <div class="progress-bar">\n              <div class="inner-bar money-color carbs"></div>\n          </div>\n        </div>\n          \n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-money-box-128.png">\n          <p>Bank</p>\n          <p>132/200</p>\n          <div class="progress-bar">\n            <div class="inner-bar money-color fats"></div>\n          </div>\n        </div>\n          \n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-check-128.png">\n          <p>Bill</p>\n          <p>132/200</p>\n          <div class="progress-bar">\n            <div class="inner-bar money-color protiens"></div>\n          </div>\n        </div>\n\n      </div><!--END OF ROW-->\n      \n      <div class="row-center">\n    \n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-ingredients-128.png">\n          <p>Groceries</p>\n          <p>84%</p>\n          <div class="progress-bar">\n            <div class="inner-bar money-color sodium"></div>\n          </div>\n        </div>\n        \n        <div class="btm-general-btn">\n          <img src="assets/imgs/icons8-rent-128.png">\n          <p>Rent</p>\n          <p>63%</p>\n          <div class="progress-bar">\n            <div class="inner-bar money-color calcium"></div>\n          </div>\n        </div>\n\n      </div><!--END OF ROW-->\n    </div><!--END OF MONEY CONTAINER-->\n  </div><!--END OF OTHER PROGESS-->\n</ion-content>\n'/*ion-inline-end:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_person_service_person_service__["a" /* PersonService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFoodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeartSensorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
 * Generated class for the HeartSensorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HeartSensorPage = /** @class */ (function () {
    function HeartSensorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HeartSensorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HeartSensorPage');
    };
    HeartSensorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-heart-sensor',template:/*ion-inline-start:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\heart-sensor\heart-sensor.html"*/'<!--\n  Generated template for the HeartSensorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Heart Rate</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="sensor-reader">\n\n  </div>\n\n  <div class="measure-level-exercise">\n    <div class="inner-measure measure-normal"></div>\n    <div class="inner-measure measure-moderate"></div>\n    <div class="inner-measure measure-weight"></div>\n    <div class="inner-measure measure-aerobix"></div>\n    <div class="inner-measure measure-VO2"></div>\n  </div>\n\n  <div class="sensor-opt-btns">\n    <button class="sensor-opt-btn">Measure</button>\n    <button class="sensor-opt-btn">Save</button>\n    <select class="sensor-opt-select" name="exercise-levels">\n      <option value="text">General</option>\n      <option value="text">After Exercise</option>\n    </select>\n  </div>\n\n  <div class="measurement-histories">\n    <h3>History</h3>\n    <ul>\n      <li>\n        <div class="inner-history-li">\n          <p>86 Beats</p>\n        </div>\n\n        <div class="inner-history-li">\n          \n          <div class="measure-level-exercise">\n            <div class="inner-measure measure-normal"></div>\n            <div class="inner-measure measure-moderate"></div>\n            <div class="inner-measure measure-weight"></div>\n            <div class="inner-measure measure-aerobix"></div>\n            <div class="inner-measure measure-VO2"></div>\n          </div>    \n        </div>\n\n        <div class="inner-history-li">\n          <p class="date">7/20/18</p>\n        </div>\n\n      </li>\n\n      <li>\n        <div class="inner-history-li">\n          <p>86 Beats</p>\n        </div>\n  \n        <div class="inner-history-li">\n          \n          <div class="measure-level-exercise">\n            <div class="inner-measure measure-normal"></div>\n            <div class="inner-measure measure-moderate"></div>\n            <div class="inner-measure measure-weight"></div>\n            <div class="inner-measure measure-aerobix"></div>\n            <div class="inner-measure measure-VO2"></div>\n          </div>    \n        </div>\n  \n        <div class="inner-history-li">\n          <p class="date">7/20/18</p>\n        </div>\n      </li>\n\n      <li>\n\n        <div class="inner-history-li">\n          <p>86 Beats</p>\n        </div>\n    \n        <div class="inner-history-li">\n          \n          <div class="measure-level-exercise">\n            <div class="inner-measure measure-normal"></div>\n            <div class="inner-measure measure-moderate"></div>\n            <div class="inner-measure measure-weight"></div>\n            <div class="inner-measure measure-aerobix"></div>\n            <div class="inner-measure measure-VO2"></div>\n          </div>    \n        </div>\n    \n        <div class="inner-history-li">\n          <p class="date">7/20/18</p>\n        </div>\n      </li>\n\n      <li>\n        <div class="inner-history-li">\n          <p>86 Beats</p>\n        </div>\n    \n        <div class="inner-history-li">\n          \n          <div class="measure-level-exercise">\n            <div class="inner-measure measure-normal"></div>\n            <div class="inner-measure measure-moderate"></div>\n            <div class="inner-measure measure-weight"></div>\n            <div class="inner-measure measure-aerobix"></div>\n            <div class="inner-measure measure-VO2"></div>\n          </div>    \n        </div>\n    \n        <div class="inner-history-li">\n          <p class="date">7/20/18</p>\n        </div>\n      </li>\n\n    </ul>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\heart-sensor\heart-sensor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HeartSensorPage);
    return HeartSensorPage;
}());

//# sourceMappingURL=heart-sensor.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__starter_form_starter_form__ = __webpack_require__(69);
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

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkRunPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_fitness_server_fitness_server__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_pedometer__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WalkRunPage = /** @class */ (function () {
    function WalkRunPage(navCtrl, plt, geolocation, navParams, fitnessService, pedometer) {
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.geolocation = geolocation;
        this.navParams = navParams;
        this.fitnessService = fitnessService;
        this.pedometer = pedometer;
        this.currentMapTrack = null;
        this.isTracking = false;
        this.trackedRoute = [];
    }
    WalkRunPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.plt.ready().then(function () {
            _this.loadHistoricRoutes();
            var mapOptions = {
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.geolocation.getCurrentPosition().then(function (pos) {
                var latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                _this.map.setCenter(latLng);
                _this.map.setZoom(16);
            }).catch(function (error) {
                console.log('Error getting location', error);
            });
        });
    };
    WalkRunPage.prototype.loadHistoricRoutes = function () {
        this.routes = this.fitnessService.getAllRoutes();
    };
    WalkRunPage.prototype.startTracking = function () {
        var _this = this;
        this.isTracking = true;
        this.trackedRoute = [];
        var geoOptions = { enableHighAccuracy: true };
        this.startTime = new Date().getTime();
        this.pedometer.startPedometerUpdates().subscribe(function (data) {
            _this.steps = data.numberOfSteps;
            _this.miles = (data.numberOfSteps / 2112).toFixed(3);
            _this.calories = Math.round(data.numberOfSteps * 0.05);
        });
        this.positionSubscription = this.geolocation.watchPosition(geoOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["filter"])(function (p) {
            return p.coords !== undefined;
        })).subscribe(function (data) {
            //setTimeout(() =>{
            _this.speed = (data.coords.speed * 2.2369).toFixed(3);
            _this.altitude = (data.coords.altitude * 3.28084).toFixed(1);
            _this.trackedRoute.push({ lat: data.coords.latitude, lng: data.coords.longitude });
            _this.redrawPath(_this.trackedRoute);
            //});
        });
    };
    WalkRunPage.prototype.redrawPath = function (path) {
        if (this.currentMapTrack) {
            this.currentMapTrack.setMap(null);
        }
        if (path.length > 1) {
            this.currentMapTrack = new google.maps.Polyline({
                path: path,
                geodesic: false,
                strokeColor: '#ff00ff',
                strokeOpacity: 1.0,
                strokeWeight: 5
            });
            this.currentMapTrack.setMap(this.map);
        }
    };
    WalkRunPage.prototype.stopTracking = function () {
        this.endTime = new Date().getTime();
        var totalTime = this.endTime - this.startTime;
        totalTime = totalTime / 1000; //converts to seconds
        var newRoute = {
            date: new Date().getTime(),
            path: this.trackedRoute,
            steps: this.steps,
            miles: this.miles,
            calories: this.calories,
            totalTime: totalTime
        };
        this.fitnessService.saveRoute(newRoute);
        this.isTracking = false;
        this.pedometer.stopPedometerUpdates();
        this.positionSubscription.unsubscribe();
        this.currentMapTrack.setMap(null);
    };
    WalkRunPage.prototype.showHistoryRoute = function (route) {
        this.redrawPath(route);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], WalkRunPage.prototype, "mapElement", void 0);
    WalkRunPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-walk-run',template:/*ion-inline-start:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\walk-run\walk-run.html"*/'<!--\n  Generated template for the WalkRunPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Walk / Run Trackor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div #map id="map"></div>\n\n  <div class="info-gauge-container" *ngIf="isTracking">\n    <div class="info-gauge">\n      <img src="assets/imgs/icons8-speed-128.png">\n      <p>Speed</p>\n      <h5>{{ speed }} mph</h5>\n    </div>\n    <div class="info-gauge">\n      <img src="assets/imgs/icons8-mountain-128.png">\n      <p>Altitude</p>\n      <h5>{{ altitude }} ft</h5>\n    </div>\n    <div class="info-gauge">\n      <img src="assets/imgs/icons8-trainers-128.png">\n      <p>Steps</p>\n      <h5>{{ steps }} steps</h5>\n    </div>\n    <div class="info-gauge">\n      <img src="assets/imgs/icons8-road-128.png">\n      <p>Distance</p>\n      <h5>{{ miles }} mi</h5>\n    </div>\n    <div class="info-gauge">\n      <img src="assets/imgs/icons8-fire-128.png">\n      <p>Calories</p>\n      <h5>{{ calories }} Cal</h5>\n    </div>\n    <div class="info-gauge">\n      <img src="assets/imgs/icons8-fire-128.png">\n      <p>Other</p>\n      <h5>Add</h5>\n    </div>\n  </div>\n\n  <div class="track-btn-container">\n    <button class="track-btn go" (click)="startTracking()" *ngIf="!isTracking">Go</button>\n    <button class="track-btn stop" (click)="stopTracking()" *ngIf="isTracking">Stop</button>\n    <!--<button class="track-btn resume" *ngIf="isPaused">Resume</button>\n    <button class="track-btn cancel" *ngIf="isPaused">Cancel</button>-->\n  </div>\n\n  <div class="measurement-histories">\n    \n    <h3>History</h3>\n    <ul>\n      <li *ngFor="let route of routes | async">\n        <div class="inner-history-li">\n          <p><span class="date">{{ route.date | date }}</span></p>\n        </div>\n\n        <div class="inner-history-li">\n          <button class="inner-history-btn">Details</button>\n          <button class="inner-history-btn" (click)="showHistoryRoute(route.path)">Load</button>\n        </div>\n      </li>\n    </ul>\n  \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\walk-run\walk-run.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_fitness_server_fitness_server__["a" /* FitnessServerProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_pedometer__["a" /* Pedometer */]])
    ], WalkRunPage);
    return WalkRunPage;
}());

//# sourceMappingURL=walk-run.js.map

/***/ }),

/***/ 145:
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
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-food/add-food.module": [
		419,
		14
	],
	"../pages/food-dairy/food-dairy.module": [
		425,
		8
	],
	"../pages/food-detail/food-detail.module": [
		420,
		13
	],
	"../pages/heart-sensor/heart-sensor.module": [
		421,
		12
	],
	"../pages/starter-form/starter-form.module": [
		423,
		11
	],
	"../pages/starter/starter.module": [
		422,
		10
	],
	"../pages/walk-run/walk-run.module": [
		424,
		9
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
webpackAsyncContext.id = 188;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FitnessServerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(51);
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
  Generated class for the FitnessServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FitnessServerProvider = /** @class */ (function () {
    //private route: Route;
    function FitnessServerProvider(storage) {
        this.storage = storage;
        this.routes = [];
    }
    FitnessServerProvider.prototype.saveRoute = function (route) {
        this.routes.push(route);
        this.storage.set('routes', this.routes);
    };
    FitnessServerProvider.prototype.getAllRoutes = function () {
        var _this = this;
        return this.storage.get('routes').then(function (routes) {
            _this.routes = routes == null ? [] : routes;
            return _this.routes.slice();
        });
    };
    FitnessServerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], FitnessServerProvider);
    return FitnessServerProvider;
}());

//# sourceMappingURL=fitness-server.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_food_service_food_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__food_detail_food_detail__ = __webpack_require__(68);
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
 * Generated class for the FoodSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FoodSearchPage = /** @class */ (function () {
    function FoodSearchPage(foodService, storage, navCtrl) {
        this.foodService = foodService;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.food_search = "";
        this.foods = [];
    }
    FoodSearchPage.prototype.listFoods = function () {
        var _this = this;
        this.foodService.searchFoods(this.food_search).subscribe(function (data) {
            _this.foods = data.hints;
            _this.foodService.storeFoodSearch(_this.food_search, _this.foods);
            console.log(_this.foods);
        });
    };
    FoodSearchPage.prototype.goToFoodDetailPage = function (foodArrayItem) {
        var _this = this;
        this.foodService.getFoodDetails(foodArrayItem).subscribe(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__food_detail_food_detail__["a" /* FoodDetailPage */], { foodNutrition: data });
        });
    };
    FoodSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-search',template:/*ion-inline-start:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\food-search\food-search.html"*/'<!--\n  Generated template for the FoodSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      <ion-title>Food Search</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="search-container">\n    <div class="col-7">\n      <input type="text" id="food-search" name="food-search" [(ngModel)]="food_search">\n    </div>\n\n    <div class="col-15">\n      <button (click)="listFoods()"><i class="fas fa-search"></i></button>\n    </div>\n\n    <div class="col-15">\n      <button (click)="listFoods()"><i class="fas fa-barcode"></i></button>\n    </div>\n  </div>\n  \n  <div class="search-result-container">\n    <button class="search-result" *ngFor="let food of foods" (click)="goToFoodDetailPage(food)">\n      <p>{{food.food.label}} - {{food.food.nutrients.ENERC_KCAL}} cal</p>\n      <p>{{food.food.brand}}</p>\n      <p>100 g</p>\n    </button>\n    \n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\food-search\food-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_food_service_food_service__["a" /* FoodServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], FoodSearchPage);
    return FoodSearchPage;
}());

//# sourceMappingURL=food-search.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
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
  Generated class for the FoodServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FoodServiceProvider = /** @class */ (function () {
    function FoodServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.foodSearchHistories = [];
    }
    /**
     * They method returns a object what has a array of foods based off searched_food from the search box
     * @param searched_food the name of the food that the user types into the search box
     */
    FoodServiceProvider.prototype.searchFoods = function (searched_food) {
        var modifyString = this.modifyString(searched_food);
        var url = "https://api.edamam.com/api/food-database/parser?ingr=" + modifyString + "&app_id=8c40605a&app_key=9fda4683f35d61cbe74c2e521d1d170a";
        return this.http.get(url)
            .map(this.extractData);
        //.do(this.storeFood)
    };
    /**
     * This method gets the food detail like health labels and nutrients for a particular measure and quanity
     * @param foodArrayItem A particular food store in the food array returned from the searchFood() method
     */
    FoodServiceProvider.prototype.getFoodDetails = function (foodArrayItem) {
        console.log(foodArrayItem);
        var nutrientUrl = "https://api.edamam.com/api/food-database/nutrients?app_id=8c40605a&app_key=9fda4683f35d61cbe74c2e521d1d170a";
        var foodJSON = {
            yield: 1,
            ingredients: [
                {
                    quantity: 100,
                    measureURI: foodArrayItem.measures[1].uri,
                    foodURI: foodArrayItem.food.uri
                }
            ]
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(nutrientUrl, JSON.stringify(foodJSON), { headers: headers })
            .map(this.extractData);
    };
    /**
     * This method stores the name of a searched food input and the object created with it by searchFood(). This
     * method is used to cut down on making calls to the api by allowing results from already searched foods to be reloaded from
     * storage when searched instead of the api. This method does not get nutrients just he results from a searched food input. Another method
     * gets the more detailed information.
     * @param searchName This is a string resprensenting what the users typed in the search box
     * @param foodObj This is the particular food store in the food array returned from the searchFood() method
     */
    FoodServiceProvider.prototype.storeFoodSearch = function (searchName, foodObj) {
        var foodSearchHistory = {
            search_name: searchName,
            foodObject: foodObj
        };
        this.foodSearchHistories.push(foodSearchHistory);
        this.storage.set("foodSearchHistories", this.foodSearchHistories);
    };
    FoodServiceProvider.prototype.extractData = function (res) {
        return res.json();
    };
    FoodServiceProvider.prototype.modifyString = function (food) {
        return food.replace(" ", "%20");
    };
    FoodServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], FoodServiceProvider);
    return FoodServiceProvider;
}());

//# sourceMappingURL=food-service.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(266);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_starter_starter__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_starter_form_starter_form__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_person_service_person_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_food_add_food__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_heart_sensor_heart_sensor__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_fitness_server_fitness_server__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_walk_run_walk_run__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_pedometer__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_food_detail_food_detail__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_food_search_food_search__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_food_service_food_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(416);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_starter_starter__["a" /* StarterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_starter_form_starter_form__["a" /* StarterFormPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_food_add_food__["a" /* AddFoodPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_heart_sensor_heart_sensor__["a" /* HeartSensorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_walk_run_walk_run__["a" /* WalkRunPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_food_detail_food_detail__["a" /* FoodDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_food_search_food_search__["a" /* FoodSearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-food/add-food.module#AddFoodPageModule', name: 'AddFoodPage', segment: 'add-food', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-detail/food-detail.module#FoodDetailPageModule', name: 'FoodDetailPage', segment: 'food-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/heart-sensor/heart-sensor.module#HeartSensorPageModule', name: 'HeartSensorPage', segment: 'heart-sensor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/starter/starter.module#StarterPageModule', name: 'StarterPage', segment: 'starter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/starter-form/starter-form.module#StarterFormPageModule', name: 'StarterFormPage', segment: 'starter-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/walk-run/walk-run.module#WalkRunPageModule', name: 'WalkRunPage', segment: 'walk-run', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["a" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_starter_starter__["a" /* StarterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_starter_form_starter_form__["a" /* StarterFormPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_food_add_food__["a" /* AddFoodPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_heart_sensor_heart_sensor__["a" /* HeartSensorPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_walk_run_walk_run__["a" /* WalkRunPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_food_detail_food_detail__["a" /* FoodDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_food_search_food_search__["a" /* FoodSearchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_person_service_person_service__["a" /* PersonService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_fitness_server_fitness_server__["a" /* FitnessServerProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_15__providers_fitness_server_fitness_server__["a" /* FitnessServerProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_pedometer__["a" /* Pedometer */],
                __WEBPACK_IMPORTED_MODULE_21__providers_food_service_food_service__["a" /* FoodServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_starter_starter__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_starter_form_starter_form__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_add_food_add_food__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_walk_run_walk_run__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_food_detail_food_detail__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_food_search_food_search__ = __webpack_require__(256);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_food_search_food_search__["a" /* FoodSearchPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] },
            { title: 'Starter', component: __WEBPACK_IMPORTED_MODULE_4__pages_starter_starter__["a" /* StarterPage */] },
            { title: 'Starter Form', component: __WEBPACK_IMPORTED_MODULE_5__pages_starter_form_starter_form__["a" /* StarterFormPage */] },
            { title: 'Add Food', component: __WEBPACK_IMPORTED_MODULE_6__pages_add_food_add_food__["a" /* AddFoodPage */] },
            { title: 'Record Route', component: __WEBPACK_IMPORTED_MODULE_8__pages_walk_run_walk_run__["a" /* WalkRunPage */] },
            { title: 'Food Detail', component: __WEBPACK_IMPORTED_MODULE_9__pages_food_detail_food_detail__["a" /* FoodDetailPage */] },
            { title: 'Food Search', component: __WEBPACK_IMPORTED_MODULE_10__pages_food_search_food_search__["a" /* FoodSearchPage */] }
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

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(190);
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




var FoodDetailPage = /** @class */ (function () {
    function FoodDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.foodInfoNutrients = [];
        this.foodInfoNutrientsPercent = [];
        this.foodInfo = this.navParams.get('foodNutrition');
        console.log("NUTRITION", this.foodInfo);
        this.setFixedNutritionAmout();
        console.log("FIXED", this.foodInfoNutrients);
        console.log("PERCENT", this.foodInfoNutrientsPercent);
    }
    FoodDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodDetailPage');
    };
    FoodDetailPage.prototype.setFixedNutritionAmout = function () {
        var _this = this;
        var foodNutrition = this.foodInfo.totalNutrients;
        this.setPercentNutritionAmount();
        Object.keys(foodNutrition).forEach(function (key) {
            //trueOrFase = this.searchAvaiblePercents(foodNutrition[key].label);
            if (_this.searchAvaiblePercents(foodNutrition[key].label)) {
                foodNutrition[key].dailyPercent = _this.foodInfoNutrientsPercent[_this.foodInfoNutrientIndex].quantity;
            }
            else {
                foodNutrition[key].dailyPercent = null;
            }
            //this.trueOrFalseArray.push(trueOrFase);
            _this.foodInfoNutrients.push(foodNutrition[key]);
        });
    };
    FoodDetailPage.prototype.setPercentNutritionAmount = function () {
        var _this = this;
        var foodNutrientPercent = this.foodInfo.totalDaily;
        Object.keys(foodNutrientPercent).forEach(function (key) {
            _this.foodInfoNutrientsPercent.push(foodNutrientPercent[key]);
        });
    };
    FoodDetailPage.prototype.searchAvaiblePercents = function (nutrient) {
        for (var i = 0; i < this.foodInfoNutrientsPercent.length; i++) {
            if (nutrient === this.foodInfoNutrientsPercent[i].label) {
                this.foodInfoNutrientIndex = i;
                return true;
            }
        }
        return false;
    };
    FoodDetailPage.prototype.loadChart = function () {
        var carb = this.foodInfo.totalNutrients.CHOCDF.quantity;
        var fat = this.foodInfo.totalNutrients.FAT.quantity;
        var protien = this.foodInfo.totalNutrients.PROCNT.quantity;
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
            ['Carb', carb],
            ['Fat', fat],
            ['Protein', protien],
        ]);
        // Set chart options
        var options = { title: 'Food Composition',
            width: 400,
            height: 300,
            colors: ['#0EBBBF', '#0A8C8F', '#086E70']
        };
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart'));
        chart.draw(data, options);
    };
    FoodDetailPage.prototype.showGeneralNutrition = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.graph-container').css({
            'display': 'none'
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.info-gauge-container').css({
            'display': 'block'
        });
    };
    FoodDetailPage.prototype.showGraph = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.graph-container').css({
            'display': 'block',
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.info-gauge-container').css({
            'display': 'none'
        });
        this.loadChart();
    };
    FoodDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-detail',template:/*ion-inline-start:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\food-detail\food-detail.html"*/'<!--\n  Generated template for the FoodDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><span class="color-title">{{foodInfo.label}}</span> <span class="secondary-color">{{foodInfo.brand}}</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="form-section margin-btm">\n    <div class="input-container-2">\n      <label for="measure">Serving Size:</label>\n      <select id="measure" name="measure">\n        <option value="text">Grams</option>\n      </select>\n    </div>\n\n    <div class="input-container-2">\n      <label for="quanity">Quanity:</label>\n      <input type="text" id="quanity" placeholder="Serving Size" name="quanity">\n    </div>\n\n    <label for="meal-type">Meal Type:</label>\n    <select id="meal-type" name="meal-type">\n      <option value="text">Lunch</option>\n      <option value="text">Supper</option>\n    </select>\n  </div>\n\n  <!--\n  <div class="sub-title">\n    <h4>Nutrition</h4>\n  </div>\n  -->\n\n  <div class="mini-nav-container">\n    <div class="mini-nav-item">\n      <h4>Nutrition</h4>\n    </div>\n    <button class="mini-nav-btn" (click)="showGeneralNutrition()">\n      <i class="fas fa-fire"></i>\n    </button>\n    <button class="mini-nav-btn graph-btn" (click)="showGraph()">\n      <i class="fas fa-chart-pie"></i>\n    </button>\n    <button class="mini-nav-btn">\n      <i class="fas fa-tags"></i>\n    </button>\n    <button class="mini-nav-btn">\n      <i class="fas fa-info"></i>\n    </button>\n  </div>\n\n  <div class="info-gauge-container">\n    <div class="info-gauge">\n      <img src="assets/imgs/icons8-fire-128.png">\n      <p>Calories</p>\n      <h5>{{foodInfo.calories}}kcal</h5>\n    </div>\n    <div class="info-gauge">\n      <img src="assets/imgs/icons8-bread-128.png">\n      <p>Carbs</p>\n      <h5>{{fixedNumber(searchNutrition("Carbs"))}}</h5>\n    </div>\n    <div class="info-gauge">\n      <img src="assets/imgs/icons8-olive-oil-128.png">\n      <p>Fats</p>\n      <h5>{{fixedNumber(searchNutrition("Fat"))}}{{foodInfoNutrients.unit}}</h5>\n    </div>\n    <div class="info-gauge">\n      <img src="assets/imgs/icons8-thanksgiving-turkey-128.png">\n      <p>Protein</p>\n      <h5>{{fixedNumber(searchNutrition("Protein"))}}{{foodInfoNutrients.unit}}</h5>\n    </div>\n    <div class="info-gauge">\n      <img src="assets/imgs/icons8-sodium-80.png">\n      <p>Sugars</p>\n      <h5>{{fixedNumber(searchNutrition("Sugars"))}}{{foodInfoNutrients.unit}}</h5>\n    </div>\n    <div class="info-gauge">\n      <img src="assets/imgs/icons8-fire-128.png">\n      <p>Sodium</p>\n      <h5>{{fixedNumber(searchNutrition("Sodium"))}}{{foodInfoNutrients.unit}}</h5>\n    </div>\n  </div>\n\n  <div class="graph-container">\n    <div id="chart" >\n\n    </div>\n    <!--\n    <div class="data-error">\n      <h1>Not Enough Data</h1>\n      <p>This is due to not having enough information about the carbs, fats, and protein as this information is needed for food composition.</p>\n    </div>\n    -->\n  </div>\n\n  <div class="flex-container-mobile more-info">\n\n    <div class="more-info-item" *ngFor="let nutrient of foodInfoNutrients">\n      <p>{{nutrient.label}}  <span class="color">{{fixedNumber(nutrient.quantity)}}{{nutrient.unit}} - {{nutrient.dailyPercent}}%</span></p>\n      <div class="progress-bar">\n        <div class="inner-bar" [ngStyle]="{\'width\':nutrient.dailyPercent + \'%\'}"></div>\n      </div>\n    </div>\n  </div>\n\n  <button class="long-btn" (click)="save_nutrition()">Save</button>\n  <button class="long-btn" (click)="check_data()">Check</button>\n  \n</ion-content>\n'/*ion-inline-end:"D:\Users\Brian\Documents\Ionic\EasyLife\EasyLife\src\pages\food-detail\food-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FoodDetailPage);
    return FoodDetailPage;
}());

//# sourceMappingURL=food-detail.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_person_service_person_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(103);
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

/***/ })

},[258]);
//# sourceMappingURL=main.js.map