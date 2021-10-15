//This is to simulate location movement, util to test on real devices.
import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  console.log("getLocation");

  return {
    timestamp: 10000000,
    coords: {
      heading: 0,
      speed: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -122.03121 + increment * tenMetersWithDegrees,
      latitude: 37.33233 + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
