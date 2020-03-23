import * as React from 'react';
import { CounterStore, SessionStore } from '../stores';

export const storesContext = React.createContext({
  counterStore: new CounterStore(),
  sessionStore: new SessionStore()
});
