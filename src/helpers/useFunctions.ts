import firebase from 'firebase/app';
import 'firebase/functions';
import hasWindow from './hasWindow';

let f: firebase.functions.Functions;

interface LogContactCallable {
  fromUid: string;
  toUid: string;
  date: Date;
}

const useFunctions = () => {
  if (hasWindow) {
    f = firebase.functions();
  }
  return {
    logContact(payload: LogContactCallable) {
      const callable = f.httpsCallable('logContact');
      return callable(payload);
    },

    sendTestSMS() {
      const callable = f.httpsCallable('sms-testSMS');
      return callable();
    }
  };
};

export default useFunctions;
