import React, { useEffect, useMemo, useState } from 'react';

import IPlayerDTO from '@/dtos/IPlayerDTO';

import { useSocket } from '@/hook/socket';
import { usePlayer } from '@/hook/player';

import { Container, PlayerContainer, Button } from './styles';

const Player: React.FC = () => {
  const {
    player,
    setPlayersOnline,
    setId,
    onChangeColor,
    onChangePosition,
  } = usePlayer();
  const { init, disconnect, update, onUpdate } = useSocket();

  useEffect(() => {
    init(player, setId);

    return () => disconnect();
    // !!dont put player on array dependency, it cause loops!!
  }, [disconnect, init, setId]);

  useEffect(() => {
    const observable = onUpdate();

    observable.subscribe((_newPlayersOnline: IPlayerDTO[]) => {
      setPlayersOnline(_newPlayersOnline);
    });
  }, [onUpdate, setPlayersOnline]);

  useEffect(() => {
    update(player);
  }, [player, update]);

  const playerTransform = useMemo((): string => {
    return `translate(${player.position.x}px, ${player.position.y}px)`;
  }, [player.position.x, player.position.y]);

  return (
    <Container style={{ transform: playerTransform }}>
      <PlayerContainer style={{ backgroundColor: player.color }} />

      <div>
        <Button onClick={onChangeColor}>Mudar Cor</Button>
        <Button onClick={onChangePosition}>Mudar Posição</Button>
      </div>
    </Container>
  );
};

export default Player;
