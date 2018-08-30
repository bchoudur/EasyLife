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

  private persons: Person[] = [];
  private person: Person;

  constructor(public storage: Storage) {
  }
  
  
  savePersonInfo(person: Person){
    person.id = Date.now();
    this.persons.push(person);
    this.storage.set('persons', this.persons);
  }

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
  
  

}
