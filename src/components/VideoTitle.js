const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full aspect-video px-4 pt-[18%] text-white bg-gradient-to-r from-black sm:px-6 sm:pt-[20%] md:px-24">
      <h1 className="text-xl font-bold sm:text-2xl md:text-6xl">{title}</h1>
      <p className="hidden py-4 text-sm md:inline-block md:w-1/3 md:py-6 md:text-lg">
        {overview}
      </p>
      <div className="my-3 flex gap-2 sm:my-4 md:m-0">
        <button className="rounded-lg bg-white px-3 py-2 text-sm text-black hover:bg-opacity-80 sm:px-4 sm:py-2 md:px-12 md:py-4 md:text-xl">
          ▶️ Play
        </button>
        <button className="hidden rounded-lg bg-gray-500 px-6 py-3 text-sm text-white bg-opacity-50 md:inline-block md:px-12 md:py-4 md:text-xl">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
