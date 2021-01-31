import React from "react";
import { RiLoader4Line } from "react-icons/ri";
import styles from "./Loader.module.scss";

const Loader = ({ buffering }) => {
  return (
    <>
      {buffering ? (
        <div className={styles.loader}>
          <RiLoader4Line />
        </div>
      ) : null}
    </>
  );
};

export default Loader;
