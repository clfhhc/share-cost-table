import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import getConfig from 'next/config';
import ManifestHead from '../src/components/Head/ManifestHead';
import GoogleSignIn from '../src/components/GoogleSignIn';
import { defaultState } from '../src/redux/reducers/index';
import {
  updateGapiIsLoaded as updateGapiIsLoadedAction,
  updateGoogleSigninStatus as updateGoogleSigninStatusAction,
} from '../src/redux/actions/actions';

const { publicRuntimeConfig } = getConfig();
const { apiKey, clientId } = publicRuntimeConfig;
const scope = 'https://www.googleapis.com/auth/drive.metadata.readonly';

const mapStateToProps = (state: typeof defaultState) => ({
  googleDrive: state.googleDrive,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateGapiIsLoaded: () => dispatch(updateGapiIsLoadedAction()),
  updateGoogleSigninStatus: (isSignedIn: boolean) =>
    dispatch(updateGoogleSigninStatusAction(isSignedIn)),
});

interface Props extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> {}

export const Page: FC<Props> = ({ googleDrive, updateGapiIsLoaded, updateGoogleSigninStatus }) => {
  return (
    <main>
      <ManifestHead
        title="Nextjs Typescript Eslint"
        themeColor="red"
        hrefCanonical="/"
        favIconPath="/static/icons/favicon.ico"
        appleIconPath="/static/icons/icon192x192.png"
        hrefManifest="/static/manifest/manifest.json"
      />
      <GoogleSignIn
        gapiLoaded={googleDrive.gapiLoaded}
        isSignedIn={googleDrive.googleSignedIn}
        apiKey={apiKey}
        clientId={clientId}
        scope={scope}
        updateGapiIsLoaded={updateGapiIsLoaded}
        updateGoogleSigninStatus={updateGoogleSigninStatus}
      />
    </main>
  );
};

const ConnectedPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default ConnectedPage;
