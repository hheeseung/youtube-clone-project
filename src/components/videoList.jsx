import React from 'react';
import styles from '../style/videolist.module.css';
import VideoItem from './videoItem';

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
