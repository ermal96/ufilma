import React from "react";
import styled from "styled-components";

import { RiVolumeMuteLine, RiVolumeUpLine } from "react-icons/ri";

const UVolumeWrapper = styled.div`
  position: relative;
  display: flex;

  svg {
    margin-right: 0;
    width: 5rem;
    padding-right: 2rem;
  }
`;

const Volume = ({ onClick, muted }) => {
  return (
    <UVolumeWrapper>
      {muted ? (
        <RiVolumeMuteLine onClick={onClick} />
      ) : (
        <RiVolumeUpLine onClick={onClick} />
      )}
    </UVolumeWrapper>
  );
};

export default Volume;
