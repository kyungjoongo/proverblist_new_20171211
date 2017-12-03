import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {LocalStorageService} from 'angular-2-local-storage';
/**
 * Generated class for the ImagelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-imagelist',
    templateUrl: 'imagelist.html',
})
export class ImagelistPage {


    result = [];
    proverbRsult = [];
    page: number = 1;

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public loadingCtrl: LoadingController,
                public localstorageService: LocalStorageService,
                public toastcontroller: ToastController,
                public httpprovider: HttpProvider) {

        this.getProverbList(1);
        this.getImageList(1);


    }

    getImageList(page) {

        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
            showBackdrop: false,
        });

        loading.present();

        this.httpprovider.getImages(page).subscribe(response => {

            this.result = response;

            loading.dismissAll();

            console.log(response);

        })
    }

    getProverbList(page) {

        this.httpprovider.getProverbs(page).subscribe(responseJson => {
            console.log(responseJson);
            this.proverbRsult = responseJson;
        })

    }


    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        this.page++;

        setTimeout(() => {

            this.httpprovider.getProverbs(this.page).subscribe(proverbResponseJson => {

                for (var i = 0; i < proverbResponseJson.length; i++) {
                    this.proverbRsult.push(proverbResponseJson[i]);
                }

                this.httpprovider.getImages(this.page).subscribe(responseJson => {


                    for (var i = 0; i < responseJson.length; i++) {
                        this.result.push(responseJson[i]);
                    }
                })
            })


            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 1000);

    }

    clickedHeart(item) {

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



}
