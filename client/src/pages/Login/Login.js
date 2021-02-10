import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/actions/userActions";
import { Input, Form, Button, Center, Logo, Background, ULink, Fade } from "../../components";
import { routes } from "../../routes";
import { RiMailLine, RiLockPasswordLine } from "react-icons/ri";

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
      <Fade>
        <Center>
          <Logo />
          <ULink title="Krijo Llogari" to={routes.register} />
          <Form position="center" onSubmit={onSubmit}>
            <Input
              icon={<RiMailLine />}
              variant="light"
              display="block"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              autoComplete="email"
            />

            <Input
              icon={<RiLockPasswordLine />}
              variant="light"
              display="block"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Fjalekalimi"
              autoComplete="new-password"
            />

            <Button width={100} type="submit">
              Hyr
            </Button>
          </Form>
        </Center>
      </Fade>
    </Background>
  );
};

export default Login;
