import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/actions/userActions";
import {
  Input,
  Form,
  Button,
  Center,
  Logo,
  Background,
  ULink,
  Error,
} from "../../components";
import { routes } from "../../routes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector(({ user }) => user.error);

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
    <Background>
      <Center>
        <Logo />
        {/* <ULink title="Create an account" to={routes.register} /> */}
        <Form center onSubmit={onSubmit}>
          <Input
            variant="light"
            display="block"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Email"
          />

          <Input
            variant="light"
            display="block"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
          />

          <Button block variant="light" width={100} type="submit">
            Login
          </Button>

          {error ? <Error>{error}</Error> : null}
        </Form>
      </Center>
    </Background>
  );
};

export default Login;
