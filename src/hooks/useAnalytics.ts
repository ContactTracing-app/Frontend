import firebase from 'firebase/app';
import 'firebase/analytics';
import hasWindow from '../helpers/hasWindow';

let analytics: firebase.analytics.Analytics;

interface ContactLogged {
  contact_with_quanitity: number;
}
const useAnalytics = () => {
  if (hasWindow) {
    analytics = firebase.analytics();
  }
  return {
    analytics,
    connectionMade: () => analytics.logEvent('connection_made'),
    contactLogged: (eventParams: ContactLogged) =>
      analytics.logEvent('contact_logged', eventParams),
    contactUnlogged: () => analytics.logEvent('contact_unlogged')
  };
};

export default useAnalytics;
