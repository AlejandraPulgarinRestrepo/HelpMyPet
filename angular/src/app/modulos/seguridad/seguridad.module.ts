import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdentificacionVeterinarioComponent } from './identificacion-veterinario/identificacion-veterinario.component';


@NgModule({
  declarations: [
    CambioClaveComponent,
    IdentificacionComponent,
    RecuperarClaveComponent,
    IdentificacionVeterinarioComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
