import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Error from "./components/Error";
import "./App.css";

export default function App() {
  const [error, setError] = useState(null);
  const [userAuth, setUserAuth] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [userAdded, setUserAdded] = useState(null);
  const login = false;

  return (
    <div className="App">
      <Navbar
        userAuth={userAuth}
        setUserAuth={setUserAuth}
        setUserAdded={setUserAdded}
        login={login}
      />
      <div className="mainCont">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Login
                error={error}
                setError={setError}
                setUserAuth={setUserAuth}
                userAdded={userAdded}
                setUserAdded={setUserAdded}
              />
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <Signup
                error={error}
                setError={setError}
                userAdded={userAdded}
                setUserAdded={setUserAdded}
                setResultData={setResultData}
              />
            }
          ></Route>
          {userAuth && (
            <Route
              exact
              path="/home"
              element={<Home setUserAuth={setUserAuth} />}
            ></Route>
          )}
          <Route exact path="/error" element={<Error />}></Route>
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </div>
    </div>
  );
}
