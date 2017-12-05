import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {List2Page} from "../pages/list2/list2";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpProvider} from '../providers/http/http';
import {HttpModule} from "@angular/http";
import {BookmarkPage} from "../pages/bookmark/bookmark";
import {LocalStorageModule} from 'angular-2-local-storage';
import {ImagelistPage} from "../pages/imagelist/imagelist";
import {BoardPage} from "../pages/board/board";
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MyInterceptor} from '../interceptors/my.interceptor';
import {IonicImageLoader} from 'ionic-image-loader';
import {RandomPage} from "../pages/random/random";
import {List03Page} from "../pages/list03/list03";
import {PairsPipe} from "../pipes/pairs-pipe";
import {AdMobPro} from "@ionic-native/admob-pro";

@NgModule({
    declarations: [
        MyApp,
        HomePage,PairsPipe,
        ListPage, List2Page, BookmarkPage, ImagelistPage, BoardPage, RandomPage, List03Page
    ],
    imports: [
        BrowserModule, HttpModule,
        IonicModule.forRoot(MyApp), IonicImageLoader.forRoot(),
        LocalStorageModule.withConfig({
            prefix: 'kyungjoon-app3',
            storageType: 'localStorage'
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage, List2Page, BookmarkPage, ImagelistPage, BoardPage, RandomPage, List03Page
    ],
    providers: [
        StatusBar,AdMobPro,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        {provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true},
        HttpProvider
    ]
})
export class AppModule {
}
