import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import TrackContext from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ route }) => {
  const { id } = route.params;
  const { state } = useContext(TrackContext);
  const track = state.find((item) => {
    return item._id === id;
  });

  const initialCoords = track.locations[0].coords;
  return (
    <>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline
          coordinates={track.locations.map((loc) => loc.coords)}
          lineDashPattern={[0]}
        />
      </MapView>
    </>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
