import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonService } from '../../providers/person-service/person-service';
import { UserProfilePage } from '../user-profile/user-profile';
import * as $ from 'jquery'

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

  carbSliderValue: any = 60;

  constructor(public navCtrl: NavController, public navParams: NavParams, private personService: PersonService) {
    //this.savePersonInfoGoals();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalFormPage');
    this.updateCarbSlider();
    this.updateFatSlider();
    this.updateProteinSlider();
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

    //this.personService.savePersonInfo(person);
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

}
