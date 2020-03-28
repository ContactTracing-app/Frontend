import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
import i18n from './src/i18n';

// https://mobx-react.js.org/recipes-ssr
import { useStaticRendering } from 'mobx-react-lite';
useStaticRendering(true);

export replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  i18n.loadNamespaces(['common'], () => {
    replaceBodyHTMLString(bodyComponent);
  });
};

export { wrapRootElement } from './gatsby-browser';
