import {useState, useEffect, useCallback} from 'react';
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

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => {
          if (!query) {
            return;
          }
          setVideos(videos);
        });
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

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
