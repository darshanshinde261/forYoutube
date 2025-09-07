import React, { useEffect, useRef, useCallback, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  const getVideos = useCallback(async (pageToken = '') => {
    setLoading(true);
    const url = pageToken
      ? `${YOUTUBE_API}&pageToken=${pageToken}`
      : YOUTUBE_API;
    const data = await fetch(url);
    const json = await data.json();
    setVideos(prev => [...prev, ...json.items]);
    setNextPageToken(json.nextPageToken);
    setLoading(false);
  }, []);

  useEffect(() => {
    getVideos();
  }, [getVideos]);

  useEffect(() => {
    if (!loader.current) return;
    const observer = new window.IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && nextPageToken && !loading) {
          getVideos(nextPageToken);
        }
      },
      { threshold: 1 }
    );
    observer.observe(loader.current);
    return () => observer.disconnect();
  }, [nextPageToken, loading, getVideos]);

  return (
    <div className='flex flex-wrap ml-48 mt-1'>
      {videos &&
        videos.map((video, index) =>
          <Link to={"/watch?v=" + video.id} key={video.id || index}>
            <VideoCard info={video} />
          </Link>
        )}
      <div ref={loader} style={{ height: 40, width: '100%' }}>
        {loading && <p>Loading...</p>}
      </div>
    </div>
  )
}

export default VideoContainer