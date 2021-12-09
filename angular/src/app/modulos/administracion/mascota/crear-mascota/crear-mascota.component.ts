import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloMascotas } from 'src/app/modelos/mascotas.model';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  fgValidador: FormGroup= this.fb.group({
    'nombre': ['',[Validators.required,]],
    'color_ojos': ['',[Validators.required]],
    'color_piel_pelaje': ['',[Validators.required]],
    'altura': ['',[Validators.required]],
    'raza': ['',[Validators.required]],
    'tipo_animal': ['',[Validators.required]],
  }) 
  constructor(private fb: FormBuilder, private servicioMascotas: AdministracionService,private router: Router) { 

  }

  ngOnInit(): void {
  }

  GuardarMascota(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let color_ojos = this.fgValidador.controls["color_ojos"].value;
    let color_piel_pelaje = this.fgValidador.controls["color_piel_pelaje"].value;
    let altura = parseInt(this.fgValidador.controls["altura"].value);
    let raza = this.fgValidador.controls["raza"].value;
    let tipo_animal = this.fgValidador.controls["tipo_animal"].value;

    let mascota = new ModeloMascotas();
    mascota.nombre=nombre;
    mascota.color_ojos=color_ojos;
    mascota.color_piel_pelaje=color_piel_pelaje;
    mascota.altura=altura;
    mascota.raza=raza;
    mascota.tipo_animal=tipo_animal;

    this.servicioMascotas.crearMascota(mascota).subscribe((datos:ModeloMascotas)=>{
      alert("Mascota Guardada correctamente");
      this.router.navigate(["/administracion/buscar-mascota"])
      console.log("datos nestor", datos)
    }, (error:any)=>{
      alert("Error guardando la mascota");
    })

  }


}
