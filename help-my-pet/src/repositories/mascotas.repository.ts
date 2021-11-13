import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Mascotas, MascotasRelations, SolicitudVisitas} from '../models';
import {SolicitudVisitasRepository} from './solicitud-visitas.repository';

export class MascotasRepository extends DefaultCrudRepository<
  Mascotas,
  typeof Mascotas.prototype.id,
  MascotasRelations
> {

  public readonly solicitudVisitas: HasManyRepositoryFactory<SolicitudVisitas, typeof Mascotas.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('SolicitudVisitasRepository') protected solicitudVisitasRepositoryGetter: Getter<SolicitudVisitasRepository>,
  ) {
    super(Mascotas, dataSource);
    this.solicitudVisitas = this.createHasManyRepositoryFactoryFor('solicitudVisitas', solicitudVisitasRepositoryGetter,);
    this.registerInclusionResolver('solicitudVisitas', this.solicitudVisitas.inclusionResolver);
  }
}
