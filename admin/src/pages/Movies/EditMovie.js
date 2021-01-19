import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Upload, Select } from "antd";
import ULayout from "../../containers/Layout";
import { getMovie, updateMovie } from "../../store/actions/moviesAction";
import styled from "styled-components";
import { UploadOutlined } from "@ant-design/icons";
import { routes } from "../../routes";
import { getCategories } from "../../store/actions/categoriesAction";

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

const EditMovie = ({ match }) => {
  const dispatch = useDispatch();
  const {
    name,
    description,
    quality,
    categories,
    time,
    year,
    ratio,
    videoUrl,
    trailerUrl,
    imageUrl,
    _id,
  } = useSelector(({ movies }) => movies.movie);

  const allCategories = useSelector(({ categories }) => categories.categories);

  const [image, setImage] = useState("");

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      name,
      description,
      quality,
      time,
      year,
      ratio,
      videoUrl,
      trailerUrl,
    });
    dispatch(getMovie(match.params.id));
    dispatch(getCategories());
  }, [
    dispatch,
    match.params.id,
    name,
    description,
    quality,
    time,
    year,
    ratio,
    videoUrl,
    trailerUrl,
    form,
  ]);

  const handleUpload = (e) => {
    setImage(e.file.originFileObj);
  };
  const onFinish = (values) => {
    console.log(_id);
    dispatch(updateMovie({ ...values, image, id: _id }));
  };

  const { Option } = Select;

  return (
    <ULayout activeRoute={routes.movies} activePage="Edit Movie">
      <Form form={form} onFinish={onFinish}>
        <UMoviesGrid>
          <div>
            <Form.Item name="name">
              <Input placeholder="Movie Name" />
            </Form.Item>
            <UMovieColum>
              <Form.Item name="quality">
                <Input placeholder="Movie Quality" />
              </Form.Item>
              <Form.Item name="year">
                <Input placeholder="Movie Year" />
              </Form.Item>
              <Form.Item name="ratio">
                <Input placeholder="Movie Ratio" />
              </Form.Item>
              <Form.Item name="trailerUrl">
                <Input placeholder="Movie Trailer" />
              </Form.Item>
            </UMovieColum>
            <Form.Item name="time">
              <Input placeholder="Movie Time" />
            </Form.Item>
            <Form.Item name="videoUrl">
              <Input placeholder="Movie Url" />
            </Form.Item>
            <Form.Item name="description">
              <Input.TextArea rows={6} placeholder="Movie Description" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update Movie
              </Button>
            </Form.Item>
          </div>

          <div>
            <Upload
              defaultFileList={[
                {
                  name: "Movie Thumbnail",
                  thumbUrl: imageUrl
                    ? process.env.REACT_APP_SERVER + imageUrl
                    : "",
                },
              ]}
              onChange={handleUpload}
              maxCount={1}
              listType="picture"
            >
              <Button block icon={<UploadOutlined />}>
                Upload
              </Button>
            </Upload>
            <br />
            {categories ? (
              <Form.Item name="categories">
                <Select
                  name="categories"
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="SelectCategory"
                >
                  {allCategories.length
                    ? allCategories.map((category) => (
                        <Option key={category._id} value={category._id}>
                          {category.name}
                        </Option>
                      ))
                    : null}
                </Select>
              </Form.Item>
            ) : null}
          </div>
        </UMoviesGrid>
      </Form>
    </ULayout>
  );
};

export default EditMovie;
