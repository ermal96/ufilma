import React from "react";
import Header from "../../../containers/Header/Header";
import Footer from "../../../containers/Footer/Footer";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <main className={styles.layout}>
      <Header />
      <div className={styles.layoutWrapper}>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
