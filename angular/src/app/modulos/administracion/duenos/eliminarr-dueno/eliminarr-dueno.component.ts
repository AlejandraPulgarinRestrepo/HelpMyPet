import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-eliminarr-dueno',
  templateUrl: './eliminarr-dueno.component.html',
  styleUrls: ['./eliminarr-dueno.component.css']
})
export class EliminarrDuenoComponent implements OnInit {

  id:string="";
  constructor(private servicioDuenos: AdministracionService, private router: Router, private rote: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rote.snapshot.params["id"];
    this.EliminarDueno();
  }

  EliminarDueno(){
    this.servicioDuenos.eliminarDuenoPorId(this.id).subscribe((datos:any)=>{
      alert("Dueño eliminado correctamente")
      this.router.navigate(["/administracion/buscar-dueno"])
    }, (error:any)=>{
      alert("Error eliminando el dueno")
    });
  }

}
