import React from "react";
import styles from "./Range.module.scss";

const Range = ({ onChange, value, onMouseUp, onMouseDown, max }) => {
  return (
    <>
      <progress className={styles.progresBar} value={value} min={0} max={max}></progress>
      <input
        className={styles.inputRange}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        step="any"
        type="range"
        min={0}
        max={max}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Range;
