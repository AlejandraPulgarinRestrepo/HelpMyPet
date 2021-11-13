import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Veterinarios, VeterinariosRelations, SolicitudVisitas} from '../models';
import {SolicitudVisitasRepository} from './solicitud-visitas.repository';

export class VeterinariosRepository extends DefaultCrudRepository<
  Veterinarios,
  typeof Veterinarios.prototype.id,
  VeterinariosRelations
> {

  public readonly solicitudVisitas: HasManyRepositoryFactory<SolicitudVisitas, typeof Veterinarios.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('SolicitudVisitasRepository') protected solicitudVisitasRepositoryGetter: Getter<SolicitudVisitasRepository>,
  ) {
    super(Veterinarios, dataSource);
    this.solicitudVisitas = this.createHasManyRepositoryFactoryFor('solicitudVisitas', solicitudVisitasRepositoryGetter,);
    this.registerInclusionResolver('solicitudVisitas', this.solicitudVisitas.inclusionResolver);
  }
}
