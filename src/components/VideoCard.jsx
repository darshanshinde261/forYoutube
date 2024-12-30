import React from 'react'

const VideoCard = ({info}) => {
    if(!info){
        return null
    }
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
    
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64 m-2">
            {/* Thumbnail Image */}
            <img src={thumbnails.medium.url} alt="Thumbnail" className="w-full h-40 object-cover rounded-lg" />
            
            {/* Video Details */}
            <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 truncate">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{channelTitle}</p>
                <p className="text-xs text-gray-500 mt-2">{statistics.viewCount} views</p>
            </div>
        </div>
  )
}

export default VideoCard