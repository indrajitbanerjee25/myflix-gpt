import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-black/80 via-black/40 to-transparent text-white flex items-center">
      <div className="px-8 md:px-16 lg:px-24 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>

        <p className="hidden md:block text-lg leading-7 text-gray-200 mb-6">
          {overview}
        </p>

        <div className="flex gap-4 mt-8">
          <button className="flex items-center gap-2 bg-white text-black px-7 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300">
            <span className="text-2xl">▶</span>
            Play
          </button>

          <button className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-7 py-3 rounded-lg font-bold text-lg border border-white/20 shadow-lg hover:bg-white/30 hover:scale-105 transition-all duration-300">
            <span className="text-xl">ⓘ</span>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
