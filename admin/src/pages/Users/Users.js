import React, { useEffect } from "react";
import ULayout from "../../containers/Layout";
import { getUsers } from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Table, Space, Typography } from "antd";
import { routes } from "../../routes";
import { Link } from "react-router-dom";

const { Text } = Typography;

const { Column } = Table;

const Users = ({ match }) => {
  const dispatch = useDispatch();
  const users = useSelector(({ user }) => user.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <ULayout activeRoute={match.path} activePage="Users">
      {users.length ? (
        <Table
          pagination={users.length >= 10 ? true : false}
          rowKey="_id"
          dataSource={users}
        >
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Role" dataIndex="role" key="role" />

          <Column
            title="Actions"
            key="action"
            dataIndex="_id"
            render={(_id) => (
              <Space size="middle">
                <Link to={routes.categories + "/" + _id}>Edit</Link>
                <Text
                  style={{ cursor: "pointer" }}
                  type="danger"
                  //onClick={() => dispatch(deleteCategory(_id))}
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

export default Users;
