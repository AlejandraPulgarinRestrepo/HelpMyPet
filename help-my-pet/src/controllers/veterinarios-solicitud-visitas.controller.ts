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
  Veterinarios,
  SolicitudVisitas,
} from '../models';
import {VeterinariosRepository} from '../repositories';

export class VeterinariosSolicitudVisitasController {
  constructor(
    @repository(VeterinariosRepository) protected veterinariosRepository: VeterinariosRepository,
  ) { }

  @get('/veterinarios/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'Array of Veterinarios has many SolicitudVisitas',
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
    return this.veterinariosRepository.solicitudVisitas(id).find(filter);
  }

  @post('/veterinarios/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'Veterinarios model instance',
        content: {'application/json': {schema: getModelSchemaRef(SolicitudVisitas)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Veterinarios.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudVisitas, {
            title: 'NewSolicitudVisitasInVeterinarios',
            exclude: ['id'],
            optional: ['veterinariosId']
          }),
        },
      },
    }) solicitudVisitas: Omit<SolicitudVisitas, 'id'>,
  ): Promise<SolicitudVisitas> {
    return this.veterinariosRepository.solicitudVisitas(id).create(solicitudVisitas);
  }

  @patch('/veterinarios/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'Veterinarios.SolicitudVisitas PATCH success count',
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
    return this.veterinariosRepository.solicitudVisitas(id).patch(solicitudVisitas, where);
  }

  @del('/veterinarios/{id}/solicitud-visitas', {
    responses: {
      '200': {
        description: 'Veterinarios.SolicitudVisitas DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(SolicitudVisitas)) where?: Where<SolicitudVisitas>,
  ): Promise<Count> {
    return this.veterinariosRepository.solicitudVisitas(id).delete(where);
  }
}
