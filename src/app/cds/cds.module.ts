import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio';
import { CursosComponent } from './cursos/';
import { EventoComponent } from './evento';
import { ContatoComponent } from './contato';
import { InstituicaoComponent } from './instituicao/instituicao.component';



@NgModule({
  declarations: [
    InicioComponent,
    CursosComponent,
    EventoComponent,
    ContatoComponent,
    InstituicaoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CdsModule { }
