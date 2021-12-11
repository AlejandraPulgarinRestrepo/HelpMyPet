import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-eliminar-veterinario',
  templateUrl: './eliminar-veterinario.component.html',
  styleUrls: ['./eliminar-veterinario.component.css']
})
export class EliminarVeterinarioComponent implements OnInit {

  id:string="";
  constructor(private servicioveterinario: AdministracionService,private router: Router, private rote: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.id = this.rote.snapshot.params["id"];
    this.EliminarVeterinario()
  }

  
  EliminarVeterinario(){
    this.servicioveterinario.eliminarVeterinarioPorId(this.id).subscribe((datos:any)=>{
      alert("Veterinario eliminado correctamente")
      this.router.navigate(["/administracion/buscar-veterinario"])
    }, (error:any)=>{
      alert("Error eliminando el veterinario")
    });
  }

}
