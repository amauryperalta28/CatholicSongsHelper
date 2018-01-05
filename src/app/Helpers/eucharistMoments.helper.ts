export class EucharistMoment{
    moments:any[] =[];

    constructor(){
        this.moments.push({id:1, description:'Entrada'});
        this.moments.push({id:2, description:'Piedad'});
        this.moments.push({id:3, description:'Gloria'});
        this.moments.push({id:4, description:'Aclamacion'});
        this.moments.push({id:5, description:'Ofertorio'});
        this.moments.push({id:6, description:'Santo'});
        this.moments.push({id:7, description:'Paz'});
        this.moments.push({id:8, description:'Cordero'});
        this.moments.push({id:9, description:'Comunion'});
        this.moments.push({id:10, description:'Final'});
    }

    getAll(){
        return this.moments;
    }

    getMomentName(moment: number) {
        if (moment == 1) {
          return "Entrada";
        } else if (moment == 2) {
          return "Piedad";
        } else if (moment == 3) {
          return "Gloria";
        } else if (moment == 4) {
          return "Aclamacion";
        } else if (moment == 5) {
          return "Ofertorio";
        } else if (moment == 6) {
          return "Santo";
        } else if (moment == 7) {
          return "Paz";
        } else if (moment == 8) {
          return "Cordero";
        } else if (moment == 9) {
          return "Comunion";
        } else if (moment == 10) {
          return "Final";
        }
      }
}