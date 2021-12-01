import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarCitasComponent } from './asignar-citas/asignar-citas.component';
import { RegistrarCitaComponent } from './registro-citas/registrar-cita/registrar-cita.component';

const routes: Routes = [
  {
    path:"asignar-cita",
    component: AsignarCitasComponent
    
  },
  {
    path: "registrar-cita",
    component: RegistrarCitaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
