import React from 'react';
import styles from '../style/videolist.module.css';
import VideoItem from './videoItem';

const VideoList = ({videos}) => {
  return (
    <ul>
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
