import {useEffect, useState} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);


       // input || default search term
        useEffect(() => {
        search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // search youtube and output list of videos
  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];

};

export default useVideos;