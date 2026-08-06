import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //console.log("movies list", movies);

  return (
    <div className="px-6 ">
      <h1 className="text-white text-2xl font-bold mb-4">{title}</h1>
      <div className="overflow-x-auto overflow-y-hidden">
        <div className="flex w-max gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
