import {useState, useEffect} from 'react';
import './app.module.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import VideoList from './components/videoList/videoList';

function App() {
  const [videos, setVideos] = useState([]);

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
      <Header />
      <Navbar />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
