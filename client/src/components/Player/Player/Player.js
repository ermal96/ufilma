/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { RiFullscreenFill, RiPlayLine, RiPauseLine, RiVolumeMuteLine, RiVolumeUpLine, RiFullscreenExitLine } from "react-icons/ri";
import Timeline from "../Timeline/Timeline";
import screenfull from "screenfull";
import Loader from "../Loader/Loader";
import { addWatching, getWatching } from "../../../store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import styles from "./Player.module.scss";

const Player = ({ src, cover, title, subtitle }) => {
  const dispatch = useDispatch();
  const movieId = useSelector(({ movies }) => movies.movie._id);
  const isLoggedIn = useSelector(({ user }) => user.loggedIn);
  const userId = useSelector(({ user }) => user.user.id);
  const watching = useSelector(({ user }) => user.watching);

  const playerRef = useRef(0);
  const trackRef = useRef(0);
  const playerRefContainer = useRef();
  const [activePlayer, setActivePlayer] = useState(false);
  const [controlAreaClasses, setControlAreaClasses] = useState();
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [playedTime, setPlayedTime] = useState(0);
  const [duration, setDuration] = useState();
  const [ready, setReady] = useState(false);
  const [buffering, setBuffering] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [loaded, setLoaded] = useState(0);
  const [updatedDuration, setUpdatedDuration] = useState(0);

  const savedTime = useRef();

  let filterTime = null;

  if (watching) {
    filterTime = watching.filter((item) => item._id === movieId);
  }

  const handleClickFullscreen = () => {
    screenfull.toggle(playerRefContainer.current);
    setFullScreen(!fullScreen);
  };

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
    }, 200);
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

    setUpdatedDuration(duration - playedTime);
  };

  const handleSeeking = () => {
    setBuffering(true);
  };

  const handleSeeked = () => {
    setBuffering(false);
    setPlayedTime(playerRef.current.currentTime);
    savedTime.current = playedTime;
  };

  const secondsToTime = (secs) => {
    secs = Math.round(secs);
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    var obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  };

  const handleDurationChange = () => {
    setDuration(playerRef.current.duration);
    setUpdatedDuration(playerRef.current.duration);
  };

  const handleProgress = (e) => {
    var duration = playerRef.current.duration;
    if (duration > 0) {
      for (var i = 0; i < playerRef.current.buffered.length; i++) {
        if (playerRef.current.buffered.start(playerRef.current.buffered.length - 1 - i) < playerRef.current.currentTime) {
          setLoaded((playerRef.current.buffered.end(playerRef.current.buffered.length - 1 - i) / duration) * 100);
          break;
        }
      }
    }
  };

  useEffect(() => {
    setActivePlayer(true);

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
        <video
          poster={cover}
          className={styles.playerVideo}
          ref={playerRef}
          onCanPlay={() => setReady(true)}
          onEnded={() => setPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          onSeeked={handleSeeked}
          onSeeking={handleSeeking}
          onProgress={(e) => handleProgress(e)}
          onDurationChange={handleDurationChange}>
          <source src={src} type="video/mp4" />
          <track ref={trackRef} label="Shqip" kind="subtitles" srcLang="en" src="/holidate.vtt" default />
        </video>

        <Loader buffering={buffering} />

        {/* controls */}
        {ready ? (
          <div className={styles.controls} active={playing ? "false" : "true"}>
            <div className={cx(styles.controlsArea, styles[controlAreaClasses])} onClick={handleControlArea}>
              {playing ? <RiPlayLine /> : <RiPauseLine />}
            </div>

            <div className={styles.controlsWrap}>
              {/* Timeline */}
              <div className={styles.timeline}>
                <Timeline max={duration} value={playedTime} loaded={loaded} onChange={(e) => handlePlayedTime(e)} />
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

                  {/* time */}
                  <div className={styles.controlsTime}>
                    {secondsToTime(duration).h !== 0 ? <span>{secondsToTime(updatedDuration).h}:</span> : null}
                    <span>{secondsToTime(updatedDuration).m}:</span>
                    <span>{secondsToTime(updatedDuration).s}</span>
                  </div>
                </div>

                {/* Right controls */}
                <div className={styles.controlsRight}>
                  {/* Fullscreen mode */}
                  {fullScreen ? (
                    <RiFullscreenExitLine title="Exit Fullscreen" onClick={handleClickFullscreen} />
                  ) : (
                    <RiFullscreenFill title="Fullscreen" onClick={handleClickFullscreen} />
                  )}
                </div>
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
