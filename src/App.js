import { useState, useRef } from "react";
import PropTypes from "prop-types";

import Player from "./components/player";
import Song from "./components/song";
import Library from "./components/library";
import { formatTime } from "./utils.js";
import getPlaylist from "./data";
import Nav from "./components/nav";
function App() {
  const [playlist, setPlaylist] = useState(getPlaylist());
  const [currentSong, setCurrentSong] = useState(playlist[0]);
  const songRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHanler = (event) => {
    const formatedCurrentTime = formatTime(event.target.currentTime);
    const formatedDuration = formatTime(event.target.duration);
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    const animationPercentage = Math.round((currentTime / duration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      formatedCurrentTime,
      formatedDuration,
      animationPercentage,
    });
  };

  const songEndHandler = async () => {
    let currentIndex = playlist.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(playlist[(currentIndex + 1) % playlist.length]);
    if (isPlaying) songRef.current.play();
  };

  return (
    <div className={`app ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        songRef={songRef}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songs={playlist}
        setCurrentSong={setCurrentSong}
        setPlaylist={setPlaylist}
      />
      <Library
        songRef={songRef}
        songs={playlist}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setPlaylist={setPlaylist}
        libraryStatus={libraryStatus}
      />
      <audio
        onLoadedMetadata={timeUpdateHanler}
        onTimeUpdate={timeUpdateHanler}
        onEnded={songEndHandler}
        ref={songRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

App.propTypes = {
  // playlist: PropTypes.array.isRequired,
};

export default App;
