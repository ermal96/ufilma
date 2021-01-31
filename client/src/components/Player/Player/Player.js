/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useRef, useEffect } from "react";
import { RiFullscreenFill, RiPlayLine, RiPauseLine, RiVolumeMuteLine, RiVolumeUpLine } from "react-icons/ri";
import { Range } from "../..";
import screenfull from "screenfull";
import Loader from "../Loader/Loader";
import { addWatching, getWatching } from "../../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import styles from "./Player.module.scss";

const Player = ({ src, cover, title }) => {
  const dispatch = useDispatch();
  const movieId = useSelector(({ movies }) => movies.movie._id);
  const isLoggedIn = useSelector(({ user }) => user.loggedIn);
  const userId = useSelector(({ user }) => user.user.id);
  const watching = useSelector(({ user }) => user.watching);

  const playerRef = useRef(0);
  const playerRefContainer = useRef();
  const [activePlayer, setActivePlayer] = useState(false);
  const [controlAreaClasses, setControlAreaClasses] = useState();
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [playedTime, setPlayedTime] = useState(0);
  const [duration, setDuration] = useState();
  const [ready, setReady] = useState(false);
  const [time, setTime] = useState();
  const savedTime = useRef();

  let filterTime = null;

  if (watching) {
    filterTime = watching.filter((item) => item._id === movieId);
  }

  const handleClickFullscreen = () => {
    screenfull.toggle(playerRefContainer.current);
  };

  function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

    return {
      minutes: result.substr(3, 2),
      seconds: result.substr(6, 2),
    };
  }

  const handleControlArea = () => {
    setControlAreaClasses("active");

    setPlaying(!playing);

    if (playing) {
      playerRef.current.pause();
    } else {
      playerRef.current.play();
    }

    setTimeout(() => {
      setControlAreaClasses("");
    }, 400);
  };

  const handlePlay = () => {
    setPlaying(true);
    playerRef.current.play();
  };

  const handlePause = () => {
    setPlaying(false);
    playerRef.current.pause();
  };

  const handleMute = () => {
    setMuted(true);
    playerRef.current.muted = true;
  };

  const handleUnmute = () => {
    setMuted(false);
    playerRef.current.muted = false;
  };

  const handlePlayedTime = (e) => {
    setPlayedTime(parseFloat(e.target.value));
    playerRef.current.currentTime = parseFloat(e.target.value);
  };

  const handleTimeUpdate = () => {
    setPlayedTime(playerRef.current.currentTime);
    savedTime.current = playedTime;
  };

  useEffect(() => {
    setActivePlayer(true);

    if (duration) {
      setTime(formatTime(duration));
    }

    if (isLoggedIn) {
      dispatch(
        getWatching({
          userId,
        })
      );
      if (filterTime.length) {
        playerRef.current.currentTime = parseInt(filterTime[0].played);
      }
      return () => {
        if (savedTime.current !== undefined && savedTime.current !== 0) {
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
  }, [dispatch, movieId, userId, activePlayer, duration, isLoggedIn]);

  return (
    <>
      <div className={styles.player} ref={playerRefContainer}>
        {console.log(time)}
        <video
          className={styles.playerVideo}
          ref={playerRef}
          onCanPlay={() => setReady(true)}
          onTimeUpdate={handleTimeUpdate}
          onDurationChange={() => setDuration(playerRef.current.duration)}>
          <source src={src} type="video/mp4"></source>
        </video>
        {/* <Loader buffering={buffering} /> */}

        {/* controls */}
        {ready ? (
          <div className={styles.controls}>
            <div className={cx(styles.controlsArea, styles[controlAreaClasses])} onClick={handleControlArea}>
              {playing ? <RiPlayLine /> : <RiPauseLine />}
            </div>

            {/* Timeline */}
            <div className={styles.timeline}>
              <Range max={duration} value={playedTime} onChange={(e) => handlePlayedTime(e)} />
            </div>

            {/* Player constrols wrapper */}
            <div className={styles.controlWrapper}>
              {/* Left controls */}
              <div className={styles.controlsLeft}>
                {/* Play Pause */}
                {playing ? <RiPauseLine title="Pause" onClick={handlePause} /> : <RiPlayLine title="Play" onClick={handlePlay} />}
                {/* Player volume */}
                <div className={styles.volume}>
                  {muted ? <RiVolumeMuteLine title="Unmute" onClick={handleUnmute} /> : <RiVolumeUpLine title="Mute" onClick={handleMute} />}
                </div>
                {/* PLayer title */}
                <h1 className={styles.title}>{title}</h1>
              </div>

              {/* Right controls */}
              <div className={styles.controlsRight}>
                {/* Fullscreen mode */}
                <RiFullscreenFill title="Fullscreen" className="full-screen" onClick={handleClickFullscreen} />
              </div>
            </div>
          </div>
        ) : (
          <Loader buffering={true} />
        )}
      </div>
    </>
  );
};

export default Player;
