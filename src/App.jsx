import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loggedUser, setLoggedUser] = useState({});
  //read data from  local storage

  //give the value to loggedUser
  useEffect(() => {
    const userStr = localStorage.getItem("user");
    userStr && setLoggedUser(JSON.parse(userStr));
  }, []);
  return (
    <div className="wrapper">
      <Routes>
        <Route
          path="/"
          element={
            <Login setLoggedUser={setLoggedUser} loggedUser={loggedUser} />
          }
        />
        <Route path="/signup" element={<Signup loggedUser={loggedUser} />} />
        <Route
          path="/dashboard"
          element={<Dashboard loggedUser={loggedUser} />}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
