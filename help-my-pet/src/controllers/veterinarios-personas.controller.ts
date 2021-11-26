import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Veterinarios,
  Personas,
} from '../models';
import {VeterinariosRepository} from '../repositories';

export class VeterinariosPersonasController {
  constructor(
    @repository(VeterinariosRepository)
    public veterinariosRepository: VeterinariosRepository,
  ) { }

  @get('/veterinarios/{id}/personas', {
    responses: {
      '200': {
        description: 'Personas belonging to Veterinarios',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Personas)},
          },
        },
      },
    },
  })
  async getPersonas(
    @param.path.string('id') id: typeof Veterinarios.prototype.id,
  ): Promise<Personas> {
    return this.veterinariosRepository.personas(id);
  }
}
