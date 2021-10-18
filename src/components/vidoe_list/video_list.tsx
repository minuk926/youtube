import React from 'react';
import VideoItem, { IVideoItem } from '../video_item/video_item';
import styles from './video_list.module.css';

interface IVideoList {
  videos: IVideoItem[];
}

const VideoList = (props: IVideoList) => {
  return (
    <ul className={styles.videos}>
      {props.videos.map(video => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
