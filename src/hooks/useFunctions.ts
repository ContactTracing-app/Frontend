import firebase from 'firebase/app';
import 'firebase/functions';
import hasWindow from '../helpers/hasWindow';

let f: firebase.functions.Functions;

interface SendNotificationsCallable {
  uid: string;
}

const useFunctions = () => {
  if (hasWindow) {
    f = firebase.functions();
  }
  return {
    sendNotifications(payload: SendNotificationsCallable) {
      const callable = f.httpsCallable('email-sendNotifications');
      return callable(payload);
    }
  };
};

export default useFunctions;
