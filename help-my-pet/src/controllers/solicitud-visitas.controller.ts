import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {SolicitudVisitas} from '../models';
import {SolicitudVisitasRepository} from '../repositories';

export class SolicitudVisitasController {
  constructor(
    @repository(SolicitudVisitasRepository)
    public solicitudVisitasRepository : SolicitudVisitasRepository,
  ) {}

  @post('/solicitud-visitas')
  @response(200, {
    description: 'SolicitudVisitas model instance',
    content: {'application/json': {schema: getModelSchemaRef(SolicitudVisitas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudVisitas, {
            title: 'NewSolicitudVisitas',
            exclude: ['id'],
          }),
        },
      },
    })
    solicitudVisitas: Omit<SolicitudVisitas, 'id'>,
  ): Promise<SolicitudVisitas> {
    return this.solicitudVisitasRepository.create(solicitudVisitas);
  }

  @get('/solicitud-visitas/count')
  @response(200, {
    description: 'SolicitudVisitas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SolicitudVisitas) where?: Where<SolicitudVisitas>,
  ): Promise<Count> {
    return this.solicitudVisitasRepository.count(where);
  }

  @get('/solicitud-visitas')
  @response(200, {
    description: 'Array of SolicitudVisitas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SolicitudVisitas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SolicitudVisitas) filter?: Filter<SolicitudVisitas>,
  ): Promise<SolicitudVisitas[]> {
    return this.solicitudVisitasRepository.find(filter);
  }

  @patch('/solicitud-visitas')
  @response(200, {
    description: 'SolicitudVisitas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudVisitas, {partial: true}),
        },
      },
    })
    solicitudVisitas: SolicitudVisitas,
    @param.where(SolicitudVisitas) where?: Where<SolicitudVisitas>,
  ): Promise<Count> {
    return this.solicitudVisitasRepository.updateAll(solicitudVisitas, where);
  }

  @get('/solicitud-visitas/{id}')
  @response(200, {
    description: 'SolicitudVisitas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SolicitudVisitas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(SolicitudVisitas, {exclude: 'where'}) filter?: FilterExcludingWhere<SolicitudVisitas>
  ): Promise<SolicitudVisitas> {
    return this.solicitudVisitasRepository.findById(id, filter);
  }

  @patch('/solicitud-visitas/{id}')
  @response(204, {
    description: 'SolicitudVisitas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitudVisitas, {partial: true}),
        },
      },
    })
    solicitudVisitas: SolicitudVisitas,
  ): Promise<void> {
    await this.solicitudVisitasRepository.updateById(id, solicitudVisitas);
  }

  @put('/solicitud-visitas/{id}')
  @response(204, {
    description: 'SolicitudVisitas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() solicitudVisitas: SolicitudVisitas,
  ): Promise<void> {
    await this.solicitudVisitasRepository.replaceById(id, solicitudVisitas);
  }

  @del('/solicitud-visitas/{id}')
  @response(204, {
    description: 'SolicitudVisitas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.solicitudVisitasRepository.deleteById(id);
  }
}
