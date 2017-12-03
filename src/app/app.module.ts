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
import { LocalStorageModule } from 'angular-2-local-storage';
import { ImagelistPage} from "../pages/imagelist/imagelist";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage, List2Page,BookmarkPage, ImagelistPage
    ],
    imports: [
        BrowserModule, HttpModule,
        IonicModule.forRoot(MyApp),
        LocalStorageModule.withConfig({
            prefix: 'kyungjoon-app2',
            storageType: 'localStorage'
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage, List2Page, BookmarkPage, ImagelistPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        HttpProvider
    ]
})
export class AppModule {
}
