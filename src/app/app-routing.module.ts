import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdsRoutes } from './cds';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/cds/inicio',
    pathMatch: 'full'
  },
  
  ...CdsRoutes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
