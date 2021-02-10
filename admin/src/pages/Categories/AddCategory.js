import React, { useEffect, useState } from "react";
import { Form, Input, Button, Upload } from "antd";
import ULayout from "../../containers/Layout";
import styled from "styled-components";
import { UploadOutlined } from "@ant-design/icons";
import { addCategory } from "../../store/actions/categoriesAction";
import { useDispatch, useSelector } from "react-redux";

const UCategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 25px;
  .ant-upload.ant-upload-select {
    display: block;
  }
`;

const AddCategory = ({ match }) => {
  const [form] = Form.useForm();
  const [thumbnailImage, setThumbnailImage] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const error = useSelector(({ categories }) => categories.error);
  const dispatch = useDispatch();

  const handleThumnailUpload = (e) => {
    setThumbnailImage(e.file.originFileObj);
  };

  const handleCoverUpload = (e) => {
    setCoverImage(e.file.originFileObj);
  };
  const onFinish = (values) => {
    dispatch(
      addCategory({
        name: values.name,
        description: values.description,
        thumbnail: thumbnailImage,
        cover: coverImage,
      })
    );
  };

  useEffect(() => {
    if (!error) {
      form.resetFields();
    }
  }, [error, form]);

  return (
    <ULayout activeRoute={match.path} activePage="Add Category">
      <Form form={form} onFinish={onFinish}>
        <UCategoryGrid>
          <div>
            <Form.Item name="name">
              <Input placeholder="Category Name" />
            </Form.Item>
            <Form.Item name="description">
              <Input.TextArea rows={6} placeholder="Category Description" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Add Category
              </Button>
            </Form.Item>
          </div>

          <div>
            <Upload onChange={handleThumnailUpload} maxCount={1} listType="picture">
              <Button block icon={<UploadOutlined />}>
                Upload thumbnail
              </Button>
            </Upload>
            <br />
            <Upload onChange={handleCoverUpload} maxCount={1} listType="picture">
              <Button block icon={<UploadOutlined />}>
                Upload Cover
              </Button>
            </Upload>
          </div>
        </UCategoryGrid>
      </Form>
    </ULayout>
  );
};

export default AddCategory;
