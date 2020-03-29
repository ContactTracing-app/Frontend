import firebase from 'firebase/app';
import 'firebase/analytics';
import hasWindow from '../helpers/hasWindow';

let analytics: firebase.analytics.Analytics;

export enum Severity {
  TEST_POSITIVE = 'test_positive',
  SHOWING_SYMPTOMS = 'show_symptoms'
}

const useAnalytics = () => {
  if (hasWindow) {
    analytics = firebase.analytics();
  }
  return {
    analytics,
    connectionMade: () => analytics.logEvent('connection_made'),
    contactLogged: () => analytics.logEvent('contact_logged'),
    contactUnlogged: () => analytics.logEvent('contact_unlogged'),
    settingsChanged: () => analytics.logEvent('settings_changed'),
    notificationSent: (severity: Severity) =>
      analytics.logEvent('settings_changed', { severity })
  };
};

export default useAnalytics;
