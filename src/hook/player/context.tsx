import React, { useCallback, useEffect, useState } from 'react';

import IPlayerDTO from '@/dtos/IPlayerDTO';

import { randomColor, randomPosition } from '@/functions';

import { PlayerContext } from '.';

const PlayerProvider: React.FC = ({ children }) => {
  const [player, setPlayer] = useState<IPlayerDTO>({
    id: '',
    color: '#ff0',
    position: { x: 0, y: 0 },
  });

  const [playersOnline, setPlayersOnline] = useState<IPlayerDTO[]>([]);

  useEffect(() => {
    const position = randomPosition();
    const color = randomColor();

    setPlayer(state => ({ ...state, color, position }));
  }, []);

  const handleSetId = useCallback((id: string) => {
    setPlayer(state => ({ ...state, id }));
  }, []);

  const handleOnChangeColor = useCallback(() => {
    const color = randomColor();

    setPlayer(state => ({ ...state, color }));
  }, []);

  const handleOnChangePosition = useCallback(() => {
    const position = randomPosition();

    setPlayer(state => ({ ...state, position }));
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        player,
        playersOnline,
        setPlayersOnline,
        setId: handleSetId,
        onChangeColor: handleOnChangeColor,
        onChangePosition: handleOnChangePosition,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
