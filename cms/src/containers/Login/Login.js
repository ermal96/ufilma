import React from "react";
// import { useDispatch } from "react-redux";
// import { fetchUser } from "../../store/actions/userActions";

const Login = () => {
  // const dispatch = useDispatch();

  const onFinish = (e) => {
    e.preventDefault();

    // dispatch(fetchUser());
  };

  return (
    <form name="login" onSubmit={onFinish}>
      <input type="text" placeholder="Enter email" />

      <input type="password" placeholder="Enter your password" />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
