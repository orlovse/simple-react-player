import styles from "./song.module.scss";

const Song = () => {
  return (
    <div className={styles.container}>
      <div>img</div>
      <h2>SongName</h2>
      <h3>ArtistName</h3>
    </div>
  );
};

export default Song;
