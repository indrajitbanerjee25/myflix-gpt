import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      navigate("/error");
    }
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          }),
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <header
      className="
        absolute top-0 left-0 z-50 w-full
        bg-gradient-to-b from-black via-black/80 to-transparent
        px-3 py-3
        sm:px-5 sm:py-4
        md:px-8
      "
    >
      <div className="flex w-full items-center justify-between gap-2">
        {/* Logo */}
        <h1
          className="
            shrink-0
            text-xl font-bold text-red-600
            sm:text-2xl
            md:text-3xl
          "
        >
          StreamGPT
        </h1>

        {/* Right Section */}
        {user && (
          <div
            className="
              flex items-center
              gap-1
              sm:gap-2
              md:gap-4
            "
          >
            {/* Language Dropdown */}
            {showGptSearch && (
              <select
                className="
                  w-[70px] rounded-md
                  bg-gray-900
                  px-1 py-2
                  text-xs text-white
                  outline-none
                  sm:w-auto sm:px-2 sm:text-sm
                  md:px-3 md:py-2
                "
                onChange={handleLanguageChange}
                defaultValue={SUPPORTED_LANGUAGES[0]?.identifier}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            {/* GPT Search Button */}
            <button
              onClick={handleGPTSearchClick}
              className="
                whitespace-nowrap
                rounded-md
                bg-blue-800
                px-2 py-2
                text-xs font-medium
                text-white
                transition
                hover:bg-blue-700
                sm:px-3 sm:text-sm
                md:px-4 md:text-base
              "
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>

            {/* User Image */}
            <img
              className="
                h-8 w-8
                rounded-full
                object-cover
                sm:h-9 sm:w-9
                md:h-10 md:w-10
              "
              alt="user icon"
              src={user?.photoURL || LOGO_URL}
            />

            {/* Sign Out */}
            <button
              onClick={handleSignOut}
              className="
                whitespace-nowrap
                rounded-md
                bg-red-600
                px-2 py-2
                text-xs font-medium
                text-white
                transition
                hover:bg-red-700
                sm:px-3 sm:text-sm
                md:px-4 md:text-base
              "
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
