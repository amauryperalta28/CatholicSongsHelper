import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { song } from '../../models/songs.model';

/**
 * Generated class for the SongsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-songs',
  templateUrl: 'songs.html',
})
export class SongsPage {
  songs:song[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.songs = [{  title:'Vienen con Alegria',eucharistMoment:1},
    {  title:'Demos gracias al señor',eucharistMoment:1}
  ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongsPage');
  }

}
