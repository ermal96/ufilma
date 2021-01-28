import React, { useState } from "react";
import { RiFullscreenFill, RiPlayLine, RiPauseLine } from "react-icons/ri";
import Volume from "./Volume";
import Timeline from "./Timeline";
import styled, { keyframes } from "styled-components";
import Title from "./Title";

const UPlayerControls = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to top,
    #161b229e,
    #494c5233,
    #8283881f,
    #bfbfc200,
    #ffffff00
  );
  bottom: 0;
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 3rem;
  padding: 0 2rem;
  opacity: ${(props) => (props.controlsActive ? 1 : 0)};
  transition: all 0.3s ease;
`;
const pulse = keyframes`
  0% {
   
    box-shadow: 0 0 0 0 rgba(22, 27, 34, 0.6);
  }
  70% {
    
      box-shadow: 0 0 0 1.5rem rgba(22, 27, 34, 0.6);
  }
  100% {
    
      box-shadow: 0 0 0 0 rgba(22, 27, 34, 0.6);
  }

`;

const UPlayerControlsArea = styled.div`
  width: 100%;
  height: 100%;
  bottom: 0;
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  svg {
    transition: all 1s ease;
    opacity: 0;
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    padding: 1.5rem;
    background: rgba(22, 27, 34, 0.6);
    box-shadow: 0 0 0 0 rgba(22, 27, 34, 0.6);
    animation: ${pulse} 2s infinite;
  }

  &.control-area-active {
    svg {
      opacity: 0.6;
    }
  }
`;

const UPlayerControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  position: relative;
  padding-top: 2rem;
  height: 9rem;
`;

const UPlayerControlsLeft = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 2rem;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.2) !important;
    }
  }
`;

const UPlayerControlsRight = styled.div`
  display: flex;
  align-items: center;

  svg {
    transition: all 0.3s ease;
    cursor: pointer;
    margin-left: 2rem;

    &:hover {
      transform: scale(1.2) !important;
    }
  }
`;

const Controls = (props) => {
  const [controlAreaClasses, setControlAreaClasses] = useState();
  const [controlsActive, setControlActive] = useState(true);

  const handleControlArea = () => {
    props.setPlaying(!props.playing);
    setControlAreaClasses("control-area-active");

    setTimeout(() => {
      setControlAreaClasses("");
    }, 300);
  };

  const handleControlsVisibility = () => {
    setControlActive(true);
    if (props.playing && props.played) {
      setTimeout(() => {
        setControlActive(false);
      }, 5000);
    }
  };

  return (
    <UPlayerControls
      onMouseEnter={handleControlsVisibility}
      onMouseMove={handleControlsVisibility}
      controlsActive={controlsActive}
    >
      <UPlayerControlsArea
        className={controlAreaClasses}
        onClick={handleControlArea}
      >
        {props.playing ? <RiPlayLine /> : <RiPauseLine />}
      </UPlayerControlsArea>
      {/* Timeline */}
      <Timeline
        visible={props.timelineVisible}
        duration={props.duration}
        loaded={props.loaded}
        played={props.played}
        onMouseUp={(e) => {
          props.playerRef.current.seekTo(parseFloat(e.target.value));
          props.setSeeking(false);
        }}
        onChange={(e) => props.setPlayed(parseFloat(e.target.value))}
        onMouseDown={() => props.setSeeking(true)}
      />

      {/* Player constrols wrapper */}
      <UPlayerControlsWrapper>
        {/* Left controls */}
        <UPlayerControlsLeft className="uplayer-controls">
          {/* Play Pause */}
          {props.playing ? (
            <RiPauseLine
              title="Pause"
              onClick={() => props.setPlaying(false)}
            />
          ) : (
            <RiPlayLine title="Play" onClick={() => props.setPlaying(true)} />
          )}

          {/* Player volume */}
          <Volume
            onClick={() => props.setMuted(!props.muted)}
            muted={props.muted}
          />

          {/* PLayer title */}
          <Title>{props.title}</Title>
        </UPlayerControlsLeft>

        {/* Right controls */}
        <UPlayerControlsRight>
          {/* Fullscreen mode */}
          <RiFullscreenFill
            title="Fullscreen"
            className="full-screen"
            onClick={props.handleClickFullscreen}
          />
        </UPlayerControlsRight>
      </UPlayerControlsWrapper>
    </UPlayerControls>
  );
};

export default Controls;
