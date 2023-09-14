import React from 'react'
import {VideoStream,VideoControls} from './index';
const AnimeStream = () => {
  return (
    <div className=' w-1/2 h-full grid grid-rows-[60%,40%]'>    
        <VideoStream/>
        <VideoControls/>
    </div>
  )
}

export default AnimeStream