import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {LocalStorageService} from 'angular-2-local-storage';
import {HttpProvider} from "../../providers/http/http";
import {HomePage} from "../home/home";

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
    savedList = [];
    imageList = [];
    itemSize;


    constructor(public navCtrl: NavController
        , public navParams: NavParams
        , public toastcontroller: ToastController
        , public loadingCtrl: LoadingController
        , public httpprovider: HttpProvider
        , public localstorageService: LocalStorageService) {


        if (this.localstorageService.get('sesUserId') != null) {

            //alert('logined!')
        } else {
            alert('로긴 안됐어요! 로그인해주세요!')

            this.navCtrl.setPages([{page: HomePage}])
        }

        this.getSavedItems();


    }


    getSavedItems() {
        var queries = [];
        queries = this.localstorageService.get('contents') || [];
        this.savedList = queries.reverse();

    }

    deleteItem(selectItem) {

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


    getImageListBySize(pageSize) {

        this.httpprovider.getImagesByPageSize(pageSize).subscribe(response => {
            this.imageList = response;
        })
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
