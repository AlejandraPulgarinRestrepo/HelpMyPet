import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificacionVeterinarioComponent } from './identificacion-veterinario/identificacion-veterinario.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';

const routes: Routes = [
  {
    path:"iniciar-sesion",
    component: IdentificacionComponent
  },
  {
    path:"iniciar-sesion-veterinario",
    component: IdentificacionVeterinarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
