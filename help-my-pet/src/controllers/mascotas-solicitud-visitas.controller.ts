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
  Mascotas,
  SolicitudVisitas,
} from '../models';
import {MascotasRepository} from '../repositories';

export class MascotasSolicitudVisitasController {
  constructor(
    @repository(MascotasRepository) protected mascotasRepository: MascotasRepository,
  ) { }

  @get('/mascotas/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'Array of Mascotas has many SolicitudVisitas',
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
    return this.mascotasRepository.solicitudVisitas(id).find(filter);
  }

  @post('/mascotas/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'Mascotas model instance',
        content: {'application/json': {schema: getModelSchemaRef(SolicitudVisitas)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Mascotas.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudVisitas, {
            title: 'NewSolicitudVisitasInMascotas',
            exclude: ['id'],
            optional: ['mascotasId']
          }),
        },
      },
    }) solicitudVisitas: Omit<SolicitudVisitas, 'id'>,
  ): Promise<SolicitudVisitas> {
    return this.mascotasRepository.solicitudVisitas(id).create(solicitudVisitas);
  }

  @patch('/mascotas/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'Mascotas.SolicitudVisitas PATCH success count',
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
    return this.mascotasRepository.solicitudVisitas(id).patch(solicitudVisitas, where);
  }

  @del('/mascotas/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'Mascotas.SolicitudVisitas DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SolicitudVisitas)) where?: Where<SolicitudVisitas>,
  ): Promise<Count> {
    return this.mascotasRepository.solicitudVisitas(id).delete(where);
  }
}
