import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/moviceSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const disptch = useDispatch();
  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?&page=1",
        API_OPTIONS,
      );
      const json = await data.json();

      disptch(addTopRatedMovies(json.results));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
