import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {Mascotas} from './mascotas.model';
import {SolicitudVisitas} from './solicitud-visitas.model';
import {Personas} from './personas.model';

@model()
export class Duenos extends Entity {
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
  direccion: string;

  @hasMany(() => Mascotas)
  mascotas: Mascotas[];

  @hasMany(() => SolicitudVisitas)
  solicitudVisitas: SolicitudVisitas[];

  @belongsTo(() => Personas)
  personasId: string;

  constructor(data?: Partial<Duenos>) {
    super(data);
  }
}

export interface DuenosRelations {
  // describe navigational properties here
}

export type DuenosWithRelations = Duenos & DuenosRelations;
