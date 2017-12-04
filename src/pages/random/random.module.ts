import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RandomPage } from './random';

@NgModule({
  declarations: [
    RandomPage,
  ],
  imports: [
    IonicPageModule.forChild(RandomPage),
  ],
})
export class RandomPageModule {}
