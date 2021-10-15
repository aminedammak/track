import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>tracklist screen</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
