import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguridadIdentificacionComponent } from './seguridad-identificacion/seguridad-identificacion.component';
import { CrearDuenoComponent } from './Administracion/crear-dueno/crear-dueno.component';
import { ConsultarDuenoComponent } from './Administracion/consultar-dueno/consultar-dueno.component';
import { ActualizarDuenoComponent } from './Administracion/actualizar-dueno/actualizar-dueno.component';
import { EliminarDuenoComponent } from './Administracion/eliminar-dueno/eliminar-dueno.component';
import { CrearVeterinarioComponent } from './Administracion/crear-veterinario/crear-veterinario.component';
import { ConsultarVeterinarioComponent } from './Administracion/consultar-veterinario/consultar-veterinario.component';
import { ActualizarVeterinarioComponent } from './Administracion/actualizar-veterinario/actualizar-veterinario.component';
import { EliminarVeterinarioComponent } from './Administracion/eliminar-veterinario/eliminar-veterinario.component';



@NgModule({
  declarations: [
    SeguridadIdentificacionComponent,
    CrearDuenoComponent,
    ConsultarDuenoComponent,
    ActualizarDuenoComponent,
    EliminarDuenoComponent,
    CrearVeterinarioComponent,
    ConsultarVeterinarioComponent,
    ActualizarVeterinarioComponent,
    EliminarVeterinarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulosModule { }
