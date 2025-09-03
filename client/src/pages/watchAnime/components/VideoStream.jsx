import React, { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import { useWatchAnimeStateContext } from "../context";
import { loading } from "../assets/index";

const VideoStream = () => {
  const { epUrl } = useWatchAnimeStateContext();
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useEffect(() => {
    if (epUrl) {
      const video = videoRef.current;
      if (!video) return;

      const defaultOptions = {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
        settings: ['quality', 'speed'],
      };

      video.src = epUrl;
      playerRef.current = new Plyr(video, defaultOptions);
      
      video.addEventListener('loadeddata', () => {
        setIsVideoLoading(false);
      });

      return () => {
        if (playerRef.current) {
          playerRef.current.destroy();
        }
        setIsVideoLoading(true);
      };
    }
  }, [epUrl]);

  return (
    <div className="relative w-full h-full">
      <div className="video-player w-full h-full">
        <video
          ref={videoRef}
          className="plyr-video"
          style={{
            "--plyr-color-main": "#ffdd95",
            width: "100%",
            height: "100%",
          }}
          crossOrigin="true"
          controls
        >
          Your browser does not support the video tag.
        </video>
        {isVideoLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-black">
            <img src={loading} alt="" className=" w-[100px] h-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoStream;
