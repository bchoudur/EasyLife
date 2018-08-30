import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';
import { FitnessServerProvider } from '../../providers/fitness-server/fitness-server';
import { Route } from '../../models/route.model';
import { Pedometer } from '@ionic-native/pedometer';



declare var google;

@IonicPage()
@Component({
  selector: 'page-walk-run',
  templateUrl: 'walk-run.html',
})
export class WalkRunPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  currentMapTrack = null;

  isTracking = false;
  trackedRoute = [];
  routes:Promise<Route[]>;

  speed: any;
  altitude: any;
  steps: any;
  miles: any;
  calories: any;
  startTime: any;
  endTime: any;

  positionSubscription: Subscription;

  constructor(
    public navCtrl: NavController, 
    private plt: Platform, 
    private geolocation: Geolocation,  
    public navParams: NavParams,
    private fitnessService: FitnessServerProvider,
    private pedometer: Pedometer) {
  }

  ionViewDidLoad() {
    this.plt.ready().then(() => {
      this.loadHistoricRoutes();

      let mapOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.geolocation.getCurrentPosition().then(pos => {
        let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.map.setCenter(latLng);
        this.map.setZoom(16);
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    });
  }

  loadHistoricRoutes(){
    this.routes = this.fitnessService.getAllRoutes();
  }

  startTracking(){
    this.isTracking = true;
    this.trackedRoute = [];

    let geoOptions = { enableHighAccuracy: true};

    this.startTime = new Date().getTime();

    this.pedometer.startPedometerUpdates().subscribe((data) =>{
      this.steps = data.numberOfSteps;
      this.miles = (data.numberOfSteps / 2112).toFixed(3);
      this.calories = Math.round(data.numberOfSteps * 0.05);
    });
    
    this.positionSubscription = this.geolocation.watchPosition(geoOptions).pipe(filter(p => 
      p.coords !== undefined)
    ).subscribe(data => {
      //setTimeout(() =>{
        this.speed = (data.coords.speed * 2.2369).toFixed(3);
        this.altitude = (data.coords.altitude * 3.28084).toFixed(1);
        this.trackedRoute.push({lat: data.coords.latitude, lng: data.coords.longitude});
        this.redrawPath(this.trackedRoute);
      //});
    });
    
  }

  redrawPath(path){
    if(this.currentMapTrack){
      this.currentMapTrack.setMap(null);
    }

    if(path.length > 1){
      this.currentMapTrack = new google.maps.Polyline({
        path: path,
        geodesic: false,
        strokeColor: '#ff00ff',
        strokeOpacity: 1.0,
        strokeWeight: 5
      });

      this.currentMapTrack.setMap(this.map);
    }
  }

  stopTracking(){

    this.endTime = new Date().getTime();

    let totalTime = this.endTime - this.startTime;
    totalTime = totalTime / 1000; //converts to seconds

    let newRoute: Route = { 
      date: new Date().getTime(), 
      path: this.trackedRoute,
      steps: this.steps,
      miles: this.miles,
      calories: this.calories,
      totalTime: totalTime
    };
    this.fitnessService.saveRoute(newRoute);
    this.isTracking = false;
    this.pedometer.stopPedometerUpdates();
    this.positionSubscription.unsubscribe();
    this.currentMapTrack.setMap(null);
  }

 
  showHistoryRoute(route){
    this.redrawPath(route);
  }
  
}
