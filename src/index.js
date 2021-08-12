import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AutocompleteLocationSearchFeature from './features/AutocompleteLocationSearch';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AutocompleteLocationSearchFeature />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
