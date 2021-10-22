import React, { useContext } from "react";
import LocationContext from "../context/LocationContext";
import TrackContext from "../context/TrackContext";
import { useNavigation } from "@react-navigation/core";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
    reset,
  } = useContext(LocationContext);
  const navigation = useNavigation();
  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigation.navigate("Track");
  };

  return [saveTrack];
};
