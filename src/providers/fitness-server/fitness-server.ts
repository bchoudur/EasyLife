import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Route } from '../../models/route.model';

/*
  Generated class for the FitnessServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FitnessServerProvider {

  private routes: Route[] = [];
  //private route: Route;

  constructor(public storage: Storage) {
    
  }

  saveRoute(route: Route){
    this.routes.push(route);
    this.storage.set('routes', this.routes);
  }

  getAllRoutes(){
    return this.storage.get('routes').then((routes) => {
      this.routes = routes == null ? [] : routes;
        return [...this.routes];
    });
  }

}
