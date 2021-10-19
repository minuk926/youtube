import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/vidoe_list/video_list';
import SearchHeader from './components/search_header/search_header';
import { Youtube } from './service/youtube';

function App() {
  // AIzaSyCTpUx32TR3DuU3UQZn6GjYF7qCtMDfrj8
  const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY!);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log('App useEffect');
    // @ts-ignore
    youtube.mostPopular().then(videos => setVideos(videos));
  }, []);

  const handleSearch = (text: string) => {
    console.log(text);

    //useEffect(() => {
    // @ts-ignore
    youtube.search(text).then(videos => setVideos(videos));
    //}, [text]);
  };

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={handleSearch} />
      <VideoList videos={videos} onSearch={handleSearch} />;
    </div>
  );
}

export default App;
