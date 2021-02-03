import React from "react";
import notFound from "../../assets/not-found.svg";
import styles from "./NotFound.module.scss";
import { Layout } from "../../components";

const NotFound = () => {
  return (
    <Layout>
      <div className={styles.notFound}>
        <img src={notFound} alt="Imazh" />
      </div>
    </Layout>
  );
};

export default NotFound;
