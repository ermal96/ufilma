import React from "react";
import { Form, Input, Button, Upload } from "antd";
import ULayout from "../../containers/Layout";
import styled from "styled-components";
import { UploadOutlined } from "@ant-design/icons";

const UCategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 25px;
`;

const Category = ({ match }) => {
  const onFinish = (values) => {
    console.log(values);
  };

  const normFile = (e) => {
    return e.fileList[0].originFileObj;
  };

  return (
    <ULayout activeRoute={match.path} activePage="Add Category">
      <Form name="add_category" onFinish={onFinish}>
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
                Create Category
              </Button>
            </Form.Item>
          </div>

          <div>
            <Form.Item>
              <Form.Item
                name="image"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <UploadOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag category image
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
          </div>
        </UCategoryGrid>
      </Form>
    </ULayout>
  );
};

export default Category;
