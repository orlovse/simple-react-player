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
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHanler = (event) => {
    const formatedCurrentTime = formatTime(event.target.currentTime);
    const formatedDuration = formatTime(event.target.duration);
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      formatedCurrentTime,
      formatedDuration,
    });
  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        songRef={songRef}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
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
