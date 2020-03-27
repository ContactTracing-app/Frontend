import { useObjectVal } from 'react-firebase-hooks/database';
import { firebase } from 'gatsby-theme-firebase';

export interface Person {
  uid: string;
  displayName?: string;
  photoURL?: string;
}

interface WithPerson {
  uid: string;
}
const withPerson = ({ uid }: WithPerson) => {
  const [value, loading, error] = useObjectVal<Person>(
    firebase.database().ref(`profiles/${uid}`)
  );

  const displayName =
    value && value.displayName ? value.displayName : 'Anonymous';
  const photoURL =
    value && value.photoURL ? value.photoURL : undefined;

  const person: Person = {
    uid,
    displayName,
    photoURL
  };
  return [person, loading, error];
};

export default withPerson;
