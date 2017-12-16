import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { song } from "../../models/songs.model";

/**
 * Generated class for the SongsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-songs",
  templateUrl: "songs.html"
})
export class SongsPage {
  songs: song[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.songs = [
      { title: "Vienen con Alegria", eucharistMoment: 1,chords:'La- Sol+ Fa+' },
      { title: "Demos gracias al señor", eucharistMoment: 10,chords:'La- Sol+ Fa+'}
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SongsPage");
  }

  getMomentName(moment: number) {
    if (moment === 1) {
      return "Entrada";
    } else if (moment === 2) {
      return "Piedad";
    } else if (moment === 3) {
      return "Gloria";
    } else if (moment === 4) {
      return "Aclamacion";
    } else if (moment === 5) {
      return "Ofertorio";
    } else if (moment === 6) {
      return "Santo";
    } else if (moment === 7) {
      return "Paz";
    } else if (moment === 8) {
      return "Cordero";
    } else if (moment === 9) {
      return "Comunion";
    } else if (moment === 10) {
      return "Final";
    }
  }
}
