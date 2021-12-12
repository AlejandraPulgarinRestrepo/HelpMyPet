import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-eliminar-mascota',
  templateUrl: './eliminar-mascota.component.html',
  styleUrls: ['./eliminar-mascota.component.css']
})
export class EliminarMascotaComponent implements OnInit {

  id:string="";
  constructor(private servicioMascotas: AdministracionService,private router: Router, private rote: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.id = this.rote.snapshot.params["id"];
    this.EliminarMascota();
  }

  EliminarMascota(){
    this.servicioMascotas.eliminarMascotaPorId(this.id).subscribe((datos:any)=>{
      alert("Mascota eliminada correctamente")
      this.router.navigate(["/administracion/buscar-mascota"])
    }, (error:any)=>{
      alert("Error eliminando la mascota")
    });
  }

}
