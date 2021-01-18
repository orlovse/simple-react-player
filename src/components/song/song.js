import PropTypes from "prop-types";
import styles from "./song.module.scss";

const Song = ({ currentSong }) => {
  return (
    <div className={styles.container}>
      <img src={currentSong.cover} alt={currentSong.name}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

Song.propTypes = {
  currentSong: PropTypes.shape({
    name: PropTypes.string,
    cover: PropTypes.string,
    artist: PropTypes.string,
    color: PropTypes.array,
    active: PropTypes.bool,
  }).isRequired,
};

export default Song;
