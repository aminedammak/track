import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import AuthContext from "../context/AuthContext";
const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In for tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        textLink="Don't have an account? sign up instead"
        routeName="Signup"
      />
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});
//test1@test.com
