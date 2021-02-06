import styles from "../library.module.scss";
const LibrarySong = ({ song, setCurrentSong }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
  };
  return (
    <div className={styles.librarySong} onClick={songSelectHandler}>
      <img alt={song.name} src={song.cover}></img>
      <div className={styles.songDescription}>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
