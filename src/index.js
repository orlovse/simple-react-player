import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import getPlaylist from "./data";

ReactDOM.render(
  <React.StrictMode>
    <App playlist={getPlaylist()} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
