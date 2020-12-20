import IPlayerDTO from '@/dtos/IPlayerDTO';
import React from 'react';

import { Container, PlayerContainer } from './styles';

interface IItemProps {
  item: IPlayerDTO;
}

const Item: React.FC<IItemProps> = ({ item }) => {
  return (
    <Container
      style={{
        transform: `translate(${item.position.x}px, ${item.position.y}px)`,
      }}
    >
      <PlayerContainer style={{ backgroundColor: item.color }} />
    </Container>
  );
};

export default Item;
