import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodSearchPage } from './food-search';

@NgModule({
  declarations: [
    FoodSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodSearchPage),
  ],
})
export class FoodSearchPageModule {}
