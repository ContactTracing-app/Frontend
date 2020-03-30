import { observable, decorate, action } from 'mobx';

export interface UserStoreProps {
  next: string | null;
  setNext: (string: string) => void;
  reset: () => void;
}

export class LocationStore implements UserStoreProps {
  next: string | null = null;

  setNext = (next: string) => {
    this.next = next;
  };

  reset = () => {
    this.next = null;
  };
}

decorate(LocationStore, {
  next: observable,
  setNext: action,
  reset: action
});
