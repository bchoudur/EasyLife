import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
//import { AddFoodPage } from '../pages/add-food/add-food';
//import { HomePage } from '../pages/home/home';

import { StarterPage } from '../pages/starter/starter';
import { StarterFormPage } from '../pages/starter-form/starter-form';
import { AddFoodPage } from '../pages/add-food/add-food';
import { HomePage } from '../pages/home/home';
import { WalkRunPage } from '../pages/walk-run/walk-run';
import { FoodDetailPage } from '../pages/food-detail/food-detail';
import { FoodSearchPage } from '../pages/food-search/food-search';
import { FoodDairyPage } from '../pages/food-dairy/food-dairy';
import { FoodServiceProvider } from '../providers/food-service/food-service';
import { UserProfilePage } from '../pages/user-profile/user-profile';


//import { StarterFormPage } from '../pages/starter-form/starter-form';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = UserProfilePage;

  pages: Array<{title: string, component: any}>;
  

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public foodService: FoodServiceProvider) {
    this.initializeApp();
    this.foodService.init_daily_food_dairy();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Starter', component: StarterPage },
      { title: 'Starter Form', component: StarterFormPage},
      { title: 'Add Food', component: AddFoodPage },
      { title: 'Record Route', component: WalkRunPage},
      { title: 'Food Detail', component: FoodDetailPage},
      { title: 'Food Search', component: FoodSearchPage},
      { title: 'Food Dairy', component: FoodDairyPage},
      { title: 'Profile', component: UserProfilePage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  
}

