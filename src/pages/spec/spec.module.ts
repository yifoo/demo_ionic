import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecPage } from './spec';

@NgModule({
  declarations: [
    SpecPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecPage),
  ],
})
export class SpecPageModule {}
