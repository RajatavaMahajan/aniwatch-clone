import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  return (
    <div className=' flex justify-between gap-2 w-full h-[50px] text-black'>
        <div className=' flex-grow'><input type="text" className=' w-full h-full rounded-full px-4' placeholder='Search anime...' /></div>
        <div className=' bg-[#ffdd95] rounded-[50%] h-[50px] w-[50px] flex items-center justify-center cursor-pointer'>
          <SearchIcon fontSize='medium'/>
        </div>
    </div>
  )
}

export default SearchBar