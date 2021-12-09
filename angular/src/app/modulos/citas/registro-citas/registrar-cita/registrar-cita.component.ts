import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCitas } from 'src/app/modelos/citas.modelo';
import { CitasService } from 'src/app/servicios/citas.service';

@Component({
  selector: 'app-registrar-cita',
  templateUrl: './registrar-cita.component.html',
  styleUrls: ['./registrar-cita.component.css']
})
export class RegistrarCitaComponent implements OnInit {

  fgValidador: FormGroup= this.fb.group({
    'temperatura': ['',[Validators.required,]],
    'peso': ['',[Validators.required]],
    'frecuencia_cardiaca': ['',[Validators.required]],
    'frecuencia_respiratoria': ['',[Validators.required]],
    'estado_animo': ['',[Validators.required]],
    'fecha': ['',[Validators.required]],
    'recomendaciones': ['',[Validators.required]],
  }) 
  constructor(private fb: FormBuilder, private servicioCitas: CitasService,private router: Router) { }

  ngOnInit(): void {
  }

  GuardarCita(){
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
    console.log("cita nestor",cita.recomendaciones)

    this.servicioCitas.crearCita(cita).subscribe((datos:ModeloCitas)=>{
      alert("Cita Guardada correctamente");
      this.router.navigate(["/citas/buscar-cita"])
    }, (error:any)=>{
      alert("Error guardando la cita");
    })
  }

}
