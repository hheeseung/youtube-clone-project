import React from 'react';
import styles from './videoDetail.module.css';

const VideoDetail = ({video, video: {snippet}}) => {
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type='text/html'
        width='100%'
        height='700px'
        src={`https://www.youtube.com/embed/${video.id}`}
        allowFullScreen
      ></iframe>
      <div className={styles.channelInfo}>
        <h1 className={styles.title}>{snippet.title}</h1>
        <div className={styles.channel}>
          <div className={styles.channelGroup}>
            <div className={styles.channelThumbnail}></div>
            <h4 className={styles.channelTitle}>{snippet.channelTitle}</h4>
          </div>
          <div>
            <button className={styles.subscribe}>Subscribe</button>
          </div>
        </div>
      </div>
      <pre className={styles.publishedAt}>
        {snippet.publishedAt.substring(0, 10)}
      </pre>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
