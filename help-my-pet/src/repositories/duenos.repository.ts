import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Duenos, DuenosRelations, Mascotas, SolicitudVisitas} from '../models';
import {MascotasRepository} from './mascotas.repository';
import {SolicitudVisitasRepository} from './solicitud-visitas.repository';

export class DuenosRepository extends DefaultCrudRepository<
  Duenos,
  typeof Duenos.prototype.id,
  DuenosRelations
> {

  public readonly mascotas: HasManyRepositoryFactory<Mascotas, typeof Duenos.prototype.id>;

  public readonly solicitudVisitas: HasManyRepositoryFactory<SolicitudVisitas, typeof Duenos.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('MascotasRepository') protected mascotasRepositoryGetter: Getter<MascotasRepository>, @repository.getter('SolicitudVisitasRepository') protected solicitudVisitasRepositoryGetter: Getter<SolicitudVisitasRepository>,
  ) {
    super(Duenos, dataSource);
    this.solicitudVisitas = this.createHasManyRepositoryFactoryFor('solicitudVisitas', solicitudVisitasRepositoryGetter,);
    this.registerInclusionResolver('solicitudVisitas', this.solicitudVisitas.inclusionResolver);
    this.mascotas = this.createHasManyRepositoryFactoryFor('mascotas', mascotasRepositoryGetter,);
    this.registerInclusionResolver('mascotas', this.mascotas.inclusionResolver);
  }
}
