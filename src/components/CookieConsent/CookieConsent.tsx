/* eslint-disable react/no-this-in-sfc */
/* eslint-disable object-shorthand */
import * as React from 'react';
import Helmet from 'react-helmet';
import hasWindow from '../../helpers/hasWindow';
import useAnalytics from '../../hooks/useAnalytics';

const CookieConsent: React.FC = () => {
  React.useEffect(() => {
    if (hasWindow) {
      const { analytics } = useAnalytics();
      const handler = () => {
        window.cookieconsent.initialise({
          onInitialise: function (status) {
            if (this.hasConsented('required')) {
            }
            if (this.hasConsented('analytics')) {
              analytics.setAnalyticsCollectionEnabled(true);
            }
            if (this.hasConsented('marketing')) {
            }
          },
          onAllow: function (category) {
            if (category === 'required') {
            }
            if (category === 'analytics') {
              analytics.setAnalyticsCollectionEnabled(true);
            }
            if (category === 'marketing') {
            }
          },
          onRevoke: function (category) {
            if (category === 'required') {
            }
            if (category === 'analytics') {
              analytics.setAnalyticsCollectionEnabled(false);
            }
            if (category === 'marketing') {
            }
          }
        });
      };
      window.addEventListener('load', handler);
      return () => {
        window.removeEventListener('mousemove', handler);
      };
    }
  }, []);

  return (
    <Helmet>
      <script src="https://cookiehub.net/cc/fa90dcf6.js" />
    </Helmet>
  );
};

export default CookieConsent;
