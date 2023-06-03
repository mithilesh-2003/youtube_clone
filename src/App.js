import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { API_KEY } from './api/apiClient';
import Navbar from './components/Navbar';
import PageNotFound from './PageNotFound';
import Home from './pages/Home';
import VideoDetails from './pages/VideoDetails';
import Videos from './pages/Videos';

function App() {
  const [videos, setVideos] = useState([]);
  const handleSearch = async (search) => {
    try {
      const res = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            key: API_KEY,
            q: search,
            part: 'snippet',
            type: 'video',
            maxResults: 10,
          },
        }
      );
      console.log(res.data.items);
      setVideos(res.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const searches = [
      'song',
      'movies',
      'comedy',
      'programming',
      'computer',
      'mobile',
      'home',
    ];
    const input = searches[Math.floor(Math.random() * searches.length)];
    console.log(input);
    handleSearch(input);
  }, []);

  return (
    <div>
      <Navbar searchVideo={handleSearch} />
      <Routes>
        <Route path="/" element={<Home videos={videos} />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/videos/:id" element={<VideoDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
