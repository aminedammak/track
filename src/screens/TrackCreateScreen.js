import "../_mockLocation";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { useFocusEffect } from "@react-navigation/native";

import LocationContext from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

import Map from "../components/Map";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [focus, setFocus] = useState(false);
  const [error] = useLocation(focus, addLocation);

  useFocusEffect(
    React.useCallback(() => {
      setFocus(true);
      return () => setFocus(false);
    })
  );

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
