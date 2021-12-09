import { Component, OnInit } from '@angular/core';
import { ModeloMascotas } from 'src/app/modelos/mascotas.model';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent implements OnInit {

  listadoMascotas: ModeloMascotas[]=[];
  constructor(private servicioMascotas: AdministracionService) { 
    
  }

  ngOnInit(): void {
    this.ObtenerListadoMascotas()
  }

  ObtenerListadoMascotas(){
    this.servicioMascotas.buscarMascota().subscribe((datos:ModeloMascotas[])=>{
      this.listadoMascotas=datos;
    });
  }

}
