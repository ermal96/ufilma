import React from "react";
import styles from "./Range.module.scss";

const Range = ({ onChange, value, onMouseUp, onMouseDown }) => {
  return (
    <input
      className={styles.inputRange}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      step="any"
      type="range"
      min={0}
      max={1}
      value={value}
      onChange={onChange}
      style={{
        background: `-webkit-gradient(linear, left top, right top, from(#de1212), color-stop(${Math.round(
          value * 100
        )}%, #de1212), color-stop(${Math.round(value * 100)}%, #f3f3f3))`,
      }}
    />
  );
};

export default Range;
