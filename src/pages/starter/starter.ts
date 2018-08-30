import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StarterFormPage } from '../starter-form/starter-form';

/**
 * Generated class for the StarterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starter',
  templateUrl: 'starter.html',
})
export class StarterPage {

  starterFormPage = StarterFormPage;

  constructor(public navCtrl: NavController,
     public navParams: NavParams) {
  }

  
  ionViewDidLoad() {
    
  }
  
}
