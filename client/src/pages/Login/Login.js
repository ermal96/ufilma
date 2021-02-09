import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/actions/userActions";
import { Input, Form, Button, Center, Logo, Background, ULink } from "../../components";
import { routes } from "../../routes";

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
    <Background>
      <Center>
        <Logo />
        <ULink title="Krijo Llogari" to={routes.register} />
        <Form position="center" onSubmit={onSubmit}>
          <Input
            variant="light"
            display="block"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            autoComplete="email"
          />

          <Input
            variant="light"
            display="block"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Fjalekalimi"
            autoComplete="new-password"
          />

          <Button variant="filled" width={100} type="submit">
            Hyr
          </Button>
        </Form>
      </Center>
    </Background>
  );
};

export default Login;
