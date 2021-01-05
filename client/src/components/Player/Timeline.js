import React from "react";
import styled from "styled-components";
import { Range } from "../../components";

const UTimeline = styled.div`
  width: 99.6%;
  margin-left: 0.7rem;
`;

const Timeline = ({ played, onMouseDown, onChange, onMouseUp }) => {
  return (
    <UTimeline>
      <Range
        type="range"
        min={0}
        max={0.999999}
        step="any"
        value={played}
        onMouseDown={onMouseDown}
        onChange={onChange}
        onMouseUp={onMouseUp}
      />
    </UTimeline>
  );
};

export default Timeline;
