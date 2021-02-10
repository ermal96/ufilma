import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUserUp } from "../../store/actions/userActions";
import { Input, Form, Button, Center, Logo, Background, ULink, Fade } from "../../components";
import { routes } from "../../routes";
import message from "../../utils/message/";
import { RiUserLine, RiMailLine, RiLockPasswordLine } from "react-icons/ri";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useDispatch();

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
      message.error("Fjalkalimi nuk perputhet");
    }
  };

  return (
    <Background>
      <Fade>
        <Center>
          <Logo />
          <ULink title="Hyr Ketu" to={routes.login} />
          <Form position="center" onSubmit={onSubmit}>
            <Input
              icon={<RiUserLine />}
              display="block"
              variant="light"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Emer"
              autoComplete="name"
            />

            <Input
              icon={<RiMailLine />}
              display="block"
              variant="light"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
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

            <Input
              icon={<RiLockPasswordLine />}
              variant="light"
              display="block"
              onChange={(e) => setRepeatPassword(e.target.value)}
              value={repeatPassword}
              type="password"
              placeholder="Perserit Fjalekalimin"
              autoComplete="repeat-password"
            />

            <Button width={100} type="submit">
              Regjistrohu
            </Button>
          </Form>
        </Center>
      </Fade>
    </Background>
  );
};

export default Register;
