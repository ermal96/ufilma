import React from "react";
import { Menu } from "antd";
import { routes } from "../routes";
import { Link } from "react-router-dom";
import {
  TeamOutlined,
  AppstoreOutlined,
  VideoCameraOutlined,
  VideoCameraAddOutlined,
  AppstoreAddOutlined,
  BuildOutlined,
  LogoutOutlined,
  FileImageOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/userActions";

const Nav = ({ activeItem }) => {
  const dispatch = useDispatch();

  return (
    <Menu theme="dark" defaultSelectedKeys={[activeItem]} mode="inline">
      <Menu.Item key={routes.dashboard} icon={<BuildOutlined />}>
        <Link to={routes.dashboard}>Kreu</Link>
      </Menu.Item>
      <Menu.Item key={routes.movies} icon={<VideoCameraOutlined />}>
        <Link to={routes.movies}> Filmat</Link>
      </Menu.Item>
      <Menu.Item key={routes.addMovie} icon={<VideoCameraAddOutlined />}>
        <Link to={routes.addMovie}> Shto Film</Link>
      </Menu.Item>
      <Menu.Item key={routes.categories} icon={<AppstoreOutlined />}>
        <Link to={routes.categories}>Kategorite</Link>
      </Menu.Item>
      <Menu.Item key={routes.addCategory} icon={<AppstoreAddOutlined />}>
        <Link to={routes.addCategory}>Shto Kategori</Link>
      </Menu.Item>
      <Menu.Item key={routes.images} icon={<FileImageOutlined />}>
        <Link to={routes.images}>Fotot</Link>
      </Menu.Item>
      <Menu.Item key={routes.users} icon={<TeamOutlined />}>
        <Link to={routes.users}>Perdoruesit</Link>
      </Menu.Item>

      <Menu.Item onClick={() => dispatch(logout())} style={{ position: "absolute", bottom: 0 }} key="8" icon={<LogoutOutlined />}>
        Dil
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
