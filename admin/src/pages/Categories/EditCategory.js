import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Upload } from "antd";
import { getCategory } from "../../store/actions/categoriesAction";
import ULayout from "../../containers/Layout";
import styled from "styled-components";
import { UploadOutlined } from "@ant-design/icons";
import { updateCategory } from "../../store/actions/categoriesAction";
import { routes } from "../../routes";

const UCategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 25px;
  .ant-upload.ant-upload-select {
    display: block;
  }
`;

const Category = ({ match }) => {
  const dispatch = useDispatch();
  const { name, description, imageUrl, _id } = useSelector(
    ({ categories }) => categories.category
  );
  const [image, setImage] = useState("");

  const [form] = Form.useForm();

  const handleUpload = (e) => {
    setImage(e.file.originFileObj);
  };
  const onFinish = (values) => {
    dispatch(
      updateCategory({
        name: values.name,
        description: values.description,
        image: image,
        id: _id,
      })
    );
  };
  useEffect(() => {
    dispatch(getCategory(match.params.id));
    form.setFieldsValue({ name, description });
  }, [dispatch, match.params.id, form, name, description, imageUrl]);

  return (
    <ULayout activeRoute={routes.categories} activePage="Edit Category">
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
              <Button type="primary" htmlType="submit">
                Update Category
              </Button>
            </Form.Item>
          </div>

          <div>
            <Upload
              onChange={handleUpload}
              maxCount={1}
              listType="picture"
              defaultFileList={[
                {
                  name: "Category Thumbnail",
                  thumbUrl: imageUrl
                    ? process.env.REACT_APP_SERVER + imageUrl
                    : "",
                },
              ]}
            >
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

export default Category;
