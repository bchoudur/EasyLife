import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeartSensorPage } from './heart-sensor';

@NgModule({
  declarations: [
    HeartSensorPage,
  ],
  imports: [
    IonicPageModule.forChild(HeartSensorPage),
  ],
})
export class HeartSensorPageModule {}
