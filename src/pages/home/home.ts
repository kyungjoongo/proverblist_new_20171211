import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {List2Page} from "../list2/list2";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    username: string = 'lance77';
    password: string = '1114';

    constructor(public navCtrl: NavController) {

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

}
