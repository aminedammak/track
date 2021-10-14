import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";
import { Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const NavLink = ({ textLink, routeName }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(routeName);
      }}
    >
      <Spacer>
        <Text style={styles.link}>{textLink}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

export default NavLink;

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});
