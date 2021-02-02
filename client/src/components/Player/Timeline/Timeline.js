import React from "react";
import styles from "./Timeline.module.scss";

const Timeline = ({ onChange, value, onMouseUp, onMouseDown, max, loaded }) => {
  return (
    <>
      <progress className={[styles.progresBarLoaded]} value={loaded} min={0} max={100}></progress>
      <progress className={styles.progresBar} value={value} min={0} max={max}></progress>
      <input
        className={styles.inputTimeline}
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

export default Timeline;
