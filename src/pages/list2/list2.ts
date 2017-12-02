import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import 'rxjs/add/operator/map'

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


    constructor(public navCtrl: NavController
        , public navParams: NavParams
        , public httpProvider: HttpProvider
        , public loadingCtrl: LoadingController) {


        this.getProverbList();
    }

    doRefresh(refresher) {

        this.getProverbList();

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 1000);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad List2Page');
    }

    getProverbList() {

        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();
        this.httpProvider.getProverbs().subscribe(responseJson => {

            console.log(responseJson);

            this.result = responseJson;

            loading.dismissAll();


        })


    }

}
