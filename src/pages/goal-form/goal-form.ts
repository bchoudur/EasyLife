import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonService } from '../../providers/person-service/person-service';
import { UserProfilePage } from '../user-profile/user-profile';
import * as $ from 'jquery';

/**
 * Generated class for the GoalFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goal-form',
  templateUrl: 'goal-form.html',
})
export class GoalFormPage {

  dailyCalories: number;
  carbsG: number; //Carbs in grams
  fatsG: number; //Fat in grams
  proteinG: number; //Carbs in grams
  sugarG: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private personService: PersonService) {
    //this.savePersonInfoGoals();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalFormPage');
    this.updateCarbSlider();
    this.updateFatSlider();
    this.updateProteinSlider();
    this.calcuateDailyCalories();
    this.calculateMacroNutrition();
    
  }

  savePersonInfoGoals(){
    this.personService.getPersonInfo().then(personData => {
      personData.weight_goal = $("input[name=weightOptions]:checked").val();
      personData.carb_percent = $("#carb-percent").val();
      personData.fat_percent = $("#fat-percent").val();
      personData.protein_percent = $("#protien-percent").val();
      personData.step_count_goal = $("#step-count").val();

      this.personService.savePersonInfo(personData);
    });
    // /this.navCtrl.push(UserProfilePage);
  }

  updateCarbSlider(){
    $('#carb-percent').on('input', function(){
      var val = $(this).val();
      $('#carb-value').text(val + '%');
    })
  }

  updateFatSlider(){
    $('#fat-percent').on('input', function(){
      var val = $(this).val();
      $('#fat-value').text(val + '%');
    })
  }

  updateProteinSlider(){
    $('#protien-percent').on('input', function(){
      var val = $(this).val();
      $('#protein-value').text(val + '%');
    })
  }

  calcuateDailyCalories(){
    this.personService.getPersonInfo().then(personData => {
      var height = (personData.height_ft * 30.48) + (personData.height_in * 2.54);
      var weight = personData.weight * .453592;
      if(personData.sex === "male"){
        this.dailyCalories =  Math.floor(((10 * weight) + (6.25*height) - (5 * personData.age) + 5) * personData.exercise_level);
        console.log("Calories Male: ", this.dailyCalories);
      }else{
        this.dailyCalories = Math.floor(((10 * weight) + (6.25*height) - (5 * personData.age) - 161) * personData.exercise_level);
        console.log("Calories Female: ", this.dailyCalories);
      }
    });
  }

  calculateMacroNutrition(){
    var carbPercent = Number($("#carb-percent").val())/100;
    var fatPercent = Number($("#fat-percent").val())/100;
    var proteinPercent = Number($("#fat-percent").val())/100;

    this.carbsG = this.dailyCalories;
    this.fatsG = (this.dailyCalories/9)*fatPercent;
    this.proteinG = (this.dailyCalories/4)*proteinPercent;

    console.log(this.carbsG);
    
  }

  

}
