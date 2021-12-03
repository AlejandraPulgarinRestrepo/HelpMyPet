import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoClienteComponent } from './ingreso-cliente/ingreso-cliente.component';
import { ProgramacionVisitaComponent } from './programacion-visita/programacion-visita.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';

const routes: Routes = [
  {
    path: 'ingreso',
    component: IngresoClienteComponent
  },
  {
    path: 'registro',
    component: RegistroClienteComponent
  },
  {
    path: 'programacion-visita',
    component: ProgramacionVisitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
