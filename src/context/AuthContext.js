import React, { useReducer } from "react";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AuthContext = React.createContext();

const authReducer = (state, action) => {
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
    case "finish_loading":
      return { ...state, finishLoading: true };
    case "signout":
      return { errorMessage: "", token: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    errorMessage: "",
    token: null,
    finishLoading: false,
  });

  const clearErrorMessage = () => {
    dispatch({ type: "clear_error_message" });
  };

  const tryLocalSignin = async () => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      dispatch({ type: "signin", payload: token });
    }
    dispatch({ type: "finish_loading" });
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

  const signout = async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        signup,
        signin,
        clearErrorMessage,
        tryLocalSignin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
