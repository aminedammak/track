import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { requestForegroundPermissionsAsync } from "expo-location";

import Map from "../components/Map";

const TrackCreateScreen = () => {
  const [error, setError] = useState(null);
  const startWatching = async () => {
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setError("Permission to access location was denied");
      return;
    } else {
      setError(null);
    }
  };
  useEffect(() => {
    startWatching();
  }, []);
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
