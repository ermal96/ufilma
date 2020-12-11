import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../../store/actions/moviesAction";
import { Form, Input, Button } from "antd";

const Home = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState({});

  const formData = new FormData();

  const onFinish = (e) => {
    e.preventDefault();

    formData.append("imageUrl", image);

    // dispatch(addMovie(formData));
  };

  return (
    <Form.Item name="form" onFinish={onFinish}>
      <Form.Item name={["user", "name"]}>
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item name={["user", "email"]}>
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item name={["user", "website"]}>
        <Input placeholder="Website" />
      </Form.Item>
      <Form.Item name={["user", "introduction"]}>
        <Input.TextArea placeholder="Introduction" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form.Item>
  );
};

export default Home;
