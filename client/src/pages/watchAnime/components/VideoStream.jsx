import React, { useEffect, useRef, useState } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import Hls from "hls.js";
import { useWatchAnimeStateContext } from "../context";
import { loading } from "../assets/index";
const VideoStream = () => {
  const { epUrl } = useWatchAnimeStateContext();
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useEffect(() => {
    if (epUrl) {
      console.log("url is ", epUrl);
      const video = videoRef.current;
      if (!video) return;

      let hls = null;
      function updateQuality(newQuality) {
        if (!hls) return;
        if (newQuality === 0) {
          hls.currentLevel = -1;
        } else {
          hls.levels.forEach((level, levelIndex) => {
            if (level.height == newQuality) {
              hls.currentLevel = levelIndex;
            }
          });
        }
      }
      const defaultOptions = {
        // ... other options ...
        quality: {
          default: "Auto",
          options: [], // Will be populated dynamically
          forced: true,
          onChange: updateQuality,
        },
      };

      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(epUrl);

        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
          const availableQualities = hls.levels.map((l) => l.height);
          availableQualities.unshift(0);
          defaultOptions.quality.options = availableQualities;
          playerRef.current = new Plyr(video, defaultOptions);

          setIsVideoLoading(false); // Mark video as loaded
        });

        hls.attachMedia(video);
      } else {
        video.src = epUrl;
      }

      return () => {
        if (hls) {
          hls.destroy();
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
        >
          <source src={epUrl} type="application/x-mpegURL" color="green" />
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
