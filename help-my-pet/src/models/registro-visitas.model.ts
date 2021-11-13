import {Entity, model, property, hasOne} from '@loopback/repository';
import {SolicitudVisitas} from './solicitud-visitas.model';

@model()
export class RegistroVisitas extends Entity {
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
  temperatura: string;

  @property({
    type: 'string',
    required: true,
  })
  peso: string;

  @property({
    type: 'string',
    required: true,
  })
  frecuencia_cardiaca: string;

  @property({
    type: 'string',
    required: true,
  })
  frecuencia_respiratoria: string;

  @property({
    type: 'string',
    required: true,
  })
  estado_animo: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  recomendaciones: string;

  @hasOne(() => SolicitudVisitas)
  solicitudVisitas: SolicitudVisitas;

  constructor(data?: Partial<RegistroVisitas>) {
    super(data);
  }
}

export interface RegistroVisitasRelations {
  // describe navigational properties here
}

export type RegistroVisitasWithRelations = RegistroVisitas & RegistroVisitasRelations;
