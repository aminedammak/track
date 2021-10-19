import React, { useReducer } from "react";
const LocationContext = React.createContext();

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "add_location":
      return { ...state, locations: [...state.locations, action.payload] };
    case "change_name":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, {
    name: "",
    recoding: false,
    locations: [],
    currentLocation: null,
  });

  const changeName = (name) => {
    dispatch({ type: "change_name", payload: name });
  };

  const startRecording = () => {
    dispatch({ type: "start_recording" });
  };

  const stopRecording = () => {
    dispatch({ type: "stop_recording" });
  };
  const addLocation = (location, recording) => {
    dispatch({ type: "add_current_location", payload: location });
    if (recording) {
      dispatch({ type: "add_location", payload: location });
    }
  };

  return (
    <LocationContext.Provider
      value={{
        state,
        startRecording,
        stopRecording,
        addLocation,
        changeName,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
