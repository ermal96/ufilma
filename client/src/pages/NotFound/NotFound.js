import React from "react";
import notFound from "../../assets/not-found.svg";
import styles from "./NotFound.module.scss";
import { Layout, Seo } from "../../components";

const NotFound = () => {
  return (
    <Layout>
      <Seo title="Nuk u gjend" description="Faqa nuk u gjend" />
      <div className={styles.notFound}>
        <img src={notFound} alt="Imazh" />
      </div>
    </Layout>
  );
};

export default NotFound;
