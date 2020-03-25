import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

// https://mobx-react.js.org/recipes-ssr
import { useStaticRendering } from 'mobx-react-lite';
useStaticRendering(true);
