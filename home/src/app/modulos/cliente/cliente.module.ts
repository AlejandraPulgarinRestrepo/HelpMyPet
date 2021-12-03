import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { IngresoClienteComponent } from './ingreso-cliente/ingreso-cliente.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { ProgramacionVisitaComponent } from './programacion-visita/programacion-visita.component';


@NgModule({
  declarations: [
    IngresoClienteComponent,
    RegistroClienteComponent,
    ProgramacionVisitaComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ],
  exports: [
    IngresoClienteComponent,
    RegistroClienteComponent,
    ProgramacionVisitaComponent
  ]
})
export class ClienteModule { }
