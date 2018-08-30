import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarterFormPage } from './starter-form';

@NgModule({
  declarations: [
    StarterFormPage,
  ],
  imports: [
    IonicPageModule.forChild(StarterFormPage),
  ],
})
export class StarterFormPageModule {}
