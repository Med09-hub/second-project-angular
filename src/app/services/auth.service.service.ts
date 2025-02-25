import { Injectable } from '@angular/core';
import { reqHandler } from '../../server';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
constructor() { }
isAuth=false;
signIn() {
return new Promise (
  (resolve,rejecy) => {
 setTimeout (
  () => {
  this.isAuth = true;
  resolve (true);
}, 2000
);
  }
);
}
signOut () {
  this.isAuth=false;
 }
}
