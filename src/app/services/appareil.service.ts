export class AppatreilService {
    appareils = [
        {
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          name: 'Television',
    
    
          status: 'éteint'
        },
        {
          name: 'Ordinateur',
          status: 'allumé'
        }
    
      ];
    switchOnAll(){
        for (let app of this.appareils ){
            app.status='allumé';
        }
    }
    switchOffAll () {
        for (let app of this.appareils) {
            app.status='éteint';
        }
    }
    switchOnOne (index:number){
        this.appareils[index].status='allumé';
    }
    switchOffOne (index:number){
        this.appareils[index].status='éteint';
    }
}