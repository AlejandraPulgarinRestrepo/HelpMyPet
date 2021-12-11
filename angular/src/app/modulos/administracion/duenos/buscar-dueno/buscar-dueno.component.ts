import { Component, OnInit } from '@angular/core';
import { ModeloDuenos } from 'src/app/modelos/duenos.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-buscar-dueno',
  templateUrl: './buscar-dueno.component.html',
  styleUrls: ['./buscar-dueno.component.css']
})
export class BuscarDuenoComponent implements OnInit {

  listadoDuenos: ModeloDuenos[]=[];
  constructor(private servicioDueno: AdministracionService) { }

  ngOnInit(): void {
    this.ObtenerListadoDuenos();
  }
  ObtenerListadoDuenos(){
    this.servicioDueno.buscarDueno().subscribe((datos:ModeloDuenos[])=>{
      this.listadoDuenos=datos;
    });
  }

}
