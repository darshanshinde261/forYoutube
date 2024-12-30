import React from 'react'
import Button from "./Button"

const ButtonList = () => {
  return (
    <div className='flex m-3 gap-2 ml-52 mt-16 overflow-x-auto w-screen'>
      <Button text="all"></Button>
      <Button text="Boxing"></Button>
      <Button text="news"></Button>
      <Button text="sports"></Button>
      <Button text="Songs"></Button>
      <Button text="Cricket"></Button>
      <Button text="Anime"></Button>
    </div>
  )
}

export default ButtonList