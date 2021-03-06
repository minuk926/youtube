import React, {MouseEventHandler} from 'react';
import styles from './video_item.module.css';
import {IProp} from '../../service/youtube';
import VideoDetail from '../video_detail/video_detail';

interface IThumbnail {
  url: string;
  width: number;
  height: number;
}
export interface IVideo {
  video: IVideoItem;
  onSelectedVideo: () => void;
}
export interface IVideoItem extends IProp {
  id: string;
  kind: string;
  etag: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    title: string;
    description: string;
    tags: string[];
    thumbnails: {
      title: string;
      default: IThumbnail;
      standard: IThumbnail;
      high: IThumbnail;
      medium: IThumbnail;
      maxres: IThumbnail;
    };
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
    publishedAt: string;
    publishTime: string;
  };
}

function VideoItem({video: {snippet}, onSelectedVideo}: IVideo) {
  const handleSelectedVideo = (e: any) => {
    onSelectedVideo();
  };

  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img
          onClick={handleSelectedVideo}
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
}

export default VideoItem;
