import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "../components/Spacer";

const AuthForm = ({ headerText, errorMessage, submitButtonText, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          label="Email"
          value={email}
          onChangeText={setEmail}
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          label="Password"
          value={password}
          onChangeText={setPassword}
        />
      </Spacer>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 20,
    color: "red",
  },
});
