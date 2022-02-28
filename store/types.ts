import { UserState } from "./user";

export interface IAction<T> {
  type: string;
  payload: T;
}

export interface IStoreState {
  user: UserState;
  
}