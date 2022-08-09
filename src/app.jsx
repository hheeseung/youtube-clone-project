import {useState, useEffect} from 'react';
import './app.module.css';
import Navbar from './components/navbar/navbar';
import VideoList from './components/videoList/videoList';
import SearchHeader from './components/searchHeader/searchHheader';

function App() {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&key=AIzaSyCz_IZxE2aLJTiSCcyb0VUrqFyBQEh64KY`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({...item, id: item.id.videoId}))
      )
      .then((items) => setVideos(items));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=KR&key=AIzaSyCz_IZxE2aLJTiSCcyb0VUrqFyBQEh64KY',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items));
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
