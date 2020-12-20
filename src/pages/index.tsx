import React from 'react';

import { Player, PlayersOnline } from '@/components';

const Pages: React.FC = () => {
  return (
    <div style={{ height: '100vh', padding: 32 }}>
      <Player />

      <PlayersOnline />
    </div>
  );
};

export default Pages;
