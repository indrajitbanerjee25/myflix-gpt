import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  //console.log("movies", movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="relative z-20 mt-0 px-3 sm:px-5 md:-mt-30 md:px-12">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />

          <MovieList title="Popular" movies={movies.popularMovies} />

          <MovieList title="Top Rated" movies={movies?.topRatedMovies} />

          <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
