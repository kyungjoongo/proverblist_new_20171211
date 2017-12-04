import {Component, ElementRef} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {LocalStorageService} from 'angular-2-local-storage';
import 'rxjs/add/operator/catch';

/**
 * Generated class for the RandomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-random',
    templateUrl: 'random.html',
})
export class RandomPage {

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public loadingCtrl: LoadingController,
                public localstorageService: LocalStorageService,
                public toastcontroller: ToastController,
                private elRef: ElementRef,
                public httpprovider: HttpProvider) {

        this.presentToast('이미지를 터지하면 명언이 바꿥니다.^^')

        this.getRandProverb();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RandomPage');
    }

    result = [] ;
    image ;


    getRandProverb() {


        this.httpprovider.getRandomProverb().subscribe(response => {

            console.log(response, "responsesdlkflsdkf<-");


            this.result= response;

            this.image = 'https://picsum.photos/600/300/?image=703';


        })


    }

    changeProverb(){

        this.getRandProverb();
    }

    clickedHeart(item,  event) {

        /*  this.savedProverbList.push(item.content);*/
        var queries = [];
        queries = this.localstorageService.get('contents') || [];
        queries.push(item.content);
        console.log("queries--" + queries);
        this.localstorageService.set("contents", queries);
        this.presentToast(' 북마크 되었습니다.');

    }
    presentToast(message) {
        let toast = this.toastcontroller.create({
            message: message,
            duration: 3000,
            cssClass: 'toast001'
        });
        toast.present();
    }



}


