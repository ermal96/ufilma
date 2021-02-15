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
    <ULayout activeRoute={match.path} activePage="Shto Film">
      <Form form={form} onFinish={onFinish}>
        <UMoviesGrid>
          <div>
            <Form.Item rules={[{ required: true, message: "Ju lutem vendosni emrin" }]} name="name">
              <Input placeholder="Emri Filmit" />
            </Form.Item>
            <UMovieColum>
              <Form.Item rules={[{ required: true, message: "Ju lutem vendosni Kualitetin" }]} name="quality">
                <Input placeholder="Kualiteti Filmit" />
              </Form.Item>
              <Form.Item rules={[{ required: true, message: "Ju lutem vendosni vitin" }]} name="year">
                <Input placeholder="Viti Filmit" />
              </Form.Item>
              <Form.Item rules={[{ required: true, message: "Ju lutem vendosni vlersimin" }]} name="ratio">
                <Input placeholder="Movie Ratio" />
              </Form.Item>
              <Form.Item rules={[{ required: true, message: "Ju lutem vendosni kohen" }]} name="time">
                <Input placeholder="Koha Filmit" />
              </Form.Item>
            </UMovieColum>

            <Form.Item rules={[{ required: true, message: "Ju lutem vendosni url e videos" }]} name="videoUrl">
              <Input placeholder="Url Videos" />
            </Form.Item>
            <Form.Item rules={[{ required: true, message: "Ju lutem vendosni pershkrimin" }]} name="description">
              <Input.TextArea rows={6} placeholder="Pershkrimi filmit" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Shto Filmin
              </Button>
            </Form.Item>
          </div>

          <div>
            <Upload onChange={handleThumnailUpload} maxCount={1} listType="picture">
              <Button block icon={<UploadOutlined />}>
                Ngarko Imazhin
              </Button>
            </Upload>
            <br />
            <Upload onChange={handleCoverUpload} maxCount={1} listType="picture">
              <Button block icon={<UploadOutlined />}>
                Ngarko Koverin
              </Button>
            </Upload>
            <br />
            {categories.length ? (
              <Form.Item name="categories">
                <Select name="categories" mode="multiple" style={{ width: "100%" }} placeholder="Perzgjidh Kategorite">
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
