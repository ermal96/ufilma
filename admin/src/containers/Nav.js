import React from "react";
import { Menu } from "antd";
import { routes } from "../routes";
import { Link } from "react-router-dom";
import {
  UserAddOutlined,
  TeamOutlined,
  AppstoreOutlined,
  VideoCameraOutlined,
  VideoCameraAddOutlined,
  AppstoreAddOutlined,
  BuildOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/userActions";

const Nav = ({ activeItem }) => {
  const dispatch = useDispatch();

  return (
    <Menu theme="dark" defaultSelectedKeys={[activeItem]} mode="inline">
      <Menu.Item key={routes.dashboard} icon={<BuildOutlined />}>
        <Link to={routes.dashboard}>Dashboard</Link>
      </Menu.Item>
      <Menu.Item key={routes.movies} icon={<VideoCameraOutlined />}>
        <Link to={routes.movies}> Movies</Link>
      </Menu.Item>
      <Menu.Item key={routes.addMovie} icon={<VideoCameraAddOutlined />}>
        <Link to={routes.addMovie}> Add Movie</Link>
      </Menu.Item>
      <Menu.Item key={routes.categories} icon={<AppstoreOutlined />}>
        <Link to={routes.categories}>Categories</Link>
      </Menu.Item>
      <Menu.Item key={routes.addCategory} icon={<AppstoreAddOutlined />}>
        <Link to={routes.addCategory}>Add Category</Link>
      </Menu.Item>
      <Menu.Item key={routes.users} icon={<TeamOutlined />}>
        <Link to={routes.users}>Users</Link>
      </Menu.Item>
      <Menu.Item key="7" icon={<UserAddOutlined />}>
        Add User
      </Menu.Item>

      <Menu.Item
        onClick={() => dispatch(logout())}
        style={{ position: "absolute", bottom: 0 }}
        key="8"
        icon={<LogoutOutlined />}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
