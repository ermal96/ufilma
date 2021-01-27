/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player";
import styled from "styled-components";
import screenfull from "screenfull";

import Controls from "./Controls";

const UPlayer = styled.div`
  position: relative;
  outline: none;
  height: 85vh;
  background: ${({ theme }) => theme.colors.black};

  @media (max-width: 767px) {
    height: 30rem;
  }
`;

const UCover = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
  display: ${(props) => (props.started ? "none" : "block")};
`;

const Player = ({ src, cover, controls = false, title }) => {
  const playerRef = useRef(null);
  const playerRefContainer = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [, setSeeking] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(true);

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

  return (
    <UPlayer
      ref={playerRefContainer}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
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
        className="react-player"
        width="100%"
        height="100%"
        url={src}
      />

      {cover ? <UCover started={played} src={cover} /> : null}

      {controls && (
        <Controls
          muted={muted}
          played={played}
          timelineVisible={timelineVisible}
          duration={duration}
          loaded={loaded}
          playerRef={playerRef}
          setSeeking={setSeeking}
          setPlayed={setPlayed}
          playing={playing}
          setPlaying={setPlaying}
          setMuted={setMuted}
          setTimelineVisible={setTimelineVisible}
          setPlaybackRate={setPlaybackRate}
          playbackRate={playbackRate}
          handleClickFullscreen={handleClickFullscreen}
          title={title}
        />
      )}
    </UPlayer>
  );
};

export default Player;
