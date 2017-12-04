import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoardPage } from './board';

@NgModule({
  declarations: [
    BoardPage,
  ],
  imports: [
    IonicPageModule.forChild(BoardPage),
  ],
})
export class BoardPageModule {}
