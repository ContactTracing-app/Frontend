import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const options = {
  fallbackLng: 'en',
  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  },
  debug: true,
  interpolation: {
    escapeValue: false // not needed for react!!
  },
  react: {
    wait: true,
    useSuspense: false
  }
};

i18n.use(XHR).use(LanguageDetector).use(initReactI18next).init(options);

export default i18n;
