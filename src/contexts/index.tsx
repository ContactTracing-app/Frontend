import * as React from 'react';
import { CounterStore, UserStore } from '../stores';

export const storesContext = React.createContext({
  counterStore: new CounterStore(),
  userStore: new UserStore()
});
