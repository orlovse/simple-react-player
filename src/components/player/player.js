import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./player.module.scss";

const Player = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timecontrol}>
        <p>Start</p>
        <input type="range" />
        <p>End</p>
      </div>
      <div className={styles.playcontrol}>
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon icon={faPlay} size="2x" />
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </div>
    </div>
  );
};

export default Player;
