import React, { useReducer } from "react";
const LocationContext = React.createContext();

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

export const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, {
    recoding: false,
    locations: [],
    currentLocation: null,
  });
  const startRecording = () => {};
  const stopRecording = () => {};
  const addLocation = (location) => {
    console.log("addlocation");

    dispatch({ type: "add_current_location", payload: location });
  };
  return (
    <LocationContext.Provider
      value={{
        state,
        startRecording,
        stopRecording,
        addLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
