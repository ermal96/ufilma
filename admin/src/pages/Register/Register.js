import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUserUp, setError } from "../../store/actions/userActions";

import { routes } from "../../routes";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector(({ user }) => user.error);

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === repeatPassword) {
      dispatch(
        signUserUp({
          name,
          email,
          password,
        })
      );
    } else {
      dispatch(setError("Sorry password not match"));
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter Name"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter Email"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter Password"
        />

        <input
          onChange={(e) => setRepeatPassword(e.target.value)}
          value={repeatPassword}
          type="password"
          placeholder="Repeat Password"
        />

        <button type="submit">Register</button>

        {error ? <span>{error}</span> : null}
      </form>
    </>
  );
};

export default Register;
