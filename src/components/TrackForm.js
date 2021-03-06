import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import { LocationSubscriber } from 'expo-location/build/LocationSubscribers';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const { state: { name, recording }, 
    startRcording, 
    stopRecording, 
    changeName 
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="Enter track name" />
      </Spacer>
      <Spacer>
        { recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : ( 
          <Button title="Start Recordering" onPress={startRcording} />
        )}
      </Spacer>
      <Spacer> 
        {!recording && LocationSubscriber.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;