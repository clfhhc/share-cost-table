import { Reducer } from 'redux';
import actionTypes from '../actions/actionTypes';

export const initialState = {
  gapiLoaded: false,
  googleSignedIn: false,
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_GAPI_IS_LOADED: {
      return {
        ...state,
        gapiLoaded: action.payload,
      };
    }
    case actionTypes.UPDATE_GOOGLE_SIGNED_IN: {
      return {
        ...state,
        googleSignedIn: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
