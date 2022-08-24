import React, {memo} from 'react';
import styles from './videoItem.module.css';

const VideoItem = memo(({video, video: {snippet}, onVideoClick}) => {
  return (
    <li
      className={styles.videoItem}
      onClick={() => {
        onVideoClick(video);
        window.scrollTo(0, 0);
      }}
    >
      <img
        src={snippet.thumbnails.medium.url}
        alt='thumbnail'
        className={styles.thumbnail}
      />
      <p className={styles.title}>{snippet.title}</p>
      <p className={styles.channel}>{snippet.channelTitle}</p>
    </li>
  );
});

export default VideoItem;
