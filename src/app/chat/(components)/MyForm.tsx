import React, { useState } from 'react';
import { socket } from '../socket';

export function MyForm() {
  const [value, setValue] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const socket = Socket.socket1;
  function onSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(3000).emit('chatMessage', value, () => {
      setIsLoading(false);
    });
  }
  const handleClientName = () => {
    // setIsLoading(true);
    // socket.timeout(3000).emit('add-user', userName, () => {
    //   setIsLoading(false);
    // });
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={e => setUserName(e.target.value)} />
      <button type="button" onClick={handleClientName} disabled={isLoading}>user name</button>

      <input onChange={e => setValue(e.target.value)} />

      <button type="submit" disabled={isLoading}>Submit</button>
    </form>
  );
}