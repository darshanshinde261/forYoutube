import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateName } from '../utils/helper'
import { generateRandomMessage } from '../utils/helper'


const LiveChat = () => {
    const [liveMessage,setLiveMessage] = useState("")
    const dispatch = useDispatch();
    const Messages = useSelector((state)=>state.chat?.messages);
    console.log(Messages)
    useEffect(()=>{
        const time = setInterval(()=>{
            //api polling
            dispatch(addMessage({
                name:generateName(),
                message:generateRandomMessage(20),
            }));
        },2000);
        return () => clearInterval(time)
    },[])
  return (
    <>
    <div className='m-4 mt-20 h-[570px] w-[500px] p-2 rounded-lg bg-slate-100 border border-black ml-2'>
        
        {  Messages &&
            Messages.map((c,i)=>(
                <div>
                    <ChatMessage key={i} name={c?.name} message={c?.message}></ChatMessage>
                </div>
                
            ))
        }
    </div>
    <form className='w-full h-16 p-2 mt-2 border border-black' onSubmit={(e)=>
        {e.preventDefault();
        dispatch(addMessage({
            name:"Darshan Shinde",
            message:liveMessage,
        }));
        setLiveMessage("");
    }
    }>
        <input type="text" className='w-96 px-2  border border-black outline-none' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} />
        <button className='px-2 py-1 hover:scale-105 transition-all duration-300 mx-2 bg-green-300'>Send</button>
    </form>
    </>
  )
}

export default LiveChat