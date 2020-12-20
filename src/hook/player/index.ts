import { createContext, useContext } from 'react';

import IPlayerContextData from './types';

const PlayerContext = createContext<IPlayerContextData>(
  {} as IPlayerContextData,
);

const usePlayer = (): IPlayerContextData => {
  const context = useContext(PlayerContext);

  return context;
};

export { PlayerContext, usePlayer };
