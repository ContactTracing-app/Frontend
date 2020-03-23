import { observable, computed, action, decorate } from 'mobx';

export class CounterStore {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  get doubleCount() {
    return this.count * 2;
  }
}

decorate(CounterStore, {
  count: observable,
  doubleCount: computed,
  decrement: action,
  increment: action
});
