import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUserUp } from "../../store/actions/userActions";
import {
  Input,
  Form,
  Button,
  Center,
  Logo,
  Background,
  ULink,
} from "../../components";
import { routes } from "../../routes";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      signUserUp({
        name,
        email,
        password,
      })
    );
  };

  return (
    <Background>
      <Center>
        <Logo />
        <Form center onSubmit={onSubmit}>
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

          <Button width={100} variant="light" type="submit">
            Register
          </Button>
        </Form>
        <ULink title="Login in here" to={routes.login} />
      </Center>
    </Background>
  );
};

export default Register;
