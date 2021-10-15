import { useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoadingScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
};

export default LoadingScreen;
