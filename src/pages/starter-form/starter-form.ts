import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Person } from '../../models/person.model';
import { PersonService } from '../../providers/person-service/person-service';
import { HomePage } from '../home/home';

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
  //person: Person
  

  constructor(public navCtrl: NavController, private personService: PersonService) {
  }

  savePersonInfo(person: Person){
    this.personService.savePersonInfo(person);
    this.navCtrl.push(HomePage);
  }

}
