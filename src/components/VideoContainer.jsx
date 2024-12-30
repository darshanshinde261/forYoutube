import React, { useEffect } from 'react'
import { YOUTUBE_API } from '../utils/constant'
import VideoCard from './VideoCard';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos] = useState([])
  const getvideos = async()=>{
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  }
  useEffect(() =>{
    getvideos()
  },[])
  return (
    <div className='flex flex-wrap ml-48 mt-1'>
      {videos &&
       videos.map((video,index) => 
        <Link to={"/watch?v=" + video.id}><VideoCard info={video} key={index}></VideoCard></Link>)}
       
    </div>
  )
}

export default VideoContainer