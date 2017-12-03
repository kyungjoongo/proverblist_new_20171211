import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {LocalStorageService} from 'angular-2-local-storage';

/**
 * Generated class for the BookmarkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-bookmark',
    templateUrl: 'bookmark.html',
})
export class BookmarkPage {
    savedList =[];


    constructor(public navCtrl: NavController
        , public navParams: NavParams
        , public toastcontroller: ToastController
        , public localstorageService: LocalStorageService) {


        this.getSavedItems();
    }



    getSavedItems(){

        this.savedList = this.localstorageService.get("contents");

        console.log("savedList-->"+ this.savedList);

    }

    deleteItem(selectItem){

        var queries = [];
        queries = this.localstorageService.get('contents') || [];


        var index = queries.indexOf(selectItem, 0);
        if (index > -1) {
            queries.splice(index, 1);
        }

        this.localstorageService.set('contents', queries);

        this.presentToast('아이템이 삭제되었습니다.');

        this.getSavedItems();



    }

    presentToast(message) {
        let toast = this.toastcontroller.create({
            message: message,
            duration: 1000,
            /*position : 'top'*/

        });
        toast.present();
    }


}
