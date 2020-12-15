import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/actions/userActions";

const Login = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const loginData = {
      email: values.email,
      password: values.password,
    };

    dispatch(fetchUser(loginData));
  };

  return (
    <Form style={{ margin: "50px" }} name="login" onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
