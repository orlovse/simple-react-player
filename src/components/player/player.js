import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./player.module.scss";
import { formatTime } from "../../utils";

const Player = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  useEffect(() => {}, []);

  const songRef = useRef(null);

  const playSongHandler = () => {
    if (isPlaying) {
      songRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      songRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHanler = (event) => {
    const formatedCurrentTime = formatTime(event.target.currentTime);
    const formatedDuration = formatTime(event.target.duration);
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      formatedCurrentTime,
      formatedDuration,
    });
  };

  const dragHandler = (event) => {
    songRef.current.currentTime = event.target.value;
    setSongInfo({ ...songInfo, currentTime: event.target.value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.timecontrol}>
        <p>{songInfo.formatedCurrentTime}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
        />
        <p>{songInfo.formatedDuration}</p>
      </div>
      <div className={styles.playcontrol}>
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </div>
      <audio
        onLoadedMetadata={timeUpdateHanler}
        onTimeUpdate={timeUpdateHanler}
        ref={songRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

Player.propTypes = {
  currentSong: PropTypes.shape({
    audio: PropTypes.string,
  }).isRequired,
};

export default Player;
