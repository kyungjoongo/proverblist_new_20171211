import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import 'rxjs/add/operator/map'
import {LocalStorageService} from 'angular-2-local-storage';
import {HomePage} from "../home/home";

/**
 * Generated class for the List2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-list2',
    templateUrl: 'list2.html',
})
export class List2Page {

    result: any[];
    page: number = 1;


    constructor(public navCtrl: NavController
        , public navParams: NavParams
        , public httpProvider: HttpProvider
        , public localstorageService: LocalStorageService
        , public toastcontroller: ToastController
        , public loadingCtrl: LoadingController) {



        this.getProverbList(1);
    }

    ionViewWillEnter(){

      /*  if (this.localstorageService.get('sesUserId') != null) {

            //alert('logined!')
        } else {
            alert('로긴 안됐어요! 로그인해주세요!')

            this.navCtrl.setPages([{page: HomePage}])
        }*/

    }

    doRefresh(refresher) {

        this.getProverbList(1);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 1000);

        this.page = 1;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad List2Page');
    }

    getProverbList(page) {

        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
            showBackdrop: false,
        });

        loading.present();
        this.httpProvider.getProverbs(page).subscribe(responseJson => {

            console.log(responseJson);

            this.result = responseJson;

            loading.dismissAll();


        })


    }


    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        this.page++;

        setTimeout(() => {
            this.httpProvider.getProverbs(this.page).subscribe(responseJson => {

                console.log(responseJson);

                for (var i = 0; i < responseJson.length; i++) {
                    this.result.push(responseJson[i]);
                }
            })
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);
    }

    savedProverbList = [];

    saveItem(item) {

        /*  this.savedProverbList.push(item.content);*/
        var queries = [];
        queries = this.localstorageService.get('contents') || [];


        queries.push(item.content);
        console.log("queries--" + queries);

        this.localstorageService.set("contents", queries);

        //console.log("sdflkdlfksglfkd-=-->"+  (this.localstorageservice.get("content")) );

        this.presentToast(' 북마크 되었습니다.');


    }

    presentToast(message) {
        let toast = this.toastcontroller.create({
            message: message,
            duration: 1000,
            /*position : 'top',*/
            cssClass : 'toast001'
        });
        toast.present();
    }

    getItems() {

        console.log("items-=-->" + (this.localstorageService.get("contents")));

    }

}
