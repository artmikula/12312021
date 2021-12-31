import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage({ error, setError, userAdded, setUserAdded }) {
  let usernameExists = false;
  let navigate = useNavigate();

  const [newUserData, setNewUserData] = useState({
    username: "",
    password: "",
    rePassword: "",
  });

  const cancelSignup = (e) => {
    setError(null);
    setUserAdded(null);
    navigate("/");
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    setError(null);
    signUpNewUser();
  };

  async function signUpNewUser() {
    if (newUserData.password !== newUserData.rePassword) {
      setError("Password doesn't match");
    } else if (
      newUserData.username &&
      newUserData.password === newUserData.rePassword
    ) {
      await checkUserExists();
      if (usernameExists === true) {
        setError("Username not available");
      } else {
        setError(null);
        addUser();
        setUserAdded("New user added");
      }
    } else {
      setError("wrong username password combination");
    }
  }

  async function checkUserExists() {
    await axios
      .get(`/server/users/${newUserData.username}`)
      .then((response) => {
        if (response.data.length > 0) {
          usernameExists = true;
        }
      });
  }

  const addUser = () => {
    axios.post("/server/adduser", newUserData).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="signup">
      <form id="signupform" autoComplete="off">
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
            setNewUserData({ ...newUserData, username: e.target.value })
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
            setNewUserData({ ...newUserData, password: e.target.value })
          }
        />
        <div className="labelDiv">
          <label>비밀번호 확인</label>
        </div>
        <input
          type="password"
          name="rePassword"
          id="rePassword"
          onChange={(e) =>
            setNewUserData({ ...newUserData, rePassword: e.target.value })
          }
        />
        <div className="buttons">
          <input
            className="button2"
            type="button"
            value="취소"
            onClick={(e) => cancelSignup(e)}
          />
          <input
            className="button2"
            type="button"
            value="가입하기"
            onClick={(e) => signUpHandler(e)}
          />
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
