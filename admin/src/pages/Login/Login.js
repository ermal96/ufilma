import { Button, Form, Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../store/actions/userActions";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ULoginLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  const dispatch = useDispatch();

  const onFinish = ({ email, password }) => {
    dispatch(
      fetchUser({
        email,
        password,
      })
    );
  };

  return (
    <ULoginLayout>
      <Form onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input type="email" prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </ULoginLayout>
  );
};

export default Login;
