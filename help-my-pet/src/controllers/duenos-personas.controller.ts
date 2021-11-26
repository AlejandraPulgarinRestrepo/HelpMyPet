import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Duenos,
  Personas,
} from '../models';
import {DuenosRepository} from '../repositories';

export class DuenosPersonasController {
  constructor(
    @repository(DuenosRepository)
    public duenosRepository: DuenosRepository,
  ) { }

  @get('/duenos/{id}/personas', {
    responses: {
      '200': {
        description: 'Personas belonging to Duenos',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Personas)},
          },
        },
      },
    },
  })
  async getPersonas(
    @param.path.string('id') id: typeof Duenos.prototype.id,
  ): Promise<Personas> {
    return this.duenosRepository.personas(id);
  }
}
