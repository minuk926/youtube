import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/vidoe_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log('App useEffect');
    reqApi();
  }, []);

  const reqApi = () => {
    const requestOptions: any = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCTpUx32TR3DuU3UQZn6GjYF7qCtMDfrj8', requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  };

  return <VideoList videos={videos} />;
}

export default App;
