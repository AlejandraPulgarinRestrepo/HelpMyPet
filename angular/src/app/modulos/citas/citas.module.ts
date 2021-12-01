import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { AsignarCitasComponent } from './asignar-citas/asignar-citas.component';
import { RegistrarCitaComponent } from './registro-citas/registrar-cita/registrar-cita.component';
import { BuscarCitaComponent } from './registro-citas/buscar-cita/buscar-cita.component';
import { ActualizarCitaComponent } from './registro-citas/actualizar-cita/actualizar-cita.component';
import { EliminarCitaComponent } from './registro-citas/eliminar-cita/eliminar-cita.component';


@NgModule({
  declarations: [
    AsignarCitasComponent,
    RegistrarCitaComponent,
    BuscarCitaComponent,
    ActualizarCitaComponent,
    EliminarCitaComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule
  ]
})
export class CitasModule { }
