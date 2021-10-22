import React, { useContext } from "react";
import LocationContext from "../context/LocationContext";
import TrackContext from "../context/TrackContext";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
  } = useContext(LocationContext);

  const saveTrack = () => {
    createTrack(name, locations);
  };

  return [saveTrack];
};
