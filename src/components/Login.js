import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInFrom] = useState("true");

  const toggolSignInFrom = () => {
    setIsSignInFrom(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full h-screen object-cover">
        <img
          className="w-full h-screen object-cover"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw"
          alt="background"
        />
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sing Up"}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-800 rounded-lg"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 m-2 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-800 rounded-lg"
        />
        <button className="p-2 m-2 bg-red-600 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sing Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggolSignInFrom}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Register User. Please sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
