import video from "../data/video.js";
import Iframe from "./Iframe.js";
import React from "react";
import Buttons from "./Buttons.js";
import VideoDes from "./VideoDes.js";


function App() {
  
  return (
    <div className="App">
      <Iframe video={video} />
      <VideoDes video={video} />
      <Buttons video={video} /> 
    </div>
  );
}

export default App;
