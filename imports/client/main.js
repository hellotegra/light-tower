import React from 'react';
import { Provider } from 'react-redux';
import store from './store'

import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import AppRouter from './router';

export const Main = () => (
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <AppRouter/>
    </LocaleProvider>
  </Provider>
);
