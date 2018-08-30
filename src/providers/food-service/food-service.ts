import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FoodSearch } from '../../models/foodSearch.model';
import { FoodDairy } from '../../models/food-dairy.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



/*
  Generated class for the FoodServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class FoodServiceProvider {

  
  foodSearchHistories: FoodSearch[] = [];
  daily_food_dairy: FoodDairy;

  constructor(private http: Http, public storage: Storage) {

  }

  /**
   * They method returns a object what has a array of foods based off searched_food from the search box
   * @param searched_food the name of the food that the user types into the search box
   */
  searchFoods(searched_food: string){
    
    var modifyString = this.modifyString(searched_food);
    var url: string = "https://api.edamam.com/api/food-database/parser?ingr=" + modifyString + "&app_id=8c40605a&app_key=9fda4683f35d61cbe74c2e521d1d170a";

    return this.http.get(url)
    .map(this.extractData)
    //.do(this.storeFood)
  }
  
  /**
   * This method gets the food detail like health labels and nutrients for a particular measure and quanity
   * @param foodArrayItem A particular food store in the food array returned from the searchFood() method
   */
  getFoodDetails(foodArrayItem: any){

    console.log(foodArrayItem);
    
    var nutrientUrl: string = "https://api.edamam.com/api/food-database/nutrients?app_id=8c40605a&app_key=9fda4683f35d61cbe74c2e521d1d170a";

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

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return this.http.post(nutrientUrl, JSON.stringify(foodJSON), {headers: headers})
    .map(this.extractData)
    
  }
  
  /**
   * This method stores the name of a searched food input and the object created with it by searchFood(). This
   * method is used to cut down on making calls to the api by allowing results from already searched foods to be reloaded from
   * storage when searched instead of the api. This method does not get nutrients just he results from a searched food input. Another method
   * gets the more detailed information.
   * @param searchName This is a string resprensenting what the users typed in the search box
   * @param foodObj This is the particular food store in the food array returned from the searchFood() method
   */
  public storeFoodSearch(searchName: string, foodObj: any){
    
    let foodSearchHistory: FoodSearch = {
      search_name: searchName,
      foodObject: foodObj
    }

    this.foodSearchHistories.push(foodSearchHistory);

    this.storage.set("foodSearchHistories", this.foodSearchHistories);
  }

  public init_daily_food_dairy(){
    this.daily_food_dairy = {
      nutrition: [
        {label: "Calcium", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Carbs", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Cholesterol", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Monounsaturated", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Polyunsaturated", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Saturated", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Fat", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Trans", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Iron", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Fiber", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Folate (Equivalent)", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Potassium", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Magnesium", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Sodium", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Energy", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Niacin (B3)", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Phosphorus", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Protein", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Riboflavin (B2)", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Sugars", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Thiamin (B1)", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Vitamin E", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Vitamin A", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Vitamin B12", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Vitamin B6", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Vitamin C", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Vitamin D", Quantity: 0, daily_percent: 0, unit: ""},
        {label: "Vitamin K", Quantity: 0, daily_percent: 0, unit: ""}
      ]
    }
    //console.log(this.daily_food_dairy);
    this.storage.set('daily_food_dairy', this.daily_food_dairy);
  }
  
  private extractData(res: Response){
    return res.json();
  }

  private modifyString(food: string){
    return food.replace(" ", "%20");
  }

}
