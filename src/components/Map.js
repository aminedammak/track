import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];

  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 37.33233 + Math.random() * i * 0.01,
      longitude: -122.03121 + Math.random() * i * 0.01,
    });
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Polyline lineCap="butt" lineDashPattern={[0]} coordinates={points} />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 150,
  },
});
