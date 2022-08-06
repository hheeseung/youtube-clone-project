import React from 'react';
import styles from '../style/videoItem.module.css';

const VideoItem = ({video}) => {
  return (
    <li className={styles.videoItem}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt='thumbnail'
        className={styles.thumbnail}
      />
      <p className={styles.title}>{video.snippet.title}</p>
      <p className={styles.channel}>{video.snippet.channelTitle}</p>
    </li>
  );
};

export default VideoItem;
