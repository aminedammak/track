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
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    errorMessage: "",
    token: null,
  });

  const signup = async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      //await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with the sign up",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ state, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
