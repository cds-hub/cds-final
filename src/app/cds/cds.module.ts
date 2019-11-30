import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio';
import { CursosComponent } from './cursos/';
import { EventoComponent } from './evento';
import { ContatoComponent } from './contato';
import { InstituicaoComponent } from './instituicao';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    InicioComponent,
    CursosComponent,
    EventoComponent,
    ContatoComponent,
    InstituicaoComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CdsModule { }
