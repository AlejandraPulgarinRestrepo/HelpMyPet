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
import {EmpresaVeterinaria} from '../models';
import {EmpresaVeterinariaRepository} from '../repositories';

export class EmpresaVeterinariaController {
  constructor(
    @repository(EmpresaVeterinariaRepository)
    public empresaVeterinariaRepository : EmpresaVeterinariaRepository,
  ) {}

  @post('/empresa-veterinarias')
  @response(200, {
    description: 'EmpresaVeterinaria model instance',
    content: {'application/json': {schema: getModelSchemaRef(EmpresaVeterinaria)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmpresaVeterinaria, {
            title: 'NewEmpresaVeterinaria',
            exclude: ['id'],
          }),
        },
      },
    })
    empresaVeterinaria: Omit<EmpresaVeterinaria, 'id'>,
  ): Promise<EmpresaVeterinaria> {
    return this.empresaVeterinariaRepository.create(empresaVeterinaria);
  }

  @get('/empresa-veterinarias/count')
  @response(200, {
    description: 'EmpresaVeterinaria model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(EmpresaVeterinaria) where?: Where<EmpresaVeterinaria>,
  ): Promise<Count> {
    return this.empresaVeterinariaRepository.count(where);
  }

  @get('/empresa-veterinarias')
  @response(200, {
    description: 'Array of EmpresaVeterinaria model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(EmpresaVeterinaria, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(EmpresaVeterinaria) filter?: Filter<EmpresaVeterinaria>,
  ): Promise<EmpresaVeterinaria[]> {
    return this.empresaVeterinariaRepository.find(filter);
  }

  @patch('/empresa-veterinarias')
  @response(200, {
    description: 'EmpresaVeterinaria PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmpresaVeterinaria, {partial: true}),
        },
      },
    })
    empresaVeterinaria: EmpresaVeterinaria,
    @param.where(EmpresaVeterinaria) where?: Where<EmpresaVeterinaria>,
  ): Promise<Count> {
    return this.empresaVeterinariaRepository.updateAll(empresaVeterinaria, where);
  }

  @get('/empresa-veterinarias/{id}')
  @response(200, {
    description: 'EmpresaVeterinaria model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(EmpresaVeterinaria, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(EmpresaVeterinaria, {exclude: 'where'}) filter?: FilterExcludingWhere<EmpresaVeterinaria>
  ): Promise<EmpresaVeterinaria> {
    return this.empresaVeterinariaRepository.findById(id, filter);
  }

  @patch('/empresa-veterinarias/{id}')
  @response(204, {
    description: 'EmpresaVeterinaria PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmpresaVeterinaria, {partial: true}),
        },
      },
    })
    empresaVeterinaria: EmpresaVeterinaria,
  ): Promise<void> {
    await this.empresaVeterinariaRepository.updateById(id, empresaVeterinaria);
  }

  @put('/empresa-veterinarias/{id}')
  @response(204, {
    description: 'EmpresaVeterinaria PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() empresaVeterinaria: EmpresaVeterinaria,
  ): Promise<void> {
    await this.empresaVeterinariaRepository.replaceById(id, empresaVeterinaria);
  }

  @del('/empresa-veterinarias/{id}')
  @response(204, {
    description: 'EmpresaVeterinaria DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.empresaVeterinariaRepository.deleteById(id);
  }
}
