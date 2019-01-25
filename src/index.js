import React from 'react';
import ReactDOM , { render } from 'react-dom';
import App from './App';
import './views/main.css';

render(
  <App />,
  document.getElementById('app')
);
module.hot.accept()
