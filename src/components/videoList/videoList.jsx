import React from 'react';
import styles from './videolist.module.css';
import VideoItem from '../videoItem/videoItem';

const VideoList = ({videos}) => {
  return (
    <ul className={styles.videolist}>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
