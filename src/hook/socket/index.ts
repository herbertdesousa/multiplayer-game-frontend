import { createContext, useContext } from 'react';

import ISocketContextData from './types';

const SocketContext = createContext({} as ISocketContextData);

const useSocket = (): ISocketContextData => useContext(SocketContext);

export { SocketContext, useSocket };
