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

  const { name, description, thumbnail, cover, _id } = useSelector(({ categories }) => categories.category);

  const [thumbnailImage, setThumbnailImage] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const [form] = Form.useForm();

  const handleThumbnailUpload = (e) => {
    setThumbnailImage(e.file.originFileObj);
  };

  const handleCoverUpload = (e) => {
    setCoverImage(e.file.originFileObj);
  };

  const onFinish = (values) => {
    dispatch(
      updateCategory({
        name: values.name,
        description: values.description,
        thumbnail: thumbnailImage,
        cover: coverImage,
        id: _id,
      })
    );
  };
  useEffect(() => {
    dispatch(getCategory(match.params.id));
    form.setFieldsValue({ name, description });
  }, [dispatch, match.params.id, form, name, description, thumbnail, cover]);

  return (
    <ULayout activeRoute={routes.categories} activePage="Modifiko Kategorine">
      <Form form={form} onFinish={onFinish}>
        {name ? (
          <UCategoryGrid>
            <div>
              <Form.Item rules={[{ required: true, message: "Ju lutem vendosi emrin" }]} name="name">
                <Input placeholder="Emri Kategorise" />
              </Form.Item>
              <Form.Item rules={[{ required: true, message: "Ju lutem vendosi pershkrimin" }]} name="description">
                <Input.TextArea rows={6} placeholder="Pershkrimi Kategorise" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Modifikoje Kategorine
                </Button>
              </Form.Item>
            </div>

            <div>
              <Upload
                onChange={handleThumbnailUpload}
                maxCount={1}
                listType="picture"
                defaultFileList={[
                  {
                    name: "Imazhi Kategorrise",
                    thumbUrl: thumbnail ? process.env.REACT_APP_SERVER + thumbnail : "",
                  },
                ]}>
                <Button block icon={<UploadOutlined />}>
                  Modifikoje Imazhin
                </Button>
              </Upload>
              <br />
              <Upload
                onChange={handleCoverUpload}
                maxCount={1}
                listType="picture"
                defaultFileList={[
                  {
                    name: "Koveri kategorise",
                    thumbUrl: cover ? process.env.REACT_APP_SERVER + cover : "",
                  },
                ]}>
                <Button block icon={<UploadOutlined />}>
                  Modifikoje Koverin
                </Button>
              </Upload>
            </div>
          </UCategoryGrid>
        ) : null}
      </Form>
    </ULayout>
  );
};

export default Category;
