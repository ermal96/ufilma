import React from "react";
import { Row, Col } from "reactstrap";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <Row>
      <Col md={2}>
        <Sidebar />
      </Col>

      <Col md={10}>{children}</Col>
    </Row>
  );
};

export default Layout;
