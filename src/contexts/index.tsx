import * as React from 'react';
import { UserStore, PersonStore, LocationStore } from '../stores';

export const storesContext = React.createContext({
  userStore: new UserStore(),
  personStore: new PersonStore(),
  locationStore: new LocationStore()
});
