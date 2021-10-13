import React, { useReducer } from "react";
import trackerApi from "../api/tracker";
const AuthContext = React.createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { errorMessage: "" });

  const signup = async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
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
