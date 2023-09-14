import React from 'react'
import { logo, poster } from './assets'
import {useNavigate} from 'react-router-dom'
import { SearchBar, TopAnime, PostCard, ShareBox, CopyRight } from './components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=' bg-[rgb(36,36,40)] w-full font-popins text-white px-[159.6px] flex flex-col pb-16'>
      <div className=' flex flex-col h-full w-full pt-[60px] '>
        <div className=' flex gap-10 float-left text-[14px] tracking-widest '>
          <p>Home</p>
          <p>Movies</p>
          <p>Tv Series</p>
          <p>Most Popular</p>
          <p>Top Airing</p>
        </div>
        <div className=' flex gap-0 items-center bg-[rgb(36,36,40)]'>
          <div className=' flex flex-col w-[610px] gap-8'>
            <img src={logo} alt="" className=' h-[60px] w-[184px]' />
            <SearchBar />
            <TopAnime />
          </div>
          <div className=' w-[600px]'>
            <img src={poster} alt="" className=' w-full h-auto' />
          </div>
        </div>
        <div className=' rounded-b-3xl bg-[#ffdd95] text-center py-[15px] text-black flex justify-center items-center gap-2 cursor-pointer'onClick={()=>navigate(`/home`)}>
          <p className=' text-[20px] font-bold tracking-wider'>View Full Site</p>
          <ArrowForwardIcon />
        </div>
      </div>
      <div className=' pt-[50px]'>
        <ShareBox/>
      </div>
      <div className=' pt-[40px] flex w-full gap-3'>
        <div className=' w-2/3 pr-7'>
          <CopyRight/>
        </div>
        <div className=' w-1/3'>
          <p className=' font-bold text-[25.2px] mb-8'>Trending Posts</p>
          <div className=' flex flex-col gap-3'>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <button className=' bg-[#2f2f33] p-2 text-[12px] mt-5 rounded-[1rem] '>Read More</button>
          </div>
        </div>
      </div>
      <div>
        <p className='text-[14px] text-[#cccccc]'>© AniWatch.to. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Home