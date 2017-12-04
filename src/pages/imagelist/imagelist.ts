import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {LocalStorageService} from 'angular-2-local-storage';
import 'rxjs/add/operator/catch';
import {HomePage} from "../home/home";


@IonicPage()
@Component({
    selector: 'page-imagelist',
    templateUrl: 'imagelist.html',
})
export class ImagelistPage {


    result = [];
    proverbRsult = [];
    page: number = 1;

    defaultImage = 'https://www.placecage.com/1000/1000';
    /*image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';*/
    offset = 100;
    randCate ;

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public loadingCtrl: LoadingController,
                public localstorageService: LocalStorageService,
                public toastcontroller: ToastController,
                private elRef: ElementRef,
                public httpprovider: HttpProvider) {


        if (this.localstorageService.get('sesUserId') != null) {

            //alert('logined!')
        } else {
            alert('로긴 안됐어요!')

            this.navCtrl.setPages([{page: HomePage}])
        }


        this.httpprovider.getProverbs(1).subscribe(responseJson => {
            console.log(responseJson);
            this.proverbRsult = responseJson;

            this.getImageList(1);
        })


        this.getLocalStorageList();

        var _category= [

            'fashion', 'nature', 'backgrounds', 'science', 'education', 'people', 'feelings'
            , 'religion', 'health', 'places', 'animals'
            , 'industry', 'food', 'computer', 'sports', 'transportation'
            , 'travel', 'buildings', 'business', 'music'

        ];


        this.randCate = _category[Math.floor(Math.random() * _category.length)];
    }

    getImageList(page) {

        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
            showBackdrop: false,
        });

        loading.present();

        this.httpprovider.getImages(page, this.randCate).subscribe(response => {

            this.result = response.hits;

            console.log(this.result);

            loading.dismissAll();

            console.log(response);

        }, err => {

            loading.dismissAll();
            console.log(err);
        })
    }

    getLocalStorageList() {

        var localStorageProverbList = [];
        localStorageProverbList = this.localstorageService.get('contents') || [];

        //console.log("localStorageProverbList-->" + localStorageProverbList);
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

        this.httpprovider.getProverbs(this.page).subscribe(proverbResponseJson => {

            for (var i = 0; i < proverbResponseJson.length; i++) {
                this.proverbRsult.push(proverbResponseJson[i]);
            }
            this.httpprovider.getImages(this.page, this.randCate).subscribe(responseJson => {

                console.log(responseJson);
                var arrayResult = [];

                arrayResult = responseJson.hits;


                for (var i = 0; i < arrayResult.length; i++) {
                    this.result.push(arrayResult[i]);
                }


            }, err => {
                alert(err);
            })

            infiniteScroll.complete();

        })


    }


    wasClicked: boolean = false;

    wasClicked2: boolean[] = [];

    @ViewChild('elemId') elemId: ElementRef;

    clickedHeart(item, elemId, event) {

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
            cssClass: 'toast001'
        });
        toast.present();
    }

    /*lazyLoadConfig: IImageLazyLoadConfig = {
        headers: {
            'Authorization': 'Bearer auth-token'
        },
        loadingClass: 'custom-loading',
        loadedClass: 'custom-loaded',
        errorClass: 'custom-error'
    };*/


}


