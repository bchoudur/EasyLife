import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodDairyPage } from './food-dairy';

@NgModule({
  declarations: [
    FoodDairyPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodDairyPage),
  ],
})
export class FoodDairyPageModule {}
