import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SongsDetailPage } from './songs-detail';

@NgModule({
  declarations: [
    SongsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SongsDetailPage),
  ],
})
export class SongsDetailPageModule {}
