import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[]);
    const [searchParams] = useSearchParams();
  return (
    <div className='flex'>
      <div className='flex flex-col'>
        <div>
          <iframe width="900" height="450"
          src={"https://www.youtube.com/embed/"+searchParams?.get("v") }
          title="YouTube video player" 
          frameBorder="0" 
          className='aspect-video mt-20 ml-10 rounded-xl'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen></iframe>
        </div>
        <div>
          <CommentContainer></CommentContainer>
        </div>
        </div>
      <div>
        <LiveChat></LiveChat>
      </div>
    </div>
    
  )
}

export default WatchPage