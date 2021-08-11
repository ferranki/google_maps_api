import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import TitleComponent from './infrastructure/components/title';

ReactDOM.render(
  <React.StrictMode>
    <TitleComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
