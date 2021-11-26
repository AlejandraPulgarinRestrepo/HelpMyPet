import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Duenos, DuenosRelations, Mascotas, SolicitudVisitas, Personas} from '../models';
import {MascotasRepository} from './mascotas.repository';
import {SolicitudVisitasRepository} from './solicitud-visitas.repository';
import {PersonasRepository} from './personas.repository';

export class DuenosRepository extends DefaultCrudRepository<
  Duenos,
  typeof Duenos.prototype.id,
  DuenosRelations
> {

  public readonly mascotas: HasManyRepositoryFactory<Mascotas, typeof Duenos.prototype.id>;

  public readonly solicitudVisitas: HasManyRepositoryFactory<SolicitudVisitas, typeof Duenos.prototype.id>;

  public readonly personas: BelongsToAccessor<Personas, typeof Duenos.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('MascotasRepository') protected mascotasRepositoryGetter: Getter<MascotasRepository>, @repository.getter('SolicitudVisitasRepository') protected solicitudVisitasRepositoryGetter: Getter<SolicitudVisitasRepository>, @repository.getter('PersonasRepository') protected personasRepositoryGetter: Getter<PersonasRepository>,
  ) {
    super(Duenos, dataSource);
    this.personas = this.createBelongsToAccessorFor('personas', personasRepositoryGetter,);
    this.registerInclusionResolver('personas', this.personas.inclusionResolver);
    this.solicitudVisitas = this.createHasManyRepositoryFactoryFor('solicitudVisitas', solicitudVisitasRepositoryGetter,);
    this.registerInclusionResolver('solicitudVisitas', this.solicitudVisitas.inclusionResolver);
    this.mascotas = this.createHasManyRepositoryFactoryFor('mascotas', mascotasRepositoryGetter,);
    this.registerInclusionResolver('mascotas', this.mascotas.inclusionResolver);
  }
}
