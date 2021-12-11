import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloDuenos } from 'src/app/modelos/duenos.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-crear-dueno',
  templateUrl: './crear-dueno.component.html',
  styleUrls: ['./crear-dueno.component.css']
})
export class CrearDuenoComponent implements OnInit {

  fgValidador: FormGroup= this.fb.group({
    'nombres': ['',[Validators.required,]],
    'apellidos': ['',[Validators.required]],
    'cedula': ['',[Validators.required]],
    'correo': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],
    'direccion': ['',[Validators.required]],
  }) 
  constructor(private fb: FormBuilder, private servicioDuenos: AdministracionService, private router: Router) { }

  ngOnInit(): void {
  }

  GuardarDueno(){
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

    this.servicioDuenos.crearDueno(dueno).subscribe((datos:ModeloDuenos)=>{
      alert("Dueño Guardado correctamente");
      this.router.navigate(["/administracion/buscar-dueno"])
      console.log("datos nestor", datos)
    }, (error:any)=>{
      alert("Error guardando el dueno");
    })

  }

}
