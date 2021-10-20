import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoList from './components/vidoe_list/video_list';
import SearchHeader from './components/search_header/search_header';
import { Youtube } from './service/youtube';
import { IVideoItem } from './components/video_item/video_item';

interface IYoutube {
  youtube: Youtube;
}

function App({ youtube }: IYoutube) {
  const [videos, setVideos] = useState<IVideoItem[]>([]);

  useEffect(() => {
    youtube.mostPopular().then((videos: IVideoItem[]) => setVideos(videos));
  }, []);

  const handleSearch = (text: string) => {
    youtube.search(text).then((videos: IVideoItem[]) => setVideos(videos));
  };

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={handleSearch} />
      <VideoList videos={videos} onSearch={handleSearch} />;
    </div>
  );
}

export default App;
