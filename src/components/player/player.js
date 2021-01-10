import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div>
      <div>
        <p>Start</p>
        <input type="range" />
        <p>End</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon icon={faPlay} size="2x" />
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </div>
    </div>
  );
};

export default Player;
