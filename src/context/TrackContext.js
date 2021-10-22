import React, { useReducer } from "react";
import instance from "../api/tracker";
const TrackContext = React.createContext();

const trackReducer = (state, action) => {
  switch (action.type) {
    case "create_track":
      return [
        ...state,
        { name: action.payload.name, locations: action.payload.locations },
      ];
    case "fetch_tracks":
      return action.payload;
    default:
      return state;
  }
};

export const TrackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trackReducer, []);

  const createTrack = async (name, locations) => {
    await instance.post("/tracks", { name, locations });
    dispatch({ type: "create_track", payload: { name, locations } });
  };

  const fetchTracks = async () => {
    const response = await instance.get("/tracks");
    dispatch({ type: "fetch_tracks", payload: response.data });
  };

  return (
    <TrackContext.Provider value={{ state, createTrack, fetchTracks }}>
      {children}
    </TrackContext.Provider>
  );
};

export default TrackContext;
