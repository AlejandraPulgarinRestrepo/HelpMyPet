import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {RegistroVisitas, RegistroVisitasRelations, SolicitudVisitas} from '../models';
import {SolicitudVisitasRepository} from './solicitud-visitas.repository';

export class RegistroVisitasRepository extends DefaultCrudRepository<
  RegistroVisitas,
  typeof RegistroVisitas.prototype.id,
  RegistroVisitasRelations
> {

  public readonly solicitudVisitas: HasOneRepositoryFactory<SolicitudVisitas, typeof RegistroVisitas.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('SolicitudVisitasRepository') protected solicitudVisitasRepositoryGetter: Getter<SolicitudVisitasRepository>,
  ) {
    super(RegistroVisitas, dataSource);
    this.solicitudVisitas = this.createHasOneRepositoryFactoryFor('solicitudVisitas', solicitudVisitasRepositoryGetter);
    this.registerInclusionResolver('solicitudVisitas', this.solicitudVisitas.inclusionResolver);
  }
}
