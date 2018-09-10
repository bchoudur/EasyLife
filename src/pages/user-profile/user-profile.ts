import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonService } from '../../providers/person-service/person-service';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  name: any;
  age: any;
  height_ft: any;
  height_in: any;
  weight: any;
  sex: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private personService: PersonService) {
  }

  ionViewDidLoad() {
    this.setPersonInfo();
  }

  setPersonInfo(){
    this.personService.getPersonInfo().then(personData => {
      this.name = personData.name;
      this.age = personData.age;
      this.height_ft = personData.height_ft;
      this.height_in = personData.height_in;
      this.weight = personData.weight;
      this.sex = personData.sex;
    });
  }



}
