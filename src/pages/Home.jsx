import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../api/apiClient';

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              key: API_KEY,
              q: 'computer',
              part: 'snippet',
              type: 'video',
            },
          }
        );
        console.log(res.data.items);
        setVideos(res.data.items);
      } catch (err) {
        console.log(err);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div>
      <p>All Videos</p>
      <div className="grid grid-cols-3">
        {videos.length > 0 &&
          videos.map((video, index) => {
            return (
              <div key={index}>
                <img src={video.snippet.thumbnails.default.url} />
                <p>{video.snippet.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
