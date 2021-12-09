import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearDuenoComponent } from './duenos/crear-dueno/crear-dueno.component';
import { BuscarDuenoComponent } from './duenos/buscar-dueno/buscar-dueno.component';
import { ActualizarDuenoComponent } from './duenos/actualizar-dueno/actualizar-dueno.component';
import { EliminarrDuenoComponent } from './duenos/eliminarr-dueno/eliminarr-dueno.component';
import { EliminarVeterinarioComponent } from './veterinario/eliminar-veterinario/eliminar-veterinario.component';
import { CrearVeterinarioComponent } from './veterinario/crear-veterinario/crear-veterinario.component';
import { BuscarVeterinarioComponent } from './veterinario/buscar-veterinario/buscar-veterinario.component';
import { ActualizarVeterinarioComponent } from './veterinario/actualizar-veterinario/actualizar-veterinario.component';
import { ActualizarMascotaComponent } from './mascota/actualizar-mascota/actualizar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearDuenoComponent,
    BuscarDuenoComponent,
    ActualizarDuenoComponent,
    EliminarrDuenoComponent,
    EliminarVeterinarioComponent,
    CrearVeterinarioComponent,
    BuscarVeterinarioComponent,
    ActualizarVeterinarioComponent,
    ActualizarMascotaComponent,
    CrearMascotaComponent,
    BuscarMascotaComponent,
    EliminarMascotaComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
