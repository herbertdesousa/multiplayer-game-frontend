import { Observable } from 'rxjs';

import IPlayerDTO from '@/dtos/IPlayerDTO';

export default interface ISocketContextData {
  init(player: Omit<IPlayerDTO, 'id'>, setId: (id: string) => void): void;
  disconnect(): void;
  update(updatedPlayer: IPlayerDTO): void;
  onUpdate(): Observable<IPlayerDTO[]>;
}
