import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  if(!isMenuOpen){
    return null
  }
  return (
    <div className='p-5 py-4 mt-12 bg-white shadow-lg min-w-48 min-h-screen fixed'>
      <ul className='flex flex-col gap-2'>
        <Link to="/">Home</Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li className='border-b-2 pb-2'>Live</li>
      </ul>
      <h1 className='font-bold pt-2'>Subscription</h1>
      <ul className='flex flex-col gap-2'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gamming</li>
        <li className='border-b-2 pb-2'>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul className='flex flex-col gap-2'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gamming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar