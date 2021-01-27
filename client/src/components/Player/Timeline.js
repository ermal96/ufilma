import React from "react";
import styled from "styled-components";
import { Range } from "../../components";

const UTimeline = styled.div`
  width: 99.6%;
  margin-left: 0.7rem;
  transition: all 0.3s ease;
  margin-bottom: -3rem;
  position: relative;
  z-index: 3;
  /* opacity: ${(props) => (props.visible ? 1 : 0)}; */
`;

const Timeline = ({
  played,
  onMouseDown,
  onChange,
  onMouseUp,
  loaded,
  duration,
  visible,
}) => {
  return (
    <UTimeline visible={visible}>
      <Range
        max={duration}
        value={played}
        loaded={loaded}
        onMouseDown={onMouseDown}
        onChange={onChange}
        onMouseUp={onMouseUp}
      />
    </UTimeline>
  );
};

export default Timeline;
