import React, { useReducer } from "react";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AuthContext = React.createContext();

const authReducer = (state, action) => {
  console.log("dispatched action", action);
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      /* Here no need to preserve the old state */
      return { errorMessage: "", token: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    errorMessage: "",
    token: null,
  });

  const clearErrorMessage = () => {
    dispatch({ type: "clear_error_message" });
  };

  const tryLocalSignin = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "signin", payload: token });
    }
  };

  const signup = async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data);
      dispatch({ type: "signup", payload: response.data });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with the sign up",
      });
    }
  };

  const signin = async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data);
      dispatch({ type: "signin", payload: response.data });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with the sign in",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ state, signup, signin, clearErrorMessage, tryLocalSignin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
