import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";
import Header from "./components/other/Header";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userDataFromStorage = JSON.parse(loggedInUser);
      setUser(userDataFromStorage.role);
      if (userDataFromStorage.role === "employee") {
        // Find the employee from the employees array using email
        const employees = userData?.employees || [];
        let employee = userDataFromStorage.data;
        // If only email is stored, find the full employee object
        if (employee && employee.email) {
          const found = employees.find((e) => e.email === employee.email);
          setLoggedInUserData(found || employee);
        } else {
          setLoggedInUserData(null);
        }
      } else {
        setLoggedInUserData(userDataFromStorage.data || null);
      }
    }
  }, [userData]);

  const handleLogin = (email, password, setError) => {
    if (email === "admin@example.com" && password === "1234") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      if (setError) setError("");
      return true;
    } else if (userData) {
      const employees = Array.isArray(userData)
        ? userData
        : userData.employees || [];
      const employee = employees.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        if (setError) setError("");
        return true;
      } else {
        if (setError) setError("Invalid credentials. Please try again.");
        return false;
      }
    } else {
      if (setError) setError("Invalid credentials. Please try again.");
      return false;
    }
  };

  const [loading, setLoading] = useState(false);

  // Show loading spinner for 1s on login
  const handleLoginWithLoading = (email, password) => {
    setLoading(true);
    setTimeout(() => {
      handleLogin(email, password);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {!user ? <Login handleLogin={handleLoginWithLoading} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
