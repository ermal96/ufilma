import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUserUp, setError } from "../../store/actions/userActions";
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
    <Background>
      <Center>
        <Logo />
        <Form onSubmit={onSubmit}>
          <Input
            display="block"
            variant="light"
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter Name"
          />

          <Input
            display="block"
            variant="light"
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

          <Input
            variant="light"
            display="block"
            onChange={(e) => setRepeatPassword(e.target.value)}
            value={repeatPassword}
            type="password"
            placeholder="Repeat Password"
          />

          <Button width={100} variant="light" type="submit">
            Register
          </Button>
          <ULink title="Login in here" to={routes.login} />
          {error ? <Error>{error}</Error> : null}
        </Form>
      </Center>
    </Background>
  );
};

export default Register;
