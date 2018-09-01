import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StarterPage } from '../pages/starter/starter';
import { StarterFormPage } from '../pages/starter-form/starter-form';
import { PersonService } from '../providers/person-service/person-service';
import { IonicStorageModule } from '@ionic/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { AddFoodPage } from '../pages/add-food/add-food';
import { HeartSensorPage } from '../pages/heart-sensor/heart-sensor';
import { FitnessServerProvider } from '../providers/fitness-server/fitness-server';
import { WalkRunPage } from '../pages/walk-run/walk-run';
import { Geolocation } from '@ionic-native/geolocation';
import { Pedometer } from '@ionic-native/pedometer';
import { FoodDetailPage } from '../pages/food-detail/food-detail';
import { FoodSearchPage } from '../pages/food-search/food-search';
import { FoodServiceProvider } from '../providers/food-service/food-service';
import { HttpClientModule } from '@angular/common/http';
import { FoodDairyPage } from '../pages/food-dairy/food-dairy';
import { UserProfilePage } from '../pages/user-profile/user-profile';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StarterPage,
    StarterFormPage,
    AddFoodPage,
    HeartSensorPage,
    WalkRunPage,
    FoodDetailPage,
    FoodSearchPage,
    FoodDairyPage,
    UserProfilePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StarterPage,
    StarterFormPage,
    AddFoodPage,
    HeartSensorPage,
    WalkRunPage,
    FoodDetailPage,
    FoodSearchPage,
    FoodDairyPage,
    UserProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PersonService,
    FitnessServerProvider,
    Geolocation,
    FitnessServerProvider,
    Pedometer,
    FoodServiceProvider
    

  ]
})
export class AppModule {}
