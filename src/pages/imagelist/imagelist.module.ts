import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImagelistPage } from './imagelist';
import { IonicImageLoader } from 'ionic-image-loader';
import { ImageLazyLoadModule} from "ng2-image-lazy-load";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    ImagelistPage,
  ],
  imports: [
    IonicPageModule.forChild(ImagelistPage)
  ],
})
export class ImagelistPageModule {}
