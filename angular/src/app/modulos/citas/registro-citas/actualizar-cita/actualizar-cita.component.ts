import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCitas } from 'src/app/modelos/citas.modelo';
import { CitasService } from 'src/app/servicios/citas.service';

@Component({
  selector: 'app-actualizar-cita',
  templateUrl: './actualizar-cita.component.html',
  styleUrls: ['./actualizar-cita.component.css']
})
export class ActualizarCitaComponent implements OnInit {

  id:string="";
  fgValidador: FormGroup= this.fb.group({
    'id': ['',[Validators.required,]],
    'temperatura': ['',[Validators.required,]],
    'peso': ['',[Validators.required]],
    'frecuencia_cardiaca': ['',[Validators.required]],
    'frecuencia_respiratoria': ['',[Validators.required]],
    'estado_animo': ['',[Validators.required]],
    'fecha': ['',[Validators.required]],
    'recomendaciones': ['',[Validators.required]],
  }) 
  constructor(private fb: FormBuilder, private servicioCitas: CitasService,private router: Router, private rote: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rote.snapshot.params["id"];
    this.BuscarCita();
  }

  BuscarCita(){
    this.servicioCitas.buscarCitaPorId(this.id).subscribe((datos:ModeloCitas)=>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["temperatura"].setValue(datos.temperatura);
      this.fgValidador.controls["peso"].setValue(datos.peso);
      this.fgValidador.controls["frecuencia_cardiaca"].setValue(datos.frecuencia_cardiaca);
      this.fgValidador.controls["frecuencia_respiratoria"].setValue(datos.frecuencia_respiratoria);
      this.fgValidador.controls["estado_animo"].setValue(datos.estado_animo);
      this.fgValidador.controls["fecha"].setValue(datos.fecha);
      this.fgValidador.controls["recomendaciones"].setValue(datos.recomendaciones);
    }, (error:any)=>{
      alert("Error guardando la cita");
    })
  }

  EditarCita(){
    let temperatura = parseInt(this.fgValidador.controls["temperatura"].value);
    let peso = parseInt(this.fgValidador.controls["peso"].value);
    let frecuencia_cardiaca = parseInt(this.fgValidador.controls["frecuencia_cardiaca"].value);
    let frecuencia_respiratoria= parseInt(this.fgValidador.controls["frecuencia_respiratoria"].value);
    let estado_animo = this.fgValidador.controls["estado_animo"].value;
    let fecha = this.fgValidador.controls["fecha"].value;
    let recomendaciones = this.fgValidador.controls["recomendaciones"].value;

    let cita = new ModeloCitas();
    cita.temperatura= temperatura;
    cita.peso=peso;
    cita.frecuencia_cardiaca=frecuencia_cardiaca;
    cita.frecuencia_respiratoria=frecuencia_respiratoria;
    cita.estado_animo=estado_animo;
    cita.fecha=fecha;
    cita.recomendaciones=recomendaciones;
    cita.id=this.id;
    console.log("cita nestor",cita.recomendaciones)

    this.servicioCitas.actualizarCita(cita).subscribe((datos:ModeloCitas)=>{
      alert("Cita Guardada correctamente");
      this.router.navigate(["/citas/buscar-cita"])
      console.log("datos nestor", datos)
    }, (error:any)=>{
      alert("Error guardando la cita");
    })
  }

}
