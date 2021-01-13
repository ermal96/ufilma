import React from "react";
import { Layout, Breadcrumb } from "antd";
import Logo from "../components/Logo";
import Nav from "./Nav";
const { Content, Sider } = Layout;

const ULayout = ({ activePage, children, activeRoute }) => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <Logo />
          <Nav activeItem={activeRoute} />
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "20px" }}>
            <Breadcrumb>
              <Breadcrumb.Item>UFilma</Breadcrumb.Item>
              <Breadcrumb.Item>{activePage}</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ marginTop: "30px" }}>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default ULayout;
