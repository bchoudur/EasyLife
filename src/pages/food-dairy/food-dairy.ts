import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../../models/person.model';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-food-dairy',
  templateUrl: 'food-dairy.html',
})
export class FoodDairyPage {

  
  person: Person;


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.get_daily_food_dairy();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodDairyPage');
  }

  get_daily_food_dairy(){
    this.storage.get('daily_food_dairy').then(data => {
      console.log("Data", data);
    });
  }

}
