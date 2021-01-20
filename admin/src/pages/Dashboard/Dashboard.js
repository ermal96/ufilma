import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import ULayout from "../../containers/Layout";
import { getCategories } from "../../store/actions/categoriesAction";
import {
  Card,
  Row,
  Col,
  Statistic,
  Table,
  Typography,
  Tag,
  Avatar,
} from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  AppstoreOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { getUsers } from "../../store/actions/userActions";

const { Text } = Typography;
const { Column } = Table;

const Dashboard = ({ match }) => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user.user);
  const users = useSelector(({ user }) => user.users);
  const categories = useSelector(({ categories }) => categories.categories);
  const movies = useSelector(({ movies }) => movies.movies);

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getCategories());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <ULayout activeRoute={match.path} activePage="Dashboard">
      <Card>
        <Card.Meta
          avatar={
            <UserOutlined style={{ fontSize: "30px", color: "#096dd9" }} />
          }
          title={user.name}
          description={user.email}
        />
      </Card>
      <Row gutter={16} style={{ marginTop: "25px" }}>
        <Col span={8}>
          <Card>
            <Statistic
              valueStyle={{ color: "#cf1322" }}
              title="Movies"
              value={movies.length}
              prefix={<VideoCameraOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Categories"
              valueStyle={{ color: "#3f8600" }}
              value={categories.length}
              prefix={<AppstoreOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Users"
              valueStyle={{ color: "#096dd9" }}
              value={users.length}
              prefix={<TeamOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <br />
      {movies.length ? (
        <Table
          pagination={movies.length >= 10 ? true : false}
          rowKey="_id"
          dataSource={movies.slice(0, 3)}
        >
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Year" dataIndex="year" key="year" />
          <Column
            title="Quality"
            key="quality"
            dataIndex="quality"
            render={(quality) => (
              <Text>{quality ? quality.toUpperCase() : ""}</Text>
            )}
          />
          <Column
            title="Thumbnail"
            key="imageUrl"
            dataIndex="imageUrl"
            render={(imageUrl) => (
              <Avatar src={process.env.REACT_APP_SERVER + imageUrl} />
            )}
          />
          <Column
            title="Categories"
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

      <br />
      {categories.length ? (
        <Table
          style={{ marginTop: "10px" }}
          pagination={categories.length >= 10 ? true : false}
          rowKey="_id"
          dataSource={categories.slice(0, 3)}
        >
          <Column title="Name" dataIndex="name" key="name" />
          <Column
            title="Movies"
            dataIndex="movies"
            key="movies"
            render={(movies) => <Tag>{movies.length}</Tag>}
          />
          <Column
            title="Thumbnail"
            key="imageUrl"
            dataIndex="imageUrl"
            render={(imageUrl) => (
              <Avatar src={process.env.REACT_APP_SERVER + imageUrl} />
            )}
          />

          <Column
            title="Description"
            key="description"
            dataIndex="description"
            render={(description) => <Text>{description.slice(0, 70)}...</Text>}
          />
        </Table>
      ) : null}
    </ULayout>
  );
};

export default Dashboard;
