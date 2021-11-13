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
import {Veterinarios} from '../models';
import {VeterinariosRepository} from '../repositories';

export class VeterinariosController {
  constructor(
    @repository(VeterinariosRepository)
    public veterinariosRepository : VeterinariosRepository,
  ) {}

  @post('/veterinarios')
  @response(200, {
    description: 'Veterinarios model instance',
    content: {'application/json': {schema: getModelSchemaRef(Veterinarios)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Veterinarios, {
            title: 'NewVeterinarios',
            exclude: ['id'],
          }),
        },
      },
    })
    veterinarios: Omit<Veterinarios, 'id'>,
  ): Promise<Veterinarios> {
    return this.veterinariosRepository.create(veterinarios);
  }

  @get('/veterinarios/count')
  @response(200, {
    description: 'Veterinarios model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Veterinarios) where?: Where<Veterinarios>,
  ): Promise<Count> {
    return this.veterinariosRepository.count(where);
  }

  @get('/veterinarios')
  @response(200, {
    description: 'Array of Veterinarios model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Veterinarios, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Veterinarios) filter?: Filter<Veterinarios>,
  ): Promise<Veterinarios[]> {
    return this.veterinariosRepository.find(filter);
  }

  @patch('/veterinarios')
  @response(200, {
    description: 'Veterinarios PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Veterinarios, {partial: true}),
        },
      },
    })
    veterinarios: Veterinarios,
    @param.where(Veterinarios) where?: Where<Veterinarios>,
  ): Promise<Count> {
    return this.veterinariosRepository.updateAll(veterinarios, where);
  }

  @get('/veterinarios/{id}')
  @response(200, {
    description: 'Veterinarios model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Veterinarios, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Veterinarios, {exclude: 'where'}) filter?: FilterExcludingWhere<Veterinarios>
  ): Promise<Veterinarios> {
    return this.veterinariosRepository.findById(id, filter);
  }

  @patch('/veterinarios/{id}')
  @response(204, {
    description: 'Veterinarios PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Veterinarios, {partial: true}),
        },
      },
    })
    veterinarios: Veterinarios,
  ): Promise<void> {
    await this.veterinariosRepository.updateById(id, veterinarios);
  }

  @put('/veterinarios/{id}')
  @response(204, {
    description: 'Veterinarios PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() veterinarios: Veterinarios,
  ): Promise<void> {
    await this.veterinariosRepository.replaceById(id, veterinarios);
  }

  @del('/veterinarios/{id}')
  @response(204, {
    description: 'Veterinarios DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.veterinariosRepository.deleteById(id);
  }
}
