import LibrarySong from "./librarySong";
import styles from "./library.module.scss";

const Library = ({ songs, setCurrentSong }) => {
  return (
    <div className={styles.library}>
      <h2>Library</h2>
      <div>
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
