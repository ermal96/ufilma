import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import ULayout from "../../containers/Layout";
import { getCategories } from "../../store/actions/categoriesAction";
import { Card, Row, Col, Statistic, Table, Typography, Tag, Avatar } from "antd";
import { VideoCameraOutlined, AppstoreOutlined } from "@ant-design/icons";

const { Text } = Typography;
const { Column } = Table;

const Dashboard = ({ match }) => {
  const dispatch = useDispatch();
  const categories = useSelector(({ categories }) => categories.categories);
  const movies = useSelector(({ movies }) => movies.movies);

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <ULayout activeRoute={match.path} activePage="Kreu">
      <Row gutter={16} style={{ marginTop: "25px" }}>
        <Col span={12}>
          <Card>
            <Statistic valueStyle={{ color: "#cf1322" }} title="Filmat" value={movies.length} prefix={<VideoCameraOutlined />} />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic title="Kategorite" valueStyle={{ color: "#3f8600" }} value={categories.length} prefix={<AppstoreOutlined />} />
          </Card>
        </Col>
      </Row>

      <br />
      {movies.length ? (
        <Table pagination={false} rowKey="_id" dataSource={movies.slice(0, 8)}>
          <Column title="Emri" dataIndex="name" key="name" />
          <Column title="Viti" dataIndex="year" key="year" />
          <Column title="Kualiteti" key="quality" dataIndex="quality" render={(quality) => <Text>{quality ? quality.toUpperCase() : ""}</Text>} />
          <Column
            title="Imazhi"
            key="thumbnail"
            dataIndex="thumbnail"
            render={(thumbnail) => <Avatar src={process.env.REACT_APP_SERVER + thumbnail} />}
          />
          <Column
            title="Kategorite"
            dataIndex="categories"
            key="categories"
            render={(categories) => (
              <>
                {categories.map((category) => (
                  <Tag color="blue" key={category._id}>
                    {category.name}
                  </Tag>
                ))}
              </>
            )}
          />
        </Table>
      ) : null}
    </ULayout>
  );
};

export default Dashboard;
