import { Component, OnInit } from '@angular/core';
import { ModeloCitas } from 'src/app/modelos/citas.modelo';
import { CitasService } from 'src/app/servicios/citas.service';

@Component({
  selector: 'app-buscar-cita',
  templateUrl: './buscar-cita.component.html',
  styleUrls: ['./buscar-cita.component.css']
})
export class BuscarCitaComponent implements OnInit {
  
  listadoCitas: ModeloCitas[]=[];
  constructor(private servicioCitas: CitasService) { }

  ngOnInit(): void {
    this.ObtenerListadoCitas();
  }

  ObtenerListadoCitas(){
    this.servicioCitas.buscarCita().subscribe((datos:ModeloCitas[])=>{
      this.listadoCitas=datos;
    });
    console.log("listado nestor", this.listadoCitas)
  }

}
