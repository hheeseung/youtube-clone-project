import React from 'react';
import styles from './videoItem.module.css';

const VideoItem = ({video: {snippet}}) => {
  return (
    <li className={styles.videoItem}>
      <img
        src={snippet.thumbnails.medium.url}
        alt='thumbnail'
        className={styles.thumbnail}
      />
      <p className={styles.title}>{snippet.title}</p>
      <p className={styles.channel}>{snippet.channelTitle}</p>
    </li>
  );
};

export default VideoItem;
