import React, { useState, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import GMap from "./GMap";

// API key of the google map
const GOOGLE_MAP_API_KEY = "AIzaSyA3Fvc0bRRWw4hTtD2Sln45D4D7CV1de2I";

const App = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const options = {
      apiKey: GOOGLE_MAP_API_KEY,
      version: "weekly",
      libraries: ["geometry"],
    };

    new Loader(options)
      .load()
      .then(() => {
        setLoadMap(true);
      })
      .catch((e) => {
        console.error(
          "Sorry, something went wrong: Please try again later. Error:",
          e
        );
      });
  }, []);

  return (
    <div className="App">{!loadMap ? <div>Loading...</div> : <GMap />}</div>
  );
};

export default App;
