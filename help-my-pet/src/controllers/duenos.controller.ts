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
import {Duenos} from '../models';
import {DuenosRepository} from '../repositories';

export class DuenosController {
  constructor(
    @repository(DuenosRepository)
    public duenosRepository : DuenosRepository,
  ) {}

  @post('/duenos')
  @response(200, {
    description: 'Duenos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Duenos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Duenos, {
            title: 'NewDuenos',
            exclude: ['id'],
          }),
        },
      },
    })
    duenos: Omit<Duenos, 'id'>,
  ): Promise<Duenos> {
    return this.duenosRepository.create(duenos);
  }

  @get('/duenos/count')
  @response(200, {
    description: 'Duenos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Duenos) where?: Where<Duenos>,
  ): Promise<Count> {
    return this.duenosRepository.count(where);
  }

  @get('/duenos')
  @response(200, {
    description: 'Array of Duenos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Duenos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Duenos) filter?: Filter<Duenos>,
  ): Promise<Duenos[]> {
    return this.duenosRepository.find(filter);
  }

  @patch('/duenos')
  @response(200, {
    description: 'Duenos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Duenos, {partial: true}),
        },
      },
    })
    duenos: Duenos,
    @param.where(Duenos) where?: Where<Duenos>,
  ): Promise<Count> {
    return this.duenosRepository.updateAll(duenos, where);
  }

  @get('/duenos/{id}')
  @response(200, {
    description: 'Duenos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Duenos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Duenos, {exclude: 'where'}) filter?: FilterExcludingWhere<Duenos>
  ): Promise<Duenos> {
    return this.duenosRepository.findById(id, filter);
  }

  @patch('/duenos/{id}')
  @response(204, {
    description: 'Duenos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Duenos, {partial: true}),
        },
      },
    })
    duenos: Duenos,
  ): Promise<void> {
    await this.duenosRepository.updateById(id, duenos);
  }

  @put('/duenos/{id}')
  @response(204, {
    description: 'Duenos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() duenos: Duenos,
  ): Promise<void> {
    await this.duenosRepository.replaceById(id, duenos);
  }

  @del('/duenos/{id}')
  @response(204, {
    description: 'Duenos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.duenosRepository.deleteById(id);
  }
}
