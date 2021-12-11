import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVeterinarios } from 'src/app/modelos/veterinarios.modelo';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-actualizar-veterinario',
  templateUrl: './actualizar-veterinario.component.html',
  styleUrls: ['./actualizar-veterinario.component.css']
})
export class ActualizarVeterinarioComponent implements OnInit {

  id:string="";
  fgValidador: FormGroup= this.fb.group({
    'id': ['',[Validators.required,]],
    'nombres': ['',[Validators.required,]],
    'apellidos': ['',[Validators.required]],
    'cedula': ['',[Validators.required]],
    'correo': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],
    'tarjeta_profesional': ['',[Validators.required]],
    'especializacion': ['',[Validators.required]],
  }) 
  constructor(private fb: FormBuilder, private servicioveterinario: AdministracionService, private router: Router, private rote: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rote.snapshot.params["id"];
    this.BuscarVeterinario();
  }

  BuscarVeterinario(){
    this.servicioveterinario.buscarVeterinarioPorId(this.id).subscribe((datos:ModeloVeterinarios)=>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombres"].setValue(datos.nombres);
      this.fgValidador.controls["apellidos"].setValue(datos.apellidos);
      this.fgValidador.controls["cedula"].setValue(datos.cedula);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
      this.fgValidador.controls["tarjeta_profesional"].setValue(datos.tarjeta_profesional);
      this.fgValidador.controls["especializacion"].setValue(datos.especializacion);
    }, (error:any)=>{
      alert("Error buscando el veterinario");
    })
  }

  EditarVeterinario(){
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
    veterinario.id=this.id;

    this.servicioveterinario.actualizarVeterinario(veterinario).subscribe((datos:ModeloVeterinarios)=>{
      alert("Veterinario actualizado correctamente");
      this.router.navigate(["/administracion/buscar-veterinario"])
      
    }, (error:any)=>{
      alert("Error actualizando el veterinario");
    })

  }

}
