import axios from 'axios';

export const API_KEY = 'AIzaSyBOjeYsun-vFUznS_Gani326S0Bpzfi3W4';

export const fetchVideos = (search) => {
  return axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      key: API_KEY,
      q: search,
      part: 'snippet',
      type: 'video',
      maxResults: 10,
    },
  });
};

