import {useState, useEffect} from 'react';
import styles from './app.module.css';
import Navbar from './components/navbar/navbar';
import VideoList from './components/videoList/videoList';
import SearchHeader from './components/searchHeader/searchHheader';
import VideoDetail from './components/videoDetail/videoDetail';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <SearchHeader onSearch={search} />
      <Navbar />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} />
        </div>
      </section>
    </>
  );
}

export default App;
