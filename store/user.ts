import { Reducer } from 'redux';

import { getToken, setToken, removeToken } from '../utils/cookie';
import LocalStore from '../utils/store';


export interface IAction<T> {
  type: string;
  payload: T;
}


export interface UserState {
  token: string;
  account: string;
  id: number;
}

const USER_KEY = 'React-ant-Admin-user';

const localUser = LocalStore.getValue<UserState>(USER_KEY) || {};

const defaultUser: UserState = {
  token: getToken(),
  account: '',
  id: 0,
  ...localUser,
};

const SET_USER_INFO = 'SET_USER_INFO';

const SET_USER_LOGOUT = 'SET_USER_LOGOUT';

export const setUserInfo: (user: UserState) => IAction<UserState> = (user: UserState) => ({
  type: SET_USER_INFO,
  payload: user,
});

export const logout: () => IAction<null> = () => ({
  type: SET_USER_LOGOUT,
  payload: null,
});

const userReducer: Reducer<UserState, IAction<any>> = (
  state = defaultUser,
  action: IAction<any>,
) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_INFO:
      setToken(payload.token);
      LocalStore.setValue(USER_KEY, payload);
      return {
        ...payload,
      };
    case SET_USER_LOGOUT:
      removeToken();
      LocalStore.removeValue(USER_KEY);
      return {
        ...defaultUser,
      };
    default:
      return state;
  }
};

export default userReducer;