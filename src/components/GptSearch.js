import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieGuggestions from "./GptMovieGuggestions";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img
          className="h-full w-full object-cover object-center"
          src={BG_URL}
          alt="background"
        />
      </div>

      <div className="min-h-screen px-3 pt-20 sm:px-5 sm:pt-24 md:px-8 md:pt-28">
        <GptSearchBar />
        <GptMovieGuggestions />
      </div>
    </>
  );
};

export default GptSearch;
