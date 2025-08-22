import React from "react";

const TaskNumber = ({data}) => {
  const stats = data?.taskStats || { newTask: 0, completed: 0, active: 0, failed: 0 };
  return (
    <div className="flex justify-between gap-5 mt-10 w-screen overflow-hidden">
    {/* Card 1 - Ash Indigo */}
<div className="flex flex-col items-start justify-center py-6 px-8 rounded-2xl w-full 
    bg-gradient-to-br from-gray-800/40 to-indigo-500/40 
    backdrop-blur-lg border border-white/10 shadow-lg 
    hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
  <h2 className="text-white text-4xl font-bold tracking-wide">{stats.newTask} </h2>
  <h3 className="text-white text-lg font-medium opacity-90">New Task</h3>
</div>

{/* Card 2 - Slate Teal */}
<div className="flex flex-col items-start justify-center py-6 px-8 rounded-2xl w-full 
    bg-gradient-to-br from-gray-900/40 to-teal-500/40 
    backdrop-blur-lg border border-white/10 shadow-lg 
    hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
    <h2 className="text-white text-4xl font-bold tracking-wide">{stats.completed}</h2>
  <h3 className="text-white text-lg font-medium opacity-90">Completed Task</h3>
</div>

{/* Card 3 - Charcoal Amber */}
<div className="flex flex-col items-start justify-center py-6 px-8 rounded-2xl w-full 
    bg-gradient-to-br from-gray-800/40 to-amber-500/40 
    backdrop-blur-lg border border-white/10 shadow-lg 
    hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
  <h2 className="text-white text-4xl font-bold tracking-wide">{stats.active}</h2>
  <h3 className="text-white text-lg font-medium opacity-90">Active Task</h3>
</div>

{/* Card 4 - Smoky Rose */}
<div className="flex flex-col items-start justify-center py-6 px-8 rounded-2xl w-full 
    bg-gradient-to-br from-gray-900/40 to-rose-500/40 
    backdrop-blur-lg border border-white/10 shadow-lg 
    hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
  <h2 className="text-white text-4xl font-bold tracking-wide">{data.taskStats.failed}</h2>
  <h3 className="text-white text-lg font-medium opacity-90">Failed Task</h3>
</div>

    </div>
  );
};

export default TaskNumber;
