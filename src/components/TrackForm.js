import React from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter track name" />
      </Spacer>
      <Button title="Start Recordering" />
    </>
  );
};

export default TrackForm;