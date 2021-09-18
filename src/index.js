import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Locations from './app/locations'
import App from './app'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/locations" component={Locations} />
          <Route component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
