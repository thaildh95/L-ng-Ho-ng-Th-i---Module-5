import {Level} from './Level';

export interface Employee {
  id: number;
  name: string;
  dayOfBirth: string;
  gender: boolean;
  email: string;
  phone: string;
  level: Level;
  position: Position;
}
