import { observable, decorate, action } from 'mobx';

export interface User {
  token: string;
}

export class SessionStore {
  authUser: User | null = null;

  setAuthUser = (authUser: User) => {
    this.authUser = authUser;
  };
}

decorate(SessionStore, {
  authUser: observable,
  setAuthUser: action
});
