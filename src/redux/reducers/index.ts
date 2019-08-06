import { ReducersMapObject } from 'redux';
import googleDrive, { initialState as googleDriveInitialState } from './googleDrive';

export const defaultState = {
  // add common initialStates here
  googleDrive: googleDriveInitialState,
};

const commonReducers: ReducersMapObject<typeof defaultState> = {
  // add common reducers here
  googleDrive,
};

export default commonReducers;
