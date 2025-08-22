import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  
    const [userData,setUserData] = useContext(AuthContext)
  


  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')


  const [newTask, setNewTask] = useState({})
  const [showToast, setShowToast] = useState(false)
  const [error, setError] = useState("")


  const submitHandler = (e) => {
    e.preventDefault();
    // Validation
    if (!taskTitle || !taskDescription || !taskDate || !asignTo || !category) {
      setError("Please fill in all fields.");
      setShowToast(false);
  setTimeout(() => setError(""), 2000);
      return;
    }
    const employees = Array.isArray(userData) ? userData : userData?.employees || [];
    const assigned = employees.find((elem) => asignTo === elem.firstname);
    if (!assigned) {
      setError("Employee not found. Please check the name.");
      setShowToast(false);
  setTimeout(() => setError(""), 2000);
      return;
    }
    const task = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
    assigned.tasks.push(task);
    assigned.taskStats.newTask = assigned.taskStats.newTask + 1;
    if (Array.isArray(userData)) {
      setUserData([...employees]);
    } else {
      setUserData({ ...userData, employees: [...employees] });
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
    setTaskTitle("");
    setAsignTo("");
    setCategory("");
    setTaskDescription("");
    setTaskDate("");
    setError("");
  }
  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 rounded-2xl 
      bg-gradient-to-br from-gray-900/90 to-gray-800/80 
      backdrop-blur-xl border border-gray-700 shadow-2xl relative">
      {showToast && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-fade-in">
          Task created successfully!
        </div>
      )}
      {error && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-red-500 text-white px-6 py-3 rounded-full shadow-lg animate-fade-in">
          {error}
        </div>
      )}
      <h1 className="text-3xl font-bold text-white mb-6">Create New Task</h1>
      <form onSubmit={submitHandler} className="flex flex-wrap gap-8">
        {/* Left Side */}
    <div className="flex-1 min-w-[280px]">
      <div className="mb-5">
        <h3 className="text-gray-400 mb-2 text-sm">Task Title</h3>
        <input
        value={taskTitle}
        onChange={(e)=>{
          setTaskTitle(e.target.value)
        }}
          className="text-sm py-2 px-3 w-full rounded-lg outline-none 
          bg-gray-800 border border-gray-600 
          focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 
          text-white placeholder-gray-400
          transition-all duration-300"
          type="text"
          placeholder="Make UI Design"
        />
      </div>

      <div className="mb-5">
        <h3 className="text-gray-400 mb-2 text-sm">Date</h3>
        <input
         value={taskDate}
        onChange={(e)=>{
          setTaskDate(e.target.value)
        }}
          className="text-sm py-2 px-3 w-full rounded-lg outline-none 
          bg-gray-800 border border-gray-600 
          focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 
          text-white placeholder-gray-400
          transition-all duration-300"
          type="date"
        />
      </div>

      <div className="mb-5">
        <h3 className="text-gray-400 mb-2 text-sm">Assign To</h3>
        <input
         value={asignTo}
        onChange={(e)=>{
          setAsignTo(e.target.value)
        }}
          className="text-sm py-2 px-3 w-full rounded-lg outline-none 
          bg-gray-800 border border-gray-600 
          focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 
          text-white placeholder-gray-400
          transition-all duration-300"
          type="text"
          placeholder="Employee Name"
        />
      </div>

      <div className="mb-5">
        <h3 className="text-gray-400 mb-2 text-sm">Category</h3>
        <input
         value={category}
        onChange={(e)=>{
          setCategory(e.target.value)
        }}
          className="text-sm py-2 px-3 w-full rounded-lg outline-none 
          bg-gray-800 border border-gray-600 
          focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 
          text-white placeholder-gray-400
          transition-all duration-300"
          type="text"
          placeholder="Design, Dev etc"
        />
      </div>
    </div>

    {/* Right Side */}
    <div className="flex-1 min-w-[280px] flex flex-col">
      <h3 className="text-gray-400 mb-2 text-sm">Description</h3>
      <textarea
       value={taskDescription}
        onChange={(e)=>{
          setTaskDescription(e.target.value)
        }}
        className="w-full h-44 text-sm py-2 px-3 rounded-lg outline-none 
        bg-gray-800 border border-gray-600 
        focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 
        text-white placeholder-gray-400
        transition-all duration-300 resize-none"
        placeholder="Describe the task..."
      ></textarea>

      <button
        className="mt-6 py-3 px-5 rounded-lg text-sm font-medium text-white 
        bg-gradient-to-r from-teal-500 to-blue-500 
        shadow-lg shadow-teal-500/10 hover:shadow-teal-500/10 
        transition-all duration-300 hover:scale-[1.02] hover:brightness-110"
      >
        Create Task
      </button>
    </div>

  </form>
</div>


  )
}

export default CreateTask
