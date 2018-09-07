import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonService } from '../../providers/person-service/person-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private personService: PersonService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalFormPage');
  }

  savePersonInfo(person: any){
    this.personService.savePersonInfo(person);
    this.navCtrl.push(GoalFormPage);
  }

}
