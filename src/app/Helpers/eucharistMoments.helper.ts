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
}