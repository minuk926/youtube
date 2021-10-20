import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { Youtube } from './service/youtube';

// .둪 : REACT_APP_YOUTUBE_API_KEY=AIzaSyCTpUx32TR3DuU3UQZn6GjYF7qCtMDfrj8
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY!);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
