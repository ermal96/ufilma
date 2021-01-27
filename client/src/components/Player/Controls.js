import React, { useState } from "react";
import {
  RiFullscreenFill,
  RiPlayLine,
  RiPauseLine,
  RiTimer2Line,
} from "react-icons/ri";
import Volume from "./Volume";
import Timeline from "./Timeline";
import Tooltip from "../Base/Tooltip";
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
  opacity: ${(props) => (props.playing ? 0 : 1)};
  transition: all 0.3s ease;
  &:hover {
    opacity: 1;
  }
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
    transition: all 0.3s ease;
    opacity: 0;
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    padding: 1.5rem;
    background: rgba(22, 27, 34, 0.6);
    box-shadow: 0 0 0 rgba(22, 27, 34, 0.6);
    animation: ${pulse} 1.5s infinite;
  }

  &.control-area-active {
    svg {
      transition: all 0.3s ease;
      opacity: 1;
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

const UPlaybackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 3rem;
  width: 13rem;
`;

const UPlaybackSpeed = styled.p`
  font-weight: bold;

  cursor: pointer;
  color: ${(props) =>
    props.active ? props.theme.colors.secondary : "inherit"};
`;

const Controls = (props) => {
  const [controlAreaClasses, setControlAreaClasses] = useState();

  const handleControlArea = () => {
    props.setPlaying(!props.playing);
    setControlAreaClasses("control-area-active");

    setTimeout(() => {
      setControlAreaClasses("");
    }, 500);
  };

  return (
    <UPlayerControls playing={props.playing}>
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
            <RiPauseLine onClick={() => props.setPlaying(false)} />
          ) : (
            <RiPlayLine onClick={() => props.setPlaying(true)} />
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
          {/* Playbak speed */}
          <Tooltip
            content={
              <UPlaybackWrapper
                onMouseEnter={() => props.setTimelineVisible(false)}
                onMouseLeave={() => props.setTimelineVisible(true)}
              >
                <UPlaybackSpeed
                  active={props.playbackRate === 0.5 ? true : false}
                  onClick={() => props.setPlaybackRate(0.5)}
                >
                  0.5x
                </UPlaybackSpeed>
                <UPlaybackSpeed
                  active={props.playbackRate === 1 ? true : false}
                  onClick={() => props.setPlaybackRate(1)}
                >
                  1.0x
                </UPlaybackSpeed>
                <UPlaybackSpeed
                  active={props.playbackRate === 1.5 ? true : false}
                  onClick={() => props.setPlaybackRate(1.5)}
                >
                  1.5x
                </UPlaybackSpeed>
              </UPlaybackWrapper>
            }
          >
            <RiTimer2Line
              onMouseEnter={() => props.setTimelineVisible(false)}
              onMouseLeave={() => props.setTimelineVisible(true)}
            />
          </Tooltip>

          {/* Fullscreen mode */}
          <RiFullscreenFill
            className="full-screen"
            onClick={props.handleClickFullscreen}
          />
        </UPlayerControlsRight>
      </UPlayerControlsWrapper>
    </UPlayerControls>
  );
};

export default Controls;
