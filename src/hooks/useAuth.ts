import firebase from 'firebase/app';
import 'firebase/auth';
import hasWindow from '../helpers/hasWindow';

let auth: firebase.auth.Auth;

const useAuth = () => {
  if (hasWindow) {
    auth = firebase.auth();
  }
  return auth;
};

export default useAuth;
