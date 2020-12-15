import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/actions/userActions";

const LoginForm = () => {
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
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          id="email"
          placeholder="Enter Email"
        />
      </FormGroup>

      <FormGroup>
        <Label for="email">Password</Label>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          id="password"
          placeholder="Enter Password"
        />
      </FormGroup>

      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
