import { getConnection, Connection, getConnectionManager } from 'typeorm/browser';
import { SqljsDriver } from 'typeorm/browser/driver/sqljs/SqljsDriver';
import { connectionName } from './constants';
import { Hello } from '../entities/Hello';

enum DatabaseSource {
  LOCAL = 'LOCAL',
  FILE = 'FILE',
}

function createDatabaseConnection(this: SqljsDriver): Promise<any> {
  // @ts-ignore
  if (this.options.dbSource === DatabaseSource.LOCAL && this.options.location) {
    return this.load(this.options.location, false);
  }

  return this.createDatabaseConnectionWithImport(this.options.database);
}

export const connectDb = async (name: string = connectionName) => {
  let connection: Connection;
  try {
    connection = getConnection(name);
  } catch (error) {
    connection = getConnectionManager().create({
      type: 'sqljs',
      name,
      location: name,
      entities: [Hello],
      useLocalForage: true,
      logging: ['query', 'schema'],
      // @ts-ignore
      dbSource: DatabaseSource.LOCAL,
    });
    // @ts-ignore
    connection.driver.createDatabaseConnection = createDatabaseConnection;
    await connection.connect();
  }
  return connection;
};

export const closeDb = (name: string = connectionName) => {
  try {
    const connection = getConnection(name);
    return connection.close();
  } catch (error) {
    return null;
  }
};

export const removeDb = async (name: string = connectionName) => {
  try {
    await closeDb(name);
    return window.localforage.removeItem(name);
  } catch (error) {
    return null;
  }
};

export const loadDbFromFile = async (database: Uint8Array, name: string = connectionName) => {
  await removeDb();
  const connection = getConnectionManager().create({
    type: 'sqljs',
    database,
    name,
    location: name,
    entities: [Hello],
    useLocalForage: true,
    logging: ['query', 'schema'],
    // @ts-ignore
    dbSource: DatabaseSource.FILE,
  });
  // @ts-ignore
  connection.driver.createDatabaseConnection = createDatabaseConnection;
  await connection.connect();
  return connection;
};
