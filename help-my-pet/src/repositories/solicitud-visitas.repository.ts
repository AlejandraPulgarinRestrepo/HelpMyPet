import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {SolicitudVisitas, SolicitudVisitasRelations} from '../models';

export class SolicitudVisitasRepository extends DefaultCrudRepository<
  SolicitudVisitas,
  typeof SolicitudVisitas.prototype.id,
  SolicitudVisitasRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(SolicitudVisitas, dataSource);
  }
}
