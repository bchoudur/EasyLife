import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoalFormPage } from './goal-form';

@NgModule({
  declarations: [
    GoalFormPage,
  ],
  imports: [
    IonicPageModule.forChild(GoalFormPage),
  ],
})
export class GoalFormPageModule {}
