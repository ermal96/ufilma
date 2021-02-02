import React from "react";
import Header from "../../../containers/Header/Header/Header";
import Footer from "../../../containers/Footer/Footer";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <main className={styles.layout}>
      <Header />
      <article className={styles.layoutWrapper}>{children}</article>
      <Footer />
    </main>
  );
};

export default Layout;
