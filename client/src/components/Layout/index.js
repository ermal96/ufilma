import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: "1200px", margin: "20px auto" }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
