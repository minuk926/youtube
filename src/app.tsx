import React, {useEffect, useState} from 'react';
import styles from './app.module.css';
import VideoList from './components/vidoe_list/video_list';
import SearchHeader from './components/search_header/search_header';
import {Youtube} from './service/youtube';
import {IVideo, IVideoItem} from './components/video_item/video_item';
import VideoDetail from './components/video_detail/video_detail';

interface IYoutube {
  youtube: Youtube;
}

function App({youtube}: IYoutube) {
  const [videos, setVideos] = useState<IVideoItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<IVideo>();

  useEffect(() => {
    youtube.mostPopular().then((videos: IVideoItem[]) => setVideos(videos));
  }, []);

  const handleSearch = (text: string) => {
    youtube.search(text).then((videos: IVideoItem[]) => setVideos(videos));
  };

  const handleselectedVideo = (video: IVideoItem): void => {
    console.log('-----------');
    setSelectedVideo(video.snippet);
  };

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={handleSearch} />
      {selectedVideo && <VideoDetail video={selectedVideo} />}
      if(selectedVideo) else <VideoList videos={videos} onSearch={handleSearch} onSelectedVideo={handleselectedVideo} />
      ;
    </div>
  );
}

export default App;
