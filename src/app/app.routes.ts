import { Routes } from '@angular/router';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    { path:'aps', component :AppareilViewComponent},
    { path:'auth0', component :AuthComponent},
    { path :'',component:AppareilViewComponent}
];
