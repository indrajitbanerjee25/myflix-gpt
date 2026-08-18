import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviceSlice";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieSVideo = async () => {
    try {
      const movieData = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS,
      );
      const json = await movieData.json();

      const filteredData = json.results.filter(
        (video) => video.type === "Trailer",
      );
      const trailer =
        filteredData.length > 0 ? filteredData[0] : json.results[0];

      dispatch(addTrailerVideo(trailer));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (!movieId) return;
    getMovieSVideo();
  }, []);
};

export default useMovieTrailer;
