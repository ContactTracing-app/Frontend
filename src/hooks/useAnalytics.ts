import firebase from 'firebase/app';
import 'firebase/analytics';
import hasWindow from '../helpers/hasWindow';

let analytics: firebase.analytics.Analytics;

const useAnalytics = () => {
  if (hasWindow) {
    analytics = firebase.analytics();
  }
  return analytics;
};

export default useAnalytics;
