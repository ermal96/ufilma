import React, { useEffect } from "react";
import ULayout from "../../containers/Layout";
import {
  getCategories,
  deleteCategory,
} from "../../store/actions/categoriesAction";
import { useDispatch, useSelector } from "react-redux";
import { Table, Space, Typography, Tag } from "antd";
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

  return (
    <ULayout activeRoute={match.path} activePage="Categories">
      {categories.length ? (
        <Table rowKey="_id" dataSource={categories}>
          <Column title="Name" dataIndex="name" key="name" />
          <Column
            title="Movies"
            dataIndex="movies"
            key="movies"
            render={(movies) => <Tag>{movies.length}</Tag>}
          />
          <Column
            title="Description"
            dataIndex="description"
            key="description"
          />

          <Column
            title="Actions"
            key="action"
            render={(item) => (
              <Space size="middle">
                <Link to={routes.categories + "/" + item._id}>Edit</Link>
                <Text
                  style={{ cursor: "pointer" }}
                  type="danger"
                  onClick={() => dispatch(deleteCategory(item._id))}
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

export default Categories;
