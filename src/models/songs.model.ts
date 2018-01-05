export class song {
  key?: string;
  title: string;
  eucharistMoment: number;
  chords: string;

  constructor(title: string, moment: number, chords: string) {
    this.title = title;
    this.eucharistMoment = moment;
    this.chords = chords;
  }
}
