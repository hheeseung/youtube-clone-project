import {useState, useEffect} from 'react';
import './app.module.css';
import Header from './components/header';
import Navbar from './components/navbar';
import VideoList from './components/videoList';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCz_IZxE2aLJTiSCcyb0VUrqFyBQEh64KY',
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
