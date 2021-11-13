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
import {RegistroVisitas} from '../models';
import {RegistroVisitasRepository} from '../repositories';

export class RegistroVisitasController {
  constructor(
    @repository(RegistroVisitasRepository)
    public registroVisitasRepository : RegistroVisitasRepository,
  ) {}

  @post('/registro-visitas')
  @response(200, {
    description: 'RegistroVisitas model instance',
    content: {'application/json': {schema: getModelSchemaRef(RegistroVisitas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistroVisitas, {
            title: 'NewRegistroVisitas',
            exclude: ['id'],
          }),
        },
      },
    })
    registroVisitas: Omit<RegistroVisitas, 'id'>,
  ): Promise<RegistroVisitas> {
    return this.registroVisitasRepository.create(registroVisitas);
  }

  @get('/registro-visitas/count')
  @response(200, {
    description: 'RegistroVisitas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RegistroVisitas) where?: Where<RegistroVisitas>,
  ): Promise<Count> {
    return this.registroVisitasRepository.count(where);
  }

  @get('/registro-visitas')
  @response(200, {
    description: 'Array of RegistroVisitas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RegistroVisitas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RegistroVisitas) filter?: Filter<RegistroVisitas>,
  ): Promise<RegistroVisitas[]> {
    return this.registroVisitasRepository.find(filter);
  }

  @patch('/registro-visitas')
  @response(200, {
    description: 'RegistroVisitas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistroVisitas, {partial: true}),
        },
      },
    })
    registroVisitas: RegistroVisitas,
    @param.where(RegistroVisitas) where?: Where<RegistroVisitas>,
  ): Promise<Count> {
    return this.registroVisitasRepository.updateAll(registroVisitas, where);
  }

  @get('/registro-visitas/{id}')
  @response(200, {
    description: 'RegistroVisitas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RegistroVisitas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(RegistroVisitas, {exclude: 'where'}) filter?: FilterExcludingWhere<RegistroVisitas>
  ): Promise<RegistroVisitas> {
    return this.registroVisitasRepository.findById(id, filter);
  }

  @patch('/registro-visitas/{id}')
  @response(204, {
    description: 'RegistroVisitas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistroVisitas, {partial: true}),
        },
      },
    })
    registroVisitas: RegistroVisitas,
  ): Promise<void> {
    await this.registroVisitasRepository.updateById(id, registroVisitas);
  }

  @put('/registro-visitas/{id}')
  @response(204, {
    description: 'RegistroVisitas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() registroVisitas: RegistroVisitas,
  ): Promise<void> {
    await this.registroVisitasRepository.replaceById(id, registroVisitas);
  }

  @del('/registro-visitas/{id}')
  @response(204, {
    description: 'RegistroVisitas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.registroVisitasRepository.deleteById(id);
  }
}
