import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Person } from '../../models/person.model';
import { PersonService } from '../../providers/person-service/person-service';
import * as $ from 'jquery';
import { HeartSensorPage } from '../heart-sensor/heart-sensor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private persons: Promise<Person[]>
  private person: Person

  pages: Array<{component: any}>;

  constructor(public navCtrl: NavController, private personService: PersonService) {
    this.pages = [
      { component: HeartSensorPage }
    ];
  }

  /*******************PAGES**********************/

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }

  ionViewWillEnter(){
    this.persons = this.getAllPersonInfo();
    //this.setMainProgressHeight();
  }

  /*******************END OF PAGES**********************/

  /*******************DATABASE**********************/
 
  getPersonInfo(id: number){
    this.personService.getPersonInfo(id).then((p) => {
      this.person = p;
      this.navCtrl.push;
    })
  }
  
  getAllPersonInfo(){
    return this.personService.getAllPersonInfo();
  }

  /*******************END OF DATABASE**********************/

  /*******************ANIMATIONS**********************/

  progressFitAnim(){
    //TOP CIRCLE PROGRESS
    $('.fitness').css({
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)'
    });
    $('.calories').css({
        'top': '50%',
        'left': '100%',
        'transform': 'translateY(-50%)'
    });
    $('.money').css({
      'top': '50%',
      'left': '200%',
      'transform': 'translateY(-50%)'
    });

    //OTHER PROGRESS
    $('.fitness-container').css({
      'left': '0',
      'transform': 'translateX(0)'
    });
    $('.calories-container').css({
      'left': '-100%',
      'transform': 'translateX(-50%)'
    });
    $('.money-container').css({
      'left': '-200%',
      'transform': 'translateX(-50%)'
    });

    //BORDER COLOR
    $('.progess-switch-btn').css({
      'border': '2px #0EBBBF solid'
    });
  }

  progressCaloriesAnim(){
    //TOP CIRCLE PROGRESS
    $('.fitness').css({
        'top': '50%',
        'left': '-100%',
        'transform': 'translate(-50%, -50%)'
    });
    $('.calories').css({
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)'
    });
    $('.money').css({
      'top': '50%',
      'left': '100%',
      'transform': 'translateY(-50%)'
    });

    //OTHER PROGRESS
    $('.fitness-container').css({
      'left': '100%',
      'transform': 'translateX(50%)'
    });
    $('.calories-container').css({
      'left': '0',
      'transform': 'translateX(0)'
    });
    $('.money-container').css({
      'left': '-100%',
      'transform': 'translateX(-50%)'
    });

    //BORDER COLOR
    $('.progess-switch-btn').css({
      'border': '2px #FF0E3D solid'
    });
  }

  progressMoneyAnim(){
    //TOP CIRCLE PROGRESS
    $('.fitness').css({
      'top': '50%',
      'left': '-200%',
      'transform': 'translateY(-50%)'
    });
    $('.calories').css({
      'top': '50%',
      'left': '-100%',
      'transform': 'translateY(-50%)'
    });
    $('.money').css({
      'top': '50%',
      'left': '50%',
      'transform': 'translate(-50%, -50%)'
    });

    //OTHER PROGRESS
    $('.fitness-container').css({
      'left': '200%',
      'transform': 'translateX(50%)'
    });
    $('.calories-container').css({
      'left': '100%',
      'transform': 'translateX(50%)'
    });
    $('.money-container').css({
      'left': '0%',
      'transform': 'translateX(0)'
    });

    //BORDER COLOR
    $('.progess-switch-btn').css({
      'border': '2px #1CB567 solid'
    });
    
  }

  showProgressOpt(){
    $('.inner-progress-opt').css({
      'transform': 'scale(1)'
      
    })

    $('.exit-opt-btn').css({
      'opacity': '1'
    })
  }

  hideProgressOpt(){
    $('.inner-progress-opt').css({
      'transform': 'scale(0)'
      
    })

    $('.exit-opt-btn').css({
      'opacity': '0'
    })
  }

  /*******************END OF ANIMATIONS**********************/
  
  
  /*
  setMainProgressHeight(){
    var height = document.querySelector('.main-progress').clientWidth;
    console.log(height);
  }
  */
}
