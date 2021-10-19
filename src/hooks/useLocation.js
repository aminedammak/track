import { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
export default (shouldTrack, callback) => {
  console.log("shouldTrack value", shouldTrack);

  const [error, setError] = useState(null);
  const [subscriber, setSubscriber] = useState(null);
  const startWatching = async () => {
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setError("Permission to access location was denied");
      return;
    } else {
      setError(null);
    }

    const sub = await watchPositionAsync(
      {
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      },
      callback
    );
    setSubscriber(sub);
  };
  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else if (subscriber) {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);
  return [error];
};
