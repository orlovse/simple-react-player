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
  setPlaylist,
}) => {
  const activeLibraryHandler = (next) => {
    const newSongs = songs.map((item) => {
      if (item.id === next.id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });
    setPlaylist(newSongs);
  };

  const playSongHandler = () => {
    if (isPlaying) {
      songRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      songRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const skipTrackHandler = async (type) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (type === "skip-back") {
      if (currentIndex % songs.length === 0) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
      } else {
        await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
      }
    }
    if (type === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }

    if (isPlaying) songRef.current.play();
  };

  const dragHandler = (event) => {
    songRef.current.currentTime = event.target.value;
    setSongInfo({ ...songInfo, currentTime: event.target.value });
  };

  const trackStyle = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.timecontrol}>
        <p>{songInfo.formatedCurrentTime}</p>
        <div className={styles.track}>
          <input
            style={{
              background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
            }}
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div style={trackStyle} className={styles.animateTrack}></div>
        </div>

        <p>{songInfo.duration ? songInfo.formatedDuration : "0:00"}</p>
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
