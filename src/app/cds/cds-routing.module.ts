import { Routes } from '@angular/router';

import { InicioComponent } from './inicio';

import { CursosComponent} from './cursos';
  
import { EventoComponent } from './evento';

import { ContatoComponent } from './contato';
    

export const CdsRoutes: Routes = [
    {
        path: 'cds',
        redirectTo: 'cds/inicio'
    },
    {
        path: 'cds/inicio',
        component: InicioComponent
    },
    {
        path: 'cds/cursos',
        component: CursosComponent
    },
    {
        path: 'cds/evento',
        component: EventoComponent
    },
    {
        path: 'cds/contato',
        component: ContatoComponent
    },
];