import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviceSlice";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieSVideo = async () => {
    try {
      // const movieData = await fetch(
      //   `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      //   API_OPTIONS,
      // );

      const movieData = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS,
      );
      const json = await movieData.json();

      const filteredData = json.results.filter(
        (video) => video.type === "Trailer",
      );
      //console.log("filteredData", filteredData);
      const trailer =
        filteredData.length > 0 ? filteredData[0] : json.results[0];

      // console.log("trailer", trailer);
      dispatch(addTrailerVideo(trailer));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    !trailerVideo && getMovieSVideo();
  }, []);
};

export default useMovieTrailer;
