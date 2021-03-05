import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import "./LoginForm.css";
import { StyledAuth } from "../SignupFormPage";
import Button from "../../styles/Button";

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/gallery" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  const demoOnClick = (e) => {
    e.preventDefault();
    setCredential("demo@user.io")
    setPassword("password")
  }

  return (
    <StyledAuth>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>
            Username or Email
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <Button type="submit">Log In</Button>
          <br></br>
          <label>Don't have an account?</label>
          <br></br>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
          <br></br>
          <br></br>
          <Button onClick={demoOnClick}>Demo</Button>
        </form>
      </div>
    </StyledAuth>
  );
}

export default LoginFormPage;
