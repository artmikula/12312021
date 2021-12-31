import React from "react";

import { useNavigate } from "react-router-dom";

function Navbar({ userAuth, setUserAuth, setUserAdded }) {
  const navigate = useNavigate();
  const logout = () => {
    setUserAuth(false);
    setUserAdded("");
    navigate("/");
  };

  const previousView = () => {
    if (userAuth) {
      navigate("/stats");
    } else {
      navigate("/");
    }
  };

  return (
    <nav>
      <div id="topRight">
        <div className="hamburger" onClick={() => previousView()}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <h1>케이스코</h1>
      </div>
      {userAuth ? (
        <button className="button2" onClick={() => logout()}>
          로그 아웃
        </button>
      ) : (
        <div></div>
      )}
    </nav>
  );
}

export default Navbar;
