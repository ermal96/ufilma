import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, deleteMovie } from "../../store/actions/moviesAction";
import ULayout from "../../containers/Layout";
import { Table, Tag, Space, Typography } from "antd";
import { routes } from "../../routes";
import { Link } from "react-router-dom";
const { Text } = Typography;

const { Column } = Table;

const Movies = ({ match }) => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <ULayout activeRoute={match.path} activePage="Movies">
      {movies.length ? (
        <Table rowKey="_id" dataSource={movies}>
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Year" dataIndex="year" key="year" />
          <Column title="Quality" dataIndex="quality" key="quality" />

          <Column
            title="Categories"
            dataIndex="categories"
            key="categories"
            render={(categories) => (
              <>
                {categories.map((category) => (
                  <Tag color="blue" key={category}>
                    {category.name}
                  </Tag>
                ))}
              </>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(item) => (
              <Space size="middle">
                <Link to={routes.movies + "/" + item._id}>Edit</Link>
                <Text
                  style={{ cursor: "pointer" }}
                  type="danger"
                  onClick={() => dispatch(deleteMovie(item._id))}
                >
                  Delete
                </Text>
              </Space>
            )}
          />
        </Table>
      ) : null}
    </ULayout>
  );
};

export default Movies;
