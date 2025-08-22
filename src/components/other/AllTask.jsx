import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div
      className="p-6 mt-10 bg-gradient-to-br from-[#0f172a]/95 to-[#1e293b]/90 
  backdrop-blur-xl border border-white/10 rounded-2xl h-80 shadow-2xl overflow-hidden"
    >
      <div
        className="py-6 px-6 grid grid-cols-5 items-center text-center 
  rounded-xl 
  bg-gradient-to-r from-[#2d3a58]/90 via-[#1e293b]/90 to-[#0f172a]/90
  border border-white/20 shadow-xl 
  font-semibold tracking-wide 
   top-0 z-10
  backdrop-blur-xl
  before:absolute before:inset-0 before:rounded-xl 
  before:bg-gradient-to-b before:from-white/10 before:to-transparent
  relative overflow-hidden"
      >
        <h2
          className="text-2xl font-extrabold tracking-wide 
    bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 
    bg-clip-text text-transparent drop-shadow-lg"
        >
          Employee Name
        </h2>

        <h5 className="text-blue-300 hover:text-blue-100 transition-colors duration-300 font-bold drop-shadow">
          New Task
        </h5>
        <h3 className="text-green-300 hover:text-green-100 transition-colors duration-300 font-bold drop-shadow">
          Active
        </h3>
        <h3 className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 font-bold drop-shadow">
          Completed
        </h3>
        <h3 className="text-red-300 hover:text-red-100 transition-colors duration-300 font-bold drop-shadow">
          Failed
        </h3>
      </div>

      <div className="mt-2 h-[calc(100%-4rem)] overflow-y-auto pr-2 space-y-3">
        {(Array.isArray(userData) ? userData : userData?.employees || []).map(
          (elem, idx) => (
            <div
              key={idx}
              className="py-3 px-6 grid grid-cols-5 items-center text-center rounded-xl 
        bg-white/5 border border-white/10 
        shadow-md hover:shadow-xl hover:border-cyan-400/40 
        transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Employee Name */}
              <h2 className="text-white font-bold text-lg tracking-wide">
                {elem.firstname}
              </h2>

              {/* Badge */}
              <span
                className="px-3 py-1 rounded-full text-sm font-medium 
          bg-gradient-to-r from-blue-500/30 to-blue-400/30 
          border border-blue-400/40 text-blue-100 shadow-sm justify-self-center"
              >
                {elem.taskStats.newTask}
              </span>

              {/* Status */}
              <span
                className="px-3 py-1 rounded-full text-sm font-medium 
          bg-green-500/20 border border-green-400/30 text-green-300 shadow-sm justify-self-center"
              >
                {elem.taskStats.active}
              </span>

              <span
                className="px-3 py-1 rounded-full text-sm font-medium 
          bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 shadow-sm justify-self-center"
              >
                {elem.taskStats.completed}
              </span>

              <span
                className="px-3 py-1 rounded-full text-sm font-medium 
          bg-red-500/20 border border-red-400/30 text-red-300 shadow-sm justify-self-center"
              >
                {elem.taskStats.failed}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AllTask;
