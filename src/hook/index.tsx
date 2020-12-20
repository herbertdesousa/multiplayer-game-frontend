import React from 'react';

import SocketProvider from './socket/context';
import PlayerProvider from './player/context';

const Hooks: React.FC = ({ children }) => {
  return (
    <SocketProvider>
      <PlayerProvider>{children}</PlayerProvider>
    </SocketProvider>
  );
};

export default Hooks;
