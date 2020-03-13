import * as React from 'react';
import * as firebase from 'firebase/app';
import firebaseProvider from 'gatsby-plugin-firebase';

interface FirebaseContext {
  auth: firebase.auth.Auth;
}

export const FirebaseContext = React.createContext<FirebaseContext | null>(
  null
);

export const FirebaseContextProvider: React.FC = ({ children }) => {
  const auth = firebaseProvider.auth();

  return (
    <FirebaseContext.Provider
      value={{
        auth
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
