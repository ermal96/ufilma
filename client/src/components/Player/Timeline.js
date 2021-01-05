import React from "react";
import styled from "styled-components";
import { Range } from "../../components";

const UTimeline = styled.div`
  width: 99.6%;
  margin-left: 0.7rem;
`;

const Timeline = ({
  played,
  onMouseDown,
  onChange,
  onMouseUp,
  loaded,
  duration,
}) => {
  return (
    <UTimeline>
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
