import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as cryptoJS from "crypto-js";
import { SeguridadService } from 'src/app/servicios/seguridad.service';


@Component({
  selector: 'app-identificacion-veterinario',
  templateUrl: './identificacion-veterinario.component.html',
  styleUrls: ['./identificacion-veterinario.component.css']
})
export class IdentificacionVeterinarioComponent implements OnInit {
  fgValidador: FormGroup= this.fb.group({
    'usuario': ['',[Validators.required, Validators.email]],
    'clave': ['',[Validators.required]],
  })

  constructor(private fb: FormBuilder, private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
  }

  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value
    let clave = this.fgValidador.controls["clave"].value
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario,claveCifrada).subscribe((datos:any)=>{
      alert("datos correctos")
    }, (error:any)=>{
      alert("datos invalidos")
    })

    
  }

}
