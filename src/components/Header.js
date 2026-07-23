import React from "react";

const Header = () => {
  return (
    <div className=" absolute top-0 left-0 w-full px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center z-50">
      <h1 className="text-red-600 text-3xl font-bold">StreamGPT</h1>
      {/* <div className="flex items-center gap-4">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
          alt="logo"
        />
      </div> */}
    </div>
  );
};

export default Header;
