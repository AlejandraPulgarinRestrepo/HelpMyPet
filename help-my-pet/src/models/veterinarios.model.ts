import {Entity, model, property, hasMany} from '@loopback/repository';
import {SolicitudVisitas} from './solicitud-visitas.model';

@model()
export class Veterinarios extends Entity {
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
  tarjeta_profesional: string;

  @property({
    type: 'string',
    required: true,
  })
  especializacion: string;

  @property({
    type: 'string',
  })
  empresaVeterinariaId?: string;

  @hasMany(() => SolicitudVisitas)
  solicitudVisitas: SolicitudVisitas[];

  constructor(data?: Partial<Veterinarios>) {
    super(data);
  }
}

export interface VeterinariosRelations {
  // describe navigational properties here
}

export type VeterinariosWithRelations = Veterinarios & VeterinariosRelations;
