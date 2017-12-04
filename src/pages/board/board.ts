import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {HttpProvider} from "../../providers/http/http";
import {LocalStorageService} from 'angular-2-local-storage';

/**
 * Generated class for the BoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-board',
    templateUrl: 'board.html',
})
export class BoardPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams
        , public toastcontroller: ToastController
        , public loadingCtrl: LoadingController
        , public httpprovider: HttpProvider
        , public localstorageService: LocalStorageService) {


        this.getUserList();

    }

    userList = [];


    getUserList() {


        this.httpprovider.getUsers().subscribe(response => {

            this.userList = response;

        })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BoardPage');
    }

}
