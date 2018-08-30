import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FoodServiceProvider } from '../../providers/food-service/food-service';
import { Storage } from '@ionic/storage';
import { FoodDetailPage } from '../food-detail/food-detail';


/**
 * Generated class for the FoodSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-food-search',
  templateUrl: 'food-search.html',
})
export class FoodSearchPage {

  food_search:string = "";

  foods:any = [];

  

  constructor(
    private foodService: FoodServiceProvider,
    public storage: Storage,
    public navCtrl: NavController) {
  }

  listFoods(){
    this.foodService.searchFoods(this.food_search).subscribe(data => {
      this.foods = data.hints;
      this.foodService.storeFoodSearch(this.food_search, this.foods);
      console.log(this.foods);
    })
  }

  goToFoodDetailPage(foodArrayItem: any){
    this.foodService.getFoodDetails(foodArrayItem).subscribe(data => {
      data.id = foodArrayItem.food.id;
      data.label = foodArrayItem.food.label;
      data.brand = foodArrayItem.food.brand;
      this.navCtrl.push(FoodDetailPage, { foodNutrition: data});
    });
  }
}
