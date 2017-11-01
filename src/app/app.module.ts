import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpModule} from '@angular/http';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ContentPage } from '../pages/content/content';
import { CartPage } from '../pages/cart/cart';
import { DetailPage } from '../pages/detail/detail';
import { UserCenterPage } from '../pages/user-center/user-center';
import { MyHttpService } from './utility/service/myhttp.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ContentPage,
    CartPage,
    DetailPage,
    UserCenterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ContentPage,
    CartPage,
    DetailPage,
    UserCenterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MyHttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
