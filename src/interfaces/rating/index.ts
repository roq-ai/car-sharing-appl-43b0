import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface RatingInterface {
  id?: string;
  score: number;
  comment?: string;
  user_id: string;
  car_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  car?: CarInterface;
  _count?: {};
}

export interface RatingGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  user_id?: string;
  car_id?: string;
}
