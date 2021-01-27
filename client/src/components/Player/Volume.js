import React from "react";
import styled from "styled-components";

import { RiVolumeMuteLine, RiVolumeUpLine } from "react-icons/ri";

const UVolumeWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Volume = ({ onClick, muted }) => {
  return (
    <UVolumeWrapper>
      {muted ? (
        <RiVolumeMuteLine title="Unmute" onClick={onClick} />
      ) : (
        <RiVolumeUpLine title="Mute" onClick={onClick} />
      )}
    </UVolumeWrapper>
  );
};

export default Volume;
