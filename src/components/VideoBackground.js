import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="w-full overflow-hidden">
      <iframe
        className="aspect-video w-full"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&rel=0"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
