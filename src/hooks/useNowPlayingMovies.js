import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviceSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const disptch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );
  const getNowplayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS,
      );
      const json = await data.json();
      //console.log("Now playing", json.results);
      disptch(addNowPlayingMovies(json.results));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    !nowPlayingMovies && getNowplayingMovies();
  }, []);
};

export default useNowPlayingMovies;
