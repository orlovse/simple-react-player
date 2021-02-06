import { useState } from "react";
import PropTypes from "prop-types";

import Player from "./components/player";
import Song from "./components/song";
import Library from "./components/library";

function App({ playlist }) {
  const [currentSong, setCurrentSong] = useState(playlist[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
      <Library songs={playlist} setCurrentSong={setCurrentSong} />
    </div>
  );
}

App.propTypes = {
  playlist: PropTypes.array.isRequired,
};

export default App;
