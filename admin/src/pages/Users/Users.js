import React, { useEffect } from "react";
import ULayout from "../../containers/Layout";
import { getUsers } from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";

const { Column } = Table;

const Users = ({ match }) => {
  const dispatch = useDispatch();
  const users = useSelector(({ user }) => user.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <ULayout activeRoute={match.path} activePage="Perdoruesit">
      {users.length ? (
        <Table pagination={users.length >= 10 ? true : false} rowKey="_id" dataSource={users}>
          <Column title="Emri" dataIndex="name" key="name" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Roli" dataIndex="role" key="role" />
        </Table>
      ) : null}
    </ULayout>
  );
};

export default Users;
