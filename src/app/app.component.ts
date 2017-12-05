import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {List2Page} from "../pages/list2/list2";
import {BookmarkPage} from "../pages/bookmark/bookmark";
import {ImagelistPage} from "../pages/imagelist/imagelist";
import {BoardPage} from "../pages/board/board";
import {RandomPage} from "../pages/random/random";
import {List03Page} from "../pages/list03/list03";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = ImagelistPage;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            /*
            {title: 'List', component: ListPage},*/
            /*{title: 'Login', component: HomePage},*/
            {title: '명언 모음 (Image)', component: ImagelistPage},
            {title: '명언 모음 (Text)', component: List2Page},
            {title: '랜덤 명언', component: RandomPage},
            {title: '북마크 명언 ', component: BookmarkPage},
            /*{title: '명언 list03', component: List03Page},*/

            /*{title: 'board', component: BoardPage},*/

        ];



    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
