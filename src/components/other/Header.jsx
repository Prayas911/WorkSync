import React, { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = (props) => {
  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.firstname)
  // }

  const [fadeOut, setFadeOut] = useState(false);
  const logOutUser = () => {
    setFadeOut(true);
    setTimeout(() => {
      localStorage.setItem("loggedInUser", "");
      props.changeUser("");
      setFadeOut(false);
    }, 800); // match fade-in duration
  };

  return (
    <div
      className={`flex items-end justify-between bg-smooth p-6 rounded-xl shadow-lg backdrop-blur-xl border border-white/10 transition-all duration-700 ${
        fadeOut ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
      }`}
    >
      {/* Greeting */}
      <h1 className="text-3xl font-bold text-white tracking-tight">
        Hello <br />
        <span
          className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 via-rose-300 to-fuchsia-500
      bg-clip-text text-transparent 
      drop-shadow-[0_0_12px_rgba(244,114,182,0.7)]"
        >
          {props.data?.firstname || "ADMIN"}
        </span>{" "}
        <span
          className="inline-block text-4xl animate-bounce 
      bg-gradient-to-r from-amber-400 to-orange-500 
      bg-clip-text text-transparent 
      drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]"
        >
          👋
        </span>
      </h1>

      {/* Logout Button */}
      <button
        onClick={logOutUser}
        className="text-white px-5 py-2 rounded-md text-lg font-medium
    bg-gradient-to-r from-slate-500/90 to-slate-700/90
    backdrop-blur-lg border border-white/10
    shadow-[0_0_12px_rgba(100,116,139,0.6),0_0_20px_rgba(71,85,105,0.4)]
    hover:shadow-[0_0_18px_rgba(100,116,139,0.9),0_0_35px_rgba(71,85,105,0.7)]
    hover:scale-110 transition-all duration-300"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
