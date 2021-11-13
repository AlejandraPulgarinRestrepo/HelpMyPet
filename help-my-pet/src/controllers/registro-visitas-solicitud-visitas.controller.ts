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
  RegistroVisitas,
  SolicitudVisitas,
} from '../models';
import {RegistroVisitasRepository} from '../repositories';

export class RegistroVisitasSolicitudVisitasController {
  constructor(
    @repository(RegistroVisitasRepository) protected registroVisitasRepository: RegistroVisitasRepository,
  ) { }

  @get('/registro-visitas/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'RegistroVisitas has one SolicitudVisitas',
        content: {
          'application/json': {
            schema: getModelSchemaRef(SolicitudVisitas),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<SolicitudVisitas>,
  ): Promise<SolicitudVisitas> {
    return this.registroVisitasRepository.solicitudVisitas(id).get(filter);
  }

  @post('/registro-visitas/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'RegistroVisitas model instance',
        content: {'application/json': {schema: getModelSchemaRef(SolicitudVisitas)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof RegistroVisitas.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudVisitas, {
            title: 'NewSolicitudVisitasInRegistroVisitas',
            exclude: ['id'],
            optional: ['registroVisitasId']
          }),
        },
      },
    }) solicitudVisitas: Omit<SolicitudVisitas, 'id'>,
  ): Promise<SolicitudVisitas> {
    return this.registroVisitasRepository.solicitudVisitas(id).create(solicitudVisitas);
  }

  @patch('/registro-visitas/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'RegistroVisitas.SolicitudVisitas PATCH success count',
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
    return this.registroVisitasRepository.solicitudVisitas(id).patch(solicitudVisitas, where);
  }

  @del('/registro-visitas/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'RegistroVisitas.SolicitudVisitas DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SolicitudVisitas)) where?: Where<SolicitudVisitas>,
  ): Promise<Count> {
    return this.registroVisitasRepository.solicitudVisitas(id).delete(where);
  }
}
