import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, fetchVideos } from '../api/apiClient';

function VideoDetails() {
  const params = useParams();
  const [videoDetails, setVideoDetails] = useState({});
  const [recomndedVideos, setRecomndedVideo] = useState([]);
  console.log(params);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${params.id}&key=${API_KEY}`
        );
        console.log(res.data.items[0]);
        setVideoDetails(res.data.items[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchVideoDetails();
  }, []);

  useEffect(() => {
    const getRecVideos = async () => {
      try {
        const res = await fetchVideos('song');
        setRecomndedVideo(res.data.items);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getRecVideos();
  }, []);

  return (
    <div className="bg-gradient-to-t from-black  to-gray-900">
      <div className="flex flex-col lg:flex-row gap-3 max-w-7xl container mx-auto px-3 py-10">
        <div className="w-full lg:w-2/3">
          <iframe
            src={`https://www.youtube.com/embed/${params.id}`}
            className="w-full h-96 lg:h-[500px]"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {videoDetails.snippet && (
            <div className="text-white">
              <h3 className="text-xl font-semibold py-2">
                {videoDetails.snippet.title}
              </h3>
              <h3 className="text-justify py-4">
                {videoDetails.snippet.description}
              </h3>
            </div>
          )}
        </div>
        <div className="lg:w-1/3">
          {recomndedVideos.length > 0 && (
            <div>
              {recomndedVideos.map((video, index) => {
                return (
                  <div key={index} className="flex gap-2 items-center">
                    
                    <img src={video.snippet.thumbnails.medium.url}className="aspect-video w-1/3"/>
                    <h3 className="font-semibold text-white">
                      {video.snippet.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;