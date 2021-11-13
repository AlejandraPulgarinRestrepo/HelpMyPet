import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {EmpresaVeterinaria, EmpresaVeterinariaRelations, Veterinarios} from '../models';
import {VeterinariosRepository} from './veterinarios.repository';

export class EmpresaVeterinariaRepository extends DefaultCrudRepository<
  EmpresaVeterinaria,
  typeof EmpresaVeterinaria.prototype.id,
  EmpresaVeterinariaRelations
> {

  public readonly veterinarios: HasManyRepositoryFactory<Veterinarios, typeof EmpresaVeterinaria.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('VeterinariosRepository') protected veterinariosRepositoryGetter: Getter<VeterinariosRepository>,
  ) {
    super(EmpresaVeterinaria, dataSource);
    this.veterinarios = this.createHasManyRepositoryFactoryFor('veterinarios', veterinariosRepositoryGetter,);
    this.registerInclusionResolver('veterinarios', this.veterinarios.inclusionResolver);
  }
}
