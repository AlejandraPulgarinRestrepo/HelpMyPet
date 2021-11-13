import {Entity, model, property} from '@loopback/repository';

@model()
export class SolicitudVisitas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  mascotasId?: string;

  @property({
    type: 'string',
  })
  duenosId?: string;

  @property({
    type: 'string',
  })
  veterinariosId?: string;

  @property({
    type: 'string',
  })
  registroVisitasId?: string;

  constructor(data?: Partial<SolicitudVisitas>) {
    super(data);
  }
}

export interface SolicitudVisitasRelations {
  // describe navigational properties here
}

export type SolicitudVisitasWithRelations = SolicitudVisitas & SolicitudVisitasRelations;
