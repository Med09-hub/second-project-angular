import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth.service.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-auth',
  imports: [ CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit{
  authStatus :boolean | undefined ;
  constructor(private auth_serv:AuthServiceService ,private router:Router){}
ngOnInit(): void {
  this.authStatus=this.auth_serv.isAuth ;
}
 onSignIn(){
  this.auth_serv.signIn().then(
    () => {
      console.log('connexion reussie !');
      this.authStatus=this.auth_serv.isAuth;
       this.router.navigate (['aps']);
    } 
  );
 } 
 onSignOut () {
  this.auth_serv.signOut();
  this.authStatus=this.auth_serv.isAuth;
  console.log('deconnexion reussie !');
 }
}
