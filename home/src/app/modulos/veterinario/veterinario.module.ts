import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinarioRoutingModule } from './veterinario-routing.module';
import { IngresoVeterinarioComponent } from './ingreso-veterinario/ingreso-veterinario.component';
import { RegistroVeterinarioComponent } from './registro-veterinario/registro-veterinario.component';
import { PetnosticoComponent } from './petnostico/petnostico.component';
import { RegistrosComponent } from './registros/registros.component';


@NgModule({
  declarations: [
    IngresoVeterinarioComponent,
    RegistroVeterinarioComponent,
    PetnosticoComponent,
    RegistrosComponent
  ],
  imports: [
    CommonModule,
    VeterinarioRoutingModule
  ],  
  exports: [
    IngresoVeterinarioComponent,
    RegistroVeterinarioComponent,
    PetnosticoComponent,
    RegistrosComponent
  ]
})
export class VeterinarioModule { }
