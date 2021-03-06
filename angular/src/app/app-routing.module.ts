import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaInexistenteComponent } from './home/ruta-inexistente/ruta-inexistente.component';
import { SliderComponent } from './home/slider/slider.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
{ 
  path:"inicio",
  component: SliderComponent
},
{
  path: "",
  pathMatch:'full',
  redirectTo: '/inicio'
},
{
  path:"seguridad",
  loadChildren : () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
},
{
  path:"administracion",
  loadChildren : () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
},
{
  path:"citas",
  loadChildren : () => import("./modulos/citas/citas.module").then(x => x.CitasModule)
},

{
  path:"**",
  component: RutaInexistenteComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
