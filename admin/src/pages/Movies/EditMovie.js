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
  };

  const { Option } = Select;

  return (
    <ULayout activeRoute={routes.movies} activePage="Modifiko Filmin">
      <Form form={form} onFinish={onFinish}>
        {name ? (
          <UMoviesGrid>
            <div>
              <Form.Item rules={[{ required: true, message: "Ju lutem vendosni emrin" }]} name="name">
                <Input placeholder="Emri Filmnit" />
              </Form.Item>
              <UMovieColum>
                <Form.Item rules={[{ required: true, message: "Ju lutem vendosni kualitetin" }]} name="quality">
                  <Input placeholder="Kualiteti Filmit" />
                </Form.Item>
                <Form.Item rules={[{ required: true, message: "Ju lutem vendosni vitin" }]} name="year">
                  <Input placeholder="Viti Filmit" />
                </Form.Item>
                <Form.Item rules={[{ required: true, message: "Ju lutem vendosni vlersimin" }]} name="ratio">
                  <Input placeholder="Vlersimi Filmit" />
                </Form.Item>
                <Form.Item rules={[{ required: true, message: "Ju lutem vendosni kohen" }]} name="time">
                  <Input placeholder="Koha Filmit" />
                </Form.Item>
              </UMovieColum>
              <Form.Item rules={[{ required: true, message: "Ju lutem vendosni url e videos" }]} name="videoUrl">
                <Input placeholder="Url Videos" />
              </Form.Item>
              <Form.Item rules={[{ required: true, message: "Ju lutem vendosni pershkrimin" }]} name="description">
                <Input.TextArea rows={6} placeholder="Pershkrimi Filmit" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Modifiko Filmin
                </Button>
              </Form.Item>
            </div>

            <div>
              <Upload
                defaultFileList={[
                  {
                    name: "Imazhi Filmit",
                    thumbUrl: thumbnail ? process.env.REACT_APP_SERVER + thumbnail : "",
                  },
                ]}
                onChange={handleThumbnailUpload}
                maxCount={1}
                listType="picture">
                <Button block icon={<UploadOutlined />}>
                  Modifikoje Imazhin
                </Button>
              </Upload>
              <br />
              <Upload
                defaultFileList={[
                  {
                    name: "Koveri Filmit",
                    thumbUrl: cover ? process.env.REACT_APP_SERVER + cover : "",
                  },
                ]}
                onChange={handleUploadCover}
                maxCount={1}
                listType="picture">
                <Button block icon={<UploadOutlined />}>
                  Modifikoje Koverin
                </Button>
              </Upload>
              <br />
              {categories ? (
                <Form.Item name="categories">
                  <Select name="categories" mode="multiple" style={{ width: "100%" }} placeholder="Perzgjidh Kategorite">
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
