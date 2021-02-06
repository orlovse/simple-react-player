import LibrarySong from "./librarySong";
import styles from "./library.module.scss";

const Library = ({
  songs,
  setCurrentSong,
  songRef,
  isPlaying,
  setPlaylist,
}) => {
  return (
    <div className={styles.library}>
      <h2>Library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
            songRef={songRef}
            isPlaying={isPlaying}
            songs={songs}
            setPlaylist={setPlaylist}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
