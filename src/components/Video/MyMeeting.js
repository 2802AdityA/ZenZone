import { useDyteMeeting, useDyteSelector } from '@dytesdk/react-web-core';
import {DyteMeeting} from "@dytesdk/react-ui-kit"
import { useEffect } from 'react';
// import Room from './Room';

export default function AudioRoom() {
  const { meeting } = useDyteMeeting();
  const roomJoined = useDyteSelector((meeting) => meeting.self.roomJoined);

  useEffect(() => {
    meeting.self.on('roomLeft', () => {
      // handle navigation to other screen here after the user has left the room.
      alert("You've left the room");
    });
  }, [meeting]);

  return (
    <div style={{height : '100vh'}}>
        <DyteMeeting
            mode="fill"
            meeting={meeting}
            showSetupScreen={false}
        />
    </div>
  );
}