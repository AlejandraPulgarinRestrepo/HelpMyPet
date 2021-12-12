import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloVeterinarios } from 'src/app/modelos/veterinarios.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-crear-veterinario',
  templateUrl: './crear-veterinario.component.html',
  styleUrls: ['./crear-veterinario.component.css']
})
export class CrearVeterinarioComponent implements OnInit {

  fgValidador: FormGroup= this.fb.group({
    'nombres': ['',[Validators.required,]],
    'apellidos': ['',[Validators.required]],
    'cedula': ['',[Validators.required]],
    'correo': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],
    'tarjeta_profesional': ['',[Validators.required]],
    'especializacion': ['',[Validators.required]],
  }) 
  constructor(private fb: FormBuilder, private servicioveterinario: AdministracionService, private router: Router) { }

  ngOnInit(): void {
  }

  GuardarVeterinario(){
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let cedula = this.fgValidador.controls["cedula"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let tarjeta_profesional = this.fgValidador.controls["tarjeta_profesional"].value;
    let especializacion = this.fgValidador.controls["especializacion"].value;

    let veterinario = new ModeloVeterinarios();
    veterinario.nombres=nombres;
    veterinario.apellidos=apellidos;
    veterinario.cedula=cedula;
    veterinario.correo=correo;
    veterinario.telefono=telefono;
    veterinario.tarjeta_profesional=tarjeta_profesional;
    veterinario.especializacion=especializacion;

    this.servicioveterinario.crearVeterinario(veterinario).subscribe((datos:ModeloVeterinarios)=>{
      alert("Veterinario Guardado correctamente");
      this.router.navigate(["/administracion/buscar-veterinario"])
      console.log("datos nestor", datos)
    }, (error:any)=>{
      alert("Error guardando el veterinario");
    })

  }

}
