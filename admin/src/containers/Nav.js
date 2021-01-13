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
} from "@ant-design/icons";

const Nav = ({ activeItem }) => {
  return (
    <Menu theme="dark" defaultSelectedKeys={[activeItem]} mode="inline">
      <Menu.Item key={routes.home} icon={<BuildOutlined />}>
        <Link to={routes.home}>Dashboard</Link>
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
      <Menu.Item key="6" icon={<TeamOutlined />}>
        Users
      </Menu.Item>
      <Menu.Item key="7" icon={<UserAddOutlined />}>
        Add User
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
