import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 16px;
  }
`;

export const PlayerContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

export const Button = styled.button`
  background: #8257e6;
  color: #fff;

  border-radius: 4px;
  padding: 8px 16px;

  transition: 0.2s;
  border: 0;
  opacity: 0.2;

  & + & {
    margin-top: 8px;
  }

  &:hover {
    background: ${shade(0.2, '#8257e6')};
    opacity: 1;
  }
`;
