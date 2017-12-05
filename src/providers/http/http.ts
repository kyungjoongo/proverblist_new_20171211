import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/catch';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

    result: any[];
    pageSize = 10;

    ___proverbUrl: string = 'http://kyungjoon.ipdisk.co.kr:3000/proverbJson/list?page=1&pageSize='+ this.pageSize;

    proverbUrl: string = 'http://35.201.153.132:3000/proverbJson/list?pageSize='+ this.pageSize+ "&page=";


    clientId = '61c9be50d64f11751a20ebc3403ad2e50e839288df0034b51c1f0550882884bd';
    _clientId2 = '5870033fa53c60b3714e362d10d6203f8c6771b7944d562a27d4d975620bb634';
    _clientid3 = '9f46142b4d8107e2b5a85b1b58ad63526cec8798d4ac2b991947297c7bcb4fad';

    unsplashUri: string = 'https://api.unsplash.com/photos/?order_by=popular&client_id=' + this._clientId2 + '&per_page=' + this.pageSize + '&page=';

    unsplashRandomUri  = 'https://api.unsplash.com/photos/random?client_id=5870033fa53c60b3714e362d10d6203f8c6771b7944d562a27d4d975620bb634';

    plxabayRandomUri ='https://pixabay.com/api/?key=7259916-f3ce173538d4a7f0dee3e23a0&image_type=photo&pretty=true&per_page=3';

    plxabayUri ='https://pixabay.com/api/?key=7259916-f3ce173538d4a7f0dee3e23a0&image_type=photo&pretty=true&per_page=10&page='

    unsplashUriByPageSize: string = 'https://api.unsplash.com/photos/?order_by=popular&client_id=' + this._clientId2 + '&per_page=';

    constructor(public http: Http) {

        console.log('Hello HttpProvider Provider');


    }

    getProverbs(page) {

        return this.http.get(this.proverbUrl + page).map(res => {

            return res.json();

            //console.log(res.json());
        })
    }

    getRandomProverb(){

        let _randomNo = this.getRandomInt(50,500);

        return this.http.get("http://35.201.153.132:3000/proverbJson/getOne/" + _randomNo).map(res => {

            return res.json();

            //console.log(res.json());
        })
    }

    getRandomImageFromSplash(){

        return this.http.get(this.unsplashRandomUri).map(res => {

            return res.json();

            //console.log(res.json());
        })
    }


    getRandomImage3(){


        var imageUrl = 'https://picsum.photos/600/300/?image=703';
        return imageUrl;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    getImages(page, randCategory) {


        return this.http.get(this.plxabayUri + page + "&category="+ randCategory).map(res => {

            return res.json();

            //console.log(res.json());
        }, err=>{

            alert(err);
        });
    }

    getImagesByPageSize(pageSize) {

        return this.http.get(this.unsplashUriByPageSize + pageSize).map(res => {

        /*    console.log("dsafdsfsdfsdfasdf----------->" + JSON.stringify(res.json()));*/

            return res.json();


        })
    }

    postUser(username,password){

        var _data = {
            username : username,
            password: password
        }

        this.http.post('http://kyungjoon.ipdisk.co.kr:3000/users/', _data).subscribe(response=>{

            alert(response);
        })
    }


    getUser(username,password){


        return this.http.get('http://kyungjoon.ipdisk.co.kr:3000/users?$filter=username $eq '+ username).map(response=>{

          return response.json();
        })
    }


    getUsers(){

        return this.http.get('http://kyungjoon.ipdisk.co.kr:3000/users').map(response=>{

            return response.json();
        })
    }


}
