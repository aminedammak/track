import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import TrackContext from "../context/TrackContext";

const TrackDetailScreen = ({ route }) => {
  const { id } = route.params;
  const { state } = useContext(TrackContext);
  const track = state.find((item) => {
    return item._id === id;
  });
  return (
    <View>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
    </View>
  );
};

export default TrackDetailScreen;

const styles = StyleSheet.create({});
