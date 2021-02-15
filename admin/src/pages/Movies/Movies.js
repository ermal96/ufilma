import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, deleteMovie } from "../../store/actions/moviesAction";
import ULayout from "../../containers/Layout";
import { Table, Tag, Space, Typography, Avatar, Popconfirm } from "antd";
import { routes } from "../../routes";
import { Link } from "react-router-dom";
import { isEmptyObject } from "../../utils";

const { Text } = Typography;

const { Column } = Table;

const Movies = ({ match }) => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const confirm = (_id) => {
    dispatch(deleteMovie(_id));
  };

  return (
    <ULayout activeRoute={match.path} activePage="Movies">
      {!isEmptyObject(movies) ? (
        <Table pagination={movies.length >= 10 ? true : false} rowKey="_id" dataSource={movies.docs}>
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
          <Column
            title="Veprimet"
            key="action"
            render={(item) => (
              <Space size="middle">
                <Link to={routes.movies + "/" + item._id}>Modifikoje</Link>
                <Popconfirm title="Jeni i sigurt qe doni te fshini kete film?" onConfirm={() => confirm(item._id)} okText="Po" cancelText="Jo">
                  <Text style={{ cursor: "pointer" }} type="danger">
                    Fshije
                  </Text>
                </Popconfirm>
              </Space>
            )}
          />
        </Table>
      ) : null}
    </ULayout>
  );
};

export default Movies;
