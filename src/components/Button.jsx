import React, { useState } from 'react'


const Button = ({text}) => {
    const [active,setActive] = useState(false);
    const handleClick = () =>{
        setActive(!active)
    }
  return (
    <div>
        <button className={`px-4 py-1 rounded-lg font-semibold text-md ${active ? 'bg-black text-white':'bg-gray-100'}`}
        onClick={()=>handleClick()}>{text}</button>
    </div>
  )
}

export default Button