import React, { useState, useEffect } from "react";
import { Form, Input, Button, Upload, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ULayout from "../../containers/Layout";
import styled from "styled-components";
import { UploadOutlined } from "@ant-design/icons";
import { getCategories } from "../../store/actions/categoriesAction";
import { addMovie } from "../../store/actions/moviesAction";

const UMoviesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-gap: 25px;
  .ant-upload.ant-upload-select {
    display: block;
  }
`;

const UMovieColum = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 25px;
`;

const AddMovie = ({ match }) => {
  const dispatch = useDispatch();
  const categories = useSelector(({ categories }) => categories.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const [thumbnail, setThumbnail] = useState("");
  const [cover, setCover] = useState("");
  const error = useSelector(({ movies }) => movies.error);

  const [form] = Form.useForm();

  const handleThumnailUpload = (e) => {
    setThumbnail(e.file.originFileObj);
  };
  const handleCoverUpload = (e) => {
    setCover(e.file.originFileObj);
  };

  const onFinish = (values) => {
    dispatch(addMovie({ ...values, thumbnail, cover }));
  };

  const { Option } = Select;

  useEffect(() => {
    if (!error) {
      form.resetFields();
    }
  }, [error, form]);

  return (
    <ULayout activeRoute={match.path} activePage="Add Category">
      <Form form={form} onFinish={onFinish}>
        <UMoviesGrid>
          <div>
            <Form.Item name="name">
              <Input required placeholder="Movie Name" />
            </Form.Item>
            <UMovieColum>
              <Form.Item name="quality">
                <Input required placeholder="Movie Quality" />
              </Form.Item>
              <Form.Item name="year">
                <Input required placeholder="Movie Year" />
              </Form.Item>
              <Form.Item name="ratio">
                <Input placeholder="Movie Ratio" />
              </Form.Item>
              <Form.Item name="trailerUrl">
                <Input placeholder="Movie Trailer" />
              </Form.Item>
            </UMovieColum>
            <Form.Item name="time">
              <Input required placeholder="Movie Time" />
            </Form.Item>
            <Form.Item name="subtitle">
              <Input required placeholder="Subtitle" />
            </Form.Item>
            <Form.Item name="videoUrl">
              <Input required placeholder="Movie Url" />
            </Form.Item>
            <Form.Item name="description">
              <Input.TextArea required rows={6} placeholder="Movie Description" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Movie
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
                Upload cover
              </Button>
            </Upload>
            <br />
            {categories.length ? (
              <Form.Item name="categories">
                <Select name="categories" mode="multiple" style={{ width: "100%" }} placeholder="SelectCategory">
                  {categories.map((category) => (
                    <Option key={category._id} value={category._id}>
                      {category.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            ) : null}
          </div>
        </UMoviesGrid>
      </Form>
    </ULayout>
  );
};

export default AddMovie;
