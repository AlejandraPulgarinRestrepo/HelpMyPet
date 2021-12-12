import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitasService } from 'src/app/servicios/citas.service';

@Component({
  selector: 'app-eliminar-cita',
  templateUrl: './eliminar-cita.component.html',
  styleUrls: ['./eliminar-cita.component.css']
})
export class EliminarCitaComponent implements OnInit {
  id:string="";
  constructor(private servicioCitas: CitasService, private rote: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.rote.snapshot.params["id"];
    this.EliminarCita();
    
  }

  EliminarCita(){
    this.servicioCitas.eliminarCitaPorId(this.id).subscribe((datos:any)=>{
      alert("Cita eliminada correctamente")
      this.router.navigate(["/citas/buscar-cita"])
    }, (error:any)=>{
      alert("Error eliminando cita")
    });
  }

}
