import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SongsPage } from '../pages/songs/songs';
import { EucharistPage } from '../pages/eucharist/eucharist';
import { SongsDetailPage } from '../pages/songs-detail/songs-detail';
import { AddSongPage } from '../pages/add-song/add-song';
import { EucharistDetailPage } from '../pages/eucharist-detail/eucharist-detail';
import { AddEucharistPage } from '../pages/add-eucharist/add-eucharist';
import { SongsDetailPageModule } from '../pages/songs-detail/songs-detail.module';
import { AddEucharistPageModule } from '../pages/add-eucharist/add-eucharist.module';
import { EucharistDetailPageModule } from '../pages/eucharist-detail/eucharist-detail.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SongsPage,
    EucharistPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SongsDetailPageModule,
    AddEucharistPageModule,
    EucharistDetailPageModule,
    AddEucharistPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SongsPage,
    EucharistPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
