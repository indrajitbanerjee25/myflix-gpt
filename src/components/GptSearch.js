import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieGuggestions from "./GptMovieGuggestions";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="background"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieGuggestions />
      </div>
    </>
  );
};

export default GptSearch;
