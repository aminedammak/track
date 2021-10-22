import React, { useContext } from "react";
import LocationContext from "../context/LocationContext";
import TrackContext from "../context/TrackContext";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
  };

  return [saveTrack];
};
