import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { YOUTUBE_DATA_API } from '../utils/constant';
import { useState } from 'react';

const SearchPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [data,setData] = useState(null);
    const handleSearch = async()=>{
        const url = YOUTUBE_DATA_API+query+`&key=`+import.meta.env.VITE_API_KEY;;
        console.log(url)
        const data = await fetch(url);
        const result = await data.json();
        setData(result.items)
    }
    const handleClick = (video)=>{
       navigate(`/watch?v=${video?.id?.videoId}`)
    }
    useEffect(() =>{
        handleSearch();
    },[])
    if(!data){
        return
    }
    console.log(data[0])
  return (
    <div className='w-screen  ml-48 mt-12 overflow-y-auto'>
        {data &&
                data.map((d)=>{
                    return(
                        <div className='w-full h-42 p-2 flex gap-5' onClick={()=>handleClick(d)}>
                            <img src={d?.snippet?.thumbnails?.medium?.url} alt="img"
                            className='min-w-80 object-cover rounded-xl' />
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-xl font-bold'>{d?.snippet?.title}</h1>
                                <p>{d?.snippet?.description}</p>
                            </div>
                        </div>
                    )
                })}
        
    </div>
  )
}

export default SearchPage