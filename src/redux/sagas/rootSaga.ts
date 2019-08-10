import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { Connection } from 'typeorm/browser';
import actionTypes from '../actions/actionTypes';
import { updateDBUrl, udpateDBFile } from '../actions/actions';
import { loadDbFromFile } from '../../sql/utils/connection';
import readAsArrayBuffer from '../../utils/common/readAsArrayBuffer';
import { createDbUrl as creatDbUrlFunc } from '../../sql/utils/export';
import { ActionWithPayload } from '../../utils/redux/types';
// import { Hello } from '../../sql/entities/hello';

export function* createDbUrl(action: ActionWithPayload) {
  try {
    const url = yield call(creatDbUrlFunc, action.payload);
    yield put(updateDBUrl(url));
  } catch (error) {
    console.error(error);
  }
}

export function* loadDbFile(action: ActionWithPayload) {
  try {
    const uInt8Array = new Uint8Array(yield call(readAsArrayBuffer, action.payload.file));
    const connection = (yield call(loadDbFromFile, uInt8Array, action.payload.name)) as Connection;
    const helloRepository = yield call([connection, 'getRepository'], 'hello');
    const allRecord = yield call([helloRepository, 'find']);
    yield put(udpateDBFile(JSON.stringify(allRecord)));
  } catch (error) {
    console.error(error);
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.CREATE_DB_URL, createDbUrl),
    takeEvery(actionTypes.LOAD_DB, loadDbFile),
  ]);
}

export default rootSaga;
