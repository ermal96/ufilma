import React, { useState } from "react";
import { Form, Input, Button, Upload } from "antd";
import ULayout from "../../containers/Layout";
import styled from "styled-components";
import { UploadOutlined } from "@ant-design/icons";
import { addCategory } from "../../store/actions/categoriesAction";
import { useDispatch } from "react-redux";

const UCategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 25px;
  .ant-upload.ant-upload-select {
    display: block;
  }
`;

const AddCategory = ({ match }) => {
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleUpload = (e) => {
    setImage(e.file.originFileObj);
  };
  const onFinish = (values) => {
    dispatch(
      addCategory({
        name: values.name,
        description: values.description,
        image: image,
      })
    );

    form.resetFields();
  };

  return (
    <ULayout activeRoute={match.path} activePage="Add Category">
      <Form form={form} onFinish={onFinish}>
        <UCategoryGrid>
          <div>
            <Form.Item name="name">
              <Input placeholder="Category Name" />
            </Form.Item>
            <Form.Item name="description">
              <Input.TextArea placeholder="Category Description" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Add Category
              </Button>
            </Form.Item>
          </div>

          <div>
            <Upload onChange={handleUpload} maxCount={1} listType="picture">
              <Button block icon={<UploadOutlined />}>
                Upload
              </Button>
            </Upload>
          </div>
        </UCategoryGrid>
      </Form>
    </ULayout>
  );
};

export default AddCategory;
