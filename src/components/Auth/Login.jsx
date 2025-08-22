import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const result = handleLogin(email, password, setError);
    if (result === false) {
      setError("Invalid credentials. Please try again.");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-smooth overflow-hidden">
      {/* Floating particles */}
      <span
        className="particle w-2 h-2 top-1/4 left-1/3 animate-[float_6s_ease-in-out_infinite]"
        style={{ animationDelay: "0s" }}
      ></span>
      <span
        className="particle w-3 h-3 top-2/3 left-2/4 animate-[float_7s_ease-in-out_infinite]"
        style={{ animationDelay: "2s" }}
      ></span>
      <span
        className="particle w-1.5 h-1.5 top-1/2 left-3/4 animate-[float_5s_ease-in-out_infinite]"
        style={{ animationDelay: "1s" }}
      ></span>
      <span
        className="particle w-2 h-2 top-1/5 left-2/5 animate-[float_8s_ease-in-out_infinite]"
        style={{ animationDelay: "3s" }}
      ></span>

      {/* Login Card */}
      <div
        className="p-10 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/10 w-full max-w-md 
  animate-[cardAura_6s_ease-in-out_infinite] relative z-10"
      >
        {error && (
          <div className="mb-4 text-center text-red-400 bg-red-100/10 border border-red-400/30 rounded-lg py-2 px-4 animate-fade-in">
            {error}
          </div>
        )}
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          {/* Heading */}
          <h2
            className="text-2xl font-semibold text-white mb-4 text-center 
      animate-[staggerGlow_4s_ease-in-out_infinite] [animation-delay:0s]"
          >
            Welcome Back ✨
          </h2>

          {/* Email */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-full py-3 px-4 text-lg text-white outline-none border border-cyan-300 bg-white/10 placeholder:text-gray-300 
        focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all 
        animate-[staggerGlow_4s_ease-in-out_infinite] [animation-delay:0.5s]"
            type="email"
            placeholder="Enter your email"
          />

          {/* Password */}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-full py-3 px-4 text-lg text-white outline-none border border-cyan-300 bg-white/10 placeholder:text-gray-300 
        focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all 
        animate-[staggerGlow_4s_ease-in-out_infinite] [animation-delay:1s]"
            type="password"
            placeholder="Enter password"
          />

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 
        rounded-full py-3 text-lg font-medium text-white transition-transform transform hover:scale-105 
        shadow-lg animate-[staggerGlow_4s_ease-in-out_infinite] [animation-delay:1.5s]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
