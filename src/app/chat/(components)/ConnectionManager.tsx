import React from 'react';
import { socket } from '../socket';

export function ConnectionManager() {
  // const socket = Socket.socket1;
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </>
  );
}