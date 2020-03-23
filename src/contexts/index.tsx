import * as React from 'react';
import { CounterStore } from '../stores';

export const storesContext = React.createContext({
  counterStore: new CounterStore()
});
