import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdsRoutes } from './cds';

import { LoginComponent } from './cds/login';
import { AdminComponent } from './cds/admin';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/cds/inicio',
    pathMatch: 'full'
  },

  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },

  ...CdsRoutes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
