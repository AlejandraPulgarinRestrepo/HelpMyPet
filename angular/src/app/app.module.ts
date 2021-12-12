import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { BarraNavegacionComponent } from './plantilla/barra-navegacion/barra-navegacion.component';
import { HttpClientModule } from'@angular/common/http';
import { BarraInicioComponent } from './home/barra-inicio/barra-inicio.component';
import { FooterInicioComponent } from './home/footer-inicio/footer-inicio.component';
import { RutaInexistenteComponent } from './home/ruta-inexistente/ruta-inexistente.component';
import { SliderComponent } from './home/slider/slider.component'

@NgModule({
  declarations: [
    AppComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent,
    BarraNavegacionComponent,
    BarraInicioComponent,
    FooterInicioComponent,
    RutaInexistenteComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
