import React from "react";

const TopAnime = () => {
  const topAnime = [
    { animeId: "1", animeTitle: "Attack on Titan" },
    { animeId: "2", animeTitle: "Demon Slayer" },
    { animeId: "3", animeTitle: "One Piece" },
    { animeId: "4", animeTitle: "Naruto" },
    { animeId: "5", animeTitle: "Dragon Ball Z" },
    { animeId: "6", animeTitle: "My Hero Academia" }
  ];

  return (
    <div className=" text-[14px]">
      <span className=" font-bold">Top Anime : </span>
      {topAnime.slice(0, 6).map((anime) => {
        return (
          <span className=" opacity-70" key={anime.animeId}>
            {anime.animeTitle}
          </span>
        );
      })}
      <span className="opacity-70">...</span>
    </div>
  );
};

export default TopAnime;
