import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import { renderToString } from 'react-dom/server';
import Backend from 'i18next-sync-fs-backend';
import i18n from 'i18next';

// https://mobx-react.js.org/recipes-ssr
import { useStaticRendering } from 'mobx-react-lite';
useStaticRendering(true);

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  i18n
    .use(Backend)
    // load the common namespace
    .loadNamespaces(['common'], () => {
      replaceBodyHTMLString(renderToString(bodyComponent));
    })
    .init({
      initImmediate: false,
      backend: {
        // when this site renders serverside we want to get the locales from the src folder
        loadPath: 'src/locales/{{lng}}/{{ns}}.json'
      }
    });
};

export { wrapRootElement } from './gatsby-browser';
