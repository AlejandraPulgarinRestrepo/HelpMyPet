import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
const generador = require("password-generator");
import { Llaves } from '../config/llaves';
import { Personas } from '../models';
import { PersonasRepository } from '../repositories';
const crypto = require("crypto-js");
const jwt = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(PersonasRepository)
    public personaRepository : PersonasRepository
  ) {}

  /*
   * Add service methods here
   */

  GenerarClave(){
    let clave = generador(8,false);
    return clave;
  }

  CifrarClave(clave:string){
    let claveCifrada = crypto.MD5(clave).toString();
    return claveCifrada;
  }

  IdentificarPersona(usuario:string, clave:string){
    try {
      let p = this.personaRepository.findOne({where:{correo:usuario, clave:clave}})
        console.log("persona nestor repositorio:", p)
     
      
      if(p){
        return p;
      }
      return false;
    } catch {
      return false;
    }
  }

  GenerarTokenJWT(personas:Personas){
    let token = jwt.sign({
      data:{
        id: personas.id,
        correo: personas.correo,
        nombre: personas.nombres+' '+personas.apellidos,
        cedula: personas.cedula,
        telefono: personas.telefono
      }
    },
    Llaves.clavejwt);
    return token;
  }

  ValidarToken(token:string){
    try {
      let datos = jwt.verify(token, Llaves.clavejwt)
      return datos;
    } catch  {
      return false;
    }
  }

}
