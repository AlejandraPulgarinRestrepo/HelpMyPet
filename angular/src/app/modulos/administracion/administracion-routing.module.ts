import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarDuenoComponent } from './duenos/actualizar-dueno/actualizar-dueno.component';
import { BuscarDuenoComponent } from './duenos/buscar-dueno/buscar-dueno.component';
import { CrearDuenoComponent } from './duenos/crear-dueno/crear-dueno.component';
import { EliminarrDuenoComponent } from './duenos/eliminarr-dueno/eliminarr-dueno.component';
import { ActualizarMascotaComponent } from './mascota/actualizar-mascota/actualizar-mascota.component';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { ActualizarVeterinarioComponent } from './veterinario/actualizar-veterinario/actualizar-veterinario.component';
import { BuscarVeterinarioComponent } from './veterinario/buscar-veterinario/buscar-veterinario.component';
import { CrearVeterinarioComponent } from './veterinario/crear-veterinario/crear-veterinario.component';
import { EliminarVeterinarioComponent } from './veterinario/eliminar-veterinario/eliminar-veterinario.component';

const routes: Routes = [
  {
    path:"crear-dueno",
    component: CrearDuenoComponent
  },
  {
    path:"buscar-dueno",
    component: BuscarDuenoComponent
  },
  {
    path:"actualizar-dueno",
    component: ActualizarDuenoComponent
  },
  {
    path:"eliminar-dueno",
    component: EliminarrDuenoComponent
  },
  {
    path:"crear-veterinario",
    component: CrearVeterinarioComponent
  },
  {
    path:"buscar-veterinario",
    component: BuscarVeterinarioComponent
  },
  {
    path:"actualizar-veterinario",
    component: ActualizarVeterinarioComponent
  },
  {
    path:"eliminar-veterinario",
    component: EliminarVeterinarioComponent
  },
  {
    path:"crear-mascota",
    component: CrearMascotaComponent
  },
  {
    path:"buscar-mascota",
    component: BuscarMascotaComponent
  },
  {
    path:"actualizar-mascota/:id",
    component: ActualizarMascotaComponent
  },
  {
    path:"eliminar-mascota/:id",
    component: EliminarMascotaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
