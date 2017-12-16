export class song {
  key?: string;
  title: string;
  eucharistMoment: number;

  constructor(title: string, moment: number) {
    this.title = title;
    this.eucharistMoment = moment;
  }
}
