import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Signup screen</Text>
      <Button
        title="Go to signin screen"
        onPress={() => {
          navigation.navigate("Signin");
        }}
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
