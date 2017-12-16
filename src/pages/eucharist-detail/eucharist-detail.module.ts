import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EucharistDetailPage } from './eucharist-detail';

@NgModule({
  declarations: [
    EucharistDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EucharistDetailPage),
  ],
})
export class EucharistDetailPageModule {}
