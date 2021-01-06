import React from "react";
import {
  RiFullscreenFill,
  RiPlayLine,
  RiPauseLine,
  RiTimer2Line,
} from "react-icons/ri";
import Volume from "./Volume";
import Timeline from "./Timeline";
import Tooltip from "../Base/Tooltip";
import styled from "styled-components";
import Title from "./Title";

const UPlayerControls = styled.div`
  width: 100%;
  height: 70%;
  background-image: linear-gradient(
    to top,
    #161b229e,
    #494c5233,
    #8283881f,
    #bfbfc200,
    #ffffff00
  );
  bottom: 0;
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

const UPlayerControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const UPlaybackSpeed = styled.p`
  font-weight: bold;
  padding: 1rem;
  cursor: pointer;
  color: ${(props) =>
    props.active ? props.theme.colors.secondary : "inherit"};
`;

const Controls = (props) => {
  return (
    <UPlayerControls playing={props.playing}>
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
