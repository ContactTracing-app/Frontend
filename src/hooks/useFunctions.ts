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
    sendTestSMS() {
      const callable = f.httpsCallable('sms-testSMS');
      return callable();
    },
    sendNotifications(payload: SendNotificationsCallable) {
      const callable = f.httpsCallable('notify-sendNotifications');
      return callable(payload);
    }
  };
};

export default useFunctions;
