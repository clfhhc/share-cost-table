import { getConnection, Table } from 'typeorm/browser';
import { connectionName } from './constants';

export const createTableFromEntity = (entity: any, name: string = connectionName) => {
  const connection = getConnection(name);
  const queryRunner = connection.createQueryRunner('master');
  const metadata = connection.getMetadata(entity);
  const newTable = Table.create(metadata, connection.driver);
  return queryRunner.createTable(newTable);
};

export default createTableFromEntity;
