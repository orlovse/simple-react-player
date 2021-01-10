import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./player.module.scss";
import { formatTime } from "../../utils";

const Player = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });

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
    const currentTime = formatTime(event.target.currentTime);
    const duration = formatTime(event.target.duration);
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  return (
    <div className={styles.container}>
      <div className={styles.timecontrol}>
        <p>{songInfo.currentTime}</p>
        <input type="range" />
        <p>{songInfo.duration}</p>
      </div>
      <div className={styles.playcontrol}>
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon icon={faPlay} size="2x" onClick={playSongHandler} />
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
