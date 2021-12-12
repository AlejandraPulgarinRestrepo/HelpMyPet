import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascotas } from 'src/app/modelos/mascotas.model';
import { AdministracionService } from 'src/app/servicios/administracion.service';

@Component({
  selector: 'app-actualizar-mascota',
  templateUrl: './actualizar-mascota.component.html',
  styleUrls: ['./actualizar-mascota.component.css']
})
export class ActualizarMascotaComponent implements OnInit {

  id:string="";
  fgValidador: FormGroup= this.fb.group({
    'id': ['',[Validators.required,]],
    'nombre': ['',[Validators.required,]],
    'color_ojos': ['',[Validators.required]],
    'color_piel_pelaje': ['',[Validators.required]],
    'altura': ['',[Validators.required]],
    'raza': ['',[Validators.required]],
    'tipo_animal': ['',[Validators.required]],
  }) 
  constructor(private fb: FormBuilder, private servicioMascotas: AdministracionService,private router: Router, private rote: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.id = this.rote.snapshot.params["id"];
    this.BuscarMascota()
  }

  BuscarMascota(){
    this.servicioMascotas.buscarMascotaPorId(this.id).subscribe((datos:ModeloMascotas)=>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["color_ojos"].setValue(datos.color_ojos);
      this.fgValidador.controls["color_piel_pelaje"].setValue(datos.color_piel_pelaje);
      this.fgValidador.controls["altura"].setValue(datos.altura);
      this.fgValidador.controls["raza"].setValue(datos.raza);
      this.fgValidador.controls["tipo_animal"].setValue(datos.tipo_animal);
    }, (error:any)=>{
      alert("Error buscando la mascota");
    })
  }

  EditarMascota(){
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
    mascota.id=this.id;

    this.servicioMascotas.actualizarMascota(mascota).subscribe((datos:ModeloMascotas)=>{
      alert("Mascota actualizada correctamente");
      this.router.navigate(["/administracion/buscar-mascota"])
    }, (error:any)=>{
      alert("Error actualizando la mascota");
    })

  }

}
