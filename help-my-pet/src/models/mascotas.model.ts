import {Entity, model, property, hasMany} from '@loopback/repository';
import {SolicitudVisitas} from './solicitud-visitas.model';

@model()
export class Mascotas extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  color_ojos: string;

  @property({
    type: 'string',
    required: true,
  })
  color_piel_pelaje: string;

  @property({
    type: 'string',
    required: true,
  })
  altura: string;

  @property({
    type: 'string',
    required: true,
  })
  raza: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo_animal: string;

  @property({
    type: 'string',
  })
  duenosId?: string;

  @hasMany(() => SolicitudVisitas)
  solicitudVisitas: SolicitudVisitas[];

  constructor(data?: Partial<Mascotas>) {
    super(data);
  }
}

export interface MascotasRelations {
  // describe navigational properties here
}

export type MascotasWithRelations = Mascotas & MascotasRelations;
