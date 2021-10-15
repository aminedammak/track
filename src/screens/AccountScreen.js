import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import AuthContext from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <View>
      <Text h3>Account screen</Text>
      <Button title="Logout" onPress={signout} />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
