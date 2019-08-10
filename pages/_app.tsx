import localforage from 'localforage';
import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux, { StoreProps } from '../src/utils/redux/withRedux';
import { ActionWithPayload } from '../src/utils/redux/types';
import withReduxSaga from '../src/utils/redux/withReduxSaga';
import initStore, { Store } from '../src/redux/store';

declare global {
  interface Window {
    localforage: LocalForage;
  }
}

class MyApp extends App<StoreProps<Store>> {
  public componentDidMount() {
    window.localforage = localforage;
  }

  public render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux<ActionWithPayload, Store>(initStore)(
  withReduxSaga<ActionWithPayload, Store>(MyApp)
);
