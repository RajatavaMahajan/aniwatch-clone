import React, { useState , useEffect} from 'react';
import { AnimeChart, PosterCarrousel, ShareBox, TrendingSection } from './components';
import { Home2ContextProvider } from './context';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const Home2 = () => {
  const slides = [
    <PosterCarrousel />,
    <PosterCarrousel />,
    <PosterCarrousel />,
    <PosterCarrousel />,
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide(prev=>prev+1)
  };
  const prevSlide = () => {
   setCurrentSlide(prev=>prev-1)
  };

  return (
      <div className=' w-full h-full bg-[#242428] pb-[4px]'>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${(currentSlide) * (100 / slides.length)}%)`,
            minWidth: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full">
              {slide}
            </div>
          ))}
        </div>
        <div className=' absolute bottom-0 right-0 mr-9 mb-9 flex flex-col gap-3'>
        <button onClick={nextSlide} className={` w-12 h-12 rounded-lg bg-black bg-opacity-40 text-white flex items-center justify-center hover:bg-[#ffdd95] hover:text-black visible ${currentSlide!==slides.length-1 && ' invisible'}`}><KeyboardArrowRightIcon fontSize='large'/></button>
        
       <button onClick={prevSlide} className={` w-12 h-12 rounded-lg bg-black bg-opacity-40 text-white flex items-center justify-center hover:bg-[#ffdd95] hover:text-black ${currentSlide!==0 && ' invisible'}`}><KeyboardArrowLeftIcon fontSize='large'/></button>
        
      </div>
      </div>
      <div className=' pt-8 w-full h-full'>
      <TrendingSection/> 
        </div> 
        <div className=' px-2 my-6'>
        <ShareBox/> 
          </div>  
        <div className=' w-full h-full'><AnimeChart/></div>
    </div>
    
  );
};

export default Home2;
