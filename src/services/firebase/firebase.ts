import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

export type createNewUserProps = {
  uid: string;
  name: string;
};

export const createNewUser = (userData: createNewUserProps) => {
  return firebase
    .firestore()
    .collection('users')
    .doc(`${userData.uid}`)
    .set(userData);
};

export default {
  createNewUser
};
