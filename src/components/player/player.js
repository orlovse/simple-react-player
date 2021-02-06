import { useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./player.module.scss";

const Player = ({
  songRef,
  songInfo,
  setSongInfo,
  isPlaying,
  setIsPlaying,
  songs,
  setCurrentSong,
  currentSong,
}) => {
  useEffect(() => {}, []);

  const playSongHandler = () => {
    if (isPlaying) {
      songRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      songRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const skipTrackHandler = (type) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    console.log("currentIndex", currentIndex);
    if (type === "skip-back") {
      if (currentIndex % songs.length === 0) {
        setCurrentSong(songs[songs.length - 1]);
      } else {
        setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      }
    }
    if (type === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
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
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipTrackHandler("skip-back")}
        />
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          size="2x"
          onClick={() => skipTrackHandler("skip-forward")}
        />
      </div>
    </div>
  );
};

Player.propTypes = {
  // currentSong: PropTypes.shape({
  //   audio: PropTypes.string,
  // }).isRequired,
};

export default Player;
