import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloDuenos } from 'src/app/modelos/duenos.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-actualizar-dueno',
  templateUrl: './actualizar-dueno.component.html',
  styleUrls: ['./actualizar-dueno.component.css']
})
export class ActualizarDuenoComponent implements OnInit {

  id:string="";
  fgValidador: FormGroup= this.fb.group({
    'id': ['',[Validators.required,]],
    'nombres': ['',[Validators.required,]],
    'apellidos': ['',[Validators.required]],
    'cedula': ['',[Validators.required]],
    'correo': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],
    'direccion': ['',[Validators.required]],
  }) 
  constructor(private fb: FormBuilder, private servicioDuenos: AdministracionService, private router: Router, private rote: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rote.snapshot.params["id"];
    this.BuscarDueno();
  }

  BuscarDueno(){
    this.servicioDuenos.buscarDuenoPorId(this.id).subscribe((datos:ModeloDuenos)=>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombres"].setValue(datos.nombres);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["cedula"].setValue(datos.cedula);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
    }, (error:any)=>{
      alert("Error buscando el dueño");
    })
  }

  EditarDueno(){
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let cedula = this.fgValidador.controls["cedula"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    

    let dueno = new ModeloDuenos();
    dueno.nombres=nombres;
    dueno.apellidos=apellidos;
    dueno.cedula=cedula;
    dueno.correo=correo;
    dueno.telefono=telefono;
    dueno.direccion=direccion;
    dueno.id=this.id;

    this.servicioDuenos.actualizarDueno(dueno).subscribe((datos:ModeloDuenos)=>{
      alert("Dueño Actualizado correctamente");
      this.router.navigate(["/administracion/buscar-dueno"])
    }, (error:any)=>{
      alert("Error actualizando el dueno");
    })

  }

}
