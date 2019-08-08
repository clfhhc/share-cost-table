import { Reducer } from 'redux';
import actionTypes from '../actions/actionTypes';

export const initialState = {
  dbUrl: '',
  dbFile: '',
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_DB_URL: {
      return {
        ...state,
        dbUrl: action.payload,
      };
    }
    case actionTypes.UPDATE_DB_FILE: {
      return {
        ...state,
        dbFile: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
