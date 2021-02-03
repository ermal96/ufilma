import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Upload, Select } from "antd";
import ULayout from "../../containers/Layout";
import { getMovie, updateMovie } from "../../store/actions/moviesAction";
import styled from "styled-components";
import { UploadOutlined } from "@ant-design/icons";
import { routes } from "../../routes";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  const error = useSelector(({ movies }) => movies.error);

  const { name, description, quality, categories, time, year, ratio, videoUrl, trailerUrl, thumbnail, cover, _id } = useSelector(
    ({ movies }) => movies.movie
  );

  const allCategories = useSelector(({ categories }) => categories.categories);

  const [thumbnailImage, setThumbnailImage] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(getMovie(match.params.id));
    dispatch(getCategories());
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
  }, [dispatch, match.params.id, name, description, quality, time, year, ratio, videoUrl, trailerUrl, form]);

  const handleThumbnailUpload = (e) => {
    setThumbnailImage(e.file.originFileObj);
  };

  const handleUploadCover = (e) => {
    setCoverImage(e.file.originFileObj);
  };

  const onFinish = (values) => {
    dispatch(
      updateMovie({
        ...values,
        thumbnail: thumbnailImage,
        cover: coverImage,
        id: _id,
      })
    );

    if (!error) {
      history.push(routes.movies);
    }
  };

  const { Option } = Select;

  return (
    <ULayout activeRoute={routes.movies} activePage="Edit Movie">
      <Form form={form} onFinish={onFinish}>
        {name ? (
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
                  <Input required placeholder="Movie Ratio" />
                </Form.Item>
                <Form.Item name="trailerUrl">
                  <Input required placeholder="Movie Trailer" />
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
                  Update Movie
                </Button>
              </Form.Item>
            </div>

            <div>
              <Upload
                defaultFileList={[
                  {
                    name: "Movie Thumbnail",
                    thumbUrl: thumbnail ? process.env.REACT_APP_SERVER + thumbnail : "",
                  },
                ]}
                onChange={handleThumbnailUpload}
                maxCount={1}
                listType="picture">
                <Button block icon={<UploadOutlined />}>
                  Update thumbail
                </Button>
              </Upload>
              <br />
              <Upload
                defaultFileList={[
                  {
                    name: "Movie Cover",
                    thumbUrl: cover ? process.env.REACT_APP_SERVER + cover : "",
                  },
                ]}
                onChange={handleUploadCover}
                maxCount={1}
                listType="picture">
                <Button block icon={<UploadOutlined />}>
                  Update cover
                </Button>
              </Upload>
              <br />
              {categories ? (
                <Form.Item name="categories">
                  <Select name="categories" mode="multiple" style={{ width: "100%" }} placeholder="SelectCategory">
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
        ) : null}
      </Form>
    </ULayout>
  );
};

export default EditMovie;
