import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WalkRunPage } from './walk-run';

@NgModule({
  declarations: [
    WalkRunPage,
  ],
  imports: [
    IonicPageModule.forChild(WalkRunPage),
  ],
})
export class WalkRunPageModule {}
