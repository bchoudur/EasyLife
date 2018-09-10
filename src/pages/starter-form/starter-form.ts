import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Person } from '../../models/person.model';
import { PersonService } from '../../providers/person-service/person-service';
import { HomePage } from '../home/home';
import { GoalFormPage } from '../goal-form/goal-form';
import * as $ from 'jquery'

/**
 * Generated class for the StarterFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starter-form',
  templateUrl: 'starter-form.html',
})
export class StarterFormPage {
  
  

  constructor(public navCtrl: NavController, private personService: PersonService) {
  }

  savePersonInfo(){

    var person: Person = {
      name: $('#name').val(),
      age: $('#age').val(),
      sex: $("#sex").val(),
      height_ft: $("#height").val(),
      height_in: $("#height-s").val(),
      weight: $("#weight").val(),
      exercise_level: $("#fitness").val(),
      balance: $("#balance").val(),
      allowance: $("#allowance").val(),

      //Rest of values will get set on the next page
      weight_goal: "",
      carb_percent: "",
      fat_percent: "",
      protein_percent: "",
      step_count_goal: ""
    }
    
    this.personService.savePersonInfo(person);
    this.navCtrl.push(GoalFormPage);
  }

}
