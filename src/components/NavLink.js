import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";
import { Text } from "react-native-elements";
import AuthContext from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const NavLink = ({ textLink, routeName }) => {
  const { clearErrorMessage } = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(routeName);
        clearErrorMessage();
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
