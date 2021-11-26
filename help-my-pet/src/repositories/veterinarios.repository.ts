import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Veterinarios, VeterinariosRelations, SolicitudVisitas, Personas} from '../models';
import {SolicitudVisitasRepository} from './solicitud-visitas.repository';
import {PersonasRepository} from './personas.repository';

export class VeterinariosRepository extends DefaultCrudRepository<
  Veterinarios,
  typeof Veterinarios.prototype.id,
  VeterinariosRelations
> {

  public readonly solicitudVisitas: HasManyRepositoryFactory<SolicitudVisitas, typeof Veterinarios.prototype.id>;

  public readonly personas: BelongsToAccessor<Personas, typeof Veterinarios.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('SolicitudVisitasRepository') protected solicitudVisitasRepositoryGetter: Getter<SolicitudVisitasRepository>, @repository.getter('PersonasRepository') protected personasRepositoryGetter: Getter<PersonasRepository>,
  ) {
    super(Veterinarios, dataSource);
    this.personas = this.createBelongsToAccessorFor('personas', personasRepositoryGetter,);
    this.registerInclusionResolver('personas', this.personas.inclusionResolver);
    this.solicitudVisitas = this.createHasManyRepositoryFactoryFor('solicitudVisitas', solicitudVisitasRepositoryGetter,);
    this.registerInclusionResolver('solicitudVisitas', this.solicitudVisitas.inclusionResolver);
  }
}
