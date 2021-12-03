import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInexistenteComponent } from './home/ruta-inexistente/ruta-inexistente.component';
import { SliderComponent } from './home/slider/slider.component';
import { BarraInicioComponent } from './home/barra-inicio/barra-inicio.component';
import { FooterInicioComponent } from './home/footer-inicio/footer-inicio.component';
import { ClienteModule } from './modulos/cliente/cliente.module';
import { VeterinarioModule } from './modulos/veterinario/veterinario.module';
import { FooterIngresoComponent } from './home/footer-ingreso/footer-ingreso.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaInexistenteComponent,
    SliderComponent,
    BarraInicioComponent,
    FooterInicioComponent,
    FooterIngresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    VeterinarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
