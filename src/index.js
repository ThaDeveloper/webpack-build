/* eslint-disable import/no-self-import, import/no-unresolved */
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './views/main.css';

render(
  <App />,
  document.getElementById('app'),
);
module.hot.accept();
