export class AppatreilService {
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Television',
      status: 'éteint'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'allumé'
    }

  ];
  getAppById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );
    return appareil;
  }
  switchOnAll() {
    for (let app of this.appareils) {
      app.status = 'allumé';
    }
  }
  switchOffAll() {
    for (let app of this.appareils) {
      app.status = 'éteint';
    }
  }
  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }
  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }
}