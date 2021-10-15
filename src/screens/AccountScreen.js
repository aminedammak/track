import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContext from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Text h3>Account screen</Text>
      <Button title="Logout" onPress={signout} />
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
