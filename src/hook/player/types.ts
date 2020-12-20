import IPlayerDTO from '@/dtos/IPlayerDTO';

interface IPlayerContextData {
  player: IPlayerDTO;
  playersOnline: IPlayerDTO[];
  setPlayersOnline: React.Dispatch<React.SetStateAction<IPlayerDTO[]>>;
  setId(id: string): void;
  onChangeColor(): void;
  onChangePosition(): void;
}

export default IPlayerContextData;
