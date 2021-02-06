import styles from "../library.module.scss";
const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  songRef,
  isPlaying,
  setPlaylist,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    const newSongs = songs.map((item) => {
      if (item.id === song.id) {
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
    if (isPlaying) {
      const playPromise = songRef.current.play();
      if (playPromise) {
        playPromise.then((audio) => {
          songRef.current.play();
        });
      }
    }
  };
  return (
    <div
      className={`${styles.librarySong} ${
        song.active ? styles.selectedSong : ""
      }`}
      onClick={songSelectHandler}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className={styles.songDescription}>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
