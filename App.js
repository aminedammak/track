import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import LoadingScreen from "./src/screens/LoadingScreen";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

import { AuthProvider } from "./src/context/AuthContext";
import { LocationProvider } from "./src/context/LocationContext";
import AuthContext from "./src/context/AuthContext";
import { TrackProvider } from "./src/context/TrackContext";

const Stack = createNativeStackNavigator();
const TrackListStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TrackList = () => {
  return (
    <TrackListStack.Navigator>
      <TrackListStack.Screen name="TrackList" component={TrackListScreen} />
      <TrackListStack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </TrackListStack.Navigator>
  );
};

const App = () => {
  const { state } = useContext(AuthContext);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {!state.finishLoading ? (
          <LoadingScreen />
        ) : state.token ? (
          <Tab.Navigator>
            <Tab.Screen
              name="Track"
              component={TrackList}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="TrackCreate"
              component={TrackCreateScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Account"
              component={AccountScreen}
              options={{ headerShown: false }}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signin"
              component={SigninScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
