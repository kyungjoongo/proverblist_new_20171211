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

    constructor(public http: Http) {

        console.log('Hello HttpProvider Provider');


    }

    getProverbs() {

        return this.http.get("http://35.201.153.132:3000/proverbJson").map(res=>{

            return res.json();

            //console.log(res.json());
        })
    }

}
