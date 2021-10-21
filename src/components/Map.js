import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import LocationContext from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        strokeColor="rgba(158, 158, 255, 1)"
        radius={30}
        fillColor="rgba(158, 158, 255, 0.3)"
      />
      <Polyline
        coordinates={locations.map((loc) => loc.coords)}
        lineDashPattern={[0]}
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 150,
  },
});
