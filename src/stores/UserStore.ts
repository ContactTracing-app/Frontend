import { observable, decorate, action } from 'mobx';
import { User } from 'firebase';

export interface UserStoreProps {
  setAuthUser: (authUser: User) => void;
  authUser: User | null;
  token: string | null;
  setToken: (string: string) => void;
}

export class UserStore implements UserStoreProps {
  authUser: User | null = null;

  token: string | null = null;

  setAuthUser = (authUser: User) => {
    this.authUser = authUser;
  };

  setToken = (token: string) => {
    this.token = token;
  };
}

decorate(UserStore, {
  authUser: observable,
  token: observable,
  setAuthUser: action,
  setToken: action
});
