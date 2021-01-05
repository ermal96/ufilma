import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Range } from "../../components";

import {
  RiVolumeDownLine,
  RiVolumeMuteLine,
  RiVolumeUpLine,
} from "react-icons/ri";

const UVolumeWrapper = styled.div`
  position: relative;
  display: flex;

  input {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 5rem;
    transform: translateY(-50%);
    width: 15rem;
    visibility: hidden;
  }

  svg {
    margin-right: 0;
    width: 5rem;
    padding-right: 2rem;
  }

  &:hover input {
    visibility: visible;
    opacity: 1 !important;
  }
`;

const Volume = ({ onChange, value, onClick, muted }) => {
  const [volume, setVolume] = useState(value);

  useEffect(() => {
    if (muted) {
      setVolume(0);
    } else {
      setVolume(value);
    }
  }, [muted, value]);

  return (
    <UVolumeWrapper>
      {muted || value === 0 ? (
        <RiVolumeMuteLine onClick={onClick} />
      ) : volume > 0.5 ? (
        <RiVolumeUpLine onClick={onClick} />
      ) : (
        <RiVolumeDownLine onClick={onClick} />
      )}
      <Range
        step="any"
        type="range"
        min={0}
        max={1}
        value={volume}
        onChange={onChange}
      />
    </UVolumeWrapper>
  );
};

export default Volume;
