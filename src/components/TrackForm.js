import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import LocationContext from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter name"
          value={name}
          onChangeText={changeName}
        />
      </Spacer>
      {!recording && locations.length ? (
        <Spacer>
          <Button title="Save" onPress={saveTrack} />
        </Spacer>
      ) : null}

      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start recording" onPress={startRecording} />
        )}
      </Spacer>
    </>
  );
};

export default TrackForm;
