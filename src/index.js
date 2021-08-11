import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import TitleComponent from './infrastructure/components/title';
import AutocompleteLocationSearchInputComponent from './infrastructure/components/autocomplete-location-search-input';

ReactDOM.render(
  <React.StrictMode>
    <TitleComponent />
    <AutocompleteLocationSearchInputComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
