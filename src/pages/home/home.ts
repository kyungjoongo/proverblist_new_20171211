import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {List2Page} from "../list2/list2";
import {HttpProvider} from "../../providers/http/http";
import 'rxjs/add/operator/catch';
import {_catch} from "rxjs/operator/catch";
import {ImagelistPage} from "../imagelist/imagelist";
import {LocalStorageService} from 'angular-2-local-storage';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    username: string = 'lance77';
    password: string = '1114';

    constructor(public navCtrl: NavController
        , public localstorageService: LocalStorageService
        , public httpprovider: HttpProvider) {

    }

    clickedSubmitBtn() {

        console.log(this.username);
        console.log(this.password);

        if (this.username == '' || this.password == '') {
            alert('id,password 입력해라!')

        } else if (this.username == 'lance77' && this.password == '1114') {

            this.navCtrl.push(List2Page)
        }
        else {
            alert('id, password 틀림')
        }


    }

    signup() {

        if (confirm('진짜로 가입하실 꺼에요?')){
            this.httpprovider.postUser(this.username, this.password);
        }



    }
    logout(){
        this.localstorageService.set("sesUserId", null);

        alert('logout 되었다!')
    }

    signin() {

        this.httpprovider.getUser(this.username, this.password).subscribe(response => {

            /*alert(JSON.stringify(response.username));*/
            console.log(response.length);

            if (response.length > 0) {

                var _username = response[0].username;
                var _password = response[0].password;

                if (this.username == _username && this.password == _password) {
                    alert('일치힙니다');

                    this.localstorageService.set("sesUserId",_username );

                    this.navCtrl.setPages([{page: ImagelistPage}])
                }
            } else {
                alert('id/password가 일치하지 않습니다');
            }

        })
    }

}
