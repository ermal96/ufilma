import React, { useState, useEffect } from "react";
import { Container, Layout, Input, Form, Button } from "../../components";
import styles from "./Account.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../store/actions/userActions";

const Account = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

    dispatch(updateUser({ id: user.id, name, email, password }));
  };

  return (
    <Layout>
      <Container>
        <div className={styles.accountContainer}>
          <Form onSubmit={onSubmit}>
            <Input
              display="block"
              variant="light"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Emer"
              autoComplete="name"
            />

            <Input
              display="block"
              variant="light"
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
              autoComplete="current-password"
              placeholder="Fjalekalimi"
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
