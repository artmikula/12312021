import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login({ error, setError, setUserAuth, userAdded }) {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  let navigate = useNavigate();
  let pwdCheck = null;

  const signUpUser = (e) => {
    e.preventDefault();
    setError(null);
    navigate("/signup");
  };

  const loginHandler = (e) => {
    e.preventDefault();
    loginUser();
  };

  async function loginUser() {
    setError("");
    if (loginInfo.password && loginInfo.username) {
      await compHashPwd();
      if (loginInfo.password === pwdCheck) {
        setUserAuth(true);
        setError(null);
        navigate("/home");
      } else {
        setError("Incorrect password");
      }
    } else {
      setError("Enter username and password");
    }
  }

  async function checkPassword() {
    await axios.get(`/server/users/${loginInfo.username}`).then((response) => {
      if (response.data.length > 0) {
        pwdCheck = response.data[0].password;
      } else {
        setError("Wrong password");
      }
    });
  }

  const compHashPwd = () => {
    axios.get("/server/verify", loginInfo).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="login">
      <form id="loginform" autoComplete="off">
        {error !== "" ? <div className="error">{error}</div> : ""}
        {userAdded !== "" ? <div className="message">{userAdded}</div> : ""}
        <div className="labelDiv">
          <label>아이디</label>
        </div>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, username: e.target.value })
          }
        />
        <div className="labelDiv">
          <label>비밀번호</label>
        </div>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
        />
        <div className="buttons">
          <input
            className="button2"
            type="button"
            value="로그인"
            onClick={(e) => loginHandler(e)}
          />
          <input
            className="button2"
            type="button"
            value="가입하기"
            onClick={(e) => signUpUser(e)}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
