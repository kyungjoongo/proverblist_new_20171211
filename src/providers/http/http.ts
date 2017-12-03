import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";


/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

    result: any[];

    proverbUrl: string = 'http://35.201.153.132:3000/proverbJson/list?page=';

    pageSize = 20;
    clientId = '61c9be50d64f11751a20ebc3403ad2e50e839288df0034b51c1f0550882884bd';

    unsplashUri: string = 'https://api.unsplash.com/photos/?order_by=popular&client_id='+ this.clientId+ '&per_page='+ this.pageSize+  '&page=';

    constructor(public http: Http) {

        console.log('Hello HttpProvider Provider');


    }

    getProverbs(page) {

        return this.http.get("http://35.201.153.132:3000/proverbJson/list?page=" + page).map(res => {

            return res.json();

            //console.log(res.json());
        })
    }


    getImages(page) {

        return this.http.get(this.unsplashUri + page).map(res => {

            return res.json();

            //console.log(res.json());
        })
    }


}
