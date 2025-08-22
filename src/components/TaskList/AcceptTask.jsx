import React from "react";

const AcceptTask = ({ data }) => {
  console.log(data.title);
  return (
    <div
      className="shrink-0 h-full w-[300px] rounded-2xl 
    bg-gradient-to-br from-gray-800/40 to-teal-500/40 
    backdrop-blur-lg border border-white/10 shadow-lg 
    transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6"
    >
      {/* Priority & Date */}
      <div className="flex justify-between items-center">
        <h3
          className="bg-gradient-to-br from-red-500/40 to-red-700/40 
    backdrop-blur-sm border border-white/10 
    text-white px-3 py-1 rounded-md text-xs font-medium shadow-sm 
    transition-all duration-300 hover:scale-105"
        >
          {data.category}
        </h3>

        <h4 className="text-xs text-gray-200 opacity-80">{data.date}</h4>
      </div>

      {/* Title */}
      <h2 className="mt-5 text-xl font-semibold text-white tracking-wide">
        {data.title}
      </h2>

      {/* Description */}
      <p className="text-sm mt-3 text-gray-200 opacity-80 leading-relaxed">
        {data.description}{" "}
      </p>
      <div className="flex justify-between mt-20 gap-4">
        {/* Completed Button (Cyan/Blue) */}
        <button
          className="px-5 py-2 rounded-xl font-medium text-white 
    bg-gradient-to-r from-cyan-400/70 to-blue-600/70 
    backdrop-blur-md border border-white/20 shadow-md 
    hover:scale-105 transition-all duration-300 ease-out 
    glow-cyan"
        >
          Mark as Completed
        </button>

        {/* Failed Button (Premium Red) */}
        <button
          className="px-5 py-2 rounded-xl font-medium text-white 
    bg-gradient-to-r from-rose-500/70 to-red-700/70 
    backdrop-blur-md border border-white/20 shadow-md 
    hover:scale-105 transition-all duration-300 ease-out 
    glow-red"
        >
          Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
