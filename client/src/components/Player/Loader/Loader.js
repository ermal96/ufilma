import React from "react";
import styles from "./Loader.module.scss";

const Loader = ({ buffering }) => {
  return (
    <>
      {buffering ? (
        <div className={styles.loaderWrapper}>
          <div className={styles.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Loader;
