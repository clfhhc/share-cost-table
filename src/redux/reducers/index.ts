import { ReducersMapObject } from 'redux';
import googleDrive, { initialState as googleDriveInitialState } from './googleDrive';
import db, { initialState as dbInitialState } from './db';

export const defaultState = {
  // add common initialStates here
  googleDrive: googleDriveInitialState,
  db: dbInitialState,
};

const commonReducers: ReducersMapObject<typeof defaultState> = {
  // add common reducers here
  googleDrive,
  db,
};

export default commonReducers;
