import React, { useEffect } from "react";
import ULayout from "../../containers/Layout";
import {
  getCategories,
  deleteCategory,
} from "../../store/actions/categoriesAction";
import { useDispatch, useSelector } from "react-redux";
import { Table, Space, Typography, Tag, Avatar, Popconfirm } from "antd";
import { routes } from "../../routes";
import { Link } from "react-router-dom";

const { Text } = Typography;

const { Column } = Table;

const Categories = ({ match }) => {
  const dispatch = useDispatch();
  const categories = useSelector(({ categories }) => categories.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const confirm = (_id) => {
    dispatch(deleteCategory(_id));
  };

  return (
    <ULayout activeRoute={match.path} activePage="Categories">
      {categories.length ? (
        <Table
          pagination={categories.length >= 10 ? true : false}
          rowKey="_id"
          dataSource={categories}
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
            key="thumbnail"
            dataIndex="thumbnail"
            render={(thumbnail) => (
              <Avatar src={process.env.REACT_APP_SERVER + thumbnail} />
            )}
          />

          <Column
            title="Description"
            key="description"
            dataIndex="description"
            render={(description) => (
              <Text>{description.slice(0, 120)}...</Text>
            )}
          />

          <Column
            title="Actions"
            key="action"
            dataIndex="_id"
            render={(_id) => (
              <Space size="middle">
                <Link to={routes.categories + "/" + _id}>Edit</Link>
                <Popconfirm
                  title="Are you sure to delete this category?"
                  onConfirm={() => confirm(_id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Text style={{ cursor: "pointer" }} type="danger">
                    Delete
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

export default Categories;
