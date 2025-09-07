import React, { useEffect } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { LOGO } from '../utils/constant';
import { FaUserCircle } from "react-icons/fa"
import { CiSearch } from "react-icons/ci";
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import {YOUTUBE_SEARCH_API} from '../utils/constant';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState("");
  const searchCache = useSelector((state)=>state.search);
  useEffect(() =>{
    // API CALL
    let timer = null;
    if(searchQuery.length > 0){
      setSuggestions(true);
    }
    const cache = searchCache[searchQuery];
    if(cache){
      setSuggestions(cache);
    }
    
    else{
      timer = setTimeout(()=>getSearchSuggestions(),400);
    }
    return () =>{
      clearTimeout(timer);
    }
  },[searchQuery]);

  const getSearchSuggestions = async()=>{
    // const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    // const jsonData = await data.json();
    // console.log(jsonData);
    // setSuggestions(jsonData[1]);
    // dispatch(cacheResults({searchQuery:json[1]}));
  }
 
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  };
  const handleSearch = () =>{
    navigate(`/results?q=${searchQuery}`);
  }
  return (

    <div className='flex bg-white  fixed overflow-y-hidden items-center p-4 mt-0 w-screen h-16'>
        <div className='flex gap-3 items-center'>
            <CiMenuBurger className='h-5 w-6 cursor-pointer ' onClick={()=>toggleMenuHandler()}/>
            <img src={LOGO} alt="Youtube" className='h-5 w-30'/>
        </div>
        <div className='flex items-center ml-[300px]'>
            <input type="text" placeholder='Search' className='border-2 rounded-l-full p-2 h-10 outline-none w-[530px]'
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className=' border-2 h-10 outline-none border-l-0 px-3 rounded-r-full '
            onClick={handleSearch}
            ><CiSearch /></button>
        </div>
        <div className='ml-auto mr-5'>
            <FaUserCircle className='h-8 w-8' />
        </div>
    </div>
  )
}

export default Head