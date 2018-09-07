import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Person } from '../../models/person.model';

/*
  Generated class for the PersonServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonService {

  private persons: any[] = [];
  private person: any;

  constructor(public storage: Storage) {
  }
  
  
  savePersonInfo(person: any){
    person.id = Date.now();
    //this.persons.push(person);
    this.persons[0] = person;
    this.storage.set('persons', this.persons);
  }

  getPersonInfo(){
    return this.storage.get('persons').then((persons) => {
      this.person = persons[0];
      return this.person;
    });
  }

  getPersonWeightKg(){
    return this.storage.get('persons').then((persons) => {
      var weightKg = persons[0].weight * .453592;
      return weightKg;
    });
  }

  getPersonHeightCm(){
    return this.storage.get('persons').then((persons) => {
      var cmFromFt = persons[0].feet * 30.48
      var cmFromInches = persons[0].inches * 2.54;
      return cmFromFt + cmFromInches;
    });
  }
  /*
  getAllPersonInfo(){
    return this.storage.get('persons').then((persons) =>{
      this.persons = persons  == null ? [] : persons;
      return [...this.persons];
    });
  }
  
  
  getPersonInfo(id: number){
    return this.storage.get('persons').then((persons) => {
      this.person = [...persons].find(r => r.id == id);
      return this.person;
    });
  }
  */
}
