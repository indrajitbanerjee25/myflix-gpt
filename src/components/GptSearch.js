import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieGuggestions from "./GptMovieGuggestions";

const GptSearch = () => {
  return (
    <div className="bg-cyan-200">
      <GptSearchBar />
      <GptMovieGuggestions />
    </div>
  );
};

export default GptSearch;
