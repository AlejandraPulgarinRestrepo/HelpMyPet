import {Entity, model, property, hasMany} from '@loopback/repository';
import {Veterinarios} from './veterinarios.model';

@model()
export class EmpresaVeterinaria extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nit: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @hasMany(() => Veterinarios)
  veterinarios: Veterinarios[];

  constructor(data?: Partial<EmpresaVeterinaria>) {
    super(data);
  }
}

export interface EmpresaVeterinariaRelations {
  // describe navigational properties here
}

export type EmpresaVeterinariaWithRelations = EmpresaVeterinaria & EmpresaVeterinariaRelations;
