import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { song } from '../../models/songs.model';
import { SongsProvider } from '../../providers/songs/songs';
import { EucharistMoment } from '../../app/Helpers/eucharistMoments.helper';

/**
 * Generated class for the SongsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-songs-detail',
  templateUrl: 'songs-detail.html',
})
export class SongsDetailPage {
 song: song;
 momentDescription: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, songsProvider:SongsProvider) {
    let inputSongId:number = navParams.get('songId');
    let momentHelper = new EucharistMoment();
    
    if (inputSongId != undefined) {
      this.song = songsProvider.getSong(inputSongId);
      this.momentDescription = momentHelper.getMomentName(inputSongId);

      console.log(this.momentDescription);
    }
    else{
      this.song = new song('no',0,'');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongsDetailPage');
  }

}
