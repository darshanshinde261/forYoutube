import React from 'react'
import { FaUserCircle } from "react-icons/fa"

const commentsData = [
    {
        name:"Akshay Saini",
        text:"lorem ipsum dolor sit awet, consectatur adip",
        replies:[
            {name:"Akshay Saini",
            text:"lorem ipsum dolor sit awet, consectatur adip",
            replies:[
                {name:"Akshay Saini",
                    text:"lorem ipsum dolor sit awet, consectatur adip",
                    replies:[]}
            ]}
        ]
    },
    {name:"Akshay Saini",
        text:"lorem ipsum dolor sit awet, consectatur adip",
        replies:[]}
];

const Comment = ({data}) => {
    const {name,text,replies} = data;
    return <div className='flex shadow-sm bg-gray-400 p-2 rounded-md my-2'>
        <FaUserCircle className='w-8 h-8'/>
        <div className='p-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>;
};

const CommentsList = ({comments}) => {
    return 
        (<>
           { comments.map((comment,index) =>
                (
                <div key={index}>
                    <Comment data={comment}/>
                    <div className='ml-5 pl-5 border border-l-black'>
                        <CommentsList comments={comment.replies}/>
                    </div>
                </div>
                )
            )}
        </>
        )
    
}
const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        <CommentsList comments={commentsData}></CommentsList>
    </div>
  );
};

export default CommentContainer;