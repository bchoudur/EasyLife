import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
import { unescapeIdentifier } from '@angular/compiler';
import { Storage } from '@ionic/storage';

declare var google;

@IonicPage()
@Component({
  selector: 'page-food-detail',
  templateUrl: 'food-detail.html',
})
export class FoodDetailPage {
  foodInfo: any;

  foodInfoNutrients: any[] = [];
  foodInfoNutrientsPercent: any[] = [];
  calories: any;

  foodInfoNutrientIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.foodInfo = this.navParams.get('foodNutrition');
    console.log("NUTRITION", this.foodInfo);
    this.setNutritionAmout();
    this.searchBasicNutrition();
    
    
    console.log("FIXED", this.foodInfoNutrients);
    console.log("PERCENT", this.foodInfoNutrientsPercent);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodDetailPage');
    this.showGeneralNutrition();
    this.showGraphBtn();
  }

  /**
   * Loops though the object recieve from the post method in search-page and
   * grabs the quantity to fills the array foodInfoNutrients
   */
  setNutritionAmout(){
    var foodNutrition = this.foodInfo.totalNutrients;
    this.setPercentNutritionAmount();

    Object.keys(foodNutrition).forEach(key => {
      if(this.searchAvaiblePercents(foodNutrition[key].label)){
        foodNutrition[key].dailyPercent = this.foodInfoNutrientsPercent[this.foodInfoNutrientIndex].quantity;
      }else{
        foodNutrition[key].dailyPercent = null;
      }
      this.foodInfoNutrients.push(foodNutrition[key]);
    });
    
  }

  /**
   * Loops though the object recieve from the post method in search-page and
   * grabs the daily percents to fills the array foodInfoNutrientsPercent
   */
  setPercentNutritionAmount(){
    var foodNutrientPercent = this.foodInfo.totalDaily;

    Object.keys(foodNutrientPercent).forEach(key =>{
      this.foodInfoNutrientsPercent.push(foodNutrientPercent[key]);
    });
  }

  /**
   * Searches the foodInfoNutrientsPercent array created from the 
   * setPercentNutritionAmount() and returns a boolean if its in there. It
   * also updates the index variable its to its position in the array.
   * @param nutrient string of the nutrients to be search.
   */
  searchAvaiblePercents(nutrient:any){
    for(var i = 0; i < this.foodInfoNutrientsPercent.length; i++){
      if(nutrient === this.foodInfoNutrientsPercent[i].label){
        this.foodInfoNutrientIndex = i;
        return true;
      }
    }
    return false;
  }

  /**
   * Checks to see if the food has information about it's carbs, protein, and fats
   * and if it does then it shows the graph for food composition.
   */
  showGraphBtn(){
    if(!(this.foodInfo.totalNutrients.hasOwnProperty("CHOCDF") && this.foodInfo.totalNutrients.hasOwnProperty("FAT") && this.foodInfo.totalNutrients.hasOwnProperty("PROCNT"))){
      $('.graph-btn').css({
        'display': 'none'
      })
    }
  }

  loadChart(){
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
      var options = {title:'Food Composition',
                    width:400,
                    height:300,
                    colors: ['#0EBBBF', '#0A8C8F', '#086E70']
      };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('chart'));
      chart.draw(data, options);
  }
  /*
  searchNutrition(nutrition:string){
    for(var i = 0; i < this.foodInfoNutrients.length; i++){
      if(this.foodInfoNutrients[i].label === nutrition){
        return this.foodInfoNutrients[i].quantity;
      }
    }
  }
  */

  /**
   * Checks if the basics nutrition are in the data base and if they ain't
   * then add them. When adding them it will just display not available.
   */
  searchBasicNutrition(){
    var c = 0;
    var p = 0;
    var f = 0;
    var s = 0;
    var sod = 0;
    
    for(var i = 0; i < this.foodInfoNutrients.length; i++){
      if(this.foodInfoNutrients[i].label === "Carbs"){
        c++;
      }
      if(this.foodInfoNutrients[i].label === "Fat"){
        f++;
      }
      if(this.foodInfoNutrients[i].label === "Protein"){
        p++;
      }
      if(this.foodInfoNutrients[i].label === "Sugars"){
        s++;
      }
      if(this.foodInfoNutrients[i].label === "Sodium"){
        sod++;
      }
    }
    if(c === 0){
      this.foodInfoNutrients.push({label: "Carbs", quantity: "a", unit: ""});
    }
    if(f === 0){
      this.foodInfoNutrients.push({label: "Fat", quantity: "a", unit: ""});
    }
    if(p === 0){
      this.foodInfoNutrients.push({label: "Protein", quantity: "a", unit: ""});
    }
    if(s === 0){
      this.foodInfoNutrients.push({label: "Sugars", quantity: "a", unit: ""});
    }
    if(sod === 0){
      this.foodInfoNutrients.push({label: "Sodium", quantity: "a", unit: ""});
    }
    
  }

  /**
   * Saves the nutrition to local storage where it can be view on other pages.
   * Each time save_nutrition is run it saves food adds the total food to your
   * daily too.
   */
  save_nutrition(){
    this.storage.get('daily_food_dairy').then(data =>{
      
      for(var i in this.foodInfoNutrients){
        for(var j in data.nutrition){
          if(data.nutrition[j].label === this.foodInfoNutrients[i].label){
            data.nutrition[j].Quantity = data.nutrition[j].Quantity + this.foodInfoNutrients[i].quantity;
          }
        }
      }
      this.storage.set('daily_food_dairy', data);
    });
  }

  //TEMPERORALLY
  check_data(){
    this.storage.get('daily_food_dairy').then(data => {
      console.log('UPDATED DATA', data);
    })
  }
  
  /**
   * This function takes a floating point number like 4.456627524 and turns
   * it into 4.45
   * @param num the floating point number you want to clip
   */
  fixedNumber(num){
    if(!isNaN(num)){
      return num.toFixed(2);
    }
    return "Not Available";
  }
  
  showGeneralNutrition(){
    $('.graph-container').css({
      'display': 'none'
    });
    $('.info-gauge-container').css({
      'display': 'block'
    });
  }
  
  showGraph(){
    $('.graph-container').css({
      'display': 'block',
    });
    $('.info-gauge-container').css({
      'display': 'none'
    });
    this.loadChart();
  }

}
