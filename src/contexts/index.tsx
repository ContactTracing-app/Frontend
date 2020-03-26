import * as React from 'react';
import { UserStore, PersonStore } from '../stores';

export const storesContext = React.createContext({
  userStore: new UserStore(),
  personStore: new PersonStore()
});
