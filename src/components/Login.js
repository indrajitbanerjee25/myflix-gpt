import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_PHOTO_URL } from "../utils/constant";
import { BG_URL } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggolSignInFrom = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleValidateData = () => {
    //checkValidateData(email,password)
    const validateMessage = checkValidateData(
      email.current.value,
      password.current.value,
    );
    setErrorMessage(validateMessage);

    if (validateMessage) return;

    if (!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_PHOTO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="fixed inset-0 -z-10">
        <img
          className="h-full w-full object-cover"
          src={BG_URL}
          alt="background"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute left-1/2 top-1/2 w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2  rounded-lg  bg-black/80 p-6 text-white sm:p-8 md:p-12"
      >
        <h1 className="py-3 text-2xl font-bold sm:text-3xl">
          {isSignInForm ? "Sign In" : "Sing Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            ref={name}
            className="my-2 w-full rounded-lg bg-gray-800 p-3 text-sm outline-none sm:text-base"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="my-2 w-full rounded-lg bg-gray-800 p-3 text-sm outline-none sm:text-base"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-2 w-full rounded-lg bg-gray-800 p-3 text-sm outline-none sm:text-base"
        />
        <p className="my-2 w-full break-words p-2 text-sm text-red-500">
          {errorMessage}
        </p>
        <button
          onClick={handleValidateData}
          className="my-2 w-full rounded-lg bg-red-600 p-3 text-sm font-medium transition hover:bg-red-700 sm:text-base"
        >
          {isSignInForm ? "Sign In" : "Sing Up"}
        </button>
        <p
          className="cursor-pointer py-5 text-sm text-gray-300 sm:text-base"
          onClick={toggolSignInFrom}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Register User. Please sign in"}
        </p>

        <p className="text-gray-400 text-xs mt-3 text-center">
          This project is for educational purposes only. It is not affiliated
          with, endorsed by, sponsored by, or associated with Netflix. All
          trademarks and logos belong to their respective owners.
        </p>
      </form>
    </div>
  );
};

export default Login;
