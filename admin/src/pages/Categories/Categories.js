import React, { useEffect } from "react";
import ULayout from "../../containers/Layout";
import { getCategories, deleteCategory } from "../../store/actions/categoriesAction";
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
    <ULayout activeRoute={match.path} activePage="Kategorite">
      {categories.length ? (
        <Table pagination={categories.length >= 10 ? true : false} rowKey="_id" dataSource={categories}>
          <Column title="Emri" dataIndex="name" key="name" />
          <Column title="Filma" dataIndex="movies" key="movies" render={(movies) => <Tag>{movies.length}</Tag>} />
          <Column
            title="Imazhi"
            key="thumbnail"
            dataIndex="thumbnail"
            render={(thumbnail) => <Avatar src={process.env.REACT_APP_SERVER + thumbnail} />}
          />

          <Column title="Pershkrimi" key="description" dataIndex="description" render={(description) => <Text>{description}</Text>} />
          <Column title="Koveri" key="cover" dataIndex="cover" render={(cover) => <Avatar src={process.env.REACT_APP_SERVER + cover} />} />

          <Column
            title="Veprimet"
            key="action"
            dataIndex="_id"
            render={(_id) => (
              <Space size="middle">
                <Link to={routes.categories + "/" + _id}>Modifikoje</Link>
                <Popconfirm title="Jeni i sigurt qe doni te fshini kete kategori?" onConfirm={() => confirm(_id)} okText="Po" cancelText="Jo">
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

export default Categories;
