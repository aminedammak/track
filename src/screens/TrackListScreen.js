import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import TrackContext from "../context/TrackContext";
import { ListItem } from "react-native-elements";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  useEffect(() => {
    fetchTracks();
  }, []);

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={(track) => track._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              key={item._id}
              onPress={() =>
                navigation.navigate("TrackDetail", { id: item._id })
              }
            >
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
