import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EucharistMoment } from '../../app/Helpers/eucharistMoments.helper';

/**
 * Generated class for the AddSongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-song',
  templateUrl: 'add-song.html',
})
export class AddSongPage {
  moments:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController) {
    let mom = new EucharistMoment();
    //this.moments = mom.getAll();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSongPage');
  }

  saveSong(){

    this.presentToast()
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Canto creado exitosamente',
      duration: 3000,
      position: 'botton'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
