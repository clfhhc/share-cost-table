import { getConnection } from 'typeorm/browser';
import { connectionName } from './constants';

export const createDbUrl = async (name: string = connectionName) => {
  const connection = getConnection(name);
  // @ts-ignore
  const arrayBuffer = connection.driver.export();
  const blob = new Blob([arrayBuffer], {
    type: 'application/octet-stream',
  });
  const dbUrl = URL.createObjectURL(blob);

  return dbUrl;
};

export default createDbUrl;
