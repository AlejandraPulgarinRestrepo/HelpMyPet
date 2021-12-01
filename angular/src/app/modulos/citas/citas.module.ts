import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { AsignarCitasComponent } from './asignar-citas/asignar-citas.component';


@NgModule({
  declarations: [
    AsignarCitasComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule
  ]
})
export class CitasModule { }
