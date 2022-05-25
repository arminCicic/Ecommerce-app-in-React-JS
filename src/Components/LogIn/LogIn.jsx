import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { AppState } from "../../Context";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  let navigate = useNavigate();

  const auth = getAuth();

  const { setUserLoggedIn } = AppState();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      navigate("/");
      setUserLoggedIn(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/");
      setUserLoggedIn(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signIn-container">
      <div className="main">
        <p className="sign" align="center">
          Log in
        </p>

        <input
          className="un"
          type="text"
          align="center"
          placeholder="Email"
          onChange={(event) => setLoginEmail(event.target.value)}
        />
        <input
          className="pass"
          type="password"
          align="center"
          placeholder="Password"
          onChange={(event) => setLoginPassword(event.target.value)}
        />
        <button onClick={login} className="submit" align="center">
          Log in
        </button>
      </div>
      <div className="main">
        <p className="sign" align="center">
          <span>
            Don't have an account? <br />
          </span>
          Register now !
        </p>

        <input
          className="un"
          type="text"
          align="center"
          placeholder="Email"
          onChange={(event) => setRegisterEmail(event.target.value)}
        />
        <input
          className="pass"
          type="password"
          align="center"
          placeholder="Password"
          onChange={(event) => setRegisterPassword(event.target.value)}
        />
        <button onClick={register} className="submit" align="center">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default LogIn;
