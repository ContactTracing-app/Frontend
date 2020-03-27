import firebase from 'firebase/app';
import 'firebase/analytics';
import hasWindow from '../helpers/hasWindow';

let analytics: firebase.analytics.Analytics;

const useAnalytics = () => {
  if (hasWindow) {
    analytics = firebase.analytics();
  }
  return {
    analytics,
    connectionMade: () => analytics.logEvent('connection_made'),
    contactLogged: () => analytics.logEvent('contact_logged'),
    contactUnlogged: () => analytics.logEvent('contact_unlogged')
  };
};

export default useAnalytics;
