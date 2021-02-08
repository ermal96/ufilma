import React, { useState, useEffect } from "react";
import { Container, Layout, Input, Form, Button } from "../../components";
import styles from "./Account.module.scss";
import { useSelector } from "react-redux";

const Account = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const user = useSelector(({ user }) => user.user);
  const loggedIn = useSelector(({ user }) => user.loggedIn);

  useEffect(() => {
    if (loggedIn) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [loggedIn, user.name, user.email]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Container>
        {console.log(user)}
        <div className={styles.accountContainer}>
          <Form onSubmit={onSubmit}>
            <Input
              display="block"
              variant="light"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Emer"
            />

            <Input
              display="block"
              variant="light"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
            />

            <Input
              variant="light"
              display="block"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Fjalekalimi"
            />

            <Input
              variant="light"
              display="block"
              onChange={(e) => setRepeatPassword(e.target.value)}
              value={repeatPassword}
              type="password"
              placeholder="Perserit Fjalekalimin"
            />

            <Button width={100} variant="light" type="submit">
              Update User
            </Button>
          </Form>
        </div>
      </Container>
    </Layout>
  );
};

export default Account;
