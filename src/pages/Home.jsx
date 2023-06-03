import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ videos }) {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-200">
      <div className="max-w-7xl container mx-auto px-3 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2 xl:gap-x-5 gap-y-10">
          {videos.length > 0 &&
            videos.map((video, index) => {
              return (
                <div
                  key={index}
                  onClick={() => navigate(`/videos/${video.id.videoId}`)}
                  className="cursor-pointer hover:shadow-2xl rounded-3xl"
                >
                  <img
                    src={video.snippet.thumbnails.high.url}
                    alt="video_thumbnail"
                    className="aspect-video h-52 w-full rounded-t-3xl"
                  />
                  <p className="font-semibold p-2 text-gray-600 hover:text-gray-900">
                    {video.snippet.title}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
