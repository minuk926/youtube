import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { Youtube } from './service/youtube';

//const youtube = new Youtube('AIzaSyCTpUx32TR3DuU3UQZn6GjYF7qCtMDfrj8');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
