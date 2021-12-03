import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaInexistenteComponent } from './home/ruta-inexistente/ruta-inexistente.component';
import { SliderComponent } from './home/slider/slider.component';

const routes: Routes = [
  {
    path: "inicio",
    component: SliderComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'cliente',
    loadChildren: () => import("./modulos/cliente/cliente.module").then(x => x.ClienteModule)
  },
  {
    path: 'veterinario',
    loadChildren: () => import("./modulos/veterinario/veterinario.module").then(x => x.VeterinarioModule)
  },
  {
    path: '**',
    component: RutaInexistenteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
