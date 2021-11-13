import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Duenos,
  SolicitudVisitas,
} from '../models';
import {DuenosRepository} from '../repositories';

export class DuenosSolicitudVisitasController {
  constructor(
    @repository(DuenosRepository) protected duenosRepository: DuenosRepository,
  ) { }

  @get('/duenos/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'Array of Duenos has many SolicitudVisitas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(SolicitudVisitas)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<SolicitudVisitas>,
  ): Promise<SolicitudVisitas[]> {
    return this.duenosRepository.solicitudVisitas(id).find(filter);
  }

  @post('/duenos/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'Duenos model instance',
        content: {'application/json': {schema: getModelSchemaRef(SolicitudVisitas)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Duenos.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudVisitas, {
            title: 'NewSolicitudVisitasInDuenos',
            exclude: ['id'],
            optional: ['duenosId']
          }),
        },
      },
    }) solicitudVisitas: Omit<SolicitudVisitas, 'id'>,
  ): Promise<SolicitudVisitas> {
    return this.duenosRepository.solicitudVisitas(id).create(solicitudVisitas);
  }

  @patch('/duenos/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'Duenos.SolicitudVisitas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudVisitas, {partial: true}),
        },
      },
    })
    solicitudVisitas: Partial<SolicitudVisitas>,
    @param.query.object('where', getWhereSchemaFor(SolicitudVisitas)) where?: Where<SolicitudVisitas>,
  ): Promise<Count> {
    return this.duenosRepository.solicitudVisitas(id).patch(solicitudVisitas, where);
  }

  @del('/duenos/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'Duenos.SolicitudVisitas DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SolicitudVisitas)) where?: Where<SolicitudVisitas>,
  ): Promise<Count> {
    return this.duenosRepository.solicitudVisitas(id).delete(where);
  }
}
