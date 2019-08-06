import actionTypes from './actionTypes';

export const addNumber = (num: number) => ({
  type: actionTypes.ADD,
  payload: num,
});

export const minusNumber = (num: number) => ({
  type: actionTypes.MINUS,
  payload: num,
});

export const updateGapiIsLoaded = () => ({
  type: actionTypes.UPDATE_GAPI_IS_LOADED,
  payload: true,
});

export const updateGoogleSigninStatus = (isSignedIn: boolean) => ({
  type: actionTypes.UPDATE_GOOGLE_SIGNED_IN,
  payload: isSignedIn,
});
