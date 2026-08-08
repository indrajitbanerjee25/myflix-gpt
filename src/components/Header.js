import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Signed out successfully");
    } catch (error) {
      navigate("/error");
    }
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-full px-8 py-4 
                    bg-gradient-to-b from-black 
                    flex justify-between items-center z-50"
    >
      {/* Left Side Logo */}
      <h1 className="text-red-600 text-3xl font-bold">StreamGPT</h1>

      {/* Right Side Section */}
      <div className="flex items-center gap-4">
        <button
          className="p-2 m-2 bg-blue-800 text-white rounded-md"
          onClick={handleGPTSearchClick}
        >
          GPT Search
        </button>
        <img
          className="w-10 h-10 rounded-full object-cover"
          alt="usericon"
          src={user?.photoURL || LOGO_URL}
        />

        {user && (
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
