import {useState, useEffect} from 'react';
import './app.module.css';
import Navbar from './components/navbar/navbar';
import VideoList from './components/videoList/videoList';
import SearchHeader from './components/searchHeader/searchHheader';

function App({youtube}) {
  const [videos, setVideos] = useState([]);

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
      <VideoList videos={videos} />
    </>
  );
}

export default App;
