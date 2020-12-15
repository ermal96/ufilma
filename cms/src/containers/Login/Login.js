import React from "react";
import { Container } from "reactstrap";
import { LoginForm } from "../../components/Login";
// import { useDispatch } from "react-redux";
// import { fetchUser } from "../../store/actions/userActions";

const Login = () => {
  // const dispatch = useDispatch();

  const onFinish = (e) => {
    e.preventDefault();

    // dispatch(fetchUser());
  };

  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default Login;
