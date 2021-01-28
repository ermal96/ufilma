import React, { useState } from "react";
import { Form, Input, Button, Upload } from "antd";
import ULayout from "../../containers/Layout";
import styled from "styled-components";
import { UploadOutlined } from "@ant-design/icons";
import { addCategory } from "../../store/actions/categoriesAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { routes } from "../../routes";

const UCategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 25px;
  .ant-upload.ant-upload-select {
    display: block;
  }
`;

const AddCategory = ({ match }) => {
  const [thumbnailImage, setThumbnailImage] = useState("");
  const error = useSelector(({ categories }) => categories.error);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleUpload = (e) => {
    setThumbnailImage(e.file.originFileObj);
  };
  const onFinish = (values) => {
    dispatch(
      addCategory({
        name: values.name,
        description: values.description,
        thumbnail: thumbnailImage,
      })
    );

    if (!error) {
      history.push(routes.categories);
    }
  };

  return (
    <ULayout activeRoute={match.path} activePage="Add Category">
      <Form onFinish={onFinish}>
        <UCategoryGrid>
          <div>
            <Form.Item name="name">
              <Input placeholder="Category Name" />
            </Form.Item>
            <Form.Item name="description">
              <Input.TextArea rows={6} placeholder="Category Description" />
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
                Upload thumbnail
              </Button>
            </Upload>
          </div>
        </UCategoryGrid>
      </Form>
    </ULayout>
  );
};

export default AddCategory;
