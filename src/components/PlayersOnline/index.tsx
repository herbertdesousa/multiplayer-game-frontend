import React from 'react';

import { usePlayer } from '@/hook/player';

import Item from './Item';

const PlayersOnline: React.FC = () => {
  const { player, playersOnline } = usePlayer();

  return (
    <>
      {playersOnline.map(playerItem =>
        playerItem.id !== player.id ? <Item item={playerItem} /> : <></>,
      )}
    </>
  );
};

export default PlayersOnline;
