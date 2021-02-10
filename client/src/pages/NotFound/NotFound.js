import React from "react";
import notFound from "../../assets/not-found.svg";
import styles from "./NotFound.module.scss";
import { Fade, Layout, Seo } from "../../components";

const NotFound = () => {
  return (
    <Layout>
      <Seo title="Nuk u gjend" description="Faqa nuk u gjend" />
      <Fade>
        <div className={styles.notFound}>
          <img src={notFound} alt="Imazh" />
        </div>
      </Fade>
    </Layout>
  );
};

export default NotFound;
