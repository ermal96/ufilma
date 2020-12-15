import React from "react";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import styled from "styled-components";
const { Sider } = Layout;
const { SubMenu } = Menu;

const Logo = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 28px;
  font-size: 17px;
  background: #cccccc;
`;

const AdminSider = styled(Sider)`
  background-color: white;
`;

const Sidebar = () => {
  return (
    <AdminSider>
      <Logo>Logo here</Logo>

      <Menu theme="white" defaultSelectedKeys={["1"]} mode="inline">
        <SubMenu key="movies" icon={<UserOutlined />} title="Movies">
          <Menu.Item key="1">All Movies</Menu.Item>
          <Menu.Item key="2">Add Movie</Menu.Item>
        </SubMenu>
        <SubMenu key="categories" icon={<TeamOutlined />} title="Categories">
          <Menu.Item key="3">All Categories</Menu.Item>
          <Menu.Item key="4">Add Category</Menu.Item>
        </SubMenu>
      </Menu>
    </AdminSider>
  );
};

export default Sidebar;
