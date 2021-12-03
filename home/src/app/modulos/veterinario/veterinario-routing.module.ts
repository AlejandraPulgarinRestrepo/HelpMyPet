import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoVeterinarioComponent } from './ingreso-veterinario/ingreso-veterinario.component';
import { PetnosticoComponent } from './petnostico/petnostico.component';
import { RegistroVeterinarioComponent } from './registro-veterinario/registro-veterinario.component';
import { RegistrosComponent } from './registros/registros.component';

const routes: Routes = [
  {
    path: 'ingreso',
    component: IngresoVeterinarioComponent
  },
  {
    path: 'registro',
    component: RegistroVeterinarioComponent
  },
  {
    path: 'petnostico',
    component: PetnosticoComponent
  },
  {
    path: 'registros',
    component: RegistrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeterinarioRoutingModule { }
