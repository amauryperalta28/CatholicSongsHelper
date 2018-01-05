
import { Injectable } from '@angular/core';
import { song } from '../../models/songs.model';

/*
  Generated class for the SongsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SongsProvider {

  constructor() {
    console.log('Hello SongsProvider Provider');
  }

  getSong(songId): song {
    return new song('Pongo en tus manos', 1, "Do La- Re-");
  }

}
