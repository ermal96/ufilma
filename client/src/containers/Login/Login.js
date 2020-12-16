import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/actions/userActions";
import { Input, Form, Button } from "../../components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      fetchUser({
        email,
        password,
      })
    );
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        display="block"
        variant="primary"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter Email"
      />

      <Input
        display="block"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter Password"
      />

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
