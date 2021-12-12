import { Component, OnInit } from '@angular/core';
import { ModeloVeterinarios } from 'src/app/modelos/veterinarios.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-buscar-veterinario',
  templateUrl: './buscar-veterinario.component.html',
  styleUrls: ['./buscar-veterinario.component.css']
})
export class BuscarVeterinarioComponent implements OnInit {

  listadoVeterinarios: ModeloVeterinarios[]=[];
  constructor(private servicioveterinario: AdministracionService) { 
    
  }

  ngOnInit(): void {
    this.ObtenerListadoVeterinarios()
  }

  ObtenerListadoVeterinarios(){
    this.servicioveterinario.buscarVeterinario().subscribe((datos:ModeloVeterinarios[])=>{
      this.listadoVeterinarios=datos;
    });
  }

}
