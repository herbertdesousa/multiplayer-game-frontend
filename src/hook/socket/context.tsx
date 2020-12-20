import React, { useCallback, useRef } from 'react';
import io from 'socket.io-client';
import { fromEvent, Observable } from 'rxjs';

import IPlayerDTO from '@/dtos/IPlayerDTO';

import { SocketContext } from '.';

const SocketProvider: React.FC = ({ children }) => {
  const socket = useRef<SocketIOClient.Socket>({} as SocketIOClient.Socket);

  const handleInit = useCallback(
    (player: Omit<IPlayerDTO, 'id'>, setId: (id: string) => void): void => {
      socket.current = io('localhost:3333');
      socket.current.emit('start', player, (_player: IPlayerDTO) => {
        setId(_player.id);
      });
    },
    [],
  );
  const handleDisconnect = useCallback((): void => {
    socket.current.disconnect();
  }, []);

  const handleUpdate = useCallback((updatedPlayer: IPlayerDTO) => {
    socket.current.emit('update', updatedPlayer);
  }, []);

  const handleOnUpdate = useCallback((): Observable<IPlayerDTO[]> => {
    return fromEvent(socket.current, 'update');
  }, []);

  return (
    <SocketContext.Provider
      value={{
        init: handleInit,
        disconnect: handleDisconnect,
        update: handleUpdate,
        onUpdate: handleOnUpdate,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
