import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the List03Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list03',
  templateUrl: 'list03.html',
})
export class List03Page {

    images =[
        'https://pixabay.com/get/eb3cb60721f0053ed95c4518b74b4493ea7ee3d304b0144097f4c37fa7e9b3_640.jpg',
        'https://pixabay.com/get/eb3cb80e29f7023ed95c4518b74b4493ea7ee3d304b0144097f4c37ea4efbc_640.jpg',
        'https://pixabay.com/get/eb3cb30a2af1013ed95c4518b74b4493ea7ee3d304b0144097f3c97fa1eeb2_640.jpg',
        'https://pixabay.com/get/eb3cb60721f0053ed95c4518b74b4493ea7ee3d304b0144097f4c37fa7e9b3_640.jpg',
        'https://pixabay.com/get/eb3cb80e29f7023ed95c4518b74b4493ea7ee3d304b0144097f4c37ea4efbc_640.jpg',
        'https://pixabay.com/get/eb3cb30a2af1013ed95c4518b74b4493ea7ee3d304b0144097f3c97fa1eeb2_640.jpg',
        'https://pixabay.com/get/eb3cb60721f0053ed95c4518b74b4493ea7ee3d304b0144097f4c37fa7e9b3_640.jpg',
        'https://pixabay.com/get/eb3cb80e29f7023ed95c4518b74b4493ea7ee3d304b0144097f4c37ea4efbc_640.jpg',
        'https://pixabay.com/get/eb3cb30a2af1013ed95c4518b74b4493ea7ee3d304b0144097f3c97fa1eeb2_640.jpg',
        'https://pixabay.com/get/eb3cb60721f0053ed95c4518b74b4493ea7ee3d304b0144097f4c37fa7e9b3_640.jpg',
        'https://pixabay.com/get/eb3cb80e29f7023ed95c4518b74b4493ea7ee3d304b0144097f4c37ea4efbc_640.jpg',
            'https://pixabay.com/get/eb3cb30a2af1013ed95c4518b74b4493ea7ee3d304b0144097f3c97fa1eeb2_640.jpg',


    ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad List03Page');
  }

}
