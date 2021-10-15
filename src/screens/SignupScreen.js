import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import AuthContext from "../context/AuthContext";
const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        textLink="Already have an account? sign in instead"
        routeName="Signin"
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});
//test8@test.com
