import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movie) => {
    const fetchMovies = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );

    const json = await fetchMovies.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: gptQuery },
        // { role: "user", content: "Are semicolons optional in JavaScript?" },
      ],
    });

    if (!gptResults.choices) {
      //Handle error
    }

    console.log(gptResults?.choices[0]?.message?.content);
    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");

    const dataArray = gptMovies.map((movies) => searchMovieTMDB(movies));

    const tmdbresult = await Promise.all(dataArray);
  };
  return (
    <div className="p-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-2 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />

        <button
          className=" col-span-3 m-4 py-2 px-4 bg-red-600  text-white rounded-lg"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
