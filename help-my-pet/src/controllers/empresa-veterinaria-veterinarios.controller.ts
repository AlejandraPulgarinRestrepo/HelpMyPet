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
  EmpresaVeterinaria,
  Veterinarios,
} from '../models';
import {EmpresaVeterinariaRepository} from '../repositories';

export class EmpresaVeterinariaVeterinariosController {
  constructor(
    @repository(EmpresaVeterinariaRepository) protected empresaVeterinariaRepository: EmpresaVeterinariaRepository,
  ) { }

  @get('/empresa-veterinarias/{id}/veterinarios', {
    responses: {
      '200': {
        description: 'Array of EmpresaVeterinaria has many Veterinarios',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Veterinarios)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Veterinarios>,
  ): Promise<Veterinarios[]> {
    return this.empresaVeterinariaRepository.veterinarios(id).find(filter);
  }

  @post('/empresa-veterinarias/{id}/veterinarios', {
    responses: {
      '200': {
        description: 'EmpresaVeterinaria model instance',
        content: {'application/json': {schema: getModelSchemaRef(Veterinarios)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof EmpresaVeterinaria.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Veterinarios, {
            title: 'NewVeterinariosInEmpresaVeterinaria',
            exclude: ['id'],
            optional: ['empresaVeterinariaId']
          }),
        },
      },
    }) veterinarios: Omit<Veterinarios, 'id'>,
  ): Promise<Veterinarios> {
    return this.empresaVeterinariaRepository.veterinarios(id).create(veterinarios);
  }

  @patch('/empresa-veterinarias/{id}/veterinarios', {
    responses: {
      '200': {
        description: 'EmpresaVeterinaria.Veterinarios PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Veterinarios, {partial: true}),
        },
      },
    })
    veterinarios: Partial<Veterinarios>,
    @param.query.object('where', getWhereSchemaFor(Veterinarios)) where?: Where<Veterinarios>,
  ): Promise<Count> {
    return this.empresaVeterinariaRepository.veterinarios(id).patch(veterinarios, where);
  }

  @del('/empresa-veterinarias/{id}/veterinarios', {
    responses: {
      '200': {
        description: 'EmpresaVeterinaria.Veterinarios DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Veterinarios)) where?: Where<Veterinarios>,
  ): Promise<Count> {
    return this.empresaVeterinariaRepository.veterinarios(id).delete(where);
  }
}
