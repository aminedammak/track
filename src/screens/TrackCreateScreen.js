//import "../_mockLocation";
import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

import LocationContext from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

import Map from "../components/Map";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [error] = useLocation(addLocation);

  return (
    <SafeAreaView>
      <Text h2>Create a track</Text>
      <Map />
      {error ? <Text>{error}</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
