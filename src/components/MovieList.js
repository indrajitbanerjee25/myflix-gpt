import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //console.log("movies list", movies);

  return (
    <div className="px-3 sm:px-5 md:px-6">
      <h1 className="mb-3 text-xl font-bold text-white sm:mb-4 sm:text-2xl">
        {title}
      </h1>

      <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div className="flex w-max gap-3 sm:gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
