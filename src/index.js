import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import CounterContainer from './commonComponent/CounterContainer/CounterContainer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <CounterContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
