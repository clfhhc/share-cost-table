import React, { FC, useEffect } from 'react';
import loadScript from '../../utils/common/loadScript';

/* global gapi */

interface Props {
  gapiLoaded: boolean;
  isSignedIn: boolean;
  apiKey: string;
  clientId: string;
  discoveryDocs?: string[];
  scope: string;
  updateGapiIsLoaded(): void;
  updateGoogleSigninStatus(isSignedIn: boolean): void;
}

const GoogleSignIn: FC<Props> = ({
  gapiLoaded,
  isSignedIn,
  apiKey,
  clientId,
  discoveryDocs = ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
  scope,
  updateGapiIsLoaded,
  updateGoogleSigninStatus,
}) => {
  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const initClient = () => {
    gapi.client
      .init({
        apiKey,
        clientId,
        discoveryDocs,
        scope,
      })
      .then(() => {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateGoogleSigninStatus);
        updateGapiIsLoaded();
        updateGoogleSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleClientLoad = () => {
    gapi.load('client:auth2', initClient);
  };

  useEffect(() => {
    loadScript([
      {
        id: 'gapi',
        url: 'https://apis.google.com/js/api.js',
        parent: document.getElementsByTagName('head').item(0) as HTMLElement,
        callback: handleClientLoad,
      },
    ]);
  }, []);

  return (
    <div>
      {gapiLoaded &&
        (isSignedIn ? (
          <button type="button" onClick={handleSignoutClick}>
            Sign Out
          </button>
        ) : (
          <button type="button" onClick={handleAuthClick}>
            Authorize
          </button>
        ))}
      <p>{`apiLoaded: ${gapiLoaded}`}</p>
      <p>{`signedIn: ${isSignedIn}`}</p>
    </div>
  );
};

export default GoogleSignIn;
