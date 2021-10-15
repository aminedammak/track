import React, { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
export default (callback) => {
  const [error, setError] = useState(null);
  const startWatching = async () => {
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setError("Permission to access location was denied");
      return;
    } else {
      setError(null);
    }
    await watchPositionAsync(
      {
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      },
      callback
    );
  };
  useEffect(() => {
    startWatching();
  }, []);
  return [error];
};
