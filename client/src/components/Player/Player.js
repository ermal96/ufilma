/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player";
import styled from "styled-components";
import screenfull from "screenfull";
import Controls from "./Controls";
import Loader from "./Loader";
import { addWatching, getWatching } from "../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const UPlayer = styled.div`
  position: relative;
  outline: none;
  height: 85vh;
  background: ${({ theme }) => theme.colors.tertiary};

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
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
  const dispatch = useDispatch();
  const movieId = useSelector(({ movies }) => movies.movie._id);
  const isLoggedIn = useSelector(({ user }) => user.loggedIn);
  const userId = useSelector(({ user }) => user.user.id);
  const watching = useSelector(({ user }) => user.watching);

  const playerRef = useRef(null);
  const playerRefContainer = useRef(null);
  const [buffering, setBuffering] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [, setSeeking] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(true);
  const [updatedTime, setUpdatedTime] = useState(0);
  const savedTime = useRef();

  const filterTime = watching.filter((item) => item._id === movieId);

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

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(
        getWatching({
          userId,
        })
      );

      if (filterTime.length) {
        setUpdatedTime(Number(filterTime[0].played));

        if (updatedTime) {
          setPlayed(updatedTime);
          playerRef.current.seekTo(updatedTime);
        }
      }

      return () => {
        if (savedTime.current !== undefined) {
          dispatch(
            addWatching({
              userId,
              _id: movieId,
              played: savedTime.current.toString(),
            })
          );
        }
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, movieId, userId, updatedTime, isLoggedIn]);

  return (
    <>
      <UPlayer ref={playerRefContainer} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
        <ReactPlayer
          url={src}
          onBuffer={() => setBuffering(true)}
          onBufferEnd={() => setBuffering(false)}
          ref={playerRef}
          playing={playing}
          playbackRate={playbackRate}
          volume={1}
          muted={muted}
          onEnded={() => setPlaying(false)}
          onDuration={(duration) => setDuration(duration)}
          onProgress={(state) => {
            if (!state.seeking) {
              setLoaded(state.loaded);
              savedTime.current = state.played;
              if (state.played === 0) {
                setPlayed(updatedTime);
              } else {
                setPlayed(state.played);
              }
            }
          }}
          className="react-player"
          width="100%"
          height="100%"
        />

        {cover ? <UCover started={playing} src={cover} /> : null}
        <Loader buffering={buffering} />

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
    </>
  );
};

export default Player;
