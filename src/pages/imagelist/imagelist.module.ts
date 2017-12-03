import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagelistPage } from './imagelist';

@NgModule({
  declarations: [
    ImagelistPage,
  ],
  imports: [
    IonicPageModule.forChild(ImagelistPage),
  ],
})
export class ImagelistPageModule {}
