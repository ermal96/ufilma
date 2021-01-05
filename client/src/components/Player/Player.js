/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player";
import styled from "styled-components";
import screenfull from "screenfull";
import { RiFullscreenFill, RiPlayLine, RiPauseLine } from "react-icons/ri";
import Volume from "./Volume";
import Timeline from "./Timeline";

const UPlayer = styled.div`
  position: relative;
  outline: none;
  &::focus {
    outline: none;
  }
`;
const UPlayerControls = styled.div`
  width: 100%;
  height: 50%;
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
  padding: 2rem 2rem 3rem 2rem;
  opacity: ${(props) => (props.playing ? 0 : 1)};
  transition: all 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

const UPlayerControlsTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UPlayerControlsLeft = styled.div`
  display: flex;

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
  svg {
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.2) !important;
    }
  }
`;

const UThumbnail = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
  display: ${(props) => (props.started ? "none" : "block")};
`;

const Player = ({ src, thumbnail, controls = false }) => {
  const playerRef = useRef(null);
  const playerRefContainer = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [seeking, setSeeking] = useState(false);

  const handleClickFullscreen = () => {
    screenfull.toggle(findDOMNode(playerRefContainer.current));
  };

  const handleMouseLeave = () => {
    if (!controls) {
      setPlaying(false);
    }
  };

  const handleMouseEnter = () => {
    if (!controls) {
      setPlaying(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 32) {
      setPlaying(!playing);
    }
  };

  return (
    <UPlayer
      ref={playerRefContainer}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onKeyDown={handleKeyPress}
      tabIndex="0"
    >
      <ReactPlayer
        ref={playerRef}
        pip={true}
        playing={playing}
        playbackRate={playbackRate}
        volume={1}
        muted={muted}
        onEnded={() => setPlaying(false)}
        onDuration={(duration) => setDuration(duration)}
        onProgress={(state) => {
          if (!state.seeking) {
            setLoaded(state.loaded);
            setPlayed(state.played);
          }
        }}
        className="player-wrapper"
        width="100%"
        height="100%"
        min-height="700px"
        url={src}
      />

      <UThumbnail started={played} src={thumbnail} alt="test" />

      {controls ? (
        <UPlayerControls playing={playing}>
          <UPlayerControlsTop>
            <UPlayerControlsLeft className="uplayer-controls">
              {playing ? (
                <RiPauseLine onClick={() => setPlaying(false)} />
              ) : (
                <RiPlayLine onClick={() => setPlaying(true)} />
              )}
              <Volume onClick={() => setMuted(!muted)} muted={muted} />
            </UPlayerControlsLeft>
            <UPlayerControlsRight>
              <RiFullscreenFill
                className="full-screen"
                onClick={handleClickFullscreen}
              />
            </UPlayerControlsRight>
          </UPlayerControlsTop>
          <Timeline
            duration={duration}
            loaded={loaded}
            played={played}
            onMouseUp={(e) => {
              playerRef.current.seekTo(parseFloat(e.target.value));
              setSeeking(false);
            }}
            onChange={(e) => setPlayed(parseFloat(e.target.value))}
            onMouseDown={() => setSeeking(true)}
          />
        </UPlayerControls>
      ) : null}
    </UPlayer>
  );
};

export default Player;
